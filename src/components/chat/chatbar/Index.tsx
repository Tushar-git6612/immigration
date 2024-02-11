import {Fragment,memo} from 'react';
import Contact from "./contact/Contact"
import Chat from './Chats/Chat';

function Index() {
  return (
    <Fragment>
      <div className="d-flex w-100 flex-column">
                        <div className='col-12 px-2 py-2 w-100 d-flex align-items-center' style={{borderBottom:"1px solid rgb(76 78 100 / 12%)"}}>
                           <div className="d-flex align-items-center me-2" style={{ width: "45px", height: "40px", borderRadius: "50%",cursor:"pointer" }}>
                              <img src={ process.env.PUBLIC_URL +"/images/u3.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                           </div>
                           <div className='w-100 px-2'>
                              <div className='d-flex align-items-center' style={{borderRadius:"50px",border:"solid", borderColor:"#E2E2E6"}}>
                                 <span><i className="fa-solid fa-magnifying-glass ms-2"></i></span>
                                 <input type="text" name='search' className='form-control' style={{border:"none",borderRadius:"50px",outline:"transparent"}} />
                              </div>
                           </div>
                        </div>
                        <div className='col-12 py-2 px-2'>
                           <Chat />
                        </div>
                        <div className='col-12 py-2 mt-2 px-2'>
                           <Contact />
                        </div>
                     </div>
    </Fragment>
  )
}

export default memo(Index);