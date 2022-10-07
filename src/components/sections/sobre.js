import React from 'react'
import styled from 'styled-components'
import img from '../../images/joao.jpg'

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
  return (
    <AboutSection id='about'>
        <h2 className="numbered-heading">Sobre Mim.</h2>
        <div className='inner'>
          <TextBase>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo facere enim dolorem voluptatibus nulla eum officiis sint earum incidunt possimus, eius quidem, consequatur, id veritatis! Perspiciatis laborum in vero qui.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fuga mollitia aliquam, possimus blanditiis, ab aut quae rem magnam
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex itaque numquam porro officia distinctio dolorem delectus vel similique aspernatur mollitia omnis corporis eius inventore eum suscipit facere assumenda, dolorum expedita?
              </p>
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
        </div>
    </AboutSection>
  )
}

export default Sobre