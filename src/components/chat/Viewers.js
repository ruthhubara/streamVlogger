import React from 'react'
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './viewers.css'
import user from '../../assets/user.png'
import chevronLeft from '../../assets/chevron-left.svg'
import chevronRight from '../../assets/chevron-right.svg'

const Viewers = () => {
    let numViewers = 9846
    return (
        <div className="chatBox">
            <Card border="light" style={{ width: '17rem' }}>

                <Card.Title className="cardTitle row" style={{ color: '#D10010' }}>
                    <div className="col-4">Viewers</div>
                    <div className='col-2 num'  >3,456</div>
                    <div className='col-6 num1'>
                        <img src={chevronLeft} />
                        <span>1/1</span>
                        <img src={chevronRight} />
                    </div>


                </Card.Title>
                <div className="linear" > </div>

                <Card.Body className="row">
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>
                    <img className="col-3 img" src={user}></img>

                </Card.Body>
            </Card >
        </div>

    )
}



export default Viewers;