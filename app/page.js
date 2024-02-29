import Image from 'next/image';
import iconImage from '/assets/icon.png';
import moises from '/assets/moises.jpeg';
import alexandru from '/assets/alexandru.jpeg';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between bg-background'>
			<div className='w-full flex flex-1 flex-col items-center lg:flex-row'>
				{/* <!-- Landing Page --> */}
				<div className='w-full lg:w-[50%] flex flex-col items-center justify-between lg:min-h-screen mb-[40px] lg:mb-0 pt-[25px] sd:pt-[75px]'>
					<div>
						{/* <!-- Logo Image --> */}
						<div className='flex justify-center'>
							<div className='w-[240px] sd:w-[300px] md:w-[420px] lg:w-[400px] xl:w-[420px]'>
								<Image
									src={iconImage}
									alt='Icon'
									width={420}
									height={420}
									className='rounded-[50px]'
								/>
							</div>
						</div>
						{/* <!-- Slogan & Button --> */}
						<div className='flex flex-col items-center justify-center my-4 text-text'>
							{/* <!-- Title --> */}
							<h1 className='text-[40px] font-bold'>OffCampus</h1>
							<h3 className='text-xl'>Housing Made Simple</h3>
						</div>
						{/* <!-- Join Button --> */}
						<div className='flex flex-col justify-center items-center text-center -mt-[10px] sd:my-10'>
							<a
								className='py-3 px-10 rounded-xl my-4 text-xl text-background hover:text-primary bg-primary hover:bg-background border border-background hover:border-primary transition-colors duration-300 hover:cursor-pointer'
								id='join-button'
								href='#'
							>
								Get Notified
							</a>
							{/* <script>
							let joinButton =
								document.getElementById('join-button');

							joinButton.addEventListener('click', () => {
								alert('Coming Soon');
							});
						</script> */}
						</div>
					</div>
				</div>

				{/* <!-- About Us --> */}
				<div
					className='flex flex-col justify-center w-[90%] lg:w-[50%] lg:min-h-screen  text-background'
					id='about-us'
				>
					<div className='flex flex-col justify-center items-center lg:min-h-[90%] py-[20px] bg-primary rounded-[25px] md:rounded-[50px] lg:rounded-l-[60px] lg:rounded-r-[0px]'>
						<h1 className='text-[42px] md:text-[50px] font-bold mb-[16px] lg:mb-[30px]'>
							About Us
						</h1>
						<p className='text-center text-[16px] lg:text-[18px] items-center pb-[10px] lg:pb-[30px] max-w-[80%] xl:px-10'>
							{/* Welcome to OffCampus, your premier destination for
							finding off-campus housing solutions tailored to
							your needs.  */}
							{/* <br></br>
							<br></br>  */}
							At OffCampus, we understand the challenges students
							face when seeking accommodations that align with
							their budget, preferences, and lifestyle.
							That&apos;s why we&apos;ve developed a revolutionary
							platform that simplifies the housing search process
							and fosters community connections. <br></br>
							<br></br>Our mission is to empower students and
							residents to find their ideal living spaces while
							building meaningful connections within their
							communities. <br></br>
							<br></br>Whether you&apos;re a university student
							preparing for the next academic year or a young
							professional searching for your next home, OffCampus
							is here to make the process seamless and enjoyable.
							<br></br>
							<br></br>Join us in reimagining the way we find and
							experience off-campus housing. Welcome to OffCampus,
							where your perfect home awaits.
						</p>
					</div>
				</div>
			</div>
			{/* <!-- Meet the Team --> */}
			<div className='flex flex-col justify-center items-center w-full'>
				{/* <!-- Title --> */}
				<div className='w-full h-[100px] justify-center items-center flex my-2'>
					<h2 className='text-[36px] sd:text-[42px] md:text-[50px] font-bold text-text'>
						Meet The Team
					</h2>
				</div>
				{/* <!-- Moises --> */}
				<div className='flex flex-col-reverse items-center lg:flex-row w-[90%] md:w-[90%] lg:w-full my-2 lg:bg-background'>
					{/* Content */}
					<div className='flex-1 h-[400px] xl:h-[420px] bg-primary text-background rounded-[25px] md:rounded-[50px] lg:rounded-l-[0px] justify-start items-center flex flex-col py-[16px] md:py-[30px]'>
						{/* <!-- Text --> */}
						<div className='flex flex-col items-center w-full'>
							<div className='flex flex-col items-center md:flex-row'>
								<h3 className='text-[30px] font-bold'>
									Moises
								</h3>
								<h3 className='text-[30px] font-bold md:ml-2 -mt-[10px] md:mt-0'>
									Ramirez Gomez
								</h3>
							</div>
							<h4 className='text-[20px] font-[500] text-center sd:max-w-[60%]'>
								Co-founder & Business Strategist
							</h4>
						</div>
						<p className='flex-1 w-[86%] max-w-[650px] text-[16px] md:text-[18px] lg:text-[20px] text-center items-center flex pt-[14px] lg:pt-0 lg:mb-[20px]'>
							Bringing expertise in international business and
							strategic planning, Moises plays a pivotal role in
							shaping OffCampus&apos;s growth trajectory. As a
							co-founder, Moises ensures that OffCampus remains at
							the forefront of the housing market, with a keen eye
							for market trends and a dedication to user
							satisfaction.
						</p>
					</div>
					{/* <!-- Image --> */}
					<div className='justify-center flex mb-[20px] lg:mb-0 sd:w-[90%] md:w-[420px] lg:w-[400px] xl:w-[420px] mx-10'>
						<Image
							src={moises}
							width={420}
							height={420}
							className='rounded-[50px]'
							alt='Co-founder Moises Ramirez Gomez'
						/>
					</div>
				</div>
				{/* <!-- Alexandru --> */}
				<div className='flex flex-col items-center lg:flex-row w-[90%] md:w-[90%] lg:w-full mt-10 lg:bg-background'>
					{/* <!-- Image --> */}
					<div className='justify-center flex mb-[20px] lg:mb-0 sd:w-[90%] md:w-[420px] lg:w-[400px] xl:w-[420px] mx-10'>
						<Image
							src={alexandru}
							width={420}
							height={420}
							className='rounded-[25px] md:rounded-[50px]'
							alt='Co-founder Alexandru Muresan'
						/>
					</div>
					{/* Content */}
					<div className='flex-1 h-[400px] xl:h-[420px] bg-primary text-background rounded-[25px] md:rounded-[50px] lg:rounded-r-[0px] justify-start items-center flex flex-col py-[30px]'>
						{/* <!-- Text --> */}
						<div className='flex flex-col items-center w-full'>
							<div className='flex flex-col items-center sd:flex-row'>
								<h3 className='text-[30px] font-bold'>
									Alexandru
								</h3>
								<h3 className='text-[30px] font-bold sd:ml-2 -mt-[10px] sd:mt-0'>
									Muresan
								</h3>
							</div>
							<h4 className='text-[20px] font-[500] text-center max-w-[60%]'>
								Co-founder & Lead Developer
							</h4>
						</div>
						<p className='flex-1 w-[86%] max-w-[650px] text-[16px] md:text-[18px] lg:text-[20px] text-center items-center flex pt-[14px] lg:pt-0 lg:mb-[20px]'>
							With a background in computer science and a passion
							for creating innovative solutions, Alexandru brings
							expertise in software development to the OffCampus
							team. As a co-founder and lead developer, Alexandru
							is committed to crafting a user-friendly platform
							that meets the needs of our diverse community of
							users.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
