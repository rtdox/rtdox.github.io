var app = new Vue({
    el: '#app',
    data: {
        rules: [
            {field:"size", operator:">", value:"1"},
        ],
        result: []
    },

    methods: {
        DeleteRule(index) {
            this.rules.splice(index, 1);
        },

        AddRule() {
            this.rules.push({field:"0", operator:"0", value:""});
        },

        Clear() {
            this.rules = [{field:"0", operator:"0", value:""}];
        },

        Apply() {
            axios.get('server.php', {
                params: {
                    rules: JSON.stringify(this.rules)
                }
            }).then(
                response => (
                    this.result = Array.from(response.data.items)
                )
            );
        }
    }
})