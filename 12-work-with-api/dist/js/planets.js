const planets = document.querySelector('.planets');
const getPlanets = async (value) => {
    const planetsdata = await fetch(`https://swapi.dev/api/planets/?page=${value}`).then(response => response.json());
    const planets = await planetsdata.results;
    return planets;
};

window.addEventListener('load', () => {
    const planetsPages = [1,2,3,4,5,6];
    planetsPages.forEach(page => getPlanets(page).then(value => {
        value.forEach(value => {
            planets.innerHTML += `${value.name}<br>`;
        });
    }));
});