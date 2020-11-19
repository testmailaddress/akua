// performs form validation
function formValidate() {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
}

// closes mobile navmenu on click
function navmenuClose() {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
}

// update form subject line with email input (for custom email subject in netlify notification)
function updateSubject(valEmail) {
    document.getElementById("output-email-subject").value = "AkuaStrong.com submission from " + valEmail;
}


// execute on document ready:
$(formValidate());
$(navmenuClose());
$(updateSubject());
