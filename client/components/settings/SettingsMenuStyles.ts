import styled, {keyframes} from 'styled-components'
import {fadeIn, fadeInRightBig} from 'react-animations'
import { MAIN_COLOR, THIRD_COLOR_SMOOTH, THIRD_COLOR, WHITE_COLOR, WARNING_COLOR, GREY_COLOR, SECOND_COLOR, MODAL_LAYOUT_COLOR } from '../../utils/colors'


export const SettingsModal = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${MAIN_COLOR};
    padding-top: 2rem;
    border-bottom-left-radius: 8px;
`


export const CloseSettingsButton = styled.button`
    width: 100%;
    height: 2.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    cursor: pointer;
    background-color: ${THIRD_COLOR};
    border: none;
    color: ${WHITE_COLOR};
    transition: ease 300ms;
    outline: none;
    font-weight: 600;
    font-size: 0.8rem;
    border-bottom-left-radius: 8px;
    :hover {
        box-shadow: 0px -6px 12px -1px ${THIRD_COLOR};
    }
`

export const LogoutButton = styled.button`
    width: 50%;
    height: 2.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    cursor: pointer;
    background-color: ${WARNING_COLOR};
    border: none;
    color: ${WHITE_COLOR};
    transition: ease 300ms;
    outline: none;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 8px;
    :hover {
        box-shadow: 0px 0px 12px -1px ${WARNING_COLOR};
    }
`


export const UserVisibleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;

`

export const UserVisibleDescr = styled.div`
    font-weight: 300;
    color: ${WHITE_COLOR}
`

export const SettingsDivider = styled.div`
    display: block;
    width: 90%;
    height: 2px;
    background-color: ${SECOND_COLOR};
    margin: 1.5rem 0 1.5rem 0
`