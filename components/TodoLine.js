import {StyleSheet, View, Text} from 'react-native';
import {IconButton} from "react-native-paper";
import React from "react";

export const TodoLine = ({ todo, onComplete, onDelete, onImagePicker }) => (
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