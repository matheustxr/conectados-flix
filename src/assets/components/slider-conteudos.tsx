
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

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
				<img src="https://via.placeholder.com/800x400?text=Image+1" alt="Slide 1" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://via.placeholder.com/800x400?text=Image+2" alt="Slide 2" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://via.placeholder.com/800x400?text=Image+3" alt="Slide 3" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://via.placeholder.com/800x400?text=Image+4" alt="Slide 4" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://via.placeholder.com/800x400?text=Image+5" alt="Slide 5" />
			</SwiperSlide>
			</Swiper>
	)
}