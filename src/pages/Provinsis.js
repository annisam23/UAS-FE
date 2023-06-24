import Hero from "../components/Hero/Hero";
import FromCovid from "../components/FormCovid/FormCovid";
import Provinces from "../components/Provinces/Provinces";
import { useState } from "react";
import data from "../utils/constants/provinces";

const Provinsis = () =>{
    const [tableData, setTableData] = useState(data.provinces);
    return(
        <div>
            <Hero/>
            <Provinces tableData={tableData} setTableData={setTableData}/>
            <FromCovid tableData={tableData} setTableData={setTableData}/>
        </div>
    )
}
export default Provinsis;