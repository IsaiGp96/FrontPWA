// Home.tsx
import React from "react";
//import Comentarios from "@/components/Comments";
import Carousel from "../statics/Carousel";

// Importa las imágenes (asegúrate de que las rutas sean correctas)
import naicaLogo from "../assets/images/naicaLogo.png";
import loreImage from "../assets/images/LoreImage.webp";

const Home: React.FC = () => {
  return (
    <div>
      {/* Contenido principal */}
      <div className="relative flex flex-col items-center pt-12">
        <div className="w-full flex flex-col items-center">
          <img
            src={naicaLogo}
            alt="Logo"
            className="w-[330px] h-[330px] mt-[-75px] mb-2.5"
          />
          <p
            className="text-white"
            style={{
              fontSize: "38px",
              fontFamily: "MyCustomFont",
              position: "absolute",
              top: "155px",
              left: "30px",
            }}
          >
            Lore
          </p>
          <div
            style={{
              width: "85%",
              height: "1px",
              backgroundColor: "gray",
              position: "absolute",
              top: "210px",
              left: "30px",
            }}
          ></div>
          <p
            className="text-white text-justify"
            style={{
              fontSize: "18px",
              fontFamily: "MyCustomFont",
              margin: "0 30px",
              marginTop: "-10px",
              lineHeight: "24px",
            }}
          >
            Naica es conocida, aparte de la minería, como la capital de las
            brujas. En este contexto nuestro protagonista, inspirado por las
            leyendas urbanas, se acerca al pueblo para hacer una investigación
            sobre el tema. En su travesía, al cruzar el monte de noche, se
            encuentra con una bola de fuego navegando cerca de lo que parece una
            entrada a una mina. Curioso, se acerca para tratar de filmarlo
            cuando esta atraviesa la entrada de la mina, iluminando sus paredes
            con un fuego azulado y misterioso, y al atravesar la boca de la
            mina, esta se derrumba iniciando, así nuestro juego...
          </p>
          <img
            src={loreImage}
            alt="Lore"
            className="w-[500px] h-[330px] mt-5"
          />
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
