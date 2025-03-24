import { createPortal } from 'react-dom'
import Carousel from '../Carousel/index.jsx'
import Close from '@/assets/images/icon-close.svg?react'
import { StyledProductModal } from './Product.styles.js'

function ProductModal({ onclick }) {
    return createPortal(
        <StyledProductModal data-testid="product-modal">
            <button onClick={onclick} aria-label='close-modal'>
                <Close />
            </button>
            <Carousel />
        </StyledProductModal>,
        document.body
    )
}

export default ProductModal
