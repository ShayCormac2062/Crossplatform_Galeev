import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {observer} from 'mobx-react';
import eventLogStore from '../viewmodel/EventLogStore';
import todosStore from "../viewmodel/TodoStore";
import * as ImagePicker from "expo-image-picker";
import {TodoLine} from "../components/TodoLine";
import todoStore from "../viewmodel/TodoStore";

export const HomeScreen = observer(({ navigation }) => {
    const [text, setText] = useState('');

    const completedT = todoStore.completedTodos

    const addTodo = () => {
        if (text) {
            todosStore.addTodo(text);
            setText('');
            eventLogStore.logEvent(`Добавлена задача: ${text}`);
        }
    };

    const markAsCompleted = (todo) => {
        todosStore.markAsCompleted(todo);
        eventLogStore.logEvent(`Задача помечена как выполненная: ${todo.text}`);
    }

    const deleteTodo = (todo) => {
        todosStore.deleteTodo(todo);
        eventLogStore.logEvent(`Задача удалена: ${todo.text}`);
    }
    const openImagePicker = async (index) => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled) {
            const updatedTodos = [...todosStore.todos];
            updatedTodos[index].image = result.uri;
            todosStore.todos = updatedTodos;
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Добавить задачу"
                value={text}
                onChangeText={setText}
            />
            <Button title="Добавить" onPress={addTodo} />

            <FlatList
                data={todosStore.todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TodoLine
                        todo={item}
                        onComplete={() => markAsCompleted(item)}
                        onDelete={() => deleteTodo(item)}
                        onImagePicker={() => openImagePicker(item)}
                    />
                )}
            />

            <Button
                title="Завершенные задачи"
                onPress={() => navigation.navigate('CompletedTasks', { completedT })}
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