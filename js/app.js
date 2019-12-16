// ============= COMPONENT PROJECT ==============
Vue.component('project-block', {
    data(){
        return {
            //
        }
    },

    props: ['index','obj'],

    computed: {
        styling: function() {
            return {
                left: Math.floor(this.obj.order%this.$root.$data.projectsInRow)*Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+5+'px',
                top:  Math.floor(this.obj.order/this.$root.$data.projectsInRow)*this.$root.$data.projectDefaultHeight+5+'px',

                minWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)-10+'px',
                maxWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)-10+'px',
                width:    Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)-10+'px',

                minHeight: this.$root.$data.projectDefaultHeight-10+'px',
                maxHeight: this.$root.$data.projectDefaultHeight-10+'px',
                height:    this.$root.$data.projectDefaultHeight-10+'px',

                backgroundImage: 'url('+this.obj.image+')',
            }
        }
    },

    watch: {
        //
    },

    mounted() {
        setTimeout( () => {this.obj.order = this.index}, getRandom(400,900));
    },

    methods: {
        Hide(){
            this.obj.visible = false;
            this.$root.SortBlocks();
        }
    },

    template: '<div class="project_block d-flex flex-column justify-content-between" v-if="this.obj.visible" :style="styling" @click="Hide"><div class="bg-dark text-center">{{this.obj.name}}</div><div class="bg-dark text-center">{{this.obj.description}}</div></div>'
});


// ============= MAIN VUE ELEMENT ==============
var app = new Vue({
    el: '#app',
    data: {
        projects: [],

        unvisibles: 0,

        projBlockWidth: 290,
        projectDefaultHeight: 200,
        projectsInRow: 4,

        currentTech: 'ShowAll'
    },

    created: function(){
        //load projects from file
        axios.get('projects/projects.txt').then(
            response => (
                this.projects = response.data
            )
        );
    },

    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.getWindowWidth);
      
            //Init
            this.getWindowWidth();
        });
    },

    watch: {
        //
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
        },

        SortBlocks(){
            this.unvisibles = 0;

            for(let i=0; i<this.projects.length; i++){
                if(this.projects[i].visible){
                    this.projects[i].order = i-this.unvisibles;
                } else {
                    this.unvisibles++;
                    this.projects[i].order = this.projects.length-this.unvisibles;
                }
            }
        },

        ShowBlocks(text){
            this.currentTech = text;
            this.unvisibles = 0;

            this.projects.forEach(item => {
                if(item.techs.includes(text)){
                    item.visible = true;
                } else {
                    item.visible = false;
                    this.unvisibles++;
                }
            });

            setTimeout( () => { this.SortBlocks() }, 150 );
            //this.SortBlocks();
        },

        ShowAll(){
            this.currentTech = 'ShowAll';
            this.unvisibles = 0;

            this.projects.forEach(item => {
                item.visible = true;
            });

            setTimeout( () => { this.SortBlocks() }, 150 );
            //this.SortBlocks();
        }
    }
});

//===================== functions ==========================
function getRandom(min, max) {
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