import React, { Component } from 'react'
import { View, Text, TextInput, Image, ActivityIndicator } from 'react-native'
import { ViewTypes } from '../../utils/constants';
import CustomButton from '../CustomButton';
import styles from './styles'

class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderSelectedComponent()}
            </View>
        )
    }

    renderSelectedComponent = () => {
        const { selectedView } = this.props;
        switch (selectedView) {
            case ViewTypes.BUTTON:
                return (
                    <CustomButton label="Please press me🙂"
                        clickListener={this.onPressButton} />
                );
            case ViewTypes.TEXT:
                return (
                    <Text style={styles.textView}>
                        This is a text component
                    </Text>
                );
            case ViewTypes.TEXT_INPUT:
                return (
                    <TextInput
                        placeholderTextColor={'#f1f'}
                        placeholder="This is a text input"
                        style={styles.textInputView} />
                );
            case ViewTypes.IMAGE:
                return (
                    <Image
                        resizeMode="contain"
                        style={styles.imageView}
                        source={require('../../assets/images/react_icon/splash_icon.png')} />
                );
            case ViewTypes.LOADER:
                return (
                    <ActivityIndicator color={'#000'} size="large" />
                );
            default:
                return null
        }
    }

    onPressButton = () => {
        alert('Hi');
    }

}

export default ContentView
