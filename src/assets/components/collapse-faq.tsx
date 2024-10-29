import { Collapse } from "antd";
import type { CollapseProps } from 'antd';

export default function CollapseFAQ(){

	const faqItems: CollapseProps['items'] = [
		{
		  key: '1',
		  label: 'Quais dispositivos posso usar para acessar a plataforma?',
		  children: (
			<p>
              A plataforma é compatível com todos os principais dispositivos móveis, como smartphones, tablets, e computadores.
              Além disso, também podemos acessar a plataforma em um computador com uma conexão Wi-Fi.
            </p>	
		  ),
		},
		{
		  key: '2',
		  label: 'Preciso de internet para assistir aos vídeos?',
		  children: (
			<p>
			  Sim, é necessário estar conectado à internet para acessar os vídeos da plataforma. 
			  No entanto, estamos desenvolvendo uma funcionalidade para permitir o download de alguns 
			  conteúdos e assisti-los offline.
			</p>
		  ),
		},
		{
		  key: '3',
		  label: 'Posso compartilhar minha conta com outros membros da família?',
		  children: (
			<p>
			  Sim, com a assinatura, você pode acessar a plataforma em até 3 dispositivos simultaneamente, 
			  o que permite que diferentes membros da família usem a conta ao mesmo tempo.
			</p>
		  ),
		},
		{
		  key: '4',
		  label: 'Quais tipos de conteúdo estão disponíveis?',
		  children: (
			<p>
			  A plataforma oferece uma variedade de conteúdos cristãos e educativos para crianças, 
			  incluindo histórias bíblicas encenadas, músicas, vídeos de jogos, quizzes, e muito mais.
			</p>
		  ),
		},
		{
		  key: '5',
		  label: 'Existe um período de teste gratuito?',
		  children: (
			<p>
			  Atualmente, não oferecemos um período de teste gratuito. No entanto, nossos planos são acessíveis 
			  e oferecem conteúdos exclusivos e de qualidade para toda a família.
			</p>
		  ),
		},
		{
		  key: '6',
		  label: 'Como faço para cancelar minha assinatura?',
		  children: (
			<p>
			  Você pode cancelar sua assinatura a qualquer momento acessando sua conta no site, indo à seção 
			  de "Configurações de Conta" e selecionando a opção de cancelamento.
			</p>
		  ),
		},
		{
		  key: '7',
		  label: 'Os vídeos são seguros para todas as idades?',
		  children: (
			<p>
			  Sim, todos os vídeos da nossa plataforma são cuidadosamente selecionados para garantir que sejam 
			  adequados para crianças, com temas cristãos e educativos.
			</p>
		  ),
		},
	];

	return (
		<Collapse items={faqItems} defaultActiveKey={['1']} className="w-full !text-white border-none" />
	)
}