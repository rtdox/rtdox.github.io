// ============= 
Vue.component('project-block', {
    data:  {
        color: '',
        fontWeight: '',
        width: 200,
        height: 200,
    },

    props: ['index','obj'],

    computed: {
        styling: function() {
            return {
                color: '#333',
                fontWeight: 'bold',
                left: Math.floor(this.index%4)*200+'px',
                top:  Math.floor(this.index/4)*200+'px'
            }
        }
    },

    methods: {
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    },

    template: '<div class="project_block" :class="\'num\'+parseInt(index+1)" :style="styling">{{this.obj.name}}</div>'
});



var app = new Vue({
    el: '#app',
    data: {
        projects: [ {"name":"LFP","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Love 3:16","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
                    {"name":"KEN Academy","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"} ]
    },

    created: function(){
        //load projects from file
    },
});



$(document).ready(function () {
    $('.hidden_phone').click(function(e) {
        e.preventDefault();
        const c = '23';
        const b = '900';
        const d = '55';
        const a = '+38 (093)';
        let span = a+'ara'+b+'gtg'+c+'gtg'+d;
        let str = 'telyjy'+span;
        span = span.replace('ara', ' ').replace('gtg', '-').replace('gtg', '-');
        str = str.replace('yjy', ':').replace('ara', '').replace('gtg', '').replace('gtg', '').replace(' ', '').replace('(', '').replace(')', '');
        $(this).attr('href', str);
        $('#span_for_phone').html(span);
        $('.hidden_phone').off('click');
    });
});