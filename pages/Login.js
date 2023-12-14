import React, {useState} from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../firebase'

export default Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginUser = async () => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch(error) {
            alert(error.message)
        }
    }

    
// const forgotPassword = () => {
//         firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
//         .then(() => {
//           alert('Password reset mail email sent')
//         }).catch((error) => {
//           alert(error.message)
//         })
//       }

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
                <TouchableOpacity onPress={(email, password) => loginUser(email,password)} style = {styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
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