import React from 'react'
import PropTypes from 'prop-types'
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa'

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
    }
};

Icon.propTypes ={
    name: PropTypes.string.isRequired
}

export default Icon;