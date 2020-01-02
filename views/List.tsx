import React, {useState} from 'react';
import { View} from 'react-native';
import { Task } from '.';

interface Props {
    list: any,
    color: string,
}

const List: React.FC<Props> = ({ list, color }) => {
    const [listToRender , setListToRender] = useState(list);
    const deleteTask = (index) => {
        const newList = list.splice(index,1);
        setListToRender(newList);
    };
    return (
        <View style={{backgroundColor: color, justifyContent: 'space-around', alignItems: 'center'}}>
            {listToRender.map(
                ({title, resume }, index) => 
            <Task title={title} resume={resume} deleteTask={() => deleteTask(index)}/>)}
        </View>
    );
}


export default List;