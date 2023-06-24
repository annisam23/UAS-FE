import {useState,useEffect} from 'react';
import axios from 'axios';
import StyledIndonesia from './IndonesiaTable.styled';
import ENDPOINTS from '../../utils/constants/endpoints';
import DetailIndonesia from '../DetailIndonesia';
import { FaFlag ,FaMapMarkerAlt } from 'react-icons/fa';

const IndonesiaTable = () =>{
    /**
     * untuk menampilkan Regions indonesia dan ditampilkan dalam tabels
     */
    const[regions,setRegions] = useState([]);
    useEffect(()=>{
        getDataRegions();
    },[])
    async function getDataRegions(){
        const response = await axios(ENDPOINTS.INDONESIA);
        const regionsData = response.data.regions;
        setRegions(regionsData);
    }

    /**
     * untuk menampilkan status dan totalnya dan ditampilkan di card
     */
    const[regionsDetail,setRegionsDetail] = useState([]);
    useEffect(()=>{
        getDataRegionsDetail();
    },[])
    async function getDataRegionsDetail(){
        const response = await axios(ENDPOINTS.INDONESIA);
        const regionsDetail = response.data.indonesia;
        setRegionsDetail(regionsDetail);
    }

    return(
        <StyledIndonesia>
            <div>
                <section>
                    <h2>Indonesia Situation <FaFlag/></h2>
                    <h4>Data Covid Berdasarkan Indonesia</h4>
                    <div className="covid_container">
                        {
                        regionsDetail.map(function (covid){
                            return <DetailIndonesia covid={covid} key={covid.status}/>
                        })}
                    </div>
                </section>
            </div>
            <div>
                <h2>Situation by Provinces <FaMapMarkerAlt/></h2>
                <h4>Data Covid Berdasarkan Provinsi</h4>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Region</th>
                            <th>Terkonfirmasi</th>
                            <th>Sembuh</th>
                            <th>Dirawat</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {regions.map((region,index)=>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{region.name}</td>
                            <td>{region.numbers.confirmed}</td>
                            <td>{region.numbers.recovered}</td>
                            <td>{region.numbers.treatment}</td>
                            <td>{region.numbers.death}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </StyledIndonesia>
    )
}
export default IndonesiaTable;