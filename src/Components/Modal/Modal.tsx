import React from 'react';
import './Modal.sass';

type ModalProps = {
    header: string,
    description?: string
    toggle: (bool: boolean) => void
};


function Modal({header, description, toggle}: ModalProps) {
    return <>
        <div className={"modal-container"}>
            <div className={"modal-body"}>
                <button onClick={()=> toggle(false)} className={'modal-close'}>X</button>
                <h1>{header}</h1>
                <p>{description}</p>
            </div>
        </div>
        <div className={"modal-wrapper"} onClick={()=> toggle(false)}/>
    </>
}

export default Modal;