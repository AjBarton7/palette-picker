import palettes from './palettes.json'
console.log(palettes); // It's now regular JS code!

export const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageValue = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch {
        console.log(err)
    }
}

export const getPalettes = () => {
    return getLocalStorageValue('palettes') || []
}

export const setPalettes = (newPalettes) => {
    setLocalStorageKey('palettes', newPalettes)
}

export const addPalette = (newPalette) => {
    setPalettes ([newPalette, ...getPalettes()])
}


export const initPalettesIfEmpty = () => {
if(!getPalettes().length) setPalettes(defaultPalettes)
}

