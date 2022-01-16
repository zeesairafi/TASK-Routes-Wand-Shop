import React from "react"
import wands from "../wands";
import { useParams } from 'react-router-dom';
export default function WandDetails (){

    const wandSlug = useParams().wandSlug;
    const wand = wands.find((e)=>e.slug===wandSlug);
console.log(wand);
    return (
        <div className="single-service wow fadeInUp" data-wow-delay=".4s">
            <center>
                <div className="wandWrapper">
                    <img src={wand.imageUrl}
                    alt=""
                    style={{ height: "400px", width: "400px"}}/>
                </div>
            </center>

            <div className="content">
                <h3>{wand.core}</h3>
                <p>{wand.wood}</p>
                <p>{wand.length}</p>
            </div>
            
        </div>
    )
}



