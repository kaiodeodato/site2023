import React, { useEffect } from 'react';
import 'react-lazy-load-image-component/src/effects/opacity.css';

// Importe todas as suas imagens aqui
import foto from "../assets/sitecoin.jpg";
import foto2 from "../assets/sitevans2.jpg";
import foto3 from "../assets/sitemovies.jpg";
import foto4 from "../assets/sitecarstar.jpg";
import foto5 from "../assets/opencode.png";
import foto6 from "../assets/siteeagle.png";
import foto7 from "../assets/dash.png";
import ProjectCardRight from './projectCardRight';
import ProjectCardLeft from './projectCardLeft';

export default function Projects() {
  // Função para pré-carregar as imagens
  const preloadImages = (images) => {
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  };

  useEffect(() => {
    // Array contendo todas as URLs das imagens
    const imagesToPreload = [foto, foto2, foto3, foto4, foto5, foto6, foto7];

    // Chama a função para pré-carregar as imagens
    preloadImages(imagesToPreload);
  }, []);

  return (
    <div id='projects' className='container grid grid-cols-1 gap-10 items-center justify-center mt-20 m-auto'>
      <h1 className='mt-14 text-slate-600 text-center font-bold text-4xl mx-auto'>Projects</h1>
      <ProjectCardRight
        link="https://kaiodeodato.github.io/coinworld/"
        image={foto}
        title='Coin World'
        content='Coinworld is a website that allows users to search for information about various cryptocurrencies in real-time...'
        tech='Typescript • React.js • Tailwind • Router Dom • react-icons • RestApi • Json • HTML5  • CSS3'
        git='https://github.com/kaiodeodato/coinworld'
      />
      <ProjectCardLeft
        link="https://vansshopclone.web.app/"
        image={foto2}
        title='Vans Store Clone'
        content='A Vans store clone in React.js, a multi-page web application that replicates the online shopping experience of a Vans store...'
        tech='Bootstrap • React.js • HTML5 • Javascript • CSS3 • JSON • Styled Components • RestApi • Nanoid'
        git='https://github.com/kaiodeodato/vansshopclone'
      />
      <ProjectCardRight
        link="https://dash.kaiodeodato.com/"
        image={foto7}
        title='Dashboard TradeBoard'
        content="Construction of a portal for monitoring and analyzing investments in shares, including interactive dashboard..."
        tech='Php • React.js • SQL • Javascript • HTML5 • CSS3 • Cpanel • RestFul API • TailwindCSS • Material UI'
        git='https://github.com/kaiodeodato/dashtrade'
        smallPic={true}
        other='https://dashapi.kaiodeodato.com/'
      />
      <ProjectCardLeft
        link="https://kaiodeodato.github.io/carstar"
        image={foto4}
        title='Car Star'
        content='CarStar is a portfolio website that presents a car rental service designed to provide a seamless and hassle-free experience...'
        tech='React.js • HTML5 • Javascript • Tailwind • CSS3 • JSON • Router Dom • RestApi'
        git='https://github.com/kaiodeodato/carstar'
      />
      <ProjectCardRight
        link="http://opencode.somee.com/"
        image={foto5}
        title='Open Code'
        content="Project using the ASP.NET Core stack to maintain control and organization over important topics throughout my career..."
        tech='Tailwind • DotNet • MongoDB • C# • Javascript • CSS3 • HTML5 • JSON'
        git='https://github.com/kaiodeodato/OpenCode'
      />
      <ProjectCardLeft
        link="https://kaiodeodato.github.io/ShakeBlazor"
        image={foto6}
        title='Eagle Plataform'
        content="Advertising website project made in two parts, the first is a graphql endpoint built with node and apollo server in the back end..."
        tech='DotNet • Blazor • GraphQL • Strawberry Shake • Apollo Server • Node.js • MongoDB • C# • Javascript • CSS3 • HTML5 • JSON'
        git='https://github.com/kaiodeodato/ShakeBlazor'
        other='https://nodegraphql-tog7.onrender.com'
      />
      <ProjectCardRight
        link="https://teste-8e6a1.web.app/"
        image={foto3}
        title='Movie List'
        content='Entertainment movies website. Content includes releases, synopsis, trailers and screen stars. It has an extensive database with over 135,000 films and series...'
        tech='Styled Components • React.js • HTML5 • Javascript • CSS3 • JSON • Router Dom • Bootstrap • RestApi • Firebase'
        git='https://github.com/kaiodeodato/MoviesList'
      />
    </div>
  )
}
