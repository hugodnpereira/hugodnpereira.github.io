// const hideElement = document.querySelector('.hide');
// const profile = document.querySelector('.right:nth-child(1)');

// profile.addEventListener('click', () => {
//     profile.querySelector('p').classList.toggle('hide');
// })

const hideElement = document.querySelector('.hide');
const profile = document.querySelector('.right div:nth-child(1)');
const experience = document.querySelector('.right div:nth-child(2)');
const formation = document.querySelector('.right div:nth-child(3)');
const skills = document.querySelector('.right div:nth-child(4)');
const hobbies = document.querySelector('.right div:nth-child(5)');

profile.addEventListener('click', () => {
    profile.querySelector('.desc').classList.toggle('hide');
})
experience.addEventListener('click', () => {
    experience.querySelector('.desc').classList.toggle('hide');
})
formation.addEventListener('click', () => {
    formation.querySelector('.desc').classList.toggle('hide');
})
skills.addEventListener('click', () => {
    skills.querySelector('.desc').classList.toggle('hide');
})
hobbies.addEventListener('click', () => {
    hobbies.querySelector('.desc').classList.toggle('hide');
})
