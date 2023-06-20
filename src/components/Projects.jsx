import React from 'react'
import foto from "../assets/sitecoin.jpg"
import foto2 from "../assets/sitevans2.jpg"
import foto3 from "../assets/sitemovies.jpg"
import foto4 from "../assets/sitecarstar.jpg"
import ProjectCardRight from './projectCardRight';
import ProjectCardLeft from './projectCardLeft';




export default function Projects() {
  return (
    <div id='projects' className='container  grid grid-cols-1 gap-10 items-center justify-center mt-20 m-auto'>
    <h1 className='mt-14 text-slate-600 text-center  font-bold text-4xl mx-auto '>Projects</h1>
      <ProjectCardRight
        link="https://kaiodeodato.github.io/coinworld/"
        image={foto}
        title='Coin World'
        content='Coinworld is a website that allows users to search for information about various cryptocurrencies in real-time. The website is designed to provide users with accurate and up-to-date information about the price, market cap, trading volume, and other key metrics of cryptocurrencies.'
        tech='React.js • Tailwind • Router Dom • react-icons • RestApi • Json • HTML5 • Javascript • CSS3'
      />
      <ProjectCardLeft
        link="https://vansshopclone.web.app/"
        image={foto2}
        title='Vans Store Clone'
        content='A Vans store clone in React.js,a multi-page web application that replicates the online shopping experience of a Vans store. It utilizes React.js as the front-end library to create a dynamic and responsive user interface.'
        tech='Bootstrap • React.js • HTML5 • Javascript • CSS3 • JSON • Styled Components • RestApi • Nanoid'
      />
       <ProjectCardRight
          link="https://teste-8e6a1.web.app/"
          image={foto3}
          title='Movie List'
          content='Entertainment movies website. Content includes releases, synopsis, trailers and screen stars. It has an extensive database with over 135,000 films and series. The site has daily automatic updates as well as showing trailers.'
          tech='Styled Components • React.js • HTML5 • Javascript • CSS3 • JSON • Router Dom • Bootstrap • RestApi • Firebase'
      />
      <ProjectCardLeft
        link="https://kaiodeodato.github.io/carstar"
        image={foto4}
        title='Car Star'
        content='CarStar is a portfolio website that presents a car rental service designed to provide a seamless and hassle-free experience. With a clean and modern interface, CarStar offers visitors a user-friendly platform to explore an extensive fleet of cars, make reservations, and access all the necessary information they need to rent a car.'
        tech='React.js • HTML5 • Javascript • Tailwind • CSS3 • JSON • Router Dom • RestApi'
      />
      
    </div>
  )
}
