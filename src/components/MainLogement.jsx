//-----MainLogement----//
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { useState } from 'react';
import Data from "./data"

//----Import FontAwesomeIcon from React---//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-regular-svg-icons'
import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export function MainLogement() {

    //----useParams----//
    const params = useParams();

    //---- Pour pouvoir maper les images de (props.item.pictures)----//
    const [current, setCurrent] = useState(0)

    //---useState pour controller l'affichage des paragraphes, les chevron---//
    const [showParagraphe, setShowParagraphe] = useState(false)
    const [showEquipements, setShowEquipements] = useState(false)
    
    const affiche = Data.find(elem => elem.id === params.id);
    if(affiche) {

        //----Function nextSlide permet de changer l'image vers la droit---//
        const nextSlide = () => {
             
            setCurrent(current === length - 1 ? 0 : current + 1)
        }

        //----Function prevuSlide permet de changer l'image vers la gauche---//
        const prevuSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1)
        }
        
        //---Maper tags----//
        let slidePictures = affiche.pictures;
        const length = slidePictures.length //---Langueur de l'Array des images
        const tags = affiche.tags;
        const tag = tags.map(item => {
            return (
                <span key={item} className='tag'>{item}</span>
            )
        })

        //---- Maper éqipments ----/
        const equipments= affiche.equipments
        const equipment = equipments.map(item => {
            return (
                <span key={item} className='DescriptionParagraphe'>{item}</span>
            )
        })

        const rating = affiche.rating
        //-----Styles for stars----/
        const styleStars = {
            size:"2xl",
            backgroundColor: "FF6060", 
            color: "FF6060",
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
        }
        const noStyleStars = {
            size:"lg",
            color:"#A9A9A9"
        }
        
        return (
                <>
                    <div id="slider">
                        {length > 1 ? <FontAwesomeIcon icon={faChevronLeft} className='left-arrow' onClick={prevuSlide} /> : ''}
                        {length > 1 ? <FontAwesomeIcon icon={faChevronRight} className='right-arrow' onClick={nextSlide} /> : ''}
                        {length > 1 ? <div className='compteur-galerie'> {current + 1}/{length}</div> : ''}
                        {slidePictures.map((item, index) => {

                            return (
                                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                    {index === current && <img className='loge--image' src={item} alt="les images de logement" />}
                                </div>
                            )
                        })}
                    </div>
                    <div className='informations'>
                        <div className='infos'>
                            <div className='titre'>
                                <h2>{affiche.title}</h2>
                                <p>{affiche.location}</p>
                                <div className='tags'>
                                    {tag}
                                </div>
                            </div>
                            <div className='host'>
                                <div className='host--stars'>
                                    {rating >= 1 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars} /></span>}
                                    {rating >= 2 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars} /></span>}
                                    {rating >= 3 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars} /></span>}
                                    {rating >= 4 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars} /></span>}
                                    {rating === 5 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars}/></span>}
                                </div>
                                <div className='host--name'>
                                    <h6>{affiche.host.name}</h6>
                                    <img src={affiche.host.picture} alt="Hot" />
                                </div>
                            </div>
                        </div>
                        <div className='description--equipments'>
                            <div className='desc'>
                                <div className="description" onClick={() => setShowParagraphe(!showParagraphe)}>
                                    <div onClick={() => setShowParagraphe(!showParagraphe)}>
                                        <div className='chevron'>
                                            <p>Description</p> {showParagraphe && <FontAwesomeIcon icon={faChevronDown} />}
                                            {!showParagraphe && <FontAwesomeIcon icon={faChevronUp} />}
                                        </div>
                                        {showParagraphe && <p className='DescriptionParagraphe'>{affiche.description}</p>}
                                    </div>   
                                </div>
                            </div>
                            
                            <div className='equi'>
                                <div className='equipments' onClick={() => setShowEquipements(!showEquipements)} >
                                    <div onClick={() => setShowEquipements(!showEquipements)}>
                                        <div className="chevronEquipement">
                                            <p>Equipements</p> {showEquipements && <FontAwesomeIcon icon={faChevronDown} />}
                                            {!showEquipements && <FontAwesomeIcon icon={faChevronUp} />}
                                        </div>
                                        {showEquipements && <div className='equipe'>{equipment}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
    }
    else {
        return <Navigate to="Not Found 404"/>   
    }
}