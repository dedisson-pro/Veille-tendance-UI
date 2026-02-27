const cards = document.querySelectorAll(".card");
const home = document.getElementById("home");
const page = document.getElementById("page");

cards.forEach(card => {
    card.addEventListener("click", function () {

        const trend = this.dataset.trend;

        home.style.display = "none";

        if (trend === "glass") {
            page.innerHTML = `
                <div class="glass-page">
                    <h1>Glassmorphisme</h1>
                    <p>
                        Le glassmorphisme est une tendance UI qui imite l'effet
                        du verre dépoli. Elle utilise la transparence,
                        le flou d’arrière-plan et des bordures fines.
                        Elle crée une interface moderne, élégante et légère.
                    </p>
                    <button onclick="goBack()">Retour</button>
                </div>
            `;
        }

        if (trend === "parallax") {
            page.innerHTML = `
                <div class="parallax-page">
                    <div class="overlay">
                        <h1>Animation en parallaxe</h1>
                        <p>
                            La parallaxe crée un effet de profondeur
                            en faisant défiler l’arrière-plan plus lentement
                            que le contenu principal.
                            Elle rend l’expérience immersive.
                        </p>
                        <button onclick="goBack()">Retour</button>
                    </div>
                </div>
            `;
        }

        if (trend === "strict3d") {
            page.innerHTML = `
                <div class="strict3d-page">
                    <h1>Couleurs strictes & 3D</h1>
                    <p>
                        Cette tendance combine des couleurs fortes
                        avec des ombres marquées pour créer
                        un effet tridimensionnel puissant.
                    </p>
                    <button onclick="goBack()">Retour</button>
                </div>
            `;
        }

        if (trend === "vives") {
            page.innerHTML = `
                <div class="vives-page">
                    <h1>Couleurs vives</h1>
                    <p>
                        Les couleurs vives utilisent des teintes saturées
                        pour capter l’attention et dynamiser l’interface.
                    </p>
                    <button onclick="goBack()">Retour</button>
                </div>
            `;
        }

        if (trend === "brutalism") {
            page.innerHTML = `
                <div class="brutalism-page">
                    <h1>Brutalism</h1>
                    <p>
                        Le brutalism adopte une esthétique brute,
                        avec des contrastes forts et une typographie simple.
                    </p>
                    <button onclick="goBack()">Retour</button>
                </div>
            `;
        }

        if (trend === "engage") {
            page.innerHTML = `
                <div class="engage-page">
                    <h1>Design engagé</h1>
                    <p>
                        Le design engagé transmet un message social
                        ou environnemental à travers l’interface.
                    </p>
                    <button onclick="goBack()">Retour</button>
                </div>
            `;
        }

    });
});

function goBack() {
    page.innerHTML = "";
    home.style.display = "block";
}
