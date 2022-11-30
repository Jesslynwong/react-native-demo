import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import GoalListItem from "./GoalListItem";
const GoalList = ({data, deleteGoal}) => {
    return (
        <SafeAreaView>
            <FlatList
               data={data}
               renderItem={(item, index) => <GoalListItem item={item} deleteGoal={deleteGoal} index={index}/>}
               keyExtractor={(_,index) => index}
            />
        </SafeAreaView>
    )
}
export default GoalList;