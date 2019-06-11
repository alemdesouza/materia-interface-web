let ajax = new XMLHttpRequest();

function processardados() {
  let indice=location.pathname.replace("/noticias/", "").replace(".html","");
  let artigos = JSON.parse(ajax.response).articles;
  document.getElementById("titulo-wrapper").innerHTML= `
  <h1>${artigos[indice].title}</h1>
  `;
  document.getElementById("conteudo").innerHTML=`
  <p>${artigos[indice].content} </p>
  `;

  document.getElementById("autor-noticia").innerHTML=
  `<p>${artigos[indice].author} </p>
  `;

  document.getElementById("asideimagem").innerHTML=`
  <img class="imagemreportagem" src="${artigos[indice].urlToImage}">
  `;

  document.getElementById("data").innerHTML=`
  <p>${artigos[indice].publishedAt} </p>
  `;

}

ajax.onload = processardados;
ajax.open("GET", "https://newsapi.org/v2/everything?q=bitcoin&apiKey=b3eb656ebf544fbe89e102685d53f849");
ajax.send();
