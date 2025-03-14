import { colors } from '@/styles/themes.js'
import styled from 'styled-components'

export const StyledCart = styled.div`
    position: absolute;
    top: 72px;
    right: 0;
    z-index: 100;
    width: 300px;
    height: 200px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    border-radius: 5%;
    padding: 16px 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h3 {
        padding: 0 16px;
        width: 100%;
        color: ${colors.very_dark_blue};
    }

    @media screen and (max-width: 768px) {
        width: 80%;
        top: 96px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (max-width: 640px) {
        width: 100%;
        left: 0;
        transform: translateX(0);
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
