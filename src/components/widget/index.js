import React from 'react'
import "./widget.scss"
import { MdExpandLess } from "react-icons/md"
import { Link } from 'react-router-dom'

export default function Widget({ title, amount, link, icon, redirect }) {

    // const amount = 10
    // const diff = 20

    return (
        <section className='widget'>
            <div className='widget__left'>
                <span className='widget__leftTitle'>{title}</span>
                {/* <span className='widget__leftCounter'>{isMoney && "$"}{amount}</span> */}
                <span className='widget__leftCounter'>{amount}</span>
                <span className='widget__leftLink'>
                    <Link to={redirect}>
                        {link}
                    </Link>    
                </span>   
            </div>
            <div className='widget__right'>
                <div className='widget__rightPercentege positive'>
                    <MdExpandLess />
                </div>
                {icon}
            </div>
        </section>
    )
}
