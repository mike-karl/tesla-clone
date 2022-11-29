import React, { MouseEventHandler } from 'react'
import { VscClose } from 'react-icons/vsc'

type Props = {
    isOpen: boolean,
    toggleDialog: MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode,
}

const Dialog = ({isOpen, children, toggleDialog}: Props) => {
  return (
    isOpen ?
    <dialog>
      <div className="dialog-box">
        <button className="x-icon-container" onClick={toggleDialog}>
          <VscClose className='x-icon'/>
        </button>
        {children}
      </div>
    </dialog>
    :
    null
  )
}

export default Dialog