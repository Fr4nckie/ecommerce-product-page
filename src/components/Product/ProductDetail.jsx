import Cart from '@/assets/images/icon-cart.svg?react'
import {
    StyledAddToCart,
    StyledDescription,
    StyledDiscountedPrice,
    StyledOriginalTitle,
    StyledPrice,
    StyledProductActions,
    StyledProductDetail,
    StyledSubtitle,
    StyledTitle
} from './Product.styles.js'
import { product } from '../../../product.js'
import QuantitySelector from './QuantitySelector.jsx'
import { useCart } from '@/hooks/useCart.jsx'

function ProductDetail() {
    const { addProduct } = useCart()
    const discountedPrice = (product.price * product.discount) / 100

    return (
        <StyledProductDetail>
            <StyledSubtitle>{product.company}</StyledSubtitle>
            <StyledTitle>{product.name}</StyledTitle>
            <StyledDescription>{product.description}</StyledDescription>
            <StyledPrice>
                <StyledDiscountedPrice>
                    <p>${discountedPrice}.00</p>
                    <p>{product.discount}%</p>
                </StyledDiscountedPrice>
                <StyledOriginalTitle>${product.price}.00</StyledOriginalTitle>
            </StyledPrice>
            <StyledProductActions>
                <QuantitySelector />
                <StyledAddToCart onClick={() => addProduct(product)}>
                    <Cart /> add to cart
                </StyledAddToCart>
            </StyledProductActions>
        </StyledProductDetail>
    )
}

export default ProductDetail
