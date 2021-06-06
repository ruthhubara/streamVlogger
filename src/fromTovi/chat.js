// import React, { useRef, useState } from 'react'
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { useEffect, Text } from 'react';
// import $ from 'jquery';
// import Avatar from '@material-ui/core/Avatar';
// import './chat.css';
// import { format } from "date-fns";
// import moment from 'moment';
// import { Form, InputGroup, FormControl, Col } from 'react-bootstrap'
// // import './conversation.css'
// import { actions } from '../../redux/actions';
// import * as socketService from '../../services/socket.service'
// import isYesterday from 'date-fns/esm/isYesterday/index';
// const mapStateToProps = (state) => {
//   return {
//     roomId: state.conversationReducer.roomId,
//     streamConstraints: state.socketReducer.streamConstraints,
//     socket: state.socketReducer.socket,
//     localVideo: state.socketReducer.localVideo,
//     remoteVideo: state.socketReducer.remoteVideo,
//     remoteStream: state.socketReducer.remoteStream,
//     showContactsModal: state.contactsReducer.showContactsModal,
//     showPeoplesComponent: state.conversationReducer.showPeoplesComponent,
//     peers: state.socketReducer.peers,
//     remoteStreamArr: state.socketReducer.remoteStreamArr,
//     remoteVideoArr: state.socketReducer.remoteVideoArr,
//     participants: state.conversationReducer.participants,
//     waves: state.conversationReducer.waves,
//     currentUser: state.generalReducer.currentUser,
//     fakeUser: state.generalReducer.fakeUser

//     // timestamp: state.wavesReducer.timestamp

//     //       numOfParticipants:state.
//   };
// }

// const mapDispatchToProps = (dispatch) => ({
//   setRoomId: (roomId) => dispatch(actions.setRoomId(roomId)),
//   setStreamConstraints: (streamConstraints) => dispatch(actions.setStreamConstraints(streamConstraints)),
//   // setSocket: (socket) => dispatch(actions.setSocket(socket)),
//   setLocalVideo: (localVideo) => dispatch(actions.setLocalVideo(localVideo)),
//   setRemoteVideo: (remoteVideo) => dispatch(actions.setRemoteVideo(remoteVideo)),
//   dispatch: dispatch,
//   setShowContactsModal: (showContactsModal) => dispatch(actions.setShowContactsModal(showContactsModal)),
//   setShowPeoplesComponent: (showPeoplesComponent) => dispatch(actions.setShowPeoplesComponent(showPeoplesComponent)),
//   setNumOfParticipants: (numOfParticipants) => dispatch(actions.setNumOfParticipants(numOfParticipants)),
//   setParticipants: (participants) => dispatch(actions.setParticipants(participants)),
//   setAddWaves: (waves) => dispatch(actions.setAddWaves(waves)),
//   setWaves: (waves) => dispatch(actions.setWaves(waves)),
//   // getAllMessages: (roomId) => dispatch(actions.getAllMessages(roomId)),
//   addNewWave: (wave) => dispatch(actions.addNewWave(wave)),

//   //getParticipants
// });

// function ConversationActions(props) {

//   const {
//     roomId,currentUser,waves,
//     addNewWave,fakeUser,setAddWaves,setWaves
//   } = props;
//   const { socket } = props;
//   const inputSendMessage=useRef();
//   const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
//   // const [is3Points, Setis3Points] = useState(false)

//   useEffect(() => {
//     if (window.location.href.includes('connection')) {
//       socket.emit('getAllMessages', roomId)
//       console.log("get all messages from use effect")
//       // socket.on('gotAllMessages', (conversation)=> suceessFunction(conversation));
//     }
//     socket.on('gotAllMessages', (allMessages) => suceessFunction(allMessages));
//     socket.on('waveAdded', (data) => suceessFunc(data));
//     socket.on('otherUserWroteMessage', getNewMessageFromOtherUser);
//     // socket.on('gotAllMessages', (allMessages) => suceessFunction(allMessages));
//     // socket.on('waveAdded', (data) => suceessFunc(data));
//     // // socket.on('aaa', (data)=> suceessFunc(data));
//     // socket.on('otherUserWroteMessage', getNewMessageFromOtherUser);
//   }, []);

