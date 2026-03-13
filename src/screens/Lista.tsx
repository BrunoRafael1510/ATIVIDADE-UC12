import { useState } from "react";
import { Text, TextInput, View, Pressable } from "react-native";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../lib/firebase";

export default function Lista({ navigation }: any){

const [noteText,setNoteText] = useState("");

async function AddNote(){

await addDoc(collection(db,"notes"),{
text: noteText,
createdAt: serverTimestamp(),
user: auth.currentUser?.email ?? null
})

setNoteText("")
}

return(

<View>

<Text>Nova Nota</Text>

<TextInput
value={noteText}
onChangeText={setNoteText}
/>

<Pressable onPress={AddNote}>
<Text>Salvar Nota</Text>
</Pressable>

<Pressable onPress={()=> navigation.navigate("Refresh")}>
<Text>Ver Notas</Text>
</Pressable>

</View>

)
}