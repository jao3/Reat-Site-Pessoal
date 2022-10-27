export const homeAnimation = {
    hidden: {y: -200, opacity: 0.01},
    show: { y: 0, opacity: 1 },
}

export const aboutAnimation = {
    hidden: {y: 200, opacity: 0.01},
    show: {y: 0, opacity: 1},
}

export const qualificationtAnimation = {
    hidden: {y: 200, opacity: 0.01},
    show: {y: 0, opacity: 1},
}

export const experienceAnimation = {
    hidden: {y: 200, opacity: 0.01},
    show: {y: 0, opacity: 1},
}

export const portfolioAnimation = {
    hidden: { opacity: 1, scale: 0 },
    show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const contactAnimation = {
    hidden: {y: 200, opacity: 0.01},
    show: {y: 0, opacity: 1},
}

export const navAnimation ={
    hidden: { opacity: 1, y: 200 },
    show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}