import {Fragment,memo} from 'react'

function btn({content, width, clickfunc,paddingX, paddingY}:{content:string|undefined; width:string|undefined; clickfunc: ()=> void |string | undefined; paddingX:string|undefined; paddingY:string|undefined}) {
  return (
    <Fragment>
      <button type="button" onClick={clickfunc} className={`d-flex align-items-center justify-content-center blackbtn text-uppercase w-${width} px-${paddingX} py-${paddingY} `} >{content} 
        { content === 'Next' && <span className='ms-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>
        </span>}
      </button>
    </Fragment>
  )
}

export default memo(btn);