var controls = document.querySelectorAll('.toggle-controls button');
var photo = document.querySelector('.photo');

function toggleFilter(control) {
    for (var j = 0; j < controls.length; j++) {
        controls[j].classList.remove('active');
        photo.classList.remove(controls[j].dataset.filter);
    }
    control.classList.add('active');
    if (photo) {
        photo.classList.add(control.dataset.filter);
    }
}

function clickControl(control) {
    control.addEventListener('click', function() {
        toggleFilter(control);
    });
}

for (var i = 0; i < controls.length; i++) {
    controls[i].innerHTML = controls[i].dataset.filter;
    clickControl(controls[i]);
}

var defaultFilter = document.querySelector('button.grayscale');
toggleFilter(defaultFilter);