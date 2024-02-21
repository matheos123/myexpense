import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
const AddInformation = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const placeholder = {
    label: "Select type of expense",
    value: null,
  };
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add New Information</Text>
      <View>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Add New Amount"
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          borderBottomColor: "#00f",
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Reason"
          style={{ padding: 10 }}
        />
      </View>
      <View>
        <Text>Select type of expense</Text>
        <RNPickerSelect
          placeholder={placeholder}
          items={options}
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
        />
        {selectedValue && <Text>Selected: {selectedValue}</Text>}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    borderColor: "#00f",
    borderWidth: 1,
    width: "95%",
    gap:10
  },
  input: {
    height: 48,
    borderColor: "#00f",
    borderWidth: 1,
    padding: 10,
    margin: 12,
    borderRadius: 16,
  },
  headerText: {
    fontWeight: "bold",
  },
});

export default AddInformation;
