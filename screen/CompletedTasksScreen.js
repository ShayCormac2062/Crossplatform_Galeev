import { observer } from 'mobx-react';
import {Button, FlatList, StyleSheet, View, Text} from "react-native";
import React from "react";
import {TodoLine} from '../components/TodoLine';
import todoStore from "../viewmodel/TodoStore";

export const CompletedTasksScreen = observer(({ route, navigation }) => {
    const completedTodos = todoStore.completedTodos || [];

    return (
        <View style={styles.container}>
            <Text>Завершенные задачи</Text>
            <FlatList
                data={completedTodos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TodoLine
                        todo={item}
                        onComplete={() => {}}
                        onDelete={() => {}}
                        onImagePicker={() => {}}
                    />
                )}
            />
            <Button
                title="Просмотреть лог событий"
                onPress={() => navigation.navigate('EventLog')}
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