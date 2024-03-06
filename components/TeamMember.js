import React from 'react';
import Image from 'next/image';
import { FadeInSection } from './FadeInSection';

export default function TeamMember(props) {
	return (
		<div
			className={`flex flex-col items-center ${
				props.left ? 'lg:flex-row' : 'lg:flex-row-reverse'
			} w-[90%] md:w-[90%] lg:w-full ${
				!props.marginT ? 'mt-10' : props.marginT
			} lg:bg-background`}
		>
			{/* <!-- Image --> */}
			<FadeInSection direction={props.left ? 'left' : 'right'}>
				<div className='drop-shadow-lg justify-center flex mb-[20px] lg:mb-0 sd:w-[90%] md:w-[420px] lg:w-[400px] xl:w-[420px] mx-10'>
					<Image
						src={props.image}
						width={420}
						height={420}
						unoptimized
						className='rounded-[25px] md:rounded-[50px]'
						alt={props.title + ' ' + props.first + ' ' + props.last}
					/>
				</div>
			</FadeInSection>
			{/* Content */}
			<FadeInSection
				width='flex-1'
				direction={props.left ? 'right' : 'left'}
			>
				<div
					className={`flex-1 lg:h-[400px] xl:h-[420px] border-[2px] border-primary bg-background text-background rounded-[25px] md:rounded-[50px] ${
						props.left
							? 'lg:rounded-r-[0px] lg:border-r-[0px]'
							: 'lg:rounded-l-[0px] lg:border-l-[0px]'
					} justify-start items-center flex flex-col py-[10px] drop-shadow-xl`}
				>
					{/* <!-- Text --> */}
					<div className='flex flex-col items-center w-full text-text'>
						<div
							className={`flex flex-col items-center ${
								props.first === 'Alexandru'
									? 'sd:flex-row'
									: 'sm:flex-row'
							}`}
						>
							<h3 className='text-[30px] font-bold'>
								{props.first}
							</h3>
							<h3
								className={`text-[30px] font-bold ${
									props.first === 'Alexandru'
										? 'sd:ml-1'
										: 'sm:ml-2'
								} -mt-[10px] ${
									props.first === 'Alexandru'
										? 'sd:mt-0'
										: 'sm:mt-0'
								}`}
							>
								{props.last}
							</h3>
						</div>
						<h4 className='text-[20px] font-[500] text-center max-w-[60%]'>
							{props.title}
						</h4>
					</div>
					<p className='flex-1 w-[86%] max-w-[650px] text-[16px] md:text-[18px] lg:text-[20px] text-center items-center flex pt-[14px] lg:pt-0 lg:mb-[20px] text-text'>
						{props.children}
					</p>
				</div>
			</FadeInSection>
		</div>
	);
}
