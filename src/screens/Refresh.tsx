import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Refresh(){

const [notes,setNotes] = useState<any[]>([])

async function refreshNotes(){

const response = query(
collection(db,"notes"),
orderBy("createdAt","desc"),
limit(10)
)

const snap = await getDocs(response)

setNotes(snap.docs.map(n=>({
id:n.id,
text:n.data().text
})))

}

return(

<View>

<Pressable onPress={refreshNotes}>
<Text>Recarregar</Text>
</Pressable>

{notes.map(n=>(
<Text key={n.id}>- {n.text}</Text>
))}

</View>

)
}