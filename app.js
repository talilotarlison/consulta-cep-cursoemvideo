function pegarCep() {
  var cepCodigo = document.getElementById("cep").value;
  //console.log(cepCodigo.length);

  var validar = document.getElementById("validarCodigo");

  if (cepCodigo.length >= 8) {
    validar.innerHTML = "";
    var cepCodigoConvertido = parseInt(cepCodigo);
    cep(cepCodigoConvertido);
  } else {
    validar.innerHTML =
      "<p>Digite um CEP Valido Com 8 digitos. Ex: 20031900</p>";
  }
}

async function cep(cidade) {
  const json = fetch(`https://cep.awesomeapi.com.br/json/${cidade}`, {
    method: "GET"
  }).then((response) => response.json());
  json.then((data) => {
    console.log(data);
    //console.log(data.city);

    var cepInfomacao = document.getElementById("informacaoTela");

    if (data.status == 400) {
      cepInfomacao.innerHTML = "";
      cepInfomacao.innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/03/28/01/42/attention-2180765_1280.png" alt="erro" width="100" height="100"><br>`
      var erro = document.createElement("p");
      erro.innerHTML += `Não Encontramos o CEP informado !!<br>`;
      erro.innerHTML += `${data.code} - ${data.message} `;
      cepInfomacao.appendChild(erro);
    } else {
      cepInfomacao.innerHTML = "";
        cepInfomacao.innerHTML = `<img src="https://static.vecteezy.com/system/resources/previews/010/147/067/original/check-mark-icon-sign-symbol-design-free-png.png" alt="erro" width="100" height="100"><br>`

      var cityCep = document.createElement("h3");
      cityCep.innerHTML += `CEP encontrado em nossa base de dados!<br><br>`
      cityCep.innerHTML += `${data.city} - ${data.state} `;
      cepInfomacao.appendChild(cityCep);

      var ruaCep = document.createElement("h4");
      ruaCep.innerHTML = `${data.address}`;
      cepInfomacao.appendChild(ruaCep);
    }
  });
}

//var sp = 20031900;
//var elemento_pai = document.body;
