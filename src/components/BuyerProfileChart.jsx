import React, { useEffect, useState } from "react";
import { getTransaction } from "../API";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from "reactstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BuyerProfilePieChart() {
	return (
		<div className="w-[40rem] h-[15rem] rounded-lg bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium">Top products</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<DoughnutChart />
			</div>
		</div>
	)
}

function DoughnutChart() {
	const [revenueData, SetRevenuData] = useState({
		datasets: []
	});

	useEffect(() => {
		getTransaction().then((res) => {
			const data = res.carts.slice(0, 3).map((cart) => {
				return cart.discountedTotal;
			});
			

			const dataSource = {
				labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
				datasets: [
					{
						label: '# products',
						data: data,
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
						],
						borderWidth: 1,
					},
				],
			};
			SetRevenuData(dataSource);
		});
	}, []);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'right', 
			},
		},
		
		cutout: '80%',
	};

	return (
		<Card style={{ width: '100%', height: 200, position: 'relative' }}>
			<Doughnut data={revenueData} options={options} />
		</Card>
	)
}
