import { Injectable } from '@angular/core';
import { Podcast } from './podcast';
import { Observable, of, observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Top100PodcastResponse } from './top100Podcast';


const baseURL='https://itunes.apple.com/';

@Injectable({
  providedIn: 'root'
})


export class PodcastService {


  top100 : Observable<Podcast[]>;
  top100Response : Observable<Top100PodcastResponse>;

  private top100PodcastURL = baseURL+'us/rss/toppodcasts/limit=100/genre=1310/json';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }


  /*getPodcasts() : Observable<Podcast[]>{
    this.messageService.add('Podcasts loaded');
    return of(PODCASTS);
  }*/

  /** GET Top 100 podcasts from the server */
    getTop100Podcasts() : Observable<Podcast[]>{

      this.http.get(this.top100PodcastURL)
      .subscribe(data => {
        console.log(data);
      });

    this.top100 = this.http.get<Podcast[]>(this.top100PodcastURL);
    console.log("TOP 100: " + this.top100);
    
    /*this.http.get(this.top100PodcastURL).subscribe(data => {
      console.log(data);
    });
    */
    return this.top100;
    //return this.http.get<Podcast[]>(this.top100PodcastURL);

    
  }

  /** GET Top 100 podcasts from the server */
  getTop100() : Observable<Top100PodcastResponse>{
    this.top100Response=this.http.get<Top100PodcastResponse>(this.top100PodcastURL);
    console.log(this.top100Response);
    return this.top100Response;
  }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`PodcastService: ${message}`);
}
}
