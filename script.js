document.addEventListener("DOMContentLoaded", function () {
    const portfolioItemsData = [
        {
            title: "Ripple of Anger",
            description: "An interactive canvas that visualizes the escalation of anger. Click to intensify the emotion, leading to a final burst, symbolizing the peak of anger and its chaotic impact.",
            iframeSrc: "https://editor.p5js.org/hs4479/sketches/89hQOA4I_",
            category: "web",
            projectUrl: "https://editor.p5js.org/hs4479/full/89hQOA4I_"
        },
        {
            title: "Type Rush Challenge",
            description: "An engaging typing game where letters fall and you must type them correctly to score points. Miss a letter, and you lose a life. Reach 20 points to win, but lose all lives and face defeat. Perfect for honing typing skills and reflexes.",
            iframeSrc: "https://editor.p5js.org/hs4479/sketches/yWV652OYz",
            category: "app",
            projectUrl: "https://editor.p5js.org/hs4479/full/yWV652OYz"
        },
        {
            title: "Fuel Frenzy Drive",
            description: "Navigate a car to catch falling fuel and look out for energy boosts that increase your speed. Collect potions for lives and stay on the move as the pace quickens over time. It's a test of skill and speed—can you survive the frenzy?",
            iframeSrc: "https://editor.p5js.org/hs4479/sketches/OrBBVnCxV",
            category: "app",
            projectUrl: "https://editor.p5js.org/hs4479/full/OrBBVnCxV"
        },
    ];

    const portfolioContainer = document.getElementById("portfolio-items");
    portfolioContainer.innerHTML = ''; 

    portfolioItemsData.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item', item.category);
        itemElement.innerHTML = `
            <div class="item-inner">
                <iframe src="${item.iframeSrc}" frameborder="0"></iframe>
                <h2><a href="${item.projectUrl}" target="_blank">${item.title}</a></h2>
                <p>${item.description}</p>
            </div>
        `;
        portfolioContainer.appendChild(itemElement);
    });

    const iso = new Isotope(portfolioContainer, {
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
