import React, { useEffect } from 'react'
import "./tableFooter.scss"

export default function TableFooter({ range, setPage, page, slice }) {

    useEffect(() => {   
        if(slice.lenght < 1 && page !== 1) {
            setPage(page - 1)
        }
    }, [slice, page, setPage])

    return (
        <div className='tableFooter'>
          <span>{`Filas por página: ${slice.length}`}</span>
          <div>
          {range.map((el, index) => (
              <button key={index} className={`tableFooter--button ${page === el ? 'activeButton' : 'desactiveButton'}` } onClick={() => setPage(el)}>
                  {el}
              </button>
          ))}
          </div>
        </div>
    )
}