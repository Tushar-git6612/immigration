import {Fragment,memo} from 'react';

function Notes() {
  return (
    <Fragment>
      <form action="" className='row p-3'>
         <textarea name="" className='form-control w-100' value="Additional Notes" style={{color:"rgb(76 78 100 / 38%)", fontSize:"12px"}} id=""  rows={5}>
            {/* Additional notes */}
         </textarea>
      </form>
    </Fragment>
  )
}

export default memo(Notes);