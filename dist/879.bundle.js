(self.webpackChunkrestaurant_catalogue=self.webpackChunkrestaurant_catalogue||[]).push([[879],{879:e=>{!function(t){var a=function(e,t,a){"use strict";var n,i;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},a)t in i||(i[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var s,o,r,l,c,d,u,f,m,h,z,y,g,v,p,C,b,A,E,_,w,M,N,L,x,W,S,k,B,T,F,R,D,H,O,P,$,q,I,U,j,G,J,K,Q=t.documentElement,V=e.HTMLPictureElement,X="addEventListener",Y="getAttribute",Z=e[X].bind(e),ee=e.setTimeout,te=e.requestAnimationFrame||ee,ae=e.requestIdleCallback,ne=/^picture$/i,ie=["load","error","lazyincluded","_lazyloaded"],se={},oe=Array.prototype.forEach,re=function(e,t){return se[t]||(se[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),se[t].test(e[Y]("class")||"")&&se[t]},le=function(e,t){re(e,t)||e.setAttribute("class",(e[Y]("class")||"").trim()+" "+t)},ce=function(e,t){var a;(a=re(e,t))&&e.setAttribute("class",(e[Y]("class")||"").replace(a," "))},de=function(e,t,a){var n=a?X:"removeEventListener";a&&de(e,t),ie.forEach((function(a){e[n](a,t)}))},ue=function(e,a,i,s,o){var r=t.createEvent("Event");return i||(i={}),i.instance=n,r.initEvent(a,!s,!o),r.detail=i,e.dispatchEvent(r),r},fe=function(t,a){var n;!V&&(n=e.picturefill||i.pf)?(a&&a.src&&!t[Y]("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},me=function(e,t){return(getComputedStyle(e,null)||{})[t]},he=function(e,t,a){for(a=a||e.offsetWidth;a<i.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},ze=(j=[],G=U=[],K=function(e,a){q&&!a?e.apply(this,arguments):(G.push(e),I||(I=!0,(t.hidden?ee:te)(J)))},K._lsFlush=J=function(){var e=G;for(G=U.length?j:U,q=!0,I=!1;e.length;)e.shift()();q=!1},K),ye=function(e,t){return t?function(){ze(e)}:function(){var t=this,a=arguments;ze((function(){e.apply(t,a)}))}},ge=function(e){var t,n,i=function(){t=null,e()},s=function(){var e=a.now()-n;e<99?ee(s,99-e):(ae||i)(i)};return function(){n=a.now(),t||(t=ee(s,99))}},ve=(b=/^img$/i,A=/^iframe$/i,E="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),_=0,w=0,M=-1,N=function(e){w--,(!e||w<0||!e.target)&&(w=0)},L=function(e){return null==C&&(C="hidden"==me(t.body,"visibility")),C||!("hidden"==me(e.parentNode,"visibility")&&"hidden"==me(e,"visibility"))},x=function(e,a){var n,i=e,s=L(e);for(y-=a,p+=a,g-=a,v+=a;s&&(i=i.offsetParent)&&i!=t.body&&i!=Q;)(s=(me(i,"opacity")||1)>0)&&"visible"!=me(i,"overflow")&&(n=i.getBoundingClientRect(),s=v>n.left&&g<n.right&&p>n.top-1&&y<n.bottom+1);return s},S=function(e){var t,n=0,s=i.throttleDelay,o=i.ricTimeout,r=function(){t=!1,n=a.now(),e()},l=ae&&o>49?function(){ae(r,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:ye((function(){ee(r)}),!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,(i=s-(a.now()-n))<0&&(i=0),e||i<9?l():ee(l,i))}}(W=function(){var e,a,s,o,r,l,u,m,b,A,N,W,S=n.elements;if((f=i.loadMode)&&w<8&&(e=S.length)){for(a=0,M++;a<e;a++)if(S[a]&&!S[a]._lazyRace)if(!E||n.prematureUnveil&&n.prematureUnveil(S[a]))H(S[a]);else if((m=S[a][Y]("data-expand"))&&(l=1*m)||(l=_),A||(A=!i.expand||i.expand<1?Q.clientHeight>500&&Q.clientWidth>500?500:370:i.expand,n._defEx=A,N=A*i.expFactor,W=i.hFac,C=null,_<N&&w<1&&M>2&&f>2&&!t.hidden?(_=N,M=0):_=f>1&&M>1&&w<6?A:0),b!==l&&(h=innerWidth+l*W,z=innerHeight+l,u=-1*l,b=l),s=S[a].getBoundingClientRect(),(p=s.bottom)>=u&&(y=s.top)<=z&&(v=s.right)>=u*W&&(g=s.left)<=h&&(p||v||g||y)&&(i.loadHidden||L(S[a]))&&(d&&w<3&&!m&&(f<3||M<4)||x(S[a],l))){if(H(S[a]),r=!0,w>9)break}else!r&&d&&!o&&w<4&&M<4&&f>2&&(c[0]||i.preloadAfterLoad)&&(c[0]||!m&&(p||v||g||y||"auto"!=S[a][Y](i.sizesAttr)))&&(o=c[0]||S[a]);o&&!r&&H(o)}}),B=ye(k=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(N(e),le(t,i.loadedClass),ce(t,i.loadingClass),de(t,T),ue(t,"lazyloaded"))}),T=function(e){B({target:e.target})},F=function(e,t){var a=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)},R=function(e){var t,a=e[Y](i.srcsetAttr);(t=i.customMedia[e[Y]("data-media")||e[Y]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},D=ye((function(e,t,a,n,s){var o,r,l,c,d,f;(d=ue(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?le(e,i.autosizesClass):e.setAttribute("sizes",n)),r=e[Y](i.srcsetAttr),o=e[Y](i.srcAttr),s&&(c=(l=e.parentNode)&&ne.test(l.nodeName||"")),f=t.firesLoad||"src"in e&&(r||o||c),d={target:e},le(e,i.loadingClass),f&&(clearTimeout(u),u=ee(N,2500),de(e,T,!0)),c&&oe.call(l.getElementsByTagName("source"),R),r?e.setAttribute("srcset",r):o&&!c&&(A.test(e.nodeName)?F(e,o):e.src=o),s&&(r||c)&&fe(e,{src:o})),e._lazyRace&&delete e._lazyRace,ce(e,i.lazyClass),ze((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&le(e,i.fastLoadedClass),k(d),e._lazyCache=!0,ee((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&w--}),!0)})),H=function(e){if(!e._lazyRace){var t,a=b.test(e.nodeName),n=a&&(e[Y](i.sizesAttr)||e[Y]("sizes")),s="auto"==n;(!s&&d||!a||!e[Y]("src")&&!e.srcset||e.complete||re(e,i.errorClass)||!re(e,i.lazyClass))&&(t=ue(e,"lazyunveilread").detail,s&&pe.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,w++,D(e,t,s,n,a))}},O=ge((function(){i.loadMode=3,S()})),$=function(){d||(a.now()-m<999?ee($,999):(d=!0,i.loadMode=3,S(),Z("scroll",P,!0)))},{_:function(){m=a.now(),n.elements=t.getElementsByClassName(i.lazyClass),c=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),Z("scroll",S,!0),Z("resize",S,!0),Z("pageshow",(function(e){if(e.persisted){var a=t.querySelectorAll("."+i.loadingClass);a.length&&a.forEach&&te((function(){a.forEach((function(e){e.complete&&H(e)}))}))}})),e.MutationObserver?new MutationObserver(S).observe(Q,{childList:!0,subtree:!0,attributes:!0}):(Q[X]("DOMNodeInserted",S,!0),Q[X]("DOMAttrModified",S,!0),setInterval(S,999)),Z("hashchange",S,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[X](e,S,!0)})),/d$|^c/.test(t.readyState)?$():(Z("load",$),t[X]("DOMContentLoaded",S),ee($,2e4)),n.elements.length?(W(),ze._lsFlush()):S()},checkElems:S,unveil:H,_aLSL:P=function(){3==i.loadMode&&(i.loadMode=2),O()}}),pe=(o=ye((function(e,t,a,n){var i,s,o;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),ne.test(t.nodeName||""))for(s=0,o=(i=t.getElementsByTagName("source")).length;s<o;s++)i[s].setAttribute("sizes",n);a.detail.dataAttr||fe(e,a.detail)})),r=function(e,t,a){var n,i=e.parentNode;i&&(a=he(e,i,a),(n=ue(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=n.detail.width)&&a!==e._lazysizesWidth&&o(e,i,n,a))},{_:function(){s=t.getElementsByClassName(i.autosizesClass),Z("resize",l)},checkElems:l=ge((function(){var e,t=s.length;if(t)for(e=0;e<t;e++)r(s[e])})),updateElem:r}),Ce=function(){!Ce.i&&t.getElementsByClassName&&(Ce.i=!0,pe._(),ve._())};return ee((function(){i.init&&Ce()})),n={cfg:i,autoSizer:pe,loader:ve,init:Ce,uP:fe,aC:le,rC:ce,hC:re,fire:ue,gW:he,rAF:ze}}(t,t.document,Date);t.lazySizes=a,e.exports&&(e.exports=a)}("undefined"!=typeof window?window:{})}}]);
//# sourceMappingURL=879.bundle.js.map