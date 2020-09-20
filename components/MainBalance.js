import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utils/index";

const { EXPENSE_COLOR, INCOME_COLOR, BALANCE_COLOR, PRIMARY_COLOR } = colors;

export default function MainBalance() {
    return (
        <View style={styles.mainBalanceRow}>
            <View style={styles.mainBalanceView}>
                <View>
                    <Text>Total balance</Text>
                    <Text style={styles.mainBalance}>$ 2,000.00</Text>
                </View>
                <View style={styles.newTransaction}>
                    <MaterialCommunityIcons name="coolant-temperature" size={35} color={PRIMARY_COLOR} />
                </View>
            </View>
            <View>
                <Text>$ 2,000.00</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainBalanceRow: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 15,
    },
    mainBalanceView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 15,
    },
    mainTransaction: {
        margin: 15,
        padding: 15,
    },
    mainBalance: {
        fontSize: 24,
        fontWeight: '700',
        margin: 15,
        padding: 15
    }
})
