new Vue({
    el: '#challenge',
    data: {
        name: 'João',
        age: 25,
        catImage: 'https://www.am570.com.br/images/posts/1119/1119.jpg'
    },
    methods: {
        getNameAndAge() {
            return this.name + ' ' + this.age;
        },
        multiplyAge() {
            return this.age * 3;
        },
        getRandomNumber() {
            return Math.random();
        }
    }
})