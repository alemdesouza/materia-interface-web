let ajax = new XMLHttpRequest();

function processardados() {

  let artigos = JSON.parse(ajax.response).articles;

  var elementos="";
  for (let i = 0; i < artigos.length; i++) {

    elementos += `
      <div class="noticia">
        <div>

          <h4>${artigos[i].title}</h4>
          <p>${artigos[i].description}</p>
        </div>

        <a href="./noticias/${i}.html">
          <img class="imagem-padrao" src="${artigos[i].urlToImage}" alt="">
        </a>
      </div>
    `;

  }

  document.getElementById("noticias").innerHTML=elementos;

}

ajax.onload = processardados;
ajax.open("GET", "https://newsapi.org/v2/everything?q=bitcoin&apiKey=b3eb656ebf544fbe89e102685d53f849");
ajax.send();
