import { InternalStateProvider } from '../internal/internal';

export class BLKStateProvider extends InternalStateProvider {
  constructor(chain: string = 'BLK') {
    super(chain);
  }
}
