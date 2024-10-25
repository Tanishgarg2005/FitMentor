const overlay = document.getElementById('overlay');

// Protein Modal
const proteinCard = document.getElementById('protein-card');
const proteinModal = document.getElementById('proteinModal');
const closeProteinModal = document.getElementById('closeProteinModal');

proteinCard.addEventListener('click', function() {
    proteinModal.style.display = 'block';
    overlay.style.display = 'block';
});

closeProteinModal.addEventListener('click', function() {
    proteinModal.style.display = 'none';
    overlay.style.display = 'none';
});

// Creatine Modal
const creatineCard = document.getElementById('creatine-card');
const creatineModal = document.getElementById('creatineModal');
const closeCreatineModal = document.getElementById('closeCreatineModal');

creatineCard.addEventListener('click', function() {
    creatineModal.style.display = 'block';
    overlay.style.display = 'block';
});

closeCreatineModal.addEventListener('click', function() {
    creatineModal.style.display = 'none';
    overlay.style.display = 'none';
});

// Pre-workout Modal
const preworkoutCard = document.getElementById('preworkout-card');
const preworkoutModal = document.getElementById('preworkoutModal');
const closePreworkoutModal = document.getElementById('closePreworkoutModal');

preworkoutCard.addEventListener('click', function() {
    preworkoutModal.style.display = 'block';
    overlay.style.display = 'block';
});

closePreworkoutModal.addEventListener('click', function() {
    preworkoutModal.style.display = 'none';
    overlay.style.display = 'none';
});


const multivitaminsCard = document.getElementById('multivitamins-card');
const multivitaminsModal = document.getElementById('multivitaminsModal');
const closemultivitaminsModal = document.getElementById('closemultivitaminsModal');

multivitaminsCard.addEventListener('click', function() {
    multivitaminsModal.style.display = 'block';
    overlay.style.display = 'block';
});

closemultivitaminsModal.addEventListener('click', function() {
    multivitaminsModal.style.display = 'none';
    overlay.style.display = 'none';
});


const bcaaCard = document.getElementById('bcaa-card');
const bcaaModal = document.getElementById('bcaaModal');
const closebcaaModal = document.getElementById('closebcaaModal');

bcaaCard.addEventListener('click', function() {
    bcaaModal.style.display = 'block';
    overlay.style.display = 'block';
});

closebcaaModal.addEventListener('click', function() {
    bcaaModal.style.display = 'none';
    overlay.style.display = 'none';
});

// Close modal when clicking on the overlay
overlay.addEventListener('click', function() {
    proteinModal.style.display = 'none';
    creatineModal.style.display = 'none';
    preworkoutModal.style.display = 'none';
    multivitaminsModal.style.display = 'none';
    bcaaModal.style.display = 'none';
    overlay.style.display = 'none';
});
