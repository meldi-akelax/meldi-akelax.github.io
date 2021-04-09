const myPicture = document.getElementById('home-header-image');
const myBiography = document.getElementById('biography');
const aboutPara = document.querySelector('.home-section-about');
const informatiqueDrawing = document.getElementById('informatic-drawing');
const electronicDrawing = document.getElementById('electronic-drawing');
const informaticLangages = document.getElementById('informatic-langages');
const devTechnos = document.getElementById('dev-technos');
const informaticPara = document.getElementById('informatic-para');


/* fetch('http://localhost:3000/me') */
/* 
fetch("https://my-json-server.typicode.com/merdi-akelax/merdi-akelax.github.io/me") */

const link = 'http://localhost:3000';

fetch(link + '/me').then(function(response) {
        return response.json();
    })
    .then(function(me) {
        showMe(me);
    });

function showMe(me) {
    myPicture.src = me.identity.picture;
    myBiography.textContent = me.identity.biography;
    for (para of me.about) {
        let paraElement = document.createElement('p');
        paraElement.textContent = para;
        aboutPara.appendChild(paraElement);
    }
    contacts(me.contacts);
}

fetch('http://localhost:3000/competences').then(function(response) {
        return response.json();
    })
    .then(function(competences) {
        dev(competences);
        technician(competences);
    });

function dev(competences) {

    informatiqueDrawing.src = competences[0].informatic.drawing;

    for (para of competences[0].informatic.para) {
        let paraElement = document.createElement('p');
        paraElement.textContent = para;
        informaticPara.appendChild(paraElement);
    }

    let langageListContainerElement = document.createElement('ul');
    for (langage of competences[0].informatic.langages) {
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
    for (techno of competences[0].informatic.technos) {
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
}


function technician(competences) {
    electronicDrawing.src = competences[1].electronic.drawing;
    const technicPara = document.getElementById('technic-para');
    const technicDomaine = document.getElementById('technic-domaine');
    const technicTechnos = document.getElementById('technic-technos');

    for (para of competences[1].electronic.para) {
        let paraElement = document.createElement('p');
        paraElement.textContent = para;
        technicPara.appendChild(paraElement);
    }

    let langageListContainerElement = document.createElement('ul');
    for (langage of competences[1].electronic.domaines) {
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
    for (techno of competences[1].electronic.technos) {
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

function contacts(contacts) {
    const emailLink = document.getElementById('email-link');
    const telLink = document.getElementById('tel-link');
    const whatsappLink = document.getElementById('whatsapp-link');
    const twiterLink = document.getElementById('twiter-link');
    const facebookLink = document.getElementById('facebook-link');
    emailLink.href = contacts.email;
    createElement("span", emailLink, contacts.email, ["right"]);
    twiterLink.href = contacts.twiter;
    createElement("span", twiterLink, contacts.twiter, ["right"]);
    facebookLink.href = contacts.facebook;
    createElement("span", facebookLink, contacts.facebook, ["right"]);
    whatsappLink.href = contacts.whatsapp;
    createElement("span", whatsappLink, contacts.whatsapp, ["right"]);
    telLink.href = contacts.tel;
    createElement("span", telLink, contacts.tel, ["right"]);
}

fetch(link + '/projects').then(function(response) {
        return response.json();
    })
    .then(function(allProjects) {
        showProjets(allProjects);
    });

function showProjets(allProjects) {
    for (projects of allProjects.informatic) {
        addcard(projects);
    }
}


function addcard(project) {
    const informaticProjectsContainer = document.getElementById('informatic-projects');
    /* 
    <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="./images/projects/Screenshot_2021-04-07 Kinshasa Digital Agence de développement(1).png">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
     */
    let cardContainer = createElement("div", informaticProjectsContainer, "", ["col", "s12", "m6", "l4"]);
    let card = createElement("div", cardContainer, "", ["card"]);
    let cardImage = createElement('div', card, "", ["card-image", "waves-effect", "waves-block", "waves-light"]);
    let image = createElement("img", cardImage, "", ["activator"]);
    image.src = project.drawing;
    let cardContent = createElement('div', card, "", ["card-content"]);
    cardTitle = createElement("span", cardContent, project.title, ["card-title", "activator", "grey-text", "text-darken-4"]);
    let cardLink = createElement('p', cardContent, '');
    let link = createElement('a', cardLink, 'Voir le site');
    link.href = project.link;
    /* return card; */
}

function createElement(tag, container, textContent, className) {
    let element = document.createElement(tag);
    if (className) {
        for (cl of className) {
            element.classList.add(cl);
        }

    }
    if (textContent != "") {
        element.textContent = textContent;
    }
    container.appendChild(element);
    return element;
}