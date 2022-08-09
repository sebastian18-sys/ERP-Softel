import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useProjects } from '../../hooks/useProjects';
import "./charts.scss"

const data = [
    {
        name: "January",
        total: 1200
    },
    {
        name: "February",
        total: 2100
    },
    {
        name: "March",
        total: 800
    },
    {
        name: "April",
        total: 1600
    },
    {
        name: "May",
        total: 900
    },
    {
        name: "June",
        total: 1700
    },
  ];

export default function Charts() {

	const { dataProjects } = useProjects()

	return (
		<section className='charts'>
			<h3 className='charts__title'>Presupuesto asignado a cada proyecto</h3>
			<ResponsiveContainer width="100%" aspect={2 / 1}>
				<AreaChart width={730} height={250} data={dataProjects}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
						</linearGradient>
					</defs>
					<XAxis dataKey="Proyecto" stroke='gray' style={{fontSize: 12}} />
					<YAxis style={{fontSize: 15}} />
					<CartesianGrid strokeDasharray="3 3" className='charts__grid' />
					<Tooltip />
					<Area type="monotone" dataKey="Presupuesto" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
				</AreaChart>
			</ResponsiveContainer>
		</section>
	)
}
