import { ModalLayout } from "../../components/layouts/ModalLayout/ModalLayout"
import { RegistrationModal } from "../../components/registration/RegistrationModal"
import Head from 'next/head'

const Index: React.FC = () => {
    return (
    <>
    <Head>
        <title>Регистрация</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
       <ModalLayout  >
            <RegistrationModal/>
       </ModalLayout>
    </>
    )
}


export default Index