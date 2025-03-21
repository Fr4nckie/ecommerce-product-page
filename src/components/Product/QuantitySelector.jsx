import { StyledQuantitySelector } from './Product.styles.js'
import Minus from '@/assets/images/icon-minus.svg?react'
import Plus from '@/assets/images/icon-plus.svg?react'
import { useCart } from '@/hooks/useCart.jsx'

function QuantitySelector() {
    const { quantity, incrementQuantity, decrementQuantity } = useCart()
    return (
        <StyledQuantitySelector>
            <button onClick={decrementQuantity}>
                <Minus />
            </button>
            <p>{quantity}</p>
            <button onClick={incrementQuantity}>
                <Plus />
            </button>
        </StyledQuantitySelector>
    )
}

export default QuantitySelector
