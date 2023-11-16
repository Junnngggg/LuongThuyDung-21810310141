import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Scan = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/bttt.png")}/>
       <TouchableOpacity style={styles.box}>
         <Image source={require("../assets/Arrow1.png")} />
       </TouchableOpacity>
       <View style={styles.item}>
        <Image source={require("../assets/35.png")} ></Image>
        <View style={{flexDirection:'column',gap:3,marginLeft:10,}}>
        <Text style={{paddingTop:6,fontSize:12,color:'#C2C2C2'}}>Lauren’s</Text>
        <Text style={{fontSize:16,color:'#494949'}}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.add}>
         <Image source={require("../assets/Group3.png")} ></Image>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default Scan

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'#e8dac9',
    },
    box:{
        backgroundColor:'#FFFFFFB2',
        width:45,
        height:45,
        position:'absolute',
        top:55,
        left:25,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    item:{
        position:'absolute',
        top:620,
        left:50,
        backgroundColor:'#fff',
        width:292,
        height:82,
        flexDirection:'row',
        paddingVertical:15,
        paddingLeft:17,
        borderRadius:16,
    },
    add:{
        backgroundColor:'#5A6CF3',
        width:45,
        height:45,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:58,
        marginTop:5,
    },
})