import {StyleSheet, Text, View} from "react-native";

export const ChatScreen = () => (
    <View style={styles.container}>
        <Text>Chat Screen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});