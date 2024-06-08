import { ButtonHTMLAttributes } from 'react'

interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onToggle'>,
        OriginalButtonProps {
    onToggle?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>
}
