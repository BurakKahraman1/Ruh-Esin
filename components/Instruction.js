import { View, Text,StyleSheet,Pressable,Image, useWindowDimensions } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";


const Instruction = ({instruction, setInstruction}) => {
  const {width, height}=useWindowDimensions()

   const instructionHandler=()=>{
        if(instruction <5){
            setInstruction(prev=>prev+1)
        }    
    }

  return (
   <>
    <Pressable onPress={instructionHandler} style={styles.instruction} >
    <LinearGradient
    locations={[0.4, 1]}
    colors={["#ee77228c", "#222222e5"]}
    style={styles.instruction}
  >
    <Pressable onPress={()=>setInstruction(5)} style={({pressed})=>(pressed? {opacity:0.7} : null)}>
      <View style={styles.esc}>
      <Text style={{ fontSize: 24, fontWeight: "500", color:'black' }}>X</Text>
      </View>
    </Pressable>
    {instruction===0 &&
        <View style={styles.instructionBottomContainer}>
      <View style={{ justifyContent:'center', alignItems:'center',width:'50%',borderRightWidth:1,borderColor:'white'}}>
      <Image source={require("../assets/home/left.png")}/>
        <Text style={styles.Texts}>Begenmek icin sola kaydir</Text>
      </View>
      <View style={{ justifyContent:'center', alignItems:'center',width:'50%'}}>
        <Image source={require("../assets/home/right.png")}/>
        <Text style={styles.Texts}>Gecmek icin saga kaydir</Text>
      </View>
    </View>
    }
    {console.log(height)}
    {instruction===1 &&
        <View style={[styles.instruction1,{top:height*5/8}]}>
            <Image style={{transform: [{ rotate: '180deg' }]}} source={require("../assets/home/point.png")}/>
            <Text style={styles.Texts}>
            kalbe tıklayarak takip edebilirsin.
            </Text>
        </View>
    }
      {instruction===2 &&
        <View style={[styles.instruction2,{top:height*16/24}]}>
            <Text style={styles.Texts}>
            buradan beğeni gönderebilirsin           
             </Text>
            <Image source={require("../assets/home/point.png")}/>
        </View>
    }
      {instruction===3 &&
        <View style={[styles.instruction3,{top:height*16/24}]}>
            <Text style={styles.Texts}>
            buradan beğeni gönderebilirsin
            </Text>
            <Image source={require("../assets/home/point.png")}/>
        </View>
    }
      {instruction===4 &&
        <View style={[styles.instruction4,{top:height*16/24}]}>
            <Text style={styles.Texts}>
            buradan sayfayı Yenileyebilirsin
            </Text>
            <Image  source={require("../assets/home/point.png")}/>
        </View>
    }

  </LinearGradient>
  </Pressable>
  </> 
  )
}

export default Instruction;

const styles=StyleSheet.create({
    instruction: {
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 2
      },
      esc: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        position: "absolute",
        right: 20,
        top: 80,
      },
      instructionBottomContainer:{
        height:110,
        position:'absolute',
        bottom:40,
        flexDirection:'row',
        marginHorizontal:44
      },
      Texts:{
        textAlign:'center',
        color:'white',
        fontSize:14, 
        lineHeight:21, 
        fontWeight:'600',
        marginTop:8
      },
      instruction1:{
        width:117,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:75,
      },
      instruction2:{
        width:117,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:212,
      },  instruction3:{
        width:117,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:138,
      },  instruction4:{
        width:117,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:64,
      }
})