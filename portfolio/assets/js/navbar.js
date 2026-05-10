$(document).ready(function () {
    // Load Navbar
    $("#navbar").load("./components/navbar.html", function () {
        var wlocation = window.location;
        var pathname = wlocation.pathname;
        localStorage.setItem('currentPath', pathname);
        addThemToggler();
        toggleTheme();
        setActiveNav();
        // showWndowLoctionOptions();
    });

    function showWndowLoctionOptions() {
        var wlocation = window.location;
        var href = wlocation.href;
        var pathname = wlocation.pathname;
        var host = wlocation.host;
        var port = wlocation.port;
        var hostname = wlocation.hostname;
        var protocol = wlocation.protocol;
        var search = wlocation.search;
        console.log('href: ' + href);
        console.log('pathname: ' + pathname);
        console.log('host: ' + host);
        console.log('port: ' + port);
        console.log('hostname: ' + hostname);
        console.log('protocol: ' + protocol);
        console.log('search: ' + search);
    }

    function setActiveNav() {
        var pathname = localStorage.getItem('currentPath');
        $('li.nav-item a.nav-link').each(function(idx, elm){
            pathname == '/portfolio/' + $(elm).attr('href') ? $(elm).addClass('active') : '';
        });
    }

    function addThemToggler() {
        if(!localStorage.getItem('theme')){
            localStorage.setItem('theme',
                [
                    {
                        'id': 1,
                        'name': 'Light Theme',
                        'htmlClass': 'light-theme',
                        'mood': 'light'
                    },
                    {
                        'id': 2,
                        'name': 'Dark Theme',
                        'htmlClass': 'dark-theme',
                        'mood': 'dark'
                    }
                ]
            );
            localStorage.setItem('activeTheme', 1);
        }
    }

    function toggleTheme($id = 1) {
        switch($id){
            case 1:
                $('#themeToggle')
                    .html(`<i class='fa-regular fa-sun'></i>`)
                    .addClass('btn-outline-light')
                    .removeClass('btn-outline-dark');
                $('body').addClass('dark-theme');
                localStorage.setItem('activeTheme', 2);
                break;
            case 2:
                $('#themeToggle')
                    .html(`<i class='fas fa-moon'></i>`)
                    .addClass('btn-outline-dark')
                    .removeClass('btn-outline-light');
                $('body').addClass('light-theme');
                localStorage.setItem('activeTheme', 1);
                break;
            default:
                $('#themeToggle')
                    .html(`<i class='fa-regular fa-sun'></i>`)
                    .addClass('btn-outline-light')
                    .removeClass('btn-outline-dark');
                $('body').addClass('dark-theme');
                localStorage.setItem('activeTheme', 2);
                break;
        }
    }
});