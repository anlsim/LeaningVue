const app = Vue.createApp({
  
    data() {
        return {
            firstName: 'Juan',
            lastName: 'Paramo',
            email: 'juan@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
})

app.mount('#app')