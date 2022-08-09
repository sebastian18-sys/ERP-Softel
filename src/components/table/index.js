import React from 'react'
import "./table.scss"

export default function Table() {

    const rows = [
        {
            id: 1143155,
            product:  "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 1143155,
            product:  "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 1143155,
            product:  "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 1143155,
            product:  "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved"
        }
      ];


    return (
        // <table className='table'>
        //     <thead className='table__head'>
        //         <tr>
        //             <th scope='col'>id</th>
        //             <th scope='col'>Product</th>
        //             <th scope='col'>Imagen</th>
        //             <th scope='col'>Customer</th>
        //             <th scope='col'>Date</th>
        //             <th scope='col'>Amount</th>
        //             <th scope='col'>Method</th>
        //             <th scope='col'>Status</th>
        //         </tr>
        //     </thead>
        //     <tbody className='table__body'>
        //     {rows.map((value, index) => (
        //         <tr key={index}>
        //             <td>{value.id}</td>
        //             <td>{value.product}</td>
        //             <td>
        //                 <img src={value.img} alt="img" loading='lazy' />
        //             </td>
        //             <td>{value.customer}</td>
        //             <td>{value.date}</td>
        //             <td>{value.amount}</td>
        //             <td>{value.method}</td>
        //             <td>
        //                 <span className={`status ${value.status}`}>{value.status}</span>
        //             </td>
        //         </tr>
        //     ))}
        //     </tbody>
        // </table>
        <div></div>
    )
}
