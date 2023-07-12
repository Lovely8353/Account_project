import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Fontsize, Images, appcolor } from "./ColorConsts";
import CustomButton from "./CommonComponents/CustomButton";
import CommonInput from "./CommonComponents/CommonInput";
import UnfilledButton from "./CommonComponents/UnfilledButton";
import axios from "axios";

export default function DashboardScreen({ navigation }) {
  //we will set it to true for showing the modal
  const [addCustomerModal, setaddCustomerModal] = useState(false);
  const [GSTNo, setGSTNo] = useState("");
  const [GSTNoError, setGSTNoError] = useState("");

  const [firstName, setfirstName] = useState("");
  const [firstNameError, setfirstNameError] = useState("");

  const [lastName, setlastName] = useState("");
  const [lastNameError, setlastNameError] = useState("");

  const [eMail, seteMail] = useState("");
  const [eMailError, seteMailError] = useState("");

  const [phoneNo, setphoneNo] = useState("");
  const [phoneNoError, setphoneNoError] = useState("");

  const [branchName, setbranchName] = useState("");
  const [branchNameError, setbranchNameError] = useState("");

  const [branchAddress, setbranchAddress] = useState("");
  const [branchAddressError, setbranchAddressError] = useState("");

  const [focusField, setfocusField] = useState(0);
  const [ListData, setListData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://dummyjson.com/products", {
      method: "get",
    })
      .then((res) => {
        res.json().then((json) => {
          setListData(json?.products);
        });
      })
      .catch((err) => {
        console.log("err", err);
        alert(JSON.stringify(err));
      });
  };

  const resetState = () => {
    setGSTNo("");
    setGSTNoError("");

    setfirstName("");
    setfirstNameError("");
    setlastName("");
    setlastNameError("");
    seteMail("");
    seteMailError("");
    setphoneNo("");
    setphoneNoError("");
    setbranchName("");
    setbranchNameError("");
    setbranchAddress("");
    setbranchAddressError("");
    setfocusField(0);
  };

  const submit = async () => {
    let body = {
      email: Email,
      password: Password,
      device_type: Platform.OS == "android" ? 1 : 2,
      device_name: deviceName,
      device_token: fcmToken,
    };
    if (Network(this.props.networkstate)) {
      if (Valiadtion()) {
        this.setState({ Showloder: true });
        authServices
          .Login(body)
          .then(async (resp) => {
            console.log("first", resp?.data?.data);
          })
          .catch((err) => {
            this.setState({ Showloder: false });
          });
      }
    }
  };

  const renderList = (item, index) => {
    return (
      <View
        style={{
          backgroundColor: appcolor.purewhite,
          borderTopLeftRadius: wp("3"),
          borderBottomLeftRadius: wp("3"),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            paddingHorizontal: wp("5"),
            padding: hp("2.5"),
            minWidth: wp("87"),
          }}
        >
          <Text style={styles.customerlistview}>{item.title}</Text>
          <Text
            style={{
              ...styles.customerlistview,
              color: appcolor.gray,
              fontWeight: "0",
              fontSize: Fontsize.smalltext,
            }}
          >
            {item.category}
          </Text>
        </View>
        {/* below view is for GST number */}
        <View style={styles.innerview}>
          <Text>{item.id}</Text>
        </View>
        {/* below view is for invoices */}
        <View style={{ ...styles.innerview, minWidth: wp("42") }}>
          <Text>{item.stock}</Text>
        </View>
        {/* below view is for actions */}
        <View style={{ ...styles.innerview, minWidth: wp("37") }}>
          <Text>{item.id % 2 == 0 ? "Active" : "Inactive"}</Text>
          <TouchableOpacity>
            <Image
              source={item.id % 2 == 0 ? Images.switchon : Images.switchoff}
              style={{ height: wp("8"), width: wp("8"), resizeMode: "center" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const CustomerModalValidation = () => {
    if (GSTNo == "") {
      setGSTNoError("Please Enter GST No.");
      return false;
    } else if (firstName == "") {
      setfirstNameError("Please Enter First Name.");
      return false;
    } else if (lastName == "") {
      setlastNameError("Please Enter Last Name.");
      return false;
    } else if (eMail == "") {
      seteMailError("Please Enter eMail.");
      return false;
    } else if (phoneNo == "") {
      setphoneNoError("Please Enter Phone No.");
      return false;
    } else if (branchName == "") {
      setbranchNameError("Please Enter Branch Name.");
      return false;
    } else if (branchAddress == "") {
      setbranchAddressError("Please Enter First Name.");
      return false;
    }
    return true;
  };

  const SaveDetails = () => {
    let body = {
      title: firstName + " " + lastName,
      rating: GSTNo,
      description: branchName + " " + branchAddress,
      phoneNo: phoneNo,
    };
    if (CustomerModalValidation()) {
      setaddCustomerModal(false);

      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: body.title,
          stock: body.rating,
          price: body.phoneNo,
          description: body.description,
          /* other product data */
        }),
      })
        .then((res) => res.json())
        .then((res) => alert("You successfully added customer detail"));
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: appcolor.blue }}>
      <View
        style={{
          height: hp("9"),
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: wp("4"),
          borderBottomColor: appcolor.grayborderonblue,
          borderBottomWidth: wp("0.3"),
        }}
      >
        <TouchableOpacity>
          <TouchableOpacity style={{ height: wp("6"), width: wp("6") }}>
            <Image
              source={Images.cap}
              style={{
                height: wp("6"),
                width: wp("6"),
                tintColor: appcolor.white,
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{ height: wp("6"), width: wp("6") }}
          >
            <Image
              source={Images.menu}
              style={{
                height: wp("6"),
                width: wp("6"),
                tintColor: appcolor.white,
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingTop: hp("3"),
          alignItems: "center",
        }}
      >
        <View
          style={{
            //   height: hp("10"),
            flex: 1,
            width: wp("94"),
            backgroundColor: appcolor.white,
            borderRadius: wp("8"),
            paddingHorizontal: wp("3"),
          }}
        >
          {/* below view is for search and profile functionality */}
          <View
            style={{
              height: hp("10"),
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomColor: appcolor.grayborderonlightblue,
              borderBottomWidth: wp("0.4"),
            }}
          >
            <View
              style={{
                width: wp("15"),
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
             <TouchableOpacity
             onPress={()=>{}}
             >
             <Image
                source={Images.search}
                style={{
                  height: wp("6"),
                  width: wp("6"),
                  tintColor: appcolor.gray,
                  resizeMode:'center'
                }}
              />
             </TouchableOpacity>

             <TouchableOpacity
             onPress={()=>{}}
             >
             <Image
                source={Images.notification}
                style={{
                  height: wp("5"),
                  width: wp("5"),
                  resizeMode:'center',
                  tintColor: appcolor.gray,
                }}
              />
             </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ height: wp("6"), width: wp("6") }}>
              <Image
                source={Images.profile}
                style={{ height: wp("6"), width: wp("6") }}
              />
            </TouchableOpacity>
          </View>

          {/* below view is for customer list and add customer button */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              paddingVertical: wp("2"),
            }}
          >
            <Text style={styles.customerlistview}>Customer List</Text>
            <CustomButton
              title={"Add Customer"}
              customstyle={{ width: wp("39") }}
              onPress={() => {
                resetState();
                setaddCustomerModal(true);
              }}
            />
          </View>

          {/* below view is for flatlist */}
          <ScrollView horizontal={true} contentContainerStyle={{}}>
            <View style={{ paddingVertical: hp("3") }}>
              <FlatList
                data={ListData}
                renderItem={({ item, index }) => renderList(item, index)}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => {
                  return (
                    <View
                      style={{ flexDirection: "row", paddingBottom: wp("3") }}
                    >
                      <Text
                        style={{ ...styles.subtitletext, minWidth: wp("87") }}
                      >
                        Customer Name
                      </Text>

                      <Text
                        style={{ ...styles.subtitletext, minWidth: wp("35") }}
                      >
                        GST Number
                      </Text>

                      <Text style={styles.subtitletext}>
                        TOTAL INVOICES DUE
                      </Text>
                      <Text style={styles.subtitletext}>ACTIONS</Text>
                    </View>
                  );
                }}
                ItemSeparatorComponent={() => {
                  return <View style={{ paddingVertical: hp("0.8") }} />;
                }}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <Modal visible={addCustomerModal} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              elevation: 2,
              borderRadius: wp("2"),
              backgroundColor: "#fff",
              maxHeight: hp("80"),
              width: wp("80"),
              paddingVertical: hp("2"),
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  fontSize: Fontsize.maintitle,
                  color: appcolor.titleblack,
                  fontWeight: "700",
                }}
              >
                Add Customer details
              </Text>

              <Text
                style={{
                  fontSize: Fontsize.smalltext,
                  color: appcolor.gray,
                }}
              >
                You can add as much customers you want !
              </Text>
            </View>
            {/* below code is for lining */}
            <View
              style={{
                borderColor: appcolor.grayborderonlightblue,
                borderWidth: wp("0.1"),
                width: wp("80"),
                marginVertical: hp("1"),
              }}
            />

            <View style={{ paddingVertical: hp("2") }}>
              {/* common input is component designed for textinput */}
              <CommonInput
                placeholder={"GST Number"}
                onChangeText={(text) => {
                  setGSTNo(text);
                  setGSTNoError("");
                }}
                value={GSTNo}
                Error={GSTNoError}
                onFocus={() => {
                  setfocusField(1);
                }}
                onBlur={() => {
                  setfocusField(0);
                }}
                HighLightInput={focusField == 1}
              />
              {GSTNo != "" ? (
                <View>
                  <CommonInput
                    placeholder={"First Name"}
                    TextInptMainView={{ paddingTop: wp("3") }}
                    onChangeText={(text) => {
                      setfirstName(text);
                      setfirstNameError("");
                    }}
                    value={firstName}
                    Error={firstNameError}
                    onFocus={() => {
                      setfocusField(2);
                    }}
                    onBlur={() => {
                      setfocusField(0);
                    }}
                    HighLightInput={focusField == 2}
                  />
                  <CommonInput
                    placeholder={"Last Name"}
                    TextInptMainView={{ paddingTop: wp("3") }}
                    onChangeText={(text) => {
                      setlastName(text);
                      setlastNameError("");
                    }}
                    value={lastName}
                    Error={lastNameError}
                    onFocus={() => {
                      setfocusField(3);
                    }}
                    onBlur={() => {
                      setfocusField(0);
                    }}
                    HighLightInput={focusField == 3}
                  />

                  <CommonInput
                    placeholder={"Email"}
                    TextInptMainView={{ paddingTop: wp("3") }}
                    onChangeText={(text) => {
                      seteMail(text);
                      seteMailError("");
                    }}
                    value={eMail}
                    Error={eMailError}
                    onFocus={() => {
                      setfocusField(4);
                    }}
                    onBlur={() => {
                      setfocusField(0);
                    }}
                    HighLightInput={focusField == 4}
                  />

                  <CommonInput
                    placeholder={"Phone Number"}
                    TextInptMainView={{ paddingTop: wp("3") }}
                    onChangeText={(text) => {
                      setphoneNo(text);
                      setphoneNoError("");
                    }}
                    value={phoneNo}
                    Error={phoneNoError}
                    onFocus={() => {
                      setfocusField(5);
                    }}
                    onBlur={() => {
                      setfocusField(0);
                    }}
                    HighLightInput={focusField == 5}
                  />

                  <CommonInput
                    placeholder={"Branch Name"}
                    TextInptMainView={{ paddingTop: wp("3") }}
                    onChangeText={(text) => {
                      setbranchName(text);
                      setbranchNameError("");
                    }}
                    value={branchName}
                    Error={branchNameError}
                    onFocus={() => {
                      setfocusField(6);
                    }}
                    onBlur={() => {
                      setfocusField(0);
                    }}
                    HighLightInput={focusField == 6}
                  />

                  <CommonInput
                    placeholder={"Branch Address"}
                    TextInptMainView={{ paddingTop: wp("3") }}
                    onChangeText={(text) => {
                      setbranchAddress(text);
                      setbranchAddressError("");
                    }}
                    value={branchAddress}
                    Error={branchAddressError}
                    onFocus={() => {
                      setfocusField(7);
                    }}
                    onBlur={() => {
                      setfocusField(0);
                    }}
                    HighLightInput={focusField == 7}
                  />
                </View>
              ) : null}
            </View>

            {/* modal last buttons */}

            <View
              style={{
                flexDirection: "row",
                width: wp("43"),
                justifyContent: "space-between",
                alignSelf: "flex-start",
                marginHorizontal: wp("5"),
              }}
            >
              <UnfilledButton
                title={"Cancel"}
                onPress={() => {
                  setaddCustomerModal(false);
                }}
              />

              <CustomButton
                title={"Add"}
                onPress={() => SaveDetails()}
                customstyle={{ width: wp("20") }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  customerlistview: {
    color: appcolor.titleblack,
    fontSize: Fontsize.small,
    fontWeight: "700",
  },
  subtitletext: {
    color: appcolor.titleblack,
    fontSize: Fontsize.small,
    fontWeight: "700",
    paddingHorizontal: wp("4"),
  },
  innerview: {
    paddingHorizontal: wp("5"),
    minWidth: wp("37"),
    alignItems: "center",
    justifyContent: "center",
    height: hp("10"),
  },
});
