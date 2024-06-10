import theme from '@/styles/theme/theme'
import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
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
