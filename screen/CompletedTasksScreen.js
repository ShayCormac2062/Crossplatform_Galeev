import {observer} from 'mobx-react';
import {Button, FlatList, StyleSheet, View, Text} from "react-native";
import React, {useRef} from "react";
import {Modalize} from 'react-native-modalize';
import {TodoLine} from '../components/TodoLine';
import todosStore from "../viewmodel/TodoStore";

export const CompletedTasksScreen = observer(({ route, navigation }) => {
    const completedTodos = todosStore.completedTodos || [];
    const modalizeRef = useRef(null);

    const openModal = () => {
        modalizeRef.current?.open();
    };

    return (
        <View style={styles.container}>
            <Text>Завершенные задачи</Text>
            <Button
                title="Просмотреть завершенные задачи"
                onPress={openModal}
            />

            <Modalize ref={modalizeRef}>
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
            </Modalize>
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