
import {useState, useEffect} from 'react'
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CloseButton, ModalHeader, ModalWrapper, Input, FormButton, ModalTitle, LoginForm, InputWarningMessage, InputSuccessMessage, SpinnerWrapper } from "../FormStyles"
import Image from 'next/image'
import okIcon from '../../assets/icons/Ok_2.svg'
import {WARNING_COLOR} from '../../utils/colors'

export const LoginModal: React.FC = () => {

    const {closeModal, resetAuthState, userLogin} = useActions()
    const {loading, error, success, token} = useTypedSelector(state => state.user)

    const [loginFormValid, setLoginFormValid] = useState(true)
    const [loginFormValues, setLoginFormValues] = useState({email: '', password: ''})

    const [loginFormValuesValid, setLoginFormValuesValid] = useState({email: true} as any)

    const [loginFormWarnings, setLoginFormWarnings] = useState({email: false})
    const [loginFormMessages, setLoginFormMessages] = useState({email: ''})

    const resetLoginForm = () => {
        resetAuthState()
        closeModal()
    }

    console.log(token)

    useEffect(() => {
        if(loading) {
            setLoginFormValid(false)
        }
        if(success) {
            setTimeout(() => resetLoginForm(), 2000)
        }
        if(error) {
            setTimeout(() => resetLoginForm(), 5000)
        }
    }, [success, loading, error])

    const isCyrillic = function (text: string) {
        return /[а-я]/i.test(text);
    }

    const checkEmailValid = (input: string) => {
        if(input.length > 7 && loginFormValues.email.indexOf('@') !== -1 && loginFormValues.email.indexOf('.') !== -1 && !isCyrillic(loginFormValues.email)) {
            setLoginFormValuesValid({...loginFormValuesValid, email: true})
        } else {
            setLoginFormMessages({...loginFormMessages, email: 'Неккоректный email'})
            setLoginFormValuesValid({...loginFormValuesValid, email: false})
            setLoginFormWarnings({...loginFormWarnings, email: true})
        }
    }

    const onChangeEmailHandler = (input: string) => {
        if(input.length > 1) {
            setLoginFormWarnings({...loginFormWarnings, email: true})
            setTimeout(() => checkEmailValid(input), 1500)
            setLoginFormValues({...loginFormValues, email: input})
        } else {
            setLoginFormWarnings({...loginFormWarnings, email: true})
            setLoginFormValuesValid({...loginFormValuesValid, email: false})
        }
    }

    const sendLoginData = () => {
        if(loginFormValues.email && loginFormValues.password) {
            userLogin({email: loginFormValues.email, password: loginFormValues.password})
        } else {
            setLoginFormValid(false)
            setTimeout(() => setLoginFormValid(true), 2000)
        }
    }

    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>Вход</ModalTitle>
                <CloseButton onClick={() => closeModal()} >
                    Закрыть
                </CloseButton>
            </ModalHeader>
            <LoginForm>
                <Input
                    placeholder='Email'
                    type='email'
                    onChange={e => onChangeEmailHandler(e.target.value)}
                    style={!loginFormValuesValid.email ? {border: `1px solid ${WARNING_COLOR}`, boxShadow: 'none'} : {}}
                    onBlur={() => setLoginFormWarnings({...loginFormWarnings, email: false})}
                />
                {(loginFormWarnings.email && loginFormValuesValid.email) &&
                    <InputSuccessMessage>
                        <Image
                            src={okIcon.src}
                            alt='okIcon'
                            width='25'
                            height='25'
                        />
                    </InputSuccessMessage>
                }
                {(loginFormWarnings.email && !loginFormValuesValid.email) &&
                    <InputWarningMessage>{loginFormMessages.email}</InputWarningMessage>
                }

                <Input
                    placeholder='Пароль'
                    type='password'
                    onChange={e => setLoginFormValues({...loginFormValues, password: e.target.value})}
                />
            </LoginForm>
            <FormButton
                disabled={!loginFormValid}
                onClick={sendLoginData}
            >
                {(!loginFormValid && !loading && !error && !success) && <InputWarningMessage style={{color: '#fff'}}>Заполните все поля</InputWarningMessage>}
                {success && <InputWarningMessage style={{color: '#fff'}}>Это окно закроется автоматически</InputWarningMessage>}
                {(!loading && !error && !success) && <div>ok</div>}
                {error && <div>Неверный логин или пароль</div>}

                {(loading && !error && !success) && <SpinnerWrapper style={{position: 'relative', right: '0'}}>
                                    <div className='cssload-whirlpool'></div>
                                </SpinnerWrapper>}
                </FormButton>
              
        </ModalWrapper>
    )
}