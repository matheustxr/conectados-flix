import AOS from 'aos';
import 'aos/dist/aos.css';
import SliderConteudos from './assets/components/slider-conteudos';

AOS.init();

function App() {

  return (
    <>
      <main className='bg-[#DCD6F7] '>
        {/* BANNER */}
        <div className='bg-[#0A2472] text-white'>
          <div className='container mx-auto py-10 px-5 md:px-10 lg:px-14 flex flex-col lg:flex-row-reverse gap-7'>
            <img 
              src="" 
              alt="logo"
              className='lg:hidden w-full max-w-60 h-20 bg-green-600'
            />

            <div className='w-full flex justify-center items-center'>
              <img 
                src="" 
                alt="banner destaque"
                className=' w-full lg:w-1/2 h-80 bg-red-600'
              />
            </div>


            <div className='w-full flex flex-col gap-5'>
              <img 
                src="" 
                alt="logo"
                className='hidden lg:block w-full max-w-60 h-20 bg-green-600'
              />
              <h1 className='text-[26px] md:text-5xl font-semibold uppercase'>
                Você e sua família mais próximos de Deus
              </h1>

              <span className='text-lg'>
                Conteúdos com Linguagem e Imagem Apropriada para Seu Filho
              </span>
            </div> 
          </div>
        </div>


        {/* Hero Section  */}
        <div className='container mx-auto py-10 px-5 md:px-10 lg:px-14 flex flex-col md:flex-row gap-7'>
          <div className='w-full flex flex-col gap-5'>
            <h2 className='text-xl'>
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

          <div className='w-full md:w-1/2'>
            <SliderConteudos/>
          </div>
        </div>


        {/* ONDE E QUANDO QUISER  */}
        <div className='container mx-auto py-10 px-5 md:px-10 lg:px-14'>
          
        </div>
      </main>
    </>
  )
}

export default App
