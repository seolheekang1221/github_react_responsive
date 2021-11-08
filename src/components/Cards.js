import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
         <h1>Check out these EPIC Destination!</h1>
         <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src = {require('../images/img01.jpg').default}
                        text='explore the hidden'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem
                        src= {require('../images/img02.jpg').default}
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src = {require('../images/img03.jpg').default}
                        text='explore the hidden'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem
                        src= {require('../images/img04.jpg').default}
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem
                        src= {require('../images/img05.jpg').default}
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src = {require('../images/img06.jpg').default}
                        text='explore the hidden'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem
                        src= {require('../images/img07.jpg').default}
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src = {require('../images/img08.jpg').default}
                        text='explore the hidden'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem
                        src= {require('../images/img09.jpg').default}
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                    />
                </ul>
            </div>
         </div>   
        </div>
    )
}

export default Cards
