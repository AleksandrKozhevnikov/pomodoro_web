import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from '../../hooks/useTypedSelector'
import {useState, useEffect} from 'react'
import { CloseStatisticsButton, StatisticWrapper, StatisticInfoWrapper, StatisticInfoValue, StatisticInfoDescr, StatisticsDivider } from "./StatisticMenuStyles"

export const StatisticMenu: React.FC = () => {

    const [style, setStyle] = useState({})

    const unmountStyles = {opacity: '0', transition: '200ms ease'}
    const mountStyles = {opacity: '1', transition: '200ms ease-in'}

    const {closeStatistic} = useActions()
    const {statisticModal} = useTypedSelector(state => state.service)
    const {userData} = useTypedSelector(state => state.user)

    useEffect(() => {
        if(!statisticModal) {
            setStyle({...unmountStyles})
        } else {
            setStyle({...mountStyles})
        }
    }, [statisticModal])


    return (
        <StatisticWrapper style={style}>
            <CloseStatisticsButton onClick={closeStatistic}>Закрыть</CloseStatisticsButton>
            <StatisticsDivider/>
            <StatisticInfoWrapper>
                <StatisticInfoDescr>Уровень</StatisticInfoDescr>
                <StatisticInfoValue>{userData.level}</StatisticInfoValue>
            </StatisticInfoWrapper>

            <StatisticInfoWrapper>
                <StatisticInfoDescr>Всего очков</StatisticInfoDescr>
                <StatisticInfoValue>{userData.totalPoints}</StatisticInfoValue>
            </StatisticInfoWrapper>
            <StatisticsDivider/>
        </StatisticWrapper>
    ) 
}