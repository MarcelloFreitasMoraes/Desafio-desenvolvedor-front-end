'use client'
import React, { useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PdfDocument from '../../../components/ReportPdf'
import {
    Aside,
    Finish,
    HeadingPrice,
    Items,
    ListProducts,
    Total,
} from './CardCheckout.styles'
import { DataPriceProps } from './types'
import { IMovieCart } from '@/hooks/types'
import TypographicComponent from '@/components/Typographic/Typographic'
import { Button } from '@/components'
import useCartData from '@/hooks/useCheckData'
import { useRouter } from 'next/navigation'

const CardPrice: React.FC<DataPriceProps> = ({
    data,
    total,
    setIsDeleting,
}) => {
    const { DeleteAll, LoadingCart } = useCartData()
    const { push } = useRouter()

    const handleButtonClick = () => {
        setIsDeleting(true)
        const pdfDownloadLink = document.getElementById('pdf-download-link')
        if (pdfDownloadLink) {
            pdfDownloadLink.click()
        }
        DeleteAll()
        push(`/purchase`)
    }
    return (
        <Aside>
            <HeadingPrice>
                <TypographicComponent
                    large
                    title={'Valor da Compra'}
                    weight="bold"
                />
            </HeadingPrice>

            {data &&
                Object.entries(data)?.map(
                    ([_, products]: [string, IMovieCart], index) => {
                        const price =
                            products?.total?.toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                            }) ?? '0,00'
                        return (
                            <React.Fragment key={`product_${index}`}>
                                <Items>
                                    <ListProducts>
                                        <li>
                                            <span>
                                                [{products?.amount ?? 0}x]
                                            </span>
                                            <span className="uper">
                                                {products?.name ??
                                                    'Não encontrado'}
                                            </span>
                                        </li>
                                    </ListProducts>

                                    <ListProducts>
                                        <li>
                                            <TypographicComponent
                                                regular
                                                supTitle="R$"
                                                title={price}
                                                weight="bold"
                                            />
                                        </li>
                                    </ListProducts>
                                </Items>
                            </React.Fragment>
                        )
                    }
                )}

            <Finish>
                <Total>
                    <TypographicComponent
                        regular
                        title={'Total'}
                        weight="bold"
                    />
                    <TypographicComponent
                        regular
                        supTitle="R$"
                        title={total}
                        weight="bold"
                    />
                </Total>
                <Button disabled={LoadingCart} onClick={handleButtonClick}>
                    Finalizar Compra
                </Button>
                <PDFDownloadLink
                    id="pdf-download-link"
                    document={
                        <PdfDocument
                            data={data && Object.values(data)}
                            total={total}
                        />
                    }
                    fileName="boleto.pdf"
                ></PDFDownloadLink>
            </Finish>
        </Aside>
    )
}

export default CardPrice
