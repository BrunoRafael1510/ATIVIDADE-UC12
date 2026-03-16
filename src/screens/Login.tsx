import { useState } from "react";
import { Text, TextInput, View, Pressable } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Login({ navigation }: any){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

async function handleLogin(){
  try{
    const logged = await signInWithEmailAndPassword(auth,email,password);
    console.log("LOGIN OK", logged.user.uid);
    navigation.navigate("Lista");
  }catch(e){
    console.log("LOGIN FAIL",e);
  }
}

return(

<View style={{padding:20,gap:10}}>

<Text style={{fontSize:20}}>LOGIN</Text>

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

<Pressable onPress={handleLogin} style={{borderWidth:1,padding:10}}>
<Text>Entrar</Text>
</Pressable>

<Pressable onPress={()=> navigation.navigate("Cadastro")} style={{borderWidth:1,padding:10}}>
<Text>Criar conta</Text>
</Pressable>

</View>

)

}