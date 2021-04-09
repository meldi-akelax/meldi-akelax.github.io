const myPicture = document.getElementById('home-header-image');
const myBiography = document.getElementById('biography');
const aboutPara = document.querySelector('.home-section-about');
const informatiqueDrawing = document.getElementById('informatic-drawing');
const electronicDrawing = document.getElementById('electronic-drawing');
const informaticLangages = document.getElementById('informatic-langages');
const devTechnos = document.getElementById('dev-technos');
const informaticPara = document.getElementById('informatic-para');


/* fetch('http://localhost:3000/me') */
fetch("https://my-json-server.typicode.com/merdi-akelax/merdi-akelax.github.io/me").then(function(response) {
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

    for (para of me.competences[0].informatic.para) {
        let paraElement = document.createElement('p');
        paraElement.textContent = para;
        informaticPara.appendChild(paraElement);
    }

    let langageListContainerElement = document.createElement('ul');
    for (langage of me.competences[0].informatic.langages) {
        let langageElement = document.createElement('li');
        let langageTitle = document.createElement('h6');
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
        let technoTitle = document.createElement('h6');
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
    technician(me);
    contacts(me);
}

function createElement(tag, container, textContent, className) {
    let element = document.createElement(tag);
    element.classList.add(className);
    if (textContent) {
        element.textContent = textContent;
    }
    container.appendChild(element);
    return element;
}

function technician(me) {
    electronicDrawing.src = me.competences[1].electronic.drawing;
    const technicPara = document.getElementById('technic-para');
    const technicDomaine = document.getElementById('technic-domaine');
    const technicTechnos = document.getElementById('technic-technos');

    for (para of me.competences[1].electronic.para) {
        let paraElement = document.createElement('p');
        paraElement.textContent = para;
        technicPara.appendChild(paraElement);
    }

    let langageListContainerElement = document.createElement('ul');
    for (langage of me.competences[1].electronic.domaines) {
        let langageElement = document.createElement('li');
        let langageTitle = document.createElement('h6');
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
    technicDomaine.appendChild(langageListContainerElement);


    let technosListContainerElement = document.createElement('ul');
    for (techno of me.competences[1].electronic.technos) {
        let technoElement = document.createElement('li');
        let technoTitle = document.createElement('h6');
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
    technicTechnos.appendChild(technosListContainerElement);
}

function contacts(me) {
    const emailLink = document.getElementById('email-link');
    const telLink = document.getElementById('tel-link');
    const whatsappLink = document.getElementById('whatsapp-link');
    const twiterLink = document.getElementById('twiter-link');
    const facebookLink = document.getElementById('facebook-link');
    emailLink.href = me.contacts.email;
    createElement("span", emailLink, me.contacts.email, "right");
    telLink.href = me.contacts.tel;
    createElement("span", telLink, me.contacts.tel, "right");
    whatsappLink.href = me.contacts.whatsapp;
    createElement("span", whatsappLink, me.contacts.whatsapp, "right");
    twiterLink.href = me.contacts.twiter;
    createElement("span", twiterLink, me.contacts.twiter, "right");
    facebookLink.href = me.contacts.facebook;
    createElement("span", facebookLink, me.contacts.facebook, "right");
}

function projects(p) {

}