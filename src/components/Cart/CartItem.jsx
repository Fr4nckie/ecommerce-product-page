import { useCart } from '@/hooks/useCart.jsx'
import Delete from '@/assets/images/icon-delete.svg?react'
import {
    StyledCartItem,
    StyledCartItemPrice,
    StyledCheckoutButton,
    StyledDetailItem
} from './Cart.styles.js'

function CartItem() {
    const { product, removeProduct } = useCart()
    const discountedPrice = (product.price * product.discount) / 100
    const { quantity } = useCart()

    return (
        <StyledCartItem>
            <StyledDetailItem>
                <img src={product.image} alt="product thumb" />
                <div>
                    <h1>{product.name}</h1>
                    <StyledCartItemPrice>
                        <p>
                            ${discountedPrice}.00 x {quantity}
                        </p>
                        <p>${discountedPrice * quantity}.00</p>
                    </StyledCartItemPrice>
                </div>
                <button onClick={removeProduct}>
                    <Delete />
                </button>
            </StyledDetailItem>
            <StyledCheckoutButton>checkout</StyledCheckoutButton>
        </StyledCartItem>
    )
}

export default CartItem
