import { useState } from "react";
import { Text, TextInput, View, Pressable, Alert } from "react-native";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../lib/firebase";

export default function Lista({ navigation }: any){

const [noteText,setNoteText] = useState("");

async function AddNote(){

try{

await addDoc(collection(db,"notes"),{
text: noteText,
createdAt: serverTimestamp(),
user: auth.currentUser?.email ?? null
})

setNoteText("")

Alert.alert("Sucesso","Nota salva!")

}catch(e){
console.log("Erro salvar nota",e)
}

}

return(

<View style={{padding:20,gap:10}}>

<Text style={{fontSize:20}}>Nova Nota</Text>

<TextInput
value={noteText}
onChangeText={setNoteText}
style={{borderWidth:1,padding:10}}
placeholder="Digite uma nota"
/>

<Pressable onPress={AddNote} style={{borderWidth:1,padding:10}}>
<Text>Salvar Nota</Text>
</Pressable>

<Pressable onPress={()=> navigation.navigate("Refresh")} style={{borderWidth:1,padding:10}}>
<Text>Ver Notas</Text>
</Pressable>

</View>

)

}