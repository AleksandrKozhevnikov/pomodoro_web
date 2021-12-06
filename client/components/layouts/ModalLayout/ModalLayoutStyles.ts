import styled, {keyframes} from 'styled-components'
import { MODAL_LAYOUT_COLOR } from '../../../utils/colors'
import {fadeIn} from 'react-animations'


export const ModalLayoutWrapper = styled.div`
    display: flex;
    width: 100%;
    height: ${props => `${props.property}`};
    justify-content: center;
    align-items: center;
    background-color: ${MODAL_LAYOUT_COLOR};
    animation: 500ms ${keyframes`${fadeIn} forwards`};
`