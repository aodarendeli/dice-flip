import React, {useState, useEffect} from 'react'
import './coinflip.css'
import Coin from '../../components/coin'
import {useDispatch} from 'react-redux'
import {
  setDefaultModal,
  setErrorModal,
  setWarningModal,
  setSuccessModal,
} from '../../Redux/Actions/element'

export default () => {
  const [coinNum, setCoinNum] = useState([{res: '', refresh: 'initial'}])
  const [userChoices, setUserChoices] = useState([
    {coinInd: 0, res: 'tails'},
    {coinInd: 1, res: 'tails'},
    {coinInd: 2, res: 'tails'},
    {coinInd: 3, res: 'tails'},
  ])
  const [response, setResponse] = useState([
    {res: 'heads'},
    {res: 'tails'},
    {res: 'heads'},
    {res: 'tails'},
  ])
  const [flipping, setFlipping] = useState(false)
  const dispatch = useDispatch()
  const handleNumberOfCoins = (num) => {
    let temp = []
    for (let i = 0; i < num; i++) {
      temp.push({res: 'tails', refresh: 'initial'})
    }
    console.log(temp)
    setCoinNum([...temp])
    handleChoices()
  }

  useEffect(() => {
    // console.log(coinNum)
  }, [coinNum])

  const handleFlip = async () => {
    await setFlipping(true)
    let temp = [...coinNum]
    let arr = []

    //coinleri resetliyor
    for (let i = 0; i < temp.length; i++) {
      arr.push({refresh: Math.random()})
    }
    setTimeout(() => {
      setCoinNum([...arr])
    }, 100)

    //coinlerin değerlerini belirliyor
    let result = []
    setTimeout(() => {
      for (let i = 0; i < temp.length; i++) {
        result.push(response[i])
      }
      setCoinNum([...result])
      // console.log(result)
    }, 200)
    console.log(userChoices)

    //Karşılaştırma yapıyor
    setTimeout(() => {
      let numberOfCoins = coinNum.length
      let choices = []
      for (let i = 0; i < numberOfCoins; i++) {
        choices[i] = userChoices[i].res
      }
      console.log(choices)

      let ff = [...result]
      // debugger
      for (let i = 0; i < ff.length; i++) {
        if (ff[i].res !== choices[i]) {
          console.log('lose')
        } else {
          console.log('win')
        }
      }
      console.log(choices)
    }, 500)
    dispatch(
      setSuccessModal({
        title: 'Kazandınız',
        message: 'helallan amına goduum',
        button: 'TamamKes',
        cancel: 'vazgeç',
      })
    )

    setTimeout(() => {
      setFlipping(false)
    }, 5000)
  }
  // useEffect(() => {
  //   handleChoices
  // }, [coinNum])

  const handleChoices = (val) => {
    // {coinInd:ind,choice:'heads'} gelen val değeri örneği
    if (val) {
      let choices = [...userChoices]
      for (let i = 0; i < choices.length; i++) {
        if (choices[i].coinInd === val.coinInd) {
          choices[i].res = val.res
        }
      }
      setUserChoices(choices)
    } else {
      setUserChoices([
        {coinInd: 0, res: 'tails'},
        {coinInd: 1, res: 'tails'},
        {coinInd: 2, res: 'tails'},
        {coinInd: 3, res: 'tails'},
      ])
    }
  }

  useEffect(() => {
    console.log(userChoices)
  }, [userChoices])

  return (
    <div className='con'>
      <div className='deneme' onClick={() => handleNumberOfCoins(1)}>
        1
      </div>
      <div className='deneme' onClick={() => handleNumberOfCoins(2)}>
        2
      </div>
      <div className='deneme' onClick={() => handleNumberOfCoins(3)}>
        3
      </div>
      <div className='deneme' onClick={() => handleNumberOfCoins(4)}>
        4
      </div>
      <div className='deneme' onClick={!flipping && handleFlip}>
        Flip
      </div>
      <div className='diceCon'>
        {coinNum.map((item, index) => {
          return (
            <>
              <Coin
                key={index}
                state={coinNum[index]}
                ind={index}
                flipping={flipping}
                theChoice={(val) => {
                  handleChoices(val)
                }}
              />
            </>
          )
        })}
      </div>
    </div>
  )
}
