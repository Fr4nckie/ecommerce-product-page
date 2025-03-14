import Navbar from '@/components/Navbar/index.jsx'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

describe('<Navbar/>', () => {
    it('should render correctly', () => {
        render(<Navbar />)

        // Button
        expect(screen.getByLabelText('menu')).toBeInTheDocument()
        expect(screen.getByLabelText('cart-icon')).toBeInTheDocument()
        expect(screen.getByLabelText('profile')).toBeInTheDocument()
        expect(screen.getByLabelText('logo')).toBeInTheDocument()

        // Navigation
        expect(screen.getByText('collections')).toBeInTheDocument()
        expect(screen.getByText('men')).toBeInTheDocument()
        expect(screen.getByText('women')).toBeInTheDocument()
        expect(screen.getByText('about')).toBeInTheDocument()
        expect(screen.getByText('contact')).toBeInTheDocument()
    })

    it('should toggle the menu visibility when clicking the menu button', async () => {
        render(<Navbar />)
        const menu = screen.getByLabelText('menu')
        await userEvent.click(menu)

        const closeMenu = screen.getByLabelText('close-menu')
        expect(closeMenu).toBeInTheDocument()

        await userEvent.click(closeMenu)
        expect(menu).toBeInTheDocument()
    })

    it('should toggle the shopping cart visibility when clicking the cart button', async () => {
        render(<Navbar />)

        const cart = screen.getByLabelText('cart-icon')
        await userEvent.click(cart)

        const shoppingCart = screen.getByTestId('shopping-cart')
        expect(shoppingCart).toBeInTheDocument()
        expect(screen.getByText('Cart')).toBeInTheDocument()
        expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()

        await userEvent.click(cart)

        await waitFor(() => {
            expect(shoppingCart).not.toBeInTheDocument()
        })
    })
})
