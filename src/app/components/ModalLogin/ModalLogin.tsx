import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useSpring, animated } from 'react-spring'
import { ModalProps } from './types'
import Alert from '@/components/Alert'
import { Button } from '@/components'
import {
    Entrar,
    Heading,
    Logged,
    Loggouf,
    Login,
    Sair,
} from './ModalLogin.styles'
import { authenticateUser } from '@/utils/authenticateUser'

const ModalLogin = ({ showModal, isLogged }: ModalProps) => {
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [alert, setAlert] = useState<{
        type: 'error'
        message: string
    } | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    })

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await authenticateUser(user, password)
        } catch (error) {
            if (error instanceof Error) {
                setAlert({ type: 'error', message: error.message })
            } else {
                setAlert({ type: 'error', message: 'Erro desconhecido.' })
            }
        }

        setLoading(false)
    }

    const handleSignOut = () => {
        localStorage.removeItem('Logged')
        window.location.reload()
    }

    return (
        <>
            {showModal && (
                <animated.div style={animation}>
                    <Login>
                        <Heading>
                            {isLogged ? (
                                <Logged>
                                    <h3>Bem vindo</h3>
                                    <Sair>
                                        <div>
                                            {localStorage.getItem('nameUser')}
                                        </div>
                                        <Button onClick={handleSignOut}>
                                            Sair
                                        </Button>
                                    </Sair>
                                </Logged>
                            ) : (
                                <Loggouf>
                                    <h3>Login</h3>
                                    <Entrar>
                                        <div>
                                            <label htmlFor="Email">Email</label>
                                            <input
                                                type="email"
                                                placeholder="Digite seu email..."
                                                value={user}
                                                onChange={(
                                                    e: ChangeEvent<HTMLInputElement>
                                                ) => setUser(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="Password">
                                                Senha
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="Digite sua senha..."
                                                value={password}
                                                onChange={(
                                                    e: ChangeEvent<HTMLInputElement>
                                                ) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </div>
                                        <Button
                                            onClick={handleSignIn}
                                            disabled={loading}
                                        >
                                            {loading ? 'Entrando...' : 'Entrar'}
                                        </Button>
                                    </Entrar>
                                </Loggouf>
                            )}
                        </Heading>
                    </Login>
                </animated.div>
            )}
            {alert && <Alert type={alert.type} message={alert.message} />}
        </>
    )
}

export default ModalLogin
