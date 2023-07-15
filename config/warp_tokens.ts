import { TokenType } from '@hyperlane-xyz/hyperlane-token';

import type { WarpRouteConfig } from '../src/warp/config';

// A config for deploying Warp Routes to a set of chains
// Not required for Hyperlane core deployments
export const warpRouteConfig: WarpRouteConfig = {
  base: {
    chainName: 'tevmos',
    type: TokenType.native,
  },
  synthetics: [
    {
      chainName: 'sepolia',
    },
    {
      chainName: 'mumbai',
    },
    {
      chainName: 'polygonzkevmtestnet',
    },
  ],
};
