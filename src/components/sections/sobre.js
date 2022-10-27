import React from 'react'
import styled from 'styled-components'
import img from '../../images/joao.jpg'
import {motion} from 'framer-motion'
import { aboutAnimation } from '../../styles/animations'
import { useScroll } from '../../hooks/useScroll'

const AboutSection = styled.section`
  max-width: 900px;
  
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media only screen and (max-width:768px){
      display: block;
    }
  }
`;

const TextBase = styled.div`
  ul.Skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    
    li{
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 20px;
      }
    }
  }
`;

const ImgContainer = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px){
    margin: 50px auto;
    width: 70%;
  }
  
  .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      outline: 0;
      &:after{
        top: 15px;
        left: 15px;
      }
      .img{
        filter:none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before{
      top: 0;
      left: 0;
      background-color: var(--green);
      mix-blend-mode: screen;
    }
    &:after{
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;
const RightImg = styled.img `
  
`;


const Sobre = () => {
  const skills = ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS']

  const [element, controls] = useScroll();
  return (
    <AboutSection id='about' ref={element}>
        <h2 className="numbered-heading">Sobre Mim.</h2>
        <motion.div 
          className='inner'
          variants={aboutAnimation}
          animate={controls}
          transition={{delay: 0.3, duration: 0.6, type: "tween"}}
          >
          <TextBase>
            <div>
              <p>Formado em analise e desenvolvimento de sistemas e viciado em café, estou em busca de uma oportunidade para entrar no mercado de tecnologia.</p>
              <p>
                Durante meu estagio no TST me apaixonei por front-end onde trabalhei com HTML5, CSS3, JavaScript e Angular, desde entao venho tentando aprimorar ao maximo nessas tecnologias
                com bastante foco na responsividade e experiencia do usuario.
              </p>
              <p>Atualmente focado nessas tecnologias.</p>
            </div>
            <ul className='Skills-list'>
              {skills && skills.map ((skill,i) => <li key={i}>{skill}</li>)}
            </ul>
          </TextBase>
          <ImgContainer>
            <div className='wrapper'>
              <RightImg 
              className='img'
              src={img}
              width={300}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt='Headshot'
              ></RightImg>
            </div>
          </ImgContainer>
        </motion.div>
    </AboutSection>
  )
}

export default Sobre