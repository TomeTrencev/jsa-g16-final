import React, { useState, useEffect } from "react";
import time from '../images/icon_time.svg';
import dish from '../images/icon_plate.svg';
import star from '../images/icon_star.svg';
import image1 from '../images/food1.jpg';
import arrow from '../images/icon_arrows_white.svg';


export const Popup = ({ closePopup, card, id}) => {

    // console.log(karti)

    const [karti, setKarti] = useState([]);


    const getCards = async () => {
        try {
            let res = await fetch(`/api/v1/blog`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('jwt')}`
                }
            });
            let data = await res.json();
            setKarti(data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        getCards()
    },[]);

   {karti.map((recepta)=>{
    return(
        <h2>{recepta.title}</h2>
    )
   })}
    return (
        <div id="popup">
            <div className='popup-container'>
                <div>
               <div className="left-popup">                  
                    <h2>{card.title}</h2>
                        <button onClick={closePopup} className="close-popup">X</button>
                        <img src={image1} alt='' width='400px' />
                        <div className="small-text-popup">
                            <h4>Best Served for</h4>
                            <span>{card.category}</span>
                        </div>
                        <p>{card.paragraph}</p>
                        <div className="main-span-popup" >
                            <div className="span-popup" >

                                <span> <img src={time} alt="" width='10px' /></span>
                                <span>45 min</span>
                            </div>
                            <div className="span-popup">
                                <span><img src={dish} alt="" /></span>
                                <span>4 persons</span>
                            </div>
                            <div className="span-popup">
                                <span><img src={star} alt="" /></span>
                                <span>28</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-popup">
                    <h4>Recipes Details</h4>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.
                        <br></br>
                        <br></br>
                        Quisque blandit mattis risus, sed tincidunt ante finibus non. Nullam sit amet nunc lorem. Mauris lectus erat, accumsan quis nisl vel, feugiat rhoncus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In at euismod leo.
                        <br></br>
                        <br></br>
                        Fusce sed volutpat risus, fermentum feugiat enim. Etiam mollis ante quis nisl imperdiet, id commodo ante tincidunt.
                        <br></br>
                        <br></br>
                        Duis bibendum scelerisque risus nec consectetur. Vivamus est elit, mollis vel malesuada non, porta id mauris.
                        <br></br>
                        <br></br>
                        Quisque a vehicula lorem. Praesent in auctor quam. Etiam magna quam, sollicitudin id nunc eget, porttitor pretium tellus.
                    </p>
                </div>



            </div>
        </div>
    )

}