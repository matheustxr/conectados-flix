
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import conectadosMissao from '../images/slide-2/conectadosMissao.webp'
import jogosExclusivos from '../images/slide-2/jogosExclusivos.webp'
import podcast from '../images/slide-2/podcast.webp'
import videoGames from '../images/slide-2/videoGames.webp'
import voceViu from '../images/slide-2/voceViu.webp'

export default function SliderConteudos() {
	return (
		<Swiper
			spaceBetween={10}
			centeredSlides={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			loop={true}
			slidesPerView={1.2}
			modules={[Autoplay, Pagination]}
			className='!w-full !pb-10'
		>
			<SwiperSlide>
				<img src={conectadosMissao} alt="Slide 1" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={jogosExclusivos} alt="Slide 2" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={podcast} alt="Slide 3" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={videoGames} alt="Slide 4" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={voceViu} alt="Slide 5" />
			</SwiperSlide>
			</Swiper>
	)
}