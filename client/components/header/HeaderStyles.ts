import styled, {keyframes} from 'styled-components'
import {fadeIn, fadeInLeft} from 'react-animations'
import { SECOND_COLOR, MAIN_COLOR, WHITE_COLOR } from '../../utils/colors'
/* 
animation: 300ms ${keyframes`${fadeInLeft} both`}; */

export const HeaderWrapper = styled.div`
    display: flex;
    padding: 2rem 0 2rem 0;
    width: 100%;
    height: 2rem;
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
    height: 4rem;
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
