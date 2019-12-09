// ============= COMPONENT PROJECT ==============
Vue.component('project-block', {
    data(){
        return {
            order: 5
        }
    },

    props: ['index','obj'],

    computed: {
        styling: function() {
            return {
                color: getRandomColor(),
                backgroundColor: getRandomColor(),
                fontWeight: 'bold',
                
                left: Math.floor(this.order%this.$root.$data.projectsInRow)*Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                top:  Math.floor(this.order/this.$root.$data.projectsInRow)*this.$root.$data.projectDefaultHeight+'px',

                minWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                maxWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                width:    Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',

                minHeight: this.$root.$data.projectDefaultHeight+'px',
                maxHeight: this.$root.$data.projectDefaultHeight+'px',
                height:    this.$root.$data.projectDefaultHeight+'px',
            }
        }
    },

    mounted() {
        setTimeout( () => { this.order = this.index }, Math.random()*1400+100);
    },

    methods: {
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },

        Shuffle() {
            this.order = Math.random() * (this.$root.$data.projects.length - 1) + 1;
        }
    },

    template: '<div class="project_block" :style="styling" @click="Shuffle">{{this.obj.name}}</div>'
});


// ============= MAIN VUE ELEMENT ==============
var app = new Vue({
    el: '#app',
    data: {
        projects: [ 
            {"name":"LFP","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"Love 3:16","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"Geo Location","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"Metro style","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"Git","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"YouTube","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"Laravel","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"PHP","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"HTML","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"CSS","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"JQuery","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
            {"name":"KEN Academy","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"}
        ],

        projBlockWidth: 290,
        projectDefaultHeight: 200,
        projectsInRow: 4
    },

    created: function(){
        //load projects from file
    },

    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.getWindowWidth);
      
            //Init
            this.getWindowWidth();
        });
    },

    methods: {
        getWindowWidth(event) {
            this.projBlockWidth = document.getElementById('proj_block').clientWidth;
            
            if(this.projBlockWidth >= 1110){
                this.projectsInRow = 4;
            }
            if(this.projBlockWidth < 1110 && this.projBlockWidth >= 690){
                this.projectsInRow = 3;
            }
            if(this.projBlockWidth < 690 && this.projBlockWidth >= 510){
                this.projectsInRow = 2;
            }
            if(this.projBlockWidth < 510){
                this.projectsInRow = 1;
            }
        },
        
        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
});


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


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