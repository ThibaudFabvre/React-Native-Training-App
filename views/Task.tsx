import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface Props {
    title: string,
    resume: string,
}

const Task: React.FC<Props> = ({ title, resume }) => (
    <View style={styles.defaultCardStyle}>
        <Text style={{textAlign: 'center', padding: 10}}>{title}</Text>
        <Text style={{padding: 10}}>{resume}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableHighlight style={{backgroundColor: '#008080', width: 80}} onPress={() => null }><Text style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>E</Text></TouchableHighlight>
            <TouchableHighlight style={{backgroundColor: 'red', width: 80}} onPress={() => null }><Text style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>X</Text></TouchableHighlight>
        </View>
    </View>
)

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