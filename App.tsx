import { useState } from "react";

import LoginScreen from "./src/screens/Login";
import CadastroScreen from "./src/screens/Cadastro";
import ListaScreen from "./src/screens/Lista";
import RefreshScreen from "./src/screens/Refresh";

const Login: any = LoginScreen;
const Cadastro: any = CadastroScreen;
const Lista: any = ListaScreen;
const Refresh: any = RefreshScreen;

export default function App(){

const [tela,setTela] = useState("Login");

const navigation = {
  navigate: (screen:string) => setTela(screen)
};

if(tela === "Login"){
  return <Login navigation={navigation} />
}

if(tela === "Cadastro"){
  return <Cadastro navigation={navigation} />
}

if(tela === "Lista"){
  return <Lista navigation={navigation} />
}

if(tela === "Refresh"){
  return <Refresh navigation={navigation} />
}

return null;

}