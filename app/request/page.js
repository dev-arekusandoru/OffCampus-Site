'use client';

import { SectionTitle } from '@/components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Input from '@/components/Input';
import { useForm } from '@formspree/react';
import { FadeInSection } from '@/components/FadeInSection';

export default function Request() {
	const [state, handleSubmit] = useForm('mwkgqvlg');
	if (state.succeeded) {
		return <p>Thanks for your submission!</p>;
	} else {
		console.log(state);
	}

	return (
		<main className='flex flex-col min-h-screen items-center justify-start bg-background overflow-hidden pt-[20px]'>
			<SectionTitle noYMargin>Request a University</SectionTitle>
			<div className='flex flex-col w-full max-w-[1200px] px-[20px] lg:px-[100px]'>
				<FadeInSection delay={60}>
					<p className='text-text text-[18px]'>
						We are always looking to expand our university database.
						If you would like to request a university to be added to
						our database, please fill out the form below. We will
						review your request and add the university to our
						database if it meets our criteria.
					</p>
				</FadeInSection>
				<div className='flex flex-col w-full mt-6'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col w-full'
					>
						<FadeInSection delay={120} width={'w-full'}>
							<Input
								title='University Name'
								id='university'
								required
							/>
						</FadeInSection>
						<FadeInSection delay={180} width={'w-full'}>
							<Input title='Location' id='location' required />
						</FadeInSection>
						<FadeInSection delay={240} width={'w-full'}>
							<Input title='Website' id='website' required />
						</FadeInSection>
						<FadeInSection delay={300} width={'w-full'}>
							<Input
								title='Your University Email'
								id='email'
								required
							/>
						</FadeInSection>
						<FadeInSection delay={360}>
							<button
								type='submit'
								className='w-full max-w-[500px] px-[14px] py-[10px] bg-primary text-background font-[500] text-[18px] rounded-xl mt-6'
							>
								Submit Request
							</button>
						</FadeInSection>
					</form>
				</div>
			</div>
		</main>
	);
}
