let publications = document.getElementById("publications");

for (let i = 1; i <= 3; i++) {
    publications.innerHTML += `
    <article>
        <div class="articles_head">
            <div class="user">
              <img src="img/user.png" alt="#">
              <p>PSEUDO ${i}</p>
            </div>

            <h2>TITRE</h2>
        </div>

        <div class="contenu">
          <img src="img/wave.jpg" alt="#">
        </div>
    </article>`;
}