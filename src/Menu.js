export function loadMenu() { 
    const page = document.createElement('div');
    page.innerHTML = "<h1>Welcome to the menu Page</h1><p>This is the home section of the restaurant website.</p>";
    // appendContent(content) to div with id "content";
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(page);
}