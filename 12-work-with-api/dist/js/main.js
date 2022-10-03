const btn = document.querySelector('button');
const cards = document.querySelector('.cards');
const input = document.querySelector('input');
const div = document.createElement('div');
const characters = {
    'Luke Skywalker': './dist/assets/characters/lukeskywalker.png',
    'C-3PO': './dist/assets/characters/c-3po.png',
    'R2-D2': './dist/assets/characters/r2-d2.png',
    'Obi-Wan Kenobi': './dist/assets/characters/obi-wan-kenobi.png',
    'Anakin Skywalker': './dist/assets/characters/anakin-skywalker.png',
    'Padmé Amidala': './dist/assets/characters/padme-amidala.png',
    'Barriss Offee': './dist/assets/characters/barriss-offee.png',
    'Ayla Secura': './dist/assets/characters/ayla-secura.png',
    'Jabba Desilijic Tiure': './dist/assets/characters/jabba-desilijic-tiure.png',
    'Darth Vader': './dist/assets/characters/darth-vader.png',
    'Yoda': './dist/assets/characters/yoda.png',
    'Boba Fett': './dist/assets/characters/boba-fett.png',
    'Palpatine': './dist/assets/characters/palpatine.png',
    'Shmi Skywalker': './dist/assets/characters/shmi-skywalker.png',
    'Ki-Adi-Mundi': './dist/assets/characters/ki-adi-mundi.png',
    'Jar Jar Binks': './dist/assets/characters/jar-jar-binks.png',
    'Nute Gunray': './dist/assets/characters/nute-gunray.png',
    'Watto': './dist/assets/characters/watto.png',
    'Poggle the Lesser': './dist/assets/characters/poggle-the-lesser.png',
    'Mace Windu': './dist/assets/characters/mace-windu.png',
    'Cliegg Lars': './dist/assets/characters/cliegglars.png',
    'Kit Fisto': './dist/assets/characters/kitfisto.png',
    'Lama Su': './dist/assets/characters/lama-su.png',
    'Dexter Jettster': './dist/assets/characters/dexter-jettster.png',
    'Luminara Unduli': './dist/assets/characters/luminara-unduli.png',
    'Taun We': './dist/assets/characters/taun-we.png',
    'Jocasta Nu': './dist/assets/characters/jocasta-nu.png',
    'Beru Whitesun lars': './dist/assets/characters/BeruCardTrader.png',
    'Mas Amedda': './dist/assets/characters/mas-amedda.png',
    'Plo Koon': './dist/assets/characters/plo-koon.png',
    'San Hill': './dist/assets/characters/san-hill.png',
    'Wat Tambor': './dist/assets/characters/wat-tambor.png',
    'R4-P17': './dist/assets/characters/R4-P17.png',
    'R5-D4': './dist/assets/characters/r5-d4.png',
    'Zam Wesell': './dist/assets/characters/zam-wesell.png',
    'Leia Organa': './dist/assets/characters/leia-organa.png',
    'Wilhuff Tarkin': './dist/assets/characters/wilhuffTarkin.png',
    'Greedo': './dist/assets/characters/greedo.png',
    'Biggs Darklighter': './dist/assets/characters/biggsDarklighter.png',
    'Jek Tono Porkins': './dist/assets/characters/jekTonoPorkins.png',
    'Han Solo': './dist/assets/characters/hanSolo.png',
    'Chewbacca': './dist/assets/characters/chewbacca.png',
    'Wedge Antilles': './dist/assets/characters/wedgeAntilles.png',
    'Raymus Antilles': './dist/assets/characters/raymusAntilles.png',
    'Owen Lars': './dist/assets/characters/OwenLars.png',
    'IG-88': './dist/assets/characters/IG-88.png',
    'Bossk': './dist/assets/characters/bossk.png',
    'Lobot': './dist/assets/characters/Lobot_SWDR.png',
    'Lando Calrissian': './dist/assets/characters/landoCalrissian.png',
    'Ackbar': './dist/assets/characters/ackbar.png',
    'Wicket Systri Warrick': './dist/assets/characters/wicket-systri-warrick.png',
    'Arvel Crynyd': './dist/assets/characters/arvel-crynyd.png',
    'Mon Mothma': './dist/assets/characters/monMothma.png',
    'Nien Nunb': './dist/assets/characters/nienNunb.png',
    'Bib Fortuna': './dist/assets/characters/bibFortuna.png',
    'Qui-Gon Jinn': './dist/assets/characters/qui-GonJinn.png',
    'Roos Tarpals': './dist/assets/characters/roosTarpals.png',
    'Finis Valorum': './dist/assets/characters/finisValorum.png',
    'Rugor Nass': './dist/assets/characters/rugorNass.png',
    'Sebulba': './dist/assets/characters/sebulba.png',
    'Ric Olié': './dist/assets/characters/ric-olie.png',
    'Ben Quadinaros': './dist/assets/characters/BenQuadinaros.png',
    'Quarsh Panaka': './dist/assets/characters/QuarshPanaka.png',
    'Dud Bolt': './dist/assets/characters/DudBolt.png',
    'Ratts Tyerel': './dist/assets/characters/RattsHS.png',
    'Darth Maul': './dist/assets/characters/DarthMaul.png',
    'Gasgano': './dist/assets/characters/GasganoSTAR_ WARS.png',
    'Adi Gallia': './dist/assets/characters/AdiGallia.png',
    'Saesee Tiin': './dist/assets/characters/SaeseeTiin.png',
    'Eeth Koth': './dist/assets/characters/Eeth_Koth.png',
    'Yarael Poof': './dist/assets/characters/YaraelPoof.png',
    'Plo Koon': './dist/assets/characters/PloKoon.png',
    'Gregar Typho': './dist/assets/characters/GregarTypho.png',
    'Bail Prestor Organa': './dist/assets/characters/BailPrestorOrgana.png',
    'Dormé': './dist/assets/characters/Dorme.png',
    'Jango Fett': './dist/assets/characters/JangoFett.png',
    'Dooku': './dist/assets/characters/Dooku.png',
    'Cordé': './dist/assets/characters/Cord.png',
    'Sly Moore': './dist/assets/characters/sly-moore.png',
    'Shaak Ti': './dist/assets/characters/ShaakTi.png',
    'Tion Medon': './dist/assets/characters/TionMedon.png',
    'Tarfful': './dist/assets/characters/Tarfful.png',
    'Grievous': './dist/assets/characters/Grievous.png'
};




btn.addEventListener('click', () => {
    fetch(`https://swapi.dev/api/films/${input.value}/`)
    .then(response => response.json())
    .then(episodData => {
        episodData.characters.forEach(character => {
            fetch(character)
            .then(response => response.json())
            .then(characterData => {
                const {name, birth_year, gender} = characterData;
                const requiredData = [name, birth_year, gender];
                const div = document.createElement('div');
                const img = document.createElement('img');
                div.classList.add('character-card');
                div.innerHTML = `<div class="card-info"><p>Name: ${requiredData[0]}</p><p>Birth Date: ${requiredData[1]}</p><p>Gender: ${requiredData[2]}</p></div>`
                img.classList.add('card-img')
                img.src = characters[requiredData[0]];
                div.append(img);
                cards.append(div);
                console.log(requiredData)
            })
        })
    })
    
});


