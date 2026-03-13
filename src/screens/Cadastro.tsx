import { useState } from "react";
import { Text, TextInput, View, Pressable } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Cadastro({ navigation }: any){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

async function handleRegister(){
  try{
    const create = await createUserWithEmailAndPassword(auth,email,password);
    console.log("REGISTER OK", create.user.uid);
    navigation.navigate("Login");
  }catch(e){
    console.log("REGISTER FAIL",e);
  }
}

return(
<View>

<Text>CADASTRO</Text>

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

<Pressable onPress={handleRegister}>
<Text>Criar conta</Text>
</Pressable>

</View>
)
}