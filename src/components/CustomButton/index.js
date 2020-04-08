import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const CustomButton = (props) => {

    const { label, clickListener } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.container, props.style]}
            onPress={clickListener}>
            <Text style={styles.label}>
                {label}
            </Text>
        </TouchableOpacity>
    )

}


export default CustomButton;