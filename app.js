
const app = Vue.createApp({
    //template: '<h2>i am the template</h2>'
    data(){
        return {
        title: 'function return value from app.js',
        name: 'Wali Mohammad',
        age: 30
    }
    },
    methods: {
        changeNameFunction(){
            name: 'Katawazai'
            //console.log('You Clicked me')
        }
    }
})
app.mount('#app')

//console.log('hello world vue.js file')