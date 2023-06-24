/* eslint-disable jsx-a11y/heading-has-content */
import Covid from "../Covid/Covid";
import StyledGlobal from "./Global.styled";
import { useState,useEffect } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";
import DetailGlobal from "../DetailGlobal/DetailGlobal";
import { FaGlobe ,FaMap } from 'react-icons/fa';

function Global(){
    /**
     * untuk menampilkan status dan totalnya
     */
        const[global,setglobal] = useState([]);
        useEffect(()=>{
            getDataglobal();
        },[])
        async function getDataglobal(){
            const response = await axios(ENDPOINTS.GLOBAL);
            const global = response.data.global;
            setglobal(global);
        }
    /**
     * untuk menampilkan detail beberapa Region dari global
     */
        const[detailGlobal,setDetailGlobal] = useState([]);
        useEffect(()=>{
            getDataDetailGlobal();
        },[])
        async function getDataDetailGlobal(){
            const response = await axios(ENDPOINTS.GLOBAL);
            const DetailGlobalData = response.data.regions;
            setDetailGlobal(DetailGlobalData);
        }
    return(
        <StyledGlobal>
            <div>
                <section>
                    <h2>Global <FaGlobe/></h2>
                    <h4>Data Covid Berdasarkan Global</h4>
                    <div className="covid_container">
                        {
                        global.map(function (covid){
                            return <Covid covid={covid} key={covid.status}/>
                        })}
                    </div>
                </section>
            </div>
            <div>
                <section>
                    <h2>Situation by Regions <FaMap/></h2>
                    <h4>Bacaan Pilihan Covid</h4>
                    <div className="covid_container">
                        {
                        detailGlobal.map(function (covid){
                            return <DetailGlobal covid={covid} key={covid.name}/>
                        })}
                    </div>
                </section>
            </div>
        </StyledGlobal>
    )
}

export default Global;