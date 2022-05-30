import React from "react";
import "./App.css";
import {Circle} from "./components/Circle/style";
import {Box} from "./components/Box/style";
import QrCode from "./assets/images/qrcode.svg";
import {Title} from "./components/Title/style";

function App()
{
    return(
        <div className="App">
            <Circle setSize="900px" setBorderRadius="0% 0% 100%"></Circle>
            <Circle setSize="900px" setBorderRadius="100% 100% 0%" setLeft="1030px" setTop="632px"></Circle>
            
            <main className="App__main">
                <Box>
                    <img src={QrCode} alt="Qr Code" className="App__main--image"/>
                    <Title>Bem vindo(a) !</Title>
                    <Title setFontSize="15px">
                        Olá meu nome é Kelliton !
                        <br/>
                        <br/> Eu sou game programmer e desenvolvedor web front-end iniciante.<br/>
                        <br/>
                        Eu estou sempre tentando melhorar minhas habilidades e aprender muito mais sobre o desenvolvimento de jogos e desenvolvimento web...
                    </Title>
                </Box>
            </main>

            <Circle setSize="70px" setTop="39px" setLeft="1600px" setBorderRadius="50%"></Circle>
            <Circle setSize="50px" setTop="100px" setLeft="1432px" setBorderRadius="50%"></Circle>
            <Circle setSize="80px" setTop="350px;" setLeft="1583px;" setBorderRadius="50%"></Circle>
            <Circle setSize="70px" setTop="887px;" setLeft="374px;" setBorderRadius="50%"></Circle>
            <Circle setSize="50px" setTop="780px;" setLeft="515px;" setBorderRadius="50%"></Circle>
        </div>
    );
}

export default App;