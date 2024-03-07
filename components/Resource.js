import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function Resource(props) {
	const router = useRouter();
	return (
		<button
			className='flex flex-row items-center bg-background drop-shadow-lg drop-shadow-primary rounded-xl py-[15px] px-[20px] max-w-[500px] border border-[#1212120a]'
			onClick={() => {
				router.push(props.href);
			}}
		>
			<FontAwesomeIcon icon={props.icon} size={'xl'} color={'#000'} />
			<p className='text-text font-[500] text-[22px] ml-[10px]'>
				{props.children}
			</p>
		</button>
	);
}
