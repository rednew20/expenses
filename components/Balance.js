import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from "../utils/index";

const { EXPENSE_COLOR, INCOME_COLOR, BALANCE_COLOR } = colors;

export default function Balance() {
    return (
        <View style={styles.accountDetails}>
            <View style={styles.accountDetailsRow}>
                <View style={{ ...styles.accountDetailsBox, }}>
                    <View style={{ ...styles.accountDetailsRowItem, backgroundColor: INCOME_COLOR }}>
                        <View style={styles.accountDetailsItems}>
                            <Text style={styles.textPrimary}>Income:</Text>
                            <Text style={styles.textSecondary}>$ 20</Text>
                        </View>
                    </View>
                </View>
                <View style={{ ...styles.accountDetailsBox }} >
                    <View style={{ ...styles.accountDetailsRowItem, backgroundColor: EXPENSE_COLOR }}>
                        <View style={styles.accountDetailsItems}>
                            <Text style={styles.textPrimary}>Outcome:</Text>
                            <Text style={styles.textSecondary}>$ 21</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.accountDetailsBox}>
                    <View style={{ ...styles.accountDetailsRowItem, backgroundColor: BALANCE_COLOR }}>
                        <View style={styles.accountDetailsItems}>
                            <Text style={styles.textPrimary}>Balance:</Text>
                            <Text style={styles.textSecondary}>$ 22</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    accountDetails: {

    },
    accountDetailsItems: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 15,
    },
    accountDetailsRow: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "flex-start",
    },
    accountDetailsRowItem: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,
    },
    accountDetailsBox: {
        padding: 5,
        backgroundColor: '#fff'
    },
    textPrimary: {
        fontSize: 16,
        color: "#fff",
        fontWeight: '500',
        margin: 15,

    },
    textSecondary: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '700',

    }
});