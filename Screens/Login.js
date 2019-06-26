import React from 'react';
import { StyleSheet, Text, View ,Image,ScrollView,TouchableOpacity} from 'react-native';
import {Container,Item,Form,Label,Input,Icon, Content, Button} from 'native-base';
import fb from '../firebase/firebase';
export default class Login extends React.Component{
    state={
        email:'',
        password:''
    }
    signinuser = (email,password) =>{
        fb.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{alert("Login Successfull")})
    }
render(){
  return (
    <ScrollView>
      <Container style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../Images/Logo.png')} style={{width:250,height:250,borderRadius:200}}/>
        </View>
        <Form>
          <Item >
            <Icon name="md-person" style={{color:'white'}}></Icon>
            <Input placeholder="E-mail" autoCapitalize='none'
            autoCorrect={false} keyboardType='email-address'
            onChangeText={(val)=>{
                this.setState({
                    email : val
                })
            }}/>
          </Item>

          <Item >
            <Icon name="md-lock" style={{color:'white'}}></Icon>
            <Input placeholder="Password" secureTextEntry={true} keyboardAppearance='light'
            onChangeText={(val)=>{
                this.setState({
                    password : val
                })
            }}/>
          </Item>

            <TouchableOpacity style={{borderWidth:1,marginTop:30,padding:15,borderRadius:50}} onPress={()=>{this.signinuser(this.state.email,this.state.password)}}>
              <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center'}}>Log In</Text>
            </TouchableOpacity>

            <Text style={{textAlign:'center',marginTop:20}}>Don't have an Account ? </Text>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup')}}><Text style={{textAlign:'center',color:'blue',fontWeight:'bold'}}>Click Here !</Text></TouchableOpacity>
        </Form>
      </Container>
      </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
