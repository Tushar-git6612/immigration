import {Fragment} from 'react';
import Chatbar from "./chatbar/Index";
import Chatbox from "./chatbox/Index";

function Index() {
  return (
    <Fragment>
         <main className='mainTag'>
         <div className="leftMargin px-3 transition">
            <section style={{marginTop:"60px"}}>
               <div className="row">
                  <div className="col-4 py-2 px-0" style={{backgroundColor:"#FFFFFF",borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px"}}>
                     <Chatbar />
                  </div>
                  <div className="col-8 py-2 px-0" style={{borderTopRightRadius:"8px",borderBottomRightRadius:"8px"}}>
                     <Chatbox />
                  </div>
               </div>
            </section>
         </div>
      </main>
    </Fragment>
  )
}

export default (Index);