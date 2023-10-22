import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { observer } from 'mobx-react';
import eventLogStore from '../viewmodel/EventLogStore';

export const EventLogScreen = observer(() => {
    return (
        <View style={styles.container}>
            <Text>Лог событий</Text>
            <FlatList
                data={eventLogStore.events}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Text>{item}</Text>
                )}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    todoText: {
        flex: 1,
    },
    todoImage: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
});