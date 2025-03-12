import React, { useCallback, useEffect, useState } from "react";

const DynamicTable: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [columns, setColumns] = useState<string[]>([]);

  // Función para obtener los datos de la API sin caché
  const fetchData = useCallback(async () => {
    try {
      console.log("Iniciando petición a la API");
      const response = await fetch(
        `http://192.168.1.75:3000/api/getDataFromFirebase`,
        { cache: "no-store" }
      );
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }

      const json = await response.json();
      console.log("Datos actualizados:", json);

      // Filtra cada elemento para ignorar el campo "id"
      const filteredData = json.map((item: any) => {
        const { id, ...rest } = item;
        return rest;
      });
      setData(filteredData);

      // Extraer las columnas a partir de las claves del primer objeto
      setColumns(filteredData.length > 0 ? Object.keys(filteredData[0]) : []);

      setError(null);
    } catch (err: any) {
      console.error("Error: ", err.message);
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Carga inicial de datos
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {loading ? (
        <div className="w-10 h-10 border-4 border-t-[#dbf4ff] border-[#231f1a] rounded-full animate-spin place-self-center my-6"></div>
      ) : error != null ? (
        <p
          className="my-6 text-[#ffece9]"
          style={{
            fontSize: "18px",
            fontFamily: "MyCustomFont",
          }}
        >
          {error}
        </p>
      ) : !data || data.length === 0 ? (
        <p
          className="my-6"
          style={{
            fontSize: "18px",
            fontFamily: "MyCustomFont",
          }}
        >
          No hay datos disponibles.
        </p>
      ) : (
        <div className="relative flex flex-col overflow-x-auto rounded-lg bg-clip-border shadow-md">
          <table className="w-full border-collapse border-[#f1f0e6] rounded-lg table-auto">
            {/* Encabezado */}
            <thead className="bg-[#231f1a] rouded-t-lg">
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="p-4 border-b capitalize first:rounded-tl-lg last:rounded-tr-lg"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            {/* Filas */}
            <tbody className="bg-[#231f1a]/25 rounded-b-lg">
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-[#231f1a]">
                  {columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className={`p-4 ${
                        rowIndex === data.length - 1
                          ? "border-b-none"
                          : "border-b"
                      }`}
                    >
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default DynamicTable;
