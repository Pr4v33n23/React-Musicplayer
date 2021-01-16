(this["webpackJsonpmusic-player-ts"]=this["webpackJsonpmusic-player-ts"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(2),i=c.n(n),r=c(10),o=c.n(r),s=c(5),l=c(3),u=c(6),p=c(4),d=function(e){var t=e.currentSong,c=e.isPlaying,i=e.setIsPlaying,r=e.songs,o=e.audioRef,d=e.setCurrentSong,b=e.setSongs,j=Object(n.useState)({currentTime:0,duration:0}),h=Object(s.a)(j,2),m=h[0],f=h[1];Object(n.useEffect)((function(){var e=r.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})}));b(e)}),[t,b,r]);var v=function(e){return"".concat(Math.floor(e/60),":").concat(("0"+Math.floor(e%60)).slice(-2))},g=function(e){var t=e.target.currentTime,c=e.target.duration;f(Object(l.a)(Object(l.a)({},m),{},{currentTime:t,duration:c}))},O=function(e){var a=r.findIndex((function(e){return e.id===t.id}));if("skip-forward"===e&&d(r[(a+1)%r.length]),"skip-back"===e){if((a-1)%r.length===-1){if(d(r[r.length-1]),c){var n=o.current.play();void 0!==n&&n.then((function(e){o.current.play()}))}return}d(r[(a-1)%r.length])}if(c){var i=o.current.play();void 0!==i&&i.then((function(e){o.current.play()}))}};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:v(m.currentTime)}),Object(a.jsx)("input",{min:0,max:m.duration,value:m.currentTime||0,onChange:function(e){o.current.currentTime=e.target.value,f(Object(l.a)(Object(l.a)({},m),{},{currentTime:e.target.value}))},type:"range"}),Object(a.jsx)("p",{children:m.duration?v(m.duration):"0:00"})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(u.a,{onClick:function(){return O("skip-back")},className:"skip-back",size:"1x",icon:p.a}),Object(a.jsx)(u.a,{onClick:function(){c?(o.current.pause(),i(!c)):(o.current.play(),i(!c))},className:"play",size:"1x",icon:c?p.d:p.e}),Object(a.jsx)(u.a,{className:"skip-forward",size:"1x",icon:p.b,onClick:function(){return O("skip-forward")}})]}),Object(a.jsx)("audio",{onTimeUpdate:g,onLoadedMetadata:g,ref:o,src:t.audio})]})},b=function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},j=(c(21),c(24));var h=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(j.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(j.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(j.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(j.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(j.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(j.a)(),active:!1},{name:"yyyyyyyyyyyyyyy",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(j.a)(),active:!1},{name:"xxxxxxxx",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(j.a)(),active:!1}]},m=function(e){var t=e.song,c=e.songs,n=e.setCurrentSong,i=e.audioRef,r=e.isPlaying,o=e.setSongs,s=e.id;return Object(a.jsxs)("div",{onClick:function(){var e=c.map((function(e){return e.id===s?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})}));if(o(e),n(t),r){var a=i.current.play();void 0!==a&&a.then((function(e){i.current.play()}))}},className:"library-song ".concat(t.active?"selected":""),children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.artist})]})]})},f=function(e){var t=e.songs,c=e.setCurrentSong,n=e.audioRef,i=e.isPlaying,r=e.setSongs,o=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(o?"active-library":""),children:[Object(a.jsx)("h2",{children:"Library"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(m,{song:e,songs:t,setCurrentSong:c,id:e.id,audioRef:n,isPlaying:i,setSongs:r},e.name)}))})]})},v=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Waves"}),Object(a.jsxs)("button",{onClick:function(){return c(!t)},children:["Library",Object(a.jsx)(u.a,{icon:p.c})]})]})};var g=function(){var e=Object(n.useRef)(),t=Object(n.useState)(h()),c=Object(s.a)(t,2),i=c[0],r=c[1],o=Object(n.useState)(i[0]),l=Object(s.a)(o,2),u=l[0],p=l[1],j=Object(n.useState)(!1),m=Object(s.a)(j,2),g=m[0],O=m[1],x=Object(n.useState)(!1),y=Object(s.a)(x,2),S=y[0],C=y[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(v,{libraryStatus:S,setLibraryStatus:C}),Object(a.jsx)(b,{currentSong:u}),Object(a.jsx)(d,{setIsPlaying:O,isPlaying:g,currentSong:u,setCurrentSong:p,songs:i,audioRef:e,setSongs:r}),Object(a.jsx)(f,{songs:i,setCurrentSong:p,audioRef:e,isPlaying:g,setSongs:r,libraryStatus:S})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),O()}},[[22,1,2]]]);
//# sourceMappingURL=main.232910c9.chunk.js.map