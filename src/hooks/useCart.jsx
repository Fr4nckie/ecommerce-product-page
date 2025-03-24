/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useState } from 'react'

const CartContext = createContext({
    product: null,
    quantity: 1,
    addProduct: () => {},
    removeProduct: () => {}
})

export const useCart = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)

    const addProduct = useCallback(
        (newProduct) => {
            if (product) {
                return setQuantity(quantity + 1)
            } else {
                return setProduct(newProduct)
            }
        },
        [product, quantity]
    )

    const removeProduct = useCallback(() => {
        setProduct(null)
    }, [])

    const incrementQuantity = useCallback(() => {
        setQuantity(quantity + 1)
    }, [quantity])

    const decrementQuantity = useCallback(() => {
        quantity > 1 ? setQuantity(quantity - 1) : null
    }, [quantity])

    return (
        <CartContext.Provider
            value={{
                product,
                quantity,
                addProduct,
                removeProduct,
                incrementQuantity,
                decrementQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
