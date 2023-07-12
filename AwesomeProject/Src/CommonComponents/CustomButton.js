import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { Fontsize, appcolor } from '../ColorConsts';

export default function CustomButton(props) {
    const {
        customstyle,
        title,
        onPress, customstyletext, isDisable } = props

        const styles = StyleSheet.create({
            button: {
                backgroundColor: appcolor.blue,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: wp('2.5'),
                width: wp('30'),
                borderRadius: wp('2'),
                elevation: 10,
                shadowColor: appcolor.purple,
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 5,

            },
            text: {
                color: appcolor.white,
                // fontFamily: fontFamily.UbuntuRegular,
                fontSize: Fontsize.medium,

            },
            customstyle: customstyle,
            customstyletext: customstyletext,
        });


  return (
    <TouchableOpacity

                disabled={isDisable ? true : false}
                onPress={onPress}
                style={[{ ...styles.button }, { ...styles.customstyle }]}>
                <Text style={[{ ...styles.text }, { ...styles.customstyletext }]}>{title}</Text>
            </TouchableOpacity>

  )
}
