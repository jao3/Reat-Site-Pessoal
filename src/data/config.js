//import img1 from '../images/joao.jpg'
module.exports = {
    email: 'joaoo.bio@gmail.com',
    socialMedia: [
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/joaoaraujo92/',
        }, 
        {
            name: 'GitHub',
            url: 'https://www.github.com/jao3'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/joao_araujo/'
        },
        {
            name: 'WhatsApp',
            url: 'https://api.whatsapp.com/send?phone=5561982883180&text=Ol%C3%A1!'
        }

    ],
    navLinks: [
        {
          name: 'Sobre',
          url: '/#about',
        },
        {
          name: 'Qualificações',
          url: '/#xp',
        },
        {
          name: 'Projetos',
          url: '/#projects',
        },
        {
          name: 'Contato',
          url: '/#contact',
        },
      ],
    projectData:[

      {
        id: 1,
        title: "Psi-Care",
        //image: {img1},
        description: "Site desenvolvido em HTML, SASS e JavaScript para captação, 100% responsivo.",
        tech: "HTML5 | SASS | JavaScript ",
        codeLink: 'https://www.github.com/jao3',
        liveLink: 'facebook.com',
      },
      {
        id: 2,
        title: "Site Pessoal",
        //image: {img1},
        description: "Site desenvolvido para aprensentação do meu portfolio",
        tech: "React | Styled-components | JavaScript",
        codeLink: 'facebook.com',
        liveLink: 'facebook.com',
      },
      {
        id: 3,
        title: "Em breve",
        //image: {img1},
        description: "O proximo projeto a ser desenvolvido pode ser o seu!",
        tech: "Lorem ipsum dolor sit amet consectetur",
        codeLink: 'facebook.com',
        liveLink: 'facebook.com',
      },
    ],
}