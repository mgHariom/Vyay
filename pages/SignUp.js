import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default SignUp = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.containar}>
            <View style={styles.imgContainar}>
                <Image source={require('../images/logo.png')} style={styles.image}/>
            </View>
            <View style={styles.containar2}>
                <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.btn}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
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