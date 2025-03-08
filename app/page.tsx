"use client";

import Link from "next/link";
import Image from "next/image";

const steps = [
	{
		title: "1. Choose template",
		image: "/steps/1.png",
	},
	{
		title: "2. Configure colors",
		image: "/steps/2.png",
	},
	{
		title: "3. Copy code",
		image: "/steps/3.png",
	},
];

export default function Page() {
	return (
		<div className='bg-white'>
			<main className='isolate pb-40'>
				<div className='relative pt-10'>
					<div
						aria-hidden='true'
						className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#b1fffc] to-[#b6fbc3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
						/>
					</div>
					<div className='py-24 sm:py-32'>
						<div className='mx-auto max-w-7xl px-6 lg:px-8'>
							<div className='mx-auto max-w-5xl text-center'>
								<h1 className='text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
									Generate Animated Forms
								</h1>
								<p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
									Quickly generate login forms with animated characters.
									Completely for free.
								</p>
								<div className='mt-14 flex items-center justify-center gap-x-6'>
									<Link
										href='/app'
										className='rounded-md bg-blue-500 px-7 py-4 text-2xl font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
										Get started
									</Link>
								</div>
							</div>
							<div className='mt-16 flow-root sm:mt-24'>
								<div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
									<Link href='/app'>
										<Image
											alt='App screenshot'
											src='/app.png'
											width={1920}
											height={1080}
											className='rounded-md shadow-2xl ring-1 ring-gray-900/10 cursor-pointer hover:scale-95 duration-500'
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div
						aria-hidden='true'
						className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f4e1ac] to-[#11c149] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
						/>
					</div>
				</div>
				<div id='steps' className='relative mt-4'>
					<h2 className='text-3xl sm:text-5xl font-semibold text-center sm:mb-24'>
						How it works
					</h2>
					{steps.map((step, index) => (
						<div
							key={step.title}
							className='grid grid-cols-1 sm:grid-cols-3 mt-16 mx-auto max-w-screen-lg'>
							<div className='my-auto'>
								<h3 className='text-2xl sm:text-4xl font-medium text-gray-600 cursor-pointer hover:text-gray-400 duration-100'>
									{step.title}
								</h3>
							</div>
							<Image
								className='max-w-xl mx-auto sm:col-span-2 rounded-md shadow-2xl ring-4 ring-gray-900/10 hover:scale-110 duration-300'
								src={step.image}
								alt='App screenshot'
								width={800}
								height={600}
							/>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
