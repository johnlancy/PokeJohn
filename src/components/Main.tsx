interface Props {
	children: React.ReactNode;
}

export default function Main({ children }: Props) {
	return <main className='w-full flex flex-col p-5 max-w-7xl mx-auto pt-24'>{children}</main>;
}
