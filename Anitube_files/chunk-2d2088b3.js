(window["arcWidgetJsonp"]=window["arcWidgetJsonp"]||[]).push([["chunk-2d2088b3"],{a4f0:function(t,e,a){"use strict";a.r(e),a.d(e,"runSaturnBenchmarkInterval",(function(){return I})),a.d(e,"runBenchmark",(function(){return P}));var n=a("c64e"),r=a.n(n),o=a("8c32"),s=a("5de4"),i=a("cb34"),c=a("0ab3");console.log;const l="https://l1s.saturn.ms",u="https://l1s.saturn-test.ms",d="https://ipfs.io",f=1048576,h=10*f,p={saturnOrigin:l,bifrostOrigin:"https://bifrost-gateway.ipfs.io",benchmarkReportUrl:"https://afsocse35xksgf3rwwqpkzhzsi0ftpck.lambda-url.us-west-2.on.aws/",logIngestorUrl:"https://twb3qukm2i654i3tnvx36char40aymqq.lambda-url.us-west-2.on.aws/",raceSampleRate:.05,rheaSampleRate:0,loadSampleRate:.9,numLoadRequests:2},w={saturnOrigin:u,bifrostOrigin:"https://bifrost-gateway.stage.ipfs.io",benchmarkReportUrl:"https://ynsnesy3xloaxx2dqiocs46vkm0ncoru.lambda-url.us-west-2.on.aws/",logIngestorUrl:"https://p6wofrb2zgwrf26mcxjpprivie0lshfx.lambda-url.us-west-2.on.aws/",raceSampleRate:.005,rheaSampleRate:0,loadSampleRate:.02,numLoadRequests:1},{Saturn:m,indexedDbStorage:g,extractVerifiedContent:b}=window.SaturnModule,y=new m({cdnURL:p.saturnOrigin,logURL:p.logIngestorUrl,storage:g(),logSender:"arc",clientKey:"abc123"}),S=new m({cdnURL:w.saturnOrigin,logURL:w.logIngestorUrl,logSender:"arc",clientKey:"abc123"});async function I(){try{await P(p,y),await P(w,S)}catch(t){}finally{setTimeout(I,6e4)}}async function R(){const{cids:t}=await a.e("chunk-2d0cf2b3").then(a.t.bind(null,"6322",3));try{const e="https://cids.arc.io/top-cids",a=await Object(s["j"])(e).then(t=>t.json());return a.length?a.map(t=>["/ipfs/"+t,0]):t}catch(e){return t}}async function v(){const{cids:t}=await a.e("chunk-2d0cf2b3").then(a.t.bind(null,"6322",3));try{const e="https://cids.arc.io/rhea-cids?limit=500",a=await Object(s["j"])(e).then(t=>t.json());return a.length?a.map(t=>[t,0]):t}catch(e){return t}}async function P(t,e){const a=await R(),n=Math.random()<t.raceSampleRate;let r=[];n&&(r=await k(t,a));for(let i=0;i<t.numLoadRequests;i++)Math.random()<t.loadSampleRate&&(await M(e,t,a),await Object(o["i"])(1e3));t.saturnOrigin===l&&Math.random()<.5&&(await M(e,t,a),await Object(o["i"])(1e3)),r.length&&(await j(t,{race:r}),await B(t,r));const s=Math.random()<t.rheaSampleRate;if(s){const e=await v(),a=await x(t,e);await j(t,{race:a})}}async function k(t,e){const{cid:a,cidPath:n}=E(e),r="car";let o;return o=Math.random()>.5?[await O(a,n,r),await U(t,a,n,r)]:[await U(t,a,n,r),await O(a,n,r)],o}async function x(t,e){const{cid:a,cidPath:n}=E(e),r=(Math.random(),null);let o;return o=Math.random()>.5?[await O(a,n,r),await T(t,a,n,r)]:[await T(t,a,n,r),await O(a,n,r)],o}async function M(t,e,a){let{cidPath:n}=E(a);n=n.replace("/ipfs/","");const r=new AbortController,o={cache:"no-store",controller:r};let s=0;try{for await(const e of t.fetchContent(n,o))s+=e.length,s>h&&r.abort()}catch(i){}}function O(t,e,a){const n=new URL(d+e);return C("ipfs",n,t,a)}function T(t,e,a,n){const r=new URL(t.bifrostOrigin+a);return C("bifrost",r,e,n)}function U(t,e,a,n){const r=new URL(t.saturnOrigin+a);return r.searchParams.set("clientId",F()),C("saturn",r,e,n)}async function C(t,e,a,n=null){n&&(e.searchParams.set("format",n),"car"===n&&e.searchParams.set("dag-scope","entity")),e.searchParams.delete("filename");const r={service:t,cid:a,url:e,transferId:null,httpStatusCode:null,httpProtocol:null,nodeId:null,cacheStatus:null,ttfb:null,ttfbAfterDnsMs:null,dnsTimeMs:null,startTime:new Date,endTime:null,transferSize:null,ifError:null,isDir:null,traceparent:null};try{var o,s,i,c;const t={cache:"no-store",headers:{}},a=await fetch(e,t),{headers:l}=a;r.httpStatusCode=a.status,r.cacheStatus=null!==(o=l.get("saturn-cache-status"))&&void 0!==o?o:l.get("x-proxy-cache"),r.nodeId=null!==(s=l.get("saturn-node-id"))&&void 0!==s?s:l.get("x-ipfs-pop"),r.transferId=null!==(i=l.get("saturn-transfer-id"))&&void 0!==i?i:l.get("x-bfid"),r.httpProtocol=l.get("quic-status"),r.transferSize=0,r.ttfb=new Date,32===(null===(c=r.transferId)||void 0===c?void 0:c.length)&&(r.traceparent=z(r.transferId)),"car"===n?await q(a,r):await L(a,r)}catch(l){r.ifError=l.message}finally{r.endTime=new Date}if(window.performance){const t=performance.getEntriesByType("resource").find(t=>t.name===e.href);if(t){const e=t.domainLookupStart,a=t.domainLookupEnd,n=a>0&&e>0;n&&(r.dnsTimeMs=Math.round(a-e),r.ttfbAfterDnsMs=Math.round(t.responseStart-t.requestStart)),null===r.httpProtocol&&t.nextHopProtocol&&(r.httpProtocol=t.nextHopProtocol),r.isFromBrowserCache="cache"===t.deliveryType||r.httpStatusCode&&0===t.transferSize}}return r}async function L(t,e){const a="text/html"===t.headers.get("content-type"),n=[];for await(const r of A(t.body))if(e.ttfb||(e.ttfb=new Date),e.transferSize+=r.length,a&&n.push(r),e.transferSize>h)break;if(a){const t=await new Blob(n).text(),a="A directory of content-addressed files hosted on IPFS",r="A directory of files hosted on the distributed, decentralized web using IPFS";e.isDir=t.includes(a)||t.includes(r)}else e.isDir=!1}async function q(t,e){async function*a(t){for await(const a of A(t)){if(e.transferSize+=a.length,e.transferSize>h)break;yield a}}const n=new URL(t.url).pathname.replace("/ipfs/",""),r=a(t.body);try{for await(const t of b(n,r));}catch(o){e.verificationError=o.message}}function z(t){const e=i["a"].trace.getTracer("default").startSpan("request"),a="00",{spanId:n}=e.spanContext(),r="01",o=`${a}-${t}-${n}-${r}`;return o}function D(t){var e;return{nodeId:t.nodeId,cacheHit:"HIT"===t.cacheStatus,url:t.url,startTime:t.startTime,numBytesSent:t.transferSize,range:null,requestDurationSec:(t.endTime-t.startTime)/1e3,requestId:t.transferId,httpStatusCode:t.httpStatusCode,httpProtocol:t.httpProtocol,error:null!==(e=t.ifError)&&void 0!==e?e:t.verificationError,ttfbMs:t.ttfb?t.ttfb-t.startTime:null}}async function j(t,{race:e=[],load:a=[]}){e=e.filter(t=>!t.isFromBrowserCache),a=a.filter(t=>!t.isFromBrowserCache),await fetch(t.benchmarkReportUrl,{method:"POST",body:JSON.stringify({race:e,load:a})})}async function B(t,e){const a=e.filter(t=>"saturn"===t.service&&!t.isFromBrowserCache).map(D);a.length&&await fetch(t.logIngestorUrl,{method:"POST",body:JSON.stringify({bandwidthLogs:a,logSender:"arc"})})}function E(t){var e;const[a]=t[Math.floor(Math.random()*t.length)],n=null===(e=a.split("?")[0])||void 0===e?void 0:e.split("/")[2];return{cid:n,cidPath:a}}function F(){const t="saturnClientId";let e=localStorage.getItem(t);return e||(e=r()(),localStorage.setItem(t,e)),e}async function*A(t,e={}){const a=t.getReader();try{while(1){const t=await a.read();if(t.done)return;yield t.value}}finally{!0!==e.preventCancel&&a.cancel(),a.releaseLock()}}(new c["a"]).register()}}]);
//# sourceMappingURL=chunk-2d2088b3.js.map?85cee77e