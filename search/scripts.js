const count = 1;
const result = document.getElementById("result");
const searchquery = document.getElementById("search-query");
const googlelink = document.getElementById("googlelink");
const google = document.getElementById("google");
const urlParams = new URLSearchParams(window.location.search);
const q = urlParams.get('q');
if (q === null || q ===""){
    window.location.href = "/"
}
else{
    searchquery.value = q
    if (q === "The cutest witch ever"){
        document.title = `${q} - Юндекс: нашлось ${count}`;
        result.textContent = "Конечно же Эмити Блайт!"
        const img = document.createElement("img");
        img.src = "/assets/img/AmityBlight.png";
        img.alt = "Эмити Блайт";
        img.style.position = "fixed";
        img.style.top = "200px";
        img.style.left = "60px";
        img.style.width = "180px";
        img.style.borderRadius = "10px";
        document.body.appendChild(img);
    } else{
        result.textContent = "По вашему запросу ничего не найдено попробуйте поиск наших конкурентов: "
        google.style.display = "block";
        googlelink.href = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
    }
}
