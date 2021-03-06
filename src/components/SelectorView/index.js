import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CustomButton from '../CustomButton';
import { ViewTypes } from '../../utils/constants';
import styles from './styles';


class SelectorView extends Component {
    render() {
        return (
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <CustomButton
                    label="Show Button"
                    clickListener={this.onPressShowButton} />
                <CustomButton
                    style={styles.textBtn}
                    label="Show Text View"
                    clickListener={this.onPressShowText} />
                <CustomButton
                    style={styles.textInputBtn}
                    label="Show Text Input"
                    clickListener={this.onPressShowTextInput} />
                <CustomButton
                    style={styles.imageBtn}
                    label="Show Image"
                    clickListener={this.onPressShowImage} />
                <CustomButton
                    style={styles.loaderBtn}
                    label="Show a loader"
                    clickListener={this.onPressShowLoader} />
            </ScrollView>
        )
    }

    onPressShowButton = () => {
        this.props.onSelectView?.(ViewTypes.BUTTON);
    }

    onPressShowText = () => {
        this.props.onSelectView?.(ViewTypes.TEXT);
    }

    onPressShowTextInput = () => {
        this.props.onSelectView?.(ViewTypes.TEXT_INPUT);
    }

    onPressShowImage = () => {
        this.props.onSelectView?.(ViewTypes.IMAGE);
    }

    onPressShowLoader = () => {
        this.props.onSelectView?.(ViewTypes.LOADER);
    }

}


export default SelectorView;