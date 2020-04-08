import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textView: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#000'
    },

    textInputView: {
        height: 32,
        width: 250,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 12,
        color: '#000',
        fontSize: 14
    },

    imageView: {
        height: 200,
        width: 200
      }
});


export default styles;