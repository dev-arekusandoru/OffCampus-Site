import React from 'react';

export default function Input(props) {
	return (
		<div className='flex flex-col w-full'>
			<label
				htmlFor={props.id}
				className='text-text text-[18px] font-[500] mt-4 ml-2'
			>
				{props.title}
			</label>
			<input
				type='text'
				name={props.id}
				id={props.id}
				className='w-full px-[14px] py-[10px] bg-background drop-shadow-lg drop-shadow-primary border border-[#1212120a] rounded-xl text-text text-[18px]'
				required={props.required}
			/>
		</div>
	);
}
