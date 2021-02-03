const app = {
    data() {
        return {
            firstname: 'Phopthorn',
            lastname:'Patcharoen',
            career:'IT Student',
            photo:'./images/123.jpg',
            article:'22',
            follow:'1.5M',
            rating:'9.2',
            shown:true,
            url:'http://www.google.com'
        }
    },
    created(){

        console.log('message is: '+this.msg)

    },
 updated(){
    console.log('message is changed to: '+this.msg)
}
 
}
mountedApp = Vue.createApp(app).mount('#app')