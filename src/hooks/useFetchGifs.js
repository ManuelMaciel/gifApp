import { useState, useEffect } from "react";
import { getGif } from "../helpers/GetGif";

const useFetchGifs = ( category ) => {

  

  const [state, setState] = useState({
    data: [],
    loading: true
  })
  
  useEffect(() => {
    if(!category) return;
    getGif(category)
      .then( imgs => {

        setState({
          data: imgs,
          loading: false
        });
        
      })
  }, [category])

  return state;
}
 
export default useFetchGifs;