import React, {useState, useEffect} from 'react'
import './coin.css'
import CoinIcon from '../../svg/CoinIcon'

export default ({state, theChoice, ind, flipping}) => {
  const [result, setResult] = useState({res: 'heads', refresh: 'initial'})
  const [selected, setSelected] = useState('T')
  useEffect(() => {
    setResult(state)
    // console.log('state')
    // console.log(state)
    // console.log('state')
    !flipping && setSelected('T')
  }, [state])

  useEffect(() => {
    theChoice({coinInd: ind, res: 'tails'})
  }, [])
  //{coinInd:ind,choice:'heads'}
  return (
    <div className='coinCon mx-auto'>
      <p>{`Coin ${ind + 1}`}</p>
      <p>{result.res}</p>
      <div id='coin' className={result.res}>
        <div className='side-a mx-auto'>
          <img className="mx-auto" alt='coin' src={require('../../assets/images/coin.png')} />
          <p className='coinT'>T</p>
        </div>
        <div className='side-b'>
          <img alt='coin' src={require('../../assets/images/coin.png')} />

          <p className='coinT'>H</p>
        </div>
      </div>
      <div className='d-flex mt-2 justify-content-between amountValue ms-2'>
            <div className='amountReduce mx-2'>1</div>
            <div className='amountReduce mx-2'>2</div>
      </div>
        {/* <p
          className={selected === 'H' ? 'choiceSelected' : 'choiceUnselected'}
          onClick={() => {
            setSelected('H')
            setResult({res: 'heads'})
            theChoice({coinInd: ind, res: 'heads'})
          }}
        >
          H
        </p>
        <p
          className={selected === 'T' ? 'choiceSelected' : 'choiceUnselected'}
          onClick={() => {
            setSelected('T')
            setResult({res: 'tails'})
            theChoice({coinInd: ind, res: 'tails'})
          }}
        >
          T
        </p> */}
    </div>
  )
}
