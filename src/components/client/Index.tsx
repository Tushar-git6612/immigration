import {Fragment, useCallback, useState} from 'react'
import Card from './card/Card';
import Cardlist from './card/Cardlist';

function Index() {
  const [cardState,setCardState] = useState<boolean>(false);
  const cardStateChanger = useCallback(() => {
    setCardState(true);
  },[]);
  return (
    <Fragment>
      <main className='mainTag'>
        <div className='leftMargin px-3 transition'>
          <section style={{marginTop:"60px"}}>
            {cardState ? <Card /> : <Cardlist cardStateChanger = {cardStateChanger} />}
            {/* <Card/> */}
            {/* <Cardlist/> */}
          </section>
        </div>
      </main>
    </Fragment>
  )
}

export default Index