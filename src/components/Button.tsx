interface Props {
	buttonText: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({ buttonText, onClick }: Props) {
	return (
		<button
			className='bg-blue-800 w-fit px-3 py-2 rounded-md hover:bg-blue-400 transition-all duration-200 ease-in-out'
			type='button'
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
}
