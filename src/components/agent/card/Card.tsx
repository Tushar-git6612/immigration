import {Fragment,memo} from 'react'
import Personalform from '../../client/form/Personalform';
import SubmitBtn from "../../button/Btn";

function Card() {
  return (
    <Fragment>
      <div className="px-2">
        <div className="p-4 boxCard">
          <Personalform />
          <div className='col-12 my-3 d-flex justify-content-center align-items-center'>
            <SubmitBtn content='submit' width='' paddingY='1' paddingX='3' clickfunc={() =>{}} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default memo(Card);