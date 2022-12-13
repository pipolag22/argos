import React from 'react';
import img from '../../images/argos-logo-claro.png';
import './nosotros.css'

const Nosotros = () => {
    return (
    <div className="bg-transparent">
        <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
                <h1 className="display-4">Qué es argos</h1>
                <p className="lead  mb-0">­­­­­Somos una nueva plataforma digital que plantea un nuevo acceso
                a la filosofía y a la literatura de la manera más antigua: contando historias.</p>
                <p className="lead">Mostramos que hay obras que valen por sí mismas. Su valor no está en las
                explicaciones morales o útiles que podamos darles, sino que por el contrario tienen mucho para decir desde su 
                ser "obras clásicas".
                </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block"><img src={img} alt="argos-logo" className="img-fluid"/></div>
            </div>
        </div>
    </div>
    )
}

export default Nosotros;
