import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import { ModalProps } from './types'
import { Button } from '@/components'
import { Background, CheckItem, CloseChecked, Wrapper } from './Modal.styles'
import { useRouter } from 'next/navigation'
import TypographicComponent from '@/components/Typographic/Typographic'

const Modal: React.FC<ModalProps> = ({ check, setCheck }) => {
    const { push } = useRouter()
    const modalRef = useRef<HTMLDivElement>(null)

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: check ? 1 : 0,
        transform: check ? `translateY(0%)` : `translateY(-100%)`,
    })

    const closeCheck = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current === e.target) {
            setCheck(false)
        }
    }

    const keyPress = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape' && check) {
                setCheck(false)
            }
        },
        [setCheck, check]
    )

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    const goToCart = () => {
        push(`/cart`)
    }

    return (
        <>
            {check && (
                <Background ref={modalRef} onClick={closeCheck}>
                    <animated.div style={animation}>
                        <Wrapper>
                            <TypographicComponent
                                large
                                title={
                                    'Seu produto foi adicionado ao carrinho!'
                                }
                                weight="bold"
                            />
                            <CheckItem />
                            <Button onClick={goToCart}>
                                Ir para o carrinho
                            </Button>
                            <CloseChecked
                                aria-label="Close check"
                                onClick={() => setCheck(false)}
                            />
                        </Wrapper>
                    </animated.div>
                </Background>
            )}
        </>
    )
}

export default Modal
