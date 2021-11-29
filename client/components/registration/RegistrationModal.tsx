
import { useActions } from "../../hooks/useActions"
import { CloseButton, ModalHeader, ModalWrapper, Input, FormButton, ModalTitle, RegistrationForm, InputWarningMessage, InputSuccessMessage } from "../FormStyles"
import {useState} from 'react'
import { SUCCESS_COLOR, WARNING_COLOR } from "../../utils/colors"
import Image from 'next/image'
import okIcon from '../../assets/icons/Ok_2.svg'


export const RegistrationModal: React.FC = () => {

    console.log()

    const {closeModal, userRegistration} = useActions()
    
    const [regFormValues, setRegFormValues] = useState({email: '', password: '', nickname: ''})
    const [regFormValuesValid, setRegFormValuesValid] = useState({email: 'valid', password: 'valid', nickname: 'valid'})

    const isValidEmail = (email: string) => {

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
                    onChange={e => setRegFormValues({...regFormValues, email: e.target.value})}
                    onBlur={() => setRegFormValuesValid({...regFormValues, email: regFormValues.email})}
                    style={!regFormValuesValid.email ? {border: `1px solid ${WARNING_COLOR}`, boxShadow: 'none'} : {borderBottom: `1px solid ${SUCCESS_COLOR}`}}
                />
                {!regFormValuesValid.email ?
                    <InputWarningMessage>Введите корректный email</InputWarningMessage>
                    :
                    <InputSuccessMessage>
                        <Image
                            src={okIcon.src}
                            alt='okIcon'
                            width='25'
                            height='25'
                        />
                    </InputSuccessMessage>
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

