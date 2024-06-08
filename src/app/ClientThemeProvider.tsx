'use client'

import { theme } from '@/styles/theme/theme'
import { ThemeProvider } from 'styled-components'

export default function ClientThemeProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
