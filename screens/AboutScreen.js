import {StyleSheet, Text, View} from "react-native";
export const AboutScreen = () => (
    <View style={styles.container}>
        <Text>About Screen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});