//   const getNewMessageFromOtherUser = () => {
//     socket.emit('getAllMessages', roomId)
//   }

//   // socket.on('otherUserWroteMessage', getNewMessageFromOtherUser);
//   // useEffect(()=>{
//   //   socket.emit('getAllMessages', roomId)
//   //   console.log("get all messages from use effect of waves----------")
//   // socket.on('bbb', (conversation)=> suceessFunction(conversation));

//   // }, [waves]);

//   const [is3Points, Set3Points] = useState(false)

//   // const handleNewMessageChange = (event) => {
//   //   setNewMessage(event.target.value);
//   //   socket.emit('add3points', roomId);
//   //   socket.on('put3points', (roomId) => addPoints())
//   // };
//   const handleSendMessage = () => {
//     debugger
//     alert(inputSendMessage.current.value)
//     console.log('fakeUser.userName ? fakeUser.userName :', fakeUser);
//     let wave = {
//       bodyWave: newMessage,
//       dateWave: moment(new Date()).format('h:mm') + "",
//       // fromWave: currentUser.picture,
//       // userName: fakeUser.userName ? fakeUser.userName :fakeUser.email
//       // userId: fakeUser._Id
//     }
//     console.log('bodyyyyyyy', wave.bodyWave)

//     setNewMessage(inputSendMessage.current.value);
//     socket.emit('add3points', roomId);
//     socket.on('put3points', (roomId) => addPoints())
//     // setAddWaves(wave)
//     // setNewMessage(wave);
//     let data = { roomId: roomId, wave: wave };
//     socket.emit('addNewWave', data);
//     // socket.on('waveAdded', (data)=> suceessFunc(data));
//     // socket.broadcast.emit('add3points',data);
//     // socket.on('finish3point',(data)=> addPoints())
//     //   fromWave: currentUser.picture,
//     //   userId: currentUser._id,
//     //   userName: currentUser.name,
//     // }
//     // // setAddWaves(wave)
//     // // setNewMessage(wave);
//     // console.log("currentUser_id", currentUser);
//     // console.log("waves", waves)
//     // let data = { roomId: roomId, wave: wave };
//     // if (checklastwave(wave)) {
//     //   let data1 = { datar: data, lastwave: waves[waves.length - 1] }
//     //   socket.emit('updatelastwave', data1)
//     // }
//     // else
//     // socket.emit('addNewWave', data)   
//     socket.on('updateready', (data) => setWaves(data));
//     socket.emit('stop3points', roomId)
//     socket.on('finish3points', (roomId) => stop3points());
//     // getoneMessages()
//     // addNewWave(wave);
//   };

//   const suceessFunc = (data) => {
//     console.log(data);
//     setAddWaves(data);
//     socket.emit('getAllMessages', roomId)
//   }
//   const suceessFunction = (allMessages) => {
//     if (allMessages.waves) {
//       setWaves(allMessages.waves)
//     }
//   }

//   //   const addPoints = () => {
//   //     Setis3Points(true)
//   //     console.log(is3Points)

//   //   console.log(data);
//   //   setAddWaves(data);
//   // }
//   const addPoints = () => {
//     debugger;
//     Set3Points(true)
//     console.log("is3Points", is3Points)
//   }
//   const stop3points = () => {
//     Set3Points(false)
//     console.log(is3Points)
//   }

