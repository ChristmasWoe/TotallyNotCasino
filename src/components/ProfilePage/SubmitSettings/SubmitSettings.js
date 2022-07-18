import React from 'react'
import './SubmitSettings.css'

const SubmitSettings = () => {
    return <div className='submit-block'>
        <div className='submit-title'>Для подтверждения Вам придет смс-уведомление на телефон</div>
        <input className='submit-code' placeholder='Код подтверждения'></input>
    </div>  
}

export default SubmitSettings