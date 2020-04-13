
const countries = (country) => {
 country = [{id:"ID",name:"Indonésie"},{id:"HU",name:"Hongrie"}, {id:"HK",name:"Hong Kong"},{id:"GR",name:"Grèce"},{id:"FI",name:"Finlande"},{id:"EG",name:"Egypte"}, {id:"DK",name:"Danemark"},{id:"KR",name:"Corée du Sud"},{id:"CO",name:"Colombie"},{id:"CA",name:"Canada"},{id:"CL",name:"Chili"},{id:"BR",name:"Brésil"},{id:"AU",name:"Australie"},{id:"AT",name:"Autriche"},{id:"AR",name:"Argentine"},{id:"SA",name:"Arabie Saoudite"},{id:"ZA",name:"Afrique du Sud"},{id:"FR",name:"France"},{id:"US",name:"Etats Unis"},{id:"DE",name:"Allemagne"},{id:"GB",name:"Royaume-Uni"},{id:"IT",name:"Italie"},{id:"BE",name:"Belgique"},{id:"IN",name:"Inde"},{id:"IE",name:"Irlande"},{id:"IL",name:"Israël"},{id:"JP",name:"Japon"},{id:"KE",name:"Kenya"},{id:"MY",name:"Malaisie"},{id:"MX",name:"Mexique"},{id:"NG",name:"Nigéria"},{id:"NO",name:"Norvège"},{id:"NZ",name:"Nouvelle-Zélande"},{id:"NL",name:"Pays-Bas"},{id:"PH",name:"Philippines"},{id:"PL",name:"Pologne"},{id:"PT",name:"Portugal"},{id:"RO",name:"Roumanie"},{id:"RU",name:"Russie"},{id:"SG",name:"Singapour"},{id:"SG",name:"Suède"},{id:"CH",name:"Suisse"},{id:"TW",name:"Taïwan"},{id:"CZ",name:"République tchèque"},{id:"TH",name:"Thaïlande"},{id:"TR",name:"Turquie"},{id:"UA",name:"Ukraine"},{id:"VN",name:"Viêt Nam"}]
  const sortCountry = country.sort(function(a, b){
 if(a.name < b.name) { return -1; }
 if(a.name > b.name) { return 1; }
 return 0;
})

return sortCountry

}



export default countries
