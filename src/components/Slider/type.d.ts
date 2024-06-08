export interface Image {
    url: string
    alt: string
}

export interface ArrowProps {
    onClick?: React.MouseEventHandler<HTMLElement>
    direction: 'next' | 'prev'
}
