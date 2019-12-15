// ============= COMPONENT PROJECT ==============
Vue.component('project-block', {
    data(){
        return {
            start_color: '#000',
            start_bgcolor: '#000'
        }
    },

    props: ['index','obj'],

    computed: {
        styling: function() {
            return {
                color: this.start_color,
                backgroundColor: this.start_bgcolor,
                fontWeight: 'bold',
                
                left: Math.floor(this.obj.order%this.$root.$data.projectsInRow)*Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                top:  Math.floor(this.obj.order/this.$root.$data.projectsInRow)*this.$root.$data.projectDefaultHeight+'px',

                minWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                maxWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                width:    Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',

                minHeight: this.$root.$data.projectDefaultHeight+'px',
                maxHeight: this.$root.$data.projectDefaultHeight+'px',
                height:    this.$root.$data.projectDefaultHeight+'px',
            }
        }
    },

    watch: {
        //
    },

    mounted() {
        setTimeout( () => {this.obj.order = this.index}, getRandomArbitrary(400,400));
        //this.obj.order = this.index;
        this.start_color = getRandomColor();
        this.start_bgcolor = getRandomColor();
    },

    methods: {
        Hide() {
            this.obj.visible = false;
            this.$root.$data.unvisibles = 0;

            for(let i=0; i<this.$root.$data.projects.length; i++){
                if(this.$root.$data.projects[i].visible){
                    this.$root.$data.projects[i].order = i-this.$root.$data.unvisibles;
                } else {
                    this.$root.$data.unvisibles++;
                    this.$root.$data.projects[i].order = this.$root.$data.projects.length-this.$root.$data.unvisibles;
                }
            }

            //============end of Hide()==========
        }
    },

    template: '<div class="project_block" v-show="this.obj.visible" :style="styling" @click="Hide()">{{this.obj.name}}</div>'
});


// ============= MAIN VUE ELEMENT ==============
var app = new Vue({
    el: '#app',
    data: {
        projects: [ 
            {"name":"LFP","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"Love 3:16","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"Art-Daysun","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"Geo Location","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"Metro style","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"Git","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"YouTube","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"Laravel","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"PHP","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"HTML","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"CSS","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"JQuery","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true},
            {"name":"KEN Academy","description":"Доска объявлений для поиска друзей","link":"https://lfp.com.ua","image":"projects/img/lfp.jpg","order":0,"visible":true}
        ],

        unvisibles: 0,

        projBlockWidth: 290,
        projectDefaultHeight: 200,
        projectsInRow: 4
    },

    created: function(){
        // this.projects.forEach((item, index) => {
        //     item.order = index;
        // });

        //load projects from file
    },

    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.getWindowWidth);
      
            //Init
            this.getWindowWidth();
        });
    },

    watch: {
        // projects: function(){
        //     this.projects.forEach((item, index)=>{
        //         item.order = index;
        //     });
        // }
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

//===================== functions ==========================
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

//======================= jQuery ========================
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