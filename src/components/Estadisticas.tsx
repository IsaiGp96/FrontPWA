import React from "react";
import DynamicTable from "../statics/DynamicTable";

const Estadisticas: React.FC = () => {
  return (
    <div className="m-8">
      <div className="pt-12 max-w-7xl h-screen mx-auto">
        <div className="w-full" style={{ fontFamily: "MyCustomFont" }}>
          <div className="w-full">
            <h1 className="text-4xl text-white font-bold mb-4 text-left">
              Estadísticas
            </h1>
            <div className="w-10/12 h-px bg-gray-500 mb-6"></div>
            <div className="w-full">
              <DynamicTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
