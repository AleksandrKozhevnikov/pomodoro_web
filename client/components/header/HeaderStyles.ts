import styled, {keyframes} from 'styled-components'
import {fadeIn, fadeInLeft} from 'react-animations'
import { SECOND_COLOR, MAIN_COLOR, WHITE_COLOR } from '../../utils/colors'
/* 
animation: 300ms ${keyframes`${fadeInLeft} both`}; */

export const HeaderWrapper = styled.div`
    display: flex;
    padding: 2rem 0 2rem 0;
    width: 100%;
    height: 64px;
    background-color: ${MAIN_COLOR};
    align-items: center;
    justify-content: space-between;
`

export const HeaderButton = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: ${props => props.property ? props.property : '300'};
    color: ${SECOND_COLOR};
    height: 64px;
    padding-left: 2rem;
    padding-right: 2rem;
    transition: ease-in-out 200ms;
    user-select: none;
    :hover {
        cursor: pointer;
        background-color: ${WHITE_COLOR};
        color: ${MAIN_COLOR};
    }
`

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const UserNickname = styled.div`
    font-weight: 400;
    font-size: 1rem;
    color: ${WHITE_COLOR};
    margin: 0 1rem 0 1rem;
`

export const UserLevel = styled.div`
    font-weight: 300;
    font-size: 1rem;
    color: ${WHITE_COLOR};
    margin: 0 1rem 0 1rem;
`

export const HeaderDivider = styled.div`
    display: block;
    height: 2rem;
    width: 1px;
    margin: 0 1rem 0 1rem;
    background-color: ${WHITE_COLOR};
`