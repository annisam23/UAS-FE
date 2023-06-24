/* eslint-disable jsx-a11y/heading-has-content */
import { useSelector } from "react-redux";
import Provinsi from "../Provinsi/Provinsi";
import StyledProvinces from "./Province.styled";
import { FaMapMarker } from 'react-icons/fa';

const Provinces = () => {
    const tableData= useSelector((store)=> store.covid.covid);
    return(
        <StyledProvinces>
        <div>
            <section>
                <h2>Provinsi <FaMapMarker/></h2>
                <h4>Data Covid Berdasarkan Provinsi</h4>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kota</th>
                        <th>Kasus</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>    
                {
                    tableData.map((prov,index) => (
                        <Provinsi key={prov.kota} prov={prov} index={index}/>
                    )
                )
                }
                </tbody>
                </table>
            </div>
            </section>
        </div>
        </StyledProvinces>

    )
}

export default Provinces;