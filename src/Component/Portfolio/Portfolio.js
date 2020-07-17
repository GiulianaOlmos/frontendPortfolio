import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css'

function Portfolio(){
    const [projects, setProjects] = useState({});
    useEffect(() => {
        axios.get('https://backend-portfolio-giuli.herokuapp.com/Portfolio')
        .then(
            res => setProjects(res.data)
        )}, [setProjects])

    return(
        <>
            <div className="mega-card-portfolio">
                { projects.length > 0 && projects.map((project, index) => 
                    <div className="individual-card">
                        <h1>{project.name}</h1>
                        <img className="imagen-proyecto" alt="imagen-proyecto" src={project.image}></img>
                        <p>{project.descripcion}</p>
                        <a className="boton-visitar" href={project.link}>Visitar Proyecto</a>
                    </div>
                )}
            </div>
        </>
    )
};

export default Portfolio;