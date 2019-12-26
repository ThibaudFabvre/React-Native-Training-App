import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Homepage: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.overallStyle}>
            <Button color="#64CDA2" title="Login" onPress={() => navigation.navigate('Login')}><Text>Login</Text></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    overallStyle: {
        backgroundColor: '#427957',
        flex: 1,
    },
});

export default Homepage;