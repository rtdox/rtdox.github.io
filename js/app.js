// ============= COMPONENT PROJECT ==============
Vue.component('project-block', {
    data(){
        return {
            bgpos: 0
        }
    },

    props: ['index','obj'],

    computed: {
        styling: function() {
            return {
                left: Math.floor(this.obj.order%this.$root.$data.projectsInRow)*Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)+'px',
                top:  Math.floor(this.obj.order/this.$root.$data.projectsInRow)*this.$root.$data.projectDefaultHeight+5+'px',

                minWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)-10+'px',
                maxWidth: Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)-10+'px',
                width:    Math.floor(this.$root.$data.projBlockWidth/this.$root.$data.projectsInRow)-10+'px',

                minHeight: this.$root.$data.projectDefaultHeight-10+'px',
                maxHeight: this.$root.$data.projectDefaultHeight-10+'px',
                height:    this.$root.$data.projectDefaultHeight-10+'px',
            }
        },

        bgimg: function(){
            return {
                backgroundImage: 'url('+this.obj.image+')',
                backgroundPosition: 'top '+this.bgpos+'% center'
            }
        },

        currTech: function(){
            return this.$root.$data.currentTech;
        }
    },

    mounted() {
        setTimeout( () => {this.obj.order = this.index}, getRandom(400,900));
    },

    methods: {
        ScrollBg(){
            if(this.bgpos != 0){
                this.bgpos = 0;
            } else if(this.bgpos != 100){
                this.bgpos = 100;
            }
        }
    },

    template:   '<div class="project_block d-flex flex-column justify-content-between" v-if="this.obj.visible" :style="styling">'+
                    '<div class="block_title bg-dark text-center font-weight-bold">{{this.obj.name}}</div>'+
                    '<div class="image_zone flex-grow-1" :style="bgimg" @click="ScrollBg"></div>'+
                    '<div class="bg-dark p-2">'+
                        '<div>{{this.obj.description}}</div><hr>'+
                        '<a :href="this.obj.link" target="_blank" v-if="this.obj.link">{{this.obj.link.replace("https://","")}}</a><hr v-if="this.obj.link">'+
                        '<div>Используемые технологии:<br><span v-for="(tech, index) in this.obj.techs" :key="\'t-\'+index" class="badge rounded-0 mr-1 mb-1" :class="(currTech==tech || currTech==\'ShowAll\') ? \'badge-warning\' : \'badge-secondary\'">{{tech}}</span></div>'+
                        //'<hr><div class="text-right">'+
                            //'<button class="btn btn-sm btn-primary rounded-0 mt-2">Подробнее &rarr;</button>'+
                            //'<a :href="this.obj.link" target="_blank" v-if="this.obj.link" class="btn btn-sm btn-warning rounded-0 mt-2 ml-2">Сайт &rarr;</a>'+
                        //'</div>'+
                    '</div>'+
                '</div>'
});


// ============= MAIN VUE ELEMENT ==============
var app = new Vue({
    el: '#app',
    data() {
        return {
            projects: [],

            unvisibles: 0,

            projBlockWidth: 290,
            projectDefaultHeight: 400,
            projectsInRow: 4,

            currentTech: 'ShowAll',

            phone_link: '#',
            phone_text: '+38 (097) ПОКАЗАТЬ',
            phone_showed: false
        }
    },

    created: function(){
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

            for(let i in this.projects){
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
                item.order = 0;
                if(item.techs.includes(text)){
                    item.visible = true;
                } else {
                    item.visible = false;
                    this.unvisibles++;
                }
            });

            setTimeout( () => { this.SortBlocks() }, 5 );
        },

        ShowAll(){
            this.currentTech = 'ShowAll';
            this.unvisibles = 0;

            this.projects.forEach(item => {
                item.order = 0;
                item.visible = true;
            });

            setTimeout( () => { this.SortBlocks() }, 5 );
        },

        ShowPhone(e){
            if(!this.phone_showed){
                e.preventDefault();

                let b = ') 233-2';
                let code = '097';
                let a = '+38 (';
                let c = '4-98';
                this.phone_text = a+code+b+c;

                let d2 = '498';
                let a2 = '+38';
                let c2 = '2332';
                let b2 = '097';
                this.phone_link = 'tel:'+a2+b2+c2+d2;

                this.phone_showed = true;
            }
        }
    }
});

//===================== functions ==========================
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}