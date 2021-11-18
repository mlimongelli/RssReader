import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './src/hooks/components/Home';
import {RssFeed} from './src/hooks/components/RssFeed';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="RssFeed"
          component={RssFeed}
          options={{title: 'Rss Feed'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
