import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import Icon from '../../data/icons';
//import img from '../../images/breve.jpg'
import mixins from '../../styles/mixins';
import  projectData  from '../../data/projetos';
import {motion} from 'framer-motion'
import {  portfolioAnimation } from '../../styles/animations'
import { useScroll } from '../../hooks/useScroll'

const StyledProjetosSection =styled.section`
    
`;
const ProjectContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    @media (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
    }
`;
const ProjectItem = styled(motion.article)`
    background-color: var(--light-navy);
    padding: 1.3rem;
    border-radius: var(--border-radius);
    border: 1px solid transparent;
    transition: var(--transition);

    &:hover,
    &:focus {
        border-color: var(--green);
        background: transparent;
    }
    p{
        margin: 1.2rem 0 2rem;
    }
    h1{
        margin-top: 1rem;
    }
    .link{
        ${mixins.smallButton}
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .img-back{
        padding: 0;
        margin: 0;
        background-color: var(--green);
        border-radius: var(--border-radius);
    }
    .tech{
        color: var(--green);
        font-family: var(--font-mono);
    }
`;
const ProjectImg = styled.img`
    border-radius: var(--border-radius);
    overflow: hidden;

    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
    background-color: var(--green);

    &:hover,
    &:focus{
        filter: none;
        mix-blend-mode: normal;
    }
    @media (max-width: 1080px) {
        width: auto;
        height: auto;
    }
`;
const ProjectLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Projetos = () => {

  const [element, controls] = useScroll();
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <StyledProjetosSection id='projects' ref={element}>
        <h2 className='numbered-heading'>Meus projetos</h2>
            <ProjectContainer 
                variants={portfolioAnimation}
                animate={controls}
                transition={{delay: 0.5, duration: 0.6, type: "tween"}}
            >
                {projectData &&
                    projectData.map(({id,image, title, description, tech, codeLink, liveLink}) => (
                        <ProjectItem key={id}
                            variants= {item}
                            animate= {controls}
                            >
                            <div className='img-back'>
                            <ProjectImg
                                className='img'
                                src={image}
                                width={300}
                                height={135}
                                //quality={95}
                                formats={['AUTO', 'WEBP', 'AVIF']}
                                alt='Headshot'
                            >                    
                            </ProjectImg>
                            </div>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <p className='tech'>{tech}</p>
                            <ProjectLinks>
                                <Link className='link' href={codeLink}>GitHub<Icon name='GitHub'/></Link>
                                <Link className='link' href={liveLink}>Demo<Icon name='External'/></Link>
                            </ProjectLinks>
                        </ProjectItem>
                    ))
                }
            </ProjectContainer>
    </StyledProjetosSection>
  )
}

export default Projetos