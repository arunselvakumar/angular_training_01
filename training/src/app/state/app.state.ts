import {BlockchainModel} from '../models/blockchain.model';

export interface AppState {
  readonly blockChain: BlockchainModel[];
}
