/* eslint-disable react/prop-types */
import Product from '@/components/Product/index.jsx'
import { CartContextProvider, useCart } from '@/hooks/useCart.jsx'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('../src/hooks/useCart.jsx', () => ({
    useCart: vi.fn(),
    CartContextProvider: ({ children }) => <div>{children}</div>
}))

describe('<Product />', () => {
    const addProductMock = vi.fn()
    beforeEach(() => {
        vi.clearAllMocks()
        useCart.mockReturnValue({
            addProduct: addProductMock
        })
    })

    it('should render correctly', async () => {
        render(
            <CartContextProvider>
                <Product />
            </CartContextProvider>
        )
        expect(screen.getByTestId('carousel')).toBeInTheDocument()
        expect(screen.getByText('sneaker company')).toBeInTheDocument()
        expect(
            screen.getByText('fall limited edition sneakers')
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /add to cart/i })
        ).toBeInTheDocument()
    })

    it('should add product to cart when clicking "add to cart button"', async () => {
        render(
            <CartContextProvider>
                <Product />
            </CartContextProvider>
        )

        await userEvent.click(
            screen.getByRole('button', { name: /add to cart/i })
        )

        expect(addProductMock).toHaveBeenCalled()
    })
})
