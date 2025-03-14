import {
    StyledCart,
    StyledEmptyMessage,
    StyledSeparator
} from './Cart.styles.js'

function Cart() {
    return (
        <StyledCart>
            <h3>Cart</h3>
            <StyledSeparator></StyledSeparator>
            <StyledEmptyMessage>Your cart is empty.</StyledEmptyMessage>
        </StyledCart>
    )
}

export default Cart
