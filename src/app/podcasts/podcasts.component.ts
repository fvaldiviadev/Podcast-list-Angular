import { Component, OnInit } from '@angular/core';
import { Podcast } from '../podcast';
import { PODCASTS } from '../mock-podcasts';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {


  podcasts=PODCASTS;


  constructor() { }

  ngOnInit() {
  }


}
