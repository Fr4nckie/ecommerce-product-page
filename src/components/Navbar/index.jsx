import Logo from '@/assets/images/logo.svg?react'
import CartIcon from '@/assets/images/icon-cart.svg?react'
import MenuBurger from '@/assets/images/icon-menu.svg?react'
import CloseMenu from '@/assets/images/icon-close.svg?react'
import avatar from '@/assets/images/image-avatar.png'
import {
    StyledMenu,
    StyledNavbar,
    StyledNavbarActions,
    StyledNavbarBrand,
    StyledNavbarNav
} from './Navbar.styles.js'
import Cart from '../Cart/index.jsx'
import { useState } from 'react'
import { useCart } from '@/hooks/useCart.jsx'

function Navbar() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { quantity, product } = useCart()

    return (
        <StyledNavbar>
            <StyledMenu>
                {isMenuOpen ? (
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="close-menu"
                    >
                        <CloseMenu />
                    </button>
                ) : (
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="menu"
                    >
                        <MenuBurger />
                    </button>
                )}
            </StyledMenu>
            <StyledNavbarBrand aria-label="logo">
                <Logo />
            </StyledNavbarBrand>
            <StyledNavbarNav $isMenuOpen={isMenuOpen}>
                <li>
                    <a href="#">collections</a>
                </li>
                <li>
                    <a href="#">men</a>
                </li>
                <li>
                    <a href="#">women</a>
                </li>
                <li>
                    <a href="#">about</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </StyledNavbarNav>
            <StyledNavbarActions>
                <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    aria-label="cart-icon"
                >
                    <CartIcon className="cart-icon" />
                    {product && <div>{quantity}</div>}
                </button>
                <button aria-label="profile">
                    <img src={avatar} alt="profile pic" />
                </button>
            </StyledNavbarActions>
            {isCartOpen && <Cart />}
        </StyledNavbar>
    )
}

export default Navbar