//   // const checklastwave = (waves) => {
//   //   var startDate = new Date(waves[waves.length - 1].dateWave);
//   //   var endDate = new Date(waves.dateWave);
//   //   var starthour = parseInt(startDate.getHours());
//   //   var endhour = parseInt(endDate.getHours());
//   //   if (waves)
//   //     console.log("lastUser", waves[waves.length - 1].userId)
//   //   if (currentUser._Id == waves[waves.length - 1].userId && starthour - endhour < 5)
//   //     return true;
//   // }

//   return (
//     <>
//       <div className="container">
//         <div className="chat chat-room-container">
//           <div className="messages-container">
//             {(waves.length > 0 && waves !== null) ?
//               <ul className="messages-list">
//                 {waves.map((wave, i) => (
//                   <li
//                     key={i}
//                     className="dd"
//                   // className={`message-item ${wave.currentUser ? "my-message" : "received-message"
//                   //   }`}
//                   >
//                     <div className="message other-message float-right" >
//                       {wave && wave.bodyWave ?
//                         wave.bodyWave
//                         : ""}  </div>

//                     {wave && wave.fromWave ?
//                       <Avatar id="avatar" data-toggle="tooltip" data-placement="bottom" title={currentUser.email} alt="..." src={currentUser.picture} />
//                       : ""}
//                     <div id="dateWave">
//                       {wave && wave.dateWave ?
//                         wave.dateWave
//                         : ""}
//                     </div>
//                     <div id="userName">
//                       {wave && wave.userName ?
//                         wave.userName
//                         : ""}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//               :
//               ""}
//           </div>

//           <Col xs="auto" className="fixed-bottom coll">
//             <div className={`s-${is3Points ? 'is-shown' : 'is-hidden'}`}>. . .</div>
//             <Form.Label htmlFor="inlineFormInputGroup" srOnly>
//               Write message...
//           </Form.Label>

//             <InputGroup className="mb-2" className="ddd mt-auto p-2 bd-highlight inputmessage" type="text" className="form-control input-sm chat_input bg-color:green"
//               onKeyPress={e => {
//                 if (e.key === "Enter") handleSendMessage(e.target.value)
//               }}
//               // value={newMessage}
//               // onChange={handleNewMessageChange}
//               placeholder="Write message..."
//               innerRef={inputSendMessage}
//               className="new-message-input-field">
//               <FormControl id="inlineFormInputGroup" placeholder="Type a message..." />
//               {/* <InputGroup.Prepend> */}
//               <InputGroup.Text className="sendicon">
//                 <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30.244" height="30.244" viewBox="0 0 40.244 40.244"
//                   onClick={handleSendMessage}><defs><style dangerouslySetInnerHTML={{ __html: ".a{fill:url(#a);}.b{fill:#fff;}" }} /><linearGradient id="a" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox"><stop offset={0} stopColor="#fcf816" /><stop offset={1} stopColor="#96fe14" /></linearGradient></defs><circle className="a" cx="20.122" cy="20.122" r="20.122" /><path className="b" d="M538.722,426.741a1.252,1.252,0,0,1,.9.033,1.225,1.225,0,0,1,.61.57,1.2,1.2,0,0,1,.091.84q-1.18,5.857-2.358,11.714a4.163,4.163,0,0,1-.122.524,1.222,1.222,0,0,1-.645.689,1.255,1.255,0,0,1-.94.034,2.814,2.814,0,0,1-.478-.268L534,439.771a.749.749,0,0,0-.871.059l-1.787,1.484a.464.464,0,0,1-.425.1.448.448,0,0,1-.295-.326,1.3,1.3,0,0,1-.018-.328c0-1.178,0-2.357,0-3.535a.719.719,0,0,1,.2-.5q3.041-3.145,6.082-6.291a3.221,3.221,0,0,0,.33-.4.354.354,0,0,0,.067-.15c0-.043-.056-.03-.084-.021a1.6,1.6,0,0,0-.347.208c-.2.151-.4.308-.6.462l-7.183,5.6a.749.749,0,0,1-.853.045l-1.981-1.231a1.23,1.23,0,0,1-.528-.562,1.193,1.193,0,0,1-.022-.946,1.244,1.244,0,0,1,.73-.694l12.039-5.886A2.233,2.233,0,0,1,538.722,426.741Z" transform="translate(-512.855 -413.93)" /></svg>

