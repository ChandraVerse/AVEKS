// Automatic image sliding
function slidewatchrow(watchrowId) {
  const watchrow = document.getElementById(watchrowId);
  setInterval(() => {
    const firstChild = watchrow.firstElementChild;
    watchrow.appendChild(firstChild.cloneNode(true));
    watchrow.removeChild(firstChild);
  }, 5000);
}

['men-row', 'women-row'].forEach(slidewatchrow);


// Open new page with watch details
function viewWatch(imageSrc, category, description) {
    const watchWindow = window.open('', '_blank');
    watchWindow.document.write(`
        <html>
        <head>
            <title>Watch Details</title>
            <style>
                body { background-color: #FFF2E0; font-family: Arial; color: black; padding: 20px; display: flex; }
                .watch-image { flex: 1; }
                .watch-image img { width: 100%; max-width: 400px; border-radius: 15px; }
                .details { flex: 1; padding: 20px; }
                .button { background-color: #A2AADB; color: white; padding: 10px 20px; border: none; border-radius: 10px; cursor: pointer; font-size: 1rem; margin-right: 10px; }
            </style>
        </head>
        <body>
            <div class="watch-image">
                <img src="${imageSrc}" alt="${category} Watch">
            </div>
            <div class="details">
                <h2>${category} Watch</h2>
                <p>${description}</p>
                <button class="button">ADD TO CART</button>
                <button class="button">BUY NOW</button>
            </div>
        </body>
        </html>
    `);
}

