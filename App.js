import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function App() {
  const [todo, setTodo] = useState([
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.appHeader}>Todo app</Text>
      <TextInput style={styles.input} placeholder="Enter Title" />
      <TextInput style={styles.input} placeholder="Enter Description" />

      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
        <Text style={{ color: "#fff" }}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterBtn, styles.activeFilterBtn]}>
          <Text style={[styles.filterText, { color: "#fff" }]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText} activeOpacity={0.8}>
            In progress
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText} activeOpacity={0.8}>
            Done
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todosContainer}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 20,
  },
  appHeader: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: "50%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
});
