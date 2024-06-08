import Arrow from '@/components/Slider/Arrow'

export const getSliderSettings = (showArrows: boolean) => {
    return {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        nextArrow: showArrows ? <Arrow direction="next" /> : undefined,
        prevArrow: showArrows ? <Arrow direction="prev" /> : undefined,
    }
}
