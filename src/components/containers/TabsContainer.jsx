import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MoviesScreen, SearchScreen, TVShowsScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

export const TabsContainer = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName='Movies'
      screenOptions={{
        tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12 },
        tabBarIndicatorStyle: { backgroundColor: '#2E3440' },
      }}
    >
      <Tab.Screen name='Movies' component={MoviesScreen} initialParams={{ navigation }} />
      <Tab.Screen name='Search' component={SearchScreen} initialParams={{ navigation }} />
      <Tab.Screen name='TV Shows' component={TVShowsScreen} initialParams={{ navigation }} />
    </Tab.Navigator>
  );
};
