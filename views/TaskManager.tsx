import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { getTasksList, addTaskToDatabase } from '../api/tasklist';
import { List } from '.';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';


const TaskManager: React.FC = () => {

    const [tasksList , setTasksList] = useState([{}]);
    const [toDoList, setToDoList] = useState(tasksList.filter(element => element.status === 'to do'))
    const inProgressList = tasksList.filter( element => element.status === 'in progress')
    const doneList = tasksList.filter(element => element.status === 'done')
    const [titleInput, setTitleInput] = useState();
    const [resumeInput, setResumeInput] = useState();

    useEffect(() => {
        const newFunc = async () => {
            const tasks = await getTasksList();
            const newTasksList = [];
            tasks.forEach(task => {
                const title = task.child('title').val();
                const resume = task.child('resume').val();
                const status = task.child('status').val();
                newTasksList.push({
                    title: title,
                    resume: resume,
                    status: status
                })
            })
            setTasksList(newTasksList);
        };
        try {
            newFunc();
        } catch {
            'error in fetching tasks list'
        }
    },[]);

    const addTask = () => {
        setToDoList(toDoList.concat({ title: titleInput, resume: resumeInput, status: 'to do'}));
        addTaskToDatabase({ title: titleInput, resume: resumeInput, status: 'to do'});
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.overallStyle}>
                <List list={toDoList} color={'#87CEEB'}/>
                <List list={inProgressList} color={'#FF7F00'}/>
                <List list={doneList} color={'#BFFF00'}/>
            </View>
            <View style={styles.footer}>
                <TextInput 
                    style={{ borderColor: '#000', borderWidth: 1, width: '80%', paddingLeft: 10}}
                    placeholder='title'
                    onChangeText={ input => {
                        setTitleInput(input)
                    }}
                    />
                <TextInput 
                    style={{ borderColor: '#000', borderWidth: 1, width: '80%', paddingLeft: 10}} 
                    placeholder='resume' 
                    onChangeText={ input => setResumeInput(input)}
                    />
                <TouchableHighlight style={{backgroundColor: '#BFFF00'}} onPress={() => addTask()}>
                    <Text style={{fontWeight: 'bold'}}>Add task</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    overallStyle: {
        flex: 11,
    },
    footer: {
        alignItems: 'center',
        marginBottom: 40,
        justifyContent: 'space-around',
    },
});

export default TaskManager;