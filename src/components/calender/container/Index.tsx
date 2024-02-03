import {Fragment} from 'react';
import Events from './Events';
import Calender from './Calender';

function Index() {
  return (
    <Fragment>
      <div className='boxCard'>
         <div className="row mx-0 py-3">
             <div className="col-3">
                <Events />
             </div>
            <div className="col-9">
              <Calender />
            </div>
         </div>
      </div>
    </Fragment>
  )
}
//  line 381
export default Index