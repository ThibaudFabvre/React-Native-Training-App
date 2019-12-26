import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Login: React.FC  = () => {
    const navigation = useNavigation();
    const [emailInput, setEmailInput] = useState('Email');
    const [passwordInput, setPasswordInput ] = useState('Password');
    return (
        <View style={styles.overallStyle}>
            <Text style={styles.title}>FLAT APP</Text>
            <TextInput style={styles.centeredInput} onChangeText={newEmail => setEmailInput(newEmail)} value={emailInput}/>
            <TextInput style={styles.centeredInput} onChangeText={newPassword => setPasswordInput(newPassword)} value={passwordInput}/>
            <Button color='#64CDA2' title="Get Started" onPress={() => navigation.navigate('Homepage')}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    overallStyle: {
        backgroundColor: '#427957',
        flex: 1,
    },
    title: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
    },
    centeredInput: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ddd',
        backgroundColor: 'rgba(122, 167, 140, 0.5)',
        width: 300,
        margin: 10,
        alignSelf: 'center',
    },
});

export default Login;