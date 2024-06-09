import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PdfDocument from '../../../../components/ReportPdf'
import {
    Aside,
    Finish,
    Heading,
    Items,
    ListProducts,
    Total,
} from './CardCheckout.styles'
import { DataPriceProps } from './types'
import { IMovieCart } from '@/hooks/types'

const CardPrice: React.FC<DataPriceProps> = ({
    data,
    total,
    fruitsSelected,
}) => {
    return (
        <Aside>
            <Heading>
                <h1>Valor da Compra</h1>
            </Heading>

            {data &&
                Object.entries(data)?.map(
                    ([_, products]: [string, IMovieCart]) => (
                        <React.Fragment key={products?.id}>
                            <Items>
                                <ListProducts>
                                    <li>
                                        <span>[{products.amount}x]</span>
                                        <span className="uper">
                                            {products?.name}
                                        </span>
                                    </li>
                                </ListProducts>

                                <ListProducts>
                                    <li>
                                        <span>
                                            <sup>R$</sup>
                                            {products?.price?.toLocaleString(
                                                'pt-BR',
                                                {
                                                    minimumFractionDigits: 2,
                                                }
                                            )}
                                        </span>
                                    </li>
                                </ListProducts>
                            </Items>
                        </React.Fragment>
                    )
                )}
            <Finish>
                <Total>
                    <h3>Total: </h3>

                    <div>
                        <sup>R$</sup>
                        <span>{total}</span>
                    </div>
                </Total>
                <div>
                    <PDFDownloadLink
                        document={
                            <PdfDocument data={fruitsSelected} total={total} />
                        }
                        fileName="boleto.pdf"
                    >
                        {({ loading }: { loading: boolean }) =>
                            loading ? 'Loading document...' : 'Finalizar Compra'
                        }
                    </PDFDownloadLink>
                </div>
            </Finish>
        </Aside>
    )
}

export default CardPrice
