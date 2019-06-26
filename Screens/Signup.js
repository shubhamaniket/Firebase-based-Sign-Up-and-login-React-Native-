import React from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import {Container,Form,Item,Input} from 'native-base';
import fb from '../firebase/firebase';
export default class Signup extends React.Component{
    state= {
        name:'',
        email:'',
        password:''
    }
    signupuser = (email,password)=>{
        try{
            if(this.state.password.length < 8)
            {
                alert("Password:"+"Please enter a minimum of 8 characters");
                return;
            }
            fb.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{
                alert("You are Signed Up !");
            })
            .then(()=>{this.props.navigation.navigate('Login');})
        }
        catch(error){
            console.log(error.toString())
        }
    }
    render(){
        return(
            <ScrollView>
                <Container style={{flex:1,justifyContent:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../Images/Logo.png')} style={{width:250,height:250}}/>
                </View>
                    <Form>
                        <Item>
                            <Input placeholder="Name"
                            autoCorrect={false}
                            onChangeText={(val)=>{this.setState({
                                name : val
                            })}}/>
                        </Item>

                        <Item>
                            <Input placeholder="E-mail"
                            autoCorrect={false}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={(val)=>{this.setState({
                                email : val
                            })}}/>
                        </Item>

                        <Item>
                            <Input placeholder="Password"
                            secureTextEntry={true}
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={(val)=>{this.setState({
                                password : val
                            })}}/>
                        </Item>

                        <TouchableOpacity style={{borderWidth:1,marginTop:30,padding:15,borderRadius:50}} onPress={()=>{this.signupuser(this.state.email,this.state.password)}}>
                            <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center'}}>Sign Up!</Text>
                        </TouchableOpacity>
                    </Form>
                </Container>
            </ScrollView>
        );
    }
}