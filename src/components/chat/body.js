import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css'
import Viewers from "./Viewers";
import MyChats from "./myChats";
import img from '../../assets/img.png'
const body = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-9">
                    <img style={{ width: '100%', height: '' }} src={img}></img>
                </div>
                <div className="col-3 chat">
                    <MyChats className="myChat" >

                        <img src={img}></img>
                    </MyChats>

                    <Viewers  ></Viewers>

                </div>
            </div>
        </div>
    )
}

export default body;
