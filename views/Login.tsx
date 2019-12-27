import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Button, TextInput, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Login: React.FC  = () => {
    const navigation = useNavigation();
    const [emailInput, setEmailInput] = useState('Email');
    const [passwordInput, setPasswordInput ] = useState('Password');
    return (
        <View style={styles.overallStyle}>
            <View style={styles.topPart}>
                <View style={styles.headerBlock}>
                    <Text style={styles.titleImage}>F</Text>
                    <Text style={styles.title}>FLAT APP</Text>
                </View>
            </View>
            <View style={styles.bottomPart}>
                <TextInput style={styles.centeredInput} onChangeText={newEmail => setEmailInput(newEmail)} value={emailInput}/>
                <TextInput style={styles.centeredInput} onChangeText={newPassword => setPasswordInput(newPassword)} value={passwordInput}/>
                <TouchableHighlight style={styles.buttonWrapper} onPress={() => navigation.navigate('Homepage')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableHighlight> 
                <View style={styles.options}>
                    <Text style={styles.optionText}>Create account</Text>
                    <Text style={styles.optionText}>Forgot password</Text>
                </View>
                <TouchableHighlight style={styles.skipButtonWrapper} onPress={() => navigation.navigate('Homepage')}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overallStyle: {
        backgroundColor: '#427957',
        justifyContent: 'space-around',
        flex: 1,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
    },
    titleImage: {
        fontSize: 190,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: -20,
    },
    headerBlock: {
        height: 300,
    },
    centeredInput: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: 'rgba(120, 167, 140, 0.8)',
        width: 350,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 30,
        paddingLeft: 20,
        paddingVertical: 17,
        fontWeight: 'bold',
        marginTop: 25,
    },
    options: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    optionText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonWrapper: {
        width: 350,
        backgroundColor: '#64CDA2',
        borderRadius: 25,
        paddingVertical: 17,
        alignSelf: 'center',
        marginTop: 25,
    },
    skipButtonWrapper: {
        width: 80,
        alignSelf: "flex-end",
        padding: 10,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: 'rgba(41,55,58,0.4)',
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    skipText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    topPart: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomPart: {
        flex: 1,
    }
});

export default Login;