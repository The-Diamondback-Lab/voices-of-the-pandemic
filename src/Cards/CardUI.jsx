import React from 'react';
import img1 from '../assets/one.jpg';
import './card-styles.css'

const Card = props => {       
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={img1} alt="Image 1" className="photo" onClick={() => window.open("http://www.google.com")}/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">dogoo</h4>
                <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus sed voluptate? Maxime alias in fugit iusto rem labore eum, tempora voluptate doloribus odit recusandae, id porro distinctio provident eaque quidem molestiae repellat libero! Eligendi doloremque aliquid unde hic est non cupiditate ducimus quaerat itaque nulla inventore error, excepturi ea corrupti quis veritatis, distinctio amet nam consequuntur illo, earum quasi officia! Rem numquam voluptate dolor qui excepturi totam obcaecati minima facilis. Possimus, officia, tenetur velit consequatur deleniti corrupti molestias aperiam odit quas aspernatur eaque earum similique doloremque at magnam neque tempore pariatur dicta labore. Repellat, omnis eius. Magnam, quae atque.
                </p>
                <a href="#" className="btn btn-outline-success">go back</a>
            </div>
        </div>
    );
}

export default Card;