import { useState } from "react";
import { CheckBox } from '@rneui/themed';
import { View } from "react-native";


export default function CoverageRadio2() {
  const [selectedIndex, setIndex] = useState(0);
  return (
    <View style={{ flex: 1, flexDirection: "row", position: "relative"}}>
        <CheckBox
          size={6}
          backgroundColor={"none"}
          checked={selectedIndex === 0}
          onPress={() => setIndex(0)}
          checkedIcon="check-square-o"
          uncheckedIcon="square-o"
          containerStyle={{ padding:0, margin: 0, left: 10}}
        />
        <CheckBox
          size={6}
          backgroundColor={"none"}
          checked={selectedIndex === 1}
          onPress={() => setIndex(1)}
          checkedIcon="check-square-o"
          uncheckedIcon="square-o"
          containerStyle={{ padding:0, margin: 0, left: 3 }}
        />
    </View>
  );
}