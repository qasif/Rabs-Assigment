import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "./Row";


const api_key = "4ae6678572a341ef32b35567c44a7c3f";
const base_url = "https://api.themoviedb.org/3/";


const PopularMovies = () => {
    const [populartv, setPopulartv] = useState([])

    useEffect(() => {

        const fetchData = async (mode, event, setArry) => {
            const { data: { results } } = await axios.get(`${base_url}/${mode}/${event}?api_key=${api_key}`)
            setArry(results)
            // console.log(populartv)
        }
        fetchData("tv", "popular", setPopulartv);

    }, [])

    return <Row title={"Tv Shows"} arr={populartv} />
};

export default PopularMovies;
