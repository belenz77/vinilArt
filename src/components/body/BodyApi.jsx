import React, { useEffect, useState } from 'react'
import axios from 'axios';

// import { Link } from 'react-router-dom';

const url = 'http://localhost:8000/api'

const Body = () => {

    const [vinils, setVinils] = useState([]);

    useEffect(() => {
        getAllElements();
    }, [])

    const getAllElements = async () => {
        const response = await axios.get(`${url}/vinils`);
        setVinils(response.data);
    }

    return (
        <div>
            <div>
                <h2> Listado de vinilos </h2>
                {
                    vinils.map((vinil) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={vinil.id}>
                               <a href={`vinilos/${vinil.id}`}>
                            <img className="w-full" src={vinil.image} alt="Sunset in the mountains" />
                            </a>
                            <div className="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{vinil.bandName}</div>
                                <p class="text-gray-700 text-base"> {vinil.albumName}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;