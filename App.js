import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screen/HomeScreen';
import { CompletedTasksScreen } from './screen/CompletedTasksScreen';
import { EventLogScreen } from './screen/EventLogScreen';

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CompletedTasks" component={CompletedTasksScreen} />
            <Stack.Screen name="EventLog" component={EventLogScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
