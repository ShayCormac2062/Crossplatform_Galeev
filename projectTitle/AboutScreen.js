import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Экран About</Text>
            <Button
                title="Вернуться на Главный экран"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default AboutScreen;