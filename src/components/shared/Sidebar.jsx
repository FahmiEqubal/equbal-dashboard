import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/navigation'
const linkClass ='flex items-center gap-2 font-light px-3 py-2  hover:no-underline '

export default function Sidebar() {
	return (
		<div className="bg-blue-700 rounded-lg m-5 w-60 p-3 flex flex-col">
			<div className="flex items-center ml-2 gap-2 px-1 py-3">
				<span className="text-neutral-200 text-lg">Board.</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 ">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link to={link.path} className={classNames(pathname === link.path ? ' text-white' : 'text-neutral-400', linkClass)}>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}