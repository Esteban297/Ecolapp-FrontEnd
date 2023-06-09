import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import logo from './img/img.png';



const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <img src={logo} alt="Logo de la empresa" style={{ width: '10%', height: '50%' }} />
                <Link to="/home" className="home-link">Home</Link>
                <Link to="/points" className="profile-link">Points</Link>
                <Link to="/help" className="help-link">Help</Link>
                <Link to="/profile" className="profile-link">Profile</Link>
            </div>
            <div className="welcome-message">
                <h1>Bienvenidos a Ecolapp</h1>
                <h4>Tienes un total de: 40 ecopuntos</h4>
                <h5>¿Desea solicitar una recolección?</h5>
                <Link to="/search">
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#006400', color: '#fff' }}>Buscar recolector</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
