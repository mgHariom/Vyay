import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {firebase} from './firebase'
import Home from './pages/Home';
import Reports from './pages/Reports';
import Add from './pages/Add';
import Login from './pages/Login';
import Registration from './pages/Registration';
import SignUp from './pages/SignUp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

 function App() {

  const [initializing, setInitialising] = useState(true)
  const [user, setUser] = useState();

  //Handle user state changed
  function onAuthStateChanged (user) {
    setUser(user);
    if (initializing) setInitialising(false)
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, []);

  if (initializing) return null;

  // if(!user){
  //   return(
  //     <Stack.Navigator>
  //       <Stack.Screen options={{headerShown: false}}name= 'SignUp' component={SignUp}/>
  //       <Stack.Screen options={{headerShown: false}}name= 'Registration' component={Registration}/>
  //       <Stack.Screen options={{headerShown: false}}name= 'Login' component={Login}/>
  //     </Stack.Navigator>
  //   )
  // }

  return (
    <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor: '#1f2429', tabBarInactiveBackgroundColor: '#1f2429'}} >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIconStyle: {marginTop: 8},
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color='#fff' size={30} />
        )
      }}/>
      <Tab.Screen name="Add" component={Add} options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIconStyle: {marginTop: 8},
        tabBarIcon: () => (
          <MaterialCommunityIcons name="plus" color='#fff' size={30} />
        )
      }}/>
      <Tab.Screen name="Reports" component={Reports} options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIconStyle: {marginTop: 8},
        tabBarIcon: () => (
          <MaterialCommunityIcons name="book-open-page-variant-outline" color='#fff' size={30} />
        )
      }}/>
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  );
}