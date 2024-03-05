import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Faq(props) {
	const [open, setOpen] = React.useState(false);
	return (
		<button
			className={
				'flex flex-col w-full px-[14px] py-[10px] bg-background drop-shadow-lg drop-shadow-primary border border-[#1212120a] rounded-xl hover:cursor-default'
			}
			onClick={() => setOpen(!open)}
		>
			<div className='flex flex-row w-full justify-between'>
				<h2
					className={
						'text-[24px] font-[500] text-text text-left tracking-tighter pr-[10px]'
					}
				>
					{props.title}
				</h2>
				<button
					className={
						' flex flex-row justify-center items-center mb-[2px] hover:cursor-pointer mr-[4px]'
					}
					onClick={() => setOpen(!open)}
				>
					<FontAwesomeIcon
						size={'lg'}
						color='#5094F5'
						icon={open ? faChevronUp : faChevronDown}
					/>
				</button>
			</div>
			<div
				className={`${
					open ? 'faq-expanded' : 'faq-collapsed'
				} overflow-hidden text-left`}
			>
				<p className='text-text text-[18px]'>{props.children}</p>
			</div>
		</button>
	);
}
