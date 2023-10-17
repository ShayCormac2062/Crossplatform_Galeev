import FontAwesomeGlyphs from "react-native-vector-icons/FontAwesome";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {TabNavigator} from './TabNavigator'
import { AboutScreen } from '../screens/AboutScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={({ navigation }) => ({
                headerTitle: <FontAwesomeGlyphs name="music" size={30} />,
                headerRight: () => (
                    <TouchableOpacity
                        style={styles.aboutButton}
                        onPress={() => navigation.navigate('About')}
                    >
                        <Text style={styles.aboutButtonText}>О приложении</Text>
                    </TouchableOpacity>
                ),
            })}
        />
        <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
);

const styles = StyleSheet.create({
    aboutButton: {
        marginRight: 10,
    },
    aboutButtonText: {
        color: 'blue',
    },
});