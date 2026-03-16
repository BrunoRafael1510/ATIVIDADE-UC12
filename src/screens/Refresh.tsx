import { useEffect, useState } from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Refresh({ navigation }: any){

const [notes,setNotes] = useState<any[]>([])

useEffect(()=>{

const q = query(
collection(db,"notes"),
orderBy("createdAt","desc")
)

const unsubscribe = onSnapshot(q,(snapshot)=>{

const data = snapshot.docs.map(n=>({
id:n.id,
text:n.data().text
}))

setNotes(data)

})

return unsubscribe

},[])

return(

<View style={{padding:20}}>

<Pressable
onPress={()=> navigation.navigate("Lista")}
style={{borderWidth:1,padding:10,marginBottom:20}}
>
<Text>Voltar</Text>
</Pressable>

<ScrollView>

{notes.map(n=>(
<Text key={n.id} style={{fontSize:16,marginBottom:10}}>
• {n.text}
</Text>
))}

</ScrollView>

</View>

)
}