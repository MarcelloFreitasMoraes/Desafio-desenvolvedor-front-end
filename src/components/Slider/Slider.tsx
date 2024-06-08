'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Images } from './data'
import { useWindowResize } from '@/utils/useWindowResize'
import { getSliderSettings } from '@/utils/sliderConfig'
import { Content, Img } from './Slider.styles'

const SliderComponent: React.FC = () => {
    const showArrows = useWindowResize()
    const settings = getSliderSettings(showArrows)

    return (
        <Content>
            <Slider {...settings}>
                {Images.map((item, index) => (
                    <Img src={item.url} alt={item.alt} key={index} />
                ))}
            </Slider>
        </Content>
    )
}

export default SliderComponent
