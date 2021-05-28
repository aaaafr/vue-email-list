// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
// Le slide sono su drive! a breve anche il coding di oggi

let app = new Vue({
    el: "#root",
    data: {
        listaMail: [
           
        ]

    },
    methods: {


    },

    mounted(){
        for(var i = 0; i <= 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                console.log(response.data.response)
                this.listaMail.push(response.data.response)
                console.log(this.listaMail)
    
            });
        }
        // var xhttp = new XMLHttpRequest();

        // xhttp.onreadystatechange = function() {
        //     if(this.readyState == 4 && this.status == 200) {
 
        //     }
        // };

        // xhttp.open("GET", "https://flynn.boolean.careers/exercises/api/random/mail", true);
        // xhttp.send();

    }
})