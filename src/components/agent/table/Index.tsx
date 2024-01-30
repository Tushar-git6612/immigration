import {Fragment,memo} from 'react';
import Header from '../../client/header/Header';
import Table from "./Table";

function Index({func}:{func:() =>void}) {
  return (
    <Fragment>
      <div className='d-flex flex-column pb-2' style={{backgroundColor:"#ffffff",borderRadius:"8px"}}>
        <div className='py-2'>
            <Header callFunction={func} />
        </div>
        <Table />
      </div>
    </Fragment>
  )
}

export default memo(Index);