import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {Observable} from 'rxjs';
import {BlockchainModel} from '../../models/blockchain.model';

@Component({
  selector: 'app-coins-display',
  templateUrl: './coins-display.component.html',
  styleUrls: ['./coins-display.component.scss']
})
export class CoinsDisplayComponent implements OnInit {

  coins$: Observable<BlockchainModel[]>;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
    this.coins$ = this.store.select(state => state.blockChain);
  }

}
