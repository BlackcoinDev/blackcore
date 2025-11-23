module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p')
  },
  BLK: {
    lib: require('bitcore-lib-blk'),
    p2p: require('bitcore-p2p-blk')
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash')
  }
};
