import React from 'react';
import { Alert, StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Input, Form, Item, Label, Textarea, Button, Text } from 'native-base';
import { createList } from '../../actions/lists';

export class CreateListScreen extends React.Component {
  state = {
    title: '',
    icon: '',
    titleMissing: false
  }

  styles = StyleSheet.create({
    saveButtonContainer: {
      padding: 14,
      marginTop: 16,
    },
    iconRow: {
      marginHorizontal: 16,
      marginTop: 32,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    icon: {
      flex: 1,
      justifyContent: 'center',
    },
    iconSelected: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
    },
  });

  update = (key, value) => this.setState({ [key]: value })

  save = () => {
    if (this.state.title === '') {
      Alert.alert(
        'Missing Info',
        'You have to provide a title dummy!!',
      );

      this.setState({ titleMissing: true })

      return;
    }
    this.props.createList(
      this.state.title,
      this.state.icon,
    );


    this.props.navigation.goBack();
  }

  render() {

    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              value={this.state.title}
              onChangeText={text => this.update('title', text)}
            />
          </Item>
          <Item floatingLabel>
            <Label>Icon</Label>
            <Input
              value={this.state.icon}
              onChangeText={text => this.update('icon', text)}
            />
          </Item>

          <View style={this.styles.iconRow}>
            <Button transparent style={this.state.icon === 'star' ? this.styles.iconSelected : this.styles.icon} onPress={() => selectIcon()}>
              <Icon name="star" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'glass' ? this.styles.iconSelected : this.styles.icon} onPress={() => selectIcon()}>
              <Icon name="glass" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'tint' ? this.styles.iconSelected : this.styles.icon} onPress={() => selectIcon()}>
              <Icon name="tint" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'trophy' ? this.styles.iconSelected : this.styles.icon} onPress={() => selectIcon()}>
              <Icon name="trophy" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'life-saver' ? this.styles.iconSelected : this.styles.icon} onPress={() => selectIcon()}>
              <Icon name="life-saver" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'bicycle' ? this.styles.iconSelected : this.styles.icon} onPress={() => selectIcon()}>
              <Icon name="bicycle" size={24} color="blue"/>
            </Button>
          </View>
        </Form>

        <Container style={this.styles.saveButtonContainer}>
          <Button onPress={this.save}><Text>Save</Text></Button>
        </Container>
      </Container>
    );
  }
}

const mapPropsToDispatch = {
  createList,
};

export default connect(null, mapPropsToDispatch)(CreateListScreen);
