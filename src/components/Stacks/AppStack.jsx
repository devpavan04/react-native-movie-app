import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TabsScreen, SingleScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='TabsScreen'
          component={TabsScreen}
          options={{
            title: 'Movies & TV Shows',
            headerStyle: {
              backgroundColor: '#2E3440',
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='SingleScreen'
          component={SingleScreen}
          options={({ route }) => {
            return {
              title: route.params.item.title ?? route.params.item.name,
              headerStyle: {
                backgroundColor: '#2E3440',
              },
              headerTitleStyle: {
                color: 'white',
                fontWeight: 'bold',
              },
              headerTintColor: 'white',
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
