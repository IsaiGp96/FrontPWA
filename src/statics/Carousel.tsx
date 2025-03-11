import React, { useEffect, useState } from "react";

interface Comentario {
  comentario: string;
  username: string;
  email: string;
}

const Carousel: React.FC = () => {
  // Lógica para mostrar los comentarios
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://192.168.1.75:3000/api/getCommentsFromFirebase")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setComentarios(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener comentarios: ", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  // Lógica para el carrusel
  useEffect(() => {
    if (comentarios.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % comentarios.length;
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [comentarios]);

  const handlePreviousClick = () => {
    setCurrentIndex(
      (currentIndex) =>
        (currentIndex - 1 + comentarios.length) % comentarios.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % comentarios.length);
  };

  // Lógica para seleccionar colores aleatorios
  const colors = [
    "#ffebed",
    "#dcbabf",
    "#bbfbff",
    "#06e5ee",
    "#dbf4ff",
    "#92cbe1",
    "#464740",
    "white",
  ];

  const pick = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <>
      {/* <Comentarios /> */}
      <div className="py-6 w-full px-7.5">
        <p
          className="text-white text-left"
          style={{
            fontSize: "24px",
            fontFamily: "MyCustomFont",
          }}
        >
          Comentarios
        </p>
        <div
          className="mt-2"
          style={{
            width: "85%",
            height: "1px",
            backgroundColor: "gray",
          }}
        ></div>
        <div className="relative">
          <div
            className="flex-row m-0 absolute"
            style={{ placeSelf: "anchor-center" }}
          >
            {loading ? (
              <div className="w-10 h-10 border-4 border-t-[#dbf4ff] border-[#231f1a] rounded-full animate-spin place-self-center my-6"></div>
            ) : error ? (
              <p
                className="my-6 text-[#ffece9]"
                style={{
                  fontSize: "18px",
                  fontFamily: "MyCustomFont",
                }}
              >
                Los comentarios no se pudieron cargar correctamente.
              </p>
            ) : comentarios.length > 0 ? (
              comentarios.map((comentario, index) => (
                <div
                  key={index}
                  className={`max-w-10/12 bg-[#231f1a] rounded-xl shadow-lg overflow-hidden m-4 px-2 py-4 ${
                    index == currentIndex ? "inline-grid" : "hidden"
                  }`}
                >
                  <div className="px-6 py-2">
                    <div className="flex space-x-4 items-center">
                      <svg
                        className="rounded-full"
                        style={{ backgroundColor: pick() }}
                        height="48"
                        width="48"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      ></svg>
                      <div className="text-lg font-bold text-white">
                        {comentario.username}
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-2">
                    <div className="text-sm text-justify text-white">
                      {comentario.comentario}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p
                className="my-6"
                style={{
                  fontSize: "18px",
                  fontFamily: "MyCustomFont",
                }}
              >
                No hay comentarios disponibles.
              </p>
            )}
            {!loading && !error && comentarios.length > 0 && (
              <div className="flex-row justify-center relative w-full mb-6">
                <button
                  className="items-center bg-transparent inline-flex p-0"
                  onClick={handlePreviousClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  className="items-center bg-transparent inline-flex p-0"
                  onClick={handleNextClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
