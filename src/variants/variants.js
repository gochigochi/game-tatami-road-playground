const slideUp = {
    initial: {
        opacity: 0,
        y: 5,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -1,
    }
}

const popIn = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
        transition: {
            duration: .3,
            type: "spring",
            bounce: .4,
        }
    },
    exit: {
        scale: 0,
        transition: {
            duration: .3,
            type: "spring",
            bounce: .4,
        }
    }
}

const bubblePop = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
        transition: {
            duration: .3,
            type: "spring",
            bounce: .4,
        }
    },
    exit: {
        scale: 0,
        transition: {
            duration: .3,
            type: "spring",
            bounce: .4,
        }
    }
}


export { slideUp, popIn, bubblePop}