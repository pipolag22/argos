import React from 'react'
import img from "../../images/Justicia.png";

// código para publicaciones, solo se cambian las imagenes y el texto 
export const Publi1 = () => {
    return (
            <div className="mt-0 pt-4">
                <div className="container dark-grey-text mt-5">
                    <div className="row wow fadeIn">
                        <div className="col-md-6 mb-4">
                            <img src={img}  alt="justicia-img"  className="img-fluid"></img>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="p-4">
                                <h1 className="lead font-weight-bold titulo fs-1">Antígona: Parte 1</h1>
                                <p className='lh-lg'>Un hermano se reveló contra su ciudad natal: Tebas. Su otro hermano lo esperaba en la defensa, del otro lado. Al llegar ambos al momento del encuentro en el combate, se matan el uno al otro en feroz contienda. ⚔️
Ambos cuerpos quedan sin vida. Un hermano traidor Polinices, y el hermano defensor Eteocles, tirados el uno junto al otro. Como correspondía con los ritos fúnebres y para que ambos hermanos tuvieran un buen paso por el Hades, su hermana Antígona decidió darles la sepultura a los dos, porque así era el mandato de los dioses.<br></br>La tragedia comienza cuando Creonte, gobernante de Tebas luego de la guerra, prohibe dar sepultura a Polinices por traidor ¿Qué hace Antígona? ¿Dejar a su hermano sin entierro, y por lo tanto, degradado? ¿Enfrentarse a Creonte y arriesgarse a perder su vida?¿Qué harías vos?</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
