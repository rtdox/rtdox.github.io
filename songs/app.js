//=========== MAIN CODE ===========
var app = new Vue({
    el: '#app',
    data() {
        return {
            songs: [],
            popup: false,
            letter: 'all',
            letters: [],
            search: '',
            song_title: '',
            song_text: ''
        }
    },

    watch: {
        search: function(){
            //=== hightlight search words ===
            var context = document.querySelectorAll(".h_name");
            var instance = new Mark(context);
            instance.unmark();
            if(this.search.length>1){
                instance.mark(this.search, {'acrossElements': true});
            }
        }
    },

    mounted() {
        var api_key = "AIzaSyArcu39UU0RqtdRyuT_zaqCpgYM-qQITYE";
        var sheet_id = "1jNoICtKyk6eOwivBTMs4yDNSsFx_36kUhRW5AgzKkh8";
        var sheet_name = "Список песен";
        var range = "!A2:F100";
        
        var url = "https://sheets.googleapis.com/v4/spreadsheets/"+sheet_id+"/values/"+sheet_name+range+"?key="+api_key;
        axios.get(url).then(response => {
            this.songs = response.data.values;
            this.songs.forEach(item => {
                if(!this.letters.includes(item[0].substring(0,1))){
                    this.letters.push(item[0].substring(0,1));
                }
            });
        }).catch(error => {
            this.songs = [];
            this.letters = [];
            console.log(error);
        });
    },

    methods: {
        get_text(index){
            this.song_title = this.songs[index][0];
            this.song_text = this.songs[index][5];
        }
    }
});