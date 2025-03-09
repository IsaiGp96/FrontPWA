// Acercade.tsx
import React, { useState } from "react";
//import FormularioComentarios from "@/components/Formcoments";

const Acercade: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreSecond, setShowMoreSecond] = useState(false);

  const handlePress = () => {
    if (navigator.vibrate) {
      navigator.vibrate(55);
    }
    setShowMore(!showMore);
  };

  const handlePressSecond = () => {
    if (navigator.vibrate) {
      navigator.vibrate(55);
    }
    setShowMoreSecond(!showMoreSecond);
  };

  return (
    <div>
      <h1 className="text-4xl text-white font-bold mb-4">Information</h1>
      <div className="w-full h-px bg-gray-500 mb-6"></div>

      <div className="mb-8">
        <h2 className="text-2xl text-white font-semibold mb-2">Acerca de</h2>
        <p className="text-white text-base">Un poco de nosotros</p>
        {showMore && (
          <p className="text-white text-base mt-4">
            En Lanucz, creamos soluciones tecnológicas innovadoras que transforman la interacción digital. Nos especializamos en IoT, plataformas web y videojuegos, fusionando tecnología y creatividad para ofrecer productos de alto impacto.
          </p>
        )}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handlePress}
        >
          {showMore ? "Mostrar menos" : "Mostrar más"}
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl text-white font-semibold mb-2">Contactanos</h2>
        <p className="text-white text-base">Habla con nostros !</p>
        {showMoreSecond && (
          <div className="mt-4">
            {/* <FormularioComentarios /> */}
            <p className="text-white text-base mt-4">
              Email: soporte@lanucz.com
            </p>
          </div>
        )}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handlePressSecond}
        >
          {showMoreSecond ? "Mostrar menos" : "Mostrar más"}
        </button>
      </div>
    </div>
  );
};

export default Acercade;
