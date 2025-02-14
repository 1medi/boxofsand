import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";
import MainFab from "./MainFab";
import FabOption from "./FabOption";
import { colors, typography } from "@/css/globals";

export default function ConsoleScreen({ navigation }) {
  const [expanded, setExpanded] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    setExpanded((prev) => !prev);
    Animated.timing(fadeAnim, {
      toValue: expanded ? 0 : 1, // Reverse the logic
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {expanded && (
        <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      <View style={styles.fabContainer}>
        {expanded && (
          <>
            <FabOption iconName="upload-outline" fadeAnim={fadeAnim} />
            <FabOption iconName="file-text-outline" fadeAnim={fadeAnim} />
          </>
        )}
        <MainFab expanded={expanded} onPress={toggleMenu} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#1F2937",
  },
  fabContainer: {
    position: "absolute",
    right: 16,
    bottom: 112,
    alignItems: "center",
    zIndex: 10, // Ensures it stays above other elements
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    zIndex: 9,
  },
});



