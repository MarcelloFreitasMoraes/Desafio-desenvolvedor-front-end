import React from 'react'
import {
    IoIosArrowDroprightCircle,
    IoIosArrowDropleftCircle,
} from 'react-icons/io'
import { ArrowNext, ArrowPrev } from './Slider.styles'
import { ArrowProps } from './type'

const Arrow: React.FC<ArrowProps> = ({ onClick, direction }) => {
    const Icon =
        direction === 'next'
            ? IoIosArrowDroprightCircle
            : IoIosArrowDropleftCircle
    const StyledArrow = direction === 'next' ? ArrowNext : ArrowPrev
    return (
        <StyledArrow onClick={onClick}>
            <Icon />
        </StyledArrow>
    )
}

export default Arrow
