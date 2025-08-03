// Section entrance animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelector('.left-section').style.opacity = '1';
        document.querySelector('.left-section').style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        document.querySelector('.right-section').style.opacity = '1';
        document.querySelector('.right-section').style.transform = 'translateY(0)';
    }, 520);

    // Floating particles: render extra moving ones (for the .gold-particles div)
    const holder = document.querySelector('.gold-particles');
    for(let i=0;i<7;i++) {
        let p = document.createElement('div');
        p.style.position = 'absolute';
        p.style.width = (22 + Math.random() * 42) + 'px';
        p.style.height = p.style.width;
        p.style.left = (Math.random()*96) + 'vw';
        p.style.top = (Math.random()*92) + 'vh';
        p.style.opacity = 0.14 + Math.random()*0.38;
        p.style.background = `radial-gradient(circle, #ffd700 ${45+Math.random()*20}%, #fffbe3 100%)`;
        p.style.filter = 'blur(' + (3+Math.random()*7) + 'px)';
        p.style.animation = `floatParticle ${6+Math.random()*3}s ease-in-out infinite`;
        p.style.animationDelay=(Math.random()*4)+'s';
        holder.appendChild(p);
    }
});

// Smooth scroll to collections
function scrollToCollection() {
    document.getElementById('collections').scrollIntoView({
        behavior: 'smooth'
    });
}

// View Watch popup
function viewWatch(imageSrc, category, description) {
    const watchWindow = window.open('', '_blank', 'width=820,height=670,status=no,toolbar=no,resizable=yes,scrollbars=yes');
    watchWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${category} Watch Details</title>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@300;400;600&display=swap" rel="stylesheet">
            <style>
                body {
                    margin: 0;
                    background: radial-gradient(circle at 60% 25%, #222049 0%, #232358 100%);
                    color: #fffbe3;
                    font-family: 'Raleway', sans-serif;
                    display: flex;
                    height: 100vh;
                    align-items: center;
                    justify-content: center;
                }
                .container {
                    max-width: 820px;
                    width: 100vw;
                    border-radius: 25px;
                    box-shadow: 0 8px 36px #ffd70022;
                    background: rgba(40,40,75,0.77);
                    display: flex;
                    overflow: hidden;
                    animation: detailFade 1s cubic-bezier(.2,1.3,.5,1.2);
                }
                @keyframes detailFade {
                    0% { opacity: 0; transform: translateY(40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .watch-image {
                    flex: 1.1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg,#ffd70022 38%,#232358 85%);
                    padding: 38px 17px;
                }
                .watch-image img {
                    width: 96%;
                    max-width: 340px;
                    min-width: 140px;
                    border-radius: 17px;
                    box-shadow: 0 20px 65px #ffd70033, 0 8px 18px #23235822;
                    animation: zoomIn 0.8s cubic-bezier(0.6,1.2,.8,1) both;
                    background: #fffbe3dd;
                }
                @keyframes zoomIn {
                    from {
                        opacity: 0;
                        transform: scale(0.78);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .details {
                    flex: 1.5;
                    padding: 48px 28px 38px 28px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.3rem;
                    background: linear-gradient(to right, #ffd700, #fffbe3 80%);
                    background-clip: text;
                    color: transparent;
                    margin: 0 0 27px 0;
                    letter-spacing: 2px;
                }
                p {
                    font-size: 1.12rem;
                    line-height: 1.7;
                    margin-bottom: 20px;
                    color: #fffbe3;
                }
                .price {
                    font-size: 1.54rem;
                    font-weight: bold;
                    color: #ffd700;
                    margin: 17px 0 20px 0;
                    display: block;
                }
                .button-container {
                    display: flex;
                    gap: 25px;
                    margin-top: 24px;
                }
                .button {
                    background: linear-gradient(135deg, #ffd700 55%, #6a11cb 100%);
                    color: #fffbe3;
                    padding: 15px 36px;
                    border: none;
                    border-radius: 29px 0 29px 0;
                    cursor: pointer;
                    font-size: 1.15rem;
                    font-weight: 700;
                    letter-spacing: 1.1px;
                    box-shadow: 0 4px 19px #ffd70022;
                    transition: all 0.23s, box-shadow .38s;
                }
                .button.buy {background: linear-gradient(120deg, #232358 43%, #fffbe3 75%); color: #232358;}
                .button:hover, .button:focus {
                    background: linear-gradient(110deg, #fffbe3 45%, #ffd700 100%);
                    color: #232358;
                    box-shadow: 0 10px 34px #ffd70088, 0 8px 28px #fffbe388;
                }
                @media (max-width: 900px) { .container { flex-direction: column;} .watch-image, .details { padding: 28px 12px;}}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="watch-image">
                    <img src="${imageSrc}" alt="${category} Watch">
                </div>
                <div class="details">
                    <h2>${category} Watch</h2>
                    <p>${description.replace('<br><br>Price: ', '</p><span class=\'price\'>Price: ')}</span>
                    <div class="button-container">
                        <button class="button" onclick="alert('Added to cart!')">ADD TO CART</button>
                        <button class="button buy" onclick="alert('Proceeding to checkout!')">BUY NOW</button>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
}

// Newsletter interactivity with quick feedback
function subscribeNewsletter(event) {
    event.preventDefault();
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const messageEl = document.getElementById("newsletterMessage");
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        messageEl.style.color='#26f569';
        messageEl.innerText = "Thank you! You’ll receive updates soon.";
        emailInput.value = "";
    } else {
        messageEl.style.color='#ff6c09';
        messageEl.innerText = "Please enter a valid email address.";
    }
    setTimeout(()=>{ messageEl.innerText = ""; }, 3800);
}

// Add staggered animation for watches
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.watch').forEach((watch, i) => {
        watch.style.animationDelay = (i * 0.11) + "s";
    });
});
