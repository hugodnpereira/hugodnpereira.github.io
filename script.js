// Autor: Hugo DO NASCIMENTO PEREIRA

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
profile.addEventListener('mouseenter', () => {
    profile.querySelector('.section-title').classList.add('color-primary');
})
experience.addEventListener('mouseenter', () => {
    experience.querySelector('.section-title').classList.add('color-primary');
})
formation.addEventListener('mouseenter', () => {
    formation.querySelector('.section-title').classList.add('color-primary');
})
skills.addEventListener('mouseenter', () => {
    skills.querySelector('.section-title').classList.add('color-primary');
})
hobbies.addEventListener('mouseenter', () => {
    hobbies.querySelector('.section-title').classList.add('color-primary');
})
profile.addEventListener('mouseleave', () => {
    profile.querySelector('.section-title').classList.remove('color-primary');
})
experience.addEventListener('mouseleave', () => {
    experience.querySelector('.section-title').classList.remove('color-primary');
})
formation.addEventListener('mouseleave', () => {
    formation.querySelector('.section-title').classList.remove('color-primary');
})
skills.addEventListener('mouseleave', () => {
    skills.querySelector('.section-title').classList.remove('color-primary');
})
hobbies.addEventListener('mouseleave', () => {
    hobbies.querySelector('.section-title').classList.remove('color-primary');
})
