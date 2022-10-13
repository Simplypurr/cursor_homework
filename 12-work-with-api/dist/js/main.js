const btnShow = document.getElementById('show');
const btnWookie = document.getElementById('wookie');
const btnNextPage = document.getElementById('next');
const btnHomePage = document.getElementById('home');
const cards = document.querySelector('.cards');
const planets = document.querySelector('.planets');
// const song = document.querySelector('audio');
// window.addEventListener('load', (e) => {
//     song.play();
// });
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

const mapper = {
    'Lhuorwo Sorroohraanorworc':'Luke Skywalker',
    'Drarcaoac Vrawaworc': 'Darth Vader',
    'C-3PO': 'C-3PO',
    'R2-D2': 'R2-D2',
    'Orhah-Wrawh Kwowhoorhah': 'Obi-Wan Kenobi',
    'Anakin Skywalker': './dist/assets/characters/anakin-skywalker.png',
    'Padmé Amidala': './dist/assets/characters/padme-amidala.png',
    'Barriss Offee': './dist/assets/characters/barriss-offee.png',
    'Ayla Secura': './dist/assets/characters/ayla-secura.png',
    'Jrarhrhra Dwocahanahshahoa Tahhurcwo':'Jabba Desilijic Tiure',
    'Drarcaoac Vrawaworc': 'Darth Vader',
    'Yoowara':'Yoda',
    'Boorhra Fwoaoao': 'Boba Fett',
    'Praanakraaoahwhwo':'Palpatine',
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
    'Bworchu Wacahaowochuwh anrarcc':'Beru Whitesun lars',
    'Mas Amedda': './dist/assets/characters/mas-amedda.png',
    'Plo Koon': './dist/assets/characters/plo-koon.png',
    'San Hill': './dist/assets/characters/san-hill.png',
    'Wat Tambor': './dist/assets/characters/wat-tambor.png',
    'R4-P17': 'R4-P17',
    'R5-D4': 'R5-D4',
    'Zam Wesell': './dist/assets/characters/zam-wesell.png',
    'Lwoahra Orcrrrawhra':'Leia Organa', 
    'Wahanachuwwww Trarcorahwh':'Wilhuff Tarkin', 
    'Grcwowowaoo':'Greedo',
    'Bahrrrrc Drarcoranahrracaoworc':'Biggs Darklighter',
    'Jwoor Toowhoo Poorcorahwhc':'Jek Tono Porkins',
    'Hrawh Sooanoo':'Han Solo',
    'Cacwoohrhraoaoara':'Chewbacca',
    'Wwowarrwo Awhaoahananwoc':'Wedge Antilles',
    'Rraroschuc Awhaoahananwoc':'Raymus Antilles',
    'Oohwowh Lrarcc':'Owen Lars',
    'IG-88': 'IG-88',
     'Booccor':'Bossk',
    'Loorhooao':'Lobot',
    'Lrawhwaoo Craanrcahccahrawh':'Lando Calrissian',
    'Aoaorrhrarc':'Ackbar',
    'Wahoaorwoao Srocaorcah Wrarcrcahoaor':'Wicket Systri Warrick',
    'Archowoan Crcrowhrowa':'Arvel Crynyd',
    'Moowh Mooaoacscra':'Mon Mothma',
     'Nahwowh Nhuwhrh':'Nien Nunb',
    'Bahrh Foorcaohuwhra':'Bib Fortuna',
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
}


function update() {
    let select = document.getElementById('episode');
    let optionValue = select.options[select.selectedIndex].value;
    return optionValue;
}

const getData = async (value, wookie = false) => {
    const {characters} = await fetch(`https://swapi.dev/api/films/${value}/`).then(response => response.json());
    let charactersPromises;
    if (wookie) {
        charactersPromises = characters.map(char => fetch(char+'?format=wookiee').then(response => response.json()));
    } else {
        charactersPromises = characters.map(char => fetch(char).then(response => response.json()));
    }
    return Promise.all(charactersPromises);
};

