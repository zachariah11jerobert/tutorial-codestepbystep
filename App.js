import React from 'react';
import {View, Text, Modal} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 100, backgroundColor: 'yellow'}}>
        <Text style={{fontSize: 80}}>Normal Screen Text</Text>

        <Modal transparent={true} visible={true}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View
              style={{
                backgroundColor: '#ffffff',
                margin: 50,
                padding: 40,
                borderRadius: 10,
                flex: 1,
              }}>
              <Text style={{fontSize: 50}}>Modal Text</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default App;
