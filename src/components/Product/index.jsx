import { useState } from 'react'
import Carousel from '../Carousel/index.jsx'
import { StyledProduct } from './Product.styles.js'
import ProductDetail from './ProductDetail.jsx'
import ProductModal from './ProductModal.jsx'

function Product() {
    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <StyledProduct>
            <Carousel onclick={() => setIsOpenModal(true)} />
            <ProductDetail />
            {isOpenModal && (
                <ProductModal onclick={() => setIsOpenModal(false)} />
            )}
        </StyledProduct>
    )
}

export default Product
