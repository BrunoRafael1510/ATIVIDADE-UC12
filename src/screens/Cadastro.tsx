import { useState } from "react";
import { Text, TextInput, View, Pressable, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Cadastro({ navigation }: any){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

async function handleRegister(){
  try{
    const create = await createUserWithEmailAndPassword(auth,email,password);
    console.log("REGISTER OK", create.user.uid);

    Alert.alert("Sucesso","Conta criada com sucesso!");

    navigation.navigate("Login");

  }catch(e){
    console.log("REGISTER FAIL",e);
    Alert.alert("Erro","Não foi possível criar a conta");
  }
}

return(

<View style={{padding:20,gap:10}}>

<Text style={{fontSize:20}}>CADASTRO</Text>

<TextInput
placeholder="Email"
value={email}
onChangeText={setEmail}
autoCapitalize="none"
style={{borderWidth:1,padding:10}}
/>

<TextInput
placeholder="Senha"
secureTextEntry
value={password}
onChangeText={setPassword}
style={{borderWidth:1,padding:10}}
/>

<Pressable onPress={handleRegister} style={{borderWidth:1,padding:10}}>
<Text>Criar conta</Text>
</Pressable>

<Pressable onPress={()=> navigation.navigate("Login")} style={{borderWidth:1,padding:10}}>
<Text>Voltar</Text>
</Pressable>

</View>

)

}