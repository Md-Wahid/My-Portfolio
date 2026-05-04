$(document).ready(function(){

    $.ajax({
        url: './components/footer.html',
        method: 'GET',
        success: function(data) {
            $('#footerElement').html(data);
        },
        error: function() {
            console.error('Error loading footer');
        }
    })

    // fetch('./components/footer.html')
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Footer file not found');
    //     }
    //     return response.text();
    // })
    // .then(html => {
    //     const container = document.getElementById('footerElement');
    //     if (container) {
    //         container.innerHTML = html;
    //     }
    // })
    // .catch(error => console.error('Error loading footer:', error));

})