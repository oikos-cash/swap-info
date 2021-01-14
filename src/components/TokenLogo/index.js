import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import PlaceHolder from '../../assets/placeholder.png'
import EthereumLogo from '../../assets/eth.png'

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

const StyledEthereumLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <Image {...rest} alt={''} src={PlaceHolder} size={size} />
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues
  if (address?.toLowerCase() === '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb') {
    address = '0x42456d7084eacf4083f1140d3229471bba2949a8'
  }

  if (address?.toLowerCase() === '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f') {
    address = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'
  }

  if (address?.toLowerCase() === '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={EthereumLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  const mappings = {
      '0xa099cc498284ed6e25f3c99e6d55074e6ba42911': 'https://oikos.exchange/images/synths/sTRX-icon.svg',
      '0xda2853b2bede0e3018f56d47624a413b2abe0831': 'https://oikos.exchange/images/synths/sUSD-icon.svg',
      '0xa614f803b6fd780986a42c78ec9c7f77e6ded13c': 'https://coin.top/production/logo/usdtlogo.png',
      '0x891cdb91d149f23b1a45d9c5ca78a88d0cb44c18': 'https://coin.top/production/upload/logo/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR.png',
      '0xe11cdc164a9d8c1ae19d95b0165278690d39d84b': 'https://oikos.exchange/images/synths/OKS-icon.svg',
      '0xa1402557c4c7a50f958e15c0527a60bf6666c77e': 'https://oikos.exchange/images/synths/sETH-icon.svg',
      '0xE5CB7A7E08Da38E5bC76fd5D97B3aa47AD8f7b99': 'https://oikos.exchange/images/synths/OKS-icon.svg'
  }

 
 //console.log(`mapping for address ${address} is ${mappings[address]}`)
 const path = mappings[address] != '' ? mappings[address] : `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
     address
 )}/logo.png`

  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
