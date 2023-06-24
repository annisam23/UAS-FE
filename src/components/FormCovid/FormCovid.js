/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { updateCovid } from "../../features/covidSlice";
import StyledForm from "./Form.styled";
import { FaUser } from 'react-icons/fa';

function FormCovid(props) {
    const {tableData} = props;
    const dispatch = useDispatch();

    const[kota,setKota] = useState("");
    const[status,setStatus] = useState("")
    const[number,setNumber] = useState("")

    const [isKotaError,setIsKotaError]= useState(false);
    const [isStatusError,setIsStatusError]= useState(false);
    const [isNumberError,setIsNumberError]= useState(false);

    function handleKota(e){
        setKota(e.target.value);
    }

    function handleStatus(e){
        setStatus(e.target.value);
    }

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(kota === ""){
            setIsKotaError(true);
            return;
        }else if(status === ""){
            setIsStatusError(true);
            return;
        }else if(number === ""){
            setIsNumberError(true);
            return;
        }else{
            const dataProvinsi = {
                kota:kota,
                status:status,
                jumlah:number,
            }

            dispatch(updateCovid(dataProvinsi))
        }
            setIsKotaError(false);
            setIsStatusError(false);
            setIsNumberError(false);

            setKota("");
            setStatus("");
            setNumber("");
        };
    return (
        <StyledForm>
        <div>
            <section>
                <div className="form_left">
                    <img
                        src="https://img.freepik.com/free-vector/woman-checking-giant-check-list_23-2148099800.jpg?w=826&t=st=1680236066~exp=1680236666~hmac=36f0dff2b97daa69223445be16789559b1dd82a24c8a7ec574750dd2c74494d6" />
                </div>
                <div className="form_right">
                    <h2>Form Covid <FaUser/></h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form_group">
                            <label>Provinsi</label>
                            <select
                            id="kota"
                            value={kota}
                            onChange={handleKota}
                            >
                                <option value="">Pilih Kota</option>
                                {
                                    tableData.map(data => (
                                        <option  key={data.no} value={data.kota}>{data.kota}</option>
                                    ))
                                }
                            </select>
                            {
                                isKotaError && <Alert>Kota wajib diisi</Alert>
                            }
                        </div>
                        <div className="form_group">
                            <label>Status</label>
                            <select
                            onChange={handleStatus}
                            id="status" 
                            name="status"
                            value={status}
                            >
                                <option value="">Pilih Status</option>
                                <option value="kasus">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="meninggal">Meninggal</option>
                                <option value="dirawat">Dirawat</option>
                            </select>
                            {
                                isStatusError && <Alert>Status wajib diisi</Alert>
                            }
                        </div>
                        <div className="form_group">
                            <label>Jumlah</label>
                            <input 
                            onChange={handleNumber}
                            type="number" 
                            id="number" 
                            value={number} 
                            placholder="0"/>
                        {
                                isNumberError && <Alert>Jumlah wajib diisi</Alert>
                            }
                        </div>
                        <Button full>Submit</Button>
                    </form>
                </div>
            </section>
        </div>
        </StyledForm>

    );
}

export default FormCovid;