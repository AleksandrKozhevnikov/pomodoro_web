import { ModalLayout } from "../../components/layouts/ModalLayout/ModalLayout"
import { LoginModal } from "../../components/login/LoginModal"
import Head from 'next/head'

const Index: React.FC = () => {
    return (
    <>
    <Head>
        <title>Вход</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
       <ModalLayout  >
            <LoginModal/>
       </ModalLayout>
    </>
    )
}


export default Index