import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Podcast } from './podcast';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const podcasts: Podcast[] = [
      { id: 1, title: 'All songs considered',author: 'NPR',description:'',imgSrc:'' },
      { id: 2, title: 'Kexp song of the day',author: 'KEXP',description:'',imgSrc:'' },
      { id: 3, title: 'Song exploder',author: 'Song Exploder',description:'',imgSrc:'' },
      { id: 4, title: 'Music on fire podcast',author: 'Georges',description:'',imgSrc:'' },
      { id: 5, title: 'All 5',author: 'NPR',description:'',imgSrc:'' },
      { id: 6, title: 'All 6',author: 'NPR',description:'',imgSrc:'' },
      { id: 7, title: 'All 7',author: 'NPR',description:'',imgSrc:'' },
      { id: 8, title: 'All 8',author: 'NPR',description:'',imgSrc:'' }
    ];
    return {podcasts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(podcasts: Podcast[]): number {
    return podcasts.length > 0 ? Math.max(...podcasts.map(hero => hero.id)) + 1 : 11;
  }
}