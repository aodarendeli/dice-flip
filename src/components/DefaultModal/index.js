import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '../Button'
import {BsCurrencyBitcoin,BsSun,BsMoon} from 'react-icons/bs'
import c from './modal.module.css'
import {setDefaultModal} from '../../Redux/Actions/element'
import classcat from 'classcat'
import {GoUnmute,GoMute} from 'react-icons/go'

function DefaultModal() {
  const dispatch = useDispatch()

  const modalData = useSelector((selector) => selector?.elements?.defaultModal)
  console.log(modalData)

  const modalRef = useRef()
  useEffect(() => {
    if (modalRef.current) modalRef.current.style.opacity = 1
  }, [modalData])

  if (!modalData) return null

  const closeModal = () => {
    if (modalData.onClose) modalData.onClose()

    dispatch(setDefaultModal(false))
  }

  return (
    <div
      ref={modalRef}
      className={c.container}
      data-modal_container={true}
      onClick={(e) => {
        if (e.target instanceof Element && e.target.dataset.modal_container)
          closeModal()

        if (modalData.closeOnClickOutSide) closeModal()
      }}
    >
      <div className={classcat([c.popup, modalData.image && c.imageMode])}>
        {!modalData.hideCloseButton && (
          <div
            onClick={closeModal}
            className={c.close}
            dangerouslySetInnerHTML={{__html: '&times'}}
          />
        )}
        {modalData.icon && (
          <img
            className={classcat([
              c.icon,
              modalData.iconSize === 'large' && c.largeIcon,
            ])}
            src={modalData.icon}
            alt=''
          />
        )}
        {modalData.image && (
          <div className={c.imageContainer}>
            <div className={c.imageBg} />
            <img src={modalData.image} className={c.image} alt='' />
          </div>
        )}
        {modalData.title && (
          <div className={c.title} id='default-modal-title'>
            {modalData.title}
          </div>
        )}

        {modalData.message && (
          <div
            className={c.message}
            dangerouslySetInnerHTML={{__html: modalData.message}}
            style={{fontWeight: modalData.fontWeight || 'normal'}}
          />
        )}

        {modalData.button && (
          <Button
            text={modalData.button}
            className={c.button}
            onClick={() => {
              if (modalData.onClick) modalData.onClick()

              if (!modalData.preventCloseOnClick) closeModal()
            }}
          />
        )}
        {modalData.cancel && (
          <Button
            text={modalData.cancel || 'Vazgeç'}
            textButton
            className={c.cancel}
            onClick={() => {
              if (modalData.onCancel) modalData.onCancel()

              closeModal()
            }}
          />
        )}

        {
          modalData.type === 'profile' && (
            <div className='container d-flex row'>
              <h2>Connect Your Wallet</h2>
              <hr className={c.hr} />

              <div className={c.profileMeta + ' mt-3 d-flex justify-content-between align-items-center'}>
                  <span>Metamask</span>
                  <BsCurrencyBitcoin />
              </div>
              <div className={c.profileCoinbase + ' mt-3 d-flex justify-content-between align-items-center'}>
                  <span>Coinbase</span>
                  <BsCurrencyBitcoin />
              </div>
              <div className={c.profileWallet + ' mt-3 d-flex justify-content-between align-items-center'}>
                  <span>Wallet Connect</span>
                  <BsCurrencyBitcoin />
              </div>
              <div className={c.profileDomain + ' mt-3 d-flex justify-content-between align-items-center'}>
                  <span>Unstopable Domains</span>
                  <BsCurrencyBitcoin />
              </div>
            </div>
          )
        }

        {
          modalData.type === 'settings' && (
            <div className='container d-flex row'>
              <h2>Settings</h2>
              <hr className={c.hr} />
              <div className='container mt-2'>
                <div className='row'>
                    <div className='col-6'>
                      <h3>Sounds</h3>
                    </div>
                    <div className='col-6'>
                      <h3>Thema</h3>
                    </div>
                </div>
              </div>
              <div className={c.gap + ' mt-3 d-flex justify-content-between align-items-center'}  style={{columnGap: "30px"}}>
              
                  <div className={c.amountReducer + ' w-100 d-flex bg-dark'} style={{columnGap: "20px"}}>
                  <span className={c.amountReduce + ' w-100 d-flex justify-content-center'} style={{backgroundColor:"#151A1E"}}>
                      <GoUnmute className={c.icons}/>
                    </span>
                    <span className={c.amountReduce + ' w-100 d-flex justify-content-center'} style={{backgroundColor:"#151A1E"}}>
                      <GoMute />
                    </span>
                  </div>
                  <div className={c.amountReducer + ' w-100 d-flex bg-dark'} style={{columnGap: "20px"}}>
                    <span className={c.amountReduce + ' w-100 d-flex justify-content-center'} style={{backgroundColor:"#151A1E"}}>
                      <BsMoon className={c.icons}/>
                    </span>
                    <span className={c.amountReduce + ' w-100 d-flex justify-content-center'} style={{backgroundColor:"#151A1E"}}>
                      <BsSun />
                    </span>
                  </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default DefaultModal
