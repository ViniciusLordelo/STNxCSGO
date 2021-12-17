import '../pages/App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import logo from '../img/LOGOxSTN.png';
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import discord from '../img/discord.png';
import youtube from '../img/youtube.png';
import twitch from '../img/twitch.png';


export default function App() {
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
      <cabecalho className="cabecalho">

      <logo className="classelogo">
      <img src={logo}
      alt="Logo da STN"
      className="logo" 
      />
      </logo>
      
      <form className="form">
 
      <a className="redirectPages" href="#">HOME</a>
      <a className="redirectPages" href="#">TIME</a>
      <a className="redirectPages" href="#">FORMULÁRIO</a>
      <a className="redirectPages" href="#">LOGIN/CADASTRO</a>

      </form>
      </cabecalho>
       <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-img">
          <img
            className="d-block w-100"
            src={image1}
            alt="Fundo CS:GO"
          />
          <Carousel.Caption className="h3-carousel">
            <h3 className="titulo">FAÇA O FORMULÁRIO!</h3>
            <p>Venha fazer parte do nosso time de CS:GO!</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            className="image2"
          />

          <Carousel.Caption className="h3-carousel">
            <h3 className="titulo">O MELHOR TIME DE CS:GO</h3>
            <p>Dicas e muito mais, basta fazer o cadastro!</p>
          </Carousel.Caption>
        </Carousel.Item> 


      </Carousel>
      
      <div className="redes-sociais">
      <img
            className="discord"
            src={discord}
            alt="icon discord"
          />
     

       
         
          <img
            className="twitch"
            src={twitch}
            alt="icon twitch"
            />

  
      <img
            className="youtube"
            src={youtube}
            alt="icon youtube"
            />
            </div>
       
    
     
      </header>
    </div>
  );
}
