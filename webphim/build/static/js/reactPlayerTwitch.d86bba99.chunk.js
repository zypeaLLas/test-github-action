(self.webpackChunkwebphim=self.webpackChunkwebphim||[]).push([[42],{267:(e,t,a)=>{var r,s=a(897).default,l=Object.create,n=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,p=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,d=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of o(t))h.call(e,s)||s===a||n(e,s,{get:()=>t[s],enumerable:!(r=i(t,s))||r.enumerable});return e},c=(e,t,a)=>(((e,t,a)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),y={};((e,t)=>{for(var a in t)n(e,a,{get:t[a],enumerable:!0})})(y,{default:()=>E}),e.exports=(r=y,d(n({},"__esModule",{value:!0}),r));var u=((e,t,a)=>(a=null!=e?l(p(e)):{},d(!t&&e&&e.__esModule?a:n(a,"default",{value:e,enumerable:!0}),e)))(a(43)),m=a(206),P=a(520);class E extends u.Component{constructor(){super(...arguments),c(this,"callPlayer",m.callPlayer),c(this,"playerID",this.props.config.playerId||"".concat("twitch-player-").concat((0,m.randomString)())),c(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),c(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:a,onError:r,config:l,controls:n}=this.props,i=P.MATCH_URL_TWITCH_CHANNEL.test(e),o=i?e.match(P.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(P.MATCH_URL_TWITCH_VIDEO)[1];t?i?this.player.setChannel(o):this.player.setVideo("v"+o):(0,m.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,s({video:i?"":o,channel:i?o:"",height:"100%",width:"100%",playsinline:a,autoplay:this.props.playing,muted:this.props.muted,controls:!!i||n,time:(0,m.parseStartTime)(e)},l.options));const{READY:r,PLAYING:p,PAUSE:h,ENDED:d,ONLINE:c,OFFLINE:y,SEEK:u}=t.Player;this.player.addEventListener(r,this.props.onReady),this.player.addEventListener(p,this.props.onPlay),this.player.addEventListener(h,this.props.onPause),this.player.addEventListener(d,this.props.onEnded),this.player.addEventListener(u,this.props.onSeek),this.player.addEventListener(c,this.props.onLoaded),this.player.addEventListener(y,this.props.onLoaded)}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}c(E,"displayName","Twitch"),c(E,"canPlay",P.canPlay.twitch),c(E,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.d86bba99.chunk.js.map