const myPicture = document.getElementById('home-header-image');
const myBiography = document.getElementById('biography');
const aboutPara = document.querySelector('.home-section-about');
/* 
fetch("http://my-json-server.typicode.com/merdi-akelax/merdi-akelax.github.io/me") */
fetch('http://localhost:3000/me')
    .then(function(response) {
        return response.json();
    })
    .then(function(me) {
        myPicture.src = me.identity.picture;
        myBiography.textContent = me.identity.biography;
        for (para of me.about) {
            paraElement = document.createElement('p');
            paraElement.textContent = para;
            aboutPara.appendChild(paraElement);
        }
    });