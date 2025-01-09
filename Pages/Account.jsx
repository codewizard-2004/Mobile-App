import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { Button } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import useLogOut from '../firebaseHooks/useLogOut';

const Account = () => {
    const styles = StyleSheet.create({
        mainContainer:{
            flex: 1,
            justifyContent: "center",
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'black',
            width:'100%',
            margin:0,
            padding:0,
            gap:50
        },
        TopCard:{
            width: '90%',
            height: 100,
            gap:10,
            backgroundColor: '#1d1d1e',
            borderRadius: 8,
            elevation: 5,
            display: 'flex',
            alignItems:"center",
            justifyContent:"center",
        },
        topTexts:{
            width:"100%",
            alignSelf:"flex-start",
            flexDirection:"row",
            justifyContent:"space-around"
        },
        boxTitle:{
            color:"white",
            fontSize:18,
        },
        buttonContainer:{
            width:"100%",
            alignItems:"center"
        },
        dashboardButton:{
            width:"90%",
            height:50,
            backgroundColor:"#1c1d1f",
            marginVertical:5,
            //opacity:"0.5"
            borderRadius:8,
            justifyContent:'center',
            //alignItems:'center',
            paddingHorizontal:5,
            borderWidth:1.5,
            borderColor:'black',
          
        },
        touchView:{
            width:"99%",
            height:50,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
          },
    })
    const navigation = useNavigation()
    const {logout , loading , error} = useLogOut();
  return (
    <View style={styles.mainContainer}>
        {error?alert(error.message):""}
      <View style={styles.TopCard}>
        <View style={styles.topTexts}>
            <View>
                <Text style={{color:"white" , fontSize:10}}>welcome,</Text>
                <Text style={styles.boxTitle}>John Doe 👋</Text>
            </View>
            <Button mode='outlined' icon="crown" onPress={()=>navigation.navigate("Pro")}>Go Pro</Button>
        </View>

      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight 
            style={styles.dashboardButton}
            underlayColor="#1c1d1f" // Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >  
            <View style={styles.touchView}>
                <View style={{flexDirection:"row" , gap:10}}>
                    <Icon name="medical-bag" size={25} color="white" />
                    <Text style={{color:"white"}}>My Health Info</Text>
                </View>
                <Icon name="chevron-right" size={25} color="white" />
            </View>
              
        </TouchableHighlight>

        <TouchableHighlight 
            style={styles.dashboardButton}
            underlayColor="#1c1d1f" // Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >  
            <View style={styles.touchView}>
                <View style={{flexDirection:"row" , gap:10}}>
                    <Icon name="information-outline" size={25} color="white" />
                    <Text style={{color:"white"}}>Edit Personal Info</Text>
                </View>
                <Icon name="chevron-right" size={25} color="white" />
            </View>
              
        </TouchableHighlight>

        <TouchableHighlight 
            style={styles.dashboardButton}
            underlayColor="#1c1d1f" // Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >  
            <View style={styles.touchView}>
                <View style={{flexDirection:"row" , gap:10}}>
                    <Icon name="pencil" size={25} color="white" />
                    <Text style={{color:"white"}}>Edit Health Info</Text>
                </View>
                <Icon name="chevron-right" size={25} color="white" />
            </View>
              
        </TouchableHighlight>

        <TouchableHighlight 
            style={styles.dashboardButton}
            underlayColor="#1c1d1f" // Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >  
            <View style={styles.touchView}>
                <View style={{flexDirection:"row" , gap:10}}>
                    <Icon name="crown" size={25} color="white" />
                    <Text style={{color:"white"}}>My Subscription</Text>
                </View>
                <Icon name="chevron-right" size={25} color="white" />
            </View>
              
        </TouchableHighlight>

        <TouchableHighlight 
            style={styles.dashboardButton}
            underlayColor="#1c1d1f" // Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >  
            <View style={styles.touchView}>
                <View style={{flexDirection:"row" , gap:10}}>
                    <Icon name="lock" size={25} color="white" />
                    <Text style={{color:"white"}}>Change Password</Text>
                </View>
                <Icon name="chevron-right" size={25} color="white" />
            </View>
              
        </TouchableHighlight>

        <TouchableHighlight 
            style={styles.dashboardButton}
            underlayColor="#1c1d1f" // Color when the button is pressed
            onPress={logout}
        >  
            <View style={styles.touchView}>
                <View style={{flexDirection:"row" , gap:10}}>
                    <Icon name="logout" size={25} color="white" />
                    <Text style={{color:"white"}}>Log Out</Text>
                </View>
                <Icon name="chevron-right" size={25} color="white" />
            </View>
              
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Account