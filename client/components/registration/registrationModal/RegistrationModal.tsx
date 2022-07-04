
import { useActions } from "../../../hooks/useActions"
import { CloseButton, ModalHeader, ModalWrapper, Input, FormButton, ModalTitle, RegistrationForm, InputWarningMessage, InputSuccessMessage, InputWrapper, SpinnerWrapper, RegistrationWarningMessage } from "../../FormStyles"
import {useState, useEffect} from 'react'
import { SUCCESS_COLOR, WARNING_COLOR } from "../../../utils/colors"
import Image from 'next/image'
import okIcon from '../../../assets/icons/Ok_2.svg'
import { useTypedSelector } from "../../../hooks/useTypedSelector"



export const RegistrationModal: React.FC = () => {

    const {closeModal, userRegistration, userDataCheck, resetAuthState} = useActions()
    const {emailCheckLoading, emailCheckError, nicknameCheckError, nicknameCheckLoading, loading, error, success} = useTypedSelector(state => state.user)
    
    const [regFormValues, setRegFormValues] = useState({email: '', password: '', nickname: ''})
    const [regFormValuesValid, setRegFormValuesValid] = useState({email: true, password: true, nickname: true} as any)

    const [regFormWarnings, setRegFormWarnings] = useState({email: false, password: false, nickname: false})
    const [regFormMessages, setRegFormMessages] = useState({email: '', password: '', nickname: ''})

    const [regFormValid, setRegFormValid] = useState(true)

    const resetRegForm = () => {
        resetAuthState()
        closeModal()
    }

    useEffect(() => {
        setTimeout(() => userDataCheck('email', regFormValues.email.trim()), 1500)
    }, [regFormValues.email])

    useEffect(() => {
        setTimeout(() => userDataCheck('nickname', regFormValues.nickname.trim()), 1500)
    }, [regFormValues.nickname])

    useEffect(() => {
        if(loading) {
            setRegFormValid(false)
        }
        if(success) {
            setTimeout(() => resetRegForm(), 2000)
        }
        if(error) {
            setTimeout(() => resetRegForm(), 3000)
        }
    }, [success, loading, error])

    const isCyrillic = function (text: string) {
        return /[а-я]/i.test(text);
    }

    const checkEmailValid = (input: string) => {
        if(input.length > 7 && regFormValues.email.indexOf('@') !== -1 && regFormValues.email.indexOf('.') !== -1 && !isCyrillic(regFormValues.email)) {
            setRegFormValuesValid({...regFormValuesValid, email: true})
        } else {
            setRegFormMessages({...regFormMessages, email: 'Неккоректный email'})
            setRegFormValuesValid({...regFormValuesValid, email: false})
            setRegFormWarnings({...regFormWarnings, email: true})
        }
    }

    const onChangeEmailHandler = (input: string) => {
        if(input.length > 1) {
            setRegFormWarnings({...regFormWarnings, email: true})
            setTimeout(() => checkEmailValid(input), 1500)
            setRegFormValues({...regFormValues, email: input})
        } else {
            setRegFormWarnings({...regFormWarnings, email: true})
            setRegFormValuesValid({...regFormValuesValid, email: false})
        }
    }


    const checkPasswordValid = (input: string) => {
        if(input.length > 7 && !isCyrillic(regFormValues.password)) {
            setRegFormValuesValid({...regFormValuesValid, password: true})
        } else {
            setRegFormMessages({...regFormMessages, password: 'Пароль должен содержать не менее 7 символов'})
            setRegFormValuesValid({...regFormValuesValid, password: false})
            setRegFormWarnings({...regFormWarnings, password: true})
        }
    }

    const onChangePasswordHandler = (input: string) => {
        if(input.length > 1) {
            setRegFormWarnings({...regFormWarnings, password: false})
            setTimeout(() => checkPasswordValid(input), 1000)
            setRegFormValues({...regFormValues, password: input})
        } else {
            setRegFormWarnings({...regFormWarnings, password: false})
            setRegFormValuesValid({...regFormValuesValid, password: false})
        }
    }

    const checkNicknameValid = (input: string) => {
        if(input.length >= 3 && input.length <= 15 && !isCyrillic(regFormValues.nickname)) {
            setRegFormValuesValid({...regFormValuesValid, nickname: true})
        } else {
            setRegFormMessages({...regFormMessages, nickname: 'Никнейм должен быть латинским и иметь длину не менее 3 символов но не более 15'})
            setRegFormValuesValid({...regFormValuesValid, nickname: false})
            setRegFormWarnings({...regFormWarnings, nickname: true})
        }
    }


    const onChangeNicknameHandler = (input: string) => {
        if(input.length > 1) {
            setRegFormWarnings({...regFormWarnings, nickname: true})
            setTimeout(() => checkNicknameValid(input), 1000)
            setRegFormValues({...regFormValues, nickname: input})
        } else {
            setRegFormWarnings({...regFormWarnings, nickname: true})
            setRegFormValuesValid({...regFormValuesValid, nickname: false})
        }
    }

    const sendRegData = () => {
        if(regFormValues.email && regFormValues.password && regFormValues.nickname && !emailCheckError && !emailCheckLoading && !nicknameCheckError && !nicknameCheckLoading) {
            userRegistration({email: regFormValues.email, password: regFormValues.password, nickName: regFormValues.nickname})
        } else {
            setRegFormValid(false)
            setTimeout(() => setRegFormValid(true), 3000)
        }
    }

    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>Регистрация</ModalTitle>
                <CloseButton onClick={() => closeModal()} >
                    Закрыть
                </CloseButton>
            </ModalHeader>
             {(error || success) ? 
                    <>
                        {error && <RegistrationWarningMessage>При регистрации произошла ошибка...</RegistrationWarningMessage>}
                        {success &&  <InputSuccessMessage style={{marginTop: '4rem',  height: '6rem'}} >
                                        <Image
                                            src={okIcon.src}
                                            alt='okIcon'
                                            width='50'
                                            height='50'
                                        />
                                        Регистрация прошла успешно!
                                    </InputSuccessMessage>}
                    </>
                :
                    <>
                        
                        <RegistrationForm>
                            <InputWrapper>
                                <Input
                                    placeholder='Email'
                                    type='email'
                                    onChange={e => onChangeEmailHandler(e.target.value)}
                                    onBlur={() => setRegFormWarnings({...regFormWarnings, email: false})}
                                    style={!regFormValuesValid.email ? {border: `1px solid ${WARNING_COLOR}`, boxShadow: 'none'} : {}}
                                />
                                {(regFormWarnings.email && emailCheckLoading && !emailCheckError) &&
                                    <SpinnerWrapper>
                                        <div className='cssload-whirlpool'></div>
                                    </SpinnerWrapper>    
                                }
                            </InputWrapper>
                            {(regFormWarnings.email && regFormValuesValid.email && !emailCheckError) &&
                                <InputSuccessMessage>
                                    <Image
                                        src={okIcon.src}
                                        alt='okIcon'
                                        width='25'
                                        height='25'
                                    />
                                </InputSuccessMessage>
                            }
                            {(regFormWarnings.email && !regFormValuesValid.email) &&
                                <InputWarningMessage>{regFormMessages.email}</InputWarningMessage>
                            }
                            {(regFormWarnings.email && emailCheckError) &&
                                <InputWarningMessage>Такая почта уже существует</InputWarningMessage>
                            }

                        

                            <InputWrapper>
                                <Input
                                    placeholder='Никнейм'
                                    type='text'
                                    onChange={e => onChangeNicknameHandler(e.target.value)}
                                    onBlur={e => setRegFormWarnings({...regFormWarnings, nickname: false})}
                                    style={!regFormValuesValid.nickname ? {border: `1px solid ${WARNING_COLOR}`, boxShadow: 'none'} : {}}
                                />
                                {(regFormWarnings.nickname && nicknameCheckLoading && !nicknameCheckError) &&
                                    <SpinnerWrapper>
                                        <div className='cssload-whirlpool'></div>
                                    </SpinnerWrapper>    
                                }
                            </InputWrapper>
                            {(regFormWarnings.nickname && regFormValuesValid.nickname && !nicknameCheckError) &&
                                <InputSuccessMessage>
                                    <Image
                                        src={okIcon.src}
                                        alt='okIcon'
                                        width='25'
                                        height='25'
                                    />
                                </InputSuccessMessage>
                            }
                            {(regFormWarnings.nickname && !regFormValuesValid.nickname) &&
                                <InputWarningMessage>{regFormMessages.nickname}</InputWarningMessage>
                            }
                            {(regFormWarnings.nickname && nicknameCheckError) &&
                                <InputWarningMessage>К сожалению этот никнейм уже занят</InputWarningMessage>
                            }

                            <Input
                                placeholder='Password'
                                type='password'
                                onChange={e => onChangePasswordHandler(e.target.value)}
                                onBlur={e => setRegFormWarnings({...regFormWarnings, password: false})}
                                style={!regFormValuesValid.password ? {border: `1px solid ${WARNING_COLOR}`, boxShadow: 'none'} : {}}
                            />
                            {(regFormWarnings.password && regFormValuesValid.password) &&
                                <InputSuccessMessage>
                                <Image
                                    src={okIcon.src}
                                    alt='okIcon'
                                    width='25'
                                    height='25'
                                />
                                </InputSuccessMessage>
                            }
                            {(regFormWarnings.password && !regFormValuesValid.password) &&
                                <InputWarningMessage>{regFormMessages.password}</InputWarningMessage>
                            }
                        </RegistrationForm>
                    </>
            }
            <FormButton 
                disabled={!regFormValid}
                onClick={sendRegData}
            >
                {(!regFormValid && !success && !loading && !error) && <InputWarningMessage style={{color: '#fff'}} >Заполните все поля</InputWarningMessage>}
                
                {loading &&  <SpinnerWrapper style={{position: 'relative', right: '0'}}>
                                    <div className='cssload-whirlpool'></div>
                                </SpinnerWrapper>}

                {(regFormValid && !loading  && !success && !error) && <div>ок</div> }

                {success && <div>Окно закроется автоматически</div> }
            </FormButton>
        </ModalWrapper>
    )
}

