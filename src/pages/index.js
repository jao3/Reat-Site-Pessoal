import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import Hero from "../components/sections/hero";
import Sobre from "../components/sections/sobre"
import Contato from "../components/sections/contato"
import propTypes from "prop-types";
import Trabalhos from "../components/sections/trabalhos";
import Projetos from "../components/sections/projetos";
import { motion } from "framer-motion";

const StyledMainContainer = styled.main `
  counter-reset: section;
`;

const IndexPage = ({location}) => (
  <motion.div initial= 'hidden' animate= "show">
  <Layout location = {location}>
        <StyledMainContainer>
          <Hero />
          <Sobre />
          <Trabalhos />
          <Projetos />
          <Contato />
        </StyledMainContainer>
  </Layout>
  </motion.div>
)

IndexPage.protoTypes = {
  location: propTypes.object.isRequired,
};

export default IndexPage
