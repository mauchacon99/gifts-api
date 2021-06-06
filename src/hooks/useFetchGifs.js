import { useEffect, useState } from "react";
import  { getGifts }  from '../helpers/getGifts';
 

export const useFetchGifs = category => {
    const [state, setState] = useState({
        data:[],
        loading:true,
         
    })

    useEffect(async() => {
        const Gifts = await getGifts(category)
            setState({
                data:Gifts,
                loading:false,
            })
   }, [category])

  
    return state;
};
 

