import { useState, useEffect } from "react"

export const useTable = (data, page, rowsPerPage) => {

    const [tableRange, setTableRange] = useState([]) //rango de la tabla
    const [slice, setSlice] = useState([])  //elementos pagina actual

    // Number pages
    const calculateRange = (data, rowsPerPage) => {
        const range = []
        const num = Math.ceil(data.length / rowsPerPage)
        
        let i = 1
        for(i = 1; i <= num; i++) {
            range.push(i)
        }

        return range
    }

    const sliceData = (data, page, rowsPerPage) => {
        return data.slice((page - 1)*rowsPerPage, page*rowsPerPage)
    }


    useEffect(() => {
        const range = calculateRange(data, rowsPerPage)
        setTableRange([...range])

        const slice = sliceData(data, page, rowsPerPage)
        setSlice([...slice])

    }, [data, setTableRange, page, setSlice])

    return { slice, tableRange }

}