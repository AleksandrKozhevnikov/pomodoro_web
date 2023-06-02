
import { HeaderDivider, HeaderButton, HeaderWrapper, UserNickname, UserWrapper, UserLevel } from "./HeaderStyles"
import Link from 'next/link'
import { useActions } from "../../hooks/useActions"
import { useRouter } from "next/dist/client/router"
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/routes"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import {Button, Toolbar, IconButton, Typography, Box, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export const Header: React.FC = () => {

    const {closeModal, openStatistic, openSettings} = useActions()
    const {userNick, isLogin} = useTypedSelector(state => state.user)

    
    const router = useRouter()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pomodoro Fuck
                    </Typography>
                    {isLogin ? 
                    <>
                      {/*   <UserLevel>Уровень {userData.level}</UserLevel>
                        <HeaderDivider/> */}
                        <UserNickname>{userNick}</UserNickname>
                        <HeaderDivider/>
                        <Button color="inherit" onClick={openStatistic} >
                            Статистика
                        </Button>
                        <Button color="inherit" onClick={openSettings}>
                            Настройки
                        </Button>
                    </>
                :
                    <>
                        {router.pathname === REGISTRATION_ROUTE &&
                            <Link passHref href={LOGIN_ROUTE}>
                                <Button color="secondary">
                                    Вход
                                </Button>
                            </Link>
                        }
                        {router.pathname === LOGIN_ROUTE &&
                            <Link passHref href={REGISTRATION_ROUTE}>
                                <Button color="primary">
                                    Регистрация
                                </Button>
                            </Link>
                        }
                        {router.pathname === MAIN_ROUTE && 
                            <>
                                <Link passHref href={REGISTRATION_ROUTE}>
                                    <Button color="inherit">
                                        Регистрация
                                    </Button>
                                </Link>

                                <Link passHref href={LOGIN_ROUTE}>
                                    <Button color="secondary">
                                        Вход
                                    </Button>
                                </Link>
                            </>
                        }
                    </>
                }
                </Toolbar>
            </AppBar>
        </Box>
    )
}