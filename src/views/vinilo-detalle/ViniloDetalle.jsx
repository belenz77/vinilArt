import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './ViniloDetalle.css';
import Portada from "../../data/img/04.jpg";

function ViniloDetalle() {
    return (
        <>
            <Header />
            <div class="relative p-4 bg-white dark:bg-gray-800" id='vistaDetalle'>
                <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div class="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1" id='portadaAlbum'>

                        <img src={Portada} alt="logo" className="portadaVinilo" />
                    </div>
                    <div class="lg:col-start-2 md:pl-20">
                        <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
                            Detalle del vinilo
                        </h4>
                        <ul class="mt-10">
                            <li>
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                       
                                    </div>
                                    <div class="ml-4">
                                        <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                            Nombre de la banda
                                        </h5>
                                        <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='bandName'>
                                            The Velvet Underground
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">

                                    </div>
                                    <div class="ml-4">
                                        <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                            Album Name
                                        </h5>
                                        <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='albumName'>
                                            The Velvet Underground & Nico
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">

                                    </div>
                                    <div class="ml-4">
                                        <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                            Género
                                        </h5>
                                        <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='genre'>
                                            POP ROCK
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">

                                    <div class="ml-4">
                                        <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                            Precio
                                        </h5>
                                        <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='price'>
                                            25,78€
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">

                                    </div>
                                    <div class="ml-4">
                                        <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                            Descripción
                                        </h5>
                                        <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='description'>
                                            The Velvet Underground & Nico es el primer álbum de estudio de la banda estadounidense The Velvet Underground, lanzado en 1967 con la colaboración en las voces de la cantante alemana Nico. Su grabación se efectuó en Nueva York y Hollywood entre abril y mayo de 1966 bajo la dirección del líder del movimiento pop 
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">

                                    </div>
                                    <div class="ml-4">
                                        <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                            Etiquetas
                                        </h5>
                                        <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='imatags'>
                                            POP ROCK
                                        </p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex-shrink-0">

                                    </div>
                                    <div class="ml-4">
                                        <div class="product_meta singletags">

                                            <span class="posted_in" id='categoria'>Categoría: <a href="https://oldrecords.com.br/categoria-produto/funk-soul-jazz/" rel="tag">Funk / Soul / Jazz</a></span>
                                            <br></br>
                                            <span class="tagged_as" id='tags'>Tags: <a href="https://oldrecords.com.br/produto-tag/12-single/" rel="tag">12" / Singles / Mix / Promo</a> <a href="https://oldrecords.com.br/produto-tag/importados/" rel="tag">Importados</a></span>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>


            <div id='playAlbum' class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h2> Escúchalo en SPOTIFY</h2>
                <iframe src="https://open.spotify.com/embed/album/4xwx0x7k6c5VuThz5qVqmV?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <Footer />
        </>
    )
}

export default ViniloDetalle
