import React from 'react';
import {View, Text, FlatList} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  async apiCall() {
    let resp = await fetch('https://reactnative.dev/movies.json');
    let respJson = await resp.json();
    console.log(respJson);
    this.setState({data: respJson.movies});
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 100}}>API Call</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text
          style={{fontSize:40,backgroundColor:'skyblue',margin:15}}
          >{item.title}</Text>}></FlatList>
      </View>
    );
  }
}

export default App;
