
import { HeaderButton, HeaderWrapper, UserWrapper } from "./HeaderStyles"
import Link from 'next/link'
import { useActions } from "../../hooks/useActions"
import { useRouter } from "next/dist/client/router"
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/routes"
import { useTypedSelector } from "../../hooks/useTypedSelector"


export const Header: React.FC = () => {

    const {closeModal} = useActions()
    const {token} = useTypedSelector(state => state.user)

    const router = useRouter()

    return (
        <HeaderWrapper>
            <HeaderButton property={'400'} onClick={() => closeModal()} >
                Pomodoro Web
            </HeaderButton>
            <UserWrapper>
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
               
            </UserWrapper>
        </HeaderWrapper>
    )
}