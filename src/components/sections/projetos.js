import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import Icon from '../../data/icons';
import img from '../../images/Site.jpg'
import mixins from '../../styles/mixins';
import { projectData } from '../../data/config';

const StyledProjetosSection =styled.section`
    
`;
const ProjectContainer = styled.div`
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
const ProjectItem = styled.article`
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
    filter: contrast(1);
    transition: var(--transition);
    background-color: var(--green);

    &:hover,
    &:focus{
        mix-blend-mode: normal;
    }
    
`;
const ProjectLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Projetos = () => {

  return (
    <StyledProjetosSection>
        <h2 className='numbered-heading'>Alguns dos meus projetos</h2>
            <ProjectContainer>
                {
                    projectData.map(({id, title, description, tech, codeLink, liveLink}) => (
                        <ProjectItem key={id}>
                            <div className='img-back'>
                            <ProjectImg
                                className='img'
                                src={img}
                                width={300}
                                quality={95}
                                formats={['AUTO', 'WEBP', 'AVIF']}
                                alt='Headshot'
                            >                    
                            </ProjectImg>
                            </div>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <p className='tech'>{tech}</p>
                            <ProjectLinks>
                                <Link className='link'>GitHub<Icon name='GitHub'/></Link>
                                <Link className='link'>Demo<Icon name='External'/></Link>
                            </ProjectLinks>
                        </ProjectItem>
                    ))
                }
            </ProjectContainer>
    </StyledProjetosSection>
  )
}

export default Projetos