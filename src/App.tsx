import './App.css'
import Home from './components/Home'
import useHeaderGif from './hooks/useHeaderGift';

function App() {
  const headerGif = useHeaderGif();

  return (
    <div className="relative w-full h-screen">
      {/* Fondo global con la imagen GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${headerGif})`,
          opacity: 0.5,
          transform: "rotate(180deg)",
        }}
      ></div>
      {/* Contenido principal */}
      <div className="relative">
        <Home />
      </div>
    </div>
  )
}

export default App
