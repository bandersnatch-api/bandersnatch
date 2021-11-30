const textElement = document.getElementById('text')
const optionButtens = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text 
      button.classList.add('btn')
      button.addEventListener('click', () => selectoption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return true
}

function selectoption(option) {

}

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and you see a jar of blue goo near you.',
    options: [
      {
        text: 'Take goo',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Leave the goo',
        nextText: 2
      }
    ]
  },
  {
    id: 2
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [ 
      {
        text: 'Tade the goo for a sword',
        requiredState: (currentState) => currentState.blueGoo 
        setState: { blueGoo: false, sword: true },
        nextText: 3 
      },
      {
        text: 'Tade the goo for a sword',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      }
    ]
  }
]

startGame()