import { colors } from '@/styles/themes.js'
import styled from 'styled-components'

export const StyledCart = styled.div`
    position: absolute;
    top: 72px;
    right: 5%;
    z-index: 100;
    width: 350px;
    height: fit-content;
    min-height: 200px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 16px 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h3 {
        padding: 0 16px;
        width: 100%;
        color: ${colors.very_dark_blue};
    }

    @media screen and (max-width: 768px) {
        width: 80%;
        top: 64px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (max-width: 640px) {
        width: 98%;
    }
`

export const StyledSeparator = styled.div`
    margin: 16px 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.grayish_blue};
`

export const StyledEmptyMessage = styled.p`
    font-weight: 500;
    flex-grow: 1;
    display: grid;
    place-items: center;
`

export const StyledCartItem = styled.div`
    flex-grow: 1;
    padding: 0 16px 16px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
`

export const StyledDetailItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 56px;
        height: 56px;
        border-radius: 12px;
        object-fit: cover;
        object-position: center;
    }

    h1 {
        text-transform: capitalize;
        font-size: clamp(12px, 4vw, 16px);
    }

    @media screen and (max-width: 640px) {
        img {
            width: 48px;
            height: 48px;
        }
    }
`

export const StyledCartItemPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: clamp(12px, 3vw, 16px);

    p:last-child {
        color: ${colors.very_dark_blue};
        font-weight: 600;
    }
`

export const StyledCheckoutButton = styled.button`
    background-color: ${colors.orange};
    width: 100%;
    padding: 16px;
    color: ${colors.black_75};
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 500;
    border-radius: 12px;
`
