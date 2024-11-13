import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Icon,
} from "@ui-kitten/components";
import Settings from "@/components/atoms/settings.js";
import CardSimple from "@/components/atoms/card";
import { StyleSheet, Text, Image } from "react-native";
import OptionButton from "@/components/atoms/optionButton";
import DarkModeIcon from "@/components/atoms/darkMode";
import HeaderProfile from "@/components/molecules/Header";
import { colors, typography } from "@/css/globals"

import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic
} from "@expo-google-fonts/dm-sans";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";

export const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const SearchIcon = (props) => <Icon name="search-outline" {...props} />;

  const FileTextIcon = (props) => (
    <Icon name={"file-text-outline"} {...props} />
  );

  const UploadIcon = (props) => <Icon name={"upload-outline"} {...props} />;

  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  // const [currentDate, setCurrentDate] = useState('')

  // useEffect(() => {
  //   var date = new Date().getDay()
  //   var month = new Date().getMonth() + 1
  //   var year = new Date().getFullYear()
  //   setCurrentDate(
  //     date + '/' + month + '/' + year
  //   )
  // }, [])

  return (
    <>
      <LinearGradient
        colors={["#9FC3E5", "#ffff"]}
        style={styles.gradientContainer}
      >
        <SafeAreaView style={styles.homePage}>
          <HeaderProfile />

          <ScrollView
            style={{
              backgroundColor: "none",
              minHeight: "100%",
              paddingBottom: 30,
            }}
          >
            <Layout
              style={{ backgroundColor: "none", padding: 20, width: 400 }}
            >
              <Text style={styles.headerText}>
                Hello Chris!{"\n"}Need help{" "}
                <Text
                  style={{ fontFamily: 'DMSans_700Bold_Italic' , color: "#2E8BB7" }} 
                >
                  Simplifying{" "}
                </Text>
                {"\n"}a form today?
              </Text>
            </Layout>

            <Layout
              style={{
                flex: 1,
                textAlign: "right",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 20,
                backgroundColor: "none",
                borderBottomColor: "white",
                borderBottomWidth: 2,
              }}
            >
              <Layout style={{ flexDirection: "row", backgroundColor: "none" }}>
                <Layout
                  style={{ flexDirection: "column", backgroundColor: "none" }}
                >
                  <OptionButton
                    title="Browse"
                    accessory={SearchIcon}
                    destination="Folder"
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#2E8BB7",
                      fontFamily: "Inter_300Light ",
                      fontSize: 16,
                    }}
                  >
                    Browse
                  </Text>
                </Layout>

                <Layout
                  style={{ flexDirection: "column", backgroundColor: "none" }}
                >
                  <OptionButton
                    title="Scan"
                    accessory={FileTextIcon}
                    destination="Camera"
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#2E8BB7",
                      fontFamily: "Inter_300Light",
                      fontSize: 16,
                    }}
                  >
                    Scan
                  </Text>
                </Layout>

                <Layout
                  style={{ flexDirection: "column", backgroundColor: "none" }}
                >
                  <OptionButton
                    title="Browse"
                    accessory={UploadIcon}
                    destination="Camera"
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#2E8BB7",
                      fontFamily: "Inter_300Light",
                      fontSize: 16,
                    }}
                  >
                    Upload
                  </Text>
                </Layout>
              </Layout>
            </Layout>

            <Layout style={styles.formGrid}>
              <CardSimple title="Canadian Pension Plan" />
              <CardSimple title="Medical Form" />
            </Layout>

            <Layout style={styles.recentform}>
              <Text style={styles.headline}>My Recent Forms</Text>
              <Layout style={styles.recentContent}>
                <Layout style={styles.formContainer}>
                  <CardSimple title="Canadian Pension Plan" />
                  <CardSimple title="Medical Form" />
                </Layout>
                <Button
                  onPress={() => navigation.navigate("Library")}
                  style={styles.ButtonResent}
                >
                  View My Form Library
                </Button>
              </Layout>
            </Layout>

            <Layout style={{ paddingBottom: 60 }}></Layout>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    maxHeight: 200,
    backgroundColor: "none",
    maxWidth: "100%",
    gap: 10,
  },
  formGrid: {
    display: "flex",
    paddingTop: 10,
    flexDirection: "row",
    margin: "auto",
    maxHeight: 200,
    maxWidth: "100%",
    backgroundColor: "none",
    maxWidth: "100%",
    gap: 10,
  },
  gradientContainer: {
    flex: 1,
  },
  homePage: {
    flex: 1,
    backgroundColor: "none",
    height: "100%",
  },
  headerText: {
    fontSize: 32,
    fontFamily: "Inter_400Regular",
    color: "#08415C",
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 20,
    backgroundColor: "none",
    paddingRight: 50,
  },
  largeNumber: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#6D96B7",
    marginRight: 10,
  },
  numberTextContainer: {
    flexDirection: "column",
  },
  subText: {
    fontSize: 16,
    color: "#6D96B7",
    marginBottom: 5,
    width: 100,
  },
  formsText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2A374A",
  },
  ButtonResent: {
    width: "95%",
    heigh: 60,
    borderRadius: 32,
    backgroundColor: "#08415C",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  recentform: {
    width: "100%",
    height: 420,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 40,
    backgroundColor: "rgba(8, 65, 92, 0.80)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  recentContent: {
    alignItems: "center",
    backgroundColor: "none",
    paddingTop: 20,
    width: "100%",
  },
  headline: {
    color: "#ffffff",
    fontSize: 24,
    paddingLeft: 20,
  },
});
