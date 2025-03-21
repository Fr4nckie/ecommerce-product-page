import { colors } from '@/styles/themes.js'
import { styled } from 'styled-components'

export const StyledProduct = styled.div`
    flex-grow: 1;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 1024px) {
        padding: 0 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const StyledProductDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    padding: 5%;
`

export const StyledTitle = styled.h1`
    text-transform: capitalize;
    font-size: 2.2rem;
    color: ${colors.very_dark_blue};
`

export const StyledSubtitle = styled.h3`
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
`

export const StyledPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledDescription = styled.p`
    line-height: 28px;
    font-size: 18px;
`

export const StyledDiscountedPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    p:first-child {
        color: ${colors.very_dark_blue};
        font-weight: 500;
        font-size: 32px;
    }

    p:last-child {
        font-weight: 600;
        font-size: 14px;
        color: ${colors.white};
        background-color: ${colors.very_dark_blue};
        padding: 4px 8px;
        border-radius: 10%;
    }
`

export const StyledOriginalTitle = styled.p`
    text-decoration: line-through;
    font-size: 18px;
`

export const StyledProductActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`

export const StyledQuantitySelector = styled.div`
    width: 100%;
    height: 48px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    background-color: ${colors.pale_orange};
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;

    p {
        justify-self: center;
    }

    button {
        height: 100%;
    }

    button:hover {
        transform: scale(1.1);
        background-color: inherit;
        border-radius: 12px;
    }
`

export const StyledAddToCart = styled.button`
    background-color: ${colors.orange};
    width: 100%;
    padding: 16px;
    color: ${colors.very_dark_blue};
    font-weight: 600;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border-radius: 8px;

    &:hover {
        background-color: rgb(255, 125, 26, 0.7);
        transition: background .3s ease-in-out;
    }
`

export const StyledProductModal = styled.div`
    display: none;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    align-items: center;
    justify-content: center;

    button {
        position: fixed;
        top: 8%;
        right: 30%;
        
        &:hover {
            transform: scale(1.1);
        }
    }

    & .swiper-button-next,
    & .swiper-button-prev {
        display: flex;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
    }
`
