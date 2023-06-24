import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Global from "../components/Global/Global";
import Hero from "../components/Hero/Hero";
import ENDPOINTS from "../utils/constants/endpoints";

const Home = () =>{
    const [dataGlobal,setDataGlobal] = useState([])

    useEffect(()=>{
        getDataGlobal()
    },[])

    async function getDataGlobal(){
        const response = await axios(ENDPOINTS.GLOBAL);
        const dataGlobal = (response.data.global);

        console.log(response.data.global);
        setDataGlobal(dataGlobal);
    }
    return(
        <div>
            <Hero/>
            <Global dataGlobal={dataGlobal}/>
        </div>
    )
}
export default Home;