import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '../Button'

import c from './modal.module.css'
import {setDefaultModal} from '../../Redux/Actions/element'
import classcat from 'classcat'

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
      </div>
    </div>
  )
}

export default DefaultModal
