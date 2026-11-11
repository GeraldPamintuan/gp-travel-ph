import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { places, Place } from './data';
import { PAMPANGA_ILLUSTRATION } from './illustrations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  heroFallback = 'data:image/svg+xml,' + encodeURIComponent(PAMPANGA_ILLUSTRATION);
  places = places;
  query = '';
  town = '';
  category = 'All places';
  savedOnly = false;
  selected: Place | null = null;
  chatOpen = false;
  chatInput = '';
  chatResults: Place[] = [];
  categories = [
    'All places',
    'Where to eat',
    'Cafés',
    'Picnic',
    'Running',
    'Sports',
    'Nature',
    'Heritage',
    'Museums',
    'Culture',
    'Family',
  ];
  icons: Record<string, string> = {
    'All places': '✧',
    Nature: '♧',
    Heritage: '⌂',
    Museums: '▥',
    Culture: '❋',
    Family: '☀',
    'Where to eat': '♨',
    Cafés: '☕',
    Picnic: '❀',
    Running: '↝',
    Sports: '⚑',
  };
  towns = [...new Set(places.map((p) => p.town))].sort();
  saved = new Set<number>();
  messages = [
    {
      user: false,
      text: 'Mabuhay! I’m Buddy, your travel companion. Looking for food, cafés, a picnic, a run, sports, or sightseeing? Tell me a town or what you enjoy.',
    },
  ];
  suggestions = ['Saan may kape?', 'Where can I run?', 'Picnic sa Clark'];
  constructor() {
    try {
      const value = JSON.parse(
        (localStorage.getItem('galabuddy-saved') ?? localStorage.getItem('lakbay-saved')) || '[]',
      );
      if (Array.isArray(value)) this.saved = new Set(value.filter((x) => typeof x === 'number'));
    } catch {}
    this.loadImages();
  }
  get filtered() {
    const q = this.query.toLowerCase().trim();
    return this.places.filter(
      (p) =>
        (!this.savedOnly || this.saved.has(p.id)) &&
        (!this.town || p.town === this.town) &&
        (this.category === 'All places' ||
          p.category === this.category ||
          p.activities?.includes(this.category)) &&
        (!q ||
          `${p.name} ${p.town} ${p.category} ${(p.activities || []).join(' ')} ${p.description}`
            .toLowerCase()
            .includes(q)),
    );
  }
  toggle(p: Place) {
    this.saved.has(p.id) ? this.saved.delete(p.id) : this.saved.add(p.id);
    try {
      localStorage.setItem('galabuddy-saved', JSON.stringify([...this.saved]));
    } catch {}
  }
  reset() {
    this.query = '';
    this.town = '';
    this.category = 'All places';
    this.savedOnly = false;
  }
  mapUrl(p: Place) {
    return (
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent(p.name + ', ' + p.town + ', Pampanga, Philippines')
    );
  }
  wikiUrl(p: Place) {
    if (p.source) return p.source;
    return 'https://en.wikipedia.org/wiki/' + encodeURIComponent(p.wiki.replaceAll(' ', '_'));
  }
  async loadImages() {
    await Promise.all(
      this.places.map(async (p) => {
        try {
          if (!p.wiki) return;
          if (
            [
              'Clark Freeport and Special Economic Zone',
              'Porac',
              'Floridablanca, Pampanga',
              'Sky Ranch',
            ].includes(p.wiki)
          )
            return;
          const url =
            'https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages&piprop=thumbnail%7Cname&pilicense=free&redirects=1&pithumbsize=800&titles=' +
            encodeURIComponent(p.wiki);
          const response = await fetch(url);
          if (!response.ok) return;
          const data = await response.json();
          const page: any = Object.values(data.query.pages)[0];
          p.image = page.thumbnail?.source;
          p.credit = page.pageimage
            ? 'https://en.wikipedia.org/wiki/File:' + encodeURIComponent(page.pageimage)
            : undefined;
        } catch {}
      }),
    );
  }
  ask(input: string) {
    const text = input.trim().slice(0, 500);
    if (!text) return;
    this.messages.push({ user: true, text });
    const q = text.toLowerCase();
    if (/\b(hours|open|fee|price|ticket|oras|magkano)\b/.test(q)) {
      this.chatResults = [];
      this.messages.push({
        user: false,
        text: 'I don’t have verified live prices or opening hours. Open a destination’s reference and confirm with its operator before travelling.',
      });
      return;
    }
    const category = /cafe|café|coffee|kape/.test(q)
      ? 'Cafés'
      : /eat|food|restaurant|kain|pagkain|sisig/.test(q)
        ? 'Where to eat'
        : /picnic|piknik/.test(q)
          ? 'Picnic'
          : /run|jog|takbo/.test(q)
            ? 'Running'
            : /sport|golf/.test(q)
              ? 'Sports'
              : /nature|hike|mountain|bundok|falls|outdoor|ibon/.test(q)
                ? 'Nature'
                : /museum|museo/.test(q)
                  ? 'Museums'
                  : /heritage|church|history|simbahan/.test(q)
                    ? 'Heritage'
                    : /family|kids|bata|pamilya/.test(q)
                      ? 'Family'
                      : /culture|kultura/.test(q)
                        ? 'Culture'
                        : '';
    const town = q.includes('clark')
      ? 'Mabalacat'
      : this.towns.find((t) => q.includes(t.toLowerCase()));
    const named = this.places.find((p) => q.includes(p.name.toLowerCase()));
    this.chatResults = named
      ? [named]
      : this.places
          .filter(
            (p) =>
              (!category || p.category === category || p.activities?.includes(category)) &&
              (!town || p.town === town),
          )
          .slice(0, 4);
    if (
      !category &&
      !town &&
      !named &&
      !/recommend|suggest|pampanga|spot|place|pasyal|punta|hello|hi|tara/.test(q)
    ) {
      this.chatResults = [];
      this.messages.push({
        user: false,
        text: 'I can help search this Pampanga guide by town, place name, or interest. Try “saan kakain”, “kape”, “picnic”, “takbo”, or “golf in Clark”.',
      });
    } else
      this.messages.push({
        user: false,
        text: this.chatResults.length
          ? 'Tara! Here are a few places from our curated guide' +
            (town ? ' in ' + town : '') +
            '. Tap a place for details and directions.'
          : 'Wala pa akong match for that combination. Try another town or a broader interest.',
      });
  }
}
