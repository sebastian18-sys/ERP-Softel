import React from 'react'
import "./featured.scss"
import { MdMoreVert, MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md"
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


export default function Featured() {
  return (
    <section className='featured'>
        <header className='featured__header'>
            <h1 className='featured__header--title'>Total Presupuesto</h1>
            <MdMoreVert />
        </header>
        <footer className='featured__footer'>
            <div className='featured__footerChart'>
                <CircularProgressbar 
                    value={70}
                    text={"70%"}
                    strokeWidth={4}
                />
            </div>
            <p className='featured__footerTitle'>Promedio de gasto por proyecto</p>
            <p className='featured__footerAmount'>$25000</p>
            {/* <p className='featured__footerDescription'>Previous transactions processing. Last payments my not be included</p> */}
            {/* <div className='featured__summary'>
                <div className='featured__item'>
                    <h3 className='featured__itemTitle'>Target</h3>
                    <div className='featured__itemResult positive'>
                        <MdOutlineExpandLess />
                        <p className='featured__resultAmount'>$12.4k</p>
                    </div>
                </div>
                <div className='featured__item'>
                    <h3 className='featured__itemTitle'>Last Week</h3>
                    <div className='featured__itemResult positive'>
                        <MdOutlineExpandLess />
                        <p className='featured__resultAmount'>$12.4k</p>
                    </div>
                </div>
                <div className='featured__item'>
                    <h3 className='featured__itemTitle'>Last Month</h3>
                    <div className='featured__itemResult negative'>
                        <MdOutlineExpandMore />
                        <p className='featured__resultAmount'>$12.4k</p>
                    </div>
                </div>
            </div> */}
        </footer>
    </section>
  )
}
