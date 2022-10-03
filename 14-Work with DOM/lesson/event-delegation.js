//Делегтрование событий

const allNavButtons = document.querySelectorAll('.main-navigation__button-item')

// allNavButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         allNavButtons.forEach((button) => {
//             button.classList.remove('main-navigation__button-item_selected')
//         })
//         const { target } = event
//         target.classList.add('main-navigation__button-item_selected')
//     })
// })

const mainNavigation = document.querySelector('.main-navigation')
mainNavigation.addEventListener('click', (event) => {
    const { target } = event
    console.log(target)
    const navButton = target.closest('.main-navigation__button-item')
    //console.log(navButton)
    if (navButton) {
        allNavButtons.forEach((button) => {
            button.classList.remove('main-navigation__button-item_selected')
        })
        const { target } = event
        target.classList.add('main-navigation__button-item_selected')
    }
})