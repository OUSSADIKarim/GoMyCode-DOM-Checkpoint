const hearts = document.querySelectorAll(`.heart`)

hearts.forEach(heart => {
    heart.addEventListener(`click`, () => {
        heart.classList.toggle(`heart-licked`)
    })
})



const btns = document.querySelectorAll(`.btns`) 

btns.forEach(btn => {
    btn.addEventListener(`click`, () => {
        btn.classList.toggle(`btn-clicked`)

        setTimeout(() => {
            btn.classList.remove(`btn-clicked`)
        }, 100)
    })
})



const pluses = document.querySelectorAll(`.plus`)

pluses.forEach(plus => {
    plus.addEventListener(`click`, () => {
        addQuantity (plus)
        totalPrice ()
    })
})

function addQuantity (plus) {
    const number = plus.parentElement.previousElementSibling
    const costs = plus.parentElement.parentElement.nextElementSibling.lastElementChild
    const costsAttribute = costs.getAttribute(`data-cost`)
    
        let count = number.value

        count ++ 
        number.value = count

        costs.value = costsAttribute * number.value
}



const minuses = document.querySelectorAll(`.minus`)

minuses.forEach(minus => {
    minus.addEventListener(`click`, () => {
        substractQuantity (minus)
        totalPrice ()
    })
})

function substractQuantity (minus) {
    const number = minus.parentElement.previousElementSibling
    let count = number.value
    const costs = minus.parentElement.parentElement.nextElementSibling.lastElementChild
    const costsAttribute = costs.getAttribute(`data-cost`)

    if (count > 1) {
        count -- 
        number.value = count
        costs.value = costsAttribute * number.value
    } 
}


function totalPrice () {
    const total = document.querySelector(`.total-price`)
    const prices = document.querySelectorAll(`.price`)
    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue) 
    let tableOfPrices = []

    prices.forEach(price => {
        tableOfPrices.push(price.value)
    })

    total.value = tableOfPrices.reduce(reducer, 0)
}
totalPrice()



const closes = document.querySelectorAll(`.close`)

closes.forEach(close => {
    close.addEventListener(`click`, () => {
        close.parentElement.remove()
        totalPrice()
    })
})