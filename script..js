// 1. Den Button aus dem HTML anhand seiner ID auswählen
const button = document.getElementById('meinButton');

// 2. Sagen, was beim Klick passieren soll (ein Event Listener)
button.addEventListener('click', () => {
    alert('Es funktioniert! JavaScript ist erfolgreich verknüpft! 🎉');
});