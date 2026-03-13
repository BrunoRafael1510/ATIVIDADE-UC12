import { useState } from "react";
import { Text, TextInput, View, Pressable } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Login({ navigation }: any) {

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
<View>

<Text>LOGIN</Text>

<TextInput
placeholder="Email"
value={email}
onChangeText={setEmail}
/>

<TextInput
placeholder="Senha"
secureTextEntry
value={password}
onChangeText={setPassword}
/>

<Pressable onPress={handleLogin}>
<Text>Entrar</Text>
</Pressable>

<Pressable onPress={()=> navigation.navigate("Cadastro")}>
<Text>Criar conta</Text>
</Pressable>

</View>
)
}