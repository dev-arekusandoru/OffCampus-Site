import React from 'react';
import { FadeInSection } from './FadeInSection';

export function SectionTitle(props) {
	return (
		<FadeInSection>
			<div
				className={`w-full px-[20px] h-[100px] justify-center items-center flex ${
					!props.noYMargin ? 'my-6' : ''
				} lg:mb-0`}
			>
				<h2 className='text-[36px] sd:text-[42px] md:text-[50px] font-bold text-text text-center tracking-tighter leading-[36px] sd:leading-[42px] md:leading-[50px]'>
					{props.children || 'Title'}
				</h2>
			</div>
		</FadeInSection>
	);
}
