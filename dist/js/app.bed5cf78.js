(function(t){function e(e){for(var o,c,i=e[0],a=e[1],u=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},s=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3344:function(t,e,n){},"532a":function(t,e,n){t.exports=n.p+"media/high.856df0aa.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"timer-div"},s=Object(o["f"])("h1",null,"Rasta Reaction Timer",-1),c=["disabled"],i=Object(o["g"])(" Play "),a=Object(o["f"])("i",{class:"fa-solid fa-gamepad"},null,-1),u=[i,a];function l(t,e,n,i,a,l){var f=Object(o["i"])("Block"),p=Object(o["i"])("Results");return Object(o["h"])(),Object(o["e"])("div",r,[s,Object(o["f"])("button",{onClick:e[0]||(e[0]=function(){return l.start&&l.start.apply(l,arguments)}),disabled:a.isPlaying},u,8,c),a.isPlaying?(Object(o["h"])(),Object(o["c"])(f,{key:0,class:"block",delay:a.delay,onEnd:l.endGame},null,8,["delay","onEnd"])):Object(o["d"])("",!0),a.showResults?(Object(o["h"])(),Object(o["c"])(p,{key:1,score:a.score},null,8,["score"])):Object(o["d"])("",!0)])}var f=Object(o["f"])("p",null,[Object(o["g"])("Click Me Monnn"),Object(o["f"])("i",{class:"fa-solid fa-computer-mouse"})],-1),p=[f];function d(t,e,n,r,s,c){return s.showBlock?(Object(o["h"])(),Object(o["e"])("div",{key:0,class:"block",onClick:e[0]||(e[0]=function(){return c.stopTimer&&c.stopTimer.apply(c,arguments)})},p)):Object(o["d"])("",!0)}n("4795");var b={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var t=this;console.log("component mounted"),setTimeout((function(){t.showBlock=!0,t.startTimer(),console.log(t.delay)}),this.delay)},methods:{startTimer:function(){var t=this;this.timer=setInterval((function(){t.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),this.$emit("end",this.reactionTime)}}},h=(n("f466"),n("6b0d")),m=n.n(h);const j=m()(b,[["render",d]]);var O=j,y={class:"results"},g={class:"rang"},v={key:0},k=["src"],w={key:1},R=["src"];function P(t,e,n,r,s,c){return Object(o["h"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("p",y,"U Reactietijd Score is: "+Object(o["j"])(n.score)+" ms",1),Object(o["f"])("p",g,"Uw Rang: "+Object(o["j"])(s.rank),1),this.score<250?(Object(o["h"])(),Object(o["e"])("div",v,[Object(o["f"])("img",{src:s.urlm,alt:""},null,8,k)])):(Object(o["h"])(),Object(o["e"])("div",w,[Object(o["f"])("img",{src:s.url,alt:""},null,8,R)]))],64)}var T={props:["score"],data:function(){return{url:"https://image.shutterstock.com/image-vector/white-guy-rastaman-beard-glasses-600w-1704141712.jpg",urlm:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposterspy.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fmatrix-neo-pinterest.jpg&f=1&nofb=1",rank:0,music:""}},mounted:function(){var t="default file";this.score<250?(this.rank="Congratz YOU ESCAPED THE MATRIX",t=n("9665")):this.score<400?(this.rank="BloodClat Rapid Reflexes You still need to practice some more",t=n("532a")):(this.rank="Afro Man you need to stop getting High and press the button Faster!",t=n("532a")),this.music=new Audio(t),this.music.play(),this.music.controls=!0,this.music.loop=!0,this.music.playbackRate=1},unmounted:function(){this.music.pause(),console.log("unmounted")}};n("fa57");const x=m()(T,[["render",P]]);var S=x,A={name:"App",components:{Block:O,Results:S},data:function(){return{isPlaying:!1,delay:null,score:null,showResults:!1}},mounted:function(){},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResults=!1},endGame:function(t){this.score=t,this.isPlaying=!1,this.showResults=!0}}};n("945e");const E=m()(A,[["render",l]]);var M=E;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).SUPABASE_URL),Object(o["b"])(M).mount("#app")},7597:function(t,e,n){},"79b7":function(t,e,n){},"945e":function(t,e,n){"use strict";n("7597")},9665:function(t,e,n){t.exports=n.p+"media/matrixbaby.2017e9eb.mp3"},f466:function(t,e,n){"use strict";n("79b7")},fa57:function(t,e,n){"use strict";n("3344")}});
//# sourceMappingURL=app.bed5cf78.js.map