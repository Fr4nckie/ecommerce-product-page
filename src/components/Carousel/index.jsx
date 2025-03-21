/* eslint-disable react/prop-types */
import { SwiperSlide } from 'swiper/react'
import image1 from '@/assets/images/image-product-1.jpg'
import image2 from '@/assets/images/image-product-2.jpg'
import image3 from '@/assets/images/image-product-3.jpg'
import image4 from '@/assets/images/image-product-4.jpg'
import thumbnail1 from '@/assets/images/image-product-1-thumbnail.jpg'
import thumbnail2 from '@/assets/images/image-product-2-thumbnail.jpg'
import thumbnail3 from '@/assets/images/image-product-3-thumbnail.jpg'
import thumbnail4 from '@/assets/images/image-product-4-thumbnail.jpg'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState } from 'react'
import {
    StyledCarousel,
    StyledSwiper,
    StyledSwiperSlideThumb,
    StyledSwiperThumbs
} from './Carousel.styles.js'

function Carousel({ onclick }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const images = [image1, image2, image3, image4]
    const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]

    return (
        <StyledCarousel>
            <StyledSwiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                onClick={onclick}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`product-image-${index + 1}`} />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
            <StyledSwiperThumbs
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {thumbnails.map((image, index) => (
                    <StyledSwiperSlideThumb
                        key={index}
                        $image={image}
                    ></StyledSwiperSlideThumb>
                ))}
            </StyledSwiperThumbs>
        </StyledCarousel>
    )
}

export default Carousel
