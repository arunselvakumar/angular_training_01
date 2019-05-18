import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.scss']
})
export class ArtistAlbumListComponent {
  private albums: any[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${
            params['artistId']
            }&entity=album`,
          'callback'
        )
        .toPromise()
        .then(res => {
          console.log(res);
          // @ts-ignore
          this.albums = res.results.slice(1);
        });
    });
  }

}
