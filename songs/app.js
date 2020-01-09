//=========== MAIN CODE ===========
var app = new Vue({
    el: '#app',
    data() {
        return {
            songs: []
        }
    },

    mounted() {
        var api_key = "AIzaSyArcu39UU0RqtdRyuT_zaqCpgYM-qQITYE";
        var sheet_id = "1jNoICtKyk6eOwivBTMs4yDNSsFx_36kUhRW5AgzKkh8";
        var sheet_name = "Список песен";
        var range = "!A2:E100";
        
        var url = "https://sheets.googleapis.com/v4/spreadsheets/"+sheet_id+"/values/"+sheet_name+range+"?key="+api_key;
        axios.get(url).then((response) => {
            this.songs = response.data.values
        }).catch(function (error) {
            this.songs = [];
            console.log(error);
        });
    }
});