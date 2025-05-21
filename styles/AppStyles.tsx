 
 import { StyleSheet } from 'react-native';
 

 const AppStyles = StyleSheet.create({
    container: {
      marginTop:50,
      flex: 1,
      alignItems: 'center',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      marginTop: 10,
    },

    task: {
      color:"black",
      fontSize: 18,
      width:"100%",

  
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: "75%"
    },

    input2: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 200
    },

    inputRow : {
      display:"flex",
      width:"100%",
      flexDirection: "row",
      alignItems: 'center',
    },
    bold :{
      fontWeight: "bold"
    },

    picker: {
      backgroundColor: "lightgray",
      width:150,
      height:75,
    },
    datePicker: {
      backgroundColor: "pink",
      width:300,
      height:250,
    },
    horizontalFlex: {
     display:"flex",

    },
    

    grayBackground:
    {
       backgroundColor:"gray"
    }

  });



  export default AppStyles;