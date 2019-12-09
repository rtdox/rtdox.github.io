// ============= COMPONENT PROJECT ==============
Vue.component('project-block', {
    data(){
        return {
            color: '',
            fontWeight: '',
            
            minWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
            maxWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
            width:    Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',

            minHeight: this.$root.$data.projectDefaultHeight+'px',
            maxHeight: this.$root.$data.projectDefaultHeight+'px',
            height:    this.$root.$data.projectDefaultHeight+'px',
        }
    },

    props: ['index','obj'],

    computed: {
        styling: function() {
            return {
                color: '#333',
                fontWeight: 'bold',
                left: Math.floor(this.index%this.$root.$data.projectsInRow)*Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                top:  Math.floor(this.index/this.$root.$data.projectsInRow)*this.$root.$data.projectDefaultHeight+'px',

                minWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                maxWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                width:    Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',

                minHeight: this.$root.$data.projectDefaultHeight+'px',
                maxHeight: this.$root.$data.projectDefaultHeight+'px',
                height:    this.$root.$data.projectDefaultHeight+'px',
            }
        }
    },

    mounted: function() {
        //
    },

    methods: {
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    },

    template: '<div class="project_block" :class="\'num\'+parseInt(index+1)" :style="styling">{{this.obj.name}}</div>'
});


// ============= MAIN VUE ELEMENT ==============
var app = new Vue({
    el: '#app',
    data: {
        projects: [ 
            {"name":"LFP","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg"},
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