import { BaseModule } from '..';
import { BLKStateProvider } from '../../providers/chain-state/blk/blk';
import { IUtxoNetworkConfig } from '../../types/Config';
import { VerificationPeer } from '../bitcoin/VerificationPeer';
import { BlackcoinP2PWorker } from './p2p';

export default class BLKModule extends BaseModule {
  constructor(services: BaseModule['bitcoreServices'], chain: string, network: string, _config: IUtxoNetworkConfig) {
    super(services);
    services.Libs.register(chain, 'bitcore-lib-blk', 'bitcore-p2p-blk');
    services.P2P.register(chain, network, BlackcoinP2PWorker);
    services.CSP.registerService(chain, network, new BLKStateProvider());
    services.Verification.register(chain, network, VerificationPeer);
  }
}
