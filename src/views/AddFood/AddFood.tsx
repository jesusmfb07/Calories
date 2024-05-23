import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Header from '../../components/Header/Header';
import {Button,Icon} from '@rneui/themed'

const AddFood = () => {
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
        />

      </View>

    </View>
    <View style={styles.searchContainer}>
      
    <View style={styles.inputContainer}>
      <input placeholder='apples,pie,soda...' />
    </View>
      <Button
       title="Search"
       color="#ade8af"
       titleStyle={styles.searchBtnTitle}
       radius="lg"
      />
    </View>
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
