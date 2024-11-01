document.addEventListener('DOMContentLoaded', function () {
    const systemLang = navigator.language || navigator.languages[0];
    
    if (systemLang.startsWith('uk')) {
        window.location.href = "https://kuzymuzy.github.io/ua";
    }
  
});

fetch('https://get.geojs.io/v1/ip/geo.json')
    .then(response => response.json())
    .then(data => {
        if (data.country_code === 'UA') { 
            window.location.href = "https://kuzymuzy.github.io/ua"; 
        }
})