const myInput = document.querySelector('#myInput')

const myDiv = document.querySelector('#myDiv')

const treasureDiv = document.querySelector('#treasure')
treasureDiv.classList.add('treasure')

const secretButton = document.createElement('button')
secretButton.innerText = 'You found me'
secretButton.classList.add('btn')
secretButton.classList.add('btn-success')

const treasure = document.createElement('img')
treasure.src = 'images/treasure.png'

const legend = document.createElement('p')
legend.innerText = 'El verdadero tesoro son los amigos que hacemos en el camino.'

let isPasswordCorrect = false

myInput.addEventListener('input', () => {
  if (myInput.value === 'plutoisaplanet') {

    myDiv.append(secretButton)
    isPasswordCorrect = true

  } else if (myInput.value === 'vote trump') { 
    while (true) {
      console.error('Oh no')
    }
  } else if (isPasswordCorrect === true) {

    myDiv.removeChild(secretButton)
    isPasswordCorrect = false

  }
})

secretButton.addEventListener('click', () => {

  treasureDiv.append(treasure)
  treasureDiv.append(legend)

})
