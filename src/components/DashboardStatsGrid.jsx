import React from 'react'
import { IoPeople, IoCart } from 'react-icons/io5'
import {HiOutlineCreditCard, HiCurrencyDollar } from 'react-icons/hi'
import {AiFillLike } from 'react-icons/ai'
export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
			<div>
				<div className="rounded-full  h-6 w-6 flex items-center justify-center bg-green-400">
					<HiCurrencyDollar className="text-2xl text-white" />
				</div>
				<div>
					<span className="text-sm text-gray-500 font-light">Total Revenue</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$54232</strong>
						<span className="text-sm pl-16 text-green-500 pl-2">+2.5%</span>
					</div>
				</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
			<div>
				<div className="rounded-full h-6 w-6 flex items-center justify-center bg-rose-400">
					<HiOutlineCreditCard  className="text-2xl text-white" />
				</div>
				<div >
					<span className="text-sm text-gray-500 font-light">Total Transaction</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1200</strong>
						<span className="text-sm pl-16 text-green-500 pl-2">+1.7%</span>
					</div>
				</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
			<div>
				<div className="rounded-full h-6 w-6 flex items-center justify-center bg-purple-400">
					<AiFillLike className="text-2xl text-white" />
				</div>
				<div >
					<span className="text-sm text-gray-500 font-light">Total Likes</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">12313</strong>
						<span className="text-sm pl-16 text-green-500 pl-2">+1.4%</span>
					</div>
				</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
			<div>
				<div className="rounded-full h-6 w-6 flex items-center justify-center bg-green-600">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div >
					<span className="text-sm text-gray-500 font-light">Total Users</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">16432</strong>
						<span className="text-sm pl-16 text-green-500 pl-2">+4.3%</span>
					</div>
				</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}