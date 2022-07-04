import styled, {keyframes} from 'styled-components'
import { MAIN_COLOR, THIRD_COLOR, WHITE_COLOR, SECOND_COLOR } from '../../utils/colors'


export const StatisticWrapper = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${MAIN_COLOR};
    border-top-left-radius: 8px;
`

export const CloseStatisticsButton = styled.button`
    width: 100%;
    height: 2.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${THIRD_COLOR};
    border: none;
    color: ${WHITE_COLOR};
    transition: ease 300ms;
    outline: none;
    font-weight: 600;
    font-size: 0.8rem;
    border-top-left-radius: 8px;
    margin-bottom: 10px;
    :hover {
        box-shadow: 0px 6px 12px -1px ${THIRD_COLOR};
    }
`

export const StatisticInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    align-items: center;
`

export const StatisticInfoDescr = styled.div`
    color: ${WHITE_COLOR};
    font-weight: 500;
`

export const StatisticInfoValue = styled.div`
    color: ${WHITE_COLOR};
`

export const StatisticsDivider = styled.div`
    display: block;
    width: 90%;
    height: 2px;
    background-color: ${SECOND_COLOR};
    margin: 1.5rem 0 1.5rem 0
`
