import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
    <View style={styles.container}>
        <View style={styles.head}>
            <View style={styles.title}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#363636'}}>Hello 👋🏻</Text>
            <Text style={{fontSize:16,color:'#363636'}}>Christie Doe</Text>
            </View>
           <Image source={require("../assets/Ellipse6.png")} style={{borderRadius:10,}}/>
        </View>
        <View style={styles.body}>
            <Text style={{fontSize:19,}}>Your Insights</Text>
            <View style={styles.grid}>
                <TouchableOpacity style={styles.box}>
                <Image source={require("../assets/Group157.png")} ></Image>
                <Text style={{paddingVertical:7,}} >Scan new</Text>
                <Text style={{color:'#B7B7C1',fontSize:12,}}>Scaned 483</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                <Image source={require("../assets/Group157.png")} ></Image>
                <Text style={{paddingVertical:7,}} >Counterfeits</Text>
                <Text style={{color:'#B7B7C1',fontSize:12,}}>Counterfeited 32</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                <Image source={require("../assets/Group157.png")} ></Image>
                <Text style={{paddingVertical:7,}} >Success</Text>
                <Text style={{color:'#B7B7C1',fontSize:12,}}>Checkouts 8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                <Image source={require("../assets/Group157.png")} ></Image>
                <Text style={{paddingVertical:7,}} >Directory</Text>
                <Text style={{color:'#B7B7C1',fontSize:12,}}>History 26</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{marginTop:15,}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",marginBottom:15,}}>
            <Text style={{fontSize:19,}}>Explore More</Text>
            <Image source={require("../assets/Arrow2.png")}/>
        </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:15,}} >
             <Image style={styles.image} source={require("../assets/31.png")}/>
             <Image style={styles.image} source={require("../assets/45.png")}/>
             <Image source={require("../assets/46.png")} style={[styles.image,{width:127,height:125,borderRadius:16,}]}/>
            </ScrollView>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
    flex:1,
    paddingTop:20,
    paddingHorizontal:20,
    },
    head:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    },
    body:{
    marginTop:30,
    },
    grid:{
    marginTop:25,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    },
    box:{
        width:160,
        height:180,
        backgroundColor:'#F8F8FB',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:16,
        marginBottom:20,
    },
    image:{
    marginRight:15,
    },
})