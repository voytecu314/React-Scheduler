//function for css :has selector (not supported in Firefox)

export const isFirefox = () => {
    if(navigator.userAgent.indexOf("Firefox") !== -1 ){
        return true;
    } else {
        return false;
    }
}

export const firefoxCssHasPolyfill = (chevron) => {

    const day = chevron.parentElement.parentElement.parentElement;

    const isFlexBasisUnset = day.style.flexBasis==='unset';
    const isBackgroundGray = day.style.backgroundColor==='gray';
    
    day.style.flexBasis = isFlexBasisUnset?'35px':'unset';
    day.style.backgroundColor = isBackgroundGray?'unset':'gray';
}