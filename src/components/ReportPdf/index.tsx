'use client'

import React from 'react'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
} from '@react-pdf/renderer'
import { ReportPdfProps } from './types'
import theme from '@/styles/theme/theme'

const styles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: theme.colors.white,
    },
    section: {
        marginBottom: 20,
    },
    div: {
        marginTop: 30,
        marginBottom: 20,
    },
    header: {
        marginBottom: 10,
    },
    logo: {
        width: 200,
        height: 80,
        marginBottom: 10,
        backgroundColor: theme.colors.textLight,
    },
    headerText: {
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        color: theme.colors.text,
    },
    text: {
        fontSize: 12,
        color: theme.colors.text,
    },
    box: {
        padding: 10,
        borderBottom: `1px solid ${theme.colors.textLight}`,
        marginBottom: 5,
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottom: `1px solid ${theme.colors.textLight}`,
    },
    total: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    fiscal: {
        textAlign: 'center',
    },
})

const ReportPdf: React.FC<ReportPdfProps> = ({ data, total }) => {
    const logo = './logo.png'
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Image style={styles.logo} src={logo} />
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Relatório Confidencial</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>CONFERÊNCIA DE CONTA</Text>
                </View>

                <View style={styles.div}>
                    <Text style={styles.title}>Produto</Text>
                    {data?.map((item, index) => (
                        <View style={styles.flex} key={index}>
                            <Text style={styles.text}>{item?.name}</Text>
                            <Text style={styles.text}>{item?.total}</Text>
                        </View>
                    ))}

                    <View style={styles.total}>
                        <Text>
                            Total: <sup>R$</sup>
                            {total}
                        </Text>
                    </View>
                </View>
                <View style={styles.fiscal}>
                    <Text style={styles.text}>
                        ** Não é Documento Fiscal **
                    </Text>
                </View>
            </Page>
        </Document>
    )
}

export default ReportPdf
