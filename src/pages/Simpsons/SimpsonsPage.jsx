import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import {Gallery} from '../../shared/components/Gallery/Gallery'
import axios from 'axios'

function SimpsonsPage() {

    const [simpsons, setSimpsons] = useState([]);
    useEffect(() => getSimpsons, [])
    const { register, handleSubmit} = useForm();
    const DB_URL = `https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=`;

    const getSimpsons = async (searchText = "") => {
        const res = await axios.get(DB_URL + searchText);
        console.log(res.data);
       setSimpsons(res.data)
    }
    
    const submit = ({text}) => {
      console.log(text)
      getSimpsons(text)
    }

    return ( <>
     <form onSubmit={handleSubmit(submit)}>
        <label>
          <input type="text" {...register("text")} />
        </label>
        <button>buscar</button>
      </form>
       <div>
          <Gallery list={simpsons}></Gallery>
       </div>

       </>)
}

export default SimpsonsPage