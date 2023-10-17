import {StyleSheet, Text, View} from "react-native";


export const NewsScreen = () => (
    <View style={styles.container}>
        <Text>News Screen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
