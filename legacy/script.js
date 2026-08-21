//Nav Button Links
document.addEventListener('DOMContentLoaded', function() {
    const portfolioLink = document.querySelector('#link2 a');

    portfolioLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('#link1 a');

    aboutLinkLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });
});