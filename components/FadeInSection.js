import React from 'react';

export function FadeInSection(props) {
	const [isVisible, setVisible] = React.useState(false);
	const domRef = React.useRef();
	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							setVisible(true);
						}, props.delay || 0); // If no delay prop provided, default to 0
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
		return () => {
			try {
				observer.unobserve(domRef.current);
			} catch (e) {}
		};
	}, []);

	return (
		<div
			className={`${props.direction === 'right' ? 'fade-in-right' : ''} 
            ${props.direction === 'left' ? 'fade-in-left' : ''} 
             ${!props.direction ? 'fade-in-top' : ''} 
            ${isVisible ? 'is-visible' : ''} ${props.width} ${props.style}`}
			ref={domRef}
		>
			{props.children}
		</div>
	);
}
