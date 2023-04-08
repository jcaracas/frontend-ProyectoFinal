import Form from 'react-bootstrap/Form';
import Menu from './MenuPub';
import axios from "axios";
import { useState,useEffect } from "react";
import Publicacion from './Publicacion';



function FormProducts() {
    const [publicacion,setPublicacion]=useState([])
    const datosUser = localStorage.getItem("dataUser");
    const datos = JSON.parse(datosUser);
    
    const getPublicacionesData = async () => {
        const urlServer = "http://localhost:3000/usuario/publicaciones";
        const token = localStorage.getItem("token");
        try {
        const { data } = await axios.get(urlServer, {
            headers: { Authorization: "Bearer " + token }
        });
        setPublicacion(data)
        } catch ({ response: { data: message } }) {
        alert(message + " No hay data");
        console.log(message);
        }
    };

  useEffect(() => {
    getPublicacionesData();
  },[]);
    
    return(
        <div>
            <div className='divPerfil'>
                <div key="img" className='divImgPerfil'>
                    <div className='imgPerfil'></div>
                </div>
                <Form.Control key="titulo" type="text" id='tituloCabecera' placeholder={datos.nombre} className="mb-3 p-3 text-center may" disabled readOnly />
            </div>
            <div className='cabeceraComras'>
                <Menu />
            </div>

            <div className='detalleCompras'>
                {publicacion.map((item) =>
                    <li key={item.id}>
                        <Publicacion item={item} />
                    </li>
                    
                )}
            </div>
        </div>
    )
}

export default FormProducts;