import { useCart } from '@/hooks/useCart.jsx'
import {
    StyledCart,
    StyledEmptyMessage,
    StyledSeparator
} from './Cart.styles.js'
import CartItem from './CartItem.jsx'

function Cart() {
    const { product } = useCart()

    return (
        <StyledCart data-testid="shopping-cart">
            <h3>Cart</h3>
            <StyledSeparator></StyledSeparator>
            {product ? (
                <CartItem />
            ) : (
                <StyledEmptyMessage>Your cart is empty.</StyledEmptyMessage>
            )}
        </StyledCart>
    )
}

export default Cart
