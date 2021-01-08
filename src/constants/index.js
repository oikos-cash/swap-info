export const FACTORY_ADDRESS = '0x040A3d84309784628290b9f3437874868beE30Af'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  THREE_MONTHS: '3 months',
  YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0x130e4c9746e2f7b0a9d1f5eab71aa13896037ae8',
  '0x7c503a569a8e62210bdce6b3e733272e154d08ab',
  '0x18fd0626daf3af02389aef3ed87db9c33f638ffa',
  '0x400e3a5eaedd27b4d9193de2bf442e1d072d5a5c',
  '0x834295921a488d9d42b4b3021ed1a3c39fb0f03e',
  '0x8ce2b3fc3e8ad8fad36973a386547fb8a97326e0',
  '0x8caeea9c7ebb8840ee4b49d10542b99cec6ffbc6',
  '0x8b33466852efc1272ab4e2a27a5a504bd18fd9ac',
  '0x9a609902ca627381ebf8ac20d765f2df21bec7f3'
]

// pair blacklist
export const PAIR_BLACKLIST = ['0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5', 
                               '0xa9545CFe49F917EA73aFB1396Bb2d813979679BD',
                               '0x61C9b7B424D7bDC181D5A6b2237b618c806d3a4E',
                               '0x81c05c9067064a32a32fa270562a21cbea58d638',
                               '0x9d0e43bb37d013fac1fd37d6a293406955ebecf9',
                               '0x8a87e092b8ab7ba82250db8cb742cb2aef2f8218',
                               '0x804fc207b5cfdff2cba0293e88ffb5d428d08df0',
                               '0x8acbf441a1735f894e23c3dd14da1299db0728ab',
                               '0x43965424c16ff65c2d85ffe6514c1585890b99aa',
                               '0xa9545cfe49f917ea73afb1396bb2d813979679bd',
                               '0xf196517a21085ca1847e66666829f69fc2bea383',
                               '0x61c9b7b424d7bdc181d5a6b2237b618c806d3a4e',
                               '0xd5ad3e87478ff81569fab51fcab663d224e00a89'] 

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']
