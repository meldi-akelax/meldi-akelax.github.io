const myPicture = document.getElementById('home-header-image');
const myBiography = document.getElementById('biography');
const aboutPara = document.querySelector('.home-section-about');
const informatiqueDrawing = document.getElementById('informatic-drawing');
const electronicDrawing = document.getElementById('electronic-drawing');
const informaticLangages = document.getElementById('informatic-langages');
const devTechnos = document.getElementById('dev-technos');
const informaticPara = document.getElementById('informatic-para');


/* fetch('http://localhost:3000/me') */

fetch("http://my-json-server.typicode.com/merdi-akelax/merdi-akelax.github.io/me")
    .then(function(response) {
        return response.json();
    })
    .then(function(me) {
        main(me);
    });

function main(me) {
    myPicture.src = me.identity.picture;
    myBiography.textContent = me.identity.biography;
    for (para of me.about) {
        let paraElement = document.createElement('p');
        paraElement.textContent = para;
        aboutPara.appendChild(paraElement);
    }
    informatiqueDrawing.src = me.competences[0].informatic.drawing;
    electronicDrawing.src = me.competences[1].electronic.drawing;

    for (para of me.competences[0].informatic.para) {
        let paraElement = document.createElement('p');
        paraElement.textContent = para;
        informaticPara.appendChild(paraElement);
    }

    let langageListContainerElement = document.createElement('ul');
    for (langage of me.competences[0].informatic.langages) {
        let langageElement = document.createElement('li');
        let langageTitle = document.createElement('h5');
        let progressContainerElement = document.createElement('div');
        let progressElement = document.createElement('div');
        langageTitle.textContent = langage[0];
        progressElement.classList.add('determinate', langage[2]);
        progressContainerElement.classList.add('progress', langage[3], "lighten-3");
        progressElement.style.width = `${langage[1]}%`
        progressContainerElement.appendChild(progressElement);
        langageElement.appendChild(langageTitle);
        langageElement.appendChild(progressContainerElement);
        langageListContainerElement.appendChild(langageElement);
    }
    informaticLangages.appendChild(langageListContainerElement);


    let technosListContainerElement = document.createElement('ul');
    for (techno of me.competences[0].informatic.technos) {
        let technoElement = document.createElement('li');
        let technoTitle = document.createElement('h5');
        let technoProgressContainerElement = document.createElement('div');
        let technoProgressElement = document.createElement('div');
        technoTitle.textContent = techno[0];
        technoProgressElement.style.width = `${techno[1]}%`;
        technoProgressElement.classList.add('determinate', techno[2]);
        technoProgressContainerElement.classList.add('progress', techno[3], "lighten-3");
        technoProgressContainerElement.appendChild(technoProgressElement);
        technoElement.appendChild(technoTitle);
        technoElement.appendChild(technoProgressContainerElement);
        technosListContainerElement.appendChild(technoElement);
    }
    devTechnos.appendChild(technosListContainerElement);
}