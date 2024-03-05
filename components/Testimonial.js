import React from 'react';

export default function Testimonial(props) {
	return (
		<div className='flex-1 bg-background  drop-shadow-lg drop-shadow-primary rounded-xl py-[15px] px-[20px] max-w-[500px] border border-[#1212120a]'>
			<p className='text-text'>{props.children}</p>
			<div className='flex justify-end'>
				<p className='text-right text-primary'>{props.name}</p>
			</div>
		</div>
	);
}
