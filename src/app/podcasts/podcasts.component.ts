import { Component, OnInit } from '@angular/core';
import { Podcast } from '../podcast';
import { PodcastService } from '../podcast.service';
import { Top100PodcastResponse } from '../top100Podcast';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {


  podcasts : Podcast[];
  selectedPodcast:Podcast;
  top100:Top100PodcastResponse;


  constructor(private podcastService : PodcastService) { }

  ngOnInit() {
    this.getTop100();
  }

  onSelect(podcast: Podcast): void {
    this.selectedPodcast = podcast;
    console.log("Podcast selected: "+podcast.id);
  }

  getPodcasts() : void {
    this.podcastService.getTop100Podcasts()
    .subscribe(podcasts => this.podcasts=podcasts);
  }

  getTop100() : void {
    this.podcastService.getTop100()
    .subscribe(data => this.podcasts=data.feed.entry);
  }


}
