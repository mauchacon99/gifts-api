import React  from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import Loading from './Loading'
const GifGrid = ({category}) => {

    const { loading, data:Imagen} = useFetchGifs(category);

    return (
        <>
             
            <div className="">
            { loading && <Loading color="#B787F7" type="spin"  />   }
                <p className="mx-4 text-2xl	font-semibold  text-red-600">
                    {category} 
                </p>
                <div className="flex p-3">
                    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
                            { Imagen.map(({title, id, url, audio}) =>{
                                        return  ( 
                                        <li  key={id} className="  hover:bg-indigo-700 rounded-lg  transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 " >
                                        <a   className=" group block rounded-lg p-2  ">
                                            <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                                            <div>
                                                <dd className="group-hover:text-gray-50  	 uppercase leading-6 font-medium text-indigo-900 ">
                                                { title}
                                                </dd>
                                            </div>
                                            <div className="col-start-2 row-start-1 text-center row-end-3">
                                                <img   src={url}  class=" bg-gray-100   border-white" />
                                            </div>
                                            </dl>
                                        </a>
                                        </li>   
                                        )
                                        
                            })
                            }
                    </ul>
                </div>  
            </div>
         
        </>
    );
};

 
export default GifGrid