document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-query').value;
    const proxyUrl = 'https://3000-cs-401766820106-default.cs-us-east1-dogs.cloudshell.dev/?authuser=0&redirectedPreviously=true';
    const iframe = document.getElementById('result-frame');

    if (query.trim() === '') {
        alert('Please enter a URL to fetch.');
        return;
    }

    // Update the iframe source to load the requested URL through the proxy
    iframe.src = proxyUrl + encodeURIComponent(query);
});
