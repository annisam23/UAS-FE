import Hero from "../components/Hero/Hero";
import IndonesiaTable from "../components/IndonesiaTable";
import { useEffect,useState } from "react";
import ENDPOINTS from "../utils/constants/endpoints";
import axios from "axios";

const Indonesia = () =>{
    const [dataIndonesia,setDataIndonesia] = useState([])

    useEffect(()=>{
        getDataIndonesia()
    },[])

    async function getDataIndonesia(){
        const response = await axios(ENDPOINTS.INDONESIA);
        const dataGlobal = (response.data.indonesia);

        console.log(response.data.indonesia);
        setDataIndonesia(dataGlobal);
    }
    return(
        <div>
            <Hero/>
            <IndonesiaTable/>
        </div>
    )
}
export default Indonesia;