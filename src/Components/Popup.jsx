import React from 'react'
import '../CSS/popup.css'

const Popup = ({title, iconPopup, messagePopup}) => {
    return (
        <div className='popup'>
            <div className="Content-popup">
                <div className="title-popup">
                    <h1>{title}lorrrem</h1>
                </div>
                <div className="icon-popup">
                    { iconPopup } V
                </div>
                <div className="message-popup">
                    { messagePopup } USUÁRIO AUTENTICADO COM SUCESSO!
                </div>
            </div>
        </div>
    )
}

export default Popup