import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGols) => [
      ...currentGols,
      { id: Math.random(), value: goalTitle },
    ]);
    setIsAddMode(false);
    // console.log(courseGoals);
  };
  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGols) => {
      return currentGols.filter((goal) => goal.id !== goalId);
    });
  };

  const cancleGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancle={cancleGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemdata) => (
          <GoalItem
            id={itemdata.item.id}
            onDelete={removeGoalHandler}
            title={itemdata.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },
});
