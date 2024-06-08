'use client'

import { ButtonProps } from './types'
import { Button as StyledButton } from './Button.styles'

const Button: React.FC<ButtonProps> = (props) => {
    return <StyledButton {...props} />
}

export default Button
