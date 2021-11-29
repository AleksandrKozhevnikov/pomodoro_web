import styled, {keyframes} from 'styled-components'
import {fadeIn} from 'react-animations'
import { SECOND_COLOR, MAIN_COLOR, WHITE_COLOR, THIRD_COLOR, THIRD_COLOR_SMOOTH, WARNING_COLOR } from '../utils/colors'

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${WHITE_COLOR};
    width: 28rem;
    height: max-content;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.6rem;
    background-color: ${MAIN_COLOR};
    width: 100%;
`
export const CloseButton = styled.button`
    width: 5.5rem;
    height: 2.6rem;
    background-color: ${WHITE_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 200ms ease-in-out;
    border: none;
    font-weight: 300;
    font-size: 0.8rem;
    :hover {
        background-color: ${MAIN_COLOR};
        color: ${SECOND_COLOR}
    }
`
export const ModalTitle = styled.h2`
    color: ${WHITE_COLOR};
    margin: 0;
    font-size: 0.9rem;
    margin-left: 1rem;
    font-weight: 500;
`
export const RegistrationForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    height: 10rem;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    height: 7rem;
`

export const Input = styled.input`
    width: 17rem;
    height: 2rem;
    padding-left: 10px;
    color: ${MAIN_COLOR};
    font-weight: 300;
    outline: none;
    transition: 300ms ease all;
    border: none;
    animation: 800ms ${keyframes`${fadeIn} infinite`};
    border-bottom: 1px solid ${MAIN_COLOR};
    text-align: center;
    :focus {
        border: none;
        transition: 300ms ease;
        border-bottom: 1px solid ${WHITE_COLOR};
        box-shadow: 0px 6px 10px -3px ${THIRD_COLOR_SMOOTH};
        border-radius: 5px;
        ::placeholder {
            opacity: 0;
            color: ${THIRD_COLOR};
            font-size: 0.8rem;
        }
    }
    :hover {
        ::placeholder {
            opacity: 1;
            font-size: 0.8rem;
        }
    }
    ::placeholder {
        transition: 300ms;
        opacity: 0.6;
        font-size: 0.7rem;
        font-weight: 300;
        font-family: Roboto;
    }
`

export const InputWarningMessage = styled.p`
    color: ${WARNING_COLOR};
    animation: 500ms ${keyframes`${fadeIn} infinite`};
    font-size: 0.8rem;
    margin: 0;
    margin-left: 10px
`

export const InputSuccessMessage = styled.div`
    animation: 500ms ${keyframes`${fadeIn} infinite`};
    margin-left: 10px;
`

export const FormButton = styled.button`
    width: 100%;
    height: 2.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    cursor: pointer;
    background-color: ${THIRD_COLOR};
    border: none;
    color: ${WHITE_COLOR};
    transition: ease 300ms;
    outline: none;
    font-weight: 600;
    font-size: 0.8rem;
    :hover {
        box-shadow: 0px -6px 12px -1px ${THIRD_COLOR_SMOOTH};
    }
`
