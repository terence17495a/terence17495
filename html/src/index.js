/*var clock = new Vue({
    el: '#clock',
    data: {
        time: '',            
        date: ''                       
    },
    methods:{
      updateTime:function(){
        var cd = new Date();
        this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
        this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2);         
        //console.log(this.time);
      },
      zeroPadding:function(num, digit){
        var zero = '';
        for(var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
      }
    },
    mounted:function(){
      this.updateTime();
      var timerID = setInterval(this.updateTime, 1000);
    }
});
*/

function ShowTime(){
  　var now=new Date();
  　var h=now.getHours();
  　var m=now.getMinutes();
  　var s=now.getSeconds();
    var y=now.getFullYear();
    var mu=now.getMonth()+1;
    var d=now.getDate();
  　document.getElementById('time').innerHTML = h+':'+m+':'+s;
  document.getElementById('date').innerHTML =d+'/'+mu+'/'+y;
  　setTimeout('ShowTime()',1000);
  }



new Vue({
  el: '#winToolbar',
  data: {
    isHidden: true,
  },
  methods: {
    open: function () {
      window.open("http://www.google.com",
        '_blank');

    }
  }
})

new Vue({
  el:'#loginPage',
  data:{
    password:"",
    result: null,
    isHidden:false,
    erroetime:1
  },
  created: function() {   
  },
  methods: {
      test2: function () {
        console.log(this.password=="chowhowai");
        if(this.password==""){
          this.result='input cannot be null';
        }
          else if(this.password=="chowhowai"){
            this.isHidden = true;
          }else if(this.erroetime<=2){
            console.log(this.erroetime);
          this.result='tips : maker name, capital letter and no space';
          this.erroetime++;
          this.password="";
          } else if (this.erroetime>2)
          this.result='chowhowai';
      }
  }
})

var windowMain1 =new Vue({
  el:'.windowMain1',
  data:{
    windowMain1isHidden:false,
  },methods:{
    close:function(){
      console.log("1close");
      this.windowMain1isHidden=false;
    }
  }
})
var windowMain2 =new Vue({
  el:'.windowMain2',
  data:{
    windowMain2isHidden:false,
  },methods:{
    close:function(){
      console.log("1close");
      this.windowMain2isHidden=false;
    }
  }
})
var windowMain3 =new Vue({
  el:'.windowMain3',
  data:{
    windowMain3isHidden:false,
  },methods:{
    close:function(){
      console.log("1close");
      this.windowMain3isHidden=false;
    }
  }
})

new Vue({
  el:'#selec1',
  methods:{
    open:function(){
      console.log("select1");
      windowMain1.windowMain1isHidden=true;
    }
  }
})
new Vue({
  el:'#selec2',
  methods:{
    open:function(){
      console.log("select2");
      windowMain2.windowMain2isHidden=true;
    }
  }
})
new Vue({
  el:'#selec3',
  methods:{
    open:function(){
      console.log("select3");
      windowMain3.windowMain3isHidden=true;
    }
  }
})


