import React, {useState} from 'react';
import {Pressable, View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Button} from 'react-native';

// 1 домашка
// export default function App() {
//     const [button1Count, setButton1Count] = useState(0);
//
//     const handleButton1Press = () => {
//         if (button1Count < 3) {
//             setButton1Count(button1Count + 1);
//         }
//     };
//
//     const handleButton2Press = () => {
//         setButton1Count(0);
//     };
//
//     const isButton1Disabled = button1Count >= 3;
//
//     return (
//         <View style={styles.container}>
//             <Text style={ styles.buttonLabelText }>
//                 {`Кнопку нажали ${button1Count} раз!`}
//             </Text>
//
//             <TouchableOpacity
//                 style={[styles.button, isButton1Disabled && styles.disabledButton]}
//                 onPress={handleButton1Press}
//                 disabled={isButton1Disabled}
//             >
//                 <Text style={styles.buttonText}>
//                     {isButton1Disabled ? 'Кнопка 1 заблокирована' : 'Кнопка 1'}
//                 </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.resetButton}
//                 onPress={handleButton2Press}>
//                 <Text style={styles.buttonText}>Сбросить</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     button: {
//         backgroundColor: '#007AFF',
//         padding: 15,
//         borderRadius: 5,
//         marginBottom: 20,
//     },
//     disabledButton: {
//         backgroundColor: '#A9A9A9',
//     },
//     resetButton: {
//         backgroundColor: '#FF3B30',
//         padding: 15,
//         borderRadius: 5,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     buttonLabelText: {
//         color: 'black',
//         fontSize: 18,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         margin: 24
//     },
// });

//2 домашка
// export default function App() {
//     const [inputValue1, setInputValue1] = useState('');
//     const [inputValue2, setInputValue2] = useState('');
//     const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
//     const [errorMessage, setErrorMessage] = useState('');
//
//     const handleShowValue = () => {
//         if (inputValue2.trim() !== '') {
//             setErrorMessage('');
//             setIsLoginFormVisible(false);
//         } else {
//             setErrorMessage('Введите пароль');
//         }
//     };
//
//     return (
//         <View style={styles.container}>
//             {isLoginFormVisible ? (
//                 <View style={styles.loginForm}>
//                     <Text style={styles.label}>Логин:</Text>
//                     <TextInput
//                         style={styles.input}
//                         onChangeText={(text) => setInputValue1(text)}
//                         value={inputValue1}
//                     />
//                     <Text style={styles.label}>Пароль:</Text>
//                     <TextInput
//                         style={styles.input}
//                         onChangeText={(text) => setInputValue2(text)}
//                         value={inputValue2}
//                         secureTextEntry
//                     />
//                     <Text style={styles.errorMessage}>{errorMessage}</Text>
//                     <TouchableOpacity
//                         style={styles.button}
//                         onPress={handleShowValue}
//                     >
//                         <Text style={styles.buttonText}>Войти</Text>
//                     </TouchableOpacity>
//                 </View>
//             ) : (
//                 <View style={styles.welcomeContainer}>
//                     <Text style={styles.welcomeText}>Welcome</Text>
//                 </View>
//             )}
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     loginForm: {
//         width: '80%',
//     },
//     label: {
//         fontSize: 16,
//         marginBottom: 5,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
//         marginBottom: 10,
//         borderRadius: 5,
//     },
//     errorMessage: {
//         color: 'red',
//         marginBottom: 10,
//     },
//     button: {
//         backgroundColor: '#007AFF',
//         padding: 15,
//         borderRadius: 5,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     welcomeContainer: {
//         alignItems: 'center',
//     },
//     welcomeText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
// });

//3 домашка
export default function App() {
    const Box = ({width, height, color}) => (
        <View
            style={{
                width,
                height,
                backgroundColor: color,
            }}
        />
    );

    const [boxes, setBoxes] = useState([]);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState('');

    const addBox = () => {
        if (size > 0 && color) {
            setBoxes([...boxes, {width: size, height: size, color}]);
        }
    };

    const deleteBoxes = () => {
        setBoxes([]);
    };

    const setValues = () => {
        addBox();
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {boxes.map((box, index) => (
                    <Box key={index} width={box.width} height={box.height} color={box.color}/>
                ))}
            </ScrollView>

            <View style={styles.inputsContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Размер</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => setSize(parseInt(text))}
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Цвет</Text>
                    <Pressable
                        style={[styles.colorButton, {backgroundColor: 'yellow'}]}
                        onPress={() => setColor('yellow')}
                    />
                    <Pressable
                        style={[styles.colorButton, {backgroundColor: 'blue'}]}
                        onPress={() => setColor('blue')}
                    />
                    <Pressable
                        style={[styles.colorButton, {backgroundColor: 'red'}]}
                        onPress={() => setColor('red')}
                    />
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <Button title='ДОБАВИТЬ' onPress={setValues}/>
                <Button title='ОЧИСТИТЬ' onPress={deleteBoxes}/>
            </View>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        padding: 16,
    },
    scrollView: {
        flex: 1,
        marginBottom: 16,
    },
    inputsContainer: {
        flexDirection: 'column',
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        marginRight: 8,
    },
    textInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    colorButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 8,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
};
