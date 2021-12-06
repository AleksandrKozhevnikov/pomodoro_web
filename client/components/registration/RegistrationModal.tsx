
import { useActions } from "../../hooks/useActions"
import { CloseButton, ModalHeader, ModalWrapper, Input, FormButton, ModalTitle, RegistrationForm, InputWarningMessage, InputSuccessMessage } from "../FormStyles"
import {useState, useEffect} from 'react'
import { SUCCESS_COLOR, WARNING_COLOR } from "../../utils/colors"
import Image from 'next/image'
import okIcon from '../../assets/icons/Ok_2.svg'


export const RegistrationModal: React.FC = () => {

    console.log()

    const {closeModal, userRegistration} = useActions()
    
    const [regFormValues, setRegFormValues] = useState({email: '', password: '', nickname: ''})
    const [regFormValuesValid, setRegFormValuesValid] = useState({email: 'valid', password: 'valid', nickname: 'valid'})

    const [regFormWarnings, setRegFormWarnings] = useState({email: false})

    useEffect(() => {
       
    }, [regFormValues])

    // не на бллюр, а на валидность почты - динамически
    const onBlurHandler = () => {
        setRegFormValuesValid({...regFormValues, email: regFormValues.email})
    }

    const onChangeHandler = (e: string) => {
        setRegFormValues({...regFormValues, email: e})
        if(e.length > 1) {
            setRegFormWarnings({...regFormWarnings, email: true})
        } else {
            setRegFormWarnings({...regFormWarnings, email: false})
            setRegFormValuesValid({...regFormValues, email: ''})
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
          
            <RegistrationForm>
                <Input
                    placeholder='Email'
                    type='email'
                    onChange={e => onChangeHandler(e.target.value)}
                    onBlur={() => onBlurHandler()}
                    style={!regFormValuesValid.email ? {border: `1px solid ${WARNING_COLOR}`, boxShadow: 'none'} : {borderBottom: `1px solid ${SUCCESS_COLOR}`}}
                />
                {(regFormWarnings.email && regFormValuesValid.email) &&
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
                    <InputWarningMessage>Введите корректный email</InputWarningMessage>
                } 
                    
                <Input
                    placeholder='Пароль'
                    type='password'
                />
                <Input
                    placeholder='Никнейм'
                    type='text'
                />
            </RegistrationForm>
            <FormButton>ok</FormButton>
        </ModalWrapper>
    )
}

