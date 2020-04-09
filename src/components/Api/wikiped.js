import wiki from 'wikijs'



 const wikiped = (data)=>{

   const wikiSearchReturnValues = []
   let fullurl = "sdfsdf";
   let title = "hqskjdh";


     var url = "https://fr.wikipedia.org/w/api.php";

     var params = {
       action: 'query',
       list: 'search',
       srsearch: data,
       format: 'json'
     };

     url = url + '?origin=*';
     Object.keys(params).forEach((key) => {
       url += "&" + key + "=" + params[key];
     });
      function getevals(url){
        console.log("nop)")
     return fetch(url)
       .then(
         function (response) {
           return response.json();
         }
       )
       .then(
         function (response) {


           for (var key in response.query.search) {
            wikiSearchReturnValues.push({
               queryResultPageFullURL: 'no link',
               queryResultPageID: response.query.search[key].pageid,
               queryResultPageTitle: response.query.search[key].title,
               queryResultPageSnippet: response.query.search[key].snippet
             });
           }

         }

       )

       .then(
         function (response) {

            if (wikiSearchReturnValues[0] != undefined){
             let page = wikiSearchReturnValues[0];
             title = wikiSearchReturnValues[0].queryResultPageTitle;
             response = wikiSearchReturnValues[0].queryResultPageTitle;
             return response
           }else {
             console.log("nop)")
           }
         }
       )

     }

        getevals().then(response =>console.log(response))

   }


export default wikiped