//               </InputGroup.Text>
//               {/* </InputGroup.Prepend> */}
//             </InputGroup>
//           </Col>

//         </div>
//       </div>

//       {/* </div> */}

//     </>
//   );
// }
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ConversationActions));



import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useEffect, Text } from 'react';
import $ from 'jquery';
import Avatar from '@material-ui/core/Avatar';
// import { format } from "date-fns";
// import moment from 'moment';
import { Form, InputGroup, FormControl, Col } from 'react-bootstrap'
// import './conversation.css'
import { actions } from '../../redux/actions';
import * as socketService from '../../services/socket.service'
// import isYesterday from 'date-fns/esm/isYesterday/index';
import blackWhite from '../../assets/blackwhite.jpg'
import whiteBlack from '../../assets/whiteBlack.jpg'

import './chat.css'
import { AiOutlineClose } from "react-icons/ai";

const mapStateToProps = (state) => {
  return {
    roomId: state.conversationReducer.roomId,
    streamConstraints: state.socketReducer.streamConstraints,
    socket: state.socketReducer.socket,
    localVideo: state.socketReducer.localVideo,
    remoteVideo: state.socketReducer.remoteVideo,
    remoteStream: state.socketReducer.remoteStream,
    showContactsModal: state.contactsReducer.showContactsModal,
    showPeoplesComponent: state.conversationReducer.showPeoplesComponent,
    peers: state.socketReducer.peers,
    remoteStreamArr: state.socketReducer.remoteStreamArr,
    remoteVideoArr: state.socketReducer.remoteVideoArr,
    participants: state.conversationReducer.participants,
    waves: state.conversationReducer.waves,
    currentUser: state.generalReducer.currentUser,
    fakeUser: state.generalReducer.fakeUser
  };
}

const mapDispatchToProps = (dispatch) => ({
  setRoomId: (roomId) => dispatch(actions.setRoomId(roomId)),
  setStreamConstraints: (streamConstraints) => dispatch(actions.setStreamConstraints(streamConstraints)),
  setLocalVideo: (localVideo) => dispatch(actions.setLocalVideo(localVideo)),
  setRemoteVideo: (remoteVideo) => dispatch(actions.setRemoteVideo(remoteVideo)),
  dispatch: dispatch,
  setShowContactsModal: (showContactsModal) => dispatch(actions.setShowContactsModal(showContactsModal)),
  setShowPeoplesComponent: (showPeoplesComponent) => dispatch(actions.setShowPeoplesComponent(showPeoplesComponent)),
  setNumOfParticipants: (numOfParticipants) => dispatch(actions.setNumOfParticipants(numOfParticipants)),
  setParticipants: (participants) => dispatch(actions.setParticipants(participants)),
  setAddWaves: (waves) => dispatch(actions.setAddWaves(waves)),
  setWaves: (waves) => dispatch(actions.setWaves(waves)),
  addNewWave: (wave) => dispatch(actions.addNewWave(wave)),
});

