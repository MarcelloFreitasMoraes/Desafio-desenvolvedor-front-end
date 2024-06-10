'use client'

import {
    Description,
    Large,
    Medium,
    Regular,
    Small,
} from './Typographic.styled'
import { IcontentProps } from './types'

const TypographicComponent: React.FC<IcontentProps> = ({
    large,
    medium,
    small,
    regular,
    description,
    title,
    primary,
    weight,
    supTitle,
}) => {
    const renderTypographic = (Component: React.ElementType | null) => {
        if (!Component) return null
        return (
            <Component primary={primary} weight={weight}>
                {supTitle && <sup>{supTitle}</sup>}
                {title}
            </Component>
        )
    }

    return (
        <>
            {renderTypographic(large ? Large : null)}
            {renderTypographic(medium ? Medium : null)}
            {renderTypographic(regular ? Regular : null)}
            {renderTypographic(small ? Small : null)}
            {renderTypographic(description ? Description : null)}
        </>
    )
}

export default TypographicComponent
