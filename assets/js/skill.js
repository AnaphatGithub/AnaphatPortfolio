var btn = document.getElementById('btn');
var skillsContent = document.querySelector('.skills__content');
var rectangleAtv = document.querySelector('.rectangle-atv');  // ด้านซ้าย
var rectangle = document.querySelector('.rectangle');        // ด้านขวา
var hardSkills = document.getElementById('hard-skills');
var softSkills = document.getElementById('soft-skills');

// Function to set the sizes based on the media query
function setRectangleSizes(expandLeft) {
    if (window.matchMedia("(min-width: 1150px)").matches) {
        // For large screens
        if (expandLeft) {
            rectangleAtv.style.width = '521px';
            rectangleAtv.style.height = '442px';
            rectangleAtv.style.border = '2px solid #d9d9d9';
            rectangleAtv.style.boxShadow = '-8px 12px 40px 0 #50357a';

            rectangle.style.width = '411px';
            rectangle.style.height = '348px';
            rectangle.style.border = 'none';
            rectangle.style.boxShadow = 'none';
        } else {
            rectangle.style.width = '521px';
            rectangle.style.height = '442px';
            rectangle.style.border = '2px solid #d9d9d9';
            rectangle.style.boxShadow = '-8px 12px 40px 0 #50357a';

            rectangleAtv.style.width = '411px';
            rectangleAtv.style.height = '348px';
            rectangleAtv.style.border = 'none';
            rectangleAtv.style.boxShadow = 'none';
        }
    } else if (window.matchMedia("(min-width: 850px)").matches) {
        // For medium screens
        if (expandLeft) {
            rectangleAtv.style.width = '421px';
            rectangleAtv.style.height = '342px';
            rectangleAtv.style.border = '2px solid #d9d9d9';
            rectangleAtv.style.boxShadow = '-8px 12px 40px 0 #50357a';

            rectangle.style.width = '311px';
            rectangle.style.height = '248px';
            rectangle.style.border = 'none';
            rectangle.style.boxShadow = 'none';
        } else {
            rectangle.style.width = '421px';
            rectangle.style.height = '342px';
            rectangle.style.border = '2px solid #d9d9d9';
            rectangle.style.boxShadow = '-8px 12px 40px 0 #50357a';

            rectangleAtv.style.width = '311px';
            rectangleAtv.style.height = '248px';
            rectangleAtv.style.border = 'none';
            rectangleAtv.style.boxShadow = 'none';
        }
    } else if (window.matchMedia("(min-width: 600px)").matches) {
        // For small-medium screens
        if (expandLeft) {
            rectangleAtv.style.width = '340px';
            rectangleAtv.style.height = '421px';
            rectangleAtv.style.border = '2px solid #d9d9d9';
            rectangleAtv.style.boxShadow = '-8px 12px 40px 0 #50357a';

            rectangle.style.width = '220px';
            rectangle.style.height = '174px';
            rectangle.style.border = 'none';
            rectangle.style.boxShadow = 'none';
        } else {
            rectangle.style.width = '340px';
            rectangle.style.height = '421px';
            rectangle.style.border = '2px solid #d9d9d9';
            rectangle.style.boxShadow = '-8px 12px 40px 0 #50357a';

            rectangleAtv.style.width = '220px';
            rectangleAtv.style.height = '174px';
            rectangleAtv.style.border = 'none';
            rectangleAtv.style.boxShadow = 'none';
        }
    } else if (window.matchMedia("(max-width: 600px)").matches) {
        // For small screens
        if (expandLeft) {
            rectangleAtv.style.width = '340px';
            rectangleAtv.style.height = '421px';
            rectangleAtv.style.border = '2px solid #d9d9d9';
            rectangleAtv.style.boxShadow = '-8px 12px 40px 0 #50357a';

            rectangle.style.width = '0';
            rectangle.style.height = '0';
            rectangle.style.border = 'none';
            rectangle.style.boxShadow = 'none';
        } else {
            rectangle.style.width = '340px';
            rectangle.style.height = '421px';
            rectangle.style.border = '2px solid #d9d9d9';
            rectangle.style.boxShadow = '-8px 12px 40px 0 #50357a';

            rectangleAtv.style.width = '0';
            rectangleAtv.style.height = '0';
            rectangleAtv.style.border = 'none';
            rectangleAtv.style.boxShadow = 'none';
        }
    }
}

// Left click action
function leftClick() {
    btn.style.left = '0';
    hardSkills.classList.add('show-skills');
    hardSkills.classList.remove('hide-skills');
    softSkills.classList.add('hide-skills');
    softSkills.classList.remove('show-skills');
    skillsContent.classList.add('show-skills');
    skillsContent.classList.remove('hide-skills');

    setRectangleSizes(true); // Expand left rectangle
}

// Right click action
function rightClick() {
    btn.style.left = '160px';
    softSkills.classList.add('show-skills');
    softSkills.classList.remove('hide-skills');
    hardSkills.classList.add('hide-skills');
    hardSkills.classList.remove('show-skills');
    skillsContent.classList.add('hide-skills');
    skillsContent.classList.remove('show-skills');

    setRectangleSizes(false); // Expand right rectangle
}
