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
                <img id="illust" class="img_" src={tiger} alt="illustration of tiger head." />
                <img id="illust" class="img_" src={corvis} alt="" />
                <img id="illust" class="img_" src={heavy} alt="" />
                <img id="illust" class="img_" src={hunter} alt="" />
                <img id="illust" class="img_" src={indiaman} alt="" />
                <img id="illust" class="img_" src={self} alt="" />
                <img id="illust" class="img_" src={spartan} alt="" />
                <img id="illust" class="img_" src={roman} alt="" />
                <img id="illust" class="img_" src={ari} alt="" />
                <img id="illust" class="img_" src={axeman} alt="" />
                <img id="illust" class="img_" src={doom} alt="" />
                <img id="illust" class="img_" src={kale} alt="" />
                <img id="illust" class="img_" src={murin} alt="" />
                <img id="illust" class="img_" src={rage} alt="" />
                <img id="illust" class="img_" src={tako} alt="" />
            </div>
        </div>
    )
}

export default Collage;