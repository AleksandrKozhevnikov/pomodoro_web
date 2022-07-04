import {useState, useEffect} from 'react'
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CloseSettingsButton, LogoutButton, SettingsModal, UserVisibleWrapper, UserVisibleDescr, SettingsDivider } from "./SettingsMenuStyles"
import ToggleSwitch from '../../utils/toggleSwitch'


export const SettingsMenu: React.FC = () => {

    const {closeSettings, userLogout, changeUserVisibility} = useActions()
    const {settingsModal} = useTypedSelector(state => state.service)
    const {userData} = useTypedSelector(state => state.user)

    const [style, setStyle] = useState({})
    const [userVisible, setUserVisible] = useState(userData.open);

    const unmountStyles = {opacity: '0', transition: '200ms ease'}
    const mountStyles = {opacity: '1', transition: '200ms ease-in'}

    useEffect(() => {
        if(!settingsModal) {
            setStyle({...unmountStyles})
        } else {
            setStyle({...mountStyles})
        }
    }, [settingsModal])

    useEffect(() => {
        changeUserVisibility(userData.id)
    }, [userVisible])


    const logoutHandler = () => {
        userLogout()
        closeSettings()
    }


    return (
        <SettingsModal style={style}>
            <SettingsDivider/>
            <UserVisibleWrapper>
                <UserVisibleDescr>Показывать ваш профиль другим пользователям?</UserVisibleDescr>
                <ToggleSwitch
                    size="xs"
                    value={userVisible}
                    checked={userVisible}
                    onChange={() => setUserVisible(!userVisible)}
                    disabled={false}
                    id="0"
                    name="0"
                    title="toogle switch xs"
                />
            </UserVisibleWrapper>
            <SettingsDivider/>
           
            <LogoutButton onClick={logoutHandler}>Выйти</LogoutButton>
            <CloseSettingsButton onClick={closeSettings} >Закрыть</CloseSettingsButton>
        </SettingsModal>
    )
} 