import { ModalLayoutWrapper } from "./ModalLayoutStyles"
import {useState, useEffect} from 'react'
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useRouter } from "next/dist/client/router"
import { useActions } from "../../../hooks/useActions"

export const ModalLayout: React.FC = ({children}) => {
    const router = useRouter()
    let allHeight: any = '900px'

    if (typeof window !== 'undefined') {
        allHeight = `${window.innerHeight}px`
      }

    const unmountStyles = {opacity: '0', transition: '300ms ease'}
    const [style, setStyle] = useState({})

    const {modal} = useTypedSelector(state => state.service)
    const {openModal} = useActions()
    
    useEffect(() => {
        if(!modal) {
            setStyle({...unmountStyles})
            setTimeout(() => {
                router.push('/')
            }, 320)
        } 
        openModal()
    }, [modal])

  
    return (
        <ModalLayoutWrapper style={style} property={allHeight}>
            {children}
        </ModalLayoutWrapper>
    )
}