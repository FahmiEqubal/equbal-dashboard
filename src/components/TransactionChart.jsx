import React, { useEffect, useState } from "react";

import { getTransaction } from "../API";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card } from "reactstrap";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function TransactionChart() {
	
	return (
		<div className="h-[22rem] bg-white rounded-lg p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Activities</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<DashboardChart />
			</div>
		</div>
	);
}

function DashboardChart() {
	const [revenueData, SetRevenuData] = useState({
		datasets:[],
		labelsets:[]
	});

	useEffect(() => {
		getTransaction().then((res) => {
			const data = res.carts.map((cart)=>{
				return cart.discountedTotal;
			});
			const label = res.carts.map((cart)=>{
				return cart.total;
			});

			const labels = [
				"Week 1",
				"Week 2",
				"Week 3",
				"Week 4",
			];
		
			const dataSource = {
				labels,				
				datasets: [
					{
						label: "Guest",
						data: label,
						backgroundColor: "rgb(30 197 90)",
					},
					{
						label: "User",
						data: data,
						backgroundColor: "rgb(190 10 60)",
					},
				],
			};
			SetRevenuData(dataSource)
		});
	}, []);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: 'point', 
				labels: {
					usePointStyle: true, 
				},
			},
			title: {
				display: true,
				text: "Chart.js Bar Chart",
			},
		},
		maintainAspectRatio: false, 
	};

	

	return (
		<Card style={{ width: '100%', height: 300}}>
			<Bar options={options} data={revenueData} />
		</Card>
	);
}
