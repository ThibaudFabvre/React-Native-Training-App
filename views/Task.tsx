import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface Props {
    title: string,
    resume: string,
    deleteTask: any,
}

const Task: React.FC<Props> = ({ title, resume, deleteTask }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formTitle, setNewTitle] = useState();
    const [formResume, setNewResume] = useState();
    const [formStatus, setNewStatus] = useState();
    const [taskToRender, setTaskToRender] = useState({ title: title, resume: resume});


    const handleCancel = () => {
        setIsFormOpen(false);
    }
    const handleValidation = () => {
        setTaskToRender({title: formTitle, resume: formResume});
        setIsFormOpen(false);
    }

    return (
        <View style={styles.defaultCardStyle}>
            {!isFormOpen ?
                <>
                    <Text style={{textAlign: 'center', padding: 10}}>{taskToRender.title}</Text>
                    <Text style={{padding: 10}}>{taskToRender.resume}</Text>
                </>
                :
                <>
                    <TextInput style={{paddingLeft: 10}} placeholder='new title' onChangeText={ input => setNewTitle(input)}/>
                    <TextInput style={{paddingLeft: 10}} placeholder='new resume' onChangeText={ input => setNewResume(input)}/>
                    <TextInput style={{paddingLeft: 10}} placeholder='status' onChangeText={ input => setNewStatus(input)}/>
                </>
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {!isFormOpen ?
                <>
                    <TouchableHighlight style={{backgroundColor: '#008080', width: 80}} onPress={() => setIsFormOpen(true) }>
                        <Text style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>Edit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{backgroundColor: 'red', width: 80}} onPress={deleteTask}>
                        <Text style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>Delete</Text>
                    </TouchableHighlight>
                </>
                :
                <>
                    <TouchableHighlight style={{backgroundColor: '#008080', width: 80}} onPress={() => handleValidation()}>
                        <Text style={{color: '#0C0', fontWeight: 'bold', textAlign: 'center'}}>V</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{backgroundColor: '#008080', width: 80}} onPress={() => handleCancel()}>
                        <Text style={{color: '#F00', fontWeight: 'bold', textAlign: 'center'}}>X</Text>
                    </TouchableHighlight>
                </>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    defaultCardStyle: {
        borderRadius: 15,
        backgroundColor: '#fff',
        borderWidth: 5,
        width: '80%',
        margin: 10,
    },
});

export default Task;