import React, { useState, useEffect } from 'react'
import { cardProductApi } from '../Utils/apis/Apis'
import './Cards.css'

function Cards() {
    const [cards, setCards] = useState([])
    return (
        cards &&
        <div className="main-card">
            {
                cardProductApi.map((items) => (
                    <div className="inside-card">
                            <p className="name"><b>Type : </b>{items?.Type}</p>
                            <p className="name"><b>Status : </b>{items?.Status}</p>
                            <p className="name"><b>Buyer : </b>{items?.Buyer}</p>
                            <p><b>Seller :</b>{items?.Seller}</p>
                            <p><b>Broker :</b>{items.Broker}</p>
                            <p><b>Variety :</b>{items.Variety}</p>
                            <p><b>Station : </b>{items.Station}</p>
                            <p><b>Delivery By : </b>{items.DeliveryBy}</p>
                            <p><b>Quantity : </b>{items.Quantity}</p>
                            <p><b>Quantity Unit : </b>{items.QuantityUnit}</p>
                            <p><b>Confirmation ID : </b>{items.ConfirmationID}</p>
                            <p><b>Original Price :</b> {items.OriginalPrice}</p>
                            <p><b>Price Unit : </b>{items.PriceUnit}</p>
                            <p><b>Created At : </b>{items.CreatedAt}</p>
                            <p><b>Confirmed At :</b> {items.ConfirmedAt}</p>
                            <p><b>Staple : </b>{items.Staple}</p>
                            <p><b>Trash : </b>{items.Trash}</p>
                            <p><b>Moisture : </b>{items.Moisture}</p>
                            <p><b>Mic Minimum : </b>{items.MicMinimum}</p>
                            <p><b>Mic Maximum : </b>{items.MicMaximum}</p>
                            <p><b>Remarks : </b>{items.Remarks}</p>
                            <p><b>Dhara : </b>{items.Dhara}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards
