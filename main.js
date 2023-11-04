import { v4 as uuidv4 } from 'uuid';

import { getLocalStorageValue, setLocalStorageKey, getPalettes, setPalettes, addPalette, initPalettesIfEmpty } from './data-store'
console.log(uuidv4())

class displayPalette {
  constructor(paletteName, color1, color2, color3, temp){
    this.uuid = uuidv4(),
    this.title = paletteName,
    this.colors = [color1, color2, color3],
    this.temp = temperature
  }
}

const submitFormHandler = (event) => {
  event.preventDefault()
  const form = document.getElementById("palette-form")
  const formData = new formData(form)

  const obj = Object.fromEntries(formData)

  const newDisplay = new displayPalette(obj.paletteName, obj.color1, obj.color2, obj.color3, obj.temperature)

  addPalette(newDisplay);
}

const button = document.getElementById("button")

// button.addEventListener('click', handleEvent)

console.log(getPalettes())
