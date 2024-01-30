import {Fragment} from 'react'
import Sidebar from '../navbar/Sidebar';

export default function Header() {
  return (
    <Fragment>
      <header style={{position:"fixed", width:"100%",zIndex:"99",backgroundColor:"#F7F7F9"}}>
            <div className="leftMargin">
              <nav className="d-flex justify-content-end align-items-center py-2" style={{lineHeight:"30px",boxShadow:"0px 2px 5px rgb(76 78 100 / 32%)",}}>
                <span className='me-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" style={{color:"#4C4E64",cursor:"pointer"}} viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/></svg>
                </span>
                <div className="d-flex align-items-center me-4" style={{ width: "30px", height: "30px", borderRadius: "50%",cursor:"pointer" }}>
                  <img src={ process.env.PUBLIC_URL +"/images/u3.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                </div>
              </nav>
            </div>
      </header>
      <Sidebar/>
    </Fragment>
  )
}
