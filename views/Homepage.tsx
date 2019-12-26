import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Homepage: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.overallStyle}>
            <Button color="#fff" title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    overallStyle: {
        backgroundColor: '#427957',
        flex: 1,
    },
});

export default Homepage;