Vue.component('image-block', {
    data:  {
        color: '',
        fontWeight: ''
    },

    props: ['number'],

    computed: {
        styling: function() {
            return {
                color: 'red',
                fontWeight: 'bold'
            }
        }
    },

    methods: {
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    },

    template: '<div class="image_block" :class="\'num\'+number" @click="number=getRandomInt(4)+1" :style="styling">{{number}}</div>'
});


var app = new Vue({el: '#app'});



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