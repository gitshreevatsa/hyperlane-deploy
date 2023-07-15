import { ChainMap, MultisigIsmConfig } from '@hyperlane-xyz/sdk';

export const multisigIsmConfig: ChainMap<MultisigIsmConfig> = {
  // ----------- Your chains here -----------------

  tevmos: {
    threshold: 1,
    validators: [
      '0xecac53381361BD5c4356dee603762211cEBA0D2d',
      '0x1Cb30cb181D7854F91c2410BD037E6F42130e860',
      '0x821d8a570fc0098e22eee4221529b10c9d8ce48a',
      '0x5c690e1ba18c92c2b92b89e096db93d3dec0faa0',
    ],
  },
  
  polygonzkevmtestnet: {
    threshold: 1,
    validators: [
      '0xecac53381361BD5c4356dee603762211cEBA0D2d',
      '0x1Cb30cb181D7854F91c2410BD037E6F42130e860',
      '0x821d8a570fc0098e22eee4221529b10c9d8ce48a',
      '0x5c690e1ba18c92c2b92b89e096db93d3dec0faa0',
    ],
  },
  shardeumsphinxdapp1: {
    threshold: 1,
    validators: [
      '0xecac53381361BD5c4356dee603762211cEBA0D2d',
      '0x1Cb30cb181D7854F91c2410BD037E6F42130e860',
      '0x821d8a570fc0098e22eee4221529b10c9d8ce48a',
      '0x5c690e1ba18c92c2b92b89e096db93d3dec0faa0',
    ],
  },
  chiado: {
    threshold: 1,
    validators: [
      '0xecac53381361BD5c4356dee603762211cEBA0D2d',
      '0x1Cb30cb181D7854F91c2410BD037E6F42130e860',
      '0x821d8a570fc0098e22eee4221529b10c9d8ce48a',
      '0x5c690e1ba18c92c2b92b89e096db93d3dec0faa0',
    ],
  },
  filecoincalibrationtestnet: {
    threshold: 1,
    validators: [
      '0xecac53381361BD5c4356dee603762211cEBA0D2d',
      '0x1Cb30cb181D7854F91c2410BD037E6F42130e860',
      '0x821d8a570fc0098e22eee4221529b10c9d8ce48a',
      '0x5c690e1ba18c92c2b92b89e096db93d3dec0faa0',
    ],
  },
  testnet5irechain: {
    threshold: 1,
    validators: [
      '0xecac53381361BD5c4356dee603762211cEBA0D2d',
      '0x1Cb30cb181D7854F91c2410BD037E6F42130e860',
      '0x821d8a570fc0098e22eee4221529b10c9d8ce48a',
      '0x5c690e1ba18c92c2b92b89e096db93d3dec0faa0',
    ],
  },
  scrollalphatestnet: {
    threshold: 1,
    validators: [
      '0xecac53381361BD5c4356dee603762211cEBA0D2d',
      '0x1Cb30cb181D7854F91c2410BD037E6F42130e860',
      '0x821d8a570fc0098e22eee4221529b10c9d8ce48a',
      '0x5c690e1ba18c92c2b92b89e096db93d3dec0faa0',
    ],
  },
  basegoerli: {
    threshold: 1,
    validators: [
      '0xecac53381361BD5c4356dee603762211cEBA0D2d',
      '0x1Cb30cb181D7854F91c2410BD037E6F42130e860',
      '0x821d8a570fc0098e22eee4221529b10c9d8ce48a',
      '0x5c690e1ba18c92c2b92b89e096db93d3dec0faa0',
    ],
  },
};
