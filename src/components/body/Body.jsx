//import ButtonAdd from './ButtonAdd';
import Json from '../../data/Json.jsx';
import './Body.css';
import ButtonAdd from './ButtonAdd.jsx';
import Portada from "../../data/img/04.jpg";
import Detail from "../../views/vinilo-detalle/ViniloDetalle.jsx"
import { Link } from 'react-router-dom';


function Body() {

  const cards = Json

  return (
    <>
     <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
    <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
            </span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                Conectando
                <span className="text-5xl sm:text-7xl">
                    Generaciones
                </span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              En VINILART nos dedicamos a la compra venta de vinilos históricos. Aquellos que marcaron tu infancia, tu juventud y que las nuevas generaciones vuelven a disfrutar.
            </p>
            <div className="flex mt-8">
                <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                    Get started
                </a>
                <a href="#" className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md">
                    Read more
                </a>
            </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img src={Portada} alt="logo" className="portadaVinilo" />
        </div>
    </div>

</div>

    <div className=" container containerCard">
     
      <div className="Cards">
        {cards.map(product => (
          <div key={product.id} className="box">
            <Link to={'/detalle'}>
              <img src={product.image} alt="" />
            </Link>
            <h3>{product.bandName}</h3>
            <h3>{product.albumName}</h3>
            <p>{product.price}</p>
            <ButtonAdd />
          </div>
        

        ))}
      </div>

    </div>
    
   
</>
  );
}

export default Body;