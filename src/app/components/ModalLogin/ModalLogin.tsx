import React, {
    useState,
    ChangeEvent,
    FormEvent,
    useRef,
    useEffect,
} from 'react'
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

const ModalLogin = ({ showModal, isLogged, closeModal }: ModalProps) => {
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [alert, setAlert] = useState<{
        type: 'success' | 'error'
        message: string
    } | null>(null)

    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                closeModal()
            }
        }

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showModal])

    const animation = useSpring({
        config: { duration: 250 },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    })

    const loggedUser = 'teste@teste.com.br'
    const nameUser = 'Marcelo Moraes'
    const loggedPassword = '123456'

    const handleSignIn = (e: FormEvent) => {
        e.preventDefault()

        if (user === loggedUser && password === loggedPassword) {
            localStorage.setItem('Logged', 'isLogged')
            setAlert(null)
            window.location.href = window.location.href
        } else {
            setAlert({ type: 'error', message: 'Usuário não cadastrado' })
        }
    }

    const handleSignOut = () => {
        localStorage.removeItem('Logged')
        window.location.reload()
    }

    return (
        <>
            {showModal && (
                <animated.div style={animation}>
                    <Login ref={modalRef}>
                        <Heading>
                            {isLogged ? (
                                <Logged>
                                    <h3>Bem vindo</h3>
                                    <Sair>
                                        <div>{nameUser}</div>
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
                                        <Button onClick={handleSignIn}>
                                            Entrar
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
