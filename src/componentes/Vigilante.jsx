import {useParams} from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
let url = "http://localhost:3030/ingresar"

const Vigilante = () =>{

    const [data, setData] = useState({
        cedula: ""
    });

     const handleInput = (e) => {
        let { name, value } = e.target;
        let newDatos = { ...data, [name]: value };
        setData(newDatos);
    };

    //let params = useParams();

    const buscar = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url + "/user/login");
            console.log(res.data);
            let respuesta = res.data.nombre; 
            respuesta = useParams();
        } catch (error) {
            console.log(error);
        }

    };


    return(
        <div>
            <form onSubmit={buscar} className='form-login'>
                    <div><strong>Buscar</strong></div>
                    <div className='input'>
                        <label>Cédula</label>
                        <input name='cedula' type='number' onChange={handleInput} value={data.cedula} required />
                    </div>

                    <div>                        
                        <button type='submit'>Buscar</button>
                    </div>

            </form>
        </div>
    );
};

export default Vigilante;