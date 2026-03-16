import React from "react";
import '../styles/marquee.css'
import { div } from "three/tsl";

interface MarqueeProps{
    text?: string[]
    separator?: string
    speed?: number
}

export const Marquee: React.FC<MarqueeProps> = ({
    text = ["Sys en linea", "Se busca programador", "Ponente de Autralia en el coliseo"],
    speed = 30,
    separator = " • "
}) => {
    const totalText = text.join(separator) + separator
    return (
        <div className="marquee-container"> 
            <div
                className="marquee-content"
                style={{ animationDuration: `${speed}s`}}
            >
                <span>{totalText}</span>
                <span>{totalText}</span>
            </div>
        </div>
    )
}