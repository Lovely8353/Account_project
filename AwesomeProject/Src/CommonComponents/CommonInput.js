import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Fontsize, appcolor } from "../ColorConsts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CommonInput(props) {
  const {
    placeholder,
    value = "",
    onChangeText,
    keyboardType = "visible-password",
    onFocus,
    onBlur,
    HighLightInput,
    TextInptMainView,
    Error
  } = props;
  return (
    <View style={{...TextInptMainView}}>
      <View
        style={{
          height: hp("6"),
          flexDirection: "row",
          alignItems: "center",
          borderColor:HighLightInput? appcolor.focushadecoloe:appcolor.white,
        //   focushadecoloe,
        //   HighLightInput
          borderRadius: wp("3"),
          width: wp("72"),
          borderWidth:HighLightInput? wp("1"):wp(0),
          marginLeft:!HighLightInput?wp('1'):wp(0)
        }}
      >
        <TextInput
          keyboardType={keyboardType}
          style={{
            padding: 0,
            color: appcolor.placeholder,
            fontSize: Fontsize.medium,
            paddingLeft: wp("5"),
            height: hp("5"),
            width:HighLightInput?wp('70'): wp("70"),
            borderRadius: wp("2"),
            borderWidth: wp("0.3"),
            borderColor: appcolor.gray,
          }}
          placeholder={placeholder + ""}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
    {Error &&<Text style={{paddingLeft:wp('2'),color:appcolor.red,fontSize:Fontsize.small}}>{Error}</Text>}  
    </View>
  );
}

const styles = StyleSheet.create({});
