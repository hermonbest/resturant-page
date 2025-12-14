export function loadAbout() { 
    const page = document.createElement('div');
    console.log("About page loaded");
    page.innerHTML = "<h1>Welcome to the About Page</h1><p>This is the home section of the restaurant website.</p>";
    // appendContent(content) to div with id "content";
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(page);
}