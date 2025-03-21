import { colors } from '@/styles/themes.js'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const StyledCarousel = styled.div`
    width: 100%;

    img {
        object-fit: cover;
        object-position: center;
    }

    .swiper-wrapper {
        height: 250px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (min-width: 1024px) {
        width: 40%;

        .swiper-wrapper {
            height: 100%;
            margin-bottom: 32px;

            img {
                width: 100%;
                height: 350px;
                border-radius: 12px;
            }
        }
    }
`
export const StyledSwiper = styled(Swiper)`
    cursor: pointer;

    .swiper-button-next,
    .swiper-button-prev {
        background-color: ${colors.white};
        width: 40px;
        height: 40px;
        border-radius: 50%;

        &::after {
            font-weight: bolder;
            font-size: 14px;
            color: ${colors.black_75};
        }
    }

    @media screen and (min-width: 1024px) {
        .swiper-button-next,
        .swiper-button-prev {
            display: none;
        }
    }
`

export const StyledSwiperThumbs = styled(Swiper)`
    display: none;

    @media screen and (min-width: 1024px) {
        display: flex;
    }
`

export const StyledSwiperSlideThumb = styled(SwiperSlide)`
    position: relative;
    overflow: hidden;
    height: 100px;
    background-image: ${({ $image }) => ($image ? `url(${$image})` : 'none')};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 12px;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }

    &:hover {
        border: 3px solid ${colors.orange};
    }

    &:hover::after {
        background-color: ${colors.pale_orange};
    }
`
