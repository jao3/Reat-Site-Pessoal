import React from 'react'
import styled from 'styled-components';
import mixins from '../../styles/mixins';

const ContactContainer = styled.section`
    max-width: 600px;
    margin: 0 auto 100px;
    text-align: center;
    @media (max-width: 768px){
        margin: 0 auto 50px;
    }
    p{
        color: var(--slate);
    }
    .overline {
        display: block;
        margin-bottom: 20px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-md);
        font-weight: 400;

        &:before {
            bottom: 0;
            font-size: var(--fz-sm);
        }
        &:after {
            display: none;
        }
    }
    .title {
        font-size: clamp(40px, 5vw, 50px);
    }
    .email-link {
        ${mixins.bigButton}
        margin-top: 50px;
    }
`;

const Contato = () => {
  return (
    <ContactContainer id='contact'>
        <h2 className='numbered-heading overline'>Qual o proximo passo?</h2>
        <h2 className='title'>Entrar em contato</h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt expedita voluptas voluptatum asperiores fuga. Minima unde ut inventore laborum, hic adipisci nulla dicta ad quas voluptatum nam, iusto sit culpa.
        </p>
        <button className='email-link'>
            Diga olá!
        </button>
    </ContactContainer>
  )
}

export default Contato