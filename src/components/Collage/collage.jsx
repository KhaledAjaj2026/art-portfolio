import React from "react";
import './collage.css';
import tiger from '../../assets/artworks/tiger.png';
import corvis from '../../assets/artworks/Corvis.png';
import heavy from '../../assets/artworks/Heavy.png';
import hunter from '../../assets/artworks/Hunter.png';
import indiaman from '../../assets/artworks/Indiaman.jpg';
import self from '../../assets/artworks/SelfPortrait.png';
import spartan from '../../assets/artworks/Spartan.png';
import roman from '../../assets/artworks/theRoman.png';
import ari from '../../assets/artworks/ari-run.png';
import axeman from '../../assets/artworks/axeman.png';
import doom from '../../assets/artworks/doom.png';
import kale from '../../assets/artworks/keiruPP.png';
import murin from '../../assets/artworks/murin.png';
import rage from '../../assets/artworks/raging.png';
import tako from '../../assets/artworks/takodachi.png';

function Collage() {
    return (
        <div id="collage">
            <div className="images">
                <img class="img_" id="tiger" src={tiger} alt="illustration of tiger head." />
                <img class="img_" id="corvis" src={corvis} alt="" />
                <img class="img_" id="heavy" src={heavy} alt="" />
                <img class="img_" id="hunter" src={hunter} alt="" />
                <img class="img_" id="indiaman" src={indiaman} alt="" />
                <img class="img_" id="self" src={self} alt="" />
                <img class="img_" id="spartan" src={spartan} alt="" />
                <img class="img_" id="roman" src={roman} alt="" />
                <img class="img_" id="ari" src={ari} alt="" />
                <img class="img_" id="axeman" src={axeman} alt="" />
                <img class="img_" id="doom" src={doom} alt="" />
                <img class="img_" id="kale" src={kale} alt="" />
                <img class="img_" id="murin" src={murin} alt="" />
                <img class="img_" id="rage" src={rage} alt="" />
                <img class="img_" id="tako" src={tako} alt="" />
            </div>
        </div>
    )
}

export default Collage;