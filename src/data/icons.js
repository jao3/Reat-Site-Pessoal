import React from 'react'
import PropTypes from 'prop-types'
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram, FaExternalLinkAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Icon = ({name}) => {
    switch (name){
        case 'GitHub':
            return <FaGithub />
        case 'Linkedin':
            return <FaLinkedinIn />
        case 'Instagram':
            return <FaInstagram />
        case 'WhatsApp':
            return <FaWhatsapp />
        case 'External':
            return <FaExternalLinkAlt/>
        case 'Experience':
            return <FaBriefcase/>
        case 'Education':
            return <FaGraduationCap/>
    }
};

Icon.propTypes ={
    name: PropTypes.string.isRequired
}

export default Icon;