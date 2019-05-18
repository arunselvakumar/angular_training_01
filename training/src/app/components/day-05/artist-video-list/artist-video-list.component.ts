import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-artist-video-list',
  templateUrl: './artist-video-list.component.html',
  styleUrls: ['./artist-video-list.component.scss']
})
export class ArtistVideoListComponent {

  private videos: any[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${
            params['artistId']
            }&entity=musicVideo`,
          'callback'
        )
        .toPromise()
        .then(res => {
          console.log(res);
          // @ts-ignore
          this.videos = res.results.slice(1);
        });
    });
  }
}
