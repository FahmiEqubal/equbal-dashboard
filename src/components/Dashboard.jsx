import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfilePieChart from './BuyerProfileChart'
import AddProfile from './AddProfile'
export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4'> 
      <DashboardStatsGrid />
      <div className='flex flex-row gap-4 w-full'>
        <TransactionChart /> 
      </div>
      <div className='flex flex-row gap-4 w-full'>
      <BuyerProfilePieChart /> 
        <AddProfile />
      </div>
    </div>
  )
}
