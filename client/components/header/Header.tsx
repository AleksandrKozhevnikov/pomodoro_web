
import { HeaderDivider, HeaderButton, HeaderWrapper, UserNickname, UserWrapper, UserLevel } from "./HeaderStyles"
import Link from 'next/link'
import { useActions } from "../../hooks/useActions"
import { useRouter } from "next/dist/client/router"
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/routes"
import { useTypedSelector } from "../../hooks/useTypedSelector"


export const Header: React.FC = () => {

    const {closeModal, openStatistic, openSettings} = useActions()
    const {userNick, isLogin} = useTypedSelector(state => state.user)

    
    const router = useRouter()

    return (
        <HeaderWrapper>
            <HeaderButton property={'400'} onClick={() => closeModal()} >
                Pomodoro Web
            </HeaderButton>
            <UserWrapper>
                {isLogin ? 
                    <>
                      {/*   <UserLevel>Уровень {userData.level}</UserLevel>
                        <HeaderDivider/> */}
                        <UserNickname>{userNick}</UserNickname>
                        <HeaderDivider/>
                        <HeaderButton onClick={openStatistic} >
                            Статистика
                        </HeaderButton>
                        <HeaderButton onClick={openSettings}>
                            Настройки
                        </HeaderButton>
                    </>
                :
                    <>
                        {router.pathname === REGISTRATION_ROUTE &&
                            <Link passHref href={LOGIN_ROUTE}>
                                <HeaderButton>
                                    Вход
                                </HeaderButton>
                            </Link>
                        }
                        {router.pathname === LOGIN_ROUTE &&
                            <Link passHref href={REGISTRATION_ROUTE}>
                                <HeaderButton>
                                    Регистрация
                                </HeaderButton>
                            </Link>
                        }
                        {router.pathname === MAIN_ROUTE && 
                            <>
                                <Link passHref href={REGISTRATION_ROUTE}>
                                    <HeaderButton>
                                        Регистрация
                                    </HeaderButton>
                                </Link>

                                <Link passHref href={LOGIN_ROUTE}>
                                    <HeaderButton>
                                        Вход
                                    </HeaderButton>
                                </Link>
                            </>
                        }
                    </>
                }
            </UserWrapper>
        </HeaderWrapper>
    )
}