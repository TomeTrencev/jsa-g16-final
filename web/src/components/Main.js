import React, { useState, useEffect } from "react";
import { Popup } from "./Popup";
import time from '../images/icon_time.svg';
import dish from '../images/icon_plate.svg';
import star from '../images/icon_star.svg';
import image1 from '../images/food1.jpg';
import arrow from '../images/icon_arrows_white.svg'

export const Main = () => {

    const [karti, setKarti] = useState([]);

    const getCards = async () => {
        try {
            let res = await fetch('/api/v1/blog', {
                method: 'GET',
                headers: {
                    
                    'authorization': `bearer ${localStorage.getItem('jwt')}`
                }
            });
            let data = await res.json();
            setKarti(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCards()

    }, []);

    const [popup, setPopup] = useState(false);

    const handleClickOpen = (_id) => {
        console.log(_id)
        setPopup(!popup);
    }

    const closePopup = () => {
        setPopup(false);
    }

    return (
        <div id="main">
            <div className="big-header">
                <div>
                    <h2 className="main-title">Fresh and New</h2>
                </div>
                <div><hr></hr></div>
            </div>
            <div id="main-div">
                {karti.slice(-3).map((card) => {
                    return (
                        <div key={card._id} className="cards"  >
                            {popup && <Popup card={card} id={card._id}  closePopup={closePopup}/>}
                            <div className="div-image" onClick={()=> handleClickOpen(card._id)}>
                                {console.log(card._id)}
                                <img src={image1} alt="" className="card-img" width="350px" />
                                <p>
                                    {card.category}
                                </p>
                            </div>
                            <div className="text-div-main">
                                <h2>{card.title}</h2>
                                <p>{card.paragraph}</p>
                            </div>
                            <div className="main-span">
                                <div className="span">
                                    <span> <img src={time} alt="" /></span>
                                    <span>{card.min} min</span>
                                </div>
                                <div className="span">
                                    <span><img src={dish} alt="" /></span>
                                    <span>{card.persons} persons</span>
                                </div>
                                <div className="span">
                                    <span><img src={star} alt="" /></span>
                                    <span>{card.num}</span>
                                </div>
                                <button><img src={arrow} alt='' /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="big-header">
                <div>
                    <h2 className="main-title">Most Popular recipes</h2>
                </div>
                <div><hr></hr></div>
            </div>
        </div>

    )
}