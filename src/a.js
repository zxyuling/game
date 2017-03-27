import utils  from './utils';
window.u = utils
console.log(utils)
function z (){
     this.wt =[];
     this.body = {now:[],next:[]};
     this.listner = {on:{},emit:{}};
     this.render = false;
  var  canvas = document.querySelector("#myCanvas");
   this. ctx = canvas.getContext("2d"); 
}
z.prototype = {
    initBody(opt){
        var i,o = this.bindSG(opt),emitObj ;
        this.wt.push(o);
        this.body.now.push(opt)
        this.body.next.push(utils.extend({},opt));
       //  pushListener(this.listner.on,opt.on);
       //  pushListener(this.listner.emit,opt.emit);
       // for(emitObj in opt.emit) {opt.emit[emitObj].origin = opt};
        return o;
        // function pushListener(arr,obj){
        //     var item
        //     for(item in obj){
        //         item in arr?arr[item].push(obj[item]):arr[item] = [obj[item]];
        //     }
        // }
    },
    eventDeal(){
         var origin,target,eName,self = this;
         this.body.now.forEach(function(origin,indexO,arr){
           for(eName in origin.emit){
                self.body.next.forEach(function(target,indexT,arrT){
                   if(indexT!==indexO&&typeof target.on!=='undefined'&&typeof target.on[eName]!=='undefined'){
                        target.on[eName](indexO,indexT);
                      //console.log(target)
                    }
                })
           }
        })
         self.body.next.forEach(function(item,index,arr){
            utils.extend(self.body.now[index],item);
            item.draw(item);
         })
    },
    next(){
      this.ctx.clearRect(0,0,3000,3000);
        this.eventDeal();
       //  var self = this;
       // self.wt.forEach(function(item,index,arr){
      
       //  for(var eName in item.emit){
       //      self.wt.forEach(function(it1,in1,arr1){
       //            if(it1!==item)
       //              try{
       //            it1.bindEvent[eName](item,it1);
       //        }catch(e){}
       //      })
       //  }
       // })
    },
    createCle(o2){

        var self = this;
        function draw(o2){
            console.log(1)
                    self.ctx.beginPath();
                    self.ctx.strokeStyle = 'blue';
                    self.ctx.arc(o2.x, o2.y, o2.r, 0, 2*Math.PI , false);    
                     self.ctx.stroke();
        }
        function GG(origin){
            this.bindEvent.G(origin,o2)
       }
        draw(o2);
        o2.draw = draw;
        if(o2.G!==0)
        o2.on={G: this.bindEvent().G};
        o2.emit={G:{}};
       return    this.initBody(o2);
    },
    createLine(o2){

         this.ctx.strokeStyle = o2.color;
        this.ctx.beginPath();
        this.ctx.moveTo(o2.x,o2.y);
        for(var x=0;x<o2.len ;x++){
             this.ctx.lineTo(o2.x+x,o2.zf*Math.sin(x*2*Math.PI/180)+o2.y);
        }       
         this.ctx.stroke();
     },
     bindSG(obj){
        var i=0,m={},self = this;
        for(i in obj){
            (function(){
                var value = obj[i]
                Object.defineProperty(m,i,{
                    set :function(x){
                        value = x;
                        //if(self.render)
                          //  this.draw(this);
                    },
                    get:function(){
                        return value;
                    }
                })
            })()
        }
        return m;
     },
     bindEvent(){
      var self = this;
        return {
            G(io,it){
              var aa = self.body.now[io],obj = self.body.now[it],next = self.body.next[it];
              var d = ((aa.x-obj.x)* (aa.x-obj.x)+ (aa.y-obj.y)* (aa.y-obj.y)),m=aa.m;
              var g =10*m/d
              next.vx += g*(aa.x-obj.x)/Math.sqrt(d);
              next.vy +=g*(aa.y-obj.y)/Math.sqrt(d);
              next.x+=obj.vx
              next.y+=obj.vy
             // obj.draw(obj); 
          }
        }
      },
     emit:['G'],  
}
window.d= new z();
var canvas = document.querySelector("#myCanvas");
    var ctx = canvas.getContext("2d"); 

//d.createCle({x:100,y:100,r:50,m:50});
var bb = d.createCle({x:100,y:150,r:20,m:8,vx:0,vy:0,G:0});
var bb = d.createCle({x:150,y:161,r:10,m:1,vx:0,vy:0});
 
var bb = d.createCle({x:200,y:150,r:20,m:8,vx:0,vy:0,G:0});
// var bb = d.createCle({x:250,y:250,r:20,m:8,vx:01,vy:1});

//var aa = d.createCle({x:300,y:300,r:20,m:0.001,vx:1,vy:-1});
// for(var i=0;i<20;i++){
//     d.createCle({x:Math.random()*300,y:Math.random()*300,r:Math.random()*60,m:20,vx:Math.random()-0.5,vy:Math.random()-0.5});
// }
var a= function(){  
    // ctx.clearRect(0,0,3000,3000);
    // d.bindEvent[d.emit[0]](bb,aa);
    // d.bindEvent[d.emit[0]](aa,bb);
    d.next();
   requestAnimationFrame(a)

}
window.s = a;
requestAnimationFrame(a);
// requestAnimationFrame(function(){
        
//         window.a++;
// })
// var i = 0,j=0,z=0,k="-",z=1;
// canvas = document.querySelector("#myCanvas");
//     ctx = canvas.getContext("2d"); 
// var aaa = function(){
// ctx.clearRect(0,0,300,300);
//     if(k=="+"){
//         z=z+0.3
//         if(z>5)k="-"
//     }
//     if(k=="-"){
//         z=z-0.3
//         if(z<-5)k="+"
//     }
//     console.log(z)
//     // d.createCle({x:200,y:200,r:80,m:80});
//     // ctx.clip();
//      d.createLine({x:i--,y:200,len:400+j++,zf:10,color:'#ff0000'})

//     requestAnimationFrame(aaa);
// }
// requestAnimationFrame(aaa);
