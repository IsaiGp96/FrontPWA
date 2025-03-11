// Wiki.tsx
import React from "react";

const Wiki: React.FC = () => {
  const downloadImage = async (object: string) => {
    // URL del endpoint para descargar la imagen, ajustar según sea necesario
    const uri = `http://192.168.1.75:3000/api/getImageFromBackend/${object}`;
    // Crea un enlace dinámico y simula un click para descargar la imagen
    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.download = `${object}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log(`Image downloaded and saved: ${object}.png`);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div>
      {/* Contenido principal con scroll vertical */}
      <div className="relative flex flex-col pt-12">
        <div className="w-full flex flex-col p-8">
          <div className="mx-auto" style={{ fontFamily: "MyCustomFont" }}>
            <h1 className="text-4xl text-white font-bold mb-4 text-left">
              Wiki
            </h1>
            <div className="w-10/12 h-px bg-gray-500 mb-6"></div>

            {/* Sección de Personajes */}
            <div className="mb-8">
              <h2 className="text-2xl text-[#ffebed] font-semibold mb-2 text-left">
                Personajes
              </h2>
              <h3 className="text-xl text-white font-medium text-left">
                Principal:
              </h3>
              <p
                className="text-white text-base mb-4"
                style={{ textAlign: "justify" }}
              >
                El protagonista es un personaje curioso y determinado, cuya meta
                principal es escapar de la mina y descubrir los misterios que la
                rodean. Aunque no cuenta con armas ni habilidades
                extraordinarias, su fortaleza radica en su ingenio y su
                capacidad de observación.
              </p>
              <h3 className="text-xl text-white font-medium text-left">
                Antagonista:
              </h3>
              <p
                className="text-white text-base mb-4"
                style={{ textAlign: "justify" }}
              >
                Una entidad oscura y malévola que habita en las profundidades de
                la mina. Se manifiesta de diferentes formas para acechar y
                obstaculizar al protagonista. Su naturaleza enigmática añade una
                capa de terror psicológico, manteniendo al jugador en constante
                tensión.
              </p>
              <h3 className="text-xl text-white font-medium text-left">
                Orbe de fuego:
              </h3>
              <p
                className="text-white text-base mb-4"
                style={{ textAlign: "justify" }}
              >
                Este personaje actúa como un mentor al inicio del juego, guiando
                al protagonista hacia una zona de interés. Representa una fuente
                de luz y esperanza en un entorno dominado por la oscuridad. Sin
                embargo, su propósito y naturaleza pueden ser más complejos de
                lo que aparentan.
              </p>
            </div>

            {/* Sección de Niveles */}
            <div className="mb-8">
              <h2 className="text-2xl text-[#ffebed] font-semibold mb-2 text-left">
                Niveles
              </h2>
              <h3 className="text-xl text-white font-medium text-left">
                Nivel 1: Parkour
              </h3>
              <p
                className="text-white text-base mb-2"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold">Descripción:</span> Este nivel
                introduce al jugador en las mecánicas de movimiento y salto. El
                escenario consiste en plataformas suspendidas que deben cruzarse
                cuidadosamente para llegar a la meta.
              </p>
              <p
                className="text-white text-base mb-4"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold">Desafíos:</span> La precisión en
                los saltos es esencial, ya que una caída implica reiniciar el
                nivel.
              </p>
              <h3 className="text-xl text-white font-medium text-left">
                Nivel 2: Laberinto de cristal
              </h3>
              <p
                className="text-white text-base mb-2"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold">Descripción:</span> Un
                intrincado laberinto compuesto por gigantescos cristales basados
                en las formaciones de Naica. La luz que reflejan los cristales
                puede distorsionar la percepción del jugador, añadiendo
                dificultad al recorrido.
              </p>
              <p
                className="text-white text-base mb-4"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold">Desafíos:</span> Encontrar la
                salida requiere orientación precisa y una buena memoria
                espacial. El ente te acecha.
              </p>
              <h3 className="text-xl text-white font-medium text-left">
                Nivel 3: Plataformas falsas
              </h3>
              <p
                className="text-white text-base mb-2"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold">Descripción:</span> Este nivel
                consiste en una serie de pilares de roca. A simple vista, todos
                parecen iguales, pero algunos son falsos y provocarán la caída
                del jugador si pisa sobre ellos.
              </p>
              <p
                className="text-white text-base"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold">Desafíos:</span> Identificar las
                plataformas verdaderas requiere atención a pequeños detalles y
                utilizar la ayuda del Orbe de fuego para evitar errores.
              </p>
            </div>

            {/* Sección de Objetos */}
            <div className="mb-8">
              <h2 className="text-2xl text-[#ffebed] font-semibold mb-2 text-left">
                Objetos
              </h2>
              {/* Objeto Principal */}
              <h3 className="text-xl text-white font-medium text-left">
                Objeto Principal
              </h3>
              <p
                className="text-white text-base mb-4"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold">Descripción:</span> Se refiere a
                aquellos que son esenciales para terminar el juego.
              </p>
              <div className="container mx-auto px-4">
                <div className="mx-auto px-8 py-6 bg-[#231f1a] rounded-lg shadow-lg">
                  <p
                    className="text-white text-base"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="font-semibold">Libro:</span> Un libro que
                    contiene secretos de la cueva.
                  </p>
                  <button
                    className="w-full mt-2 p-2 bg-[#06e5ee] text-[#001f20] font-semibold rounded transition-all hover:bg-[#bbfbff]"
                    onClick={() => downloadImage("book")}
                  >
                    Descargar Modelo Libro
                  </button>
                  <p
                    className="text-white text-base mt-4"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="font-semibold">Identificación:</span> Una
                    misteriosa identificación encontrada dentro de la cueva.
                  </p>
                  <button
                    className="w-full mt-2 p-2 bg-[#06e5ee] text-[#001f20] font-semibold rounded transition-all hover:bg-[#bbfbff]"
                    onClick={() => downloadImage("identification")}
                  >
                    Descargar Modelo Identificación
                  </button>
                  <p
                    className="text-white text-base mt-4"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="font-semibold">Lámpara:</span> Una lámpara
                    que ilumina el camino en la oscuridad.
                  </p>
                  <button
                    className="w-full mt-2 p-2 bg-[#06e5ee] text-[#001f20] font-semibold rounded transition-all hover:bg-[#bbfbff]"
                    onClick={() => downloadImage("lamp")}
                  >
                    Descargar Modelo Lámpara
                  </button>
                  <p
                    className="text-white text-base mt-4"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="font-semibold">Pico:</span> Un objeto que
                    parece ser usado hace tiempo.
                  </p>
                  <button
                    className="w-full mt-2 p-2 bg-[#06e5ee] text-[#001f20] font-semibold rounded transition-all hover:bg-[#bbfbff]"
                    onClick={() => downloadImage("pickaxe")}
                  >
                    Descargar Modelo Pico
                  </button>
                </div>
              </div>

              {/* Objeto de Historia */}
              <h3 className="text-xl text-white font-medium text-left mt-8">
                Objeto de Historia
              </h3>
              <p
                className="text-white text-base mb-4"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold">Descripción:</span> Los objetos
                que le ayudan al protagonista a descubrir la verdad.
              </p>
              <div className="container mx-auto px-4">
                <div className="mx-auto px-8 py-6 bg-[#231f1a] rounded-lg shadow-lg">
                  <p
                    className="text-white text-base"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="font-semibold">Cámara:</span> Una cámara
                    usada.
                  </p>
                  <button
                    className="w-full mt-2 p-2 bg-[#06e5ee] text-[#001f20] font-semibold rounded transition-all hover:bg-[#bbfbff]"
                    onClick={() => downloadImage("camera")}
                  >
                    Descargar Modelo Cámara
                  </button>
                  <p
                    className="text-white text-base mt-4"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="font-semibold">Jaula de pájaros:</span>{" "}
                    Resguarda la libertad del protagonista.
                  </p>
                  <button
                    className="w-full mt-2 p-2 bg-[#06e5ee] text-[#001f20] font-semibold rounded transition-all hover:bg-[#bbfbff]"
                    onClick={() => downloadImage("bird_cage")}
                  >
                    Descargar Modelo Jaula de pájaros
                  </button>
                  <p
                    className="text-white text-base mt-4"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="font-semibold">Detonador:</span> Un objeto
                    que se ha usado aquí hace tiempo.
                  </p>
                  <button
                    className="w-full mt-2 p-2 bg-[#06e5ee] text-[#001f20] font-semibold rounded transition-all hover:bg-[#bbfbff]"
                    onClick={() => downloadImage("detonator")}
                  >
                    Descargar Modelo Detonador
                  </button>{" "}
                </div>
              </div>

              {/* Objeto de Apoyo */}
              <h3 className="text-xl text-white font-medium text-left mt-8">
                Objeto de Apoyo
              </h3>
              <p
                className="text-white text-base mb-4"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold">Descripción:</span> Ítems que
                otorgan energía y extienden la duración.
              </p>
              <div className="container mx-auto px-4">
                <div className="mx-auto px-8 py-6 bg-[#231f1a] rounded-lg shadow-lg">
                  <p
                    className="text-white text-base"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="font-semibold">Batería:</span> Proporciona
                    energía esencial para nuestra lámpara.
                  </p>
                  <button
                    className="w-full mt-2 p-2 bg-[#06e5ee] text-[#001f20] font-semibold rounded transition-all hover:bg-[#bbfbff]"
                    onClick={() => downloadImage("battery")}
                  >
                    Descargar Modelo Batería
                  </button>
                  <p
                    className="text-white text-base mt-4"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="font-semibold">Tanque de Oxígeno:</span>{" "}
                    Incrementa la reserva vital para continuar explorando.
                  </p>
                  <button
                    className="w-full mt-2 p-2 bg-[#06e5ee] text-[#001f20] font-semibold rounded transition-all hover:bg-[#bbfbff]"
                    onClick={() => downloadImage("oxygen-tank")}
                  >
                    Descargar Modelo Tanque de Oxígeno
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wiki;
