import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../../assets/img-footer/facebook.png";
import instagram from "../../assets/img-footer/instagram.png";
import twitter from "../../assets/img-footer/twitter.png";

function Footer() {
    return (
        <footer className="text-black py-8 border-t-4 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-evenly w-full mb-6">
                        <Link to="https://twitter.com">
                            <img className="w-20 h-20" src={twitter} alt="Twitter Logo" />
                        </Link>
                        <Link to="https://www.instagram.com">
                            <img className="w-20 h-20" src={instagram} alt="Instagram Logo" />
                        </Link>
                        <Link to="https://www.facebook.com">
                            <img className="w-20 h-20" src={facebook} alt="Facebook Logo" />
                        </Link>
                    </div>
                    <p className="text-center text-sm">
                        © {new Date().getFullYear()} DTS, VINILART Compra venta. Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;