function ConversationActions(props) {

  const { socket, chatColor, roomId, currentUser, waves, fakeUser } = props;
  const { setChatColor, showChat, setShowChat, setVisibleChat, setAddWaves, setWaves } = props;

  const [newMessage, setNewMessage] = React.useState("");
  const [is3Points, Set3Points] = useState(false);

  const textErea = useRef();
  const iconSend = useRef();

  useEffect(() => {
    if (window.location.href.includes('connection')) {
      socket.emit('getAllMessages', roomId)
    }
    socket.on('gotAllMessages', (allMessages) => suceessFunction(allMessages));
    socket.on('waveAdded', (data) => suceessFunc(data));
    socket.on('otherUserWroteMessage', getNewMessageFromOtherUser);
  }, []);

  const getNewMessageFromOtherUser = () => {
    socket.emit('getAllMessages', roomId)
  }

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
    socket.emit('add3points', roomId);
    socket.on('put3points', () => addPoints())

  };

  const handleSendMessage = () => {
    console.log("google is very fast".match(new RegExp(".{0,4}", "g")).join('<br />'));
    let wave = {
      bodyWave: newMessage,
      dateWave: new Date(),
      userId: fakeUser._id
    }
    let data = { roomId: roomId, wave: wave };
    socket.on('updateready', (data) => setWaves(data));
    if (waves.length > 0) {
      if (checklastwave(wave)) {
        let data1 = { datar: data, lastwave: waves[waves.length - 1] }
        socket.emit('updatelastwave', data1)
      }
    }
    else
      socket.emit('addNewWave', data)
    socket.on('updateready', (data) => suceessupdate(data));
    socket.emit('stop3points', roomId)
    socket.on('finish3point', (roomId) => stop3points());
  };
  const suceessupdate = (data) => {
    console.log('updatewave', data)
    setWaves(data)
  }

  const suceessFunc = (data) => {
    console.log(data);
    setAddWaves(data);
    socket.emit('getAllMessages', roomId);
    setNewMessage("");
  }

  const suceessFunction = (allMessages) => {
    if (allMessages.waves) {
      setWaves(allMessages.waves)
    }
  }

  const changeChatColor = () => {
    console.log("chatColor", chatColor)
    if (chatColor === "black") {
      setChatColor("white");
    }
    else
      setChatColor("black");
  }

  const addPoints = () => {
    Set3Points(true)
    console.log("is3Points", is3Points)
  }

  const stop3points = () => {
    Set3Points(false)
    console.log(is3Points)
  }

  const getDuration = (beginDate) => {
    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let closeDate = new Date()
    beginDate = new Date(beginDate);
    var daybegin = weekday[beginDate.getDay()];
    var dayclose = weekday[closeDate.getDay()];
    var monthbegin = monthNames[beginDate.getMonth()];
    var monthclose = monthNames[closeDate.getMonth()];
    var seconds = Math.floor((closeDate - (beginDate)) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    let str
    if (hours < 1)
      str = "before" + ":" + minutes + ":" + seconds;
    else
      if (daybegin == dayclose && monthbegin == monthclose)
        str = "" + hours + ":" + minutes + ":" + seconds;
      else
        if (monthclose == monthbegin && daybegin == dayclose)
          str = "" + daybegin + "" + hours + ":" + minutes + ":" + seconds;
        else
          str = "" + monthbegin + "" + daybegin + "" + hours + ":" + minutes + ":" + seconds;
    return str;
  }

  const checktime = (date) => {
    let now = new Date();
    let ans = getDuration(date)
    console.log('ans', ans);
    return ans
  }

  const checklastwave = (wave) => {
    console.log("lastUser", waves[waves.length - 1])
    var startDate = (waves[waves.length - 1].dateWave);
    var endDate = (wave.dateWave);
    var starthour = parseInt(startDate);
    var endhour = parseInt(endDate);
    console.log("lastU", waves[waves.length - 1])
    console.log("lastUser", waves[waves.length - 1].userId)
    console.log("(currentUser._id", currentUser._id)
    if (starthour - endhour < 5)
      return true;
  }

  const textAreaAdjust = () => {
    if (textErea.current.value.length % 10 == 0) {
      textErea.current.style.height = (10 + textErea.current.scrollHeight) + "px";
      iconSend.current.style.height = textErea.current.style.height;
    }
  }

  const bodyWaveLines = (text) => {
    var text1 = text.match(new RegExp(".{0,10}", "g")).join('/');
    return text1
  }

  const handleClose = () => {
    setVisibleChat(false)
  }

  return (
    <div>
      {
        <div className="container-fluid">
          <div className="row">
            <div className="chat col-12" style={{ backgroundColor: chatColor }}>
              <img className="blackWhite" onClick={changeChatColor} src={chatColor == "black" ? blackWhite : whiteBlack}  ></img>
              <AiOutlineClose onClick={handleClose} className={chatColor == "black" ? "chatX" : "chatXblack"} />
              <div className="messages">
                {(waves.length > 0 && waves !== null) ?
                  <ul>
                    {waves.map((wave, i) => (
                      <li key={i} >
                        <div className={`message float-right message-item ${wave.userName == fakeUser.name || wave.userName == fakeUser.email ? "my-message" : "received-message"
                          }`} >{wave && bodyWaveLines(wave.bodyWave) ?
                            wave.bodyWave
                            : ""}
                        </div>
                        {wave && wave.fromWave ?
                          <Avatar id="avatar" data-toggle="tooltip" data-placement="bottom" title={currentUser.email} alt="..." src={currentUser.picture} />
                          : ""}
                        <div id="dateWave">
                          {wave && wave.dateWave ?
                            checktime(wave.dateWave)
                            : ""}
                        </div>
                        <div id="avatar">
                        </div>
                      </li>
                    ))}
                  </ul>
                  :
                  ""}
              </div>
            </div>
            <Col xs="auto" className=" coll col-3 pb-3">
              <div className={`s-${is3Points ? 'is-shown' : 'is-hidden'}`}>. . .</div>
              <InputGroup className="mb-2" className="inputSendMessage mt-auto p-2 bd-highlight" type="textarea" className="form-control input-sm chat_input bg-color:green"
                onKeyPress={e => {
                  if (e.key === "Enter") handleSendMessage()
                }}
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="new-message-input-field">
                <FormControl id="inlineFormInputGroup" placeholder="Type a message..." onKeyUp={textAreaAdjust} ref={textErea} style={{ overflow: "hidden" }} />
                <InputGroup.Text role="textbox" className="sendIconButton" ref={iconSend}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30.244" height="30.244" viewBox="0 0 40.244 40.244" onClick={handleSendMessage}><defs><style dangerouslySetInnerHTML={{ __html: ".a{fill:url(#a);}.b{fill:#fff;}" }} /><linearGradient id="a" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox"><stop offset={0} stopColor="#fcf816" /><stop offset={1} stopColor="#96fe14" /></linearGradient></defs><circle className="a" cx="20.122" cy="20.122" r="20.122" /><path className="b" d="M538.722,426.741a1.252,1.252,0,0,1,.9.033,1.225,1.225,0,0,1,.61.57,1.2,1.2,0,0,1,.091.84q-1.18,5.857-2.358,11.714a4.163,4.163,0,0,1-.122.524,1.222,1.222,0,0,1-.645.689,1.255,1.255,0,0,1-.94.034,2.814,2.814,0,0,1-.478-.268L534,439.771a.749.749,0,0,0-.871.059l-1.787,1.484a.464.464,0,0,1-.425.1.448.448,0,0,1-.295-.326,1.3,1.3,0,0,1-.018-.328c0-1.178,0-2.357,0-3.535a.719.719,0,0,1,.2-.5q3.041-3.145,6.082-6.291a3.221,3.221,0,0,0,.33-.4.354.354,0,0,0,.067-.15c0-.043-.056-.03-.084-.021a1.6,1.6,0,0,0-.347.208c-.2.151-.4.308-.6.462l-7.183,5.6a.749.749,0,0,1-.853.045l-1.981-1.231a1.23,1.23,0,0,1-.528-.562,1.193,1.193,0,0,1-.022-.946,1.244,1.244,0,0,1,.73-.694l12.039-5.886A2.233,2.233,0,0,1,538.722,426.741Z" transform="translate(-512.855 -413.93)" /></svg>
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </div>
        </div>
        // : " "
      }
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ConversationActions));