const getPlanets = async (value) => {
    const planetsdata = await fetch(`https://swapi.dev/api/planets/?page=${value}`).then(response => response.json());
    const planets = await planetsdata.results;
    return planets;
}

// console.log(getPlanets(1));



const createCards = (value, wookie = false) => { 
    const div = document.createElement('div');
    const img = document.createElement('img');
    let requiredData;
    if (wookie) {
        const {whrascwo, rhahrcaoac_roworarc, rrwowhwaworc} = value;
        requiredData = [whrascwo, rhahrcaoac_roworarc, rrwowhwaworc];
        img.src = characters[mapper[requiredData[0]]]
    } else {
        const {name, birth_year, gender} = value;
        requiredData = [name, birth_year, gender];
        img.src = (characters[requiredData[0]]);
    }
    
    
    requiredData.forEach(item => {
        switch (item) {
            case 'male':
                div.innerHTML = `<div class="card__info"><p>Name: ${requiredData[0]}</p><p>Birth Date: ${requiredData[1]}</p><img class="gender" src=./dist/assets/gender/male.svg></div>`;
                break;
            case 'female':
                div.innerHTML = `<div class="card__info"><p>Name: ${requiredData[0]}</p><p>Birth Date: ${requiredData[1]}</p><img class="gender" src=./dist/assets/gender/female.svg></div>`;
                break;
            case 'n/a':
            case 'hermaphrodite':
                div.innerHTML = `<div class="card__info"><p>Name: ${requiredData[0]}</p><p>Birth Date: ${requiredData[1]}</p><img class="gender" src=./dist/assets/gender/non-binary.svg></div>`;
                break;
            case 'scraanwo':
                div.innerHTML = `<div class="card__info"><p>Whrascwo: ${requiredData[0]}</p><p>Rhahrcaoac Roworarc: ${requiredData[1]}</p><img class="gender" src=./dist/assets/gender/male.svg></div>`;
                break;
            case 'wwwoscraanwo':
                div.innerHTML = `<div class="card__info"><p>Whrascwo: ${requiredData[0]}</p><p>Rhahrcaoac Roworarc: ${requiredData[1]}</p><img class="gender" src=./dist/assets/gender/female.svg></div>`;
                break;
            default: 
                div.innerHTML = `<div class="card__info"><p>Whrascwo: ${requiredData[0]}</p><p>Rhahrcaoac Roworarc: ${requiredData[1]}</p><img class="gender" src=./dist/assets/gender/non-binary.svg></div>`;
                break;
        }

    });

    div.classList.add('card');
    img.classList.add('card-img')
    cards.classList.add('active');
    div.append(img);
    cards.append(div);
}




document.addEventListener('click', (event) => {
    switch (event.target.id) {
        case 'show':
            const value = update()
            cards.innerHTML = '';
            btnShow.disabled = true;
            getData(value).then(char => {
                char.map(char => createCards(char));
                btnShow.disabled = false;
            });
        break;
        case 'wookie':
            cards.innerHTML = '';
            btnWookie.disabled = true;
            getData(1, true).then(char => {
                char.map(char => createCards(char, true));
            });
            btnShow.innerText = 'woaosdkao';
            btnNextPage.innerText = 'wadsalsoodsa';
            btnWookie.innerText = 'wsoosaoosadlf';
            btnWookie.disabled = false;
        break;
        case 'next':
            window.location.href = 'planets.html';
        break;
        case 'home': 
            window.location.href = 'index.html';
    }
});

window.addEventListener('load', event => {
    const planetsPages = [1,2,3,4,5,6];
    planetsPages.forEach(page => getPlanets(page).then(value => {
        value.forEach(value => {
            planets.innerHTML += `${value.name}<br>`;
        });
    }));
});



// custom select 
let x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
   
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
       
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);






        

