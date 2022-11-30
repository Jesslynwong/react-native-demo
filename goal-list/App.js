import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import React from 'react';


import GoalList from './components/GoalList';
import AddGoalPage from "./components/AddGoalPage";

import useControlModal from "./components/useControlModal/useControlModal";
import useGoalData from "./components/useGoalData/useGoalData";

export default function App() {
  const {openModal, isOpen, closeModal} = useControlModal()
  const {data, addGoal, deleteGoal} = useGoalData()
 
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Button title='ADD NEW GOAL' color='#9768E4'  onPress={openModal}  />
      <GoalList  data={data}  deleteGoal={deleteGoal}/> 
      <AddGoalPage isOpen={isOpen} addGoal={addGoal} closeModal={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:30
  },
});
