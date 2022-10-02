const characters = {
    'Luke Skywalker': 'assets/characters/lukeskywalker.png',
    'C-3PO': 'assets/characters/c-3po.png',
    'R2-D2': 'assets/characters/r2-d2.png',
    'Obi-Wan Kenobi': 'assets/characters/obi-wan-kenobi.png',
    'Anakin Skywalker': 'assets/characters/anakin-skywalker.png',
    'Padmé Amidala': 'assets/characters/padme-amidala.png',
    'Barriss Offee': 'assets/characters/barriss-offee.png',
    'Ayla Secura': 'assets/characters/ayla-secura.png',
    'Jabba Desilijic Tiure': 'assets/characters/jabba-desilijic-tiure.png',
    'Darth Vader': 'assets/characters/darth-vader.png',
    'Yoda': 'assets/characters/yoda.png',
    'Boba Fett': 'assets/characters/boba-fett.png',
    'Palpatine': 'assets/characters/palpatine.png',
    'Shmi Skywalker': 'assets/characters/shmi-skywalker.png',
    'Ki-Adi-Mundi': 'assets/characters/ki-adi-mundi.png',
    'Jar Jar Binks': 'assets/characters/jar-jar-binks.png',
    'Nute Gunray': 'assets/characters/nute-gunray.png',
    'Watto': 'assets/characters/watto.png',
    'Poggle the Lesser': 'assets/characters/poggle-the-lesser.png',
    'Mace Windu': 'assets/characters/mace-windu.png',
    'Cliegg Lars': 'assets/characters/cliegglars.png',
    'Kit Fisto': 'assets/characters/kitfisto.png',
    'Lama Su': 'assets/characters/lama-su.png',
    'Dexter Jettster': 'assets/characters/dexter-jettster.png',
    'Luminara Unduli': 'assets/characters/luminara-unduli.png',
    'Taun We': 'assets/characters/taun-we.png',
    'Jocasta Nu': 'assets/characters/jocasta-nu.png',
    'Beru Whitesun lars': 'assets/characters/BeruCardTrader.png',
    'Mas Amedda': 'assets/characters/mas-amedda.png',
    'Plo Koon': 'assets/characters/plo-koon.png',
    'San Hill': 'assets/characters/san-hill.png',
    'Wat Tambor': 'assets/characters/wat-tambor.png',
    'R4-P17': 'assets/characters/R4-P17.png',
    'R5-D4': 'assets/characters/r5-d4.png',
    'Zam Wesell': 'assets/characters/zam-wesell.png',
    'Leia Organa': 'assets/characters/leia-organa.png',
    'Wilhuff Tarkin': 'assets/characters/wilhuffTarkin.png',
    'Greedo': 'assets/characters/greedo.png',
    'Biggs Darklighter': 'assets/characters/biggsDarklighter.png',
    'Jek Tono Porkins': 'assets/characters/jekTonoPorkins.png',
    'Han Solo': 'assets/characters/hanSolo.png',
    'Chewbacca': 'assets/characters/chewbacca.png',
    'Wedge Antilles': 'assets/characters/wedgeAntilles.png',
    'Raymus Antilles': 'assets/characters/raymusAntilles.png',
    'Owen Lars': 'assets/characters/OwenLars.png',
    'IG-88': 'assets/characters/IG-88.png',
    'Bossk': 'assets/characters/bossk.png',
    'Lobot': 'assets/characters/Lobot_SWDR.png',
    'Lando Calrissian': 'assets/characters/landoCalrissian.png',
    'Ackbar': 'assets/characters/ackbar.png',
    'Wicket Systri Warrick': 'assets/characters/wicket-systri-warrick.png',
    'Arvel Crynyd': 'assets/characters/arvel-crynyd.png',
    'Mon Mothma': 'assets/characters/monMothma.png',
    'Nien Nunb': 'assets/characters/nienNunb.png',
    'Bib Fortuna': 'assets/characters/bibFortuna.png',
    'Qui-Gon Jinn': 'assets/characters/qui-GonJinn.png',
    'Roos Tarpals': 'assets/characters/roosTarpals.png',
    'Finis Valorum': 'assets/characters/finisValorum.png',
    'Rugor Nass': 'assets/characters/rugorNass.png',
    'Sebulba': 'assets/characters/sebulba.png',
    'Ric Olié': 'assets/characters/ric-olie.png',
    'Ben Quadinaros': 'assets/characters/BenQuadinaros.png',
    'Quarsh Panaka': 'assets/characters/QuarshPanaka.png',
    'Dud Bolt': 'assets/characters/DudBolt.png',
    'Ratts Tyerel': 'assets/characters/RattsHS.png',
    'Darth Maul': 'assets/characters/DarthMaul.png',
    'Gasgano': 'assets/characters/GasganoSTAR_ WARS.png',
    'Adi Gallia': 'assets/characters/AdiGallia.png',
    'Saesee Tiin': 'assets/characters/SaeseeTiin.png',
    'Eeth Koth': 'assets/characters/Eeth_Koth.png',
    'Yarael Poof': 'assets/characters/YaraelPoof.png',
    'Plo Koon': 'assets/characters/PloKoon.png',
    'Gregar Typho': 'assets/characters/GregarTypho.png',
    'Bail Prestor Organa': 'assets/characters/BailPrestorOrgana.png',
    'Dormé': 'assets/characters/Dorme.png',
    'Jango Fett': 'assets/characters/JangoFett.png',
    'Dooku': 'assets/characters/Dooku.png',
    'Cordé': 'assets/characters/Cord.png',
    'Sly Moore': 'assets/characters/sly-moore.png',
    'Shaak Ti': 'assets/characters/ShaakTi.png',
    'Tion Medon': 'assets/characters/TionMedon.png',
    'Tarfful': 'assets/characters/Tarfful.png',
    'Grievous': 'assets/characters/Grievous.png'
};




function getData(filmId) {
    const arrayOfData = [];
    fetch(`https://swapi.dev/api/films/${filmId}/`)
    .then(response => response.json())
    .then(value => {
        value.characters.forEach(item => {
            fetch(item)
            .then(response => response.json())
            .then(value => arrayOfData.push({name: value.name, birth: value.birth_year, gender: value.gender}))
        });
    });
    return arrayOfData;
}


console.log(getData(3))


