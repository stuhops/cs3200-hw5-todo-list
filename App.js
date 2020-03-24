import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Button, Text, Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListScreen from './src/components/screens/todo_list_screen';
import CreateTodoScreen from './src/components/screens/create_list_screen';
import store from './src/store/store';

const Stack = createStackNavigator();

export default class App extends React.Component {
  styles = StyleSheet.create({
    addList: {
      marginRight: 17,
      marginTop: 13,
    }
  })
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Shopping Lists"
              component={ListScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Container>
                    <Button transparent onPress={() => navigation.navigate('Create List')}>
                      <Icon name="plus" size={24} color="blue" style={this.styles.addList}/>
                    </Button>
                  </Container>
                )
              })}
            />
            <Stack.Screen name="Create List" component={CreateTodoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
