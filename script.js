function urlsearch(event) {
    event.preventDefault();
    const query = document.getElementById("search-query").value;
    if (query.startsWith("https://") || query.startsWith("http://")) {
        window.location.href = query;
    }
    else {
        searchtext(event);
    }
}

function searchtext(event) {
    event.preventDefault();
    const query = document.getElementById("search-query").value;
    if (query.trim() === "") {
        return false;
    }
const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
//const searchUrlYa = `https://ya.ru/search/?text=${encodeURIComponent(query)}&lr=25&search_source=yaru_desktop_common&search_domain=yaru`;//
//window.open(searchUrlYa, "_blank");//
window.location.href = searchUrl;
}