import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import SelectorView from './components/SelectorView';
import ContentView from './components/ContentView';
import ShortCircuit from './components/ShortCircuit.js';


class App extends React.Component {

    state = {
        selectedView: undefined
    };

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.container}>
                    <ContentView selectedView={this.state.selectedView} />
                    {/** Uncomment below to see second approach */}
                    {/* <ShortCircuit selectedView={this.state.selectedView}/> */}
                    <SelectorView onSelectView={this.onSelectView} />
                </SafeAreaView>
            </>
        );
    }


    onSelectView = (viewType) => {
        this.setState({
            selectedView: viewType
        })
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    }
})

export default App;
