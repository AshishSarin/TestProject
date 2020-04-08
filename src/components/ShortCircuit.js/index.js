import React, { Component } from 'react'
import { View, Text, TextInput, Image, ActivityIndicator } from 'react-native'
import { ViewTypes } from '../../utils/constants';
import CustomButton from '../CustomButton';
import styles from './styles'

class ShortCircuit extends Component {
    render() {
        const { selectedView } = this.props;
        return (
            <View style={styles.container}>
                {
                    Boolean(selectedView === ViewTypes.BUTTON) &&
                    <CustomButton label="Please press me🙂"
                        clickListener={this.onPressButton} />

                }
                {
                    Boolean(selectedView === ViewTypes.TEXT) &&
                    <Text style={styles.textView}>
                        This is a text component
                    </Text>

                }
                {
                    Boolean(selectedView === ViewTypes.TEXT_INPUT) &&
                    <TextInput
                        placeholderTextColor={'#f1f'}
                        placeholder="This is a text input"
                        style={styles.textInputView} />

                }
                {
                    Boolean(selectedView === ViewTypes.IMAGE) &&
                    <Image
                        resizeMode="contain"
                        style={styles.imageView}
                        source={require('../../assets/images/react_icon/splash_icon.png')} />

                }
                {
                    Boolean(selectedView === ViewTypes.LOADER) &&
                    <ActivityIndicator color={'#000'} size="large" />

                }
            </View>
        )
    }

    onPressButton = () => {
        alert('Hi');
    }

}

export default ShortCircuit
