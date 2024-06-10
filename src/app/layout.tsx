'use client'
import { Inter } from 'next/font/google'
import GlobalStyle from '@/styles/Global'
import ClientThemeProvider from './ClientThemeProvider'
import { BaseLayout } from '@/components'
import './globals.css'
import StyledComponentsRegistry from './StyledComponentsRegistry'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/utils/react-query'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [isLogged, setIsLogged] = useState<string | null>()

    useEffect(() => {
        return setIsLogged(localStorage.getItem('Logged'))
    }, [])

    return (
        <html lang="en">
            <body className={inter.className}>
                <QueryClientProvider client={queryClient}>
                    <StyledComponentsRegistry key="styled-components-registry">
                        <ClientThemeProvider key="client-theme-provider">
                            <GlobalStyle />
                            <BaseLayout isLogged={isLogged}>
                                {children}
                            </BaseLayout>
                        </ClientThemeProvider>
                    </StyledComponentsRegistry>
                </QueryClientProvider>
            </body>
        </html>
    )
}
