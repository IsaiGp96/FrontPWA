// Acercade.tsx
import React from "react";
import Coments from "../statics/Coments";

const Acercade: React.FC = () => {
  return (
    <div className="relative flex flex-col pt-12 w-full h-screen">
    <div style={{ fontFamily: "MyCustomFont" }} className="px-4 pt-6 pb-0">
      <div className="flex flex-col md:flex-row justify-between md:items-start">
        {/* Sección de información */}
        <div className="md:w-2/3 mb-8 md:mb-0 md:mr-8 lg:mr-8">
          <h1 className="text-4xl text-white font-bold mb-4 text-justify">Acerca de nosotros</h1>
          <div className="w-10/12 h-px bg-gray-500 mb-6"></div>
          <div className="mb-12">
            <p className="text-white text-base mt-4 text-justify">
              En Lanucz, creamos soluciones tecnológicas innovadoras que transforman la interacción digital. Nos especializamos en IoT, plataformas web y videojuegos, fusionando tecnología y creatividad para ofrecer productos de alto impacto.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl text-white font-semibold mb-2">Contáctanos</h2>
            <p className="text-white text-base">¡Habla con nostros!</p>
            <div className="mt-4">
              <p className="text-white text-base mt-4">
                Email: soporte@lanucz.com
              </p>
            </div>
          </div>
        </div>

        {/* Formulario alineado a la derecha */}
        <div className="md:w-1/3 md:text-left md:ml-8 lg:ml-8">
          <Coments />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Acercade;
