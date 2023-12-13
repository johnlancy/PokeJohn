'use client';

import Button from '@/components/Button';
import { useState } from 'react';

export default function Page() {
	const [count, setCount] = useState(0);

	function handleAdd(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		setCount(count + 1);
	}

	function handleSub(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		if (count === 0) return;
		setCount(count - 1);
	}

	return (
		<div className='flex flex-col items-center gap-5'>
			{count}
			<div className='flex gap-5'>
				<Button buttonText='Sub' onClick={(e) => handleSub(e)} />
				<Button buttonText='Add' onClick={(e) => handleAdd(e)} />
			</div>
		</div>
	);
}
