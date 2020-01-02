import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { List } from '.';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';


/*const taskListRef = firebase.database().ref('TasksList');
const getTasksList = () => {
    taskListRef.on('value', (snapshot) => {
        return snapshot.val();
    })
}*/

const list = [
    {title: 'hi', resume: 'hi', status:'to do'}, 
    {title: 'hi', resume: 'hi', status: 'in progress'}, 
    {title: 'hi', resume: 'hi', status: 'done'}
];

const TaskManager: React.FC = () => {

    const [toDoList, setToDoList] = useState(list.filter(element => element.status === 'to do'))
    const [inProgressList, setInProgressList]= useState(list.filter( element => element.status === 'in progress'))
    const [doneList, setDoneList] = useState(list.filter(element => element.status === 'done'))

    const [titleInput, setTitleInput] = useState();
    const [resumeInput, setResumeInput] = useState();

    const addTask = () => {
        console.log(resumeInput);
        console.log(toDoList.push({ title: titleInput, resume: resumeInput, status: 'to do'}));
    }
/*
    const addTask = () => {
        const titleInputValue = titleInput.current.value();
        const resumeInputValue = resumeInput.current.value();
        firebase.database().ref('TaskList/').push({
            titleInputValue,
            resumeInputValue
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    } */

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
                    onChange={ input => {
                        console.log(input);
                        setTitleInput(input)
                    }}
                    />
                <TextInput 
                    style={{ borderColor: '#000', borderWidth: 1, width: '80%', paddingLeft: 10}} 
                    placeholder='resume' 
                    onChange={ input => setResumeInput(input)}
                    />
                <TouchableHighlight onPress={() => addTask()}>
                    <Text>+</Text>
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