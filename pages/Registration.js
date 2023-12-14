import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useState } from "react";
import {firebase} from '../firebase'

export default Registration = () => {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    registerUser = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: 'https://vyay-ccdff.firebaseapp.com',
            })
            .then(() => {
                alert('email verification sent')
            }).catch((error) => {
                alert(error.message)
            })
            .then(() => {
                firebase.firestore().collection('user')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    username,
                    email,
                    password
                })
            }).catch((error) => {
                alert(error.message)
            })
        }).catch((error) => {
            alert(error.message)
        })
    }
    return(
        <View style={styles.containar}>
            <View style={styles.imgContainar}>
                <Image source={require('../images/logo.png')} style={styles.image}/>
            </View>
            <View style={styles.containar2}>
                {/* <Text style = { styles.headText }>Login</Text> */}
                <TextInput
                    style = { styles.input }
                    placeholderTextColor={'#989898'}
                    placeholder='Username'
                    onChangeText={(username) => setUsername(username)}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <TextInput
                    style = { styles.input }
                    placeholderTextColor={'#989898'}
                    placeholder='email'
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <TextInput 
                    style = { styles.input }
                    placeholderTextColor={'#989898'}
                    placeholder='password'
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={(username, email, password) => registerUser(username, email, password)} style={styles.btn}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containar: {
        flex: 1,
        backgroundColor: '#23282E',
        justifyContent: 'center',
    },
    imgContainar: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containar2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    image: {
        width: '75%',
        objectFit: 'cover',
    },
    input: {
        width: '85%',
        height: 60,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        opacity: 50,
        paddingLeft: 10,
        marginTop: 20
    },
    btn: {
        width: '85%',
        height: 60,
        borderRadius: 50,
        backgroundColor: '#F45B5B',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    btnText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '600'
    }
})