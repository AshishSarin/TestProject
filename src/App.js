import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';


class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text>
            Test
          </Text>
        </SafeAreaView>
      </>
    );
  }
};

export default App;
