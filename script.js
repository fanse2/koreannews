const app = Vue.createApp({
    data(){
        return {
            title: 'Korean News Las Vegas',
            newsList: []
        }
    },
    mounted(){
        fetch('http://kvegas.site/man/link.json.php')
        .then(res=> res.json())
        .then(json=>{
            console.log(json)
            this.newsList = json
        })
    },

})

app.mount("#app")