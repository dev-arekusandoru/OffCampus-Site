import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Resource(props) {
	return (
		<button className='flex flex-row items-center bg-background drop-shadow-lg drop-shadow-primary rounded-xl py-[15px] px-[20px] max-w-[500px] border border-[#1212120a]'>
			<FontAwesomeIcon icon={props.icon} size={'xl'} color={'#000'} />
			<p className='text-text font-[500] text-[22px] ml-[10px]'>
				{props.children}
			</p>
		</button>
	);
}
