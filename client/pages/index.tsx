import type { NextPage } from 'next'
import {useEffect, useState} from 'react'
import Head from 'next/head'
import {useActions} from '../hooks/useActions'
import { decodeToken } from '../utils/decodeToken'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { MainWrapper, MainModalWrapper } from '../components/HomeStyles'
import { SettingsMenu } from '../components/settings/SettingsMenu'
import {CHECK_TOKEN_VALID_API_ROUTE} from '../utils/apiRoutes'
import axios from 'axios'
import { getCookie } from '../utils/cookies'
import { StatisticMenu } from '../components/statistic/StatisticMenu'


const Home: NextPage = () => {
	const {userDataSet, userLogout, getUserData} = useActions()
	const {isLogin} = useTypedSelector(state => state.user)

	const [validToken, setValidToken] = useState(true)

	const windowHeigth = () => {
		if (typeof window !== "undefined") {
			return `${window.innerHeight - 64}px`
		}
	} 

	console.log(windowHeigth())

	const token = getCookie('token')
	const checkTokenValid = async () => {
		try {
			await axios.get(CHECK_TOKEN_VALID_API_ROUTE, {
				headers: {
                    'Authorization': `Bearer ${token}`
                }
			})
				.then(() => {
					setValidToken(true)
				})
				.catch(() => {
					setValidToken(false)
				})
		} catch(e) {
			setValidToken(false)
		}
	}

	useEffect(() => {
		checkTokenValid()
	}, [])

	useEffect(() => {
		try {
			if(validToken) {
				let userTokenData: any = ''
		
				if(token) {
					userTokenData = decodeToken(token)
					userDataSet('email', userTokenData.payload.email)
					userDataSet('nickname', userTokenData.payload.nickName)
					userDataSet('id', userTokenData.payload.id)
				} else {
					userLogout()
				}
		
				if(isLogin) {
					getUserData(userTokenData.payload.id)
				}	
			} else {
				userLogout()
			}
		} catch {
			userLogout()
		}
	}, [isLogin])


	
	return (
		<>
			<Head>
				<title>Pomodoro Web</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>


				<MainWrapper>
					{isLogin && 
						<>
							<div>Игра</div>
							<MainModalWrapper style={{height: windowHeigth()}}>
								<SettingsMenu/>
								<StatisticMenu/>
							</MainModalWrapper>
						</>
					}
				</MainWrapper>
		</>
	)
}

export default Home
