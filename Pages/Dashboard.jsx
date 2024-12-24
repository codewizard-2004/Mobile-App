import React,{ useEffect,useContext } from 'react'
import { View,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { bgContext } from '../Context/StateContext';

const Dashboard = () => {
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity] = useContext(bgContext);
    useEffect(() => {
        if (Navigation) {
            const state = Navigation.getState();
            //console.log("navigation state:", state.routes[0].name);
            const Index = state.index;
            const location = state.routes[Index].name;
            location==="Dashboard"?(setLocation((prev) => [...prev, location]),setSize(60),setOpacity(1)) : (setLocation((prev) => [...prev, location]),setSize(0),setOpacity(0));
            //console.log(state.routes[Index].name)
            } else {
            console.log("Navigation context is undefined");
            }
        }, [Navigation]);


    const styles = StyleSheet.create({
        Main:{
            flex:1,
            backgroundColor: '#D6F1FF',
            width:'100%',
            height:'700',
            //justifyContent:'space-around',
            //marginVertical:10,
            paddingTop:50,
            alignItems:'center'

        },
    });
    return (
    <View
        style={styles.Main}
    >

    </View>
  )
}

export default Dashboard