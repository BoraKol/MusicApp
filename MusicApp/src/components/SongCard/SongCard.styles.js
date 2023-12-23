
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding:10,
        flexDirection:"row",
    },
    image:{
        width:100,
        height:100,
        borderRadius: 50,
    },
    inner_container: {
        flex:1, // olabildiğince alan kaplaması için bu şekilde verdik
        padding:10,
        justifyContent: 'center',
        // backgroundColor:"orange",
    },
    title: {
        fontWeight:'bold',
        fontSize:25,
    },
    info_container: {
        flexDirection:'row',
        flex:1,
        alignItems: 'center',
    },
    year:{
        marginLeft:10,
        color:"gray",
        fontWeight:'bold',
    },
    soldout_container: {
        borderWidth:1,
        borderColor:"red",
        width:100,
        alignItems: 'center',
        padding:5,
        borderRadius:5,
    },
    content_container: {
        flexDirection:"row",
    },
    soldout_title: {
        color:"red",
        fontSize:12,
        fontWeight:"bold",
    },

    album_container: {
        marginLeft:10,
        
    }

})