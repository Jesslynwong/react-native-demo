import React, {useEffect,useState} from 'react'

const useGoalData = () => {
    const [data, setData] = useState([])
    
    const addGoal = (goal) => {
        setData( [...data, goal])
    }

    const deleteGoal = (index)=> {
        setData(() => {
            const tempData = [...data]
            tempData.splice(index,1)
            return tempData
        })
    }

    return {data, addGoal, deleteGoal}
}

export default useGoalData
