import React from 'react';

export function FadeInSection(props) {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef();
	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							setVisible(true);
						}, props.delay || 0); // If no delay prop provided, default to 0
					} else {
						setVisible(false);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.1
			}
		);
		observer.observe(domRef.current);
		return () => observer.unobserve(domRef.current);
	}, []);

	return (
		<div
			className={`${props.direction === 'right' ? 'fade-in-right' : ''} 
            ${props.direction === 'left' ? 'fade-in-left' : ''} 
             ${!props.direction ? 'fade-in-top' : ''} 
            ${isVisible ? 'is-visible' : ''} ${props.width} `}
			ref={domRef}
		>
			{props.children}
		</div>
	);
}
