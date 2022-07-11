let pecaPeso = 0;
let nomePeca = "";
let  numpecas= 0;

pecaPeso = prompt ("Coloque o peso da peça desejada");

if (pecaPeso >= 100 ){
  nomePeca = prompt ("Qual nome deseja cadastra na peça?");

  if(nomePeca.length >=3 ){
    numpecas = prompt ("Coloque a quantidade de peças para caixa");

      if(numpecas >= 10){
        console.log ("a caixa já esta cheia");

      }else{
         console.log ("Caixa cadastrada com sucesso");
      }
  } else{
    console.log("o nome cadatrado é muito pequeno ");
  }
} else{
   console.log("a peça não tem o peso minimo para cadastro no sistema")
}
