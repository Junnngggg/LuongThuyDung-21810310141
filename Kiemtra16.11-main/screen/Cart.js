import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.box}>
       <Image source={require("../assets/Arrow3.png")} />
     </TouchableOpacity>
     <Text style={{fontSize:22,fontWeight:'700',color:'#363636',marginTop:35,marginBottom:20,}}>Your Cart 👍🏻</Text>
     <View style={styles.item}>
      <Image source={require("../assets/47.png")} ></Image>
      <View style={{flexDirection:'column',gap:2,marginLeft:20}}>
      <Text style={{fontSize:11,color:'#C2C2C2'}}>Lauren’s</Text>
      <Text style={{fontSize:12,color:'#494949'}}>Orange Juice</Text>
      <Text style={{fontSize:16,color:'#F08F5F',fontWeight:'700'}}>₹ 149</Text>
      </View>
      <TouchableOpacity style={[styles.add,{marginLeft:100,}]}>
       <Image source={require("../assets/162.png")} ></Image>
       <Text style={{fontSize:10,}}>2</Text>
       <Image source={require("../assets/163.png")} ></Image>
      </TouchableOpacity>
     </View>
     <View style={styles.item}>
      <Image source={require("../assets/31.png")} style={{width:61,height:61}}></Image>
      <View style={{flexDirection:'column',gap:2,marginLeft:20}}>
      <Text style={{fontSize:11,color:'#C2C2C2'}}>Baskin’s</Text>
      <Text style={{fontSize:12,color:'#494949'}}>Skimmed Milk</Text>
      <Text style={{fontSize:16,color:'#F08F5F',fontWeight:'700'}}>₹ 129</Text>
      </View>
      <TouchableOpacity style={[styles.add,{marginLeft:95,}]}>
       <Image source={require("../assets/162.png")} ></Image>
       <Text style={{fontSize:10,}}>2</Text>
       <Image source={require("../assets/163.png")} ></Image>
      </TouchableOpacity>
     </View>
     <View style={styles.item}>
      <Image source={require("../assets/45.png")} style={{width:61,height:61}} ></Image>
      <View style={{flexDirection:'column',gap:2,marginLeft:20}}>
      <Text style={{fontSize:11,color:'#C2C2C2'}}>Marley’s</Text>
      <Text style={{fontSize:12,color:'#494949'}}>Aloe Vera Lotion</Text>
      <Text style={{fontSize:16,color:'#F08F5F',fontWeight:'700'}}>₹ 1249</Text>
      </View>
      <TouchableOpacity style={[styles.add,{marginLeft:85,}]}>
       <Image source={require("../assets/162.png")} ></Image>
       <Text style={{fontSize:10,}}>2</Text>
       <Image source={require("../assets/163.png")} ></Image>
      </TouchableOpacity>
     </View>
     <View style={{flexDirection:'row',justifyContent:"space-between",marginBottom:15,marginTop:40,}}>
            <Text style={{fontSize:19,fontWeight:'600'}}>Total</Text>
            <Text style={{fontSize:19,color:'#F08F5F',fontWeight:'600'}}>₹ 1,527</Text>
     </View>
     <TouchableOpacity style={styles.check}>
      <Text style={{fontSize:18,color:'#fff',fontWeight:'700'}}>Proceed to checkout</Text>
      </TouchableOpacity>
  </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        },
        box:{
            backgroundColor:'#F8F8FB',
            width:45,
            height:45,
            marginTop:55,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
        },
        item:{ 
            backgroundColor:'#F8F8FB',
            height:85,
            flexDirection:'row',
            paddingVertical:15,
            paddingLeft:17,
            borderRadius:16,
            marginTop:20,
        },
        add:{
            backgroundColor:'#fff',
            width:67,
            height:25,
            borderRadius:5,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginTop:30,
            paddingHorizontal:5,
            paddingBottom:3,
        },
        check:{
            backgroundColor:'#F08F5F',
            height:62,
            marginTop:55,
            borderRadius:16,
            alignItems:'center',
            justifyContent:'center',
        },
})