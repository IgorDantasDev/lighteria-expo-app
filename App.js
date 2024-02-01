import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens/Home/index';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductDetails} from '~/screens/ProductDetails';
import {Checkout} from '~/screens/Checkout';
import {Provider} from '~/context';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
          <Screen name="Home" component={Home} />
          <Screen name="ProductDetails" component={ProductDetails} />
          <Screen name="Checkout" component={Checkout} />
        </Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
