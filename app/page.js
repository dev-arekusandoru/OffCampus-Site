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
	const [testimonials, setTestimonials] = useState([]);
	const size = useWindowSize();

	useEffect(() => {
		(async () => {
			let data = (await readData('website')) || {};
			setFaqs(Object.values(data?.faqs || {}));
			setTestimonials(Object.values(data?.reviews || {}));
		})();
	}, []);

	return (
		<main className='flex flex-col items-center justify-between bg-background overflow-hidden'>
			<div className='w-full flex flex-1 flex-col items-center lg:flex-row'>
				{/* <!-- Landing Page --> */}
				<div className='w-full lg:w-[50%] flex flex-col items-center justify-between lg:min-h-dvh mb-[40px] lg:mb-0 pt-[25px] sd:pt-[75px]'>
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
									className='py-3 px-10 rounded-xl my-4 text-xl text-background active:text-primary md:hover:text-primary bg-primary active:bg-background md:hover:bg-background border border-background md:hover:border-primary active:border-primary transition-colors duration-300 hover:cursor-pointer'
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
						className='flex flex-col justify-center lg:min-h-100vh  text-background'
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
									<Testimonial name={testimonial.name}>
										{testimonial.content}
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
					<FadeInSection>
						<Resource icon={faShieldHalved}>
							Privacy Policy
						</Resource>
					</FadeInSection>
					<FadeInSection delay={60}>
						<Resource icon={faFile}>Terms of Service</Resource>
					</FadeInSection>
					<FadeInSection delay={120}>
						<Resource icon={faComment}>Provide Feedback</Resource>
					</FadeInSection>
					<FadeInSection delay={180}>
						<Resource icon={faGraduationCap} href='/request'>
							Request a University
						</Resource>
					</FadeInSection>
				</div>
			</div>
			<div className='w-full h-[30px] mt-[40px] bg-background'></div>
		</main>
	);
}
