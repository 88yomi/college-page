import React from 'react'
import { BiNews } from 'react-icons/bi';
import { FaRegNewspaper } from 'react-icons/fa';
import { ImNewspaper } from 'react-icons/im';

const mockImportantDates = [
	{
		day: 'Wednesday, 15th May 2022',
		title: 'Announcement of the new Vice-Chancellor',
		icon: <FaRegNewspaper className='w-10 h-10'/>
	},


	{
		day: 'Monday, 2nd June 2022',
		title: '2nd Semester Examinations commence',
		icon: <BiNews className='w-10 h-10'/>
	},


	{
		day: 'Friday, 28th June 2022',
		title: '2nd Semester Examinations End',
		icon: <ImNewspaper className='w-10 h-10'/>
	},


	{
		day: 'Monday, 25th September 2022',
		title: 'Beginning of a new Session',
		icon: <BiNews className='w-10 h-10' />
	},
]

const ImportantDates = () => {
	return (
		<div className='py-10 px-6 bg-custom-100 text-gray-800 md:py-16'>
			<ul className='space-y-12 md:grid md:grid-cols-2 md:space-y-0 md:gap-y-16 '>
				{mockImportantDates.map((date, index) => (
				<li key={index} className='text-center md:text-left md:flex md:items-center md:space-x-6 px-6'>
					<div className='max-w-[40px] mx-auto mb-4 md:mx-0 md:mb-0'>
						<div className="mx-auto h-10 w-10">
							{date.icon}
						</div>
					</div>
					<div className=''>
						<h4 className='font-semibold text-lg text-gray-700'>{date.day}</h4>
						<p className='text-gray-600'>{date.title}</p>
					</div>
				</li>
				))}
			</ul>
		</div>
	)
}

export default ImportantDates;