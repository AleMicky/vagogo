import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TABS } from '../consts/ConstsNavigation';

function DashboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard...!</Text>
    </View>
  );
}
function VehiclesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Vehicles...!</Text>
    </View>
  );
}
function BookingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bookings...!</Text>
    </View>
  );
}
function MessagesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages...!</Text>
    </View>
  );
}
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile...!</Text>

      <Button
        title="Go to Main Navigation"
        onPress={() => navigation.navigate(TABS)}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const HostNavigation = () => {
  return (

    <Tab.Navigator initialRouteName="Settings"
      tabBarOptions={{
        activeTintColor: '#71C6C4',
        inactiveTintColor: "#fff",
        labelStyle: { fontSize: 12, color: '#fff' },
        style: { backgroundColor: '#152727' },
      }}>
      <Tab.Screen name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Vehicles"
        component={VehiclesScreen}
        options={{
          tabBarLabel: 'Vehicles',
          tabBarIcon: ({ color }) => (
            <Icon name="truck" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-o" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Icon name="comment-o" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="user-circle-o" color={color} size={20} />
          ),
        }} />

    </Tab.Navigator>

  );
}

export default HostNavigation;
