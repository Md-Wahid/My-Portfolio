
// Typed JS
new Typed('#typed', {

    strings: [
        'ASP.NET Developer',
        'Full Stack Developer',
        'SQL Server Enthusiast'
    ],

    typeSpeed: 50,
    backSpeed: 30,
    loop: true

});

// AOS
AOS.init({
    duration:1000,
    once:true,
    offset:120
});


$(document).ready(function() {
    // Dark Mode Toggle
    $('#themeToggle').on('click', function(){
        alert('Change theme')

        $('body').toggleClass('light-mode');

        localStorage.setItem(
            'theme',
            $('body').hasClass('light-mode')
                ? 'light'
                : 'dark'
        );
        applyTheme();
    });

    function applyTheme(){
        // Load Theme
        if(localStorage.getItem('theme') === 'light'){
            $('body').addClass('light-mode');
        }
        else{
            $('body').removeClass('light-mode');
        }
    }
});