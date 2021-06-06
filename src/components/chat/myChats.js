
import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './chat.css'
// import Image from 'react-bootstrap/Image'
import profil from '../../assets/user.png'
import ListGroup from 'react-bootstrap/ListGroup'
// import memberName from ''
// זה יצטרך לבוא מהרידקס
let members = ['first', 'second', 'third']

const myChats = () => {

    return (
        <div className="chatBox">
            <Card border="light" style={{ width: '19rem', minheight: '19rem' }}>

                <Card.Title style={{ color: '#D10010' }}> My Chats
                </Card.Title>
                <div className="linear" > </div>
                <Card.Body>
                    {members.map((member) => (
                        <div>
                            <ListGroup>
                                <ListGroup.Item
                                    key={member}
                                >
                                    {member}
                                    <img src={profil} style={{ float: "left" }}></img>
                                </ListGroup.Item>

                            </ListGroup>

                        </div>

                    ))}
                </Card.Body>
            </Card >
        </div>

    )
}

export default myChats;