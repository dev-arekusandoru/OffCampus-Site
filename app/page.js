'use client';

import Image from 'next/image';
import iconImage from '@/assets/icon.png';
import moises from '@/assets/moises.jpeg';
import alexandru from '@/assets/alexandru.jpeg';
import { FadeInSection } from '@/components/FadeInSection';
import TeamMember from '@/components/TeamMember';
import Testimonial from '@/components/Testimonial';

export default function Home() {
	const testimonials = [
		[
			'Sarah L.',
			'OffCampus made finding housing near my university a breeze! The roommate matching feature helped me find the perfect roommate, and the customizable search filters ensured I found a place that met all my needs.'
		],
		[
			'Michael K.',
			'I was hesitant to use OffCampus at first, but I’m so glad I did. The platform’s user-friendly interface and helpful resources made my housing search stress-free, and I’m now happily settled in my new home.'
		],
		[
			'Emily R.',
			'I had a specific budget and list of must-have amenities, and OffCampus delivered. Within days, I found a place that met all my criteria, and the whole process was seamless from start to finish.'
		],
		[
			'Alex B.',
			'OffCampus not only helped me find housing but also introduced me to a vibrant community of fellow students. I’ve attended events and meetups organized through the platform and have truly felt a sense of belonging since moving in.'
		],
		[
			'Maria S.',
			'As an international student, finding off-campus housing was daunting, but OffCampus made it easy. The platform’s user-friendly interface and helpful resources guided me through the process, and I’m now happily settled in my new home.'
		],
		[
			'David M.',
			'OffCampus saved me so much time and stress during my housing search. I appreciated the variety of listings available and the ability to connect with potential roommates before committing to a lease. Highly recommend!'
		]
	];

	return (
		<main className='flex min-h-screen flex-col items-center justify-between bg-background'>
			<div className='w-full flex flex-1 flex-col items-center lg:flex-row'>
				{/* <!-- Landing Page --> */}
				<FadeInSection width={'w-full lg:w-[50%]'}>
					<div className='w-full flex flex-col items-center justify-between lg:min-h-screen mb-[40px] lg:mb-0 pt-[25px] sd:pt-[75px]'>
						<div>
							{/* <!-- Logo Image --> */}
							<div className='flex justify-center'>
								<div className='w-[240px] sd:w-[300px] md:w-[420px] lg:w-[400px] xl:w-[420px]'>
									<Image
										src={iconImage}
										alt='Icon'
										width={420}
										height={420}
										unoptimized
										className='rounded-[50px]'
									/>
								</div>
							</div>
							{/* <!-- Slogan & Button --> */}
							<div className='flex flex-col items-center justify-center my-4 text-text'>
								{/* <!-- Title --> */}
								<h1 className='text-[40px] font-bold'>
									OffCampus
								</h1>
								<h3 className='text-xl'>Housing Made Simple</h3>
							</div>
							{/* <!-- Join Button --> */}
							<div className='flex flex-col justify-center items-center text-center -mt-[10px] sd:my-10'>
								<button
									className='py-3 px-10 rounded-xl my-4 text-xl text-background hover:text-primary active:text-primary bg-primary hover:bg-background active:bg-background border border-background hover:border-primary active:border-primary transition-colors duration-300 hover:cursor-pointer'
									id='join-button'
									onClick={() => {
										alert(
											'This feature is not available yet!'
										);
									}}
								>
									Get Notified
								</button>
							</div>
						</div>
					</div>
				</FadeInSection>
				{/* <!-- About Us --> */}
				<FadeInSection width={' w-[90%] lg:w-[50%]'}>
					<div
						className='flex flex-col justify-center lg:min-h-screen  text-background'
						id='about-us'
					>
						<div className='flex flex-col justify-center items-center lg:min-h-[90%] py-[20px] bg-primary rounded-[25px] md:rounded-[50px] lg:rounded-l-[60px] lg:rounded-r-[0px]'>
							<h1 className='text-[42px] md:text-[50px] font-bold mb-[16px] lg:mb-[30px]'>
								About Us
							</h1>
							<p className='text-center text-[16px] lg:text-[18px] items-center pb-[10px] lg:pb-[30px] max-w-[80%] xl:px-10'>
								{/* Welcome to OffCampus, your premier destination for
							finding off-campus housing solutions tailored to
							your needs.  */}
								{/* <br></br>
							<br></br>  */}
								At OffCampus, we understand the challenges
								students face when seeking accommodations that
								align with their budget, preferences, and
								lifestyle. That&apos;s why we&apos;ve developed
								a revolutionary platform that simplifies the
								housing search process and fosters community
								connections. <br></br>
								<br></br>Our mission is to empower students and
								residents to find their ideal living spaces
								while building meaningful connections within
								their communities. <br></br>
								<br></br>Whether you&apos;re a university
								student preparing for the next academic year or
								a young professional searching for your next
								home, OffCampus is here to make the process
								seamless and enjoyable.
								<br></br>
								<br></br>Join us in reimagining the way we find
								and experience off-campus housing. Welcome to
								OffCampus, where your perfect home awaits.
							</p>
						</div>
					</div>
				</FadeInSection>
			</div>
			{/* <!-- Meet the Team --> */}
			<div className='flex flex-col justify-center items-center w-full'>
				{/* <!-- Title --> */}
				<FadeInSection>
					<div className='w-full h-[100px] justify-center items-center flex my-2'>
						<h2 className='text-[36px] sd:text-[42px] md:text-[50px] font-bold text-text'>
							Meet The Team
						</h2>
					</div>
				</FadeInSection>
				<FadeInSection width='w-full'>
					<TeamMember
						first='Moises'
						last='Ramirez Gomez'
						title='Co-founder & Business Strategist'
						image={moises}
					>
						With a background in computer science and a passion for
						creating innovative solutions, Alexandru brings
						expertise in software development to the OffCampus team.
						As a co-founder and lead developer, Alexandru is
						committed to crafting a user-friendly platform that
						meets the needs of our diverse community of users.
					</TeamMember>
				</FadeInSection>
				<FadeInSection width='w-full'>
					<TeamMember
						first='Alexandru'
						last='Muresan'
						title='Co-founder & Lead Developer'
						image={alexandru}
						left
					>
						With a background in computer science and a passion for
						creating innovative solutions, Alexandru brings
						expertise in software development to the OffCampus team.
						As a co-founder and lead developer, Alexandru is
						committed to crafting a user-friendly platform that
						meets the needs of our diverse community of users.
					</TeamMember>
				</FadeInSection>
			</div>
			{/* <!-- Testimonials --> */}
			<div className='flex flex-col justify-center items-center w-full'>
				{/* <!-- Title --> */}
				<FadeInSection>
					<div className='w-full h-[100px] justify-center items-center flex mt-6'>
						<h2 className='text-[36px] sd:text-[42px] md:text-[50px] font-bold text-text'>
							What Our Users Are Saying
						</h2>
					</div>
				</FadeInSection>
				<div className='px-[30px] md:px-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-x-6 lg:gap-x-12 max-w-[1400px]'>
					{testimonials.map((testimonial, index) => {
						return (
							<FadeInSection key={index} delay={index * 40}>
								<Testimonial name={testimonial[0]}>
									{testimonial[1]}
								</Testimonial>
							</FadeInSection>
						);
					})}
				</div>
			</div>
			<div className='w-full h-[75px]'></div>
		</main>
	);
}
