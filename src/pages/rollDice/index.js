import React, {useRef, useState, useEffect} from 'react'
import c from './rolldice.module.css'
import Dice from '../../components/dice'
import Dollar from '../../svg/Dollar'
import Amount from '../../svg/Amount'
import UpChart from '../../svg/UpChart'
import Trophy from '../../svg/Trophy'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default () => {
  const [pendingValue, setPendingValue] = useState(0)
  const [multiplierValue, setMultiplierValue] = useState(0)
  const [durationRoll, setDurationRoll] = useState(5)
  const [winAmountValue, setWinAmountValue] = useState(0)
  const [betState, setBetState] = useState(false)
  const [diceSelections, setDiceSelections] = useState([0, 0, 0, 0, 0, 0])
  const [presetValue, setSetPresetValue] = useState(5)
  const diceRef = useRef(null)
  const handleRoll = (val) => {
    setBetState(true)
    setTimeout(() => {
      diceRef.current.rollAll([presetValue])
    }, 1000)
  }
  const handleRollDone = () => {
    let arr = [...diceSelections]
    let res = arr.find((dice) => dice === presetValue)
    res ? window.alert('kazandınız') : window.alert('kaybettiniz')
    setDiceSelections([0, 0, 0, 0, 0, 0])
  }
  const handleDiceSelect = (val) => {
    let temp = [...diceSelections]
    temp[val - 1] === val ? (temp[val - 1] = 0) : (temp[val - 1] = val)
    setDiceSelections(temp)
  }
  useEffect(() => {
    console.log(diceSelections)
  }, [diceSelections])

  return (
    <div className={c.con}>
      <div className={c.gameCon}>
        <div className={c.gameLeft}>
          <div className={c.field}>
            <Dollar />
            <p className={c.title}>Currency</p>
          </div>
          <div
            style={{width: '100px', height: '30px', border: '1px solid red'}}
          />
          <div className={c.field}>
            <Amount />
            <p className={c.title}>Amount</p>
          </div>
          <div
            style={{width: '100px', height: '50px', border: '1px solid red'}}
          />
          {!betState ? (
            <div
              style={{
                width: '100px',
                height: '50px',
                border: '1px solid red',
                color: '#fff',
              }}
              onClick={handleRoll}
            >
              bet
            </div>
          ) : (
            <div
              style={{
                width: '100px',
                height: '50px',
                border: '1px solid red',
                color: '#fff',
              }}
              onClick={() => setBetState(false)}
            >
              Back
            </div>
          )}
        </div>
        <div className={c.gameRight}>
          <div className={c.gameRightTop}>
            <div className={c.pendingCon}>
              <p className={c.pendingText}>{`Pending ${pendingValue}`}</p>
            </div>
          </div>
          <div className={c.gameRightMid}>
            {!betState ? (
              <>
                <div className={c.diceDivider}>
                  <Dice num={1} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={2} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={3} selector={(val) => handleDiceSelect(val)} />
                </div>
                <div className={c.diceDivider}>
                  <Dice num={4} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={5} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={6} selector={(val) => handleDiceSelect(val)} />
                </div>
              </>
            ) : (
              <ReactDice
                numDice={1}
                // rollTime={durationRoll}
                faceColor={'#fff'}
                dotColor={'#000'}
                borderRadius={'50px'}
                defaultRoll={1}
                disableIndividual
                rollDone={handleRollDone}
                ref={diceRef}
              />
            )}
          </div>
          <div className={c.gameRightBottom}>
            <div className={c.field} style={{marginBottom: '-25px'}}>
              <UpChart />
              <div className={c.textRow}>
                <p className={c.title}>Multiplier:</p>
                <p className={c.title + ' ' + c.colorGreen}>
                  {multiplierValue === 0 ? 'x-' : 'x' + multiplierValue}
                </p>
              </div>
            </div>
            <div className={c.field}>
              <Trophy />
              <div className={c.textRow}>
                <p className={c.title}>Win Amount:</p>
                <p className={c.title + ' ' + c.colorGreen}>
                  {winAmountValue === 0 ? '-' : winAmountValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
