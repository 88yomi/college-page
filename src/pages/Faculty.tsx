import React, { useLayoutEffect, useState } from 'react'
import { Header, Footer, Enquiries } from '../components'
import { useParams } from 'react-router'

const mockLecturers: {name: string, qualification: string}[] = [
	{
		name: 'Alabi Meyers',
		qualification: 'Ph. D'
	},
	{
		name: 'Thomas Adekunle',
		qualification: 'M.Sc'
	},
	{
		name: 'Ciroma Danjuma',
		qualification: 'M.Sc'
	},
	{
		name: 'Babajide Adesoji',
		qualification: 'M.Sc'
	},
	{
		name: 'Chioma Chukasin',
		qualification: 'M.Sc'
	},
	{
		name: 'Jeremiah Akinlade',
		qualification: 'M.Sc'
	},
	{
		name: 'Comfort Bassey',
		qualification: 'M.Sc'
	},
	{
		name: 'Tamunotonye Faye',
		qualification: 'M.Sc'
	},
	{
		name: 'Bashir Dogo',
		qualification: 'M.Sc'
	},
	{
		name: 'Sottin Avoseh',
		qualification: 'M.Sc'
	},
	{
		name: 'Taye Omotayo',
		qualification: 'M.Sc'
	},
]

const mockDepartments: string[] = [
	'Department of Thefirstthing',
	'Department of Thesecondthing',
	'Department of Thethirdthing',
	'Department of Thefourththing',
	'Department of Thefifththing',
	'Department of Thesixththing',
]

const capitalise = (text: string) => text.split('').map((el, i) => i === 0 ? el.toUpperCase() : el).join('');

const hundreds = () => {
	const val = ['100','200','300','400','500']
	return val[Math.floor(Math.random() * (5))]
}

const Faculty = () => {
	const [facultyColorr, setFacultyColorr] = useState('');
	
	const params = useParams();
	let facultyName = params.culty as string;

	facultyName = facultyName.indexOf('-') === -1 ? facultyName : facultyName.split('-').map(el => capitalise(el)).join(' ');

	
	useLayoutEffect(() => {
		setFacultyColorr(hundreds());
	}, [params.culty])
	
	return (
		<div className="font-[Inter] bg-custom-300 text-gray-100 App container max-w-4xl mx-auto">
			<>
				<Header />
				<section className="faculty-content px-6">
					Welcome to the Faculty of {capitalise(facultyName)}. 

					{//'picture of lab or students doing something academic or maybe lecturers in a lecture room'
					}

					<img src='' width='600px' height='400px' alt={`department of ${facultyName} activity`} />

					<section className={`bg-culty-${facultyColorr} leading-loose`}>
						We specialise in the education of the premier and premium didactic methods of teaching about {facultyName}.
						Established in the year 19{Math.floor(Math.random() * 100)}, the faculty of {facultyName} was the second faculty to be approved by the federal board of education after a wide reform and upgrade to the tertiary education system in the country.
					</section>

					<ul className='mt-12 space-y-4 mx-auto w-min whitespace-nowrap'>	
						{mockDepartments.map(dep => 
							<li className='hover:text-md'>{dep}</li>
						)}
					</ul>

					<section className={`bg-culty-${facultyColorr} mt-20`}>
						<span className="uppercase text-xl font-seri tracking-widest">Faculty lecturers: </span>
						<ul className='space-y-2 ml-4 mt-2'>
							{mockLecturers.map(({name, qualification}) => <li>{`${qualification === 'Ph. D' ? 'Dr.' : ''} ${name} (${qualification})`}</li>)}
						</ul>
					</section>
				</section>

				<Enquiries />

				<Footer />

			</>
		</div>
	)
}

export default Faculty