import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


export default function SliderPlanos() {
	return (
		<Swiper
			slidesPerView={1.3}
			centeredSlides={true}
			initialSlide={1}
			spaceBetween={10}
			breakpoints={{
				768: {
					slidesPerView: 2,
					centeredSlides: true,
					initialSlide: 0,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 10,
					centeredSlides: true,
					initialSlide: 1,
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 50,
					centeredSlides: true,
					initialSlide: 1,
				},
			}}
			className="swiper-planos"
		>
			<SwiperSlide className=''>
				<div className='w-full max-w-[300px] min-h-[377px]  text-black bg-white rounded-xl'>
					<div className='px-5 py-5 flex justify-center items-center bg-[#0a2472] rounded-t-xl'>
						<span className='text-xl font-extrabold uppercase text-white'>
							12 meses
						</span>
					</div>
					<div className='px-5 pt-5 pb-7'>
						<div className='flex justify-center'>
							<span className='text-5xl md:text-[44px] lg:text-5xl font-bold text-[#0a2472] '>
								R$ 25,90
							</span>
						</div>
						
						<hr className='my-5 border-black'/>
						
						<ul className='pl-5 list-disc'>
							<li>Acesso em 1 dispositivo;</li>
							<li>Conteúdos exclusivos de histórias bíblicas, músicas, vídeos de brincadeiras e mais;</li>
						</ul>

						<div className='mt-10 flex justify-center'>
							<a 
								href="http://" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-fit px-4 py-2.5 text-lg text-center md:text-xl text-white hover:text-[#0A2472] font-semibold uppercase bg-[#0A2472] hover:bg-white rounded-2xl transition-all"
							>
								acessar plataforma
							</a>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div className='w-full max-w-[300px] min-h-[377px]  text-black bg-white rounded-xl'>
					<div className='px-5 py-5 flex justify-center items-center bg-[#0a2472] rounded-t-xl'>
						<span className='text-xl font-extrabold uppercase text-white'>
						6 meses
						</span>
					</div>
					<div className='px-5 pt-5 pb-7'>
						<div className='flex justify-center'>
							<span className='text-5xl md:text-[44px] lg:text-5xl font-bold text-[#0a2472] '>
								R$ 30,90
							</span>
						</div>
						
						<hr className='my-5 border-black'/>
						
						<ul className='pl-5 list-disc'>
							<li>Acesso em até 3 dispositivos simultâneos;</li>
							<li>Todos os benefícios do Plano Essencial;</li>
						</ul>

						<div className='mt-10 flex justify-center'>
							<a 
								href="http://" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-fit px-4 py-2.5 text-lg text-center md:text-xl text-white hover:text-[#0A2472] font-semibold uppercase bg-[#0A2472] hover:bg-white rounded-2xl transition-all"
							>
								acessar plataforma
							</a>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div className='w-full max-w-[300px] min-h-[377px]  text-black bg-white rounded-xl'>
					<div className='px-5 py-5 flex justify-center items-center bg-[#0a2472] rounded-t-xl'>
						<span className='text-xl font-extrabold uppercase text-white'>
						mensal <span className='text-sm'>(PIX)</span>
						</span>
					</div>
					<div className='px-5 pt-5 pb-7'>
						<div className='flex justify-center'>
							<span className='text-5xl md:text-[44px] lg:text-5xl font-bold text-[#0a2472] '>
								R$ 34,90
							</span>
						</div>
						
						<hr className='my-5 border-black'/>
						
						<ul className='pl-5 list-disc'>
							<li>Acesso em até 5 dispositivos simultâneos;</li>
							<li>Acesso a conteúdos exclusivos e novos lançamentos;</li>
							<li>Função de download para assistir offline</li>
						</ul>

						<div className='mt-10 flex justify-center'>
							<a 
								href="http://" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-fit px-4 py-2.5 text-lg text-center md:text-xl text-white hover:text-[#0A2472] font-semibold uppercase bg-[#0A2472] hover:bg-white rounded-2xl transition-all"
							>
								acessar plataforma
							</a>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}