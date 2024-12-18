import AOS from 'aos';
import Lottie from "lottie-react";

import SliderConteudos from './assets/components/slider-conteudos';
import SliderEpisodios from './assets/components/slider-episodios';
import Button from './assets/components/button';
import CollapseFAQ from './assets/components/collapse-faq';
import SliderPlanos from './assets/components/slider-planos';

import clouds from './assets/animations/clouds.json'
import devices from './assets/animations/devices.json'

import banner from './assets/images/banner.webp'
import logo from './assets/images/logo.png'
import garantia from './assets/images/garantia.webp'
import jogos from './assets/images/jogos.webp'

import 'aos/dist/aos.css';


AOS.init();

function App() {

  return (
    <>
      <main className='bg-[#00A7E1] text-white overflow-x-hidden'>
        {/* BANNER */}
        <section 
          className='min-h-[700px] lg:min-h-[600px] pt-10 pb-3 text-white relative lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] lg:bg-[position:calc(100%_+_250px)_top] xl:bg-[position:calc(100%_+_300px)_top] from-yellow-100 to-[#00A7E1] to-40%'
          data-aos="fade-up"
          data-aos-duration="1500"
        >
            <img 
              src={logo}
              alt="logo"
              className='lg:hidden mx-auto pt-10 w-[90%]'
            />
          
          <div className=' container mx-auto pt-10 px-5 md:px-10 lg:px-14 2xl:px-20 flex flex-col lg:flex-row gap-7'>
            <div className='relative z-50 w-full flex flex-col items-center lg:items-start gap-5'>
              <img 
                src={logo}
                alt="logo"
                className='hidden lg:block lg:w-2/3 mx-auto'
              />
              <h1 className='text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold uppercase text-center lg:text-start'>
                Uma plataforma exclusiva composta por famílias de youtubers cristãos
              </h1>

              <span className='text-lg text-center lg:text-start'>
                Conteúdos com Linguagem e Imagem Apropriada para seu fiilho.
              </span>

              <Button />
            </div> 

            <div className='w-full flex justify-center items-center'>
              <img 
                src={banner}
                alt="banner destaque"
                className=' w-full  mb-20'
              />
            </div>
          </div>

          <div className='absolute z-20 -bottom-5 md:bottom-0 w-full overflow-hidden'>
            <Lottie 
              animationData={clouds} 
              loop={true} 
              className='w-[800px]  lg:w-full'
            />
            </div>
        </section>


        {/* SLIDE EPISODIOS */}
        <section 
          className='pt-20 pb-10 ' 
          data-aos="flip-down" 
          data-aos-duration="1500"
        >
          <div className='container mx-auto px-5 md:px-10 lg:px-14 2xl:px-20'>
            <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-center '>
              Descubra Conteúdos Cristãos e Educativos Exclusivos para Crianças 
            </h2>
          </div>
          
          <SliderEpisodios />
        </section>

        
        {/* VIDEO APRESENTAÇÃO */}
        <section className='px-5'>
          <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-center'>
            Uma rápida prévia do que você vai encontrar
          </h2>

          <iframe
            className="mx-auto mt-10 w-full h-[200px] md:max-w-[600px] md:h-[350px] lg:max-w-[700px] lg:h-[415px] xl:max-w-[1000px] xl:h-[515px]"
            src="https://www.youtube.com/embed/kPa7bsKwL-c?si=aNQxXABZbU_IqV3s"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </section>


        {/* ONDE E QUANDO QUISER  */}
        <section className='container mx-auto py-10 px-5 md:px-10 lg:px-14 2xl:px-20 flex flex-col items-center lg:flex-row'>
          <div 
            className='w-full flex flex-col justify-center gap-5'
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-center'>
              Assista Onde e Quando Quiser
            </h2>
            <p>
              Aproveite a liberdade de assistir aos melhores conteúdos cristãos, onde e quando quiser, diretamente no seu celular, tablet, computador ou TV.
            </p>

            <ul className='pl-5 list-disc'>
              <li>
                <strong>Disponível em qualquer dispositivo:</strong> Acesse a nossa plataforma em smartphones, tablets, notebooks e smart TVs.
              </li>

              <li>
                <strong>Assista a qualquer hora:</strong> Tenha seus conteúdos favoritos disponíveis 24 horas por dia, 7 dias por semana.
              </li>

              <li>
                <strong>Experiência multiplataforma:</strong> Inicie um vídeo em um dispositivo e continue de onde parou em outro.
              </li>
            </ul>

            <div className='flex justify-center '>
              <Button />
            </div>
          </div>
          
          <div>
            <Lottie 
              animationData={devices} 
              loop={true} 
              className=''
            />
          </div>
        </section>


        {/* BENEFICIOS */}
        <section className='container mx-auto py-10  md:px-10 lg:px-14 2xl:px-20 flex flex-col md:flex-row gap-7'>
          <div 
            className='px-5 md:px-0 w-full flex flex-col gap-5'
            data-aos="flip-down"
            data-aos-duration="1500"
          >
            <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-center  lg:text-start'>
              O que você irá encontrar
            </h2>

            <ul className='pl-5 list-decimal'>
              <li>Histórias Bíblicas e Educativas Encenadas;</li>
              <li>Histórias Narradas;</li>
              <li>Vídeos de Game;</li>
              <li>Vlogs;</li>
              <li>Vídeos de Brincadeiras;</li>
              <li>Quiz Bíblico;</li>
              <li>Músicas Cristãs e Educativas;</li>
              <li>Vídeos de curiosidades;</li>
              <li>Desenhos bíblicos.</li>
            </ul>
          </div>

          <div className='w-full md:w-1/2 flex md:items-center'>
            <SliderConteudos/>
          </div>
        </section>

        
        {/* JOGOS EXCLUSIVOS */}
        <section className='container mx-auto py-10 px-5 md:px-10 lg:px-14 2xl:px-20 flex flex-col lg:flex-row gap-10'>
          <div className='w-full flex flex-col gap-5'>
            <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-center  lg:text-start'>
              Jogos exclusivos dentro da plataforma!
            </h2>

            <p>
            Na nossa plataforma, as crianças podem aproveitar jogos interativos com temas cristãos e educativos, unindo diversão e aprendizado em um ambiente seguro e estimulante.
            </p>
          </div>

          <img 
            src={jogos}
            alt="" 
            className='w-full lg:w-1/2'
          />
        </section>


        {/* PLANOs */}
        <section className='py-10'>
          <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-center mb-10'>
            Escolha seu Plano
          </h2>

          <SliderPlanos />
        </section>

        {/* GARANTIA */}
        <section className="container mx-auto pt-10 px-5 md:px-10 lg:px-14 2xl:px-20 flex flex-col md:flex-row">
          <div 
            className="w-full flex flex-col justify-center gap-5"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-center md:text-start">Garantia de Satisfação 100%</h2>

            <p className="">
              Estamos tão confiantes na qualidade do nosso conteúdo que oferecemos uma garantia de satisfação total para todos os nossos assinantes.
            </p>

            <ul className='pl-5 list-disc'>
              <li>
                Se você não estiver satisfeito com o conteúdo nos primeiros 7 dias, basta cancelar sua assinatural;
              </li>
              <li>
                Cancele sua assinatura a qualquer momento de forma rápida e sem complicações, diretamente no painel de controle da sua conta
              </li>
            </ul>
          </div>

          <div className='mt-5 md:mt-0 w-full flex justify-center items-center'>
            <img 
              src={garantia}
              alt="imagem selo de garantia"
              className='w-auto max-h-[400px] animate-pulse'
            />
          </div>
        </section>


        {/* FAQ */}
        <section className='container mx-auto pb-10 px-5 md:px-10 lg:px-14 2xl:px-20 flex flex-col items-center'>
          <div className=" lg:max-w-[500px] xl:max-w-none relative mr-4 2xl:mr-10 ">
            <div className="relative z-0">
              <h1 className=" text-[170px] sm:text-[200px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-bold text-center text-white">
                FAQ
              </h1>
            </div>

            
              <h1 className="absolute top-[50%] z-10 w-full text-2xl lg:text-3xl text-black font-bold text-center">
                PERGUNTAS FREQUENTES
              </h1>
            
          </div>

          <CollapseFAQ />
        </section>

        <footer className='w-[80%] mx-auto py-10 text-center border-t-2'>
          © 2024 CONECTADOSPRIME - Todos os direitos reservados.
        </footer>
      </main>
    </>
  )
}

export default App