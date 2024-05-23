import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,StyleSheet,Text,Image} from "react-native";
import {Button, Icon} from '@rneui/themed'

const staticInfo ={
    name: 'Juan Ortiz',
    uri: 'https://avatars.githubusercontent.com/u/10101138?v=4',
};

const Header = () => {
    const{ canGoBack, goBack} = useNavigation();
  return (
   <View style={styles.container}>
     {canGoBack() ? (
        <View style={styles.arrowContainer}>
            <Button 
            icon={<Icon name="arrow-back" size={24} />}
            type="clear"
            onPress={() => goBack()}
         />

        </View>
     ): undefined}
    <View style={styles.leftContainer}>
        <Text style={styles.name}>{`Hello ${staticInfo.name}`}</Text>
        <Text style={styles.subtitle}>Welcome back to your goal</Text>
    </View>
    <View style={styles.rightContainer}>
        <Image source={{uri: staticInfo.uri}}  style={styles.profileImage}/>
        
    </View>
    
   </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    leftContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    rightContainer:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent:'center',
    },
    name:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    subtitle:{
        fontSize: 12,
        color:'#808080'
    },
    profileImage:{
        width: 40,
        height: 40,
        borderRadius: 24,
    },
    arrowContainer:{
        marginLeft: -10,

    }


});

export default Header
