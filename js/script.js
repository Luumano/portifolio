function scrollToSection(sectionId){
    var section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function(){
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link){
        link.addEventListener('click', function(event){
            event.preventDefault();
            var sectionId = this.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
});