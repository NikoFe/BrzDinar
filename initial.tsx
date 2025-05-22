 <SafeAreaView style={{flex: 1}} >
        <View style={[AppStyles.grayBackground, AppStyles.verticalCenter ,{ flex: 1 }]}>
        <View style={AppStyles.inputRow}>
          <Text style={AppStyles.bold}>Username: </Text>
          <TextInput
            style={AppStyles.input}
            onChangeText={()=>{console.log("AAAA")}} // No need for `(text) => setUsername(text)`
            value={"aaa"}
          />
        </View>
        <View style={AppStyles.inputRow}>
          <Text style={AppStyles.bold}>Password: </Text>
          <TextInput
            style={AppStyles.input}
            onChangeText={()=>{console.log("AAAA")}} // No need for `(text) => setPassword(text)`
            value={"bbb"}
          />
        </View>

        <Button title="Sign in" onPress={()=>{console.log("AAAA")}} />
      </View>
      </SafeAreaView>