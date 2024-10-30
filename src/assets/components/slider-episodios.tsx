import { useEffect } from "react";

import brincadeiras from '../images/slide-1/brincadeiras.webp'
import desenhosBiblicos from '../images/slide-1/desenhosBiblicos.webp'
import historiasBiblicas from '../images/slide-1/historiasBiblicas.webp'
import historiasEducativas from '../images/slide-1/historiasEducativas.webp'
import historiasNarradas from '../images/slide-1/historiasNarradas.webp'
import musicas from '../images/slide-1/musicas.webp'
import pinkBlue from '../images/slide-1/pinkBlue.webp'
import voceViu from '../images/slide-1/voceViu.webp'

const Panorama = () => {
	useEffect(() => {
		// Adiciona o link CSS externo
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href =
			"https://panorama-slider.uiinitiative.com/assets/index.c1d53924.css";
		document.head.appendChild(link);

		// Adiciona o link de preload do módulo
		const preloadLink = document.createElement("link");
		preloadLink.rel = "modulepreload";
		preloadLink.href =
			"https://panorama-slider.uiinitiative.com/assets/vendor.dba6b2d2.js";
		document.head.appendChild(preloadLink);

		// Adiciona o script externo
		const script = document.createElement("script");
		script.type = "module";
		script.crossOrigin = "anonymous";
		script.src =
			"https://panorama-slider.uiinitiative.com/assets/index.d2ce9dca.js";
		document.body.appendChild(script);

		// Limpeza do script e links ao desmontar
		return () => {
			document.head.removeChild(link);
			document.head.removeChild(preloadLink);
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<div className="panorama-slider">
				<div className="swiper MySwiper">
					<div className="swiper-wrapper">
						<div className="swiper-slide !h-fit">
							<img
								className="slide-image !h-auto"
								src={brincadeiras}
								alt=""
							/>
						</div>
						<div className="swiper-slide !h-fit">
							<img
								className="slide-image !h-auto"
								src={desenhosBiblicos}
								alt=""
							/>
						</div>
						<div className="swiper-slide !h-fit">
							<img
								className="slide-image !h-auto"
								src={historiasBiblicas}
								alt=""
							/>
						</div>
						<div className="swiper-slide !h-fit">
							<img
								className="slide-image !h-auto"
								src={historiasEducativas}
								alt=""
							/>
						</div>
						<div className="swiper-slide !h-fit">
							<img
								className="slide-image !h-auto"
								src={historiasNarradas}
								alt=""
							/>
						</div>
						<div className="swiper-slide !h-fit">
							<img
								className="slide-image !h-auto"
								src={musicas}
								alt=""
							/>
						</div>
						<div className="swiper-slide !h-fit">
							<img
								className="slide-image !h-auto"
								src={pinkBlue}
								alt=""
							/>
						</div>
						<div className="swiper-slide !h-fit">
							<img
								className="slide-image !h-auto"
								src={voceViu}
								alt=""
							/>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		</>
	);
};

export default Panorama;
