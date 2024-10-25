import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  Button
} from "react-native";

function ToDoList({tasks}) {
    return (
        <ScrollView>
          {tasks.map((task, index) => (
            <Pressable key={index} style={styles.task}>
              <View>
                <Text style={styles.taskText}>{task}</Text>
              </View>
            </Pressable>
          ))}
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#7FA1C3'
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#001F3F'
    },
  });

export default ToDoList;