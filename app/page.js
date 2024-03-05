'use client';

import { useEffect, useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';
import iconImage from '@/assets/icon.png';
import moises from '@/assets/moises.jpeg';
import alexandru from '@/assets/alexandru.jpeg';
import { FadeInSection } from '@/components/FadeInSection';
import TeamMember from '@/components/TeamMember';
import Testimonial from '@/components/Testimonial';
import { SectionTitle } from '@/components/Title';
import Faq from '@/components/FAQ';
import {
	faComment,
	faFile,
	faGraduationCap,
	faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import Resource from '@/components/Resource';
import { readData } from '@/backend/config';

export default function Home() {
	const [faqLimit, setFAQLimit] = useState(5);
	const [faqs, setFaqs] = useState([]);
	const size = useWindowSize();
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
	const howItWorks = [
		{
			title: 'How OffCampus Works',
			content:
				"OffCampus is a user-friendly platform designed to simplify the off-campus housing search process for university students. Here's how it works:",
			steps: [
				'Sign Up: Create a free account on OffCampus using your email address or social media accounts.',
				'Search Listings: Browse through a wide range of housing options near your university, filtered by location, budget, and amenities.',
				'Connect with Roommates: Utilize our roommate matching feature to find compatible roommates based on shared preferences and lifestyle habits.',
				'Communicate with Landlords: Contact landlords directly through the platform to schedule viewings and discuss rental terms.',
				"Secure Your Housing: Once you've found your ideal housing option, finalize the rental agreement and move in with confidence."
			]
		},
		{
			title: 'Key Features and Benefits',
			content:
				'OffCampus offers a variety of features and benefits to enhance your housing search experience:',
			points: [
				'Customized Search Filters: Easily find housing options that meet your specific preferences, such as location, budget, and amenities.',
				'Roommate Matching: Connect with potential roommates who share similar interests and lifestyle habits, ensuring a harmonious living environment.',
				'Community Building: Join a vibrant community of students and residents, participate in events, and build lasting friendships.',
				'Direct Communication: Communicate directly with landlords to ask questions, schedule viewings, and negotiate rental terms.',
				'User-Friendly Interface: Enjoy a seamless browsing experience on our intuitive platform, accessible on desktop and mobile devices.',
				'Secure Transactions: Rest assured that your personal information is protected through encryption and other security measures.'
			]
		}
	];

	useEffect(() => {
		(async () => {
			let data = (await readData('website')) || {};
			setFaqs(Object.values(data?.faqs || {}));
		})();
	}, []);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between bg-background'>
			<div className='w-full flex flex-1 flex-col items-center lg:flex-row'>
				{/* <!-- Landing Page --> */}
				<div className='w-full lg:w-[50%] flex flex-col items-center justify-between lg:min-h-screen mb-[40px] lg:mb-0 pt-[25px] sd:pt-[75px]'>
					<div>
						{/* <!-- Logo Image --> */}
						<FadeInSection>
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
						</FadeInSection>
						{/* <!-- Slogan & Button --> */}
						<div className='flex flex-col items-center justify-center my-4 text-text'>
							{/* <!-- Title --> */}
							<FadeInSection delay={50}>
								<h1 className='text-[40px] font-bold'>
									OffCampus
								</h1>
							</FadeInSection>
							<FadeInSection delay={100}>
								<h3 className='text-xl'>Housing Made Simple</h3>
							</FadeInSection>
						</div>
						{/* <!-- Join Button --> */}
						<FadeInSection delay={150}>
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
						</FadeInSection>
					</div>
				</div>
				{/* <!-- About Us --> */}
				<FadeInSection width={' w-[90%] lg:w-[50%]'} direction='right'>
					<div
						className='flex flex-col justify-center lg:min-h-screen  text-background'
						id='about-us'
					>
						<div className='flex flex-col justify-center items-center lg:min-h-[90%] py-[20px] bg-primary rounded-[25px] md:rounded-[50px] lg:rounded-l-[60px] lg:rounded-r-[0px] drop-shadow-xl'>
							<FadeInSection delay={100}>
								<h1 className='text-[42px] md:text-[50px] font-bold mb-[12px] lg:mb-[30px]'>
									About Us
								</h1>
							</FadeInSection>
							<FadeInSection delay={150}>
								<p className='text-center text-[16px] lg:text-[18px] items-center pb-[10px] lg:pb-[30px] max-w-[80%] xl:px-10'>
									At OffCampus, we understand the challenges
									students face when seeking accommodations
									that align with their budget, preferences,
									and lifestyle. That&apos;s why we&apos;ve
									developed a revolutionary platform that
									simplifies the housing search process and
									fosters community connections. <br></br>
									<br></br>Our mission is to empower students
									and residents to find their ideal living
									spaces while building meaningful connections
									within their communities. <br></br>
									<br></br>Whether you&apos;re a university
									student preparing for the next academic year
									or a young professional searching for your
									next home, OffCampus is here to make the
									process seamless and enjoyable.
									<br></br>
									<br></br>Join us in reimagining the way we
									find and experience off-campus housing.
									Welcome to OffCampus, where your perfect
									home awaits.
								</p>
							</FadeInSection>
						</div>
					</div>
				</FadeInSection>
			</div>
			{/* <!-- Meet the Team --> */}
			<div className='flex flex-col justify-center items-center w-full'>
				{/* <!-- Title --> */}
				<SectionTitle>Meet The Team</SectionTitle>
				<TeamMember
					first='Moises'
					last='Ramirez Gomez'
					title='Co-founder & Business Strategist'
					image={moises}
					marginT='mt-0'
				>
					Bringing expertise in international business and strategic
					planning, Moises plays a pivotal role in shaping
					OffCampus&apos;s growth trajectory. As a co-founder, Moises
					ensures that OffCampus remains at the forefront of the
					housing market, with a keen eye for market trends and a
					dedication to user satisfaction.
				</TeamMember>
				<TeamMember
					first='Alexandru'
					last='Muresan'
					title='Co-founder & Lead Developer'
					image={alexandru}
					left
				>
					With a background in computer science and a passion for
					creating innovative solutions, Alexandru brings expertise in
					software development to the OffCampus team. As a co-founder
					and lead developer, Alexandru is committed to crafting a
					user-friendly platform that meets the needs of our diverse
					community of users.
				</TeamMember>
			</div>
			{/* <!-- Testimonials --> */}
			<div className='flex flex-col justify-center items-center w-full'>
				{/* <!-- Title --> */}
				<SectionTitle>What Our Users Are Saying</SectionTitle>
				<div className='px-[30px] md:px-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-x-6 lg:gap-x-12 max-w-[1400px]'>
					{testimonials
						.slice(0, size.width < 640 ? 3 : 6)
						.map((testimonial, index) => {
							return (
								<FadeInSection key={index} delay={index * 60}>
									<Testimonial name={testimonial[0]}>
										{testimonial[1]}
									</Testimonial>
								</FadeInSection>
							);
						})}
				</div>
			</div>
			<div className='flex flex-col justify-center items-center w-full'>
				{/* <!-- Title --> */}
				<SectionTitle>FAQs</SectionTitle>
				<div className='flex flex-col items-center justify-center px-[30px] md:px-[100px] w-full gap-y-6 gap-x-6 lg:gap-x-12 max-w-[1400px]'>
					{faqs.slice(0, faqLimit).map((faq, index) => {
						return (
							<FadeInSection
								key={index}
								delay={index * 60}
								width={'w-full'}
							>
								<Faq title={faq.question}>{faq.answer}</Faq>
							</FadeInSection>
						);
					})}
					<button
						className={
							'px-[24px] py-[14px] rounded-[6px] text-lg text-background hover:text-primary bg-primary hover:bg-background border border-background hover:border-primary transition-colors duration-300 hover:cursor-pointer'
						}
						onClick={() => {
							if (faqLimit === 5) setFAQLimit(10);
							else setFAQLimit(5);
						}}
					>
						{faqLimit === 5 ? 'Show More' : 'Show Less'}
					</button>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center w-full'>
				{/* <!-- Title --> */}
				<SectionTitle>Additional Resources</SectionTitle>
				<div className='flex flex-row flex-wrap my-[10px] items-center justify-center px-[30px] md:px-[100px] w-full gap-y-6 gap-x-6 lg:gap-x-12 max-w-[1400px]'>
					<Resource icon={faShieldHalved}>Privacy Policy</Resource>
					<Resource icon={faFile}>Terms of Service</Resource>
					<Resource icon={faComment}>Provide Feedback</Resource>
					<Resource icon={faGraduationCap}>
						Request a University
					</Resource>
				</div>
			</div>
			<div className='w-full h-[30px] mt-[40px] bg-primary'></div>
		</main>
	);
}
