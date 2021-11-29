
import { useActions } from "../../hooks/useActions"
import { CloseButton, ModalHeader, ModalWrapper, Input, FormButton, ModalTitle, LoginForm } from "../FormStyles"


export const LoginModal: React.FC = () => {

    const {closeModal} = useActions()

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
                />
                <Input
                    placeholder='Пароль'
                    type='password'
                />
            </LoginForm>
            <FormButton>ok</FormButton>
        </ModalWrapper>
    )
}