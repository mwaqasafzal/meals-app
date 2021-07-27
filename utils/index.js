import Colors from '../constants/Colors';
import {Platform} from 'react-native';

export const getHeaderStyle = () => {
    return {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ''
    }
}

export const getHeaderTintColor = () => {
    return Platform.OS === "android" ? '#ffffff' : Colors.primaryColor
}