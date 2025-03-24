import { colors } from '@/styles/themes.js'
import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    background-color: ${colors.white};

    @media screen and (min-width: 1024px) {
        border-bottom: 1px solid ${colors.dark_grayish_blue};
    }
`

export const StyledNavbarBrand = styled.div`
    display: flex;
    align-items: center;
`

export const StyledNavbarNav = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;

    li {
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 0;
            height: 4px;
            background-color: ${colors.orange};
        }

        &:hover {
            cursor: pointer;
            color: ${colors.very_dark_blue};
        }

        &:hover::before {
            width: 100%;
            transition: width 300ms ease-in-out;
        }
    }

    a {
        text-transform: capitalize;
    }

    @media screen and (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 120;
        flex-direction: column;
        align-items: start;
        gap: 32px;
        width: 100%;
        height: 100vh;
        padding: 96px 0 0 10%;
        background: linear-gradient(
            90deg,
            ${colors.white} 65%,
            rgba(0, 0, 0, 0.5) 65%
        );

        transform: ${({ $isMenuOpen }) =>
            $isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};

        li {
            height: fit-content;
            color: ${colors.very_dark_blue};
            font-weight: 500;

            &::before {
                bottom: -4px;
            }
        }

        transition: transform 0.3s ease-in-out;
    }

    @media screen and (max-width: 640px) {
        padding-left: 5%;
    }
`

export const StyledMenu = styled.div`
    display: none;
    position: relative;
    z-index: 130;
    margin-top: 11px;
    margin-right: 16px;

    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const StyledNavbarActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;

    button {
        cursor: pointer;
    }

    button:first-child {
        position: relative;

        div {
            position: absolute;
            top: -50%;
            right: -40%;
            width: 22px;
            height: 22px;
            background-color: ${colors.orange};
            color: ${colors.white};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 22px;
            font-size: 12px;
            font-weight: 700;
        }
    }

    button:last-child {
        width: clamp(24px, 10%, 48px);
        height: clamp(24px, 10%, 48px);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:hover {
            border: 2px solid ${colors.orange};
            border-radius: 50%;
        }
    }

    .cart-icon:hover {
        transform: scale(1.1);
        color: ${colors.very_dark_blue};
    }

    @media screen and (max-width: 768px) {
        gap: 16px;
    }
`
