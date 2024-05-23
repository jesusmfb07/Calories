import React, { useState } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Header from '../../components/Header/Header';
import {Button,Icon,Input} from '@rneui/themed'
import AddFoodModal from '../../components/AddFoodModal';


const AddFood = () => {
  const [visible,setIsVisible] = useState<boolean>(false);
  const handlerModalClosed = () =>{
    setIsVisible(false);
  }
  return (
   <View style={styles.container}>
    <Header/>
    <View style={styles.addFoodContainer}>
      <View style={styles.legendContainer}>
        <Text style={styles.addFoodLegend}>Add Food</Text>

      </View>
      <View style={styles.addFoodBtnContainer} >
        <Button 
          icon={<Icon name="add-circle-outline" color="#fff"/>}
          radius="lg"
          color="#4ecb71"
          onPress={() => setIsVisible(true)}
        />

      </View>

    </View>
    <View style={styles.searchContainer}>
      
    <View style={styles.inputContainer}>
      <Input placeholder='apples,pie,soda...' />
    </View>
      <Button
       title="Search"
       color="#ade8af"
       titleStyle={styles.searchBtnTitle}
       radius="lg"
      />
    </View>
    <AddFoodModal visible={visible} onClose={handlerModalClosed} /> 
   </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 12,
  },
  legendContainer:{
    flex: 1,
  },
  addFoodBtnContainer:{
    flex: 1,
    alignItems: 'flex-end',
  },
  addFoodContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    
  },
  addFoodLegend:{
    fontSize: 20,
  },
  searchContainer:{
    flexDirection: 'row',
  },
  inputContainer:{
    flex: 1,
    marginLeft: -12,
  },
  searchBtnTitle:{
    color: '#000',
    fontSize: 14,
  }

});

export default AddFood
