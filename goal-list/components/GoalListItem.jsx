import { Text, View, StyleSheet, Pressable } from 'react-native'

// 纯组件
const GoalListItem = ({item, deleteGoal, index}) => {
    return (
        <View style={styles.textBox}>
            <Pressable onPress={() =>deleteGoal(index)}>
                <Text style={styles.goalText}>{item.item}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor:'#5613C4',
        marginTop:10,
        padding: 5,
        
    },
    goalText: {
        color:'#FFFFFF',
        textAlign:'center'
    }
});

export default GoalListItem