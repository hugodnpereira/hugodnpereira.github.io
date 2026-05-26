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
document.getElementById("download-pdf").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");

    // Couleurs
    const bleu = [35, 55, 85];
    const gris = [245, 245, 245];
    const noir = [30, 30, 30];

    // Fond colonne gauche
    doc.setFillColor(...bleu);
    doc.rect(0, 0, 70, 297, "F");

    // Nom
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Hugo Do Nascimento Pereira", 10, 20, { maxWidth: 50 });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Développeur Web", 10, 38);

    // Contact
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Contact", 10, 60);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("74 rue des coulons", 10, 70);
    doc.text("59200 Tourcoing", 10, 76);
    doc.text("06 14 86 15 99", 10, 86);
    doc.text("hugo.dnpereira@gmail.com", 10, 96);

    // Fonction titre section
    function section(title, y) {
        doc.setTextColor(...bleu);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(title, 80, y);

        doc.setDrawColor(...bleu);
        doc.line(80, y + 2, 195, y + 2);

        doc.setTextColor(...noir);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
    }

    let y = 20;

    section("Profil", y);
    y += 10;
    doc.text(
        "Après avoir travaillé des années en tant qu'intérimaire et ayant une passion pour l'informatique et les nouvelles technologies, à 26 ans, j'ai souhaité évoluer professionnellement. Je me suis donc orienté vers le développement web. Au cours de cette formation, j'ai découvert la programmation dont j'aime la logique et l'évolution constante. Curieux, autonome et patient, je suis prêt à apprendre et à m'investir au sein d'une entreprise.",
        80,
        y,
        { maxWidth: 115 }
    );

    y += 48;

    section("Formation", y);
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.text("Décembre 2022 - Septembre 2023", 80, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.text("TP Développeur web à l'AFCI de Villeneuve-d'Ascq", 80, y);

    y += 18;

    section("Compétences", y);
    y += 10;
    doc.text("HTML, CSS, JavaScript, PHP, SQL", 80, y);
    y += 6;
    doc.text("Bootstrap, Symfony, Vue.js", 80, y);
    y += 6;
    doc.text("Git, GitHub, VS Code, PhpStorm, MySQL, phpMyAdmin, Photoshop", 80, y);
    y += 6;
    doc.text("Méthode Agile - Anglais niveau B1", 80, y);

    y += 18;

    section("Expérience", y);
    y += 10;
    doc.text(
        "Avant ma formation de développeur web, j'ai réalisé diverses missions en intérim : serveur, technicien qualité et ouvrier de production. Durant ma formation, j'ai effectué un stage de 2 mois en tant que développeur web. J'ai également réalisé des projets personnels pour m'entraîner, dont Mining Clicker. J'ai ensuite été bénévole pour faire des ateliers d'initiations au code dans des collèges entre mars et mai 2026 aux cotés d'un développeur senior.",
        80,
        y,
        { maxWidth: 115 }
    );

    y += 44;

    section("Centres d'intérêt", y);
    y += 10;
    doc.text(
        "Curieux et touche-à-tout, je pratique la guitare, le piano et le dessin. Je suis passionné par le cinéma, les séries TV et les jeux vidéo. J'aime aussi tout ce qui demande de la logique : énigmes, casse-têtes et échecs.",
        80,
        y,
        { maxWidth: 115 }
    );

    doc.save("CV-Hugo-Do-Nascimento-Pereira.pdf");
});