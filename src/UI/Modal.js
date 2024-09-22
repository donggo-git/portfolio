import React from 'react'
import styled from 'styled-components'

function Modal({ onclickModal, isExist }) {
    return (
        <ModalContainer isExist={isExist} onClick={onclickModal}>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    display: ${({ isExist }) => isExist ? 'block' : 'none'};
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    position: fixed;
`

export default Modal