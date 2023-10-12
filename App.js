import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        // Потом сделаю
    };

    const addTodo = () => {
        if (text) {
            setTodos([...todos, { text, completed: false }]);
            setText('');
        }
    };

    const markAsCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = true;
        setTodos(updatedTodos);

        const completedTodo = updatedTodos[index];
        setCompletedTodos([...completedTodos, completedTodo]);
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const openImagePicker = async (index) => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
            const updatedTodos = [...todos];
            updatedTodos[index].image = result.uri;
            setTodos(updatedTodos);
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
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TodoLine
                        todo={item}
                        onComplete={() => markAsCompleted(index)}
                        onDelete={() => deleteTodo(index)}
                        onImagePicker={() => openImagePicker(index)}
                    />
                )}
            />

            <Button
                title="Завершенные задачи"
                onPress={() => navigation.navigate('CompletedTasks', { completedTodos })}
            />
        </View>
    );
};

const TodoLine = ({ todo, onComplete, onDelete, onImagePicker }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{todo.text}</Text>
        {!todo.completed && (
            <IconButton icon="check" onPress={onComplete} />
        )}
        <IconButton icon="delete" onPress={onDelete} />
        <IconButton icon="camera" onPress={onImagePicker} />
        {todo.image && <Image source={{ uri: todo.image }} style={styles.todoImage} />}
    </View>
);

const CompletedTasksScreen = ({ route }) => {
    const completedTodos = route.params.completedTodos || [];

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
        </View>
    );
};

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CompletedTasks" component={CompletedTasksScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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

export default App;
