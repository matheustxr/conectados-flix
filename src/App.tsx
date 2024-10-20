import AOS from 'aos';
import Lottie from "lottie-react";

import SliderConteudos from './assets/components/slider-conteudos';
import SliderEpisodios from './assets/components/slider-episodios';
import Button from './assets/components/button';
import CollapseFAQ from './assets/components/collapse-faq';
import SliderPlanos from './assets/components/slider-planos';

import jesus from './assets/images/jesus.webp'
import logo from './assets/images/logo.png'
import garantia from './assets/images/garantia.webp'
import clouds from './assets/animations/clouds.json'
import devices from './assets/animations/devices.json'

import 'aos/dist/aos.css';


AOS.init();

function App() {

  return (
    <>
      <main className='bg-[#00A7E1] text-white '>
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
          
          <div className='relative z-50 container mx-auto pt-10 px-5 md:px-10 lg:px-14 flex flex-col lg:flex-row gap-7'>
            <div className='w-full flex flex-col items-center lg:items-start gap-5'>
              <img 
                src={logo}
                alt="logo"
                className='hidden lg:block lg:w-2/3 mx-auto'
              />
              <h1 className='text-4xl md:text-5xl font-bold uppercase'>
                Sua família mais próxima de Deus
              </h1>

              <span className='text-lg'>
                Conteúdos com Linguagem e Imagem Apropriada para Seu Filho
              </span>

              <Button />
            </div> 

            <div className='w-full flex justify-center items-center'>
              <img 
                src={jesus}
                alt="banner destaque"
                className=' w-full md:w-2/3 '
              />
            </div>
          </div>

          <div className='absolute z-0 bottom-0 w-full overflow-hidden'>
            <Lottie 
              animationData={clouds} 
              loop={true} 
              className='w-[800px] lg:w-full'
            />
            </div>
        </section>


        {/* SLIDE EPISODIOS */}
        <section 
          className='pt-20 pb-10' 
          data-aos="flip-down" 
          data-aos-duration="1500"
        >
          <div className='container mx-auto px-5 md:px-10 lg:px-14'>
            <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-center '>
              Descubra Conteúdos Cristãos e Educativos Exclusivos para Crianças 
            </h2>
          </div>
          
          <SliderEpisodios />

          {/* <div className='mt5 flex justify-center animate-bounce  '>
            <Button />
          </div> */}
        </section>


        {/* ONDE E QUANDO QUISER  */}
        <section className='container mx-auto py-10 px-5 md:px-10 lg:px-14 flex flex-col items-center lg:flex-row'>
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
        <section className='container mx-auto py-10  md:px-10 lg:px-14 flex flex-col md:flex-row gap-7'>
          <div 
            className='px-5 md:px-0 w-full flex flex-col gap-5'
            data-aos="flip-down"
            data-aos-duration="1500"
          >
            <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-center  lg:text-start'>
              O que você irá receber
            </h2>

            <ul className='pl-5 list-decimal'>
              <li>Histórias Bíblicas e Educativas Encenadas;</li>
              <li>Histórias Narradas;</li>
              <li>Vídeos de Game;</li>
              <li>Vlogs;</li>
              <li>Vídeos de Brincadeiras;</li>
              <li>Quiz Bíblico;</li>
              <li>Músicas Cristãs e Educativas;</li>
              <li>Jogos para brincar;</li>
              <li>Materiais de Atividades para baixar e muito mais!</li>
            </ul>
          </div>

          <div className='w-full md:w-1/2 flex md:items-center'>
            <SliderConteudos/>
          </div>
        </section>


        {/* PLANOs */}
        <section className='py-10'>
          <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-center mb-10'>
            Escolha seu Plano
          </h2>

          <SliderPlanos />
        </section>

        {/* GARANTIA */}
        <section className="container mx-auto pt-10 px-5 md:px-10 lg:px-14 flex flex-col lg:flex-row">
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
                Se você não estiver satisfeito com o conteúdo nos primeiros 7 dias, basta cancelar sua assinatura e devolveremos o valor integral;
              </li>
              <li>
                Cancele sua assinatura a qualquer momento de forma rápida e sem complicações, diretamente no painel de controle da sua conta
              </li>
              <li>
                Mesmo se decidir cancelar, você terá acesso total aos nossos conteúdos durante os 7 primeiros dias
              </li>
            </ul>
          </div>

          <div className='w-full flex justify-center items-center'>
            <img 
              src={garantia}
              alt="imagem selo de garantia"
              className='w-full max-w-[400px] animate-pulse'
            />
          </div>
        </section>


        {/* FAQ */}
        <section className='container mx-auto pb-10 px-5 md:px-10 lg:px-14 flex flex-col items-center'>
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
      </main>
    </>
  )
}

export default App