const MOTO_CARD = [
    {
        title: "Scooter Elétrica Voltz EV1",
        paragraph:
          "O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        img: "img/scooter.svg",
      },
      {
        title: "Honda CB 500X",
        paragraph:
          "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        img: "img/cb500.svg",
      },   
]

const cardsElements = document.querySelectorAll('#container li')
const modalElement = document.querySelector('#modal')

let index = 0

const INTERVAL = 5000

function show(num) {
    index = index + num
    
    if (index >= cardsElements.length) {
        index = 0
    }

    if (index < 0) {
        index = cardsElements.length - 1
    }

    cardsElements[index].scrollIntoView({behavior: 'smooth'})
}

setInterval (() => {
    show (+1)
}, INTERVAL)

function showModal () {
    modalElement.innerHTML = ''

    modalElement.innerHTML = `
    <div class="modal-card">
        <button onclick="closeModal()">
            <img src="img/close-btn.png" alt="close-button" />
        </button>
        <h1>${MOTO_CARD[index].title}</h1>
        <p>
        ${MOTO_CARD[index].paragraph}
        </p>
        <img src="${MOTO_CARD[index].img}" alt="" />
        <button>Quero Assinar!</button>
    </div>
    `

    modalElement.style.visibility = 'visible'
}

function closeModal() {
    modalElement.style.visibility = 'hidden'
}