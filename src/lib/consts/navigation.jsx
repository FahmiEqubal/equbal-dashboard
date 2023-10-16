import {
	HiOutlineViewGrid,
	HiOutlineUsers,
	HiOutlineCreditCard,
	HiOutlineCog
} from 'react-icons/hi'
import {
	AiFillSchedule
}from 'react-icons/ai'
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineCreditCard />
	},
	{
		key: 'schedules',
		label: 'Schedules',
		path: '/schedules',
		icon: <AiFillSchedule />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/user',
		icon: <HiOutlineUsers />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Help',
		path: '/support',
	},
	{
		key: 'contact',
		label: 'Contact Us',
		path: '/contact',
	}	
]