!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t()
else if("function"==typeof define&&define.amd)define([],t)
else{var e
e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.mapboxgl=t()}}(function(){var t
return function e(t,i,r){function n(a,s){if(!i[a]){if(!t[a]){var l="function"==typeof require&&require
if(!s&&l)return l(a,!0)
if(o)return o(a,!0)
var u=Error("Cannot find module '"+a+"'")
throw u.code="MODULE_NOT_FOUND",u}var c=i[a]={exports:{}}
t[a][0].call(c.exports,function(e){var i=t[a][1][e]
return n(i?i:e)},c,c.exports,e,t,i,r)}return i[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)n(r[a])
return n}({1:[function(e,i,r){!function(e,n){"object"==typeof r&&void 0!==i?i.exports=n():"function"==typeof t&&t.amd?t(n):e.glMatrix=n()}(this,function(){"use strict"
function t(t,e,i){var r=e[0],n=e[1],o=e[2]
return t[0]=r*i[0]+n*i[3]+o*i[6],t[1]=r*i[1]+n*i[4]+o*i[7],t[2]=r*i[2]+n*i[5]+o*i[8],t}function e(t,e,i){var r=e[0],n=e[1],o=e[2],a=e[3]
return t[0]=i[0]*r+i[4]*n+i[8]*o+i[12]*a,t[1]=i[1]*r+i[5]*n+i[9]*o+i[13]*a,t[2]=i[2]*r+i[6]*n+i[10]*o+i[14]*a,t[3]=i[3]*r+i[7]*n+i[11]*o+i[15]*a,t}function i(){var t=new Float32Array(4)
return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function r(t,e,i){var r=e[0],n=e[1],o=e[2],a=e[3],s=Math.sin(i),l=Math.cos(i)
return t[0]=r*l+o*s,t[1]=n*l+a*s,t[2]=r*-s+o*l,t[3]=n*-s+a*l,t}function n(t,e,i){var r=e[0],n=e[1],o=e[2],a=e[3],s=i[0],l=i[1]
return t[0]=r*s,t[1]=n*s,t[2]=o*l,t[3]=a*l,t}function o(){var t=new Float32Array(9)
return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function a(t,e){var i=Math.sin(e),r=Math.cos(e)
return t[0]=r,t[1]=i,t[2]=0,t[3]=-i,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function s(){var t=new Float32Array(16)
return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function l(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function u(t,e){var i=e[0],r=e[1],n=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],p=e[9],h=e[10],f=e[11],d=e[12],m=e[13],y=e[14],_=e[15],v=i*s-r*a,g=i*l-n*a,x=i*u-o*a,b=r*l-n*s,w=r*u-o*s,T=n*u-o*l,z=c*m-p*d,E=c*y-h*d,S=c*_-f*d,L=p*y-h*m,M=p*_-f*m,A=h*_-f*y,C=v*A-g*M+x*L+b*S-w*E+T*z
return C?(C=1/C,t[0]=(s*A-l*M+u*L)*C,t[1]=(n*M-r*A-o*L)*C,t[2]=(m*T-y*w+_*b)*C,t[3]=(h*w-p*T-f*b)*C,t[4]=(l*S-a*A-u*E)*C,t[5]=(i*A-n*S+o*E)*C,t[6]=(y*x-d*T-_*g)*C,t[7]=(c*T-h*x+f*g)*C,t[8]=(a*M-s*S+u*z)*C,t[9]=(r*S-i*M-o*z)*C,t[10]=(d*w-m*x+_*v)*C,t[11]=(p*x-c*w-f*v)*C,t[12]=(s*E-a*L-l*z)*C,t[13]=(i*L-r*E+n*z)*C,t[14]=(m*g-d*b-y*v)*C,t[15]=(c*b-p*g+h*v)*C,t):null}function c(t,e,i){var r=e[0],n=e[1],o=e[2],a=e[3],s=e[4],l=e[5],u=e[6],c=e[7],p=e[8],h=e[9],f=e[10],d=e[11],m=e[12],y=e[13],_=e[14],v=e[15],g=i[0],x=i[1],b=i[2],w=i[3]
return t[0]=g*r+x*s+b*p+w*m,t[1]=g*n+x*l+b*h+w*y,t[2]=g*o+x*u+b*f+w*_,t[3]=g*a+x*c+b*d+w*v,g=i[4],x=i[5],b=i[6],w=i[7],t[4]=g*r+x*s+b*p+w*m,t[5]=g*n+x*l+b*h+w*y,t[6]=g*o+x*u+b*f+w*_,t[7]=g*a+x*c+b*d+w*v,g=i[8],x=i[9],b=i[10],w=i[11],t[8]=g*r+x*s+b*p+w*m,t[9]=g*n+x*l+b*h+w*y,t[10]=g*o+x*u+b*f+w*_,t[11]=g*a+x*c+b*d+w*v,g=i[12],x=i[13],b=i[14],w=i[15],t[12]=g*r+x*s+b*p+w*m,t[13]=g*n+x*l+b*h+w*y,t[14]=g*o+x*u+b*f+w*_,t[15]=g*a+x*c+b*d+w*v,t}function p(t,e,i){var r,n,o,a,s,l,u,c,p,h,f,d,m=i[0],y=i[1],_=i[2]
return e===t?(t[12]=e[0]*m+e[4]*y+e[8]*_+e[12],t[13]=e[1]*m+e[5]*y+e[9]*_+e[13],t[14]=e[2]*m+e[6]*y+e[10]*_+e[14],t[15]=e[3]*m+e[7]*y+e[11]*_+e[15]):(r=e[0],n=e[1],o=e[2],a=e[3],s=e[4],l=e[5],u=e[6],c=e[7],p=e[8],h=e[9],f=e[10],d=e[11],t[0]=r,t[1]=n,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t[6]=u,t[7]=c,t[8]=p,t[9]=h,t[10]=f,t[11]=d,t[12]=r*m+s*y+p*_+e[12],t[13]=n*m+l*y+h*_+e[13],t[14]=o*m+u*y+f*_+e[14],t[15]=a*m+c*y+d*_+e[15]),t}function h(t,e,i){var r=i[0],n=i[1],o=i[2]
return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function f(t,e,i){var r=Math.sin(i),n=Math.cos(i),o=e[4],a=e[5],s=e[6],l=e[7],u=e[8],c=e[9],p=e[10],h=e[11]
return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*n+u*r,t[5]=a*n+c*r,t[6]=s*n+p*r,t[7]=l*n+h*r,t[8]=u*n-o*r,t[9]=c*n-a*r,t[10]=p*n-s*r,t[11]=h*n-l*r,t}function d(t,e,i){var r=Math.sin(i),n=Math.cos(i),o=e[0],a=e[1],s=e[2],l=e[3],u=e[4],c=e[5],p=e[6],h=e[7]
return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n+u*r,t[1]=a*n+c*r,t[2]=s*n+p*r,t[3]=l*n+h*r,t[4]=u*n-o*r,t[5]=c*n-a*r,t[6]=p*n-s*r,t[7]=h*n-l*r,t}function m(t,e,i,r,n){var o=1/Math.tan(e/2),a=1/(r-n)
return t[0]=o/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*a,t[15]=0,t}function y(t,e,i,r,n,o,a){var s=1/(e-i),l=1/(r-n),u=1/(o-a)
return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+i)*s,t[13]=(n+r)*l,t[14]=(a+o)*u,t[15]=1,t}return function(){var t=new Float32Array(3)
t[0]=0,t[1]=0,t[2]=0}(),function(){var t=new Float32Array(4)
t[0]=0,t[1]=0,t[2]=0,t[3]=0}(),{vec3:{transformMat3:t},vec4:{transformMat4:e},mat2:{create:i,rotate:r,scale:n},mat3:{create:o,fromRotation:a},mat4:{create:s,identity:l,translate:p,scale:h,multiply:c,perspective:m,rotateX:f,rotateZ:d,invert:u,ortho:y}}})},{}],2:[function(e,i,r){!function(e,n){"object"==typeof r&&void 0!==i?i.exports=n():"function"==typeof t&&t.amd?t(n):e.ShelfPack=n()}(this,function(){function t(t,e,i){i=i||{},this.w=t||64,this.h=e||64,this.autoResize=!!i.autoResize,this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0}function e(t,e,i){this.x=0,this.y=t,this.w=this.free=e,this.h=i}function i(t,e,i,r,n,o,a){this.id=t,this.x=e,this.y=i,this.w=r,this.h=n,this.maxw=o||r,this.maxh=a||n,this.refcount=0}return t.prototype.pack=function(t,e){t=[].concat(t),e=e||{}
for(var i,r,n,o,a=[],s=0;s<t.length;s++)if(i=t[s].w||t[s].width,r=t[s].h||t[s].height,n=t[s].id,i&&r){if(!(o=this.packOne(i,r,n)))continue
e.inPlace&&(t[s].x=o.x,t[s].y=o.y,t[s].id=o.id),a.push(o)}if(this.shelves.length>0){for(var l=0,u=0,c=0;c<this.shelves.length;c++){var p=this.shelves[c]
u+=p.h,l=Math.max(p.w-p.free,l)}this.resize(l,u)}return a},t.prototype.packOne=function(t,i,r){var n,o,a,s,l={freebin:-1,shelf:-1,waste:1/0},u=0
if("string"==typeof r||"number"==typeof r){if(n=this.getBin(r))return this.ref(n),n
"number"==typeof r&&(this.maxId=Math.max(r,this.maxId))}else r=++this.maxId
for(s=0;s<this.freebins.length;s++){if(n=this.freebins[s],i===n.maxh&&t===n.maxw)return this.allocFreebin(s,t,i,r)
i>n.maxh||t>n.maxw||i<=n.maxh&&t<=n.maxw&&(a=n.maxw*n.maxh-t*i)<l.waste&&(l.waste=a,l.freebin=s)}for(s=0;s<this.shelves.length;s++)if(o=this.shelves[s],u+=o.h,!(t>o.free)){if(i===o.h)return this.allocShelf(s,t,i,r)
i>o.h||i<o.h&&(a=(o.h-i)*t)<l.waste&&(l.freebin=-1,l.waste=a,l.shelf=s)}if(-1!==l.freebin)return this.allocFreebin(l.freebin,t,i,r)
if(-1!==l.shelf)return this.allocShelf(l.shelf,t,i,r)
if(i<=this.h-u&&t<=this.w)return o=new e(u,this.w,i),this.allocShelf(this.shelves.push(o)-1,t,i,r)
if(this.autoResize){var c,p,h,f
return c=p=this.h,h=f=this.w,(c>=h||t>h)&&(f=2*Math.max(t,h)),(h>c||i>c)&&(p=2*Math.max(i,c)),this.resize(f,p),this.packOne(t,i,r)}return null},t.prototype.allocFreebin=function(t,e,i,r){var n=this.freebins.splice(t,1)[0]
return n.id=r,n.w=e,n.h=i,n.refcount=0,this.bins[r]=n,this.ref(n),n},t.prototype.allocShelf=function(t,e,i,r){var n=this.shelves[t],o=n.alloc(e,i,r)
return this.bins[r]=o,this.ref(o),o},t.prototype.getBin=function(t){return this.bins[t]},t.prototype.ref=function(t){if(1==++t.refcount){var e=t.h
this.stats[e]=1+(0|this.stats[e])}return t.refcount},t.prototype.unref=function(t){return 0===t.refcount?0:(0==--t.refcount&&(this.stats[t.h]--,delete this.bins[t.id],this.freebins.push(t)),t.refcount)},t.prototype.clear=function(){this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0},t.prototype.resize=function(t,e){this.w=t,this.h=e
for(var i=0;i<this.shelves.length;i++)this.shelves[i].resize(t)
return!0},e.prototype.alloc=function(t,e,r){if(t>this.free||e>this.h)return null
var n=this.x
return this.x+=t,this.free-=t,new i(r,n,this.y,t,e,t,this.h)},e.prototype.resize=function(t){return this.free+=t-this.w,this.w=t,!0},t})},{}],3:[function(t,e,i){"use strict"
function r(t,e,i,r,n,o){this.fontSize=t||24,this.buffer=void 0===e?3:e,this.cutoff=r||.25,this.fontFamily=n||"sans-serif",this.fontWeight=o||"normal",this.radius=i||8
var a=this.size=this.fontSize+2*this.buffer
this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=a,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textBaseline="middle",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(a*a),this.gridInner=new Float64Array(a*a),this.f=new Float64Array(a),this.d=new Float64Array(a),this.z=new Float64Array(a+1),this.v=new Int16Array(a),this.middle=Math.round(a/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1))}function n(t,e,i,r,n,a,s){for(var l=0;e>l;l++){for(var u=0;i>u;u++)r[u]=t[u*e+l]
for(o(r,n,a,s,i),u=0;i>u;u++)t[u*e+l]=n[u]}for(u=0;i>u;u++){for(l=0;e>l;l++)r[l]=t[u*e+l]
for(o(r,n,a,s,e),l=0;e>l;l++)t[u*e+l]=Math.sqrt(n[l])}}function o(t,e,i,r,n){i[0]=0,r[0]=-a,r[1]=+a
for(var o=1,s=0;n>o;o++){for(var l=(t[o]+o*o-(t[i[s]]+i[s]*i[s]))/(2*o-2*i[s]);l<=r[s];)s--,l=(t[o]+o*o-(t[i[s]]+i[s]*i[s]))/(2*o-2*i[s])
s++,i[s]=o,r[s]=l,r[s+1]=+a}for(o=0,s=0;n>o;o++){for(;r[s+1]<o;)s++
e[o]=(o-i[s])*(o-i[s])+t[i[s]]}}e.exports=r
var a=1e20
r.prototype.draw=function(t){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.fillText(t,this.buffer,this.middle)
for(var e=this.ctx.getImageData(0,0,this.size,this.size),i=new Uint8ClampedArray(this.size*this.size),r=0;r<this.size*this.size;r++){var o=e.data[4*r+3]/255
this.gridOuter[r]=1===o?0:0===o?a:Math.pow(Math.max(0,.5-o),2),this.gridInner[r]=1===o?a:0===o?0:Math.pow(Math.max(0,o-.5),2)}for(n(this.gridOuter,this.size,this.size,this.f,this.d,this.v,this.z),n(this.gridInner,this.size,this.size,this.f,this.d,this.v,this.z),r=0;r<this.size*this.size;r++){var s=this.gridOuter[r]-this.gridInner[r]
i[r]=Math.max(0,Math.min(255,Math.round(255-255*(s/this.radius+this.cutoff))))}return i}},{}],4:[function(t,e,i){function r(t,e,i,r){this.cx=3*t,this.bx=3*(i-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(r-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=r,this.p2x=i,this.p2y=r}e.exports=r,r.prototype.sampleCurveX=function(t){return((this.ax*t+this.bx)*t+this.cx)*t},r.prototype.sampleCurveY=function(t){return((this.ay*t+this.by)*t+this.cy)*t},r.prototype.sampleCurveDerivativeX=function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},r.prototype.solveCurveX=function(t,e){void 0===e&&(e=1e-6)
var i,r,n,o,a
for(n=t,a=0;8>a;a++){if(o=this.sampleCurveX(n)-t,Math.abs(o)<e)return n
var s=this.sampleCurveDerivativeX(n)
if(Math.abs(s)<1e-6)break
n-=o/s}if(i=0,r=1,(n=t)<i)return i
if(n>r)return r
for(;r>i;){if(o=this.sampleCurveX(n),Math.abs(o-t)<e)return n
t>o?i=n:r=n,n=.5*(r-i)+i}return n},r.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))}},{}],5:[function(e,i,r){!function(e,n){"object"==typeof r&&void 0!==i?n(r):"function"==typeof t&&t.amd?t(["exports"],n):n(e.WhooTS=e.WhooTS||{})}(this,function(t){function e(t,e,r,n,o,a){return a=a||{},t+"?"+["bbox="+i(r,n,o),"format="+(a.format||"image/png"),"service="+(a.service||"WMS"),"version="+(a.version||"1.1.1"),"request="+(a.request||"GetMap"),"srs="+(a.srs||"EPSG:3857"),"width="+(a.width||256),"height="+(a.height||256),"layers="+e].join("&")}function i(t,e,i){e=Math.pow(2,i)-e-1
var n=r(256*t,256*e,i),o=r(256*(t+1),256*(e+1),i)
return n[0]+","+n[1]+","+o[0]+","+o[1]}function r(t,e,i){var r=2*Math.PI*6378137/256/Math.pow(2,i)
return[t*r-2*Math.PI*6378137/2,e*r-2*Math.PI*6378137/2]}t.getURL=e,t.getTileBBox=i,t.getMercCoords=r,Object.defineProperty(t,"__esModule",{value:!0})})},{}],6:[function(t,e,i){function r(t){return t=Math.round(t),0>t?0:t>255?255:t}function n(t){return 0>t?0:t>1?1:t}function o(t){return r("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function a(t){return n("%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))}function s(t,e,i){return 0>i?i+=1:i>1&&(i-=1),1>6*i?t+(e-t)*i*6:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}function l(t){var e=t.replace(/ /g,"").toLowerCase()
if(e in u)return u[e].slice()
if("#"===e[0]){if(4===e.length){var i=parseInt(e.substr(1),16)
return i>=0&&4095>=i?[(3840&i)>>4|(3840&i)>>8,240&i|(240&i)>>4,15&i|(15&i)<<4,1]:null}if(7===e.length){var i=parseInt(e.substr(1),16)
return i>=0&&16777215>=i?[(16711680&i)>>16,(65280&i)>>8,255&i,1]:null}return null}var n=e.indexOf("("),l=e.indexOf(")")
if(-1!==n&&l+1===e.length){var c=e.substr(0,n),p=e.substr(n+1,l-(n+1)).split(","),h=1
switch(c){case"rgba":if(4!==p.length)return null
h=a(p.pop())
case"rgb":return 3!==p.length?null:[o(p[0]),o(p[1]),o(p[2]),h]
case"hsla":if(4!==p.length)return null
h=a(p.pop())
case"hsl":if(3!==p.length)return null
var f=(parseFloat(p[0])%360+360)%360/360,d=a(p[1]),m=a(p[2]),y=.5>=m?m*(d+1):m+d-m*d,_=2*m-y
return[r(255*s(_,y,f+1/3)),r(255*s(_,y,f)),r(255*s(_,y,f-1/3)),h]
default:return null}}return null}var u={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]}
try{i.parseCSSColor=l}catch(c){}},{}],7:[function(t,e,i){"use strict"
function r(t,e,i){i=i||2
var r=e&&e.length,o=r?e[0]*i:t.length,s=n(t,0,o,i,!0),l=[]
if(!s)return l
var u,c,h,f,d,m,y
if(r&&(s=p(t,e,s,i)),t.length>80*i){u=h=t[0],c=f=t[1]
for(var _=i;o>_;_+=i)d=t[_],m=t[_+1],u>d&&(u=d),c>m&&(c=m),d>h&&(h=d),m>f&&(f=m)
y=Math.max(h-u,f-c)}return a(s,l,i,u,c,y),l}function n(t,e,i,r,n){var o,a
if(n===P(t,e,i,r)>0)for(o=e;i>o;o+=r)a=M(o,t[o],t[o+1],a)
else for(o=i-r;o>=e;o-=r)a=M(o,t[o],t[o+1],a)
return a&&w(a,a.next)&&(A(a),a=a.next),a}function o(t,e){if(!t)return t
e||(e=t)
var i,r=t
do if(i=!1,r.steiner||!w(r,r.next)&&0!==b(r.prev,r,r.next))r=r.next
else{if(A(r),(r=e=r.prev)===r.next)return null
i=!0}while(i||r!==e)
return e}function a(t,e,i,r,n,p,h){if(t){!h&&p&&m(t,r,n,p)
for(var f,d,y=t;t.prev!==t.next;)if(f=t.prev,d=t.next,p?l(t,r,n,p):s(t))e.push(f.i/i),e.push(t.i/i),e.push(d.i/i),A(t),t=d.next,y=d.next
else if((t=d)===y){h?1===h?(t=u(t,e,i),a(t,e,i,r,n,p,2)):2===h&&c(t,e,i,r,n,p):a(o(t),e,i,r,n,p,1)
break}}}function s(t){var e=t.prev,i=t,r=t.next
if(b(e,i,r)>=0)return!1
for(var n=t.next.next;n!==t.prev;){if(g(e.x,e.y,i.x,i.y,r.x,r.y,n.x,n.y)&&b(n.prev,n,n.next)>=0)return!1
n=n.next}return!0}function l(t,e,i,r){var n=t.prev,o=t,a=t.next
if(b(n,o,a)>=0)return!1
for(var s=n.x<o.x?n.x<a.x?n.x:a.x:o.x<a.x?o.x:a.x,l=n.y<o.y?n.y<a.y?n.y:a.y:o.y<a.y?o.y:a.y,u=n.x>o.x?n.x>a.x?n.x:a.x:o.x>a.x?o.x:a.x,c=n.y>o.y?n.y>a.y?n.y:a.y:o.y>a.y?o.y:a.y,p=_(s,l,e,i,r),h=_(u,c,e,i,r),f=t.nextZ;f&&f.z<=h;){if(f!==t.prev&&f!==t.next&&g(n.x,n.y,o.x,o.y,a.x,a.y,f.x,f.y)&&b(f.prev,f,f.next)>=0)return!1
f=f.nextZ}for(f=t.prevZ;f&&f.z>=p;){if(f!==t.prev&&f!==t.next&&g(n.x,n.y,o.x,o.y,a.x,a.y,f.x,f.y)&&b(f.prev,f,f.next)>=0)return!1
f=f.prevZ}return!0}function u(t,e,i){var r=t
do{var n=r.prev,o=r.next.next
!w(n,o)&&T(n,r,r.next,o)&&E(n,o)&&E(o,n)&&(e.push(n.i/i),e.push(r.i/i),e.push(o.i/i),A(r),A(r.next),r=t=o),r=r.next}while(r!==t)
return r}function c(t,e,i,r,n,s){var l=t
do{for(var u=l.next.next;u!==l.prev;){if(l.i!==u.i&&x(l,u)){var c=L(l,u)
return l=o(l,l.next),c=o(c,c.next),a(l,e,i,r,n,s),void a(c,e,i,r,n,s)}u=u.next}l=l.next}while(l!==t)}function p(t,e,i,r){var a,s,l,u,c,p=[]
for(a=0,s=e.length;s>a;a++)l=e[a]*r,u=s-1>a?e[a+1]*r:t.length,c=n(t,l,u,r,!1),c===c.next&&(c.steiner=!0),p.push(v(c))
for(p.sort(h),a=0;a<p.length;a++)f(p[a],i),i=o(i,i.next)
return i}function h(t,e){return t.x-e.x}function f(t,e){if(e=d(t,e)){var i=L(e,t)
o(i,i.next)}}function d(t,e){var i,r=e,n=t.x,o=t.y,a=-1/0
do{if(o<=r.y&&o>=r.next.y){var s=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y)
if(n>=s&&s>a){if(a=s,s===n){if(o===r.y)return r
if(o===r.next.y)return r.next}i=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e)
if(!i)return null
if(n===a)return i.prev
var l,u=i,c=i.x,p=i.y,h=1/0
for(r=i.next;r!==u;)n>=r.x&&r.x>=c&&g(p>o?n:a,o,c,p,p>o?a:n,o,r.x,r.y)&&((l=Math.abs(o-r.y)/(n-r.x))<h||l===h&&r.x>i.x)&&E(r,t)&&(i=r,h=l),r=r.next
return i}function m(t,e,i,r){var n=t
do null===n.z&&(n.z=_(n.x,n.y,e,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next
while(n!==t)
n.prevZ.nextZ=null,n.prevZ=null,y(n)}function y(t){var e,i,r,n,o,a,s,l,u=1
do{for(i=t,t=null,o=null,a=0;i;){for(a++,r=i,s=0,e=0;u>e&&(s++,r=r.nextZ);e++);for(l=u;s>0||l>0&&r;)0===s?(n=r,r=r.nextZ,l--):0!==l&&r?i.z<=r.z?(n=i,i=i.nextZ,s--):(n=r,r=r.nextZ,l--):(n=i,i=i.nextZ,s--),o?o.nextZ=n:t=n,n.prevZ=o,o=n
i=r}o.nextZ=null,u*=2}while(a>1)
return t}function _(t,e,i,r,n){return t=32767*(t-i)/n,e=32767*(e-r)/n,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function v(t){var e=t,i=t
do e.x<i.x&&(i=e),e=e.next
while(e!==t)
return i}function g(t,e,i,r,n,o,a,s){return(n-a)*(e-s)-(t-a)*(o-s)>=0&&(t-a)*(r-s)-(i-a)*(e-s)>=0&&(i-a)*(o-s)-(n-a)*(r-s)>=0}function x(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!z(t,e)&&E(t,e)&&E(e,t)&&S(t,e)}function b(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function w(t,e){return t.x===e.x&&t.y===e.y}function T(t,e,i,r){return!!(w(t,e)&&w(i,r)||w(t,r)&&w(i,e))||b(t,e,i)>0!=b(t,e,r)>0&&b(i,r,t)>0!=b(i,r,e)>0}function z(t,e){var i=t
do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&T(i,i.next,t,e))return!0
i=i.next}while(i!==t)
return!1}function E(t,e){return b(t.prev,t,t.next)<0?b(t,e,t.next)>=0&&b(t,t.prev,e)>=0:b(t,e,t.prev)<0||b(t,t.next,e)<0}function S(t,e){var i=t,r=!1,n=(t.x+e.x)/2,o=(t.y+e.y)/2
do i.y>o!=i.next.y>o&&n<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next
while(i!==t)
return r}function L(t,e){var i=new C(t.i,t.x,t.y),r=new C(e.i,e.x,e.y),n=t.next,o=e.prev
return t.next=e,e.prev=t,i.next=n,n.prev=i,r.next=i,i.prev=r,o.next=r,r.prev=o,r}function M(t,e,i,r){var n=new C(t,e,i)
return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function A(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function C(t,e,i){this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P(t,e,i,r){for(var n=0,o=e,a=i-r;i>o;o+=r)n+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o
return n}e.exports=r,r.deviation=function(t,e,i,r){var n=e&&e.length,o=n?e[0]*i:t.length,a=Math.abs(P(t,0,o,i))
if(n)for(var s=0,l=e.length;l>s;s++){var u=e[s]*i,c=l-1>s?e[s+1]*i:t.length
a-=Math.abs(P(t,u,c,i))}var p=0
for(s=0;s<r.length;s+=3){var h=r[s]*i,f=r[s+1]*i,d=r[s+2]*i
p+=Math.abs((t[h]-t[d])*(t[f+1]-t[h+1])-(t[h]-t[f])*(t[d+1]-t[h+1]))}return 0===a&&0===p?0:Math.abs((p-a)/a)},r.flatten=function(t){for(var e=t[0][0].length,i={vertices:[],holes:[],dimensions:e},r=0,n=0;n<t.length;n++){for(var o=0;o<t[n].length;o++)for(var a=0;e>a;a++)i.vertices.push(t[n][o][a])
n>0&&(r+=t[n-1].length,i.holes.push(r))}return i}},{}],8:[function(t,e,i){function r(t){var e,i,n,u,c,p
switch(typeof t){case"object":if(null===t)return null
if(o(t)){for(n="[",i=t.length-1,e=0;i>e;e++)n+=r(t[e])+","
return i>-1&&(n+=r(t[e])),n+"]"}for(u=a(t).sort(),i=u.length,n="{",c=u[e=0],p=i>0&&void 0!==t[c];i>e;)p?(n+='"'+c.replace(s,l)+'":'+r(t[c]),c=u[++e],(p=i>e&&void 0!==t[c])&&(n+=",")):(c=u[++e],p=i>e&&void 0!==t[c])
return n+"}"
case"undefined":return null
case"string":return'"'+t.replace(s,l)+'"'
default:return t}}var n={}.toString,o=Array.isArray||function(t){return"[object Array]"===n.call(t)},a=Object.keys||function(t){var e=[]
for(var i in t)t.hasOwnProperty(i)&&e.push(i)
return e},s=/[\u0000-\u001f"\\]/g,l=function(t){var e=t.charCodeAt(0)
switch(e){case 34:return'\\"'
case 92:return"\\\\"
case 12:return"\\f"
case 10:return"\\n"
case 13:return"\\r"
case 9:return"\\t"
case 8:return"\\b"
default:return e>15?"\\u00"+e.toString(16):"\\u000"+e.toString(16)}}
e.exports=function(t){return void 0!==t?""+r(t):void 0},e.exports.stringSearch=s,e.exports.stringReplace=l},{}],9:[function(t,e,i){function r(t){if("Polygon"===t.type)return n(t.coordinates)
if("MultiPolygon"===t.type){for(var e=0,i=0;i<t.coordinates.length;i++)e+=n(t.coordinates[i])
return e}return null}function n(t){var e=0
if(t&&t.length>0){e+=Math.abs(o(t[0]))
for(var i=1;i<t.length;i++)e-=Math.abs(o(t[i]))}return e}function o(t){var e=0
if(t.length>2){for(var i,r,n=0;n<t.length-1;n++)i=t[n],r=t[n+1],e+=a(r[0]-i[0])*(2+Math.sin(a(i[1]))+Math.sin(a(r[1])))
e=e*s.RADIUS*s.RADIUS/2}return e}function a(t){return t*Math.PI/180}var s=t("wgs84")
e.exports.geometry=r,e.exports.ring=o},{wgs84:52}],10:[function(t,e,i){function r(t,e){switch(t&&t.type||null){case"FeatureCollection":return t.features=t.features.map(n(r,e)),t
case"Feature":return t.geometry=r(t.geometry,e),t
case"Polygon":case"MultiPolygon":return o(t,e)
default:return t}}function n(t,e){return function(i){return t(i,e)}}function o(t,e){return"Polygon"===t.type?t.coordinates=a(t.coordinates,e):"MultiPolygon"===t.type&&(t.coordinates=t.coordinates.map(n(a,e))),t}function a(t,e){e=!!e,t[0]=s(t[0],!e)
for(var i=1;i<t.length;i++)t[i]=s(t[i],e)
return t}function s(t,e){return l(t)===e?t:t.reverse()}function l(t){return u.ring(t)>=0}var u=t("geojson-area")
e.exports=r},{"geojson-area":9}],11:[function(t,e,i){"use strict"
function r(t,e,i,r,a,l,u,c){if(i/=e,r/=e,u>=i&&r>=c)return t
if(u>r||i>c)return null
for(var p=[],h=0;h<t.length;h++){var f,d,m=t[h],y=m.geometry,_=m.type
if(f=m.min[a],d=m.max[a],f>=i&&r>=d)p.push(m)
else if(!(f>r||i>d)){var v=1===_?n(y,i,r,a):o(y,i,r,a,l,3===_)
v.length&&p.push(s(m.tags,_,v,m.id))}}return p.length?p:null}function n(t,e,i,r){for(var n=[],o=0;o<t.length;o++){var a=t[o],s=a[r]
s>=e&&i>=s&&n.push(a)}return n}function o(t,e,i,r,n,o){for(var s=[],l=0;l<t.length;l++){var u,c,p,h=0,f=0,d=null,m=t[l],y=m.area,_=m.dist,v=m.outer,g=m.length,x=[]
for(c=0;g-1>c;c++)u=d||m[c],d=m[c+1],h=f||u[r],f=d[r],e>h?f>i?(x.push(n(u,d,e),n(u,d,i)),o||(x=a(s,x,y,_,v))):f>=e&&x.push(n(u,d,e)):h>i?e>f?(x.push(n(u,d,i),n(u,d,e)),o||(x=a(s,x,y,_,v))):i>=f&&x.push(n(u,d,i)):(x.push(u),e>f?(x.push(n(u,d,e)),o||(x=a(s,x,y,_,v))):f>i&&(x.push(n(u,d,i)),o||(x=a(s,x,y,_,v))))
u=m[g-1],h=u[r],h>=e&&i>=h&&x.push(u),p=x[x.length-1],o&&p&&(x[0][0]!==p[0]||x[0][1]!==p[1])&&x.push(x[0]),a(s,x,y,_,v)}return s}function a(t,e,i,r,n){return e.length&&(e.area=i,e.dist=r,void 0!==n&&(e.outer=n),t.push(e)),[]}e.exports=r
var s=t("./feature")},{"./feature":13}],12:[function(t,e,i){"use strict"
function r(t,e){var i=[]
if("FeatureCollection"===t.type)for(var r=0;r<t.features.length;r++)n(i,t.features[r],e)
else"Feature"===t.type?n(i,t,e):n(i,{geometry:t},e)
return i}function n(t,e,i){if(null!==e.geometry){var r,s,l,c,p=e.geometry,h=p.type,f=p.coordinates,d=e.properties,m=e.id
if("Point"===h)t.push(u(d,1,[a(f)],m))
else if("MultiPoint"===h)t.push(u(d,1,o(f),m))
else if("LineString"===h)t.push(u(d,2,[o(f,i)],m))
else if("MultiLineString"===h||"Polygon"===h){for(l=[],r=0;r<f.length;r++)c=o(f[r],i),"Polygon"===h&&(c.outer=0===r),l.push(c)
t.push(u(d,"Polygon"===h?3:2,l,m))}else if("MultiPolygon"===h){for(l=[],r=0;r<f.length;r++)for(s=0;s<f[r].length;s++)c=o(f[r][s],i),c.outer=0===s,l.push(c)
t.push(u(d,3,l,m))}else{if("GeometryCollection"!==h)throw Error("Input data is not a valid GeoJSON object.")
for(r=0;r<p.geometries.length;r++)n(t,{geometry:p.geometries[r],properties:d},i)}}}function o(t,e){for(var i=[],r=0;r<t.length;r++)i.push(a(t[r]))
return e&&(l(i,e),s(i)),i}function a(t){var e=Math.sin(t[1]*Math.PI/180),i=t[0]/360+.5,r=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return r=0>r?0:r>1?1:r,[i,r,0]}function s(t){for(var e,i,r=0,n=0,o=0;o<t.length-1;o++)e=i||t[o],i=t[o+1],r+=e[0]*i[1]-i[0]*e[1],n+=Math.abs(i[0]-e[0])+Math.abs(i[1]-e[1])
t.area=Math.abs(r/2),t.dist=n}e.exports=r
var l=t("./simplify"),u=t("./feature")},{"./feature":13,"./simplify":15}],13:[function(t,e,i){"use strict"
function r(t,e,i,r){var o={id:r||null,type:e,geometry:i,tags:t||null,min:[1/0,1/0],max:[-1/0,-1/0]}
return n(o),o}function n(t){var e=t.geometry,i=t.min,r=t.max
if(1===t.type)o(i,r,e)
else for(var n=0;n<e.length;n++)o(i,r,e[n])
return t}function o(t,e,i){for(var r,n=0;n<i.length;n++)r=i[n],t[0]=Math.min(r[0],t[0]),e[0]=Math.max(r[0],e[0]),t[1]=Math.min(r[1],t[1]),e[1]=Math.max(r[1],e[1])}e.exports=r},{}],14:[function(t,e,i){"use strict"
function r(t,e){return new n(t,e)}function n(t,e){e=this.options=l(Object.create(this.options),e)
var i=e.debug
i&&console.time("preprocess data")
var r=1<<e.maxZoom,n=c(t,e.tolerance/(r*e.extent))
this.tiles={},this.tileCoords=[],i&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",e.indexMaxZoom,e.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),n=f(n,e.buffer/e.extent,a),n.length&&this.splitTile(n,0,0,0),i&&(n.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}function o(t,e,i){return 32*((1<<t)*i+e)+t}function a(t,e,i){return[i,(i-t[0])*(e[1]-t[1])/(e[0]-t[0])+t[1],1]}function s(t,e,i){return[(i-t[1])*(e[0]-t[0])/(e[1]-t[1])+t[0],i,1]}function l(t,e){for(var i in e)t[i]=e[i]
return t}function u(t,e,i){var r=t.source
if(1!==r.length)return!1
var n=r[0]
if(3!==n.type||n.geometry.length>1)return!1
var o=n.geometry[0].length
if(5!==o)return!1
for(var a=0;o>a;a++){var s=p.point(n.geometry[0][a],e,t.z2,t.x,t.y)
if(s[0]!==-i&&s[0]!==e+i||s[1]!==-i&&s[1]!==e+i)return!1}return!0}e.exports=r
var c=t("./convert"),p=t("./transform"),h=t("./clip"),f=t("./wrap"),d=t("./tile")
n.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,solidChildren:!1,tolerance:3,extent:4096,buffer:64,debug:0},n.prototype.splitTile=function(t,e,i,r,n,l,c){for(var p=[t,e,i,r],f=this.options,m=f.debug,y=null;p.length;){r=p.pop(),i=p.pop(),e=p.pop(),t=p.pop()
var _=1<<e,v=o(e,i,r),g=this.tiles[v],x=e===f.maxZoom?0:f.tolerance/(_*f.extent)
if(!g&&(m>1&&console.time("creation"),g=this.tiles[v]=d(t,_,i,r,x,e===f.maxZoom),this.tileCoords.push({z:e,x:i,y:r}),m)){m>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",e,i,r,g.numFeatures,g.numPoints,g.numSimplified),console.timeEnd("creation"))
var b="z"+e
this.stats[b]=(this.stats[b]||0)+1,this.total++}if(g.source=t,n){if(e===f.maxZoom||e===n)continue
var w=1<<n-e
if(i!==Math.floor(l/w)||r!==Math.floor(c/w))continue}else if(e===f.indexMaxZoom||g.numPoints<=f.indexMaxPoints)continue
if(f.solidChildren||!u(g,f.extent,f.buffer)){g.source=null,m>1&&console.time("clipping")
var T,z,E,S,L,M,A=.5*f.buffer/f.extent,C=.5-A,P=.5+A,k=1+A
T=z=E=S=null,L=h(t,_,i-A,i+P,0,a,g.min[0],g.max[0]),M=h(t,_,i+C,i+k,0,a,g.min[0],g.max[0]),L&&(T=h(L,_,r-A,r+P,1,s,g.min[1],g.max[1]),z=h(L,_,r+C,r+k,1,s,g.min[1],g.max[1])),M&&(E=h(M,_,r-A,r+P,1,s,g.min[1],g.max[1]),S=h(M,_,r+C,r+k,1,s,g.min[1],g.max[1])),m>1&&console.timeEnd("clipping"),t.length&&(p.push(T||[],e+1,2*i,2*r),p.push(z||[],e+1,2*i,2*r+1),p.push(E||[],e+1,2*i+1,2*r),p.push(S||[],e+1,2*i+1,2*r+1))}else n&&(y=e)}return y},n.prototype.getTile=function(t,e,i){var r=this.options,n=r.extent,a=r.debug,s=1<<t
e=(e%s+s)%s
var l=o(t,e,i)
if(this.tiles[l])return p.tile(this.tiles[l],n)
a>1&&console.log("drilling down to z%d-%d-%d",t,e,i)
for(var c,h=t,f=e,d=i;!c&&h>0;)h--,f=Math.floor(f/2),d=Math.floor(d/2),c=this.tiles[o(h,f,d)]
if(!c||!c.source)return null
if(a>1&&console.log("found parent tile z%d-%d-%d",h,f,d),u(c,n,r.buffer))return p.tile(c,n)
a>1&&console.time("drilling down")
var m=this.splitTile(c.source,h,f,d,t,e,i)
if(a>1&&console.timeEnd("drilling down"),null!==m){var y=1<<t-m
l=o(m,Math.floor(e/y),Math.floor(i/y))}return this.tiles[l]?p.tile(this.tiles[l],n):null}},{"./clip":11,"./convert":12,"./tile":16,"./transform":17,"./wrap":18}],15:[function(t,e,i){"use strict"
function r(t,e){var i,r,o,a,s=e*e,l=t.length,u=0,c=l-1,p=[]
for(t[u][2]=1,t[c][2]=1;c;){for(r=0,i=u+1;c>i;i++)(o=n(t[i],t[u],t[c]))>r&&(a=i,r=o)
r>s?(t[a][2]=r,p.push(u),p.push(a),u=a):(c=p.pop(),u=p.pop())}}function n(t,e,i){var r=e[0],n=e[1],o=i[0],a=i[1],s=t[0],l=t[1],u=o-r,c=a-n
if(0!==u||0!==c){var p=((s-r)*u+(l-n)*c)/(u*u+c*c)
p>1?(r=o,n=a):p>0&&(r+=u*p,n+=c*p)}return u=s-r,c=l-n,u*u+c*c}e.exports=r},{}],16:[function(t,e,i){"use strict"
function r(t,e,i,r,o,a){for(var s={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:i,y:r,z2:e,transformed:!1,min:[2,1],max:[-1,0]},l=0;l<t.length;l++){s.numFeatures++,n(s,t[l],o,a)
var u=t[l].min,c=t[l].max
u[0]<s.min[0]&&(s.min[0]=u[0]),u[1]<s.min[1]&&(s.min[1]=u[1]),c[0]>s.max[0]&&(s.max[0]=c[0]),c[1]>s.max[1]&&(s.max[1]=c[1])}return s}function n(t,e,i,r){var n,a,s,l,u=e.geometry,c=e.type,p=[],h=i*i
if(1===c)for(n=0;n<u.length;n++)p.push(u[n]),t.numPoints++,t.numSimplified++
else for(n=0;n<u.length;n++)if(s=u[n],r||!(2===c&&s.dist<i||3===c&&s.area<h)){var f=[]
for(a=0;a<s.length;a++)l=s[a],(r||l[2]>h)&&(f.push(l),t.numSimplified++),t.numPoints++
3===c&&o(f,s.outer),p.push(f)}else t.numPoints+=s.length
if(p.length){var d={geometry:p,type:c,tags:e.tags||null}
null!==e.id&&(d.id=e.id),t.features.push(d)}}function o(t,e){a(t)<0===e&&t.reverse()}function a(t){for(var e,i,r=0,n=0,o=t.length,a=o-1;o>n;a=n++)e=t[n],i=t[a],r+=(i[0]-e[0])*(e[1]+i[1])
return r}e.exports=r},{}],17:[function(t,e,i){"use strict"
function r(t,e){if(t.transformed)return t
var i,r,o,a=t.z2,s=t.x,l=t.y
for(i=0;i<t.features.length;i++){var u=t.features[i],c=u.geometry
if(1===u.type)for(r=0;r<c.length;r++)c[r]=n(c[r],e,a,s,l)
else for(r=0;r<c.length;r++){var p=c[r]
for(o=0;o<p.length;o++)p[o]=n(p[o],e,a,s,l)}}return t.transformed=!0,t}function n(t,e,i,r,n){return[Math.round(e*(t[0]*i-r)),Math.round(e*(t[1]*i-n))]}i.tile=r,i.point=n},{}],18:[function(t,e,i){"use strict"
function r(t,e,i){var r=t,o=a(t,1,-1-e,e,0,i,-1,2),s=a(t,1,1-e,2+e,0,i,-1,2)
return(o||s)&&(r=a(t,1,-e,1+e,0,i,-1,2)||[],o&&(r=n(o,1).concat(r)),s&&(r=r.concat(n(s,-1)))),r}function n(t,e){for(var i=[],r=0;r<t.length;r++){var n,a=t[r],l=a.type
if(1===l)n=o(a.geometry,e)
else{n=[]
for(var u=0;u<a.geometry.length;u++)n.push(o(a.geometry[u],e))}i.push(s(a.tags,l,n,a.id))}return i}function o(t,e){var i=[]
i.area=t.area,i.dist=t.dist
for(var r=0;r<t.length;r++)i.push([t[r][0]+e,t[r][1],t[r][2]])
return i}var a=t("./clip"),s=t("./feature")
e.exports=r},{"./clip":11,"./feature":13}],19:[function(t,e,i){"use strict"
function r(t,e,i){var r=this.cells=[]
if(t instanceof ArrayBuffer){this.arrayBuffer=t
var o=new Int32Array(this.arrayBuffer)
t=o[0],e=o[1],i=o[2],this.d=e+2*i
for(var a=0;a<this.d*this.d;a++){var s=o[n+a],l=o[n+a+1]
r.push(s===l?null:o.subarray(s,l))}var u=o[n+r.length],c=o[n+r.length+1]
this.keys=o.subarray(u,c),this.bboxes=o.subarray(c),this.insert=this._insertReadonly}else{this.d=e+2*i
for(var p=0;p<this.d*this.d;p++)r.push([])
this.keys=[],this.bboxes=[]}this.n=e,this.extent=t,this.padding=i,this.scale=e/t,this.uid=0
var h=i/e*t
this.min=-h,this.max=t+h}e.exports=r
var n=3
r.prototype.insert=function(t,e,i,r,n){this._forEachCell(e,i,r,n,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(i),this.bboxes.push(r),this.bboxes.push(n)},r.prototype._insertReadonly=function(){throw"Cannot insert into a GridIndex created from an ArrayBuffer."},r.prototype._insertCell=function(t,e,i,r,n,o){this.cells[n].push(o)},r.prototype.query=function(t,e,i,r){var n=this.min,o=this.max
if(n>=t&&n>=e&&i>=o&&r>=o)return Array.prototype.slice.call(this.keys)
var a=[],s={}
return this._forEachCell(t,e,i,r,this._queryCell,a,s),a},r.prototype._queryCell=function(t,e,i,r,n,o,a){var s=this.cells[n]
if(null!==s)for(var l=this.keys,u=this.bboxes,c=0;c<s.length;c++){var p=s[c]
if(void 0===a[p]){var h=4*p
t<=u[h+2]&&e<=u[h+3]&&i>=u[h+0]&&r>=u[h+1]?(a[p]=!0,o.push(l[p])):a[p]=!1}}},r.prototype._forEachCell=function(t,e,i,r,n,o,a){for(var s=this._convertToCellCoord(t),l=this._convertToCellCoord(e),u=this._convertToCellCoord(i),c=this._convertToCellCoord(r),p=s;u>=p;p++)for(var h=l;c>=h;h++){var f=this.d*h+p
if(n.call(this,t,e,i,r,f,o,a))return}},r.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},r.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer
for(var t=this.cells,e=n+this.cells.length+1+1,i=0,r=0;r<this.cells.length;r++)i+=this.cells[r].length
var o=new Int32Array(e+i+this.keys.length+this.bboxes.length)
o[0]=this.extent,o[1]=this.n,o[2]=this.padding
for(var a=e,s=0;s<t.length;s++){var l=t[s]
o[n+s]=a,o.set(l,a),a+=l.length}return o[n+t.length]=a,o.set(this.keys,a),a+=this.keys.length,o[n+t.length+1]=a,o.set(this.bboxes,a),a+=this.bboxes.length,o.buffer}},{}],20:[function(t,e,i){i.read=function(t,e,i,r,n){var o,a,s=8*n-r-1,l=(1<<s)-1,u=l>>1,c=-7,p=i?n-1:0,h=i?-1:1,f=t[e+p]
for(p+=h,o=f&(1<<-c)-1,f>>=-c,c+=s;c>0;o=256*o+t[e+p],p+=h,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=r;c>0;a=256*a+t[e+p],p+=h,c-=8);if(0===o)o=1-u
else{if(o===l)return a?NaN:1/0*(f?-1:1)
a+=Math.pow(2,r),o-=u}return(f?-1:1)*a*Math.pow(2,o-r)},i.write=function(t,e,i,r,n,o){var a,s,l,u=8*o-n-1,c=(1<<u)-1,p=c>>1,h=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,d=r?1:-1,m=0>e||0===e&&0>1/e?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),e+=a+p>=1?h/l:h*Math.pow(2,1-p),e*l>=2&&(a++,l/=2),a+p>=c?(s=0,a=c):a+p>=1?(s=(e*l-1)*Math.pow(2,n),a+=p):(s=e*Math.pow(2,p-1)*Math.pow(2,n),a=0));n>=8;t[i+f]=255&s,f+=d,s/=256,n-=8);for(a=a<<n|s,u+=n;u>0;t[i+f]=255&a,f+=d,a/=256,u-=8);t[i+f-d]|=128*m}},{}],21:[function(t,e,i){"use strict"
function r(t,e,i,r,o){return new n(t,e,i,r,o)}function n(t,e,i,r,n){e=e||o,i=i||a,n=n||Array,this.nodeSize=r||64,this.points=t,this.ids=new n(t.length),this.coords=new n(2*t.length)
for(var l=0;l<t.length;l++)this.ids[l]=l,this.coords[2*l]=e(t[l]),this.coords[2*l+1]=i(t[l])
s(this.ids,this.coords,this.nodeSize,0,this.ids.length-1,0)}function o(t){return t[0]}function a(t){return t[1]}var s=t("./sort"),l=t("./range"),u=t("./within")
e.exports=r,n.prototype={range:function(t,e,i,r){return l(this.ids,this.coords,t,e,i,r,this.nodeSize)},within:function(t,e,i){return u(this.ids,this.coords,t,e,i,this.nodeSize)}}},{"./range":22,"./sort":23,"./within":24}],22:[function(t,e,i){"use strict"
function r(t,e,i,r,n,o,a){for(var s,l,u=[0,t.length-1,0],c=[];u.length;){var p=u.pop(),h=u.pop(),f=u.pop()
if(a>=h-f)for(var d=f;h>=d;d++)s=e[2*d],l=e[2*d+1],s>=i&&n>=s&&l>=r&&o>=l&&c.push(t[d])
else{var m=Math.floor((f+h)/2)
s=e[2*m],l=e[2*m+1],s>=i&&n>=s&&l>=r&&o>=l&&c.push(t[m])
var y=(p+1)%2;(0===p?s>=i:l>=r)&&(u.push(f),u.push(m-1),u.push(y)),(0===p?n>=s:o>=l)&&(u.push(m+1),u.push(h),u.push(y))}}return c}e.exports=r},{}],23:[function(t,e,i){"use strict"
function r(t,e,i,o,a,s){if(!(i>=a-o)){var l=Math.floor((o+a)/2)
n(t,e,l,o,a,s%2),r(t,e,i,o,l-1,s+1),r(t,e,i,l+1,a,s+1)}}function n(t,e,i,r,a,s){for(;a>r;){if(a-r>600){var l=a-r+1,u=i-r+1,c=Math.log(l),p=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*p*(l-p)/l)*(0>u-l/2?-1:1)
n(t,e,i,Math.max(r,Math.floor(i-u*p/l+h)),Math.min(a,Math.floor(i+(l-u)*p/l+h)),s)}var f=e[2*i+s],d=r,m=a
for(o(t,e,r,i),e[2*a+s]>f&&o(t,e,r,a);m>d;){for(o(t,e,d,m),d++,m--;e[2*d+s]<f;)d++
for(;e[2*m+s]>f;)m--}e[2*r+s]===f?o(t,e,r,m):(m++,o(t,e,m,a)),i>=m&&(r=m+1),m>=i&&(a=m-1)}}function o(t,e,i,r){a(t,i,r),a(e,2*i,2*r),a(e,2*i+1,2*r+1)}function a(t,e,i){var r=t[e]
t[e]=t[i],t[i]=r}e.exports=r},{}],24:[function(t,e,i){"use strict"
function r(t,e,i,r,o,a){for(var s=[0,t.length-1,0],l=[],u=o*o;s.length;){var c=s.pop(),p=s.pop(),h=s.pop()
if(a>=p-h)for(var f=h;p>=f;f++)n(e[2*f],e[2*f+1],i,r)<=u&&l.push(t[f])
else{var d=Math.floor((h+p)/2),m=e[2*d],y=e[2*d+1]
n(m,y,i,r)<=u&&l.push(t[d])
var _=(c+1)%2;(0===c?m>=i-o:y>=r-o)&&(s.push(h),s.push(d-1),s.push(_)),(0===c?i+o>=m:r+o>=y)&&(s.push(d+1),s.push(p),s.push(_))}}return l}function n(t,e,i,r){var n=t-i,o=e-r
return n*n+o*o}e.exports=r},{}],25:[function(t,e,i){function r(t){return!!t&&"object"==typeof t}function n(t,e){for(var i=-1,r=t.length;++i<r;)if(e(t[i],i,t))return!0
return!1}function o(t,e,i,n,s,l){return t===e||(null==t||null==e||!c(t)&&!r(e)?t!==t&&e!==e:a(t,e,o,i,n,s,l))}function a(t,e,i,r,n,o,a){var c=p(t),f=p(e),y=m,_=m
c||(y=E.call(t),y==d?y=x:y!=x&&(c=h(t))),f||(_=E.call(e),_==d?_=x:_!=x&&(f=h(e)))
var v=y==x,g=_==x,b=y==_
if(b&&!c&&!v)return l(t,e,y)
if(!n){var w=v&&z.call(t,"__wrapped__"),T=g&&z.call(e,"__wrapped__")
if(w||T)return i(w?t.value():t,T?e.value():e,r,n,o,a)}if(!b)return!1
o||(o=[]),a||(a=[])
for(var S=o.length;S--;)if(o[S]==t)return a[S]==e
o.push(t),a.push(e)
var L=(c?s:u)(t,e,i,r,n,o,a)
return o.pop(),a.pop(),L}function s(t,e,i,r,o,a,s){var l=-1,u=t.length,c=e.length
if(u!=c&&!(o&&c>u))return!1
for(;++l<u;){var p=t[l],h=e[l],f=r?r(o?h:p,o?p:h,l):void 0
if(void 0!==f){if(f)continue
return!1}if(o){if(!n(e,function(t){return p===t||i(p,t,r,o,a,s)}))return!1}else if(p!==h&&!i(p,h,r,o,a,s))return!1}return!0}function l(t,e,i){switch(i){case y:case _:return+t==+e
case v:return t.name==e.name&&t.message==e.message
case g:return t!=+t?e!=+e:t==+e
case b:case w:return t==e+""}return!1}function u(t,e,i,r,n,o,a){var s=f(t),l=s.length
if(l!=f(e).length&&!n)return!1
for(var u=l;u--;){var c=s[u]
if(!(n?c in e:z.call(e,c)))return!1}for(var p=n;++u<l;){c=s[u]
var h=t[c],d=e[c],m=r?r(n?d:h,n?h:d,c):void 0
if(!(void 0===m?i(h,d,r,n,o,a):m))return!1
p||(p="constructor"==c)}if(!p){var y=t.constructor,_=e.constructor
if(y!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof _&&_ instanceof _))return!1}return!0}function c(t){var e=typeof t
return!!t&&("object"==e||"function"==e)}var p=t("lodash.isarray"),h=t("lodash.istypedarray"),f=t("lodash.keys"),d="[object Arguments]",m="[object Array]",y="[object Boolean]",_="[object Date]",v="[object Error]",g="[object Number]",x="[object Object]",b="[object RegExp]",w="[object String]",T=Object.prototype,z=T.hasOwnProperty,E=T.toString
e.exports=o},{"lodash.isarray":29,"lodash.istypedarray":31,"lodash.keys":32}],26:[function(t,e,i){function r(t,e,i){if("function"!=typeof t)return n
if(void 0===e)return t
switch(i){case 1:return function(i){return t.call(e,i)}
case 3:return function(i,r,n){return t.call(e,i,r,n)}
case 4:return function(i,r,n,o){return t.call(e,i,r,n,o)}
case 5:return function(i,r,n,o,a){return t.call(e,i,r,n,o,a)}}return function(){return t.apply(e,arguments)}}function n(t){return t}e.exports=r},{}],27:[function(t,e,i){function r(t){return!!t&&"object"==typeof t}function n(t,e){var i=null==t?void 0:t[e]
return s(i)?i:void 0}function o(t){return a(t)&&f.call(t)==l}function a(t){var e=typeof t
return!!t&&("object"==e||"function"==e)}function s(t){return null!=t&&(o(t)?d.test(p.call(t)):r(t)&&u.test(t))}var l="[object Function]",u=/^\[object .+?Constructor\]$/,c=Object.prototype,p=Function.prototype.toString,h=c.hasOwnProperty,f=c.toString,d=RegExp("^"+p.call(h).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
e.exports=n},{}],28:[function(t,e,i){function r(t){return o(t)&&m.call(t,"callee")&&(!_.call(t,"callee")||y.call(t)==p)}function n(t){return null!=t&&s(t.length)&&!a(t)}function o(t){return u(t)&&n(t)}function a(t){var e=l(t)?y.call(t):""
return e==h||e==f}function s(t){return"number"==typeof t&&t>-1&&t%1==0&&c>=t}function l(t){var e=typeof t
return!!t&&("object"==e||"function"==e)}function u(t){return!!t&&"object"==typeof t}var c=9007199254740991,p="[object Arguments]",h="[object Function]",f="[object GeneratorFunction]",d=Object.prototype,m=d.hasOwnProperty,y=d.toString,_=d.propertyIsEnumerable
e.exports=r},{}],29:[function(t,e,i){function r(t){return!!t&&"object"==typeof t}function n(t,e){var i=null==t?void 0:t[e]
return l(i)?i:void 0}function o(t){return"number"==typeof t&&t>-1&&t%1==0&&v>=t}function a(t){return s(t)&&m.call(t)==c}function s(t){var e=typeof t
return!!t&&("object"==e||"function"==e)}function l(t){return null!=t&&(a(t)?y.test(f.call(t)):r(t)&&p.test(t))}var u="[object Array]",c="[object Function]",p=/^\[object .+?Constructor\]$/,h=Object.prototype,f=Function.prototype.toString,d=h.hasOwnProperty,m=h.toString,y=RegExp("^"+f.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_=n(Array,"isArray"),v=9007199254740991,g=_||function(t){return r(t)&&o(t.length)&&m.call(t)==u}
e.exports=g},{}],30:[function(t,e,i){function r(t,e,i,r){i="function"==typeof i?o(i,r,3):void 0
var a=i?i(t,e):void 0
return void 0===a?n(t,e,i):!!a}var n=t("lodash._baseisequal"),o=t("lodash._bindcallback")
e.exports=r},{"lodash._baseisequal":25,"lodash._bindcallback":26}],31:[function(t,e,i){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&a>=t}function n(t){return!!t&&"object"==typeof t}function o(t){return n(t)&&r(t.length)&&!!P[I.call(t)]}var a=9007199254740991,s="[object Arguments]",l="[object Array]",u="[object Boolean]",c="[object Date]",p="[object Error]",h="[object Function]",f="[object Map]",d="[object Number]",m="[object Object]",y="[object RegExp]",_="[object Set]",v="[object String]",g="[object WeakMap]",x="[object ArrayBuffer]",b="[object DataView]",w="[object Float32Array]",T="[object Float64Array]",z="[object Int8Array]",E="[object Int16Array]",S="[object Int32Array]",L="[object Uint8Array]",M="[object Uint8ClampedArray]",A="[object Uint16Array]",C="[object Uint32Array]",P={}
P[w]=P[T]=P[z]=P[E]=P[S]=P[L]=P[M]=P[A]=P[C]=!0,P[s]=P[l]=P[x]=P[u]=P[b]=P[c]=P[p]=P[h]=P[f]=P[d]=P[m]=P[y]=P[_]=P[v]=P[g]=!1
var k=Object.prototype,I=k.toString
e.exports=o},{}],32:[function(t,e,i){function r(t){return function(e){return null==e?void 0:e[t]}}function n(t){return null!=t&&a(v(t))}function o(t,e){return t="number"==typeof t||f.test(t)?+t:-1,e=null==e?_:e,t>-1&&t%1==0&&e>t}function a(t){return"number"==typeof t&&t>-1&&t%1==0&&_>=t}function s(t){for(var e=u(t),i=e.length,r=i&&t.length,n=!!r&&a(r)&&(h(t)||p(t)),s=-1,l=[];++s<i;){var c=e[s];(n&&o(c,r)||m.call(t,c))&&l.push(c)}return l}function l(t){var e=typeof t
return!!t&&("object"==e||"function"==e)}function u(t){if(null==t)return[]
l(t)||(t=Object(t))
var e=t.length
e=e&&a(e)&&(h(t)||p(t))&&e||0
for(var i=t.constructor,r=-1,n="function"==typeof i&&i.prototype===t,s=Array(e),u=e>0;++r<e;)s[r]=r+""
for(var c in t)u&&o(c,e)||"constructor"==c&&(n||!m.call(t,c))||s.push(c)
return s}var c=t("lodash._getnative"),p=t("lodash.isarguments"),h=t("lodash.isarray"),f=/^\d+$/,d=Object.prototype,m=d.hasOwnProperty,y=c(Object,"keys"),_=9007199254740991,v=r("length"),g=y?function(t){var e=null==t?void 0:t.constructor
return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&n(t)?s(t):l(t)?y(t):[]}:s
e.exports=g},{"lodash._getnative":27,"lodash.isarguments":28,"lodash.isarray":29}],33:[function(t,e,i){"use strict"
function r(t){return!!(n()&&o()&&a()&&s()&&l()&&u()&&c()&&p(t&&t.failIfMajorPerformanceCaveat))}function n(){return"undefined"!=typeof window&&"undefined"!=typeof document}function o(){return Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray}function a(){return Function.prototype&&Function.prototype.bind}function s(){return Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions}function l(){return"JSON"in window&&"parse"in JSON&&"stringify"in JSON}function u(){return"Worker"in window}function c(){return"Uint8ClampedArray"in window}function p(t){return void 0===f[t]&&(f[t]=h(t)),f[t]}function h(t){var e=document.createElement("canvas"),i=Object.create(r.webGLContextAttributes)
return i.failIfMajorPerformanceCaveat=t,e.probablySupportsContext?e.probablySupportsContext("webgl",i)||e.probablySupportsContext("experimental-webgl",i):e.supportsContext?e.supportsContext("webgl",i)||e.supportsContext("experimental-webgl",i):e.getContext("webgl",i)||e.getContext("experimental-webgl",i)}void 0!==e&&e.exports?e.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r)
var f={}
r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},{}],34:[function(t,e,i){"use strict"
function r(t){var e
t&&t.length&&(e=t,t=e.length)
var i=new Uint8Array(t||0)
return e&&i.set(e),i.readUInt32LE=o.readUInt32LE,i.writeUInt32LE=o.writeUInt32LE,i.readInt32LE=o.readInt32LE,i.writeInt32LE=o.writeInt32LE,i.readFloatLE=o.readFloatLE,i.writeFloatLE=o.writeFloatLE,i.readDoubleLE=o.readDoubleLE,i.writeDoubleLE=o.writeDoubleLE,i.toString=o.toString,i.write=o.write,i.slice=o.slice,i.copy=o.copy,i._isBuffer=!0,i}function n(t){for(var e,i,r=t.length,n=[],o=0;r>o;o++){if((e=t.charCodeAt(o))>55295&&57344>e){if(!i){e>56319||o+1===r?n.push(239,191,189):i=e
continue}if(56320>e){n.push(239,191,189),i=e
continue}e=i-55296<<10|e-56320|65536,i=null}else i&&(n.push(239,191,189),i=null)
128>e?n.push(e):2048>e?n.push(e>>6|192,63&e|128):65536>e?n.push(e>>12|224,e>>6&63|128,63&e|128):n.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}return n}e.exports=r
var o,a,s,l=t("ieee754")
o={readUInt32LE:function(t){return(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},writeUInt32LE:function(t,e){this[e]=t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24},readInt32LE:function(t){return(this[t]|this[t+1]<<8|this[t+2]<<16)+(this[t+3]<<24)},readFloatLE:function(t){return l.read(this,t,!0,23,4)},readDoubleLE:function(t){return l.read(this,t,!0,52,8)},writeFloatLE:function(t,e){return l.write(this,t,e,!0,23,4)},writeDoubleLE:function(t,e){return l.write(this,t,e,!0,52,8)},toString:function(t,e,i){var r="",n=""
e=e||0,i=Math.min(this.length,i||this.length)
for(var o=e;i>o;o++){var a=this[o]
127>=a?(r+=decodeURIComponent(n)+String.fromCharCode(a),n=""):n+="%"+a.toString(16)}return r+=decodeURIComponent(n)},write:function(t,e){for(var i=t===a?s:n(t),r=0;r<i.length;r++)this[e+r]=i[r]},slice:function(t,e){return this.subarray(t,e)},copy:function(t,e){e=e||0
for(var i=0;i<this.length;i++)t[e+i]=this[i]}},o.writeInt32LE=o.writeUInt32LE,r.byteLength=function(t){return a=t,s=n(t),s.length},r.isBuffer=function(t){return!(!t||!t._isBuffer)}},{ieee754:20}],35:[function(t,e,i){(function(i){"use strict"
function r(t){this.buf=y.isBuffer(t)?t:new y(t||0),this.pos=0,this.length=this.buf.length}function n(t,e){var i,r=e.buf
if(i=r[e.pos++],t+=268435456*(127&i),128>i)return t
if(i=r[e.pos++],t+=34359738368*(127&i),128>i)return t
if(i=r[e.pos++],t+=4398046511104*(127&i),128>i)return t
if(i=r[e.pos++],t+=562949953421312*(127&i),128>i)return t
if(i=r[e.pos++],t+=72057594037927940*(127&i),128>i)return t
if(i=r[e.pos++],t+=0x8000000000000000*(127&i),128>i)return t
throw Error("Expected varint not more than 10 bytes")}function o(t,e){e.realloc(10)
for(var i=e.pos+10;t>=1;){if(e.pos>=i)throw Error("Given varint doesn't fit into 10 bytes")
var r=255&t
e.buf[e.pos++]=r|(t>=128?128:0),t/=128}}function a(t,e,i){var r=16383>=e?1:2097151>=e?2:268435455>=e?3:Math.ceil(Math.log(e)/(7*Math.LN2))
i.realloc(r)
for(var n=i.pos-1;n>=t;n--)i.buf[n+r]=i.buf[n]}function s(t,e){for(var i=0;i<t.length;i++)e.writeVarint(t[i])}function l(t,e){for(var i=0;i<t.length;i++)e.writeSVarint(t[i])}function u(t,e){for(var i=0;i<t.length;i++)e.writeFloat(t[i])}function c(t,e){for(var i=0;i<t.length;i++)e.writeDouble(t[i])}function p(t,e){for(var i=0;i<t.length;i++)e.writeBoolean(t[i])}function h(t,e){for(var i=0;i<t.length;i++)e.writeFixed32(t[i])}function f(t,e){for(var i=0;i<t.length;i++)e.writeSFixed32(t[i])}function d(t,e){for(var i=0;i<t.length;i++)e.writeFixed64(t[i])}function m(t,e){for(var i=0;i<t.length;i++)e.writeSFixed64(t[i])}e.exports=r
var y=i.Buffer||t("./buffer")
r.Varint=0,r.Fixed64=1,r.Bytes=2,r.Fixed32=5
var _=4294967296,v=1/_,g=Math.pow(2,63)
r.prototype={destroy:function(){this.buf=null},readFields:function(t,e,i){for(i=i||this.length;this.pos<i;){var r=this.readVarint(),n=r>>3,o=this.pos
t(n,e,this),this.pos===o&&this.skip(r)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=this.buf.readUInt32LE(this.pos)
return this.pos+=4,t},readSFixed32:function(){var t=this.buf.readInt32LE(this.pos)
return this.pos+=4,t},readFixed64:function(){var t=this.buf.readUInt32LE(this.pos)+this.buf.readUInt32LE(this.pos+4)*_
return this.pos+=8,t},readSFixed64:function(){var t=this.buf.readUInt32LE(this.pos)+this.buf.readInt32LE(this.pos+4)*_
return this.pos+=8,t},readFloat:function(){var t=this.buf.readFloatLE(this.pos)
return this.pos+=4,t},readDouble:function(){var t=this.buf.readDoubleLE(this.pos)
return this.pos+=8,t},readVarint:function(){var t,e,i=this.buf
return e=i[this.pos++],t=127&e,128>e?t:(e=i[this.pos++],t|=(127&e)<<7,128>e?t:(e=i[this.pos++],t|=(127&e)<<14,128>e?t:(e=i[this.pos++],t|=(127&e)<<21,128>e?t:n(t,this))))},readVarint64:function(){var t=this.pos,e=this.readVarint()
if(g>e)return e
for(var i=this.pos-2;255===this.buf[i];)i--
t>i&&(i=t),e=0
for(var r=0;i-t+1>r;r++){var n=127&~this.buf[t+r]
e+=4>r?n<<7*r:n*Math.pow(2,7*r)}return-e-1},readSVarint:function(){var t=this.readVarint()
return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var t=this.readVarint()+this.pos,e=this.buf.toString("utf8",this.pos,t)
return this.pos=t,e},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.slice(this.pos,t)
return this.pos=t,e},readPackedVarint:function(){for(var t=this.readVarint()+this.pos,e=[];this.pos<t;)e.push(this.readVarint())
return e},readPackedSVarint:function(){for(var t=this.readVarint()+this.pos,e=[];this.pos<t;)e.push(this.readSVarint())
return e},readPackedBoolean:function(){for(var t=this.readVarint()+this.pos,e=[];this.pos<t;)e.push(this.readBoolean())
return e},readPackedFloat:function(){for(var t=this.readVarint()+this.pos,e=[];this.pos<t;)e.push(this.readFloat())
return e},readPackedDouble:function(){for(var t=this.readVarint()+this.pos,e=[];this.pos<t;)e.push(this.readDouble())
return e},readPackedFixed32:function(){for(var t=this.readVarint()+this.pos,e=[];this.pos<t;)e.push(this.readFixed32())
return e},readPackedSFixed32:function(){for(var t=this.readVarint()+this.pos,e=[];this.pos<t;)e.push(this.readSFixed32())
return e},readPackedFixed64:function(){for(var t=this.readVarint()+this.pos,e=[];this.pos<t;)e.push(this.readFixed64())
return e},readPackedSFixed64:function(){for(var t=this.readVarint()+this.pos,e=[];this.pos<t;)e.push(this.readSFixed64())
return e},skip:function(t){var e=7&t
if(e===r.Varint)for(;this.buf[this.pos++]>127;);else if(e===r.Bytes)this.pos=this.readVarint()+this.pos
else if(e===r.Fixed32)this.pos+=4
else{if(e!==r.Fixed64)throw Error("Unimplemented type: "+e)
this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2
if(e!==this.length){var i=new y(e)
this.buf.copy(i),this.buf=i,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.slice(0,this.length)},writeFixed32:function(t){this.realloc(4),this.buf.writeUInt32LE(t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),this.buf.writeInt32LE(t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),this.buf.writeInt32LE(-1&t,this.pos),this.buf.writeUInt32LE(Math.floor(t*v),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),this.buf.writeInt32LE(-1&t,this.pos),this.buf.writeInt32LE(Math.floor(t*v),this.pos+4),this.pos+=8},writeVarint:function(t){return(t=+t)>268435455?void o(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),127>=t||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),127>=t||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),127>=t||(this.buf[this.pos++]=t>>>7&127))),void 0)},writeSVarint:function(t){this.writeVarint(0>t?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(!!t)},writeString:function(t){t+=""
var e=y.byteLength(t)
this.writeVarint(e),this.realloc(e),this.buf.write(t,this.pos),this.pos+=e},writeFloat:function(t){this.realloc(4),this.buf.writeFloatLE(t,this.pos),this.pos+=4},writeDouble:function(t){this.realloc(8),this.buf.writeDoubleLE(t,this.pos),this.pos+=8},writeBytes:function(t){var e=t.length
this.writeVarint(e),this.realloc(e)
for(var i=0;e>i;i++)this.buf[this.pos++]=t[i]},writeRawMessage:function(t,e){this.pos++
var i=this.pos
t(e,this)
var r=this.pos-i
r>=128&&a(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,e,i){this.writeTag(t,r.Bytes),this.writeRawMessage(e,i)},writePackedVarint:function(t,e){this.writeMessage(t,s,e)},writePackedSVarint:function(t,e){this.writeMessage(t,l,e)},writePackedBoolean:function(t,e){this.writeMessage(t,p,e)},writePackedFloat:function(t,e){this.writeMessage(t,u,e)},writePackedDouble:function(t,e){this.writeMessage(t,c,e)},writePackedFixed32:function(t,e){this.writeMessage(t,h,e)},writePackedSFixed32:function(t,e){this.writeMessage(t,f,e)},writePackedFixed64:function(t,e){this.writeMessage(t,d,e)},writePackedSFixed64:function(t,e){this.writeMessage(t,m,e)},writeBytesField:function(t,e){this.writeTag(t,r.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,r.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,r.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,r.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,r.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,r.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,r.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,r.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,r.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,r.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,!!e)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./buffer":34}],36:[function(t,e,i){"use strict"
function r(t,e){this.x=t,this.y=e}e.exports=r,r.prototype={clone:function(){return new r(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,i=t.y-this.y
return e*e+i*i},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,i=t[2]*this.x+t[3]*this.y
return this.x=e,this.y=i,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y
return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),i=Math.sin(t),r=e*this.x-i*this.y,n=i*this.x+e*this.y
return this.x=r,this.y=n,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},r.convert=function(t){return t instanceof r?t:Array.isArray(t)?new r(t[0],t[1]):t}},{}],37:[function(t,e,i){function r(){throw Error("setTimeout has not been defined")}function n(){throw Error("clearTimeout has not been defined")}function o(t){if(p===setTimeout)return setTimeout(t,0)
if((p===r||!p)&&setTimeout)return p=setTimeout,setTimeout(t,0)
try{return p(t,0)}catch(e){try{return p.call(null,t,0)}catch(e){return p.call(this,t,0)}}}function a(t){if(h===clearTimeout)return clearTimeout(t)
if((h===n||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t)
try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&d&&(y=!1,d.length?m=d.concat(m):_=-1,m.length&&l())}function l(){if(!y){var t=o(s)
y=!0
for(var e=m.length;e;){for(d=m,m=[];++_<e;)d&&d[_].run()
_=-1,e=m.length}d=null,y=!1,a(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var p,h,f=e.exports={}
!function(){try{p="function"==typeof setTimeout?setTimeout:r}catch(t){p=r}try{h="function"==typeof clearTimeout?clearTimeout:n}catch(t){h=n}}()
var d,m=[],y=!1,_=-1
f.nextTick=function(t){var e=Array(arguments.length-1)
if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i]
m.push(new u(t,e)),1!==m.length||y||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(t){return[]},f.binding=function(t){throw Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],38:[function(t,e,i){"use strict"
function r(t,e,i,a,s){for(i=i||0,a=a||t.length-1,s=s||o;a>i;){if(a-i>600){var l=a-i+1,u=e-i+1,c=Math.log(l),p=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*p*(l-p)/l)*(0>u-l/2?-1:1)
r(t,e,Math.max(i,Math.floor(e-u*p/l+h)),Math.min(a,Math.floor(e+(l-u)*p/l+h)),s)}var f=t[e],d=i,m=a
for(n(t,i,e),s(t[a],f)>0&&n(t,i,a);m>d;){for(n(t,d,m),d++,m--;s(t[d],f)<0;)d++
for(;s(t[m],f)>0;)m--}0===s(t[i],f)?n(t,i,m):(m++,n(t,m,a)),e>=m&&(i=m+1),m>=e&&(a=m-1)}}function n(t,e,i){var r=t[e]
t[e]=t[i],t[i]=r}function o(t,e){return e>t?-1:t>e?1:0}e.exports=r},{}],39:[function(t,e,i){"use strict"
function r(t){return new n(t)}function n(t){this.options=f(Object.create(this.options),t),this.trees=Array(this.options.maxZoom+1)}function o(t,e,i,r,n){return{x:t,y:e,zoom:1/0,id:r,properties:n,parentId:-1,numPoints:i}}function a(t,e){var i=t.geometry.coordinates
return{x:u(i[0]),y:c(i[1]),zoom:1/0,id:e,parentId:-1}}function s(t){return{type:"Feature",properties:l(t),geometry:{type:"Point",coordinates:[p(t.x),h(t.y)]}}}function l(t){var e=t.numPoints,i=e>=1e4?Math.round(e/1e3)+"k":e>=1e3?Math.round(e/100)/10+"k":e
return f(f({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:i})}function u(t){return t/360+.5}function c(t){var e=Math.sin(t*Math.PI/180),i=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return 0>i?0:i>1?1:i}function p(t){return 360*(t-.5)}function h(t){var e=(180-360*t)*Math.PI/180
return 360*Math.atan(Math.exp(e))/Math.PI-90}function f(t,e){for(var i in e)t[i]=e[i]
return t}function d(t){return t.x}function m(t){return t.y}var y=t("kdbush")
e.exports=r,n.prototype={options:{minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,reduce:null,initial:function(){return{}},map:function(t){return t}},load:function(t){var e=this.options.log
e&&console.time("total time")
var i="prepare "+t.length+" points"
e&&console.time(i),this.points=t
var r=t.map(a)
e&&console.timeEnd(i)
for(var n=this.options.maxZoom;n>=this.options.minZoom;n--){var o=+Date.now()
this.trees[n+1]=y(r,d,m,this.options.nodeSize,Float32Array),r=this._cluster(r,n),e&&console.log("z%d: %d clusters in %dms",n,r.length,+Date.now()-o)}return this.trees[this.options.minZoom]=y(r,d,m,this.options.nodeSize,Float32Array),e&&console.timeEnd("total time"),this},getClusters:function(t,e){for(var i=this.trees[this._limitZoom(e)],r=i.range(u(t[0]),c(t[3]),u(t[2]),c(t[1])),n=[],o=0;o<r.length;o++){var a=i.points[r[o]]
n.push(a.numPoints?s(a):this.points[a.id])}return n},getChildren:function(t,e){for(var i=this.trees[e+1].points[t],r=this.options.radius/(this.options.extent*Math.pow(2,e)),n=this.trees[e+1].within(i.x,i.y,r),o=[],a=0;a<n.length;a++){var l=this.trees[e+1].points[n[a]]
l.parentId===t&&o.push(l.numPoints?s(l):this.points[l.id])}return o},getLeaves:function(t,e,i,r){i=i||10,r=r||0
var n=[]
return this._appendLeaves(n,t,e,i,r,0),n},getTile:function(t,e,i){var r=this.trees[this._limitZoom(t)],n=Math.pow(2,t),o=this.options.extent,a=this.options.radius,s=a/o,l=(i-s)/n,u=(i+1+s)/n,c={features:[]}
return this._addTileFeatures(r.range((e-s)/n,l,(e+1+s)/n,u),r.points,e,i,n,c),0===e&&this._addTileFeatures(r.range(1-s/n,l,1,u),r.points,n,i,n,c),e===n-1&&this._addTileFeatures(r.range(0,l,s/n,u),r.points,-1,i,n,c),c.features.length?c:null},getClusterExpansionZoom:function(t,e){for(;e<this.options.maxZoom;){var i=this.getChildren(t,e)
if(e++,1!==i.length)break
t=i[0].properties.cluster_id}return e},_appendLeaves:function(t,e,i,r,n,o){for(var a=this.getChildren(e,i),s=0;s<a.length;s++){var l=a[s].properties
if(l.cluster?o+l.point_count<=n?o+=l.point_count:o=this._appendLeaves(t,l.cluster_id,i+1,r,n,o):n>o?o++:t.push(a[s]),t.length===r)break}return o},_addTileFeatures:function(t,e,i,r,n,o){for(var a=0;a<t.length;a++){var s=e[t[a]]
o.features.push({type:1,geometry:[[Math.round(this.options.extent*(s.x*n-i)),Math.round(this.options.extent*(s.y*n-r))]],tags:s.numPoints?l(s):this.points[s.id].properties})}},_limitZoom:function(t){return Math.max(this.options.minZoom,Math.min(t,this.options.maxZoom+1))},_cluster:function(t,e){for(var i=[],r=this.options.radius/(this.options.extent*Math.pow(2,e)),n=0;n<t.length;n++){var a=t[n]
if(!(a.zoom<=e)){a.zoom=e
var s=this.trees[e+1],l=s.within(a.x,a.y,r),u=a.numPoints||1,c=a.x*u,p=a.y*u,h=null
this.options.reduce&&(h=this.options.initial(),this._accumulate(h,a))
for(var f=0;f<l.length;f++){var d=s.points[l[f]]
if(e<d.zoom){var m=d.numPoints||1
d.zoom=e,c+=d.x*m,p+=d.y*m,u+=m,d.parentId=n,this.options.reduce&&this._accumulate(h,d)}}1===u?i.push(a):(a.parentId=n,i.push(o(c/u,p/u,u,n,h)))}}return i},_accumulate:function(t,e){var i=e.numPoints?e.properties:this.options.map(this.points[e.id].properties)
this.options.reduce(t,i)}}},{kdbush:21}],40:[function(t,e,i){"use strict"
function r(t,e){if(!(this instanceof r))return new r(t,e)
if(this.data=t||[],this.length=this.data.length,this.compare=e||n,this.length>0)for(var i=this.length>>1;i>=0;i--)this._down(i)}function n(t,e){return e>t?-1:t>e?1:0}e.exports=r,r.prototype={push:function(t){this.data.push(t),this.length++,this._up(this.length-1)},pop:function(){if(0!==this.length){var t=this.data[0]
return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this._down(0)),this.data.pop(),t}},peek:function(){return this.data[0]},_up:function(t){for(var e=this.data,i=this.compare,r=e[t];t>0;){var n=t-1>>1,o=e[n]
if(i(r,o)>=0)break
e[t]=o,t=n}e[t]=r},_down:function(t){for(var e=this.data,i=this.compare,r=this.length,n=r>>1,o=e[t];n>t;){var a=1+(t<<1),s=a+1,l=e[a]
if(r>s&&i(e[s],l)<0&&(a=s,l=e[s]),i(l,o)>=0)break
e[t]=l,t=a}e[t]=o}}},{}],41:[function(t,e,i){"function"==typeof Object.create?e.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(t,e){t.super_=e
var i=function(){}
i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}},{}],42:[function(t,e,i){e.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},{}],43:[function(t,e,i){(function(e,r){function n(t,e){var r={seen:[],stylize:a}
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(e)?r.showHidden=e:e&&i._extend(r,e),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),l(r,t,r.depth)}function o(t,e){var i=n.styles[e]
return i?"["+n.colors[i][0]+"m"+t+"["+n.colors[i][1]+"m":t}function a(t,e){return t}function s(t){var e={}
return t.forEach(function(t,i){e[t]=!0}),e}function l(t,e,r){if(t.customInspect&&e&&S(e.inspect)&&e.inspect!==i.inspect&&(!e.constructor||e.constructor.prototype!==e)){var n=e.inspect(r,t)
return g(n)||(n=l(t,n,r)),n}var o=u(t,e)
if(o)return o
var a=Object.keys(e),m=s(a)
if(t.showHidden&&(a=Object.getOwnPropertyNames(e)),E(e)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return c(e)
if(0===a.length){if(S(e)){var y=e.name?": "+e.name:""
return t.stylize("[Function"+y+"]","special")}if(w(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp")
if(z(e))return t.stylize(Date.prototype.toString.call(e),"date")
if(E(e))return c(e)}var _="",v=!1,x=["{","}"]
if(d(e)&&(v=!0,x=["[","]"]),S(e)&&(_=" [Function"+(e.name?": "+e.name:"")+"]"),w(e)&&(_=" "+RegExp.prototype.toString.call(e)),z(e)&&(_=" "+Date.prototype.toUTCString.call(e)),E(e)&&(_=" "+c(e)),0===a.length&&(!v||0==e.length))return x[0]+_+x[1]
if(0>r)return w(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special")
t.seen.push(e)
var b
return b=v?p(t,e,r,m,a):a.map(function(i){return h(t,e,r,m,i,v)}),t.seen.pop(),f(b,_,x)}function u(t,e){if(b(e))return t.stylize("undefined","undefined")
if(g(e)){var i="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return t.stylize(i,"string")}return v(e)?t.stylize(""+e,"number"):m(e)?t.stylize(""+e,"boolean"):y(e)?t.stylize("null","null"):void 0}function c(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,i,r,n){for(var o=[],a=0,s=e.length;s>a;++a)P(e,a+"")?o.push(h(t,e,i,r,a+"",!0)):o.push("")
return n.forEach(function(n){n.match(/^\d+$/)||o.push(h(t,e,i,r,n,!0))}),o}function h(t,e,i,r,n,o){var a,s,u
if(u=Object.getOwnPropertyDescriptor(e,n)||{value:e[n]},u.get?s=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(s=t.stylize("[Setter]","special")),P(r,n)||(a="["+n+"]"),s||(t.seen.indexOf(u.value)<0?(s=y(i)?l(t,u.value,null):l(t,u.value,i-1),s.indexOf("\n")>-1&&(s=o?s.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n"))):s=t.stylize("[Circular]","special")),b(a)){if(o&&n.match(/^\d+$/))return s
a=JSON.stringify(""+n),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function f(t,e,i){var r=0
return t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?i[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+i[1]:i[0]+e+" "+t.join(", ")+" "+i[1]}function d(t){return Array.isArray(t)}function m(t){return"boolean"==typeof t}function y(t){return null===t}function _(t){return null==t}function v(t){return"number"==typeof t}function g(t){return"string"==typeof t}function x(t){return"symbol"==typeof t}function b(t){return void 0===t}function w(t){return T(t)&&"[object RegExp]"===M(t)}function T(t){return"object"==typeof t&&null!==t}function z(t){return T(t)&&"[object Date]"===M(t)}function E(t){return T(t)&&("[object Error]"===M(t)||t instanceof Error)}function S(t){return"function"==typeof t}function L(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t}function M(t){return Object.prototype.toString.call(t)}function A(t){return 10>t?"0"+t.toString(10):t.toString(10)}function C(){var t=new Date,e=[A(t.getHours()),A(t.getMinutes()),A(t.getSeconds())].join(":")
return[t.getDate(),R[t.getMonth()],e].join(" ")}function P(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var k=/%[sdj%]/g
i.format=function(t){if(!g(t)){for(var e=[],i=0;i<arguments.length;i++)e.push(n(arguments[i]))
return e.join(" ")}for(var i=1,r=arguments,o=r.length,a=(t+"").replace(k,function(t){if("%%"===t)return"%"
if(i>=o)return t
switch(t){case"%s":return r[i++]+""
case"%d":return+r[i++]
case"%j":try{return JSON.stringify(r[i++])}catch(t){return"[Circular]"}default:return t}}),s=r[i];o>i;s=r[++i])a+=y(s)||!T(s)?" "+s:" "+n(s)
return a},i.deprecate=function(t,n){function o(){if(!a){if(e.throwDeprecation)throw Error(n)
e.traceDeprecation?console.trace(n):console.error(n),a=!0}return t.apply(this,arguments)}if(b(r.process))return function(){return i.deprecate(t,n).apply(this,arguments)}
if(!0===e.noDeprecation)return t
var a=!1
return o}
var I,D={}
i.debuglog=function(t){if(b(I)&&(I=e.env.NODE_DEBUG||""),t=t.toUpperCase(),!D[t])if(RegExp("\\b"+t+"\\b","i").test(I)){var r=e.pid
D[t]=function(){var e=i.format.apply(i,arguments)
console.error("%s %d: %s",t,r,e)}}else D[t]=function(){}
return D[t]},i.inspect=n,n.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},n.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},i.isArray=d,i.isBoolean=m,i.isNull=y,i.isNullOrUndefined=_,i.isNumber=v,i.isString=g,i.isSymbol=x,i.isUndefined=b,i.isRegExp=w,i.isObject=T,i.isDate=z,i.isError=E,i.isFunction=S,i.isPrimitive=L,i.isBuffer=t("./support/isBuffer")
var R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
i.log=function(){console.log("%s - %s",C(),i.format.apply(i,arguments))},i.inherits=t("inherits"),i._extend=function(t,e){if(!e||!T(e))return t
for(var i=Object.keys(e),r=i.length;r--;)t[i[r]]=e[i[r]]
return t}}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":42,_process:37,inherits:41}],44:[function(t,e,i){e.exports.VectorTile=t("./lib/vectortile.js"),e.exports.VectorTileFeature=t("./lib/vectortilefeature.js"),e.exports.VectorTileLayer=t("./lib/vectortilelayer.js")},{"./lib/vectortile.js":45,"./lib/vectortilefeature.js":46,"./lib/vectortilelayer.js":47}],45:[function(t,e,i){"use strict"
function r(t,e){this.layers=t.readFields(n,{},e)}function n(t,e,i){if(3===t){var r=new o(i,i.readVarint()+i.pos)
r.length&&(e[r.name]=r)}}var o=t("./vectortilelayer")
e.exports=r},{"./vectortilelayer":47}],46:[function(t,e,i){"use strict"
function r(t,e,i,r,o){this.properties={},this.extent=i,this.type=0,this._pbf=t,this._geometry=-1,this._keys=r,this._values=o,t.readFields(n,this,e)}function n(t,e,i){1==t?e.id=i.readVarint():2==t?o(i,e):3==t?e.type=i.readVarint():4==t&&(e._geometry=i.pos)}function o(t,e){for(var i=t.readVarint()+t.pos;t.pos<i;){var r=e._keys[t.readVarint()],n=e._values[t.readVarint()]
e.properties[r]=n}}function a(t){var e=t.length
if(1>=e)return[t]
for(var i,r,n=[],o=0;e>o;o++){var a=s(t[o])
0!==a&&(void 0===r&&(r=0>a),r===0>a?(i&&n.push(i),i=[t[o]]):i.push(t[o]))}return i&&n.push(i),n}function s(t){for(var e,i,r=0,n=0,o=t.length,a=o-1;o>n;a=n++)e=t[n],i=t[a],r+=(i.x-e.x)*(e.y+i.y)
return r}var l=t("point-geometry")
e.exports=r,r.types=["Unknown","Point","LineString","Polygon"],r.prototype.loadGeometry=function(){var t=this._pbf
t.pos=this._geometry
for(var e,i=t.readVarint()+t.pos,r=1,n=0,o=0,a=0,s=[];t.pos<i;){if(!n){var u=t.readVarint()
r=7&u,n=u>>3}if(n--,1===r||2===r)o+=t.readSVarint(),a+=t.readSVarint(),1===r&&(e&&s.push(e),e=[]),e.push(new l(o,a))
else{if(7!==r)throw Error("unknown command "+r)
e&&e.push(e[0].clone())}}return e&&s.push(e),s},r.prototype.bbox=function(){var t=this._pbf
t.pos=this._geometry
for(var e=t.readVarint()+t.pos,i=1,r=0,n=0,o=0,a=1/0,s=-1/0,l=1/0,u=-1/0;t.pos<e;){if(!r){var c=t.readVarint()
i=7&c,r=c>>3}if(r--,1===i||2===i)n+=t.readSVarint(),o+=t.readSVarint(),a>n&&(a=n),n>s&&(s=n),l>o&&(l=o),o>u&&(u=o)
else if(7!==i)throw Error("unknown command "+i)}return[a,l,s,u]},r.prototype.toGeoJSON=function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],r=180-360*(i.y+c)/l
t[e]=[360*(i.x+u)/l-180,360/Math.PI*Math.atan(Math.exp(r*Math.PI/180))-90]}}var o,s,l=this.extent*Math.pow(2,i),u=this.extent*t,c=this.extent*e,p=this.loadGeometry(),h=r.types[this.type]
switch(this.type){case 1:var f=[]
for(o=0;o<p.length;o++)f[o]=p[o][0]
p=f,n(p)
break
case 2:for(o=0;o<p.length;o++)n(p[o])
break
case 3:for(p=a(p),o=0;o<p.length;o++)for(s=0;s<p[o].length;s++)n(p[o][s])}1===p.length?p=p[0]:h="Multi"+h
var d={type:"Feature",geometry:{type:h,coordinates:p},properties:this.properties}
return"id"in this&&(d.id=this.id),d}},{"point-geometry":36}],47:[function(t,e,i){"use strict"
function r(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(n,this,e),this.length=this._features.length}function n(t,e,i){15===t?e.version=i.readVarint():1===t?e.name=i.readString():5===t?e.extent=i.readVarint():2===t?e._features.push(i.pos):3===t?e._keys.push(i.readString()):4===t&&e._values.push(o(i))}function o(t){for(var e=null,i=t.readVarint()+t.pos;t.pos<i;){var r=t.readVarint()>>3
e=1===r?t.readString():2===r?t.readFloat():3===r?t.readDouble():4===r?t.readVarint64():5===r?t.readVarint():6===r?t.readSVarint():7===r?t.readBoolean():null}return e}var a=t("./vectortilefeature.js")
e.exports=r,r.prototype.feature=function(t){if(0>t||t>=this._features.length)throw Error("feature index out of bounds")
this._pbf.pos=this._features[t]
var e=this._pbf.readVarint()+this._pbf.pos
return new a(this._pbf,e,this.extent,this._keys,this._values)}},{"./vectortilefeature.js":46}],48:[function(t,e,i){function r(t){var e=[]
for(var i in t.layers)e.push(o(t.layers[i]))
var r=new c
return p.tile.write({layers:e},r),r.finish()}function n(t){var e={}
for(var i in t)e[i]=new h(t[i].features),e[i].name=i
return r({layers:e})}function o(t){for(var e={name:t.name||"",version:t.version||1,extent:t.extent||4096,keys:[],values:[],features:[]},i={},r={},n=0;n<t.length;n++){var o=t.feature(n)
o.geometry=l(o.loadGeometry())
var a=[]
for(var s in o.properties){var c=i[s]
void 0===c&&(e.keys.push(s),c=e.keys.length-1,i[s]=c)
var p=u(o.properties[s]),h=r[p.key]
void 0===h&&(e.values.push(p),h=e.values.length-1,r[p.key]=h),a.push(c),a.push(h)}o.tags=a,e.features.push(o)}return e}function a(t,e){return(e<<3)+(7&t)}function s(t){return t<<1^t>>31}function l(t){for(var e=[],i=0,r=0,n=t.length,o=0;n>o;o++){var l=t[o]
e.push(a(1,1))
for(var u=0;u<l.length;u++){1===u&&e.push(a(2,l.length-1))
var c=l[u].x-i,p=l[u].y-r
e.push(s(c),s(p)),i+=c,r+=p}}return e}function u(t){var e,i=typeof t
return"string"===i?e={string_value:t}:"boolean"===i?e={bool_value:t}:"number"===i?e=t%1!=0?{double_value:t}:0>t?{sint_value:t}:{uint_value:t}:(t=JSON.stringify(t),e={string_value:t}),e.key=i+":"+t,e}var c=t("pbf"),p=t("./vector-tile-pb"),h=t("./lib/geojson_wrapper")
e.exports=r,e.exports.fromVectorTileJs=r,e.exports.fromGeojsonVt=n,e.exports.GeoJSONWrapper=h},{"./lib/geojson_wrapper":49,"./vector-tile-pb":50,pbf:35}],49:[function(t,e,i){"use strict"
function r(t){this.features=t,this.length=t.length}function n(t){this.id="number"==typeof t.id?t.id:void 0,this.type=t.type,this.rawGeometry=1===t.type?[t.geometry]:t.geometry,this.properties=t.tags,this.extent=4096}var o=t("point-geometry"),a=t("vector-tile").VectorTileFeature
e.exports=r,r.prototype.feature=function(t){return new n(this.features[t])},n.prototype.loadGeometry=function(){var t=this.rawGeometry
this.geometry=[]
for(var e=0;e<t.length;e++){for(var i=t[e],r=[],n=0;n<i.length;n++)r.push(new o(i[n][0],i[n][1]))
this.geometry.push(r)}return this.geometry},n.prototype.bbox=function(){this.geometry||this.loadGeometry()
for(var t=this.geometry,e=1/0,i=-1/0,r=1/0,n=-1/0,o=0;o<t.length;o++)for(var a=t[o],s=0;s<a.length;s++){var l=a[s]
e=Math.min(e,l.x),i=Math.max(i,l.x),r=Math.min(r,l.y),n=Math.max(n,l.y)}return[e,r,i,n]},n.prototype.toGeoJSON=a.prototype.toGeoJSON},{"point-geometry":36,"vector-tile":44}],50:[function(t,e,i){"use strict"
function r(t,e){return t.readFields(n,{layers:[]},e)}function n(t,e,i){3===t&&e.layers.push(h(i,i.readVarint()+i.pos))}function o(t,e){var i
if(void 0!==t.layers)for(i=0;i<t.layers.length;i++)e.writeMessage(3,d,t.layers[i])}function a(t,e){return t.readFields(s,{},e)}function s(t,e,i){1===t?e.string_value=i.readString():2===t?e.float_value=i.readFloat():3===t?e.double_value=i.readDouble():4===t?e.int_value=i.readVarint():5===t?e.uint_value=i.readVarint():6===t?e.sint_value=i.readSVarint():7===t&&(e.bool_value=i.readBoolean())}function l(t,e){void 0!==t.string_value&&e.writeStringField(1,t.string_value),void 0!==t.float_value&&e.writeFloatField(2,t.float_value),void 0!==t.double_value&&e.writeDoubleField(3,t.double_value),void 0!==t.int_value&&e.writeVarintField(4,t.int_value),void 0!==t.uint_value&&e.writeVarintField(5,t.uint_value),void 0!==t.sint_value&&e.writeSVarintField(6,t.sint_value),void 0!==t.bool_value&&e.writeBooleanField(7,t.bool_value)}function u(t,e){var i=t.readFields(c,{},e)
return void 0===i.type&&(i.type="Unknown"),i}function c(t,e,i){1===t?e.id=i.readVarint():2===t?e.tags=i.readPackedVarint():3===t?e.type=i.readVarint():4===t&&(e.geometry=i.readPackedVarint())}function p(t,e){void 0!==t.id&&e.writeVarintField(1,t.id),void 0!==t.tags&&e.writePackedVarint(2,t.tags),void 0!==t.type&&e.writeVarintField(3,t.type),void 0!==t.geometry&&e.writePackedVarint(4,t.geometry)}function h(t,e){return t.readFields(f,{features:[],keys:[],values:[]},e)}function f(t,e,i){15===t?e.version=i.readVarint():1===t?e.name=i.readString():2===t?e.features.push(u(i,i.readVarint()+i.pos)):3===t?e.keys.push(i.readString()):4===t?e.values.push(a(i,i.readVarint()+i.pos)):5===t&&(e.extent=i.readVarint())}function d(t,e){void 0!==t.version&&e.writeVarintField(15,t.version),void 0!==t.name&&e.writeStringField(1,t.name)
var i
if(void 0!==t.features)for(i=0;i<t.features.length;i++)e.writeMessage(2,p,t.features[i])
if(void 0!==t.keys)for(i=0;i<t.keys.length;i++)e.writeStringField(3,t.keys[i])
if(void 0!==t.values)for(i=0;i<t.values.length;i++)e.writeMessage(4,l,t.values[i])
void 0!==t.extent&&e.writeVarintField(5,t.extent)}var m=i.tile={read:r,write:o}
m.GeomType={Unknown:0,Point:1,LineString:2,Polygon:3},m.value={read:a,write:l},m.feature={read:u,write:p},m.layer={read:h,write:d}},{}],51:[function(t,e,i){var r=arguments[3],n=arguments[4],o=arguments[5],a=JSON.stringify
e.exports=function(t,e){function i(t){y[t]=!0
for(var e in n[t][1]){var r=n[t][1][e]
y[r]||i(r)}}for(var s,l=Object.keys(o),u=0,c=l.length;c>u;u++){var p=l[u],h=o[p].exports
if(h===t||h&&h["default"]===t){s=p
break}}if(!s){s=Math.floor(Math.pow(16,8)*Math.random()).toString(16)
for(var f={},u=0,c=l.length;c>u;u++){var p=l[u]
f[p]=p}n[s]=[Function(["require","module","exports"],"("+t+")(self)"),f]}var d=Math.floor(Math.pow(16,8)*Math.random()).toString(16),m={}
m[s]=s,n[d]=[Function(["require"],"var f = require("+a(s)+");(f.default ? f.default : f)(self);"),m]
var y={}
i(d)
var _="("+r+")({"+Object.keys(y).map(function(t){return a(t)+":["+n[t][0]+","+a(n[t][1])+"]"}).join(",")+"},{},["+a(d)+"])",v=window.URL||window.webkitURL||window.mozURL||window.msURL,g=new Blob([_],{type:"text/javascript"})
if(e&&e.bare)return g
var x=v.createObjectURL(g),b=new Worker(x)
return b.objectURL=x,b}},{}],52:[function(t,e,i){e.exports.RADIUS=6378137,e.exports.FLATTENING=1/298.257223563,e.exports.POLAR_RADIUS=6356752.3142},{}],53:[function(t,e,i){e.exports={version:"0.39.1"}},{}],54:[function(t,e,i){"use strict"
function r(t,e){var i={}
for(var r in t){var n=t[r].paintVertexArray
if(0!==n.length){var o=n.serialize(e),a=n.constructor.serialize()
i[r]={array:o,type:a}}}return i}var n=t("./program_configuration"),o=t("./vertex_array_type"),a=function(t,e){this.vertexOffset=t,this.primitiveOffset=e,this.vertexLength=0,this.primitiveLength=0},s=function(t,e,i){var r=this
this.globalProperties={zoom:i}
var a=o(t.layoutAttributes)
if(this.layoutVertexArray=new a,t.dynamicLayoutAttributes){var s=o(t.dynamicLayoutAttributes)
this.dynamicLayoutVertexArray=new s}var l=t.elementArrayType
l&&(this.elementArray=new l)
var u=t.elementArrayType2
u&&(this.elementArray2=new u),this.layerData={}
for(var c=0,p=e;c<p.length;c+=1){var h=p[c],f=n.createDynamic(t,h,i)
r.layerData[h.id]={layer:h,programConfiguration:f,paintVertexArray:new f.PaintVertexArray,paintPropertyStatistics:f.createPaintPropertyStatistics()}}this.segments=[],this.segments2=[]}
s.prototype.prepareSegment=function(t){var e=this.segments[this.segments.length-1]
return(!e||e.vertexLength+t>s.MAX_VERTEX_ARRAY_LENGTH)&&(e=new a(this.layoutVertexArray.length,this.elementArray.length),this.segments.push(e)),e},s.prototype.prepareSegment2=function(t){var e=this.segments2[this.segments2.length-1]
return(!e||e.vertexLength+t>s.MAX_VERTEX_ARRAY_LENGTH)&&(e=new a(this.layoutVertexArray.length,this.elementArray2.length),this.segments2.push(e)),e},s.prototype.populatePaintArrays=function(t){var e=this
for(var i in e.layerData){var r=e.layerData[i]
0!==r.paintVertexArray.bytesPerElement&&r.programConfiguration.populatePaintArray(r.layer,r.paintVertexArray,r.paintPropertyStatistics,e.layoutVertexArray.length,t)}},s.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},s.prototype.serialize=function(t){return{layoutVertexArray:this.layoutVertexArray.serialize(t),dynamicLayoutVertexArray:this.dynamicLayoutVertexArray&&this.dynamicLayoutVertexArray.serialize(t),elementArray:this.elementArray&&this.elementArray.serialize(t),elementArray2:this.elementArray2&&this.elementArray2.serialize(t),paintVertexArrays:r(this.layerData,t),segments:this.segments,segments2:this.segments2}},s.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,e.exports=s},{"./program_configuration":68,"./vertex_array_type":70}],55:[function(t,e,i){"use strict"
var r=t("./array_group"),n=t("./buffer_group"),o=t("../util/util"),a=function(t,e){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.index=t.index,t.arrays?this.buffers=new n(e,t.layers,t.zoom,t.arrays):this.arrays=new r(e,t.layers,t.zoom)}
a.deserialize=function(t,e){var i={}
if(!e)return i
for(var r=0,n=t;r<n.length;r+=1){var a=n[r],s=a.layerIds.map(function(t){return e.getLayer(t)}).filter(Boolean)
if(0!==s.length)for(var l=s[0].createBucket(o.extend({layers:s},a)),u=0,c=s;u<c.length;u+=1){var p=c[u]
i[p.id]=l}}return i},a.prototype.populate=function(t,e){for(var i=this,r=0,n=t;r<n.length;r+=1){var o=n[r],a=o.feature,s=o.index,l=o.sourceLayerIndex
i.layers[0].filter(a)&&(i.addFeature(a),e.featureIndex.insert(a,s,l,i.index))}},a.prototype.getPaintPropertyStatistics=function(){return o.mapObject(this.arrays.layerData,function(t){return t.paintPropertyStatistics})},a.prototype.isEmpty=function(){return this.arrays.isEmpty()},a.prototype.serialize=function(t){return{zoom:this.zoom,layerIds:this.layers.map(function(t){return t.id}),arrays:this.arrays.serialize(t)}},a.prototype.destroy=function(){this.buffers&&(this.buffers.destroy(),this.buffers=null)},e.exports=a},{"../util/util":218,"./array_group":54,"./buffer_group":62}],56:[function(t,e,i){"use strict"
function r(t,e,i,r,n){t.emplaceBack(2*e+(r+1)/2,2*i+(n+1)/2)}var n=t("../bucket"),o=t("../element_array_type"),a=t("../load_geometry"),s=t("../extent"),l={layoutAttributes:[{name:"a_pos",components:2,type:"Int16"}],elementArrayType:o(),paintAttributes:[{property:"circle-color"},{property:"circle-radius"},{property:"circle-blur"},{property:"circle-opacity"},{property:"circle-stroke-color"},{property:"circle-stroke-width"},{property:"circle-stroke-opacity"}]},u=function(t){function e(e){t.call(this,e,l)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addFeature=function(t){for(var e=this.arrays,i=0,n=a(t);i<n.length;i+=1)for(var o=n[i],l=0,u=o;l<u.length;l+=1){var c=u[l],p=c.x,h=c.y
if(!(0>p||p>=s||0>h||h>=s)){var f=e.prepareSegment(4),d=f.vertexLength
r(e.layoutVertexArray,p,h,-1,-1),r(e.layoutVertexArray,p,h,1,-1),r(e.layoutVertexArray,p,h,1,1),r(e.layoutVertexArray,p,h,-1,1),e.elementArray.emplaceBack(d,d+1,d+2),e.elementArray.emplaceBack(d,d+3,d+2),f.vertexLength+=4,f.primitiveLength+=2}}e.populatePaintArrays(t.properties)},e}(n)
u.programInterface=l,e.exports=u},{"../bucket":55,"../element_array_type":63,"../extent":64,"../load_geometry":66}],57:[function(t,e,i){"use strict"
var r=t("../bucket"),n=t("../element_array_type"),o=t("../load_geometry"),a=t("earcut"),s=t("../../util/classify_rings"),l=500,u={layoutAttributes:[{name:"a_pos",components:2,type:"Int16"}],elementArrayType:n(3),elementArrayType2:n(2),paintAttributes:[{property:"fill-color"},{property:"fill-outline-color"},{property:"fill-opacity"}]},c=function(t){function e(e){t.call(this,e,u)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addFeature=function(t){for(var e=this.arrays,i=0,r=s(o(t),l);i<r.length;i+=1){for(var n=r[i],u=0,c=0,p=n;c<p.length;c+=1)u+=p[c].length
for(var h=e.prepareSegment(u),f=h.vertexLength,d=[],m=[],y=0,_=n;y<_.length;y+=1){var v=_[y]
if(0!==v.length){v!==n[0]&&m.push(d.length/2)
var g=e.prepareSegment2(v.length),x=g.vertexLength
e.layoutVertexArray.emplaceBack(v[0].x,v[0].y),e.elementArray2.emplaceBack(x+v.length-1,x),d.push(v[0].x),d.push(v[0].y)
for(var b=1;b<v.length;b++)e.layoutVertexArray.emplaceBack(v[b].x,v[b].y),e.elementArray2.emplaceBack(x+b-1,x+b),d.push(v[b].x),d.push(v[b].y)
g.vertexLength+=v.length,g.primitiveLength+=v.length}}for(var w=a(d,m),T=0;T<w.length;T+=3)e.elementArray.emplaceBack(f+w[T],f+w[T+1],f+w[T+2])
h.vertexLength+=u,h.primitiveLength+=w.length/3}e.populatePaintArrays(t.properties)},e}(r)
c.programInterface=u,e.exports=c},{"../../util/classify_rings":200,"../bucket":55,"../element_array_type":63,"../load_geometry":66,earcut:7}],58:[function(t,e,i){"use strict"
function r(t,e,i,r,n,o,a,s){t.emplaceBack(e,i,2*Math.floor(r*f)+a,n*f*2,o*f*2,Math.round(s))}function n(t,e){return t.x===e.x&&(t.x<0||t.x>l)||t.y===e.y&&(t.y<0||t.y>l)}var o=t("../bucket"),a=t("../element_array_type"),s=t("../load_geometry"),l=t("../extent"),u=t("earcut"),c=t("../../util/classify_rings"),p=500,h={layoutAttributes:[{name:"a_pos",components:2,type:"Int16"},{name:"a_normal",components:3,type:"Int16"},{name:"a_edgedistance",components:1,type:"Int16"}],elementArrayType:a(3),paintAttributes:[{property:"fill-extrusion-base"},{property:"fill-extrusion-height"},{property:"fill-extrusion-color"}]},f=Math.pow(2,13),d=function(t){function e(e){t.call(this,e,h)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addFeature=function(t){for(var e=this.arrays,i=0,o=c(s(t),p);i<o.length;i+=1){for(var a=o[i],l=0,h=0,f=a;h<f.length;h+=1)l+=f[h].length
for(var d=e.prepareSegment(5*l),m=[],y=[],_=[],v=0,g=a;v<g.length;v+=1){var x=g[v]
if(0!==x.length){x!==a[0]&&y.push(m.length/2)
for(var b=0,w=0;w<x.length;w++){var T=x[w]
if(r(e.layoutVertexArray,T.x,T.y,0,0,1,1,0),_.push(d.vertexLength++),w>=1){var z=x[w-1]
if(!n(T,z)){var E=T.sub(z)._perp()._unit()
r(e.layoutVertexArray,T.x,T.y,E.x,E.y,0,0,b),r(e.layoutVertexArray,T.x,T.y,E.x,E.y,0,1,b),b+=z.dist(T),r(e.layoutVertexArray,z.x,z.y,E.x,E.y,0,0,b),r(e.layoutVertexArray,z.x,z.y,E.x,E.y,0,1,b)
var S=d.vertexLength
e.elementArray.emplaceBack(S,S+1,S+2),e.elementArray.emplaceBack(S+1,S+2,S+3),d.vertexLength+=4,d.primitiveLength+=2}}m.push(T.x),m.push(T.y)}}}for(var L=u(m,y),M=0;M<L.length;M+=3)e.elementArray.emplaceBack(_[L[M]],_[L[M+1]],_[L[M+2]])
d.primitiveLength+=L.length/3}e.populatePaintArrays(t.properties)},e}(o)
d.programInterface=h,e.exports=d},{"../../util/classify_rings":200,"../bucket":55,"../element_array_type":63,"../extent":64,"../load_geometry":66,earcut:7}],59:[function(t,e,i){"use strict"
function r(t,e,i,r,n,o,a){t.emplaceBack(e.x<<1|r,e.y<<1|n,Math.round(u*i.x)+128,Math.round(u*i.y)+128,1+(0===o?0:0>o?-1:1)|(a*f&63)<<2,a*f>>6)}var n=t("../bucket"),o=t("../element_array_type"),a=t("../load_geometry"),s=t("../extent"),l=t("vector-tile").VectorTileFeature.types,u=63,c=Math.cos(Math.PI/180*37.5),p=15,h=15,f=.5,d=Math.pow(2,h-1)/f,m={layoutAttributes:[{name:"a_pos",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],paintAttributes:[{property:"line-color"},{property:"line-blur"},{property:"line-opacity"},{property:"line-gap-width",name:"gapwidth"},{property:"line-offset"},{property:"line-width"},{property:"line-width",name:"floorwidth",useIntegerZoom:!0}],elementArrayType:o()},y=function(t){function e(e){t.call(this,e,m)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addFeature=function(t){for(var e=this,i=this.layers[0].layout,r=i["line-join"],n=i["line-cap"],o=i["line-miter-limit"],s=i["line-round-limit"],l=0,u=a(t,h);l<u.length;l+=1){var c=u[l]
e.addLine(c,t,r,n,o,s)}},e.prototype.addLine=function(t,e,i,r,n,o){for(var a=this,u=e.properties,h="Polygon"===l[e.type],f=t.length;f>=2&&t[f-1].equals(t[f-2]);)f--
for(var d=0;f-1>d&&t[d].equals(t[d+1]);)d++
if(!((h?3:2)>f)){"bevel"===i&&(n=1.05)
var m=p*(s/(512*this.overscaling)),y=t[d],_=this.arrays,v=_.prepareSegment(10*f)
this.distance=0
var g,x,b,w=r,T=h?"butt":r,z=!0,E=void 0,S=void 0,L=void 0,M=void 0
this.e1=this.e2=this.e3=-1,h&&(g=t[f-2],M=y.sub(g)._unit()._perp())
for(var A=d;f>A;A++)if(!(S=h&&A===f-1?t[d+1]:t[A+1])||!t[A].equals(S)){M&&(L=M),g&&(E=g),g=t[A],M=S?S.sub(g)._unit()._perp():L,L=L||M
var C=L.add(M)
0===C.x&&0===C.y||C._unit()
var P=C.x*M.x+C.y*M.y,k=0!==P?1/P:1/0,I=c>P&&E&&S
if(I&&A>d){var D=g.dist(E)
if(D>2*m){var R=g.sub(g.sub(E)._mult(m/D)._round())
a.distance+=R.dist(E),a.addCurrentVertex(R,a.distance,L.mult(1),0,0,!1,v),E=R}}var O=E&&S,B=O?i:S?w:T
if(O&&"round"===B&&(o>k?B="miter":2>=k&&(B="fakeround")),"miter"===B&&k>n&&(B="bevel"),"bevel"===B&&(k>2&&(B="flipbevel"),n>k&&(B="miter")),E&&(a.distance+=g.dist(E)),"miter"===B)C._mult(k),a.addCurrentVertex(g,a.distance,C,0,0,!1,v)
else if("flipbevel"===B){if(k>100)C=M.clone().mult(-1)
else{var F=L.x*M.y-L.y*M.x>0?-1:1,j=k*L.add(M).mag()/L.sub(M).mag()
C._perp()._mult(j*F)}a.addCurrentVertex(g,a.distance,C,0,0,!1,v),a.addCurrentVertex(g,a.distance,C.mult(-1),0,0,!1,v)}else if("bevel"===B||"fakeround"===B){var V=L.x*M.y-L.y*M.x>0,U=-Math.sqrt(k*k-1)
if(V?(b=0,x=U):(x=0,b=U),z||a.addCurrentVertex(g,a.distance,L,x,b,!1,v),"fakeround"===B){for(var N=Math.floor(8*(.5-(P-.5))),Z=void 0,q=0;N>q;q++)Z=M.mult((q+1)/(N+1))._add(L)._unit(),a.addPieSliceVertex(g,a.distance,Z,V,v)
a.addPieSliceVertex(g,a.distance,C,V,v)
for(var G=N-1;G>=0;G--)Z=L.mult((G+1)/(N+1))._add(M)._unit(),a.addPieSliceVertex(g,a.distance,Z,V,v)}S&&a.addCurrentVertex(g,a.distance,M,-x,-b,!1,v)}else"butt"===B?(z||a.addCurrentVertex(g,a.distance,L,0,0,!1,v),S&&a.addCurrentVertex(g,a.distance,M,0,0,!1,v)):"square"===B?(z||(a.addCurrentVertex(g,a.distance,L,1,1,!1,v),a.e1=a.e2=-1),S&&a.addCurrentVertex(g,a.distance,M,-1,-1,!1,v)):"round"===B&&(z||(a.addCurrentVertex(g,a.distance,L,0,0,!1,v),a.addCurrentVertex(g,a.distance,L,1,1,!0,v),a.e1=a.e2=-1),S&&(a.addCurrentVertex(g,a.distance,M,-1,-1,!0,v),a.addCurrentVertex(g,a.distance,M,0,0,!1,v)))
if(I&&f-1>A){var X=g.dist(S)
if(X>2*m){var W=g.add(S.sub(g)._mult(m/X)._round())
a.distance+=W.dist(g),a.addCurrentVertex(W,a.distance,M.mult(1),0,0,!1,v),g=W}}z=!1}_.populatePaintArrays(u)}},e.prototype.addCurrentVertex=function(t,e,i,n,o,a,s){var l,u=a?1:0,c=this.arrays,p=c.layoutVertexArray,h=c.elementArray
l=i.clone(),n&&l._sub(i.perp()._mult(n)),r(p,t,l,u,0,n,e),this.e3=s.vertexLength++,this.e1>=0&&this.e2>=0&&(h.emplaceBack(this.e1,this.e2,this.e3),s.primitiveLength++),this.e1=this.e2,this.e2=this.e3,l=i.mult(-1),o&&l._sub(i.perp()._mult(o)),r(p,t,l,u,1,-o,e),this.e3=s.vertexLength++,this.e1>=0&&this.e2>=0&&(h.emplaceBack(this.e1,this.e2,this.e3),s.primitiveLength++),this.e1=this.e2,this.e2=this.e3,e>d/2&&(this.distance=0,this.addCurrentVertex(t,this.distance,i,n,o,a,s))},e.prototype.addPieSliceVertex=function(t,e,i,n,o){var a=n?1:0
i=i.mult(n?-1:1)
var s=this.arrays,l=s.layoutVertexArray,u=s.elementArray
r(l,t,i,0,a,0,e),this.e3=o.vertexLength++,this.e1>=0&&this.e2>=0&&(u.emplaceBack(this.e1,this.e2,this.e3),o.primitiveLength++),n?this.e2=this.e3:this.e1=this.e3},e}(n)
y.programInterface=m,e.exports=y},{"../bucket":55,"../element_array_type":63,"../extent":64,"../load_geometry":66,"vector-tile":44}],60:[function(t,e,i){"use strict"
function r(t,e,i,r,n,o,a,s){t.emplaceBack(e,i,Math.round(64*r),Math.round(64*n),o,a,s?s[0]:void 0,s?s[1]:void 0)}function n(t,e,i,r){var n=2*Math.PI,o=f((i+n)%n/n*255,10*r)
t.emplaceBack(e.x,e.y,o),t.emplaceBack(e.x,e.y,o),t.emplaceBack(e.x,e.y,o),t.emplaceBack(e.x,e.y,o)}function o(t,e,i,r,n,o){return t.emplaceBack(e.x,e.y,i.x,i.y,Math.round(r.x),Math.round(r.y),10*n,10*o)}function a(t,e,i){var r={}
if(r.isFeatureConstant=e.isLayoutValueFeatureConstant(i),r.isZoomConstant=e.isLayoutValueZoomConstant(i),r.isFeatureConstant&&(r.layoutSize=e.getLayoutValue(i,{zoom:t+1})),!r.isZoomConstant){for(var n=e.getLayoutValueStopZoomLevels(i),o=0;o<n.length&&n[o]<=t;)o++
o=Math.max(0,o-1)
for(var a=o;a<n.length&&n[a]<t+1;)a++
a=Math.min(n.length-1,a),r.coveringZoomRange=[n[o],n[a]],e.isLayoutValueFeatureConstant(i)&&(r.coveringStopValues=[e.getLayoutValue(i,{zoom:n[o]}),e.getLayoutValue(i,{zoom:n[a]})]),r.functionBase=e.getLayoutProperty(i).base,void 0===r.functionBase&&(r.functionBase=1),r.functionType=e.getLayoutProperty(i).type||"exponential"}return r}function s(t,e,i,r,n){return t.isLayoutValueZoomConstant(r)&&!t.isLayoutValueFeatureConstant(r)?[10*t.getLayoutValue(r,{},n)]:t.isLayoutValueZoomConstant(r)||t.isLayoutValueFeatureConstant(r)?null:[10*t.getLayoutValue(r,{zoom:i[0]},n),10*t.getLayoutValue(r,{zoom:i[1]},n)]}var l=t("point-geometry"),u=t("../array_group"),c=t("../buffer_group"),p=t("../element_array_type"),h=t("../extent"),f=t("../../shaders/encode_attribute").packUint8ToFloat,d=t("../../symbol/anchor"),m=t("../../symbol/get_anchors"),y=t("../../util/token"),_=t("../../symbol/quads"),v=t("../../symbol/shaping"),g=t("../../symbol/transform_text"),x=t("../../symbol/mergelines"),b=t("../../symbol/clip_line"),w=t("../../util/util"),T=t("../../util/script_detection"),z=t("../load_geometry"),E=t("../../symbol/collision_feature"),S=t("../../util/find_pole_of_inaccessibility"),L=t("../../util/classify_rings"),M=t("vector-tile").VectorTileFeature.types,A=t("../../util/struct_array"),C=t("../../util/verticalize_punctuation"),P=v.shapeText,k=v.shapeIcon,I=v.WritingMode,D=_.getGlyphQuads,R=_.getIconQuads,O=A({members:[{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Float32",name:"placementZoom"},{type:"Uint8",name:"vertical"}]}),B=A({members:[{type:"Float32",name:"offsetX"}]}),F=A({members:[{type:"Int16",name:"x"},{type:"Int16",name:"y"}]}),j=p(),V=[{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"}],U=[{name:"a_projected_pos",components:3,type:"Float32"}],N={glyph:{layoutAttributes:V,dynamicLayoutAttributes:U,elementArrayType:j,paintAttributes:[{property:"text-color",name:"fill_color"},{property:"text-halo-color",name:"halo_color"},{property:"text-halo-width",name:"halo_width"},{property:"text-halo-blur",name:"halo_blur"},{property:"text-opacity",name:"opacity"}]},icon:{layoutAttributes:V,dynamicLayoutAttributes:U,elementArrayType:j,paintAttributes:[{property:"icon-color",name:"fill_color"},{property:"icon-halo-color",name:"halo_color"},{property:"icon-halo-width",name:"halo_width"},{property:"icon-halo-blur",name:"halo_blur"},{property:"icon-opacity",name:"opacity"}]},collisionBox:{layoutAttributes:[{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"},{name:"a_data",components:2,type:"Uint8"}],elementArrayType:p(2)}},Z=function(t){var e=this
this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.index=t.index,this.sdfIcons=t.sdfIcons,this.iconsNeedLinear=t.iconsNeedLinear,this.fontstack=t.fontstack
var i=this.layers[0]
if(this.symbolInterfaces=N,t.arrays){this.buffers={}
for(var r in t.arrays)t.arrays[r]&&(e.buffers[r]=new c(e.symbolInterfaces[r],t.layers,t.zoom,t.arrays[r]))
this.textSizeData=t.textSizeData,this.iconSizeData=t.iconSizeData,this.placedGlyphArray=new O(t.placedGlyphArray),this.placedIconArray=new O(t.placedIconArray),this.glyphOffsetArray=new B(t.glyphOffsetArray),this.lineVertexArray=new F(t.lineVertexArray)}else this.textSizeData=a(this.zoom,i,"text-size"),this.iconSizeData=a(this.zoom,i,"icon-size")}
Z.prototype.populate=function(t,e){var i=this,r=this.layers[0],n=r.layout,o=n["text-font"],a=(!r.isLayoutValueFeatureConstant("text-field")||n["text-field"])&&o,s=!r.isLayoutValueFeatureConstant("icon-image")||n["icon-image"]
if(this.features=[],a||s){for(var l=e.iconDependencies,u=e.glyphDependencies,c=u[o]=u[o]||{},p={zoom:this.zoom},h=0,f=t;h<f.length;h+=1){var d=f[h],m=d.feature,_=d.index,v=d.sourceLayerIndex
if(r.filter(m)){var b=void 0
a&&(b=r.getLayoutValue("text-field",p,m.properties),r.isLayoutValueFeatureConstant("text-field")&&(b=y(m.properties,b)),b=g(b,r,p,m.properties))
var w=void 0
if(s&&(w=r.getLayoutValue("icon-image",p,m.properties),r.isLayoutValueFeatureConstant("icon-image")&&(w=y(m.properties,w))),(b||w)&&(i.features.push({text:b,icon:w,index:_,sourceLayerIndex:v,geometry:z(m),properties:m.properties,type:M[m.type]}),w&&(l[w]=!0),b))for(var E="map"===n["text-rotation-alignment"]&&"line"===n["symbol-placement"],S=T.allowsVerticalWritingMode(b),L=0;L<b.length;L++)if(c[b.charCodeAt(L)]=!0,E&&S){var A=C.lookup[b.charAt(L)]
A&&(c[A.charCodeAt(0)]=!0)}}}"line"===n["symbol-placement"]&&(this.features=x(this.features))}},Z.prototype.isEmpty=function(){return this.arrays.icon.isEmpty()&&this.arrays.glyph.isEmpty()&&this.arrays.collisionBox.isEmpty()},Z.prototype.getPaintPropertyStatistics=function(){for(var t=this,e={},i=0,r=t.layers;i<r.length;i+=1){var n=r[i]
e[n.id]=w.extend({},t.arrays.icon.layerData[n.id].paintPropertyStatistics,t.arrays.glyph.layerData[n.id].paintPropertyStatistics)}return e},Z.prototype.serialize=function(t){return{zoom:this.zoom,layerIds:this.layers.map(function(t){return t.id}),sdfIcons:this.sdfIcons,iconsNeedLinear:this.iconsNeedLinear,textSizeData:this.textSizeData,iconSizeData:this.iconSizeData,fontstack:this.fontstack,placedGlyphArray:this.placedGlyphArray.serialize(t),placedIconArray:this.placedIconArray.serialize(t),glyphOffsetArray:this.glyphOffsetArray.serialize(t),lineVertexArray:this.lineVertexArray.serialize(t),arrays:w.mapObject(this.arrays,function(e){return e.isEmpty()?null:e.serialize(t)})}},Z.prototype.destroy=function(){this.buffers&&(this.buffers.icon&&this.buffers.icon.destroy(),this.buffers.glyph&&this.buffers.glyph.destroy(),this.buffers.collisionBox&&this.buffers.collisionBox.destroy(),this.buffers=null)},Z.prototype.createArrays=function(){var t=this
this.arrays=w.mapObject(this.symbolInterfaces,function(e){return new u(e,t.layers,t.zoom)})},Z.prototype.prepare=function(t,e){var i=this
this.symbolInstances=[]
var r=512*this.overscaling
this.tilePixelRatio=h/r,this.compareText={},this.iconsNeedLinear=!1
for(var n=this.layers[0].layout,o=24*n["text-line-height"],a="line"!==n["symbol-placement"]?24*n["text-max-width"]:0,s=24*n["text-letter-spacing"],l=this.fontstack=n["text-font"].join(","),u="map"===n["text-rotation-alignment"]&&"line"===n["symbol-placement"],c=0,p=i.features;c<p.length;c+=1){var f=p[c],d=void 0
if(f.text){var m=T.allowsVerticalWritingMode(f.text),y=i.layers[0].getLayoutValue("text-offset",{zoom:i.zoom},f.properties).map(function(t){return 24*t}),_=T.allowsLetterSpacing(f.text)?s:0,v=i.layers[0].getLayoutValue("text-anchor",{zoom:i.zoom},f.properties),g=i.layers[0].getLayoutValue("text-justify",{zoom:i.zoom},f.properties)
d={},d[I.horizontal]=P(f.text,t[l],a,o,v,g,_,y,24,I.horizontal),d[I.vertical]=m&&u&&P(f.text,t[l],a,o,v,g,_,y,24,I.vertical)}else d={}
var x=void 0
if(f.icon){var b=e[f.icon]
b&&(x=k(b,i.layers[0].getLayoutValue("icon-offset",{zoom:i.zoom},f.properties)),void 0===i.sdfIcons?i.sdfIcons=b.sdf:i.sdfIcons!==b.sdf&&w.warnOnce("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),b.isNativePixelRatio?0===n["icon-rotate"]&&i.layers[0].isLayoutValueFeatureConstant("icon-rotate")||(i.iconsNeedLinear=!0):i.iconsNeedLinear=!0)}(d[I.horizontal]||x)&&i.addFeature(f,d,x)}},Z.prototype.addFeature=function(t,e,i){var r=this,n=this.layers[0].getLayoutValue("text-size",{zoom:this.zoom+1},t.properties),o=this.layers[0].getLayoutValue("icon-size",{zoom:this.zoom+1},t.properties),a=this.layers[0].getLayoutValue("text-offset",{zoom:this.zoom},t.properties),s=this.layers[0].getLayoutValue("icon-offset",{zoom:this.zoom},t.properties),l=this.layers[0].getLayoutValue("text-size",{zoom:18},t.properties)
void 0===l&&(l=n)
var u=this.layers[0].layout,c=n/24,p=this.tilePixelRatio*c,f=this.tilePixelRatio*l/24,y=this.tilePixelRatio*o,_=this.tilePixelRatio*u["symbol-spacing"],v=u["symbol-avoid-edges"],g=u["text-padding"]*this.tilePixelRatio,x=u["icon-padding"]*this.tilePixelRatio,w=u["text-max-angle"]/180*Math.PI,T="map"===u["text-rotation-alignment"]&&"line"===u["symbol-placement"],z="map"===u["icon-rotation-alignment"]&&"line"===u["symbol-placement"],E=u["text-allow-overlap"]||u["icon-allow-overlap"]||u["text-ignore-placement"]||u["icon-ignore-placement"],M=u["symbol-placement"],A=_/2,C=function(n,o){var l=!(o.x<0||o.x>h||o.y<0||o.y>h)
if(!v||l){var u=l||E
r.addSymbolInstance(o,n,e,i,r.layers[0],u,r.collisionBoxArray,t.index,t.sourceLayerIndex,r.index,p,g,T,a,y,x,z,s,{zoom:r.zoom},t.properties)}}
if("line"===M)for(var P=0,k=b(t.geometry,0,0,h,h);P<k.length;P+=1)for(var D=k[P],R=m(D,_,w,e[I.vertical]||e[I.horizontal],i,24,f,r.overscaling,h),O=0,B=R;O<B.length;O+=1){var F=B[O],j=e[I.horizontal]
j&&r.anchorIsTooClose(j.text,A,F)||C(D,F)}else if("Polygon"===t.type)for(var V=0,U=L(t.geometry,0);V<U.length;V+=1){var N=U[V],Z=S(N,16)
C(N[0],new d(Z.x,Z.y,0))}else if("LineString"===t.type)for(var q=0,G=t.geometry;q<G.length;q+=1){var X=G[q]
C(X,new d(X[0].x,X[0].y,0))}else if("Point"===t.type)for(var W=0,H=t.geometry;W<H.length;W+=1)for(var K=H[W],J=0,Y=K;J<Y.length;J+=1){var $=Y[J]
C([$],new d($.x,$.y,0))}},Z.prototype.anchorIsTooClose=function(t,e,i){var r=this.compareText
if(t in r){for(var n=r[t],o=n.length-1;o>=0;o--)if(i.dist(n[o])<e)return!0}else r[t]=[]
return r[t].push(i),!1},Z.prototype.place=function(t,e){var i=this
this.createArrays(),this.placedGlyphArray=new O,this.placedIconArray=new O,this.glyphOffsetArray=new B,this.lineVertexArray=new F
var r=this.layers[0],n=r.layout,o=t.maxScale,a="map"===n["text-rotation-alignment"]&&"line"===n["symbol-placement"],l="map"===n["icon-rotation-alignment"]&&"line"===n["symbol-placement"]
if(n["text-allow-overlap"]||n["icon-allow-overlap"]||n["text-ignore-placement"]||n["icon-ignore-placement"]){var u=t.angle,c=Math.sin(u),p=Math.cos(u)
this.symbolInstances.sort(function(t,e){return(c*t.anchor.x+p*t.anchor.y|0)-(c*e.anchor.x+p*e.anchor.y|0)||e.featureIndex-t.featureIndex})}for(var h=0,f=i.symbolInstances;h<f.length;h+=1){var d=f[h],m={boxStartIndex:d.textBoxStartIndex,boxEndIndex:d.textBoxEndIndex},y={boxStartIndex:d.iconBoxStartIndex,boxEndIndex:d.iconBoxEndIndex},_=!(d.textBoxStartIndex===d.textBoxEndIndex),v=!(d.iconBoxStartIndex===d.iconBoxEndIndex),g=n["text-optional"]||!_,x=n["icon-optional"]||!v,b=_?t.placeCollisionFeature(m,n["text-allow-overlap"],n["symbol-avoid-edges"]):t.minScale,w=v?t.placeCollisionFeature(y,n["icon-allow-overlap"],n["symbol-avoid-edges"]):t.minScale
if(g||x?!x&&b?b=Math.max(w,b):!g&&w&&(w=Math.max(w,b)):w=b=Math.max(w,b),_||v){for(var T=d.line,z=i.lineVertexArray.length,E=0;E<T.length;E++)i.lineVertexArray.emplaceBack(T[E].x,T[E].y)
var S=i.lineVertexArray.length-z
if(_&&(t.insertCollisionFeature(m,b,n["text-ignore-placement"]),o>=b)){var L=s(r,i.zoom,i.textSizeData.coveringZoomRange,"text-size",d.featureProperties)
i.addSymbols(i.arrays.glyph,d.glyphQuads,b,L,n["text-keep-upright"],d.textOffset,a,t.angle,d.featureProperties,d.writingModes,d.anchor,z,S,i.placedGlyphArray)}if(v&&(t.insertCollisionFeature(y,w,n["icon-ignore-placement"]),o>=w)){var M=s(r,i.zoom,i.iconSizeData.coveringZoomRange,"icon-size",d.featureProperties)
i.addSymbols(i.arrays.icon,d.iconQuads,w,M,n["icon-keep-upright"],d.iconOffset,l,t.angle,d.featureProperties,null,d.anchor,z,S,i.placedIconArray)}}}e&&this.addToDebugBuffers(t)},Z.prototype.addSymbols=function(t,e,i,o,a,s,l,u,c,p,h,f,d,m){for(var y=this,_=t.elementArray,v=t.layoutVertexArray,g=t.dynamicLayoutVertexArray,x=this.zoom,b=Math.max(Math.log(i)/Math.LN2+x,0),w=this.glyphOffsetArray.length,T=(h.angle+u+2*Math.PI)%(2*Math.PI),z=T>1*Math.PI/4&&T<=3*Math.PI/4||T>5*Math.PI/4&&T<=7*Math.PI/4,E=!!(p&I.vertical)&&z,S=0,L=e;S<L.length;S+=1){var M=L[S]
if(!l||!a||M.writingMode===I.vertical===E){var A=M.tl,C=M.tr,P=M.bl,k=M.br,D=M.tex,R=t.prepareSegment(4),O=R.vertexLength,B=M.glyphOffset[1]
r(v,h.x,h.y,A.x,B+A.y,D.x,D.y,o),r(v,h.x,h.y,C.x,B+C.y,D.x+D.w,D.y,o),r(v,h.x,h.y,P.x,B+P.y,D.x,D.y+D.h,o),r(v,h.x,h.y,k.x,B+k.y,D.x+D.w,D.y+D.h,o),n(g,h,0,b),_.emplaceBack(O,O+1,O+2),_.emplaceBack(O+1,O+2,O+3),R.vertexLength+=4,R.primitiveLength+=2,y.glyphOffsetArray.emplaceBack(M.glyphOffset[0])}}m.emplaceBack(h.x,h.y,w,this.glyphOffsetArray.length-w,f,d,h.segment,o?o[0]:0,o?o[1]:0,s[0],s[1],b,E),t.populatePaintArrays(c)},Z.prototype.addToDebugBuffers=function(t){for(var e=this,i=this.arrays.collisionBox,r=i.layoutVertexArray,n=i.elementArray,a=-t.angle,s=t.yStretch,u=0,c=e.symbolInstances;u<c.length;u+=1){var p=c[u]
p.textCollisionFeature={boxStartIndex:p.textBoxStartIndex,boxEndIndex:p.textBoxEndIndex},p.iconCollisionFeature={boxStartIndex:p.iconBoxStartIndex,boxEndIndex:p.iconBoxEndIndex}
for(var h=0;2>h;h++){var f=p[0===h?"textCollisionFeature":"iconCollisionFeature"]
if(f)for(var d=f.boxStartIndex;d<f.boxEndIndex;d++){var m=e.collisionBoxArray.get(d)
if(!(1===t.perspectiveRatio&&m.maxScale<1)){var y=m.anchorPoint,_=new l(m.x1,m.y1*s)._rotate(a),v=new l(m.x2,m.y1*s)._rotate(a),g=new l(m.x1,m.y2*s)._rotate(a),x=new l(m.x2,m.y2*s)._rotate(a),b=Math.max(0,Math.min(25,e.zoom+Math.log(m.maxScale)/Math.LN2)),w=Math.max(0,Math.min(25,e.zoom+Math.log(m.placementScale)/Math.LN2)),T=i.prepareSegment(4),z=T.vertexLength
o(r,y,p.anchor,_,b,w),o(r,y,p.anchor,v,b,w),o(r,y,p.anchor,x,b,w),o(r,y,p.anchor,g,b,w),n.emplaceBack(z,z+1),n.emplaceBack(z+1,z+2),n.emplaceBack(z+2,z+3),n.emplaceBack(z+3,z),T.vertexLength+=4,T.primitiveLength+=4}}}}},Z.prototype.addSymbolInstance=function(t,e,i,r,n,o,a,s,l,u,c,p,h,f,d,m,y,_,v,g){var x,b,T=[],z=[]
for(var S in i){var L=parseInt(S,10)
i[L]&&(z=z.concat(o?D(t,i[L],n,h,v,g):[]),x=new E(a,e,t,s,l,u,i[L],c,p,h,!1))}var M=x?x.boxStartIndex:this.collisionBoxArray.length,A=x?x.boxEndIndex:this.collisionBoxArray.length
r&&(T=o?R(t,r,n,y,i[I.horizontal],v,g):[],b=new E(a,e,t,s,l,u,r,d,m,y,!0))
var C=b?b.boxStartIndex:this.collisionBoxArray.length,P=b?b.boxEndIndex:this.collisionBoxArray.length
A>Z.MAX_INSTANCES&&w.warnOnce("Too many symbols being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),P>Z.MAX_INSTANCES&&w.warnOnce("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907")
var k=(i[I.vertical]?I.vertical:0)|(i[I.horizontal]?I.horizontal:0)
this.symbolInstances.push({textBoxStartIndex:M,textBoxEndIndex:A,iconBoxStartIndex:C,iconBoxEndIndex:P,glyphQuads:z,iconQuads:T,textOffset:f,iconOffset:_,anchor:t,line:e,featureIndex:s,featureProperties:g,writingModes:k})},Z.programInterfaces=N,Z.MAX_INSTANCES=65535,Z.addDynamicAttributes=n,e.exports=Z},{"../../shaders/encode_attribute":90,"../../symbol/anchor":160,"../../symbol/clip_line":162,"../../symbol/collision_feature":164,"../../symbol/get_anchors":166,"../../symbol/mergelines":169,"../../symbol/quads":171,"../../symbol/shaping":172,"../../symbol/transform_text":175,"../../util/classify_rings":200,"../../util/find_pole_of_inaccessibility":206,"../../util/script_detection":213,"../../util/struct_array":215,"../../util/token":217,"../../util/util":218,"../../util/verticalize_punctuation":220,"../array_group":54,"../buffer_group":62,"../element_array_type":63,"../extent":64,"../load_geometry":66,"point-geometry":36,"vector-tile":44}],61:[function(t,e,i){"use strict"
var r={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"},n=function(t,e,i,r){this.arrayBuffer=t.arrayBuffer,this.length=t.length,this.attributes=e.members,this.itemSize=e.bytesPerElement,this.type=i,this.arrayType=e,this.dynamicDraw=r}
n.fromStructArray=function(t,e){return new n(t.serialize(),t.constructor.serialize(),e)},n.prototype.bind=function(t){var e=t[this.type]
this.buffer?(t.bindBuffer(e,this.buffer),this.dynamicDraw&&this.arrayBuffer&&(t.bufferSubData(e,0,this.arrayBuffer),this.arrayBuffer=null)):(this.gl=t,this.buffer=t.createBuffer(),t.bindBuffer(e,this.buffer),t.bufferData(e,this.arrayBuffer,this.dynamicDraw?t.DYNAMIC_DRAW:t.STATIC_DRAW),this.arrayBuffer=null)},n.prototype.updateData=function(t){this.arrayBuffer=t.arrayBuffer},n.prototype.enableAttributes=function(t,e){for(var i=this,r=0;r<this.attributes.length;r++){var n=i.attributes[r],o=e[n.name]
void 0!==o&&t.enableVertexAttribArray(o)}},n.prototype.setVertexAttribPointers=function(t,e,i){for(var n=this,o=0;o<this.attributes.length;o++){var a=n.attributes[o],s=e[a.name]
void 0!==s&&t.vertexAttribPointer(s,a.components,t[r[a.type]],!1,n.arrayType.bytesPerElement,a.offset+(n.arrayType.bytesPerElement*i||0))}},n.prototype.destroy=function(){this.buffer&&this.gl.deleteBuffer(this.buffer)},n.BufferType={VERTEX:"ARRAY_BUFFER",ELEMENT:"ELEMENT_ARRAY_BUFFER"},e.exports=n},{}],62:[function(t,e,i){"use strict"
var r=t("../util/util"),n=t("./buffer"),o=t("./program_configuration"),a=t("./vertex_array_type"),s=t("../render/vertex_array_object"),l=function(t,e,i,l){var u=this,c=a(t.layoutAttributes)
if(this.layoutVertexBuffer=new n(l.layoutVertexArray,c.serialize(),n.BufferType.VERTEX),l.dynamicLayoutVertexArray&&t.dynamicLayoutAttributes){var p=a(t.dynamicLayoutAttributes)
this.dynamicLayoutVertexArray=new p(l.dynamicLayoutVertexArray),this.dynamicLayoutVertexBuffer=new n(l.dynamicLayoutVertexArray,p.serialize(),n.BufferType.VERTEX,!0)}l.elementArray&&t.elementArrayType&&(this.elementBuffer=new n(l.elementArray,t.elementArrayType.serialize(),n.BufferType.ELEMENT)),l.elementArray2&&t.elementArrayType2&&(this.elementBuffer2=new n(l.elementArray2,t.elementArrayType2.serialize(),n.BufferType.ELEMENT)),this.layerData={}
for(var h=0,f=e;h<f.length;h+=1){var d=f[h],m=l.paintVertexArrays&&l.paintVertexArrays[d.id],y=o.createDynamic(t,d,i),_=m?new n(m.array,m.type,n.BufferType.VERTEX):null
u.layerData[d.id]={programConfiguration:y,paintVertexBuffer:_}}this.segments=l.segments,this.segments2=l.segments2
for(var v=0,g=[u.segments,u.segments2];v<g.length;v+=1)for(var x=g[v],b=0,w=x||[];b<w.length;b+=1){var T=w[b]
T.vaos=r.mapObject(u.layerData,function(){return new s})}}
l.prototype.destroy=function(){var t=this
this.layoutVertexBuffer.destroy(),this.dynamicLayoutVertexBuffer&&this.dynamicLayoutVertexBuffer.destroy(),this.elementBuffer&&this.elementBuffer.destroy(),this.elementBuffer2&&this.elementBuffer2.destroy()
for(var e in t.layerData){var i=t.layerData[e].paintVertexBuffer
i&&i.destroy()}for(var r=0,n=[t.segments,t.segments2];r<n.length;r+=1)for(var o=n[r],a=0,s=o||[];a<s.length;a+=1){var l=s[a]
for(var u in l.vaos)l.vaos[u].destroy()}},e.exports=l},{"../render/vertex_array_object":89,"../util/util":218,"./buffer":61,"./program_configuration":68,"./vertex_array_type":70}],63:[function(t,e,i){"use strict"
function r(t){return n({members:[{type:"Uint16",name:"vertices",components:t||3}]})}var n=t("../util/struct_array")
e.exports=r},{"../util/struct_array":215}],64:[function(t,e,i){"use strict"
e.exports=8192},{}],65:[function(t,e,i){"use strict"
function r(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function n(t,e){return e-t}function o(t,e){return e>0?e+2*t:t}function a(t,e,i,r,n){if(!e[0]&&!e[1])return t
e=l.convert(e),"viewport"===i&&e._rotate(-r)
for(var o=[],a=0;a<t.length;a++){for(var s=t[a],u=[],c=0;c<s.length;c++)u.push(s[c].sub(e._mult(n)))
o.push(u)}return o}function s(t,e){for(var i=[],r=new l(0,0),n=0;n<t.length;n++){for(var o=t[n],a=[],s=0;s<o.length;s++){var u=o[s-1],c=o[s],p=o[s+1],h=0===s?r:c.sub(u)._unit()._perp(),f=s===o.length-1?r:p.sub(c)._unit()._perp(),d=h._add(f)._unit(),m=d.x*f.x+d.y*f.y
d._mult(1/m),a.push(d._mult(e)._add(c))}i.push(a)}return i}var l=t("point-geometry"),u=t("./load_geometry"),c=t("./extent"),p=t("../style-spec/feature_filter"),h=t("../util/struct_array"),f=t("grid-index"),d=t("../util/dictionary_coder"),m=t("vector-tile"),y=t("pbf"),_=t("../util/vectortile_to_geojson"),v=t("../util/util").arraysIntersect,g=t("../util/intersection_tests"),x=g.multiPolygonIntersectsBufferedMultiPoint,b=g.multiPolygonIntersectsMultiPolygon,w=g.multiPolygonIntersectsBufferedMultiLine,T=h({members:[{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}]}),z=function(t,e,i,r){this.coord=t,this.overscaling=e,this.x=t.x,this.y=t.y,this.z=t.z-Math.log(e)/Math.LN2,this.grid=i||new f(c,16,0),this.featureIndexArray=r||new T}
z.deserialize=function(t,e,i){var r=new z(t.coord,t.overscaling,new f(t.grid),new T(t.featureIndexArray))
return r.rawTileData=e,r.bucketLayerIDs=t.bucketLayerIDs,r.paintPropertyStatistics=t.paintPropertyStatistics,r.setCollisionTile(i),r},z.prototype.insert=function(t,e,i,r){var n=this,o=this.featureIndexArray.length
this.featureIndexArray.emplaceBack(e,i,r)
for(var a=u(t),s=0;s<a.length;s++){for(var l=a[s],c=[1/0,1/0,-1/0,-1/0],p=0;p<l.length;p++){var h=l[p]
c[0]=Math.min(c[0],h.x),c[1]=Math.min(c[1],h.y),c[2]=Math.max(c[2],h.x),c[3]=Math.max(c[3],h.y)}n.grid.insert(o,c[0],c[1],c[2],c[3])}},z.prototype.setCollisionTile=function(t){this.collisionTile=t},z.prototype.serialize=function(t){var e=this.grid.toArrayBuffer()
return t&&t.push(e),{coord:this.coord,overscaling:this.overscaling,grid:e,featureIndexArray:this.featureIndexArray.serialize(t),bucketLayerIDs:this.bucketLayerIDs,paintPropertyStatistics:this.paintPropertyStatistics}},z.prototype.query=function(t,e){var i=this
this.vtLayers||(this.vtLayers=new m.VectorTile(new y(this.rawTileData)).layers,this.sourceLayerCoder=new d(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"]))
var a={},s=t.params||{},u=c/t.tileSize/t.scale,h=p(s.filter),f=0
for(var _ in e)if(i.hasLayer(_)){var v=e[_],g=0
if("line"===v.type){var x=o(i.getPaintValue("line-width",v),i.getPaintValue("line-gap-width",v)),b=i.getPaintValue("line-offset",v),w=i.getPaintValue("line-translate",v)
g=x/2+Math.abs(b)+r(w)}else"fill"===v.type?g=r(i.getPaintValue("fill-translate",v)):"fill-extrusion"===v.type?g=r(i.getPaintValue("fill-extrusion-translate",v)):"circle"===v.type&&(g=i.getPaintValue("circle-radius",v)+r(i.getPaintValue("circle-translate",v)))
f=Math.max(f,g*u)}for(var T=t.queryGeometry.map(function(t){return t.map(function(t){return new l(t.x,t.y)})}),z=1/0,E=1/0,S=-1/0,L=-1/0,M=0;M<T.length;M++)for(var A=T[M],C=0;C<A.length;C++){var P=A[C]
z=Math.min(z,P.x),E=Math.min(E,P.y),S=Math.max(S,P.x),L=Math.max(L,P.y)}var k=this.grid.query(z-f,E-f,S+f,L+f)
k.sort(n),this.filterMatching(a,k,this.featureIndexArray,T,h,s.layers,e,t.bearing,u)
var I=this.collisionTile.queryRenderedSymbols(T,t.scale)
return I.sort(),this.filterMatching(a,I,this.collisionTile.collisionBoxArray,T,h,s.layers,e,t.bearing,u),a},z.prototype.filterMatching=function(t,e,i,r,n,l,c,p,h){for(var f,d=this,m=0;m<e.length;m++){var y=e[m]
if(y!==f){f=y
var g=i.get(y),T=d.bucketLayerIDs[g.bucketIndex]
if(!l||v(l,T)){var z=d.sourceLayerCoder.decode(g.sourceLayerIndex),E=d.vtLayers[z],S=E.feature(g.featureIndex)
if(n(S))for(var L=null,M=0;M<T.length;M++){var A=T[M]
if(!(l&&l.indexOf(A)<0)){var C=c[A]
if(C){var P=void 0
if("symbol"!==C.type)if(L||(L=u(S)),"line"===C.type){P=a(r,d.getPaintValue("line-translate",C,S),d.getPaintValue("line-translate-anchor",C,S),p,h)
var k=h/2*o(d.getPaintValue("line-width",C,S),d.getPaintValue("line-gap-width",C,S)),I=d.getPaintValue("line-offset",C,S)
if(I&&(L=s(L,I*h)),!w(P,L,k))continue}else if("fill"===C.type||"fill-extrusion"===C.type){var D=C.type
if(P=a(r,d.getPaintValue(D+"-translate",C,S),d.getPaintValue(D+"-translate-anchor",C,S),p,h),!b(P,L))continue}else if("circle"===C.type){P=a(r,d.getPaintValue("circle-translate",C,S),d.getPaintValue("circle-translate-anchor",C,S),p,h)
var R=d.getPaintValue("circle-radius",C,S)*h
if(!x(P,L,R))continue}var O=new _(S,d.z,d.x,d.y)
O.layer=C.serialize()
var B=t[A]
void 0===B&&(B=t[A]=[]),B.push({featureIndex:y,feature:O})}}}}}}},z.prototype.hasLayer=function(t){for(var e=this,i=0,r=e.bucketLayerIDs;i<r.length;i+=1)for(var n=r[i],o=0,a=n;o<a.length;o+=1){var s=a[o]
if(t===s)return!0}return!1},z.prototype.getPaintValue=function(t,e,i){if(e.isPaintValueFeatureConstant(t)||i){var r=i?i.properties:{}
return e.getPaintValue(t,{zoom:this.z},r)}return this.paintPropertyStatistics[e.id][t].max},e.exports=z},{"../style-spec/feature_filter":115,"../util/dictionary_coder":202,"../util/intersection_tests":209,"../util/struct_array":215,"../util/util":218,"../util/vectortile_to_geojson":219,"./extent":64,"./load_geometry":66,"grid-index":19,pbf:35,"point-geometry":36,"vector-tile":44}],66:[function(t,e,i){"use strict"
function r(t){return{min:-1*Math.pow(2,t-1),max:Math.pow(2,t-1)-1}}var n=t("../util/util"),o=t("./extent"),a={15:r(15),16:r(16)}
e.exports=function(t,e){for(var i=a[e||16],r=o/t.extent,s=t.loadGeometry(),l=0;l<s.length;l++)for(var u=s[l],c=0;c<u.length;c++){var p=u[c]
p.x=Math.round(p.x*r),p.y=Math.round(p.y*r),(p.x<i.min||p.x>i.max||p.y<i.min||p.y>i.max)&&n.warnOnce("Geometry exceeds allowed extent, reduce your vector tile buffer size")}return s}},{"../util/util":218,"./extent":64}],67:[function(t,e,i){"use strict"
var r=t("../util/struct_array"),n=r({members:[{name:"a_pos",type:"Int16",components:2}]})
e.exports=n},{"../util/struct_array":215}],68:[function(t,e,i){"use strict"
function r(t){return[a(255*t[0],255*t[1]),a(255*t[2],255*t[3])]}var n=t("./vertex_array_type"),o=t("../style-spec/function").interpolationFactor,a=t("../shaders/encode_attribute").packUint8ToFloat,s=function(t,e,i,r){this.name=t,this.type=e,this.property=i,this.useIntegerZoom=r}
s.prototype.defines=function(){return["#define HAS_UNIFORM_u_"+this.name]},s.prototype.populatePaintArray=function(){},s.prototype.setUniforms=function(t,e,i,r){var n=r.zoom,o=i.getPaintValue(this.property,{zoom:this.useIntegerZoom?Math.floor(n):n})
"color"===this.type?t.uniform4fv(e["u_"+this.name],o):t.uniform1f(e["u_"+this.name],o)}
var l=function(t,e,i){this.name=t,this.type=e,this.property=i}
l.prototype.defines=function(){return[]},l.prototype.populatePaintArray=function(t,e,i,n,o,a){var s=this,l=t.getPaintValue(this.property,void 0,a)
if("color"===this.type)for(var u=r(l),c=n;o>c;c++){var p=e.get(c)
p["a_"+s.name+"0"]=u[0],p["a_"+s.name+"1"]=u[1]}else{for(var h=n;o>h;h++)e.get(h)["a_"+s.name]=l
var f=i[this.property]
f.max=Math.max(f.max,l)}},l.prototype.setUniforms=function(t,e){t.uniform1f(e["a_"+this.name+"_t"],0)}
var u=function(t,e,i,r,n){this.name=t,this.type=e,this.property=i,this.useIntegerZoom=r,this.zoom=n}
u.prototype.defines=function(){return[]},u.prototype.populatePaintArray=function(t,e,i,n,o,a){var s=this,l=t.getPaintValue(this.property,{zoom:this.zoom},a),u=t.getPaintValue(this.property,{zoom:this.zoom+1},a)
if("color"===this.type)for(var c=r(l),p=r(u),h=n;o>h;h++){var f=e.get(h)
f["a_"+s.name+"0"]=c[0],f["a_"+s.name+"1"]=c[1],f["a_"+s.name+"2"]=p[0],f["a_"+s.name+"3"]=p[1]}else{for(var d=n;o>d;d++){var m=e.get(d)
m["a_"+s.name+"0"]=l,m["a_"+s.name+"1"]=u}var y=i[this.property]
y.max=Math.max(y.max,l,u)}},u.prototype.setUniforms=function(t,e,i,r){var n=r.zoom,a=o(this.useIntegerZoom?Math.floor(n):n,1,this.zoom,this.zoom+1)
t.uniform1f(e["a_"+this.name+"_t"],a)}
var c=function(){this.binders={},this.cacheKey=""}
c.createDynamic=function(t,e,i){for(var r=new c,o=[],a=0,p=t.paintAttributes||[];a<p.length;a+=1){var h=p[a],f=h.property,d=h.useIntegerZoom||!1,m=h.name||f.replace(e.type+"-","").replace(/-/g,"_"),y=e._paintSpecifications[f].type
e.isPaintValueFeatureConstant(f)?(r.binders[m]=new s(m,y,f,d),r.cacheKey+="/u_"+m):e.isPaintValueZoomConstant(f)?(r.binders[m]=new l(m,y,f),r.cacheKey+="/a_"+m,o.push({name:"a_"+m,type:"Float32",components:"color"===y?2:1})):(r.binders[m]=new u(m,y,f,d,i),r.cacheKey+="/z_"+m,o.push({name:"a_"+m,type:"Float32",components:"color"===y?4:2}))}return r.PaintVertexArray=n(o),r["interface"]=t,r},c.createBasicFill=function(){var t=new c
return t.binders.color=new s("color","color","fill-color",!1),t.cacheKey+="/u_color",t.binders.opacity=new s("opacity","number","fill-opacity",!1),t.cacheKey+="/u_opacity",t},c.prototype.createPaintPropertyStatistics=function(){var t=this,e={}
for(var i in t.binders)e[t.binders[i].property]={max:-1/0}
return e},c.prototype.populatePaintArray=function(t,e,i,r,n){var o=this,a=e.length
e.resize(r)
for(var s in o.binders)o.binders[s].populatePaintArray(t,e,i,a,r,n)},c.prototype.defines=function(){var t=this,e=[]
for(var i in t.binders)e.push.apply(e,t.binders[i].defines())
return e},c.prototype.setUniforms=function(t,e,i,r){var n=this
for(var o in n.binders)n.binders[o].setUniforms(t,e,i,r)},e.exports=c},{"../shaders/encode_attribute":90,"../style-spec/function":117,"./vertex_array_type":70}],69:[function(t,e,i){"use strict"
var r=t("../util/struct_array"),n=r({members:[{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]})
e.exports=n},{"../util/struct_array":215}],70:[function(t,e,i){"use strict"
function r(t){return n({members:t,alignment:4})}var n=t("../util/struct_array")
e.exports=r},{"../util/struct_array":215}],71:[function(t,e,i){"use strict"
var r=function(t,e,i){this.column=t,this.row=e,this.zoom=i}
r.prototype.clone=function(){return new r(this.column,this.row,this.zoom)},r.prototype.zoomTo=function(t){return this.clone()._zoomTo(t)},r.prototype.sub=function(t){return this.clone()._sub(t)},r.prototype._zoomTo=function(t){var e=Math.pow(2,t-this.zoom)
return this.column*=e,this.row*=e,this.zoom=t,this},r.prototype._sub=function(t){return t=t.zoomTo(this.zoom),this.column-=t.column,this.row-=t.row,this},e.exports=r},{}],72:[function(t,e,i){"use strict"
var r=t("../util/util").wrap,n=function(t,e){if(isNaN(t)||isNaN(e))throw Error("Invalid LngLat object: ("+t+", "+e+")")
if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw Error("Invalid LngLat latitude value: must be between -90 and 90")}
n.prototype.wrap=function(){return new n(r(this.lng,-180,180),this.lat)},n.prototype.toArray=function(){return[this.lng,this.lat]},n.prototype.toString=function(){return"LngLat("+this.lng+", "+this.lat+")"},n.prototype.toBounds=function(e){var i=360*e/40075017,r=i/Math.cos(Math.PI/180*this.lat)
return new(t("./lng_lat_bounds"))(new n(this.lng-r,this.lat-i),new n(this.lng+r,this.lat+i))},n.convert=function(t){if(t instanceof n)return t
if(Array.isArray(t)&&2===t.length)return new n(+t[0],+t[1])
if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new n(+t.lng,+t.lat)
throw Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")},e.exports=n},{"../util/util":218,"./lng_lat_bounds":73}],73:[function(t,e,i){"use strict"
var r=t("./lng_lat"),n=function(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]))}
n.prototype.setNorthEast=function(t){return this._ne=t instanceof r?new r(t.lng,t.lat):r.convert(t),this},n.prototype.setSouthWest=function(t){return this._sw=t instanceof r?new r(t.lng,t.lat):r.convert(t),this},n.prototype.extend=function(t){var e,i,o=this._sw,a=this._ne
if(t instanceof r)e=t,i=t
else{if(!(t instanceof n))return Array.isArray(t)?t.every(Array.isArray)?this.extend(n.convert(t)):this.extend(r.convert(t)):this
if(e=t._sw,i=t._ne,!e||!i)return this}return o||a?(o.lng=Math.min(e.lng,o.lng),o.lat=Math.min(e.lat,o.lat),a.lng=Math.max(i.lng,a.lng),a.lat=Math.max(i.lat,a.lat)):(this._sw=new r(e.lng,e.lat),this._ne=new r(i.lng,i.lat)),this},n.prototype.getCenter=function(){return new r((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},n.prototype.getSouthWest=function(){return this._sw},n.prototype.getNorthEast=function(){return this._ne},n.prototype.getNorthWest=function(){return new r(this.getWest(),this.getNorth())},n.prototype.getSouthEast=function(){return new r(this.getEast(),this.getSouth())},n.prototype.getWest=function(){return this._sw.lng},n.prototype.getSouth=function(){return this._sw.lat},n.prototype.getEast=function(){return this._ne.lng},n.prototype.getNorth=function(){return this._ne.lat},n.prototype.toArray=function(){return[this._sw.toArray(),this._ne.toArray()]},n.prototype.toString=function(){return"LngLatBounds("+this._sw+", "+this._ne+")"},n.convert=function(t){return!t||t instanceof n?t:new n(t)},e.exports=n},{"./lng_lat":72}],74:[function(t,e,i){"use strict"
var r=t("./lng_lat"),n=t("point-geometry"),o=t("./coordinate"),a=t("../util/util"),s=t("../style-spec/util/interpolate"),l=t("../source/tile_coord"),u=t("../data/extent"),c=t("@mapbox/gl-matrix"),p=c.vec4,h=c.mat4,f=c.mat2,d=function(t,e,i){this.tileSize=512,this._renderWorldCopies=void 0===i||i,this._minZoom=t||0,this._maxZoom=e||22,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this._center=new r(0,0),this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0},m={minZoom:{},maxZoom:{},renderWorldCopies:{},worldSize:{},centerPoint:{},size:{},bearing:{},pitch:{},fov:{},zoom:{},center:{},unmodified:{},x:{},y:{},point:{}}
m.minZoom.get=function(){return this._minZoom},m.minZoom.set=function(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t))},m.maxZoom.get=function(){return this._maxZoom},m.maxZoom.set=function(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t))},m.renderWorldCopies.get=function(){return this._renderWorldCopies},m.worldSize.get=function(){return this.tileSize*this.scale},m.centerPoint.get=function(){return this.size._div(2)},m.size.get=function(){return new n(this.width,this.height)},m.bearing.get=function(){return-this.angle/Math.PI*180},m.bearing.set=function(t){var e=-a.wrap(t,-180,180)*Math.PI/180
this.angle!==e&&(this._unmodified=!1,this.angle=e,this._calcMatrices(),this.rotationMatrix=f.create(),f.rotate(this.rotationMatrix,this.rotationMatrix,this.angle))},m.pitch.get=function(){return this._pitch/Math.PI*180},m.pitch.set=function(t){var e=a.clamp(t,0,60)/180*Math.PI
this._pitch!==e&&(this._unmodified=!1,this._pitch=e,this._calcMatrices())},m.fov.get=function(){return this._fov/Math.PI*180},m.fov.set=function(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices())},m.zoom.get=function(){return this._zoom},m.zoom.set=function(t){var e=Math.min(Math.max(t,this.minZoom),this.maxZoom)
this._zoom!==e&&(this._unmodified=!1,this._zoom=e,this.scale=this.zoomScale(e),this.tileZoom=Math.floor(e),this.zoomFraction=e-this.tileZoom,this._constrain(),this._calcMatrices())},m.center.get=function(){return this._center},m.center.set=function(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices())},d.prototype.coveringZoomLevel=function(t){return(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize))},d.prototype.getVisibleWrappedCoordinates=function(t){for(var e=this.pointCoordinate(new n(0,0),0),i=this.pointCoordinate(new n(this.width,0),0),r=Math.floor(e.column),o=Math.floor(i.column),a=[t],s=r;o>=s;s++)0!==s&&a.push(new l(t.z,t.x,t.y,s))
return a},d.prototype.coveringTiles=function(t){var e=this.coveringZoomLevel(t),i=e
if(e<t.minzoom)return[]
e>t.maxzoom&&(e=t.maxzoom)
var r=this.pointCoordinate(this.centerPoint,e),o=new n(r.column-.5,r.row-.5),a=[this.pointCoordinate(new n(0,0),e),this.pointCoordinate(new n(this.width,0),e),this.pointCoordinate(new n(this.width,this.height),e),this.pointCoordinate(new n(0,this.height),e)]
return l.cover(e,a,t.reparseOverscaled?i:e,this._renderWorldCopies).sort(function(t,e){return o.dist(t)-o.dist(e)})},d.prototype.resize=function(t,e){this.width=t,this.height=e,this.pixelsToGLUnits=[2/t,-2/e],this._constrain(),this._calcMatrices()},m.unmodified.get=function(){return this._unmodified},d.prototype.zoomScale=function(t){return Math.pow(2,t)},d.prototype.scaleZoom=function(t){return Math.log(t)/Math.LN2},d.prototype.project=function(t){return new n(this.lngX(t.lng),this.latY(t.lat))},d.prototype.unproject=function(t){return new r(this.xLng(t.x),this.yLat(t.y))},m.x.get=function(){return this.lngX(this.center.lng)},m.y.get=function(){return this.latY(this.center.lat)},m.point.get=function(){return new n(this.x,this.y)},d.prototype.lngX=function(t){return(180+t)*this.worldSize/360},d.prototype.latY=function(t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))*this.worldSize/360},d.prototype.xLng=function(t){return 360*t/this.worldSize-180},d.prototype.yLat=function(t){var e=180-360*t/this.worldSize
return 360/Math.PI*Math.atan(Math.exp(e*Math.PI/180))-90},d.prototype.setLocationAtPoint=function(t,e){var i=this.pointCoordinate(e)._sub(this.pointCoordinate(this.centerPoint))
this.center=this.coordinateLocation(this.locationCoordinate(t)._sub(i)),this._renderWorldCopies&&(this.center=this.center.wrap())},d.prototype.locationPoint=function(t){return this.coordinatePoint(this.locationCoordinate(t))},d.prototype.pointLocation=function(t){return this.coordinateLocation(this.pointCoordinate(t))},d.prototype.locationCoordinate=function(t){return new o(this.lngX(t.lng)/this.tileSize,this.latY(t.lat)/this.tileSize,this.zoom).zoomTo(this.tileZoom)},d.prototype.coordinateLocation=function(t){var e=t.zoomTo(this.zoom)
return new r(this.xLng(e.column*this.tileSize),this.yLat(e.row*this.tileSize))},d.prototype.pointCoordinate=function(t,e){void 0===e&&(e=this.tileZoom)
var i=[t.x,t.y,0,1],r=[t.x,t.y,1,1]
p.transformMat4(i,i,this.pixelMatrixInverse),p.transformMat4(r,r,this.pixelMatrixInverse)
var n=i[3],a=r[3],l=i[0]/n,u=r[0]/a,c=i[1]/n,h=r[1]/a,f=i[2]/n,d=r[2]/a,m=f===d?0:(0-f)/(d-f)
return new o(s(l,u,m)/this.tileSize,s(c,h,m)/this.tileSize,this.zoom)._zoomTo(e)},d.prototype.coordinatePoint=function(t){var e=t.zoomTo(this.zoom),i=[e.column*this.tileSize,e.row*this.tileSize,0,1]
return p.transformMat4(i,i,this.pixelMatrix),new n(i[0]/i[3],i[1]/i[3])},d.prototype.calculatePosMatrix=function(t,e){var i=t.toCoordinate(e),r=this.worldSize/this.zoomScale(i.zoom),n=h.identity(new Float64Array(16))
return h.translate(n,n,[i.column*r,i.row*r,0]),h.scale(n,n,[r/u,r/u,1]),h.multiply(n,this.projMatrix,n),new Float32Array(n)},d.prototype.cameraToTileDistance=function(t){var e=this.calculatePosMatrix(t.coord,t.sourceMaxZoom),i=[t.tileSize/2,t.tileSize/2,0,1]
return p.transformMat4(i,i,e),i[3]},d.prototype._constrain=function(){if(this.center&&this.width&&this.height&&!this._constraining){this._constraining=!0
var t,e,i,r,o=-90,a=90,s=-180,l=180,u=this.size,c=this._unmodified
if(this.latRange){var p=this.latRange
o=this.latY(p[1]),a=this.latY(p[0]),t=a-o<u.y?u.y/(a-o):0}if(this.lngRange){var h=this.lngRange
s=this.lngX(h[0]),l=this.lngX(h[1]),e=l-s<u.x?u.x/(l-s):0}var f=Math.max(e||0,t||0)
if(f)return this.center=this.unproject(new n(e?(l+s)/2:this.x,t?(a+o)/2:this.y)),this.zoom+=this.scaleZoom(f),this._unmodified=c,void(this._constraining=!1)
if(this.latRange){var d=this.y,m=u.y/2
o>d-m&&(r=o+m),d+m>a&&(r=a-m)}if(this.lngRange){var y=this.x,_=u.x/2
s>y-_&&(i=s+_),y+_>l&&(i=l-_)}void 0===i&&void 0===r||(this.center=this.unproject(new n(void 0!==i?i:this.x,void 0!==r?r:this.y))),this._unmodified=c,this._constraining=!1}},d.prototype._calcMatrices=function(){if(this.height){this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height
var t=this._fov/2,e=Math.PI/2+this._pitch,i=Math.sin(t)*this.cameraToCenterDistance/Math.sin(Math.PI-e-t),r=Math.cos(Math.PI/2-this._pitch)*i+this.cameraToCenterDistance,n=1.01*r,o=new Float64Array(16)
h.perspective(o,this._fov,this.width/this.height,1,n),h.scale(o,o,[1,-1,1]),h.translate(o,o,[0,0,-this.cameraToCenterDistance]),h.rotateX(o,o,this._pitch),h.rotateZ(o,o,this.angle),h.translate(o,o,[-this.x,-this.y,0])
var a=this.worldSize/(2*Math.PI*6378137*Math.abs(Math.cos(this.center.lat*(Math.PI/180))))
if(h.scale(o,o,[1,1,a,1]),this.projMatrix=o,o=h.create(),h.scale(o,o,[this.width/2,-this.height/2,1]),h.translate(o,o,[1,-1,0]),this.pixelMatrix=h.multiply(new Float64Array(16),o,this.projMatrix),!(o=h.invert(new Float64Array(16),this.pixelMatrix)))throw Error("failed to invert matrix")
this.pixelMatrixInverse=o}},Object.defineProperties(d.prototype,m),e.exports=d},{"../data/extent":64,"../source/tile_coord":106,"../style-spec/util/interpolate":123,"../util/util":218,"./coordinate":71,"./lng_lat":72,"@mapbox/gl-matrix":1,"point-geometry":36}],75:[function(t,e,i){"use strict"
var r=t("mapbox-gl-supported"),n=t("./util/browser"),o=t("../package.json").version,a=t("./ui/map"),s=t("./ui/control/navigation_control"),l=t("./ui/control/geolocate_control"),u=t("./ui/control/attribution_control"),c=t("./ui/control/scale_control"),p=t("./ui/control/fullscreen_control"),h=t("./ui/popup"),f=t("./ui/marker"),d=t("./style/style"),m=t("./geo/lng_lat"),y=t("./geo/lng_lat_bounds"),_=t("point-geometry"),v=t("./util/evented"),g=t("./util/config"),x=t("./source/rtl_text_plugin")
e.exports={version:o,supported:r,workerCount:Math.max(Math.floor(n.hardwareConcurrency/2),1),setRTLTextPlugin:x.setRTLTextPlugin,Map:a,NavigationControl:s,GeolocateControl:l,AttributionControl:u,ScaleControl:c,FullscreenControl:p,Popup:h,Marker:f,Style:d,LngLat:m,LngLatBounds:y,Point:_,Evented:v,config:g,get accessToken(){return g.ACCESS_TOKEN},set accessToken(t){g.ACCESS_TOKEN=t}}},{"../package.json":53,"./geo/lng_lat":72,"./geo/lng_lat_bounds":73,"./source/rtl_text_plugin":101,"./style/style":149,"./ui/control/attribution_control":178,"./ui/control/fullscreen_control":179,"./ui/control/geolocate_control":180,"./ui/control/navigation_control":182,"./ui/control/scale_control":183,"./ui/map":192,"./ui/marker":193,"./ui/popup":194,"./util/browser":197,"./util/config":201,"./util/evented":205,"mapbox-gl-supported":33,"point-geometry":36}],76:[function(t,e,i){"use strict"
function r(t,e,i){var r=t.gl,o=t.transform,a=o.tileSize,s=i.paint["background-color"],l=i.paint["background-pattern"],u=i.paint["background-opacity"],c=!l&&1===s[3]&&1===u
if(t.isOpaquePass===c){r.disable(r.STENCIL_TEST),t.setDepthSublayer(0)
var p
if(l){if(n.isPatternMissing(l,t))return
p=t.useProgram("fillPattern",t.basicFillProgramConfiguration),n.prepare(l,t,p),t.tileExtentPatternVAO.bind(r,p,t.tileExtentBuffer)}else p=t.useProgram("fill",t.basicFillProgramConfiguration),r.uniform4fv(p.u_color,s),t.tileExtentVAO.bind(r,p,t.tileExtentBuffer)
r.uniform1f(p.u_opacity,u)
for(var h=o.coveringTiles({tileSize:a}),f=0,d=h;f<d.length;f+=1){var m=d[f]
l&&n.setTile({coord:m,tileSize:a},t,p),r.uniformMatrix4fv(p.u_matrix,!1,t.transform.calculatePosMatrix(m)),r.drawArrays(r.TRIANGLE_STRIP,0,t.tileExtentBuffer.length)}}}var n=t("./pattern")
e.exports=r},{"./pattern":88}],77:[function(t,e,i){"use strict"
function r(t,e,i,r){if(!t.isOpaquePass){var a=t.gl
t.setDepthSublayer(0),t.depthMask(!1),a.disable(a.STENCIL_TEST)
for(var s=0;s<r.length;s++){var l=r[s],u=e.getTile(l),c=u.getBucket(i)
if(c){var p=c.buffers,h=p.layerData[i.id],f=h.programConfiguration,d=t.useProgram("circle",f)
if(f.setUniforms(a,d,i,{zoom:t.transform.zoom}),a.uniform1f(d.u_camera_to_center_distance,t.transform.cameraToCenterDistance),a.uniform1i(d.u_scale_with_map,"map"===i.paint["circle-pitch-scale"]),"map"===i.paint["circle-pitch-alignment"]){a.uniform1i(d.u_pitch_with_map,!0)
var m=o(u,1,t.transform.zoom)
a.uniform2f(d.u_extrude_scale,m,m)}else a.uniform1i(d.u_pitch_with_map,!1),a.uniform2fv(d.u_extrude_scale,t.transform.pixelsToGLUnits)
a.uniform1f(d.u_devicepixelratio,n.devicePixelRatio),a.uniformMatrix4fv(d.u_matrix,!1,t.translatePosMatrix(l.posMatrix,u,i.paint["circle-translate"],i.paint["circle-translate-anchor"]))
for(var y=0,_=p.segments;y<_.length;y+=1){var v=_[y]
v.vaos[i.id].bind(a,d,p.layoutVertexBuffer,p.elementBuffer,h.paintVertexBuffer,v.vertexOffset),a.drawElements(a.TRIANGLES,3*v.primitiveLength,a.UNSIGNED_SHORT,3*v.primitiveOffset*2)}}}}}var n=t("../util/browser"),o=t("../source/pixels_to_tile_units")
e.exports=r},{"../source/pixels_to_tile_units":98,"../util/browser":197}],78:[function(t,e,i){"use strict"
function r(t,e,i,r){var n=t.gl
n.enable(n.STENCIL_TEST)
var o=t.useProgram("collisionBox")
n.activeTexture(n.TEXTURE1),t.frameHistory.bind(n),n.uniform1i(o.u_fadetexture,1)
for(var a=0;a<r.length;a++){var s=r[a],l=e.getTile(s),u=l.getBucket(i)
if(u){var c=u.buffers.collisionBox
if(c){n.uniformMatrix4fv(o.u_matrix,!1,s.posMatrix),t.enableTileClippingMask(s),t.lineWidth(1),n.uniform1f(o.u_scale,Math.pow(2,t.transform.zoom-l.coord.z)),n.uniform1f(o.u_zoom,10*t.transform.zoom)
var p=Math.max(0,Math.min(25,l.coord.z+Math.log(l.collisionTile.maxScale)/Math.LN2))
n.uniform1f(o.u_maxzoom,10*p),n.uniform1f(o.u_collision_y_stretch,l.collisionTile.yStretch),n.uniform1f(o.u_pitch,t.transform.pitch/360*2*Math.PI),n.uniform1f(o.u_camera_to_center_distance,t.transform.cameraToCenterDistance)
for(var h=0,f=c.segments;h<f.length;h+=1){var d=f[h]
d.vaos[i.id].bind(n,o,c.layoutVertexBuffer,c.elementBuffer,null,d.vertexOffset),n.drawElements(n.LINES,2*d.primitiveLength,n.UNSIGNED_SHORT,2*d.primitiveOffset*2)}}}}}e.exports=r},{}],79:[function(t,e,i){"use strict"
function r(t,e,i){for(var r=0;r<i.length;r++)n(t,e,i[r])}function n(t,e,i){var r=t.gl
r.disable(r.STENCIL_TEST),t.lineWidth(1*a.devicePixelRatio)
var n=i.posMatrix,h=t.useProgram("debug")
r.uniformMatrix4fv(h.u_matrix,!1,n),r.uniform4f(h.u_color,1,0,0,1),t.debugVAO.bind(r,h,t.debugBuffer),r.drawArrays(r.LINE_STRIP,0,t.debugBuffer.length)
for(var f=o(""+i,50,200,5),d=new p,m=0;m<f.length;m+=2)d.emplaceBack(f[m],f[m+1])
var y=u.fromStructArray(d,u.BufferType.VERTEX);(new c).bind(r,h,y),r.uniform4f(h.u_color,1,1,1,1)
for(var _=e.getTile(i).tileSize,v=l/(Math.pow(2,t.transform.zoom-i.z)*_),g=[[-1,-1],[-1,1],[1,-1],[1,1]],x=0;x<g.length;x++){var b=g[x]
r.uniformMatrix4fv(h.u_matrix,!1,s.translate([],n,[v*b[0],v*b[1],0])),r.drawArrays(r.LINES,0,y.length)}r.uniform4f(h.u_color,0,0,0,1),r.uniformMatrix4fv(h.u_matrix,!1,n),r.drawArrays(r.LINES,0,y.length)}function o(t,e,i,r){r=r||1
var n,o,a,s,l,u,c,p,f=[]
for(n=0,o=t.length;o>n;n++)if(l=h[t[n]]){for(p=null,a=0,s=l[1].length;s>a;a+=2)-1===l[1][a]&&-1===l[1][a+1]?p=null:(u=e+l[1][a]*r,c=i-l[1][a+1]*r,p&&f.push(p.x,p.y,u,c),p={x:u,y:c})
e+=l[0]*r}return f}var a=t("../util/browser"),s=t("@mapbox/gl-matrix").mat4,l=t("../data/extent"),u=t("../data/buffer"),c=t("./vertex_array_object"),p=t("../data/pos_array")
e.exports=r
var h={" ":[16,[]],"!":[10,[5,21,5,7,-1,-1,5,2,4,1,5,0,6,1,5,2]],'"':[16,[4,21,4,14,-1,-1,12,21,12,14]],"#":[21,[11,25,4,-7,-1,-1,17,25,10,-7,-1,-1,4,12,18,12,-1,-1,3,6,17,6]],$:[20,[8,25,8,-4,-1,-1,12,25,12,-4,-1,-1,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],"%":[24,[21,21,3,0,-1,-1,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,-1,-1,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7]],"&":[26,[23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2]],"'":[10,[5,19,4,20,5,21,6,20,6,18,5,16,4,15]],"(":[14,[11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7]],")":[14,[3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7]],"*":[16,[8,21,8,9,-1,-1,3,18,13,12,-1,-1,13,18,3,12]],"+":[26,[13,18,13,0,-1,-1,4,9,22,9]],",":[10,[6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"-":[26,[4,9,22,9]],".":[10,[5,2,4,1,5,0,6,1,5,2]],"/":[22,[20,25,2,-7]],0:[20,[9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21]],1:[20,[6,17,8,18,11,21,11,0]],2:[20,[4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0]],3:[20,[5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],4:[20,[13,21,3,7,18,7,-1,-1,13,21,13,0]],5:[20,[15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],6:[20,[16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7]],7:[20,[17,21,7,0,-1,-1,3,21,17,21]],8:[20,[8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21]],9:[20,[16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3]],":":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,5,2,4,1,5,0,6,1,5,2]],";":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"<":[24,[20,18,4,9,20,0]],"=":[26,[4,12,22,12,-1,-1,4,6,22,6]],">":[24,[4,18,20,9,4,0]],"?":[18,[3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,-1,-1,9,2,8,1,9,0,10,1,9,2]],"@":[27,[18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,-1,-1,12,16,10,14,9,11,9,8,10,6,11,5,-1,-1,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,-1,-1,19,16,18,8,18,6,19,5]],A:[18,[9,21,1,0,-1,-1,9,21,17,0,-1,-1,4,7,14,7]],B:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,-1,-1,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0]],C:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5]],D:[21,[4,21,4,0,-1,-1,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0]],E:[19,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11,-1,-1,4,0,17,0]],F:[18,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11]],G:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,-1,-1,13,8,18,8]],H:[22,[4,21,4,0,-1,-1,18,21,18,0,-1,-1,4,11,18,11]],I:[8,[4,21,4,0]],J:[16,[12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7]],K:[21,[4,21,4,0,-1,-1,18,21,4,7,-1,-1,9,12,18,0]],L:[17,[4,21,4,0,-1,-1,4,0,16,0]],M:[24,[4,21,4,0,-1,-1,4,21,12,0,-1,-1,20,21,12,0,-1,-1,20,21,20,0]],N:[22,[4,21,4,0,-1,-1,4,21,18,0,-1,-1,18,21,18,0]],O:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21]],P:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10]],Q:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,-1,-1,12,4,18,-2]],R:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,-1,-1,11,11,18,0]],S:[20,[17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],T:[16,[8,21,8,0,-1,-1,1,21,15,21]],U:[22,[4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21]],V:[18,[1,21,9,0,-1,-1,17,21,9,0]],W:[24,[2,21,7,0,-1,-1,12,21,7,0,-1,-1,12,21,17,0,-1,-1,22,21,17,0]],X:[20,[3,21,17,0,-1,-1,17,21,3,0]],Y:[18,[1,21,9,11,9,0,-1,-1,17,21,9,11]],Z:[20,[17,21,3,0,-1,-1,3,21,17,21,-1,-1,3,0,17,0]],"[":[14,[4,25,4,-7,-1,-1,5,25,5,-7,-1,-1,4,25,11,25,-1,-1,4,-7,11,-7]],"\\":[14,[0,21,14,-3]],"]":[14,[9,25,9,-7,-1,-1,10,25,10,-7,-1,-1,3,25,10,25,-1,-1,3,-7,10,-7]],"^":[16,[6,15,8,18,10,15,-1,-1,3,12,8,17,13,12,-1,-1,8,17,8,0]],_:[16,[0,-2,16,-2]],"`":[10,[6,21,5,20,4,18,4,16,5,15,6,16,5,17]],a:[19,[15,14,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],b:[19,[4,21,4,0,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],c:[18,[15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],d:[19,[15,21,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],e:[18,[3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],f:[12,[10,21,8,21,6,20,5,17,5,0,-1,-1,2,14,9,14]],g:[19,[15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],h:[19,[4,21,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],i:[8,[3,21,4,20,5,21,4,22,3,21,-1,-1,4,14,4,0]],j:[10,[5,21,6,20,7,21,6,22,5,21,-1,-1,6,14,6,-3,5,-6,3,-7,1,-7]],k:[17,[4,21,4,0,-1,-1,14,14,4,4,-1,-1,8,8,15,0]],l:[8,[4,21,4,0]],m:[30,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0,-1,-1,15,10,18,13,20,14,23,14,25,13,26,10,26,0]],n:[19,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],o:[19,[8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14]],p:[19,[4,14,4,-7,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],q:[19,[15,14,15,-7,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],r:[13,[4,14,4,0,-1,-1,4,8,5,11,7,13,9,14,12,14]],s:[17,[14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3]],t:[12,[5,21,5,4,6,1,8,0,10,0,-1,-1,2,14,9,14]],u:[19,[4,14,4,4,5,1,7,0,10,0,12,1,15,4,-1,-1,15,14,15,0]],v:[16,[2,14,8,0,-1,-1,14,14,8,0]],w:[22,[3,14,7,0,-1,-1,11,14,7,0,-1,-1,11,14,15,0,-1,-1,19,14,15,0]],x:[17,[3,14,14,0,-1,-1,14,14,3,0]],y:[16,[2,14,8,0,-1,-1,14,14,8,0,6,-4,4,-6,2,-7,1,-7]],z:[17,[14,14,3,0,-1,-1,3,14,14,14,-1,-1,3,0,14,0]],"{":[14,[9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,-1,-1,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,-1,-1,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7]],"|":[8,[4,25,4,-7]],"}":[14,[5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,-1,-1,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,-1,-1,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7]],"~":[24,[3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,-1,-1,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]]}},{"../data/buffer":61,"../data/extent":64,"../data/pos_array":67,"../util/browser":197,"./vertex_array_object":89,"@mapbox/gl-matrix":1}],80:[function(t,e,i){"use strict"
function r(t,e,i,r){var s=t.gl
s.enable(s.STENCIL_TEST)
var l=!i.paint["fill-pattern"]&&i.isPaintValueFeatureConstant("fill-color")&&i.isPaintValueFeatureConstant("fill-opacity")&&1===i.paint["fill-color"][3]&&1===i.paint["fill-opacity"]
t.isOpaquePass===l&&(t.setDepthSublayer(1),n(t,e,i,r,o)),!t.isOpaquePass&&i.paint["fill-antialias"]&&(t.lineWidth(2),t.depthMask(!1),t.setDepthSublayer(i.getPaintProperty("fill-outline-color")?2:0),n(t,e,i,r,a))}function n(t,e,i,r,n){if(!l.isPatternMissing(i.paint["fill-pattern"],t))for(var o=!0,a=0,s=r;a<s.length;a+=1){var u=s[a],c=e.getTile(u),p=c.getBucket(i)
p&&(t.enableTileClippingMask(u),n(t,e,i,c,u,p.buffers,o),o=!1)}}function o(t,e,i,r,n,o,a){for(var l=t.gl,u=o.layerData[i.id],c=s("fill",i.paint["fill-pattern"],t,u,i,r,n,a),p=0,h=o.segments;p<h.length;p+=1){var f=h[p]
f.vaos[i.id].bind(l,c,o.layoutVertexBuffer,o.elementBuffer,u.paintVertexBuffer,f.vertexOffset),l.drawElements(l.TRIANGLES,3*f.primitiveLength,l.UNSIGNED_SHORT,3*f.primitiveOffset*2)}}function a(t,e,i,r,n,o,a){var l=t.gl,u=o.layerData[i.id],c=i.paint["fill-pattern"]&&!i.getPaintProperty("fill-outline-color"),p=s("fillOutline",c,t,u,i,r,n,a)
l.uniform2f(p.u_world,l.drawingBufferWidth,l.drawingBufferHeight)
for(var h=0,f=o.segments2;h<f.length;h+=1){var d=f[h]
d.vaos[i.id].bind(l,p,o.layoutVertexBuffer,o.elementBuffer2,u.paintVertexBuffer,d.vertexOffset),l.drawElements(l.LINES,2*d.primitiveLength,l.UNSIGNED_SHORT,2*d.primitiveOffset*2)}}function s(t,e,i,r,n,o,a,s){var u,c=i.currentProgram
return e?(u=i.useProgram(t+"Pattern",r.programConfiguration),(s||u!==c)&&(r.programConfiguration.setUniforms(i.gl,u,n,{zoom:i.transform.zoom}),l.prepare(n.paint["fill-pattern"],i,u)),l.setTile(o,i,u)):(u=i.useProgram(t,r.programConfiguration),(s||u!==c)&&r.programConfiguration.setUniforms(i.gl,u,n,{zoom:i.transform.zoom})),i.gl.uniformMatrix4fv(u.u_matrix,!1,i.translatePosMatrix(a.posMatrix,o,n.paint["fill-translate"],n.paint["fill-translate-anchor"])),u}var l=t("./pattern")
e.exports=r},{"./pattern":88}],81:[function(t,e,i){"use strict"
function r(t,e,i,r){if(!t.isOpaquePass&&0!==i.paint["fill-extrusion-opacity"]){var s=t.gl
s.disable(s.STENCIL_TEST),s.enable(s.DEPTH_TEST),t.depthMask(!0)
var l=n(s,t)
s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT)
for(var u=0;u<r.length;u++)a(t,e,i,r[u])
s.bindFramebuffer(s.FRAMEBUFFER,null),o(s,t,i,l)}}function n(t,e){t.activeTexture(t.TEXTURE1)
var i=e.viewportTexture
i?t.bindTexture(t.TEXTURE_2D,i):(i=t.createTexture(),t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e.width,e.height,0,t.RGBA,t.UNSIGNED_BYTE,null),e.viewportTexture=i)
var r=e.viewportFbo
if(r)t.bindFramebuffer(t.FRAMEBUFFER,r)
else{r=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,r)
var n=t.createRenderbuffer()
t.bindRenderbuffer(t.RENDERBUFFER,n),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e.width,e.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,n),e.viewportFbo=r}return t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0),i}function o(t,e,i,r){var n=e.useProgram("extrusionTexture")
t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,r),t.uniform1f(n.u_opacity,i.paint["fill-extrusion-opacity"]),t.uniform1i(n.u_image,1)
var o=d.create()
d.ortho(o,0,e.width,e.height,0,0,1),t.uniformMatrix4fv(n.u_matrix,!1,o),t.disable(t.DEPTH_TEST),t.uniform2f(n.u_world,t.drawingBufferWidth,t.drawingBufferHeight)
var a=new p
a.emplaceBack(0,0),a.emplaceBack(1,0),a.emplaceBack(0,1),a.emplaceBack(1,1)
var s=u.fromStructArray(a,u.BufferType.VERTEX);(new c).bind(t,n,s),t.drawArrays(t.TRIANGLE_STRIP,0,4),t.enable(t.DEPTH_TEST)}function a(t,e,i,r){var n=e.getTile(r),o=n.getBucket(i)
if(o){var a=o.buffers,l=t.gl,u=i.paint["fill-extrusion-pattern"],c=a.layerData[i.id],p=c.programConfiguration,f=t.useProgram(u?"fillExtrusionPattern":"fillExtrusion",p)
if(p.setUniforms(l,f,i,{zoom:t.transform.zoom}),u){if(h.isPatternMissing(u,t))return
h.prepare(u,t,f),h.setTile(n,t,f),l.uniform1f(f.u_height_factor,-Math.pow(2,r.z)/n.tileSize/8)}t.gl.uniformMatrix4fv(f.u_matrix,!1,t.translatePosMatrix(r.posMatrix,n,i.paint["fill-extrusion-translate"],i.paint["fill-extrusion-translate-anchor"])),s(f,t)
for(var d=0,m=a.segments;d<m.length;d+=1){var y=m[d]
y.vaos[i.id].bind(l,f,a.layoutVertexBuffer,a.elementBuffer,c.paintVertexBuffer,y.vertexOffset),l.drawElements(l.TRIANGLES,3*y.primitiveLength,l.UNSIGNED_SHORT,3*y.primitiveOffset*2)}}}function s(t,e){var i=e.gl,r=e.style.light,n=r.calculated.position,o=[n.x,n.y,n.z],a=f.create()
"viewport"===r.calculated.anchor&&f.fromRotation(a,-e.transform.angle),m.transformMat3(o,o,a),i.uniform3fv(t.u_lightpos,o),i.uniform1f(t.u_lightintensity,r.calculated.intensity),i.uniform3fv(t.u_lightcolor,r.calculated.color.slice(0,3))}var l=t("@mapbox/gl-matrix"),u=t("../data/buffer"),c=t("./vertex_array_object"),p=t("../data/pos_array"),h=t("./pattern"),f=l.mat3,d=l.mat4,m=l.vec3
e.exports=r},{"../data/buffer":61,"../data/pos_array":67,"./pattern":88,"./vertex_array_object":89,"@mapbox/gl-matrix":1}],82:[function(t,e,i){"use strict"
function r(t,e,i,r,a,s,l,u,c){var p,h,f,d,m=e.gl,y=a.paint["line-dasharray"],_=a.paint["line-pattern"]
if(u||c){var v=1/o(i,1,e.transform.tileZoom)
if(y){p=e.lineAtlas.getDash(y.from,"round"===a.layout["line-cap"]),h=e.lineAtlas.getDash(y.to,"round"===a.layout["line-cap"])
var g=p.width*y.fromScale,x=h.width*y.toScale
m.uniform2f(t.u_patternscale_a,v/g,-p.height/2),m.uniform2f(t.u_patternscale_b,v/x,-h.height/2),m.uniform1f(t.u_sdfgamma,e.lineAtlas.width/(256*Math.min(g,x)*n.devicePixelRatio)/2)}else if(_){if(f=e.spriteAtlas.getPattern(_.from),d=e.spriteAtlas.getPattern(_.to),!f||!d)return
m.uniform2f(t.u_pattern_size_a,f.displaySize[0]*_.fromScale/v,d.displaySize[1]),m.uniform2f(t.u_pattern_size_b,d.displaySize[0]*_.toScale/v,d.displaySize[1]),m.uniform2fv(t.u_texsize,e.spriteAtlas.getPixelSize())}m.uniform2f(t.u_gl_units_to_pixels,1/e.transform.pixelsToGLUnits[0],1/e.transform.pixelsToGLUnits[1])}u&&(y?(m.uniform1i(t.u_image,0),m.activeTexture(m.TEXTURE0),e.lineAtlas.bind(m),m.uniform1f(t.u_tex_y_a,p.y),m.uniform1f(t.u_tex_y_b,h.y),m.uniform1f(t.u_mix,y.t)):_&&(m.uniform1i(t.u_image,0),m.activeTexture(m.TEXTURE0),e.spriteAtlas.bind(m,!0),m.uniform2fv(t.u_pattern_tl_a,f.tl),m.uniform2fv(t.u_pattern_br_a,f.br),m.uniform2fv(t.u_pattern_tl_b,d.tl),m.uniform2fv(t.u_pattern_br_b,d.br),m.uniform1f(t.u_fade,_.t))),e.enableTileClippingMask(s)
var b=e.translatePosMatrix(s.posMatrix,i,a.paint["line-translate"],a.paint["line-translate-anchor"])
m.uniformMatrix4fv(t.u_matrix,!1,b),m.uniform1f(t.u_ratio,1/o(i,1,e.transform.zoom))
for(var w=0,T=r.segments;w<T.length;w+=1){var z=T[w]
z.vaos[a.id].bind(m,t,r.layoutVertexBuffer,r.elementBuffer,l.paintVertexBuffer,z.vertexOffset),m.drawElements(m.TRIANGLES,3*z.primitiveLength,m.UNSIGNED_SHORT,3*z.primitiveOffset*2)}}var n=t("../util/browser"),o=t("../source/pixels_to_tile_units")
e.exports=function(t,e,i,n){if(!t.isOpaquePass){t.setDepthSublayer(0),t.depthMask(!1)
var o=t.gl
if(o.enable(o.STENCIL_TEST),!(i.paint["line-width"]<=0))for(var a,s=i.paint["line-dasharray"]?"lineSDF":i.paint["line-pattern"]?"linePattern":"line",l=!0,u=0,c=n;u<c.length;u+=1){var p=c[u],h=e.getTile(p),f=h.getBucket(i)
if(f){var d=f.buffers.layerData[i.id],m=t.currentProgram,y=t.useProgram(s,d.programConfiguration),_=l||y!==m,v=a!==h.coord.z
_&&d.programConfiguration.setUniforms(t.gl,y,i,{zoom:t.transform.zoom}),r(y,t,h,f.buffers,i,p,d,_,v),a=h.coord.z,l=!1}}}}},{"../source/pixels_to_tile_units":98,"../util/browser":197}],83:[function(t,e,i){"use strict"
function r(t,e,i,r){if(!t.isOpaquePass){var o=t.gl
o.enable(o.DEPTH_TEST),t.depthMask(!0),o.depthFunc(o.LESS)
for(var a=r.length&&r[0].z,s=0;s<r.length;s++){var l=r[s]
t.setDepthSublayer(l.z-a),n(t,e,i,l)}o.depthFunc(o.LEQUAL)}}function n(t,e,i,r){var n=t.gl
n.disable(n.STENCIL_TEST)
var u=e.getTile(r),c=t.transform.calculatePosMatrix(r,e.getSource().maxzoom)
u.registerFadeDuration(t.style.animationLoop,i.paint["raster-fade-duration"])
var p=t.useProgram("raster")
n.uniformMatrix4fv(p.u_matrix,!1,c),n.uniform1f(p.u_brightness_low,i.paint["raster-brightness-min"]),n.uniform1f(p.u_brightness_high,i.paint["raster-brightness-max"]),n.uniform1f(p.u_saturation_factor,s(i.paint["raster-saturation"])),n.uniform1f(p.u_contrast_factor,a(i.paint["raster-contrast"])),n.uniform3fv(p.u_spin_weights,o(i.paint["raster-hue-rotate"]))
var h,f,d=u.sourceCache&&u.sourceCache.findLoadedParent(r,0,{}),m=l(u,d,i,t.transform)
n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.activeTexture(n.TEXTURE1),d?(n.bindTexture(n.TEXTURE_2D,d.texture),h=Math.pow(2,d.coord.z-u.coord.z),f=[u.coord.x*h%1,u.coord.y*h%1]):n.bindTexture(n.TEXTURE_2D,u.texture),n.uniform2fv(p.u_tl_parent,f||[0,0]),n.uniform1f(p.u_scale_parent,h||1),n.uniform1f(p.u_buffer_scale,1),n.uniform1f(p.u_fade_t,m.mix),n.uniform1f(p.u_opacity,m.opacity*i.paint["raster-opacity"]),n.uniform1i(p.u_image0,0),n.uniform1i(p.u_image1,1)
var y=u.boundsBuffer||t.rasterBoundsBuffer;(u.boundsVAO||t.rasterBoundsVAO).bind(n,p,y),n.drawArrays(n.TRIANGLE_STRIP,0,y.length)}function o(t){t*=Math.PI/180
var e=Math.sin(t),i=Math.cos(t)
return[(2*i+1)/3,(-Math.sqrt(3)*e-i+1)/3,(Math.sqrt(3)*e-i+1)/3]}function a(t){return t>0?1/(1-t):1+t}function s(t){return t>0?1-1/(1.001-t):-t}function l(t,e,i,r){var n=i.paint["raster-fade-duration"]
if(t.sourceCache&&n>0){var o=Date.now(),a=(o-t.timeAdded)/n,s=e?(o-e.timeAdded)/n:-1,l=t.sourceCache.getSource(),c=r.coveringZoomLevel({tileSize:l.tileSize,roundZoom:l.roundZoom}),p=!e||Math.abs(e.coord.z-c)>Math.abs(t.coord.z-c),h=p&&t.refreshedUponExpiration?1:u.clamp(p?a:1-s,0,1)
return t.refreshedUponExpiration&&a>=1&&(t.refreshedUponExpiration=!1),e?{opacity:1,mix:1-h}:{opacity:h,mix:0}}return{opacity:1,mix:0}}var u=t("../util/util")
e.exports=r},{"../util/util":218}],84:[function(t,e,i){"use strict"
function r(t,e,i,r){if(!t.isOpaquePass){var o=!(i.layout["text-allow-overlap"]||i.layout["icon-allow-overlap"]||i.layout["text-ignore-placement"]||i.layout["icon-ignore-placement"]),a=t.gl
o?a.disable(a.STENCIL_TEST):a.enable(a.STENCIL_TEST),t.setDepthSublayer(0),t.depthMask(!1),n(t,e,i,r,!1,i.paint["icon-translate"],i.paint["icon-translate-anchor"],i.layout["icon-rotation-alignment"],i.layout["icon-pitch-alignment"],i.layout["icon-keep-upright"]),n(t,e,i,r,!0,i.paint["text-translate"],i.paint["text-translate-anchor"],i.layout["text-rotation-alignment"],i.layout["text-pitch-alignment"],i.layout["text-keep-upright"]),e.map.showCollisionBoxes&&l(t,e,i,r)}}function n(t,e,i,r,n,s,l,p,h,d){if(n||!t.style.sprite||t.style.sprite.loaded()){var m=t.gl,y="map"===p,_="map"===h,v=y&&"line"===i.layout["symbol-placement"],g=y&&!_&&!v,x=_
x?m.enable(m.DEPTH_TEST):m.disable(m.DEPTH_TEST)
for(var b,w,T=0,z=r;T<z.length;T+=1){var E=z[T],S=e.getTile(E),L=S.getBucket(i)
if(L){var M=n?L.buffers.glyph:L.buffers.icon
if(M&&M.segments.length){var A=M.layerData[i.id],C=A.programConfiguration,P=n||L.sdfIcons,k=n?L.textSizeData:L.iconSizeData
b&&L.fontstack===w||(b=t.useProgram(P?"symbolSDF":"symbolIcon",C),C.setUniforms(m,b,i,{zoom:t.transform.zoom}),o(b,t,i,E.z,n,P,g,_,L.fontstack,L.iconsNeedLinear,k)),t.enableTileClippingMask(E),m.uniformMatrix4fv(b.u_matrix,!1,t.translatePosMatrix(E.posMatrix,S,s,l))
var I=u(S,1,t.transform.zoom),D=c.getLabelPlaneMatrix(E.posMatrix,_,y,t.transform,I),R=c.getGlCoordMatrix(E.posMatrix,_,y,t.transform,I)
m.uniformMatrix4fv(b.u_gl_coord_matrix,!1,t.translatePosMatrix(R,S,s,l,!0)),v?(m.uniformMatrix4fv(b.u_label_plane_matrix,!1,f),c.updateLineLabels(L,E.posMatrix,t,n,D,R,_,d,I,i)):m.uniformMatrix4fv(b.u_label_plane_matrix,!1,D),m.uniform1f(b.u_collision_y_stretch,S.collisionTile.yStretch),a(b,C,t,i,S,M,n,P,_),w=L.fontstack}}}x||m.enable(m.DEPTH_TEST)}}function o(t,e,i,r,n,o,a,s,l,u,c){var h=e.gl,f=e.transform
if(h.uniform1i(t.u_pitch_with_map,s),h.activeTexture(h.TEXTURE0),h.uniform1i(t.u_texture,0),h.uniform1f(t.u_is_text,n?1:0),n){var d=l&&e.glyphSource.getGlyphAtlas(l)
if(!d)return
d.updateTexture(h),h.uniform2f(t.u_texsize,d.width,d.height)}else{var m=e.options.rotating||e.options.zooming,y=!i.isLayoutValueFeatureConstant("icon-size")||!i.isLayoutValueZoomConstant("icon-size")||1!==i.getLayoutValue("icon-size",{zoom:f.zoom}),_=y||u,v=s||f.pitch
e.spriteAtlas.bind(h,o||m||_||v),h.uniform2fv(t.u_texsize,e.spriteAtlas.getPixelSize())}h.activeTexture(h.TEXTURE1),e.frameHistory.bind(h),h.uniform1i(t.u_fadetexture,1),h.uniform1f(t.u_pitch,f.pitch/360*2*Math.PI),h.uniform1i(t.u_is_size_zoom_constant,c.isZoomConstant?1:0),h.uniform1i(t.u_is_size_feature_constant,c.isFeatureConstant?1:0),h.uniform1f(t.u_camera_to_center_distance,f.cameraToCenterDistance)
var g=p.evaluateSizeForZoom(c,f,i,n)
void 0!==g.uSizeT&&h.uniform1f(t.u_size_t,g.uSizeT),void 0!==g.uSize&&h.uniform1f(t.u_size,g.uSize),h.uniform1f(t.u_aspect_ratio,f.width/f.height),h.uniform1i(t.u_rotate_symbol,a)}function a(t,e,i,r,n,o,a,l,u){var c=i.gl,p=i.transform
if(l){var h=(a?"text":"icon")+"-halo-width",f=!r.isPaintValueFeatureConstant(h)||r.paint[h],d=u?Math.cos(p._pitch)*p.cameraToCenterDistance:1
c.uniform1f(t.u_gamma_scale,d),f&&(c.uniform1f(t.u_is_halo,1),s(o,r,c,t)),c.uniform1f(t.u_is_halo,0)}s(o,r,c,t)}function s(t,e,i,r){for(var n=t.layerData[e.id],o=n&&n.paintVertexBuffer,a=0,s=t.segments;a<s.length;a+=1){var l=s[a]
l.vaos[e.id].bind(i,r,t.layoutVertexBuffer,t.elementBuffer,o,l.vertexOffset,t.dynamicLayoutVertexBuffer),i.drawElements(i.TRIANGLES,3*l.primitiveLength,i.UNSIGNED_SHORT,3*l.primitiveOffset*2)}}var l=t("./draw_collision_debug"),u=t("../source/pixels_to_tile_units"),c=t("../symbol/projection"),p=t("../symbol/symbol_size"),h=t("@mapbox/gl-matrix").mat4,f=h.identity(new Float32Array(16))
e.exports=r},{"../source/pixels_to_tile_units":98,"../symbol/projection":170,"../symbol/symbol_size":174,"./draw_collision_debug":78,"@mapbox/gl-matrix":1}],85:[function(t,e,i){"use strict"
var r=function(){this.changeTimes=new Float64Array(256),this.changeOpacities=new Uint8Array(256),this.opacities=new Uint8ClampedArray(256),this.array=new Uint8Array(this.opacities.buffer),this.previousZoom=0,this.firstFrame=!0}
r.prototype.record=function(t,e,i){var r=this
this.firstFrame&&(t=0,this.firstFrame=!1),e=Math.floor(10*e)
var n
if(e<this.previousZoom)for(n=e+1;n<=this.previousZoom;n++)r.changeTimes[n]=t,r.changeOpacities[n]=r.opacities[n]
else for(n=e;n>this.previousZoom;n--)r.changeTimes[n]=t,r.changeOpacities[n]=r.opacities[n]
for(n=0;256>n;n++){var o=t-r.changeTimes[n],a=255*(i?o/i:1)
r.opacities[n]=e>=n?r.changeOpacities[n]+a:r.changeOpacities[n]-a}this.changed=!0,this.previousZoom=e},r.prototype.isVisible=function(t){return 0!==this.opacities[Math.floor(10*t)]},r.prototype.bind=function(t){this.texture?(t.bindTexture(t.TEXTURE_2D,this.texture),this.changed&&(t.texSubImage2D(t.TEXTURE_2D,0,0,0,256,1,t.ALPHA,t.UNSIGNED_BYTE,this.array),this.changed=!1)):(this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.ALPHA,256,1,0,t.ALPHA,t.UNSIGNED_BYTE,this.array))},e.exports=r},{}],86:[function(t,e,i){"use strict"
var r=t("../util/util"),n=function(t,e){this.width=t,this.height=e,this.nextRow=0,this.bytes=4,this.data=new Uint8Array(this.width*this.height*this.bytes),this.positions={}}
n.prototype.setSprite=function(t){this.sprite=t},n.prototype.getDash=function(t,e){var i=t.join(",")+e
return this.positions[i]||(this.positions[i]=this.addDash(t,e)),this.positions[i]},n.prototype.addDash=function(t,e){var i=this,n=e?7:0,o=2*n+1
if(this.nextRow+o>this.height)return r.warnOnce("LineAtlas out of space"),null
for(var a=0,s=0;s<t.length;s++)a+=t[s]
for(var l=this.width/a,u=l/2,c=t.length%2==1,p=-n;n>=p;p++)for(var h=i.nextRow+n+p,f=i.width*h,d=c?-t[t.length-1]:0,m=t[0],y=1,_=0;_<this.width;_++){for(;_/l>m;)d=m,m+=t[y],c&&y===t.length-1&&(m+=t[0]),y++
var v=Math.abs(_-d*l),g=Math.abs(_-m*l),x=Math.min(v,g),b=y%2==1,w=void 0
if(e){var T=n?p/n*(u+1):0
if(b){var z=u-Math.abs(T)
w=Math.sqrt(x*x+z*z)}else w=u-Math.sqrt(x*x+T*T)}else w=(b?1:-1)*x
i.data[3+4*(f+_)]=Math.max(0,Math.min(255,w+128))}var E={y:(this.nextRow+n+.5)/this.height,height:2*n/this.height,width:a}
return this.nextRow+=o,this.dirty=!0,E},n.prototype.bind=function(t){this.texture?(t.bindTexture(t.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.width,this.height,t.RGBA,t.UNSIGNED_BYTE,this.data))):(this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,this.data))},e.exports=n},{"../util/util":218}],87:[function(t,e,i){"use strict"
var r=t("../util/browser"),n=t("@mapbox/gl-matrix").mat4,o=t("./frame_history"),a=t("../source/source_cache"),s=t("../data/extent"),l=t("../source/pixels_to_tile_units"),u=t("../util/util"),c=t("../data/buffer"),p=t("./vertex_array_object"),h=t("../data/raster_bounds_array"),f=t("../data/pos_array"),d=t("../data/program_configuration"),m=t("../shaders"),y={symbol:t("./draw_symbol"),circle:t("./draw_circle"),line:t("./draw_line"),fill:t("./draw_fill"),"fill-extrusion":t("./draw_fill_extrusion"),raster:t("./draw_raster"),background:t("./draw_background"),debug:t("./draw_debug")},_=function(t,e){this.gl=t,this.transform=e,this._tileTextures={},this.frameHistory=new o,this.setup(),this.numSublayers=a.maxUnderzooming+a.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.lineWidthRange=t.getParameter(t.ALIASED_LINE_WIDTH_RANGE),this.basicFillProgramConfiguration=d.createBasicFill(),this.emptyProgramConfiguration=new d}
_.prototype.resize=function(t,e){var i=this.gl
this.width=t*r.devicePixelRatio,this.height=e*r.devicePixelRatio,i.viewport(0,0,this.width,this.height),this.viewportTexture&&(this.gl.deleteTexture(this.viewportTexture),this.viewportTexture=null),this.viewportFbo&&(this.gl.deleteFramebuffer(this.viewportFbo),this.viewportFbo=null)},_.prototype.setup=function(){var t=this.gl
t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.STENCIL_TEST),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),this._depthMask=!1,t.depthMask(!1)
var e=new f
e.emplaceBack(0,0),e.emplaceBack(s,0),e.emplaceBack(0,s),e.emplaceBack(s,s),this.tileExtentBuffer=c.fromStructArray(e,c.BufferType.VERTEX),this.tileExtentVAO=new p,this.tileExtentPatternVAO=new p
var i=new f
i.emplaceBack(0,0),i.emplaceBack(s,0),i.emplaceBack(s,s),i.emplaceBack(0,s),i.emplaceBack(0,0),this.debugBuffer=c.fromStructArray(i,c.BufferType.VERTEX),this.debugVAO=new p
var r=new h
r.emplaceBack(0,0,0,0),r.emplaceBack(s,0,32767,0),r.emplaceBack(0,s,0,32767),r.emplaceBack(s,s,32767,32767),this.rasterBoundsBuffer=c.fromStructArray(r,c.BufferType.VERTEX),this.rasterBoundsVAO=new p,this.extTextureFilterAnisotropic=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=t.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT))},_.prototype.clearColor=function(){var t=this.gl
t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)},_.prototype.clearStencil=function(){var t=this.gl
t.clearStencil(0),t.stencilMask(255),t.clear(t.STENCIL_BUFFER_BIT)},_.prototype.clearDepth=function(){var t=this.gl
t.clearDepth(1),this.depthMask(!0),t.clear(t.DEPTH_BUFFER_BIT)},_.prototype._renderTileClippingMasks=function(t){var e=this,i=this.gl
i.colorMask(!1,!1,!1,!1),this.depthMask(!1),i.disable(i.DEPTH_TEST),i.enable(i.STENCIL_TEST),i.stencilMask(255),i.stencilOp(i.KEEP,i.KEEP,i.REPLACE)
var r=1
this._tileClippingMaskIDs={}
for(var n=0,o=t;n<o.length;n+=1){var a=o[n],s=e._tileClippingMaskIDs[a.id]=r++
i.stencilFunc(i.ALWAYS,s,255)
var l=e.useProgram("fill",e.basicFillProgramConfiguration)
i.uniformMatrix4fv(l.u_matrix,!1,a.posMatrix),e.tileExtentVAO.bind(i,l,e.tileExtentBuffer),i.drawArrays(i.TRIANGLE_STRIP,0,e.tileExtentBuffer.length)}i.stencilMask(0),i.colorMask(!0,!0,!0,!0),this.depthMask(!0),i.enable(i.DEPTH_TEST)},_.prototype.enableTileClippingMask=function(t){var e=this.gl
e.stencilFunc(e.EQUAL,this._tileClippingMaskIDs[t.id],255)},_.prototype.prepareBuffers=function(){},_.prototype.render=function(t,e){if(this.style=t,this.options=e,this.lineAtlas=t.lineAtlas,this.spriteAtlas=t.spriteAtlas,this.spriteAtlas.setSprite(t.sprite),this.glyphSource=t.glyphSource,this.frameHistory.record(Date.now(),this.transform.zoom,t.getTransition().duration),this.prepareBuffers(),this.clearColor(),this.clearDepth(),this.showOverdrawInspector(e.showOverdrawInspector),this.depthRange=(t._order.length+2)*this.numSublayers*this.depthEpsilon,this.isOpaquePass=!0,this.renderPass(),this.isOpaquePass=!1,this.renderPass(),this.options.showTileBoundaries){var i=this.style.sourceCaches[Object.keys(this.style.sourceCaches)[0]]
i&&y.debug(this,i,i.getVisibleCoordinates())}},_.prototype.renderPass=function(){var t,e=this,i=this.style._order,r=[]
this.currentLayer=this.isOpaquePass?i.length-1:0,this.isOpaquePass?this._showOverdrawInspector||this.gl.disable(this.gl.BLEND):this.gl.enable(this.gl.BLEND)
for(var n=0;n<i.length;n++){var o=e.style._layers[i[e.currentLayer]]
o.source!==(t&&t.id)&&(t=e.style.sourceCaches[o.source],r=[],t&&(t.prepare&&t.prepare(),e.clearStencil(),r=t.getVisibleCoordinates(),t.getSource().isTileClipped&&e._renderTileClippingMasks(r)),e.isOpaquePass||r.reverse()),e.renderLayer(e,t,o,r),e.currentLayer+=e.isOpaquePass?-1:1}},_.prototype.depthMask=function(t){t!==this._depthMask&&(this._depthMask=t,this.gl.depthMask(t))},_.prototype.renderLayer=function(t,e,i,r){i.isHidden(this.transform.zoom)||("background"===i.type||r.length)&&(this.id=i.id,y[i.type](t,e,i,r))},_.prototype.setDepthSublayer=function(t){var e=1-((1+this.currentLayer)*this.numSublayers+t)*this.depthEpsilon,i=e-1+this.depthRange
this.gl.depthRange(i,e)},_.prototype.translatePosMatrix=function(t,e,i,r,o){if(!i[0]&&!i[1])return t
var a=o?"map"===r?this.transform.angle:0:"viewport"===r?-this.transform.angle:0
if(a){var s=Math.sin(a),u=Math.cos(a)
i=[i[0]*u-i[1]*s,i[0]*s+i[1]*u]}var c=[o?i[0]:l(e,i[0],this.transform.zoom),o?i[1]:l(e,i[1],this.transform.zoom),0],p=new Float32Array(16)
return n.translate(p,t,c),p},_.prototype.saveTileTexture=function(t){var e=this._tileTextures[t.size]
e?e.push(t):this._tileTextures[t.size]=[t]},_.prototype.getTileTexture=function(t){var e=this._tileTextures[t]
return e&&e.length>0?e.pop():null},_.prototype.lineWidth=function(t){this.gl.lineWidth(u.clamp(t,this.lineWidthRange[0],this.lineWidthRange[1]))},_.prototype.showOverdrawInspector=function(t){if(t||this._showOverdrawInspector){this._showOverdrawInspector=t
var e=this.gl
t?(e.blendFunc(e.CONSTANT_COLOR,e.ONE),e.blendColor(1/8,1/8,1/8,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)):e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA)}},_.prototype.createProgram=function(t,e){var i=this.gl,n=i.createProgram(),o=e.defines().concat("#define DEVICE_PIXEL_RATIO "+r.devicePixelRatio.toFixed(1))
this._showOverdrawInspector&&o.push("#define OVERDRAW_INSPECTOR;")
var a=o.concat(m.prelude.fragmentSource,m[t].fragmentSource).join("\n"),s=o.concat(m.prelude.vertexSource,m[t].vertexSource).join("\n"),l=i.createShader(i.FRAGMENT_SHADER)
i.shaderSource(l,a),i.compileShader(l),i.attachShader(n,l)
var u=i.createShader(i.VERTEX_SHADER)
i.shaderSource(u,s),i.compileShader(u),i.attachShader(n,u)
for(var c=e["interface"]?e["interface"].layoutAttributes:[],p=0;p<c.length;p++)i.bindAttribLocation(n,p,c[p].name)
i.linkProgram(n)
for(var h=i.getProgramParameter(n,i.ACTIVE_ATTRIBUTES),f={program:n,numAttributes:h},d=0;h>d;d++){var y=i.getActiveAttrib(n,d)
y&&(f[y.name]=i.getAttribLocation(n,y.name))}for(var _=i.getProgramParameter(n,i.ACTIVE_UNIFORMS),v=0;_>v;v++){var g=i.getActiveUniform(n,v)
g&&(f[g.name]=i.getUniformLocation(n,g.name))}return f},_.prototype._createProgramCached=function(t,e){this.cache=this.cache||{}
var i=""+t+(e.cacheKey||"")+(this._showOverdrawInspector?"/overdraw":"")
return this.cache[i]||(this.cache[i]=this.createProgram(t,e)),this.cache[i]},_.prototype.useProgram=function(t,e){var i=this.gl,r=this._createProgramCached(t,e||this.emptyProgramConfiguration)
return this.currentProgram!==r&&(i.useProgram(r.program),this.currentProgram=r),r},e.exports=_},{"../data/buffer":61,"../data/extent":64,"../data/pos_array":67,"../data/program_configuration":68,"../data/raster_bounds_array":69,"../shaders":91,"../source/pixels_to_tile_units":98,"../source/source_cache":103,"../util/browser":197,"../util/util":218,"./draw_background":76,"./draw_circle":77,"./draw_debug":79,"./draw_fill":80,"./draw_fill_extrusion":81,"./draw_line":82,"./draw_raster":83,"./draw_symbol":84,"./frame_history":85,"./vertex_array_object":89,"@mapbox/gl-matrix":1}],88:[function(t,e,i){"use strict"
var r=t("../source/pixels_to_tile_units")
i.isPatternMissing=function(t,e){if(!t)return!1
var i=e.spriteAtlas.getPattern(t.from),r=e.spriteAtlas.getPattern(t.to)
return!i||!r},i.prepare=function(t,e,i){var r=e.gl,n=e.spriteAtlas.getPattern(t.from),o=e.spriteAtlas.getPattern(t.to)
r.uniform1i(i.u_image,0),r.uniform2fv(i.u_pattern_tl_a,n.tl),r.uniform2fv(i.u_pattern_br_a,n.br),r.uniform2fv(i.u_pattern_tl_b,o.tl),r.uniform2fv(i.u_pattern_br_b,o.br),r.uniform2fv(i.u_texsize,e.spriteAtlas.getPixelSize()),r.uniform1f(i.u_mix,t.t),r.uniform2fv(i.u_pattern_size_a,n.displaySize),r.uniform2fv(i.u_pattern_size_b,o.displaySize),r.uniform1f(i.u_scale_a,t.fromScale),r.uniform1f(i.u_scale_b,t.toScale),r.activeTexture(r.TEXTURE0),e.spriteAtlas.bind(r,!0)},i.setTile=function(t,e,i){var n=e.gl
n.uniform1f(i.u_tile_units_to_pixels,1/r(t,1,e.transform.tileZoom))
var o=Math.pow(2,t.coord.z),a=t.tileSize*Math.pow(2,e.transform.tileZoom)/o,s=a*(t.coord.x+t.coord.w*o),l=a*t.coord.y
n.uniform2f(i.u_pixel_coord_upper,s>>16,l>>16),n.uniform2f(i.u_pixel_coord_lower,65535&s,65535&l)}},{"../source/pixels_to_tile_units":98}],89:[function(t,e,i){"use strict"
var r=function(){this.boundProgram=null,this.boundVertexBuffer=null,this.boundVertexBuffer2=null,this.boundElementBuffer=null,this.boundVertexOffset=null,this.vao=null}
r.prototype.bind=function(t,e,i,r,n,o,a){void 0===t.extVertexArrayObject&&(t.extVertexArrayObject=t.getExtension("OES_vertex_array_object"))
var s=!this.vao||this.boundProgram!==e||this.boundVertexBuffer!==i||this.boundVertexBuffer2!==n||this.boundElementBuffer!==r||this.boundVertexOffset!==o||this.boundDynamicVertexBuffer!==a
!t.extVertexArrayObject||s?(this.freshBind(t,e,i,r,n,o,a),this.gl=t):(t.extVertexArrayObject.bindVertexArrayOES(this.vao),a&&a.bind(t))},r.prototype.freshBind=function(t,e,i,r,n,o,a){var s,l=e.numAttributes
if(t.extVertexArrayObject)this.vao&&this.destroy(),this.vao=t.extVertexArrayObject.createVertexArrayOES(),t.extVertexArrayObject.bindVertexArrayOES(this.vao),s=0,this.boundProgram=e,this.boundVertexBuffer=i,this.boundVertexBuffer2=n,this.boundElementBuffer=r,this.boundVertexOffset=o,this.boundDynamicVertexBuffer=a
else{s=t.currentNumAttributes||0
for(var u=l;s>u;u++)t.disableVertexAttribArray(u)}i.enableAttributes(t,e),n&&n.enableAttributes(t,e),a&&a.enableAttributes(t,e),i.bind(t),i.setVertexAttribPointers(t,e,o),n&&(n.bind(t),n.setVertexAttribPointers(t,e,o)),a&&(a.bind(t),a.setVertexAttribPointers(t,e,o)),r&&r.bind(t),t.currentNumAttributes=l},r.prototype.destroy=function(){this.vao&&(this.gl.extVertexArrayObject.deleteVertexArrayOES(this.vao),this.vao=null)},e.exports=r},{}],90:[function(t,e,i){"use strict"
var r=t("../util/util")
i.packUint8ToFloat=function(t,e){return t=r.clamp(Math.floor(t),0,255),e=r.clamp(Math.floor(e),0,255),256*t+e}},{"../util/util":218}],91:[function(t,e,i){"use strict"
e.exports={prelude:{fragmentSource:"#ifdef GL_ES\nprecision mediump float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n",vertexSource:"#ifdef GL_ES\nprecision highp float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n\n// Unpack a pair of values that have been packed into a single float.\n// The packed values are assumed to be 8-bit unsigned integers, and are\n// packed like so:\n// packedValue = floor(input[0]) * 256 + input[1],\nvec2 unpack_float(const float packedValue) {\n    int packedIntValue = int(packedValue);\n    int v0 = packedIntValue / 256;\n    return vec2(v0, packedIntValue - v0 * 256);\n}\n\n\n// To minimize the number of attributes needed, we encode a 4-component\n// color into a pair of floats (i.e. a vec2) as follows:\n// [ floor(color.r * 255) * 256 + color.g * 255,\n//   floor(color.b * 255) * 256 + color.g * 255 ]\nvec4 decode_color(const vec2 encodedColor) {\n    return vec4(\n        unpack_float(encodedColor[0]) / 255.0,\n        unpack_float(encodedColor[1]) / 255.0\n    );\n}\n\n// Unpack a pair of paint values and interpolate between them.\nfloat unpack_mix_vec2(const vec2 packedValue, const float t) {\n    return mix(packedValue[0], packedValue[1], t);\n}\n\n// Unpack a pair of paint values and interpolate between them.\nvec4 unpack_mix_vec4(const vec4 packedColors, const float t) {\n    vec4 minColor = decode_color(vec2(packedColors[0], packedColors[1]));\n    vec4 maxColor = decode_color(vec2(packedColors[2], packedColors[3]));\n    return mix(minColor, maxColor, t);\n}\n\n// The offset depends on how many pixels are between the world origin and the edge of the tile:\n// vec2 offset = mod(pixel_coord, size)\n//\n// At high zoom levels there are a ton of pixels between the world origin and the edge of the tile.\n// The glsl spec only guarantees 16 bits of precision for highp floats. We need more than that.\n//\n// The pixel_coord is passed in as two 16 bit values:\n// pixel_coord_upper = floor(pixel_coord / 2^16)\n// pixel_coord_lower = mod(pixel_coord, 2^16)\n//\n// The offset is calculated in a series of steps that should preserve this precision:\nvec2 get_pattern_pos(const vec2 pixel_coord_upper, const vec2 pixel_coord_lower,\n    const vec2 pattern_size, const float tile_units_to_pixels, const vec2 pos) {\n\n    vec2 offset = mod(mod(mod(pixel_coord_upper, pattern_size) * 256.0, pattern_size) * 256.0 + pixel_coord_lower, pattern_size);\n    return (tile_units_to_pixels * pos + offset) / pattern_size;\n}\n"},circle:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    vec2 extrude = v_data.xy;\n    float extrude_length = length(extrude);\n\n    lowp float antialiasblur = v_data.z;\n    float antialiased_blur = -max(blur, antialiasblur);\n\n    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);\n\n    float color_t = stroke_width < 0.01 ? 0.0 : smoothstep(\n        antialiased_blur,\n        0.0,\n        extrude_length - radius / (radius + stroke_width)\n    );\n\n    gl_FragColor = opacity_t * mix(color * opacity, stroke_color * stroke_opacity, color_t);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform bool u_scale_with_map;\nuniform bool u_pitch_with_map;\nuniform vec2 u_extrude_scale;\nuniform highp float u_camera_to_center_distance;\n\nattribute vec2 a_pos;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main(void) {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec2 circle_center = floor(a_pos * 0.5);\n    if (u_pitch_with_map) {\n        vec2 corner_position = circle_center;\n        if (u_scale_with_map) {\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale;\n        } else {\n            // Pitching the circle with the map effectively scales it with the map\n            // To counteract the effect for pitch-scale: viewport, we rescale the\n            // whole circle based on the pitch scaling effect at its central point\n            vec4 projected_center = u_matrix * vec4(circle_center, 0, 1);\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale * (projected_center.w / u_camera_to_center_distance);\n        }\n\n        gl_Position = u_matrix * vec4(corner_position, 0, 1);\n    } else {\n        gl_Position = u_matrix * vec4(circle_center, 0, 1);\n\n        if (u_scale_with_map) {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * u_camera_to_center_distance;\n        } else {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * gl_Position.w;\n        }\n    }\n\n    // This is a minimum blur distance that serves as a faux-antialiasing for\n    // the circle. since blur is a ratio of the circle's size and the intent is\n    // to keep the blur at roughly 1px, the two are inversely related.\n    lowp float antialiasblur = 1.0 / DEVICE_PIXEL_RATIO / (radius + stroke_width);\n\n    v_data = vec3(extrude.x, extrude.y, antialiasblur);\n}\n"},collisionBox:{fragmentSource:"uniform float u_zoom;\n// u_maxzoom is derived from the maximum scale considered by the CollisionTile\n// Labels with placement zoom greater than this value will not be placed,\n// regardless of perspective effects.\nuniform float u_maxzoom;\nuniform sampler2D u_fadetexture;\n\n// v_max_zoom is a collision-box-specific value that controls when line-following\n// collision boxes are used.\nvarying float v_max_zoom;\nvarying float v_placement_zoom;\nvarying float v_perspective_zoom_adjust;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n\n    float alpha = 0.5;\n\n    // Green = no collisions, label is showing\n    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0) * alpha;\n\n    // Red = collision, label hidden\n    if (texture2D(u_fadetexture, v_fade_tex).a < 1.0) {\n        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n    }\n\n    // Faded black = this collision box is not used at this zoom (for curved labels)\n    if (u_zoom >= v_max_zoom + v_perspective_zoom_adjust) {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0) * alpha * 0.25;\n    }\n\n    // Faded blue = the placement scale for this label is beyond the CollisionTile\n    // max scale, so it's impossible for this label to show without collision detection\n    // being run again (the label's glyphs haven't even been added to the symbol bucket)\n    if (v_placement_zoom >= u_maxzoom) {\n        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0) * alpha * 0.2;\n    }\n}\n",vertexSource:"attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_data;\n\nuniform mat4 u_matrix;\nuniform float u_scale;\nuniform float u_pitch;\nuniform float u_collision_y_stretch;\nuniform float u_camera_to_center_distance;\n\nvarying float v_max_zoom;\nvarying float v_placement_zoom;\nvarying float v_perspective_zoom_adjust;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = 1.0 + 0.5 * ((camera_to_anchor_distance / u_camera_to_center_distance) - 1.0);\n\n    highp float incidence_stretch  = camera_to_anchor_distance / (u_camera_to_center_distance * cos(u_pitch));\n    highp float collision_adjustment = max(1.0, incidence_stretch / u_collision_y_stretch);\n\n    gl_Position = u_matrix * vec4(a_pos + a_extrude * collision_perspective_ratio * collision_adjustment / u_scale, 0.0, 1.0);\n\n    v_max_zoom = a_data.x;\n    v_placement_zoom = a_data.y;\n\n    v_perspective_zoom_adjust = floor(log2(collision_perspective_ratio * collision_adjustment) * 10.0);\n    v_fade_tex = vec2((v_placement_zoom + v_perspective_zoom_adjust) / 255.0, 0.0);\n}\n"},debug:{fragmentSource:"uniform highp vec4 u_color;\n\nvoid main() {\n    gl_FragColor = u_color;\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, step(32767.0, a_pos.x), 1);\n}\n"},fill:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_FragColor = color * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},fillOutline:{fragmentSource:"#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_pos;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n    gl_FragColor = outline_color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\nuniform vec2 u_world;\n\nvarying vec2 v_pos;\n\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"},fillOutlinePattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    // find distance to outline for alpha interpolation\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n\n\n    gl_FragColor = mix(color1, color2, u_mix) * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"},fillPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n"},fillExtrusion:{fragmentSource:"varying vec4 v_color;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    gl_FragColor = v_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec4 v_color;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float ed = a_edgedistance; // use each attrib in order to not trip a VAO assert\n    float t = mod(a_normal.x, 2.0);\n\n    gl_Position = u_matrix * vec4(a_pos, t > 0.0 ? height : base, 1);\n\n    // Relative luminance (how dark/bright is the surface color?)\n    float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n\n    v_color = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(0.03, 0.03, 0.03, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(a_normal / 16384.0, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_color.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_color.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_color.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n}\n"},fillExtrusionPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    vec4 mixedColor = mix(color1, color2, u_mix);\n\n    gl_FragColor = mixedColor * v_lighting;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\nuniform float u_height_factor;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\nvarying float v_directional;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(a_normal.x, 2.0);\n    float z = t > 0.0 ? height : base;\n\n    gl_Position = u_matrix * vec4(a_pos, z, 1);\n\n    vec2 pos = a_normal.x == 1.0 && a_normal.y == 0.0 && a_normal.z == 16384.0\n        ? a_pos // extrusion top\n        : vec2(a_edgedistance, z * u_height_factor); // extrusion side\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, pos);\n\n    v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n    float directional = clamp(dot(a_normal / 16383.0, u_lightpos), 0.0, 1.0);\n    directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}\n"},extrusionTexture:{fragmentSource:"uniform sampler2D u_image;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_FragColor = texture2D(u_image, v_pos) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"},line:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_width2;\nvarying vec2 v_normal;\nvarying float v_gamma_scale;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\n// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\nattribute vec2 a_pos;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n\n    // We store the texture normals in the most insignificant bit\n    // transform y so that 0 => -1 and 1 => 1\n    // In the texture normal, x is 0 if the normal points straight up/down and 1 if it's a round cap\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = mod(a_pos, 2.0);\n    normal.y = sign(normal.y - 0.5);\n    v_normal = normal;\n\n\n    // these transformations used to be applied in the JS and native code bases. \n    // moved them into the shader for clarity and simplicity. \n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset; \n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    // Remove the texture normal bit to get the position\n    vec2 pos = floor(a_pos * 0.5);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_width2 = vec2(outset, inset);\n}\n"},linePattern:{fragmentSource:"uniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_fade;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float x_a = mod(v_linesofar / u_pattern_size_a.x, 1.0);\n    float x_b = mod(v_linesofar / u_pattern_size_b.x, 1.0);\n    float y_a = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_a.y);\n    float y_b = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_b.y);\n    vec2 pos_a = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, vec2(x_a, y_a));\n    vec2 pos_b = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, vec2(x_b, y_b));\n\n    vec4 color = mix(texture2D(u_image, pos_a), texture2D(u_image, pos_b), u_fade);\n\n    gl_FragColor = color * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec2 a_pos;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    // We store the texture normals in the most insignificant bit\n    // transform y so that 0 => -1 and 1 => 1\n    // In the texture normal, x is 0 if the normal points straight up/down and 1 if it's a round cap\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = mod(a_pos, 2.0);\n    normal.y = sign(normal.y - 0.5);\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases. \n    // moved them into the shader for clarity and simplicity. \n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset; \n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    // Remove the texture normal bit to get the position\n    vec2 pos = floor(a_pos * 0.5);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_linesofar = a_linesofar;\n    v_width2 = vec2(outset, inset);\n}\n"},lineSDF:{fragmentSource:"\nuniform sampler2D u_image;\nuniform float u_sdfgamma;\nuniform float u_mix;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float sdfdist_a = texture2D(u_image, v_tex_a).a;\n    float sdfdist_b = texture2D(u_image, v_tex_b).a;\n    float sdfdist = mix(sdfdist_a, sdfdist_b, u_mix);\n    alpha *= smoothstep(0.5 - u_sdfgamma / floorwidth, 0.5 + u_sdfgamma / floorwidth, sdfdist);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
vertexSource:"// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec2 a_pos;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_patternscale_a;\nuniform float u_tex_y_a;\nuniform vec2 u_patternscale_b;\nuniform float u_tex_y_b;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    // We store the texture normals in the most insignificant bit\n    // transform y so that 0 => -1 and 1 => 1\n    // In the texture normal, x is 0 if the normal points straight up/down and 1 if it's a round cap\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = mod(a_pos, 2.0);\n    normal.y = sign(normal.y - 0.5);\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases. \n    // moved them into the shader for clarity and simplicity. \n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n \n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist =outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    // Remove the texture normal bit to get the position\n    vec2 pos = floor(a_pos * 0.5);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_tex_a = vec2(a_linesofar * u_patternscale_a.x / floorwidth, normal.y * u_patternscale_a.y + u_tex_y_a);\n    v_tex_b = vec2(a_linesofar * u_patternscale_b.x / floorwidth, normal.y * u_patternscale_b.y + u_tex_y_b);\n\n    v_width2 = vec2(outset, inset);\n}\n"},raster:{fragmentSource:"uniform float u_fade_t;\nuniform float u_opacity;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nuniform float u_brightness_low;\nuniform float u_brightness_high;\n\nuniform float u_saturation_factor;\nuniform float u_contrast_factor;\nuniform vec3 u_spin_weights;\n\nvoid main() {\n\n    // read and cross-fade colors from the main and parent tiles\n    vec4 color0 = texture2D(u_image0, v_pos0);\n    vec4 color1 = texture2D(u_image1, v_pos1);\n    if (color0.a > 0.0) {\n        color0.rgb = color0.rgb / color0.a;\n    }\n    if (color1.a > 0.0) {\n        color1.rgb = color1.rgb / color1.a;\n    }\n    vec4 color = mix(color0, color1, u_fade_t);\n    color.a *= u_opacity;\n    vec3 rgb = color.rgb;\n\n    // spin\n    rgb = vec3(\n        dot(rgb, u_spin_weights.xyz),\n        dot(rgb, u_spin_weights.zxy),\n        dot(rgb, u_spin_weights.yzx));\n\n    // saturation\n    float average = (color.r + color.g + color.b) / 3.0;\n    rgb += (average - rgb) * u_saturation_factor;\n\n    // contrast\n    rgb = (rgb - 0.5) * u_contrast_factor + 0.5;\n\n    // brightness\n    vec3 u_high_vec = vec3(u_brightness_low, u_brightness_low, u_brightness_low);\n    vec3 u_low_vec = vec3(u_brightness_high, u_brightness_high, u_brightness_high);\n\n    gl_FragColor = vec4(mix(u_high_vec, u_low_vec, rgb) * color.a, color.a);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_tl_parent;\nuniform float u_scale_parent;\nuniform float u_buffer_scale;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos0 = (((a_texture_pos / 32767.0) - 0.5) / u_buffer_scale ) + 0.5;\n    v_pos1 = (v_pos0 * u_scale_parent) + u_tl_parent;\n}\n"},symbolIcon:{fragmentSource:"uniform sampler2D u_texture;\nuniform sampler2D u_fadetexture;\n\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    lowp float alpha = texture2D(u_fadetexture, v_fade_tex).a * opacity;\n    gl_FragColor = texture2D(u_texture, v_tex) * alpha;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\n\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\nuniform highp float u_camera_to_center_distance;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform highp float u_collision_y_stretch;\n\n#pragma mapbox: define lowp float opacity\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp vec2 angle_labelminzoom = unpack_float(a_projected_pos[2]);\n    highp float segment_angle = -angle_labelminzoom[0] / 255.0 * 2.0 * PI;\n    mediump float a_labelminzoom = angle_labelminzoom[1];\n\n    float size;\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // See comments in symbol_sdf.vertex\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = 0.5 + 0.5 * distance_ratio;\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // See comments in symbol_sdf.vertex\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 64.0 * fontScale), 0.0, 1.0);\n\n    v_tex = a_tex / u_texsize;\n    // See comments in symbol_sdf.vertex\n    highp float incidence_stretch  = camera_to_anchor_distance / (u_camera_to_center_distance * cos(u_pitch));\n    highp float collision_adjustment = max(1.0, incidence_stretch / u_collision_y_stretch);\n\n    highp float collision_perspective_ratio = 1.0 + 0.5*((camera_to_anchor_distance / u_camera_to_center_distance) - 1.0);\n    highp float perspective_zoom_adjust = floor(log2(collision_perspective_ratio * collision_adjustment) * 10.0);\n    v_fade_tex = vec2((a_labelminzoom + perspective_zoom_adjust) / 255.0, 0.0);\n}\n"},symbolSDF:{fragmentSource:"#define SDF_PX 8.0\n#define EDGE_GAMMA 0.105/DEVICE_PIXEL_RATIO\n\nuniform bool u_is_halo;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform sampler2D u_texture;\nuniform sampler2D u_fadetexture;\nuniform highp float u_gamma_scale;\nuniform bool u_is_text;\n\nvarying vec4 v_data0;\nvarying vec2 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 tex = v_data0.xy;\n    vec2 fade_tex = v_data0.zw;\n    float gamma_scale = v_data1.x;\n    float size = v_data1.y;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    lowp vec4 color = fill_color;\n    highp float gamma = EDGE_GAMMA / (fontScale * u_gamma_scale);\n    lowp float buff = (256.0 - 64.0) / 256.0;\n    if (u_is_halo) {\n        color = halo_color;\n        gamma = (halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (fontScale * u_gamma_scale);\n        buff = (6.0 - halo_width / fontScale) / SDF_PX;\n    }\n\n    lowp float dist = texture2D(u_texture, tex).a;\n    lowp float fade_alpha = texture2D(u_fadetexture, fade_tex).a;\n    highp float gamma_scaled = gamma * gamma_scale;\n    highp float alpha = smoothstep(buff - gamma_scaled, buff + gamma_scaled, dist) * fade_alpha;\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\n\n// contents of a_size vary based on the type of property value\n// used for {text,icon}-size.\n// For constants, a_size is disabled.\n// For source functions, we bind only one value per vertex: the value of {text,icon}-size evaluated for the current feature.\n// For composite functions:\n// [ text-size(lowerZoomStop, feature),\n//   text-size(upperZoomStop, feature) ]\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\n\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform highp float u_camera_to_center_distance;\nuniform highp float u_collision_y_stretch;\n\nuniform vec2 u_texsize;\n\nvarying vec4 v_data0;\nvarying vec2 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp vec2 angle_labelminzoom = unpack_float(a_projected_pos[2]);\n    highp float segment_angle = -angle_labelminzoom[0] / 255.0 * 2.0 * PI;\n    mediump float a_labelminzoom = angle_labelminzoom[1];\n    float size;\n\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // If the label is pitched with the map, layout is done in pitched space,\n    // which makes labels in the distance smaller relative to viewport space.\n    // We counteract part of that effect by multiplying by the perspective ratio.\n    // If the label isn't pitched with the map, we do layout in viewport space,\n    // which makes labels in the distance larger relative to the features around\n    // them. We counteract part of that effect by dividing by the perspective ratio.\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = 0.5 + 0.5 * distance_ratio;\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // Point labels with 'rotation-alignment: map' are horizontal with respect to tile units\n        // To figure out that angle in projected space, we draw a short horizontal line in tile\n        // space, project it, and measure its angle in projected space.\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 64.0 * fontScale), 0.0, 1.0);\n    float gamma_scale = gl_Position.w;\n\n    vec2 tex = a_tex / u_texsize;\n    // incidence_stretch is the ratio of how much y space a label takes up on a tile while drawn perpendicular to the viewport vs\n    //  how much space it would take up if it were drawn flat on the tile\n    // Using law of sines, camera_to_anchor/sin(ground_angle) = camera_to_center/sin(incidence_angle)\n    // sin(incidence_angle) = 1/incidence_stretch\n    // Incidence angle 90 -> head on, sin(incidence_angle) = 1, no incidence stretch\n    // Incidence angle 1 -> very oblique, sin(incidence_angle) =~ 0, lots of incidence stretch\n    // ground_angle = u_pitch + PI/2 -> sin(ground_angle) = cos(u_pitch)\n    // This 2D calculation is only exactly correct when gl_Position.x is in the center of the viewport,\n    //  but it's a close enough approximation for our purposes\n    highp float incidence_stretch  = camera_to_anchor_distance / (u_camera_to_center_distance * cos(u_pitch));\n    // incidence_stretch only applies to the y-axis, but without re-calculating the collision tile, we can't\n    // adjust the size of only one axis. So, we do a crude approximation at placement time to get the aspect ratio\n    // about right, and then do the rest of the adjustment here: there will be some extra padding on the x-axis,\n    // but hopefully not too much.\n    // Never make the adjustment less than 1.0: instead of allowing collisions on the x-axis, be conservative on\n    // the y-axis.\n    highp float collision_adjustment = max(1.0, incidence_stretch / u_collision_y_stretch);\n\n    // Floor to 1/10th zoom to dodge precision issues that can cause partially hidden labels\n    highp float collision_perspective_ratio = 1.0 + 0.5*((camera_to_anchor_distance / u_camera_to_center_distance) - 1.0);\n    highp float perspective_zoom_adjust = floor(log2(collision_perspective_ratio * collision_adjustment) * 10.0);\n    vec2 fade_tex = vec2((a_labelminzoom + perspective_zoom_adjust) / 255.0, 0.0);\n\n    v_data0 = vec4(tex.x, tex.y, fade_tex.x, fade_tex.y);\n    v_data1 = vec2(gamma_scale, size);\n}\n"}}
var r=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,n=function(t){var i=e.exports[t],n={}
i.fragmentSource=i.fragmentSource.replace(r,function(t,e,i,r,o){return n[o]=!0,"define"===e?"\n#ifndef HAS_UNIFORM_u_"+o+"\nvarying "+i+" "+r+" "+o+";\n#else\nuniform "+i+" "+r+" u_"+o+";\n#endif\n":"initialize"===e?"\n#ifdef HAS_UNIFORM_u_"+o+"\n    "+i+" "+r+" "+o+" = u_"+o+";\n#endif\n":void 0}),i.vertexSource=i.vertexSource.replace(r,function(t,e,i,r,o){var a="float"===r?"vec2":"vec4"
if(n[o]){if("define"===e)return"\n#ifndef HAS_UNIFORM_u_"+o+"\nuniform lowp float a_"+o+"_t;\nattribute "+i+" "+a+" a_"+o+";\nvarying "+i+" "+r+" "+o+";\n#else\nuniform "+i+" "+r+" u_"+o+";\n#endif\n"
if("initialize"===e)return"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+o+" = unpack_mix_"+a+"(a_"+o+", a_"+o+"_t);\n#else\n    "+i+" "+r+" "+o+" = u_"+o+";\n#endif\n"}else{if("define"===e)return"\n#ifndef HAS_UNIFORM_u_"+o+"\nuniform lowp float a_"+o+"_t;\nattribute "+i+" "+a+" a_"+o+";\n#else\nuniform "+i+" "+r+" u_"+o+";\n#endif\n"
if("initialize"===e)return"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+i+" "+r+" "+o+" = unpack_mix_"+a+"(a_"+o+", a_"+o+"_t);\n#else\n    "+i+" "+r+" "+o+" = u_"+o+";\n#endif\n"}})}
for(var o in e.exports)n(o)},{}],92:[function(t,e,i){"use strict"
var r=t("./image_source"),n=t("../util/window"),o=function(t){function e(e,i,r,n){t.call(this,e,i,r,n),this.options=i,this.animate=void 0===i.animate||i.animate}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){if(this.canvas=this.canvas||n.document.getElementById(this.options.canvas),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions())return this.fire("error",Error("Canvas dimensions cannot be less than or equal to zero."))
var t
this.play=function(){t=this.map.style.animationLoop.set(1/0),this.map._rerender()},this.pause=function(){this.map.style.animationLoop.cancel(t)},this._finishLoading()},e.prototype.getCanvas=function(){return this.canvas},e.prototype.onAdd=function(t){this.map||(this.map=t,this.load(),this.canvas&&this.animate&&this.play())},e.prototype.prepare=function(){var t=!1
this.canvas.width!==this.width&&(this.width=this.canvas.width,t=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,t=!0),this._hasInvalidDimensions()||0!==Object.keys(this.tiles).length&&this._prepareImage(this.map.painter.gl,this.canvas,t)},e.prototype.serialize=function(){return{type:"canvas",canvas:this.canvas,coordinates:this.coordinates}},e.prototype._hasInvalidDimensions=function(){for(var t=this,e=0,i=[t.canvas.width,t.canvas.height];e<i.length;e+=1){var r=i[e]
if(isNaN(r)||0>=r)return!0}return!1},e}(r)
e.exports=o},{"../util/window":199,"./image_source":96}],93:[function(t,e,i){"use strict"
function r(t){var e=a.document.createElement("a")
return e.href=t,e.href}var n=t("../util/evented"),o=t("../util/util"),a=t("../util/window"),s=t("../data/extent"),l=function(t){function e(e,i,r,n){t.call(this),this.id=e,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this.dispatcher=r,this.setEventedParent(n),this._data=i.data,this._options=o.extend({},i),void 0!==i.maxzoom&&(this.maxzoom=i.maxzoom),i.type&&(this.type=i.type)
var a=s/this.tileSize
this.workerOptions=o.extend({source:this.id,cluster:i.cluster||!1,geojsonVtOptions:{buffer:(void 0!==i.buffer?i.buffer:128)*a,tolerance:(void 0!==i.tolerance?i.tolerance:.375)*a,extent:s,maxZoom:this.maxzoom},superclusterOptions:{maxZoom:void 0!==i.clusterMaxZoom?Math.min(i.clusterMaxZoom,this.maxzoom-1):this.maxzoom-1,extent:s,radius:(i.clusterRadius||50)*a,log:!1}},i.workerOptions)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){var t=this
this.fire("dataloading",{dataType:"source"}),this._updateWorkerData(function(e){return e?void t.fire("error",{error:e}):void t.fire("data",{dataType:"source",sourceDataType:"metadata"})})},e.prototype.onAdd=function(t){this.load(),this.map=t},e.prototype.setData=function(t){var e=this
return this._data=t,this.fire("dataloading",{dataType:"source"}),this._updateWorkerData(function(t){return t?e.fire("error",{error:t}):void e.fire("data",{dataType:"source",sourceDataType:"content"})}),this},e.prototype._updateWorkerData=function(t){var e=this,i=o.extend({},this.workerOptions),n=this._data
"string"==typeof n?i.url=r(n):i.data=JSON.stringify(n),this.workerID=this.dispatcher.send(this.type+".loadData",i,function(i){e._loaded=!0,t(i)},this.workerID)},e.prototype.loadTile=function(t,e){var i=this,r=t.workerID&&"expired"!==t.state?"reloadTile":"loadTile",n={type:this.type,uid:t.uid,coord:t.coord,zoom:t.coord.z,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,overscaling:t.coord.z>this.maxzoom?Math.pow(2,t.coord.z-this.maxzoom):1,angle:this.map.transform.angle,pitch:this.map.transform.pitch,cameraToCenterDistance:this.map.transform.cameraToCenterDistance,cameraToTileDistance:this.map.transform.cameraToTileDistance(t),showCollisionBoxes:this.map.showCollisionBoxes}
t.workerID=this.dispatcher.send(r,n,function(r,n){return t.unloadVectorData(),t.aborted?void 0:r?e(r):(t.loadVectorData(n,i.map.painter),t.redoWhenDone&&(t.redoWhenDone=!1,t.redoPlacement(i)),e(null))},this.workerID)},e.prototype.abortTile=function(t){t.aborted=!0},e.prototype.unloadTile=function(t){t.unloadVectorData(),this.dispatcher.send("removeTile",{uid:t.uid,type:this.type,source:this.id},function(){},t.workerID)},e.prototype.onRemove=function(){this.dispatcher.broadcast("removeSource",{type:this.type,source:this.id},function(){})},e.prototype.serialize=function(){return o.extend({},this._options,{type:this.type,data:this._data})},e}(n)
e.exports=l},{"../data/extent":64,"../util/evented":205,"../util/util":218,"../util/window":199}],94:[function(t,e,i){"use strict"
function r(t,e){var i=t.source,r=t.coord
if(!this._geoJSONIndexes[i])return e(null,null)
var n=this._geoJSONIndexes[i].getTile(Math.min(r.z,t.maxZoom),r.x,r.y)
if(!n)return e(null,null)
var o=new a(n.features),l=s(o)
0===l.byteOffset&&l.byteLength===l.buffer.byteLength||(l=new Uint8Array(l)),e(null,{vectorTile:o,rawData:l.buffer})}var n=t("../util/ajax"),o=t("geojson-rewind"),a=t("./geojson_wrapper"),s=t("vt-pbf"),l=t("supercluster"),u=t("geojson-vt"),c=t("./vector_tile_worker_source"),p=function(t){function e(e,i,n){t.call(this,e,i,r),n&&(this.loadGeoJSON=n),this._geoJSONIndexes={}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.loadData=function(t,e){var i=this
this.loadGeoJSON(t,function(r,n){if(r||!n)return e(r)
if("object"!=typeof n)return e(Error("Input data is not a valid GeoJSON object."))
o(n,!0)
try{i._geoJSONIndexes[t.source]=t.cluster?l(t.superclusterOptions).load(n.features):u(n,t.geojsonVtOptions)}catch(r){return e(r)}i.loaded[t.source]={},e(null)})},e.prototype.reloadTile=function(e,i){var r=this.loaded[e.source],n=e.uid
return r&&r[n]?t.prototype.reloadTile.call(this,e,i):this.loadTile(e,i)},e.prototype.loadGeoJSON=function(t,e){if(t.url)n.getJSON(t.url,e)
else{if("string"!=typeof t.data)return e(Error("Input data is not a valid GeoJSON object."))
try{return e(null,JSON.parse(t.data))}catch(t){return e(Error("Input data is not a valid GeoJSON object."))}}},e.prototype.removeSource=function(t){this._geoJSONIndexes[t.source]&&delete this._geoJSONIndexes[t.source]},e}(c)
e.exports=p},{"../util/ajax":196,"./geojson_wrapper":95,"./vector_tile_worker_source":108,"geojson-rewind":10,"geojson-vt":14,supercluster:39,"vt-pbf":48}],95:[function(t,e,i){"use strict"
var r=t("point-geometry"),n=t("vector-tile").VectorTileFeature.prototype.toGeoJSON,o=t("../data/extent"),a=function(t){var e=this
if(this.type=t.type,1===t.type){this.rawGeometry=[]
for(var i=0;i<t.geometry.length;i++)e.rawGeometry.push([t.geometry[i]])}else this.rawGeometry=t.geometry
this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10)),this.extent=o}
a.prototype.loadGeometry=function(){var t=this,e=this.rawGeometry
this.geometry=[]
for(var i=0;i<e.length;i++){for(var n=e[i],o=[],a=0;a<n.length;a++)o.push(new r(n[a][0],n[a][1]))
t.geometry.push(o)}return this.geometry},a.prototype.bbox=function(){this.geometry||this.loadGeometry()
for(var t=this.geometry,e=1/0,i=-1/0,r=1/0,n=-1/0,o=0;o<t.length;o++)for(var a=t[o],s=0;s<a.length;s++){var l=a[s]
e=Math.min(e,l.x),i=Math.max(i,l.x),r=Math.min(r,l.y),n=Math.max(n,l.y)}return[e,r,i,n]},a.prototype.toGeoJSON=function(){return n.apply(this,arguments)}
var s=function(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=o,this.length=t.length,this._features=t}
s.prototype.feature=function(t){return new a(this._features[t])},e.exports=s},{"../data/extent":64,"point-geometry":36,"vector-tile":44}],96:[function(t,e,i){"use strict"
var r=t("../util/util"),n=t("../util/window"),o=t("./tile_coord"),a=t("../geo/lng_lat"),s=t("point-geometry"),l=t("../util/evented"),u=t("../util/ajax"),c=t("../data/extent"),p=t("../data/raster_bounds_array"),h=t("../data/buffer"),f=t("../render/vertex_array_object"),d=function(t){function e(e,i,r,n){t.call(this),this.id=e,this.dispatcher=r,this.coordinates=i.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this.setEventedParent(n),this.options=i,this.textureLoaded=!1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){var t=this
this.fire("dataloading",{dataType:"source"}),this.url=this.options.url,u.getImage(this.options.url,function(e,i){e?t.fire("error",{error:e}):i&&(t.image=i,t._finishLoading())})},e.prototype._finishLoading=function(){this.map&&(this.setCoordinates(this.coordinates),this.fire("data",{dataType:"source",sourceDataType:"metadata"}))},e.prototype.onAdd=function(t){this.load(),this.map=t,this.image&&this.setCoordinates(this.coordinates)},e.prototype.setCoordinates=function(t){this.coordinates=t
var e=this.map,i=t.map(function(t){return e.transform.locationCoordinate(a.convert(t)).zoomTo(0)}),n=this.centerCoord=r.getCoordinatesCenter(i)
return n.column=Math.floor(n.column),n.row=Math.floor(n.row),this.coord=new o(n.zoom,n.column,n.row),this.minzoom=this.maxzoom=n.zoom,this._tileCoords=i.map(function(t){var e=t.zoomTo(n.zoom)
return new s(Math.round((e.column-n.column)*c),Math.round((e.row-n.row)*c))}),this.fire("data",{dataType:"source",sourceDataType:"content"}),this},e.prototype._setTile=function(t){this.tiles[t.coord.w+""]=t
var e=new p
e.emplaceBack(this._tileCoords[0].x,this._tileCoords[0].y,0,0),e.emplaceBack(this._tileCoords[1].x,this._tileCoords[1].y,32767,0),e.emplaceBack(this._tileCoords[3].x,this._tileCoords[3].y,0,32767),e.emplaceBack(this._tileCoords[2].x,this._tileCoords[2].y,32767,32767),t.buckets={},t.boundsBuffer=h.fromStructArray(e,h.BufferType.VERTEX),t.boundsVAO=new f},e.prototype.prepare=function(){0===Object.keys(this.tiles).length!==0&&this.image&&this._prepareImage(this.map.painter.gl,this.image)},e.prototype._prepareImage=function(t,e,i){var r=this
this.textureLoaded?i?t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e):(e instanceof n.HTMLVideoElement||e instanceof n.ImageData||e instanceof n.HTMLCanvasElement)&&(t.bindTexture(t.TEXTURE_2D,this.texture),t.texSubImage2D(t.TEXTURE_2D,0,0,0,t.RGBA,t.UNSIGNED_BYTE,e)):(this.textureLoaded=!0,this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e))
for(var o in r.tiles){var a=r.tiles[o]
"loaded"!==a.state&&(a.state="loaded",a.texture=r.texture)}},e.prototype.loadTile=function(t,e){this.coord&&""+this.coord==""+t.coord?(this._setTile(t),e(null)):(t.state="errored",e(null))},e.prototype.serialize=function(){return{type:"image",urls:this.url,coordinates:this.coordinates}},e}(l)
e.exports=d},{"../data/buffer":61,"../data/extent":64,"../data/raster_bounds_array":69,"../geo/lng_lat":72,"../render/vertex_array_object":89,"../util/ajax":196,"../util/evented":205,"../util/util":218,"../util/window":199,"./tile_coord":106,"point-geometry":36}],97:[function(t,e,i){"use strict"
var r=t("../util/util"),n=t("../util/ajax"),o=t("../util/browser"),a=t("../util/mapbox").normalizeSourceURL
e.exports=function(t,e){var i=function(t,i){if(t)return e(t)
var n=r.pick(i,["tiles","minzoom","maxzoom","attribution","mapbox_logo","bounds"])
i.vector_layers&&(n.vectorLayers=i.vector_layers,n.vectorLayerIds=n.vectorLayers.map(function(t){return t.id})),e(null,n)}
t.url?n.getJSON(a(t.url),i):o.frame(i.bind(null,null,t))}},{"../util/ajax":196,"../util/browser":197,"../util/mapbox":212,"../util/util":218}],98:[function(t,e,i){"use strict"
var r=t("../data/extent")
e.exports=function(t,e,i){return e*(r/(t.tileSize*Math.pow(2,i-t.coord.z)))}},{"../data/extent":64}],99:[function(t,e,i){"use strict"
function r(t,e){var i=t.coord,r=e.coord
return i.z-r.z||i.y-r.y||i.w-r.w||i.x-r.x}function n(t){for(var e={},i={},r=0,n=t;r<n.length;r+=1){var o=n[r],a=o.queryResults,s=o.wrappedTileID,l=i[s]=i[s]||{}
for(var u in a)for(var c=a[u],p=l[u]=l[u]||{},h=e[u]=e[u]||[],f=0,d=c;f<d.length;f+=1){var m=d[f]
p[m.featureIndex]||(p[m.featureIndex]=!0,h.push(m.feature))}}return e}var o=t("./tile_coord")
i.rendered=function(t,e,i,o,a,s){var l=t.tilesIn(i)
l.sort(r)
for(var u=[],c=0;c<l.length;c++){var p=l[c]
p.tile.featureIndex&&u.push({wrappedTileID:p.coord.wrapped().id,queryResults:p.tile.featureIndex.query({queryGeometry:p.queryGeometry,scale:p.scale,tileSize:p.tile.tileSize,bearing:s,params:o},e)})}return n(u)},i.source=function(t,e){for(var i=t.getRenderableIds().map(function(e){return t.getTileByID(e)}),r=[],n={},a=0;a<i.length;a++){var s=i[a],l=new o(Math.min(s.sourceMaxZoom,s.coord.z),s.coord.x,s.coord.y,0).id
n[l]||(n[l]=!0,s.querySourceFeatures(r,e))}return r}},{"./tile_coord":106}],100:[function(t,e,i){"use strict"
var r=t("../util/util"),n=t("../util/ajax"),o=t("../util/evented"),a=t("./load_tilejson"),s=t("../util/mapbox").normalizeTileURL,l=t("./tile_bounds"),u=function(t){function e(e,i,n,o){t.call(this),this.id=e,this.dispatcher=n,this.setEventedParent(o),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=r.extend({},i),r.extend(this,r.pick(i,["url","scheme","tileSize"]))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){var t=this
this.fire("dataloading",{dataType:"source"}),a(this._options,function(e,i){e?t.fire("error",e):i&&(r.extend(t,i),t.setBounds(i.bounds),t.fire("data",{dataType:"source",sourceDataType:"metadata"}),t.fire("data",{dataType:"source",sourceDataType:"content"}))})},e.prototype.onAdd=function(t){this.load(),this.map=t},e.prototype.setBounds=function(t){this.bounds=t,t&&(this.tileBounds=new l(t,this.minzoom,this.maxzoom))},e.prototype.serialize=function(){return r.extend({},this._options)},e.prototype.hasTile=function(t){return!this.tileBounds||this.tileBounds.contains(t,this.maxzoom)},e.prototype.loadTile=function(t,e){var i=this,r=s(t.coord.url(this.tiles,null,this.scheme),this.url,this.tileSize)
t.request=n.getImage(r,function(r,n){if(delete t.request,t.aborted)i.state="unloaded",e(null)
else if(r)i.state="errored",e(r)
else if(n){i.map._refreshExpiredTiles&&t.setExpiryData(n),delete n.cacheControl,delete n.expires
var o=i.map.painter.gl
t.texture=i.map.painter.getTileTexture(n.width),t.texture?(o.bindTexture(o.TEXTURE_2D,t.texture),o.texSubImage2D(o.TEXTURE_2D,0,0,0,o.RGBA,o.UNSIGNED_BYTE,n)):(t.texture=o.createTexture(),o.bindTexture(o.TEXTURE_2D,t.texture),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),i.map.painter.extTextureFilterAnisotropic&&o.texParameterf(o.TEXTURE_2D,i.map.painter.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,i.map.painter.extTextureFilterAnisotropicMax),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,n),t.texture.size=n.width),o.generateMipmap(o.TEXTURE_2D),t.state="loaded",e(null)}})},e.prototype.abortTile=function(t){t.request&&(t.request.abort(),delete t.request)},e.prototype.unloadTile=function(t){t.texture&&this.map.painter.saveTileTexture(t.texture)},e}(o)
e.exports=u},{"../util/ajax":196,"../util/evented":205,"../util/mapbox":212,"../util/util":218,"./load_tilejson":97,"./tile_bounds":105}],101:[function(t,e,i){"use strict"
var r=t("../util/ajax"),n=t("../util/evented"),o=t("../util/window"),a=!1,s=null
e.exports.evented=new n,e.exports.registerForPluginAvailability=function(t){return s?t({pluginBlobURL:s,errorCallback:e.exports.errorCallback}):e.exports.evented.once("pluginAvailable",t),t},e.exports.createBlobURL=function(t){return o.URL.createObjectURL(new o.Blob([t.data]),{type:"text/javascript"})},e.exports.clearRTLTextPlugin=function(){a=!1,s=null},e.exports.setRTLTextPlugin=function(t,i){if(a)throw Error("setRTLTextPlugin cannot be called multiple times.")
a=!0,e.exports.errorCallback=i,r.getArrayBuffer(t,function(t,r){t?i(t):r&&(s=e.exports.createBlobURL(r),e.exports.evented.fire("pluginAvailable",{pluginBlobURL:s,errorCallback:i}))})},e.exports.applyArabicShaping=null,e.exports.processBidirectionalText=null},{"../util/ajax":196,"../util/evented":205,"../util/window":199}],102:[function(t,e,i){"use strict"
var r=t("../util/util"),n={vector:t("../source/vector_tile_source"),raster:t("../source/raster_tile_source"),geojson:t("../source/geojson_source"),video:t("../source/video_source"),image:t("../source/image_source"),canvas:t("../source/canvas_source")}
i.create=function(t,e,i,o){var a=new n[e.type](t,e,i,o)
if(a.id!==t)throw Error("Expected Source id to be "+t+" instead of "+a.id)
return r.bindAll(["load","abort","unload","serialize","prepare"],a),a},i.getType=function(t){return n[t]},i.setType=function(t,e){n[t]=e}},{"../source/canvas_source":92,"../source/geojson_source":93,"../source/image_source":96,"../source/raster_tile_source":100,"../source/vector_tile_source":107,"../source/video_source":109,"../util/util":218}],103:[function(t,e,i){"use strict"
function r(t,e,i){var r=i.zoomTo(Math.min(t.z,e))
return{x:(r.column-(t.x+t.w*Math.pow(2,t.z)))*f,y:(r.row-t.y)*f}}function n(t,e){return t%32-e%32}function o(t){return"raster"===t||"image"===t||"video"===t}var a=t("./source"),s=t("./tile"),l=t("../util/evented"),u=t("./tile_coord"),c=t("../util/lru_cache"),p=t("../geo/coordinate"),h=t("../util/util"),f=t("../data/extent"),d=function(t){function e(e,i,r){t.call(this),this.id=e,this.dispatcher=r,this.on("data",function(t){"source"===t.dataType&&"metadata"===t.sourceDataType&&(this._sourceLoaded=!0),this._sourceLoaded&&!this._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(this.reload(),this.transform&&this.update(this.transform))}),this.on("error",function(){this._sourceErrored=!0}),this._source=a.create(e,i,r,this),this._tiles={},this._cache=new c(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._isIdRenderable=this._isIdRenderable.bind(this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.onAdd=function(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null,this._source&&this._source.onAdd&&this._source.onAdd(t)},e.prototype.onRemove=function(t){this._source&&this._source.onRemove&&this._source.onRemove(t)},e.prototype.loaded=function(){var t=this
if(this._sourceErrored)return!0
if(!this._sourceLoaded)return!1
for(var e in t._tiles){var i=t._tiles[e]
if("loaded"!==i.state&&"errored"!==i.state)return!1}return!0},e.prototype.getSource=function(){return this._source},e.prototype.pause=function(){this._paused=!0},e.prototype.resume=function(){if(this._paused){var t=this._shouldReloadOnResume
this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform)}},e.prototype._loadTile=function(t,e){return this._source.loadTile(t,e)},e.prototype._unloadTile=function(t){return this._source.unloadTile?this._source.unloadTile(t):void 0},e.prototype._abortTile=function(t){return this._source.abortTile?this._source.abortTile(t):void 0},e.prototype.serialize=function(){return this._source.serialize()},e.prototype.prepare=function(){return this._sourceLoaded&&this._source.prepare?this._source.prepare():void 0},e.prototype.getIds=function(){return Object.keys(this._tiles).map(Number).sort(n)},e.prototype.getRenderableIds=function(){return this.getIds().filter(this._isIdRenderable)},e.prototype._isIdRenderable=function(t){return this._tiles[t].hasData()&&!this._coveredTiles[t]},e.prototype.reload=function(){var t=this
if(this._paused)return void(this._shouldReloadOnResume=!0)
this._cache.reset()
for(var e in t._tiles)t._reloadTile(e,"reloading")},e.prototype._reloadTile=function(t,e){var i=this._tiles[t]
i&&("loading"!==i.state&&(i.state=e),this._loadTile(i,this._tileLoaded.bind(this,i,t,e)))},e.prototype._tileLoaded=function(t,e,i,r){return r?(t.state="errored",void(404!==r.status&&this._source.fire("error",{tile:t,error:r}))):(t.sourceCache=this,t.timeAdded=(new Date).getTime(),"expired"===i&&(t.refreshedUponExpiration=!0),this._setTileReloadTimer(e,t),this._source.fire("data",{dataType:"source",tile:t,coord:t.coord}),this.map&&(this.map.painter.tileExtentVAO.vao=null),void 0)},e.prototype.getTile=function(t){return this.getTileByID(t.id)},e.prototype.getTileByID=function(t){return this._tiles[t]},e.prototype.getZoom=function(t){return t.zoom+t.scaleZoom(t.tileSize/this._source.tileSize)},e.prototype._findLoadedChildren=function(t,e,i){var r=this,n=!1
for(var o in r._tiles){var a=r._tiles[o]
if(!(i[o]||!a.hasData()||a.coord.z<=t.z||a.coord.z>e)){var s=Math.pow(2,Math.min(a.coord.z,r._source.maxzoom)-Math.min(t.z,r._source.maxzoom))
if(Math.floor(a.coord.x/s)===t.x&&Math.floor(a.coord.y/s)===t.y)for(i[o]=!0,n=!0;a&&a.coord.z-1>t.z;){var l=a.coord.parent(r._source.maxzoom).id
a=r._tiles[l],a&&a.hasData()&&(delete i[o],i[l]=!0)}}}return n},e.prototype.findLoadedParent=function(t,e,i){for(var r=this,n=t.z-1;n>=e;n--){t=t.parent(r._source.maxzoom)
var o=r._tiles[t.id]
if(o&&o.hasData())return i[t.id]=!0,o
if(r._cache.has(t.id))return i[t.id]=!0,r._cache.getWithoutRemoving(t.id)}},e.prototype.updateCacheSize=function(t){var e=Math.ceil(t.width/t.tileSize)+1,i=Math.ceil(t.height/t.tileSize)+1,r=e*i,n=Math.floor(5*r),o="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,n):n
this._cache.setMaxSize(o)},e.prototype.update=function(t){var i=this
if(this.transform=t,this._sourceLoaded&&!this._paused){var r,n,a,s
this.updateCacheSize(t)
var l=(this._source.roundZoom?Math.round:Math.floor)(this.getZoom(t)),c=Math.max(l-e.maxOverzooming,this._source.minzoom),p=Math.max(l+e.maxUnderzooming,this._source.minzoom),f={}
this._coveredTiles={}
var d
for(this.used?this._source.coord?d=t.getVisibleWrappedCoordinates(this._source.coord):(d=t.coveringTiles({tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled}),this._source.hasTile&&(d=d.filter(function(t){return i._source.hasTile(t)}))):d=[],r=0;r<d.length;r++)n=d[r],a=i._addTile(n),f[n.id]=!0,a.hasData()||i._findLoadedChildren(n,p,f)||(s=i.findLoadedParent(n,c,f))&&i._addTile(s.coord)
var m={}
if(o(this._source.type))for(var y=Object.keys(f),_=0;_<y.length;_++){var v=y[_]
n=u.fromID(v),a=i._tiles[v],a&&(void 0===a.fadeEndTime||a.fadeEndTime>=Date.now())&&(i._findLoadedChildren(n,p,f)&&(f[v]=!0),(s=i.findLoadedParent(n,c,m))&&i._addTile(s.coord))}var g
for(g in m)f[g]||(i._coveredTiles[g]=!0)
for(g in m)f[g]=!0
var x=h.keysDifference(this._tiles,f)
for(r=0;r<x.length;r++)i._removeTile(+x[r])}},e.prototype._addTile=function(t){var e=this._tiles[t.id]
if(e)return e;(e=this._cache.get(t.id))&&(e.redoPlacement(this._source),this._cacheTimers[t.id]&&(clearTimeout(this._cacheTimers[t.id]),this._cacheTimers[t.id]=void 0,this._setTileReloadTimer(t.id,e)))
var i=!!e
if(!i){var r=t.z,n=r>this._source.maxzoom?Math.pow(2,r-this._source.maxzoom):1
e=new s(t,this._source.tileSize*n,this._source.maxzoom),this._loadTile(e,this._tileLoaded.bind(this,e,t.id,e.state))}return e.uses++,this._tiles[t.id]=e,i||this._source.fire("dataloading",{tile:e,coord:e.coord,dataType:"source"}),e},e.prototype._setTileReloadTimer=function(t,e){var i=this,r=e.getExpiryTimeout()
r&&(this._timers[t]=setTimeout(function(){i._reloadTile(t,"expired"),i._timers[t]=void 0},r))},e.prototype._setCacheInvalidationTimer=function(t,e){var i=this,r=e.getExpiryTimeout()
r&&(this._cacheTimers[t]=setTimeout(function(){i._cache.remove(t),i._cacheTimers[t]=void 0},r))},e.prototype._removeTile=function(t){var e=this._tiles[t]
if(e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),this._timers[t]=void 0),!(e.uses>0)))if(e.stopPlacementThrottler(),e.hasData()){var i=e.coord.wrapped().id
this._cache.add(i,e),this._setCacheInvalidationTimer(i,e)}else e.aborted=!0,this._abortTile(e),this._unloadTile(e)},e.prototype.clearTiles=function(){var t=this
this._shouldReloadOnResume=!1,this._paused=!1
for(var e in t._tiles)t._removeTile(e)
this._cache.reset()},e.prototype.tilesIn=function(t){for(var e=this,i=[],n=this.getIds(),o=1/0,a=1/0,s=-1/0,l=-1/0,c=t[0].zoom,h=0;h<t.length;h++){var d=t[h]
o=Math.min(o,d.column),a=Math.min(a,d.row),s=Math.max(s,d.column),l=Math.max(l,d.row)}for(var m=0;m<n.length;m++){var y=e._tiles[n[m]],_=u.fromID(n[m]),v=[r(_,y.sourceMaxZoom,new p(o,a,c)),r(_,y.sourceMaxZoom,new p(s,l,c))]
if(v[0].x<f&&v[0].y<f&&v[1].x>=0&&v[1].y>=0){for(var g=[],x=0;x<t.length;x++)g.push(r(_,y.sourceMaxZoom,t[x]))
i.push({tile:y,coord:_,queryGeometry:[g],scale:Math.pow(2,e.transform.zoom-y.coord.z)})}}return i},e.prototype.redoPlacement=function(){for(var t=this,e=this.getIds(),i=0;i<e.length;i++)t.getTileByID(e[i]).redoPlacement(t._source)},e.prototype.getVisibleCoordinates=function(){for(var t=this,e=this.getRenderableIds().map(u.fromID),i=0,r=e;i<r.length;i+=1){var n=r[i]
n.posMatrix=t.transform.calculatePosMatrix(n,t._source.maxzoom)}return e},e}(l)
d.maxOverzooming=10,d.maxUnderzooming=3,e.exports=d},{"../data/extent":64,"../geo/coordinate":71,"../util/evented":205,"../util/lru_cache":211,"../util/util":218,"./source":102,"./tile":104,"./tile_coord":106}],104:[function(t,e,i){"use strict"
var r=t("../util/util"),n=t("../data/bucket"),o=t("../data/feature_index"),a=t("vector-tile"),s=t("pbf"),l=t("../util/vectortile_to_geojson"),u=t("../style-spec/feature_filter"),c=t("../symbol/collision_tile"),p=t("../symbol/collision_box"),h=t("../util/throttler"),f=3e4,d=function(t,e,i){this.coord=t,this.uid=r.uniqueId(),this.uses=0,this.tileSize=e,this.sourceMaxZoom=i,this.buckets={},this.expirationTime=null,this.expiredRequestCount=0,this.state="loading",this.placementThrottler=new h(300,this._immediateRedoPlacement.bind(this))}
d.prototype.registerFadeDuration=function(t,e){var i=e+this.timeAdded
i<Date.now()||this.fadeEndTime&&i<this.fadeEndTime||(this.fadeEndTime=i,t.set(this.fadeEndTime-Date.now()))},d.prototype.loadVectorData=function(t,e){this.hasData()&&this.unloadVectorData(),this.state="loaded",t&&(t.rawTileData&&(this.rawTileData=t.rawTileData),this.collisionBoxArray=new p(t.collisionBoxArray),this.collisionTile=c.deserialize(t.collisionTile,this.collisionBoxArray),this.featureIndex=o.deserialize(t.featureIndex,this.rawTileData,this.collisionTile),this.buckets=n.deserialize(t.buckets,e.style))},d.prototype.reloadSymbolData=function(t,e){var i=this
if("unloaded"!==this.state){this.collisionTile=c.deserialize(t.collisionTile,this.collisionBoxArray),this.featureIndex&&this.featureIndex.setCollisionTile(this.collisionTile)
for(var o in i.buckets){var a=i.buckets[o]
"symbol"===a.layers[0].type&&(a.destroy(),delete i.buckets[o])}r.extend(this.buckets,n.deserialize(t.buckets,e))}},d.prototype.unloadVectorData=function(){var t=this
for(var e in t.buckets)t.buckets[e].destroy()
this.buckets={},this.collisionBoxArray=null,this.collisionTile=null,this.featureIndex=null,this.state="unloaded"},d.prototype.redoPlacement=function(t){if("vector"===t.type||"geojson"===t.type){if("loaded"!==this.state)return void(this.redoWhenDone=!0)
if(this.collisionTile){var e=t.map.transform.cameraToTileDistance(this)
if(this.angle===t.map.transform.angle&&this.pitch===t.map.transform.pitch&&this.cameraToCenterDistance===t.map.transform.cameraToCenterDistance&&this.showCollisionBoxes===t.map.showCollisionBoxes){if(this.cameraToTileDistance===e)return
if(this.pitch<25)return void(this.cameraToTileDistance=e)}this.angle=t.map.transform.angle,this.pitch=t.map.transform.pitch,this.cameraToCenterDistance=t.map.transform.cameraToCenterDistance,this.cameraToTileDistance=e,this.showCollisionBoxes=t.map.showCollisionBoxes,this.placementSource=t,this.state="reloading",this.placementThrottler.invoke()}}},d.prototype._immediateRedoPlacement=function(){var t=this
this.placementSource.dispatcher.send("redoPlacement",{type:this.placementSource.type,uid:this.uid,source:this.placementSource.id,angle:this.angle,pitch:this.pitch,cameraToCenterDistance:this.cameraToCenterDistance,cameraToTileDistance:this.cameraToTileDistance,showCollisionBoxes:this.showCollisionBoxes},function(e,i){t.state="loaded",t.reloadSymbolData(i,t.placementSource.map.style),t.placementSource.fire("data",{tile:t,coord:t.coord,dataType:"source"}),t.placementSource.map&&(t.placementSource.map.painter.tileExtentVAO.vao=null),t.redoWhenDone&&(t.redoWhenDone=!1,t._immediateRedoPlacement())},this.workerID)},d.prototype.getBucket=function(t){return this.buckets[t.id]},d.prototype.querySourceFeatures=function(t,e){var i=this
if(this.rawTileData){this.vtLayers||(this.vtLayers=new a.VectorTile(new s(this.rawTileData)).layers)
var r=e?e.sourceLayer:"",n=this.vtLayers._geojsonTileLayer||this.vtLayers[r]
if(n)for(var o=u(e&&e.filter),c={z:this.coord.z,x:this.coord.x,y:this.coord.y},p=0;p<n.length;p++){var h=n.feature(p)
if(o(h)){var f=new l(h,i.coord.z,i.coord.x,i.coord.y)
f.tile=c,t.push(f)}}}},d.prototype.hasData=function(){return"loaded"===this.state||"reloading"===this.state||"expired"===this.state},d.prototype.setExpiryData=function(t){var e=this.expirationTime
if(t.cacheControl){var i=r.parseCacheControl(t.cacheControl)
i["max-age"]&&(this.expirationTime=Date.now()+1e3*i["max-age"])}else t.expires&&(this.expirationTime=new Date(t.expires).getTime())
if(this.expirationTime){var n=Date.now(),o=!1
if(this.expirationTime>n)o=!1
else if(e)if(this.expirationTime<e)o=!0
else{var a=this.expirationTime-e
a?this.expirationTime=n+Math.max(a,f):o=!0}else o=!0
o?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0}},d.prototype.getExpiryTimeout=function(){return this.expirationTime?this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1):void 0},d.prototype.stopPlacementThrottler=function(){this.placementThrottler.stop(),"reloading"===this.state&&(this.state="loaded")},e.exports=d},{"../data/bucket":55,"../data/feature_index":65,"../style-spec/feature_filter":115,"../symbol/collision_box":163,"../symbol/collision_tile":165,"../util/throttler":216,"../util/util":218,"../util/vectortile_to_geojson":219,pbf:35,"vector-tile":44}],105:[function(t,e,i){"use strict"
var r=t("../geo/lng_lat_bounds"),n=t("../util/util").clamp,o=function(t,e,i){this.bounds=r.convert(this.validateBounds(t)),this.minzoom=e||0,this.maxzoom=i||24}
o.prototype.validateBounds=function(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]},o.prototype.contains=function(t,e){var i=e?Math.min(t.z,e):t.z,r={minX:Math.floor(this.lngX(this.bounds.getWest(),i)),minY:Math.floor(this.latY(this.bounds.getNorth(),i)),maxX:Math.ceil(this.lngX(this.bounds.getEast(),i)),maxY:Math.ceil(this.latY(this.bounds.getSouth(),i))}
return t.x>=r.minX&&t.x<r.maxX&&t.y>=r.minY&&t.y<r.maxY},o.prototype.lngX=function(t,e){return(t+180)*(Math.pow(2,e)/360)},o.prototype.latY=function(t,e){var i=n(Math.sin(Math.PI/180*t),-.9999,.9999),r=Math.pow(2,e)/(2*Math.PI)
return Math.pow(2,e-1)+.5*Math.log((1+i)/(1-i))*-r},e.exports=o},{"../geo/lng_lat_bounds":73,"../util/util":218}],106:[function(t,e,i){"use strict"
function r(t,e){if(t.row>e.row){var i=t
t=e,e=i}return{x0:t.column,y0:t.row,x1:e.column,y1:e.row,dx:e.column-t.column,dy:e.row-t.row}}function n(t,e,i,r,n){var o=Math.max(i,Math.floor(e.y0)),a=Math.min(r,Math.ceil(e.y1))
if(t.x0===e.x0&&t.y0===e.y0?t.x0+e.dy/t.dy*t.dx<e.x1:t.x1-e.dy/t.dy*t.dx<e.x0){var s=t
t=e,e=s}for(var l=t.dx/t.dy,u=e.dx/e.dy,c=t.dx>0,p=e.dx<0,h=o;a>h;h++){var f=l*Math.max(0,Math.min(t.dy,h+c-t.y0))+t.x0,d=u*Math.max(0,Math.min(e.dy,h+p-e.y0))+e.x0
n(Math.floor(d),Math.ceil(f),h)}}function o(t,e,i,o,a,s){var l,u=r(t,e),c=r(e,i),p=r(i,t)
u.dy>c.dy&&(l=u,u=c,c=l),u.dy>p.dy&&(l=u,u=p,p=l),c.dy>p.dy&&(l=c,c=p,p=l),u.dy&&n(p,u,o,a,s),c.dy&&n(p,c,o,a,s)}function a(t,e,i){for(var r,n="",o=t;o>0;o--)r=1<<o-1,n+=(e&r?1:0)+(i&r?2:0)
return n}var s=t("@mapbox/whoots-js"),l=t("../geo/coordinate"),u=function(t,e,i,r){(void 0===r||isNaN(r))&&(r=0),this.z=+t,this.x=+e,this.y=+i,this.w=+r,(r*=2)<0&&(r=-1*r-1)
var n=1<<this.z
this.id=32*(n*n*r+n*this.y+this.x)+this.z,this.posMatrix=null}
u.prototype.toString=function(){return this.z+"/"+this.x+"/"+this.y},u.prototype.toCoordinate=function(t){var e=Math.min(this.z,void 0===t?this.z:t),i=Math.pow(2,e),r=this.y,n=this.x+i*this.w
return new l(n,r,e)},u.prototype.url=function(t,e,i){var r=s.getTileBBox(this.x,this.y,this.z),n=a(this.z,this.x,this.y)
return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",Math.min(this.z,e||this.z)+"").replace("{x}",this.x+"").replace("{y}",("tms"===i?Math.pow(2,this.z)-this.y-1:this.y)+"").replace("{quadkey}",n).replace("{bbox-epsg-3857}",r)},u.prototype.parent=function(t){return 0===this.z?null:this.z>t?new u(this.z-1,this.x,this.y,this.w):new u(this.z-1,Math.floor(this.x/2),Math.floor(this.y/2),this.w)},u.prototype.wrapped=function(){return new u(this.z,this.x,this.y,0)},u.prototype.children=function(t){if(this.z>=t)return[new u(this.z+1,this.x,this.y,this.w)]
var e=this.z+1,i=2*this.x,r=2*this.y
return[new u(e,i,r,this.w),new u(e,i+1,r,this.w),new u(e,i,r+1,this.w),new u(e,i+1,r+1,this.w)]},u.cover=function(t,e,i,r){function n(t,e,n){var o,l,c,p
if(n>=0&&a>=n)for(o=t;e>o;o++)l=Math.floor(o/a),c=(o%a+a)%a,0!==l&&!0!==r||(p=new u(i,c,n,l),s[p.id]=p)}void 0===r&&(r=!0)
var a=1<<t,s={}
return o(e[0],e[1],e[2],0,a,n),o(e[2],e[3],e[0],0,a,n),Object.keys(s).map(function(t){return s[t]})},u.fromID=function(t){var e=t%32,i=1<<e,r=(t-e)/32,n=r%i,o=(r-n)/i%i,a=Math.floor(r/(i*i))
return a%2!=0&&(a=-1*a-1),a/=2,new u(e,n,o,a)},e.exports=u},{"../geo/coordinate":71,"@mapbox/whoots-js":5}],107:[function(t,e,i){"use strict"
var r=t("../util/evented"),n=t("../util/util"),o=t("./load_tilejson"),a=t("../util/mapbox").normalizeTileURL,s=t("./tile_bounds"),l=function(t){function e(e,i,r,o){if(t.call(this),this.id=e,this.dispatcher=r,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,n.extend(this,n.pick(i,["url","scheme","tileSize"])),this._options=n.extend({type:"vector"},i),512!==this.tileSize)throw Error("vector tile sources must have a tileSize of 512")
this.setEventedParent(o)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){var t=this
this.fire("dataloading",{dataType:"source"}),o(this._options,function(e,i){e?t.fire("error",e):i&&(n.extend(t,i),t.setBounds(i.bounds),t.fire("data",{dataType:"source",sourceDataType:"metadata"}),t.fire("data",{dataType:"source",sourceDataType:"content"}))})},e.prototype.setBounds=function(t){this.bounds=t,t&&(this.tileBounds=new s(t,this.minzoom,this.maxzoom))},e.prototype.hasTile=function(t){return!this.tileBounds||this.tileBounds.contains(t,this.maxzoom)},e.prototype.onAdd=function(t){this.load(),this.map=t},e.prototype.serialize=function(){return n.extend({},this._options)},e.prototype.loadTile=function(t,e){function i(i,r){if(!t.aborted){if(i)return e(i)
this.map._refreshExpiredTiles&&t.setExpiryData(r),t.loadVectorData(r,this.map.painter),t.redoWhenDone&&(t.redoWhenDone=!1,t.redoPlacement(this)),e(null),t.reloadCallback&&(this.loadTile(t,t.reloadCallback),t.reloadCallback=null)}}var r=t.coord.z>this.maxzoom?Math.pow(2,t.coord.z-this.maxzoom):1,n={url:a(t.coord.url(this.tiles,this.maxzoom,this.scheme),this.url),uid:t.uid,coord:t.coord,zoom:t.coord.z,tileSize:this.tileSize*r,type:this.type,source:this.id,overscaling:r,angle:this.map.transform.angle,pitch:this.map.transform.pitch,cameraToCenterDistance:this.map.transform.cameraToCenterDistance,cameraToTileDistance:this.map.transform.cameraToTileDistance(t),showCollisionBoxes:this.map.showCollisionBoxes}
t.workerID&&"expired"!==t.state?"loading"===t.state?t.reloadCallback=e:this.dispatcher.send("reloadTile",n,i.bind(this),t.workerID):t.workerID=this.dispatcher.send("loadTile",n,i.bind(this))},e.prototype.abortTile=function(t){this.dispatcher.send("abortTile",{uid:t.uid,type:this.type,source:this.id},null,t.workerID)},e.prototype.unloadTile=function(t){t.unloadVectorData(),this.dispatcher.send("removeTile",{uid:t.uid,type:this.type,source:this.id},null,t.workerID)},e}(r)
e.exports=l},{"../util/evented":205,"../util/mapbox":212,"../util/util":218,"./load_tilejson":97,"./tile_bounds":105}],108:[function(t,e,i){"use strict"
function r(t,e){var i=n.getArrayBuffer(t.url,function(t,i){t?e(t):i&&e(null,{vectorTile:new o.VectorTile(new a(i.data)),rawData:i.data,cacheControl:i.cacheControl,expires:i.expires})})
return function(){i.abort()}}var n=t("../util/ajax"),o=t("vector-tile"),a=t("pbf"),s=t("./worker_tile"),l=t("../util/util"),u=function(t,e,i){this.actor=t,this.layerIndex=e,this.loadVectorData=i||r,this.loading={},this.loaded={}}
u.prototype.loadTile=function(t,e){var i=this,r=t.source,n=t.uid
this.loading[r]||(this.loading[r]={})
var o=this.loading[r][n]=new s(t)
o.abort=this.loadVectorData(t,function(t,a){if(delete i.loading[r][n],t||!a)return e(t)
var s=a.rawData,u={}
a.expires&&(u.expires=a.expires),a.cacheControl&&(u.cacheControl=a.cacheControl),o.vectorTile=a.vectorTile,o.parse(a.vectorTile,i.layerIndex,i.actor,function(t,i,r){return t||!i?e(t):void e(null,l.extend({rawTileData:s},i,u),r)}),i.loaded[r]=i.loaded[r]||{},i.loaded[r][n]=o})},u.prototype.reloadTile=function(t,e){function i(t,i){if(this.reloadCallback){var r=this.reloadCallback
delete this.reloadCallback,this.parse(this.vectorTile,o.layerIndex,o.actor,r)}e(t,i)}var r=this.loaded[t.source],n=t.uid,o=this
if(r&&r[n]){var a=r[n]
"parsing"===a.status?a.reloadCallback=e:"done"===a.status&&a.parse(a.vectorTile,this.layerIndex,this.actor,i.bind(a))}},u.prototype.abortTile=function(t){var e=this.loading[t.source],i=t.uid
e&&e[i]&&e[i].abort&&(e[i].abort(),delete e[i])},u.prototype.removeTile=function(t){var e=this.loaded[t.source],i=t.uid
e&&e[i]&&delete e[i]},u.prototype.redoPlacement=function(t,e){var i=this.loaded[t.source],r=this.loading[t.source],n=t.uid
if(i&&i[n]){var o=i[n],a=o.redoPlacement(t.angle,t.pitch,t.cameraToCenterDistance,t.cameraToTileDistance,t.showCollisionBoxes)
a.result&&e(null,a.result,a.transferables)}else r&&r[n]&&(r[n].angle=t.angle)},e.exports=u},{"../util/ajax":196,"../util/util":218,"./worker_tile":111,pbf:35,"vector-tile":44}],109:[function(t,e,i){"use strict"
var r=t("../util/ajax"),n=t("./image_source"),o=function(t){function e(e,i,r,n){t.call(this,e,i,r,n),this.roundZoom=!0,this.type="video",this.options=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){var t=this,e=this.options
this.urls=e.urls,r.getVideo(e.urls,function(e,i){if(e)t.fire("error",{error:e})
else if(i){t.video=i,t.video.loop=!0
var r
t.video.addEventListener("playing",function(){r=t.map.style.animationLoop.set(1/0),t.map._rerender()}),t.video.addEventListener("pause",function(){t.map.style.animationLoop.cancel(r)}),t.map&&t.video.play(),t._finishLoading()}})},e.prototype.getVideo=function(){return this.video},e.prototype.onAdd=function(t){this.map||(this.load(),this.map=t,this.video&&(this.video.play(),this.setCoordinates(this.coordinates)))},e.prototype.prepare=function(){0===Object.keys(this.tiles).length||this.video.readyState<2||this._prepareImage(this.map.painter.gl,this.video)},e.prototype.serialize=function(){return{type:"video",urls:this.urls,coordinates:this.coordinates}},e}(n)
e.exports=o},{"../util/ajax":196,"./image_source":96}],110:[function(t,e,i){"use strict"
var r=t("../util/actor"),n=t("../style/style_layer_index"),o=t("./vector_tile_worker_source"),a=t("./geojson_worker_source"),s=t("./rtl_text_plugin"),l=function(t){var e=this
this.self=t,this.actor=new r(t,this),this.layerIndexes={},this.workerSourceTypes={vector:o,geojson:a},this.workerSources={},this.self.registerWorkerSource=function(t,i){if(e.workerSourceTypes[t])throw Error('Worker source with name "'+t+'" already registered.')
e.workerSourceTypes[t]=i},this.self.registerRTLTextPlugin=function(t){if(s.applyArabicShaping||s.processBidirectionalText)throw Error("RTL text plugin already registered.")
s.applyArabicShaping=t.applyArabicShaping,s.processBidirectionalText=t.processBidirectionalText}}
l.prototype.setLayers=function(t,e){this.getLayerIndex(t).replace(e)},l.prototype.updateLayers=function(t,e){this.getLayerIndex(t).update(e.layers,e.removedIds,e.symbolOrder)},l.prototype.loadTile=function(t,e,i){this.getWorkerSource(t,e.type).loadTile(e,i)},l.prototype.reloadTile=function(t,e,i){this.getWorkerSource(t,e.type).reloadTile(e,i)},l.prototype.abortTile=function(t,e){this.getWorkerSource(t,e.type).abortTile(e)},l.prototype.removeTile=function(t,e){this.getWorkerSource(t,e.type).removeTile(e)},l.prototype.removeSource=function(t,e){var i=this.getWorkerSource(t,e.type)
void 0!==i.removeSource&&i.removeSource(e)},l.prototype.redoPlacement=function(t,e,i){this.getWorkerSource(t,e.type).redoPlacement(e,i)},l.prototype.loadWorkerSource=function(t,e,i){try{this.self.importScripts(e.url),i()}catch(t){i(t)}},l.prototype.loadRTLTextPlugin=function(t,e,i){try{s.applyArabicShaping||s.processBidirectionalText||(this.self.importScripts(e),s.applyArabicShaping&&s.processBidirectionalText||i(Error("RTL Text Plugin failed to import scripts from "+e)))}catch(t){i(t)}},l.prototype.getLayerIndex=function(t){var e=this.layerIndexes[t]
return e||(e=this.layerIndexes[t]=new n),e},l.prototype.getWorkerSource=function(t,e){var i=this
if(this.workerSources[t]||(this.workerSources[t]={}),!this.workerSources[t][e]){var r={send:function(e,r,n,o){i.actor.send(e,r,n,o,t)}}
this.workerSources[t][e]=new this.workerSourceTypes[e](r,this.getLayerIndex(t))}return this.workerSources[t][e]},e.exports=function(t){return new l(t)}},{"../style/style_layer_index":157,"../util/actor":195,"./geojson_worker_source":94,"./rtl_text_plugin":101,"./vector_tile_worker_source":108}],111:[function(t,e,i){"use strict"
function r(t,e){for(var i=0,r=t.layers;i<r.length;i+=1)r[i].recalculate(e)}function n(t,e){return t.filter(function(t){return!t.isEmpty()}).map(function(t){return t.serialize(e)})}var o=t("../data/feature_index"),a=t("../symbol/collision_tile"),s=t("../symbol/collision_box"),l=t("../util/dictionary_coder"),u=t("../util/util"),c=function(t){this.coord=t.coord,this.uid=t.uid,this.zoom=t.zoom,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=t.overscaling,this.angle=t.angle,this.pitch=t.pitch,this.cameraToCenterDistance=t.cameraToCenterDistance,this.cameraToTileDistance=t.cameraToTileDistance,this.showCollisionBoxes=t.showCollisionBoxes}
c.prototype.parse=function(t,e,i,c){var p=this
this.status="parsing",this.data=t,this.collisionBoxArray=new s
var h=new l(Object.keys(t.layers).sort()),f=new o(this.coord,this.overscaling)
f.bucketLayerIDs=[]
var d={},m={featureIndex:f,iconDependencies:{},glyphDependencies:{}},y=e.familiesBySource[this.source]
for(var _ in y){var v=t.layers[_]
if(v){1===v.version&&u.warnOnce('Vector tile source "'+p.source+'" layer "'+_+'" does not use vector tile spec v2 and therefore may have some rendering errors.')
for(var g=h.encode(_),x=[],b=0;b<v.length;b++){var w=v.feature(b)
x.push({feature:w,index:b,sourceLayerIndex:g})}for(var T=0,z=y[_];T<z.length;T+=1){var E=z[T],S=E[0]
if(!(S.minzoom&&p.zoom<S.minzoom||S.maxzoom&&p.zoom>=S.maxzoom||S.layout&&"none"===S.layout.visibility)){for(var L=0,M=E;L<M.length;L+=1)M[L].recalculate(p.zoom);(d[S.id]=S.createBucket({index:f.bucketLayerIDs.length,layers:E,zoom:p.zoom,overscaling:p.overscaling,collisionBoxArray:p.collisionBoxArray})).populate(x,m),f.bucketLayerIDs.push(E.map(function(t){return t.id}))}}}}var A=function(t){p.status="done",f.paintPropertyStatistics={}
for(var e in d)u.extend(f.paintPropertyStatistics,d[e].getPaintPropertyStatistics())
var i=[]
c(null,{buckets:n(u.values(d),i),featureIndex:f.serialize(i),collisionTile:t.serialize(i),collisionBoxArray:p.collisionBoxArray.serialize()},i)}
this.symbolBuckets=[]
for(var C=e.symbolOrder.length-1;C>=0;C--){var P=d[e.symbolOrder[C]]
P&&p.symbolBuckets.push(P)}if(0===this.symbolBuckets.length)return A(new a(this.angle,this.pitch,this.cameraToCenterDistance,this.cameraToTileDistance,this.collisionBoxArray))
var k=0,I=Object.keys(m.iconDependencies),D=u.mapObject(m.glyphDependencies,function(t){return Object.keys(t).map(Number)}),R=function(t){if(t)return c(t)
if(2===++k){for(var e=new a(p.angle,p.pitch,p.cameraToCenterDistance,p.cameraToTileDistance,p.collisionBoxArray),i=0,n=p.symbolBuckets;i<n.length;i+=1){var o=n[i]
r(o,p.zoom),o.prepare(D,I),o.place(e,p.showCollisionBoxes)}A(e)}}
Object.keys(D).length?i.send("getGlyphs",{uid:this.uid,stacks:D},function(t,e){D=e,R(t)}):R(),I.length?i.send("getIcons",{icons:I},function(t,e){I=e,R(t)}):R()},c.prototype.redoPlacement=function(t,e,i,o,s){var l=this
if(this.angle=t,this.pitch=e,this.cameraToCenterDistance=i,this.cameraToTileDistance=o,"done"!==this.status)return{}
for(var u=new a(this.angle,this.pitch,this.cameraToCenterDistance,this.cameraToTileDistance,this.collisionBoxArray),c=0,p=l.symbolBuckets;c<p.length;c+=1){var h=p[c]
r(h,l.zoom),h.place(u,s)}var f=[]
return{result:{buckets:n(this.symbolBuckets,f),collisionTile:u.serialize(f)},transferables:f}},e.exports=c},{"../data/feature_index":65,"../symbol/collision_box":163,"../symbol/collision_tile":165,"../util/dictionary_coder":202,"../util/util":218}],112:[function(t,e,i){"use strict"
function r(t,e){var i={}
for(var r in t)"ref"!==r&&(i[r]=t[r])
return o.forEach(function(t){t in e&&(i[t]=e[t])}),i}function n(t){t=t.slice()
for(var e=Object.create(null),i=0;i<t.length;i++)e[t[i].id]=t[i]
for(var n=0;n<t.length;n++)"ref"in t[n]&&(t[n]=r(t[n],e[t[n].ref]))
return t}var o=t("./util/ref_properties")
e.exports=n},{"./util/ref_properties":125}],113:[function(t,e,i){"use strict"
function r(t,e,i,r){t=t||{},e=e||{}
var n
for(n in t)t.hasOwnProperty(n)&&(e.hasOwnProperty(n)||(i.push({command:c.removeSource,args:[n]}),r[n]=!0))
for(n in e)e.hasOwnProperty(n)&&(t.hasOwnProperty(n)?u(t[n],e[n])||(i.push({command:c.removeSource,args:[n]}),i.push({command:c.addSource,args:[n,e[n]]}),r[n]=!0):i.push({command:c.addSource,args:[n,e[n]]}))}function n(t,e,i,r,n,o){t=t||{},e=e||{}
var a
for(a in t)t.hasOwnProperty(a)&&(u(t[a],e[a])||i.push({command:o,args:[r,a,e[a],n]}))
for(a in e)e.hasOwnProperty(a)&&!t.hasOwnProperty(a)&&(u(t[a],e[a])||i.push({command:o,args:[r,a,e[a],n]}))}function o(t){return t.id}function a(t,e){return t[e.id]=e,t}function s(t,e,i){t=t||[],e=e||[]
var r,s,l,p,h,f,d,m=t.map(o),y=e.map(o),_=t.reduce(a,{}),v=e.reduce(a,{}),g=m.slice(),x=Object.create(null)
for(r=0,s=0;r<m.length;r++)l=m[r],v.hasOwnProperty(l)?s++:(i.push({command:c.removeLayer,args:[l]}),g.splice(g.indexOf(l,s),1))
for(r=0,s=0;r<y.length;r++)l=y[y.length-1-r],g[g.length-1-r]!==l&&(_.hasOwnProperty(l)?(i.push({command:c.removeLayer,args:[l]}),g.splice(g.lastIndexOf(l,g.length-s),1)):s++,f=g[g.length-r],i.push({command:c.addLayer,args:[v[l],f]}),g.splice(g.length-r,0,l),x[l]=!0)
for(r=0;r<y.length;r++)if(l=y[r],p=_[l],h=v[l],!x[l]&&!u(p,h))if(u(p.source,h.source)&&u(p["source-layer"],h["source-layer"])&&u(p.type,h.type)){n(p.layout,h.layout,i,l,null,c.setLayoutProperty),n(p.paint,h.paint,i,l,null,c.setPaintProperty),u(p.filter,h.filter)||i.push({command:c.setFilter,args:[l,h.filter]}),u(p.minzoom,h.minzoom)&&u(p.maxzoom,h.maxzoom)||i.push({command:c.setLayerZoomRange,args:[l,h.minzoom,h.maxzoom]})
for(d in p)p.hasOwnProperty(d)&&"layout"!==d&&"paint"!==d&&"filter"!==d&&"metadata"!==d&&"minzoom"!==d&&"maxzoom"!==d&&(0===d.indexOf("paint.")?n(p[d],h[d],i,l,d.slice(6),c.setPaintProperty):u(p[d],h[d])||i.push({command:c.setLayerProperty,args:[l,d,h[d]]}))
for(d in h)h.hasOwnProperty(d)&&!p.hasOwnProperty(d)&&"layout"!==d&&"paint"!==d&&"filter"!==d&&"metadata"!==d&&"minzoom"!==d&&"maxzoom"!==d&&(0===d.indexOf("paint.")?n(p[d],h[d],i,l,d.slice(6),c.setPaintProperty):u(p[d],h[d])||i.push({command:c.setLayerProperty,args:[l,d,h[d]]}))}else i.push({command:c.removeLayer,args:[l]}),f=g[g.lastIndexOf(l)+1],i.push({command:c.addLayer,args:[h,f]})}function l(t,e){if(!t)return[{command:c.setStyle,args:[e]}]
var i=[]
try{if(!u(t.version,e.version))return[{command:c.setStyle,args:[e]}]
u(t.center,e.center)||i.push({command:c.setCenter,args:[e.center]}),u(t.zoom,e.zoom)||i.push({command:c.setZoom,args:[e.zoom]}),u(t.bearing,e.bearing)||i.push({command:c.setBearing,args:[e.bearing]}),u(t.pitch,e.pitch)||i.push({command:c.setPitch,args:[e.pitch]}),u(t.sprite,e.sprite)||i.push({command:c.setSprite,args:[e.sprite]}),u(t.glyphs,e.glyphs)||i.push({command:c.setGlyphs,args:[e.glyphs]}),u(t.transition,e.transition)||i.push({command:c.setTransition,args:[e.transition]}),u(t.light,e.light)||i.push({command:c.setLight,args:[e.light]})
var n={},o=[]
r(t.sources,e.sources,o,n)
var a=[]
t.layers&&t.layers.forEach(function(t){n[t.source]?i.push({command:c.removeLayer,args:[t.id]}):a.push(t)}),i=i.concat(o),s(a,e.layers,i)}catch(t){console.warn("Unable to compute style diff:",t),i=[{command:c.setStyle,args:[e]}]}return i}var u=t("lodash.isequal"),c={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"}
e.exports=l,e.exports.operations=c},{"lodash.isequal":30}],114:[function(t,e,i){"use strict"
function r(t,e){for(var i=[],r=arguments.length-2;r-- >0;)i[r]=arguments[r+2]
this.message=(t?t+": ":"")+n.apply(n,i),null!==e&&void 0!==e&&e.__line__&&(this.line=e.__line__)}var n=t("util").format
e.exports=r},{util:43}],115:[function(t,e,i){"use strict"
function r(t){return Function("f","var p = (f && f.properties || {}); return "+n(t))}function n(t){if(!t)return"true"
var e=t[0]
return t.length<=1?"any"===e?"false":"true":"("+("=="===e?a(t[1],t[2],"===",!1):"!="===e?a(t[1],t[2],"!==",!1):"<"===e||">"===e||"<="===e||">="===e?a(t[1],t[2],e,!0):"any"===e?s(t.slice(1),"||"):"all"===e?s(t.slice(1),"&&"):"none"===e?c(s(t.slice(1),"||")):"in"===e?l(t[1],t.slice(2)):"!in"===e?c(l(t[1],t.slice(2))):"has"===e?u(t[1]):"!has"===e?c(u(t[1])):"true")+")"}function o(t){return"$type"===t?"f.type":"$id"===t?"f.id":"p["+JSON.stringify(t)+"]"}function a(t,e,i,r){var n=o(t),a="$type"===t?h.indexOf(e):JSON.stringify(e)
return(r?"typeof "+n+"=== typeof "+a+"&&":"")+n+i+a}function s(t,e){return t.map(n).join(e)}function l(t,e){"$type"===t&&(e=e.map(function(t){return h.indexOf(t)}))
var i=JSON.stringify(e.sort(p)),r=o(t)
return e.length<=200?i+".indexOf("+r+") !== -1":"function(v, a, i, j) {while (i <= j) { var m = (i + j) >> 1;    if (a[m] === v) return true; if (a[m] > v) j = m - 1; else i = m + 1;}return false; }("+r+", "+i+",0,"+(e.length-1)+")"}function u(t){return"$id"===t?'"id" in f':JSON.stringify(t)+" in p"}function c(t){return"!("+t+")"}function p(t,e){return e>t?-1:t>e?1:0}e.exports=r
var h=["Unknown","Point","LineString","Polygon"]},{}],116:[function(t,e,i){"use strict"
function r(t){return t>_?Math.pow(t,1/3):t/y+d}function n(t){return t>m?t*t*t:y*(t-d)}function o(t){return 255*(.0031308>=t?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function a(t){return t/=255,.04045>=t?t/12.92:Math.pow((t+.055)/1.055,2.4)}function s(t){var e=a(t[0]),i=a(t[1]),n=a(t[2]),o=r((.4124564*e+.3575761*i+.1804375*n)/p),s=r((.2126729*e+.7151522*i+.072175*n)/h)
return[116*s-16,500*(o-s),200*(s-r((.0193339*e+.119192*i+.9503041*n)/f)),t[3]]}function l(t){var e=(t[0]+16)/116,i=isNaN(t[1])?e:e+t[1]/500,r=isNaN(t[2])?e:e-t[2]/200
return e=h*n(e),i=p*n(i),r=f*n(r),[o(3.2404542*i-1.5371385*e-.4985314*r),o(-.969266*i+1.8760108*e+.041556*r),o(.0556434*i-.2040259*e+1.0572252*r),t[3]]}function u(t){var e=s(t),i=e[0],r=e[1],n=e[2],o=Math.atan2(n,r)*g
return[0>o?o+360:o,Math.sqrt(r*r+n*n),i,t[3]]}function c(t){var e=t[0]*v,i=t[1]
return l([t[2],Math.cos(e)*i,Math.sin(e)*i,t[3]])}var p=.95047,h=1,f=1.08883,d=4/29,m=6/29,y=3*m*m,_=m*m*m,v=Math.PI/180,g=180/Math.PI
e.exports={lab:{forward:s,reverse:l},hcl:{forward:u,reverse:c}}},{}],117:[function(t,e,i){"use strict"
function r(t){return t}function n(t,e){var i,c="color"===e.type
if(p(t)){var h=t.stops&&"object"==typeof t.stops[0][0],y=h||void 0!==t.property,_=h||!y,v=t.type||("interpolated"===e["function"]?"exponential":"interval")
c&&(t=m({},t),t.stops&&(t.stops=t.stops.map(function(t){return[t[0],d(t[1])]})),t["default"]?t["default"]=d(t["default"]):t["default"]=d(e["default"]))
var g,x,b
if("exponential"===v)g=l
else if("interval"===v)g=s
else if("categorical"===v){g=a,x=Object.create(null)
for(var w=0,T=t.stops;w<T.length;w+=1){var z=T[w]
x[z[0]]=z[1]}b=typeof t.stops[0][0]}else{if("identity"!==v)throw Error('Unknown function type "'+v+'"')
g=u}var E
if(t.colorSpace&&"rgb"!==t.colorSpace){if(!f[t.colorSpace])throw Error("Unknown color space: "+t.colorSpace)
var S=f[t.colorSpace]
t=JSON.parse(JSON.stringify(t))
for(var L=0;L<t.stops.length;L++)t.stops[L]=[t.stops[L][0],S.forward(t.stops[L][1])]
E=S.reverse}else E=r
if(h){for(var M={},A=[],C=0;C<t.stops.length;C++){var P=t.stops[C],k=P[0].zoom
void 0===M[k]&&(M[k]={zoom:k,type:t.type,property:t.property,"default":t["default"],stops:[]},A.push(k)),M[k].stops.push([P[0].value,P[1]])}for(var I=[],D=0,R=A;D<R.length;D+=1){var O=R[D]
I.push([M[O].zoom,n(M[O],e)])}i=function(i,r){return E(l({stops:I,base:t.base},e,i)(i,r))},i.isFeatureConstant=!1,i.isZoomConstant=!1}else _?(i=function(i){return E(g(t,e,i,x,b))},i.isFeatureConstant=!0,i.isZoomConstant=!1):(i=function(i,r){var n=r[t.property]
return void 0===n?o(t["default"],e["default"]):E(g(t,e,n,x,b))},i.isFeatureConstant=!1,i.isZoomConstant=!0)}else c&&t&&(t=d(t)),i=function(){return t},i.isFeatureConstant=!0,i.isZoomConstant=!0
return i}function o(t,e,i){return void 0!==t?t:void 0!==e?e:void 0!==i?i:void 0}function a(t,e,i,r,n){return o(typeof i===n?r[i]:void 0,t["default"],e["default"])}function s(t,e,i){if("number"!==y(i))return o(t["default"],e["default"])
var r=t.stops.length
if(1===r)return t.stops[0][1]
if(i<=t.stops[0][0])return t.stops[0][1]
if(i>=t.stops[r-1][0])return t.stops[r-1][1]
var n=c(t.stops,i)
return t.stops[n][1]}function l(t,e,i){var n=void 0!==t.base?t.base:1
if("number"!==y(i))return o(t["default"],e["default"])
var a=t.stops.length
if(1===a)return t.stops[0][1]
if(i<=t.stops[0][0])return t.stops[0][1]
if(i>=t.stops[a-1][0])return t.stops[a-1][1]
var s=c(t.stops,i),l=h(i,n,t.stops[s][0],t.stops[s+1][0]),u=t.stops[s][1],p=t.stops[s+1][1],f=_[e.type]||r
return"function"==typeof u?function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e]
var i=u.apply(void 0,t),r=p.apply(void 0,t)
return void 0!==i&&void 0!==r?f(i,r,l):void 0}:f(u,p,l)}function u(t,e,i){return"color"===e.type?i=d(i):y(i)===e.type||"enum"===e.type&&e.values[i]||(i=void 0),o(i,t["default"],e["default"])}function c(t,e){for(var i,r,n=t.length,o=0,a=n-1,s=0;a>=o;){if(s=Math.floor((o+a)/2),i=t[s][0],r=t[s+1][0],e===i||e>i&&r>e)return s
e>i?o=s+1:i>e&&(a=s-1)}return Math.max(s-1,0)}function p(t){return"object"==typeof t&&(t.stops||"identity"===t.type)}function h(t,e,i,r){var n=r-i,o=t-i
return 1===e?o/n:(Math.pow(e,o)-1)/(Math.pow(e,n)-1)}var f=t("./color_spaces"),d=t("../util/parse_color"),m=t("../util/extend"),y=t("../util/get_type"),_=t("../util/interpolate")
e.exports=n,e.exports.isFunctionDefinition=p,e.exports.interpolationFactor=h,e.exports.findStopLessThanOrEqualTo=c},{"../util/extend":121,"../util/get_type":122,"../util/interpolate":123,"../util/parse_color":124,"./color_spaces":116}],118:[function(t,e,i){"use strict"
function r(t){return a(o.map(function(e){return t[e]}))}function n(t){for(var e={},i=0;i<t.length;i++){var n=r(t[i]),o=e[n]
o||(o=e[n]=[]),o.push(t[i])}var a=[]
for(var s in e)a.push(e[s])
return a}var o=t("./util/ref_properties"),a=t("fast-stable-stringify")
e.exports=n},{"./util/ref_properties":125,"fast-stable-stringify":8}],119:[function(t,e,i){"use strict"
e.exports=t("./v8.json")},{"./v8.json":120}],120:[function(t,e,i){e.exports={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number","default":0,period:360,units:"degrees"},pitch:{type:"number","default":0,units:"degrees"},light:{type:"light"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_tile","source_geojson","source_video","source_image","source_canvas"],source_tile:{type:{required:!0,type:"enum",values:{vector:{},raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},minzoom:{type:"number","default":0},maxzoom:{type:"number","default":22},tileSize:{type:"number","default":512,units:"pixels"},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number","default":18},buffer:{type:"number","default":128,maximum:512,minimum:0},tolerance:{type:"number","default":.375},cluster:{type:"boolean","default":!1},clusterRadius:{type:"number","default":50,minimum:0},clusterMaxZoom:{type:"number"}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_canvas:{type:{required:!0,type:"enum",values:{canvas:{}}},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}},animate:{type:"boolean","default":"true"},canvas:{type:"string",required:!0}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},"fill-extrusion":{},raster:{},background:{}}},metadata:{type:"*"},ref:{type:"string"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"},"paint.*":{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_fill-extrusion","layout_symbol","layout_raster","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},"default":"visible"}},layout_fill:{visibility:{type:"enum",values:{visible:{},none:{}},"default":"visible"}},layout_circle:{visibility:{type:"enum",values:{visible:{},none:{}},"default":"visible"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},"default":"visible"}},layout_line:{"line-cap":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{butt:{},round:{},square:{}},"default":"butt"},"line-join":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{bevel:{},round:{},miter:{}},"default":"miter"},"line-miter-limit":{type:"number","default":2,"function":"interpolated","zoom-function":!0,requires:[{"line-join":"miter"}]},"line-round-limit":{type:"number","default":1.05,"function":"interpolated","zoom-function":!0,requires:[{"line-join":"round"}]},visibility:{type:"enum",values:{visible:{},none:{}},"default":"visible"}},layout_symbol:{"symbol-placement":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{point:{},line:{}},"default":"point"},"symbol-spacing":{type:"number","default":250,minimum:1,"function":"interpolated","zoom-function":!0,units:"pixels",requires:[{"symbol-placement":"line"}]},"symbol-avoid-edges":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!1},"icon-allow-overlap":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!1,requires:["icon-image"]},"icon-ignore-placement":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!1,requires:["icon-image"]},"icon-optional":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!1,requires:["icon-image","text-field"]},"icon-rotation-alignment":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{},auto:{}},"default":"auto",requires:["icon-image"]},"icon-size":{type:"number","default":1,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,units:"factor of the original icon size",requires:["icon-image"]},"icon-text-fit":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{none:{},width:{},height:{},both:{}},"default":"none",requires:["icon-image","text-field"]},"icon-text-fit-padding":{type:"array",value:"number",length:4,"default":[0,0,0,0],units:"pixels","function":"interpolated","zoom-function":!0,requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}]},"icon-image":{type:"string","function":"piecewise-constant","zoom-function":!0,"property-function":!0,tokens:!0},"icon-rotate":{type:"number","default":0,period:360,"function":"interpolated","zoom-function":!0,"property-function":!0,units:"degrees",requires:["icon-image"]},"icon-padding":{type:"number","default":2,minimum:0,"function":"interpolated","zoom-function":!0,units:"pixels",requires:["icon-image"]},"icon-keep-upright":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":"line"}]},"icon-offset":{type:"array",value:"number",length:2,"default":[0,0],"function":"interpolated","zoom-function":!0,"property-function":!0,requires:["icon-image"]},"icon-pitch-alignment":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{},auto:{}},"default":"auto",requires:["icon-image"]},"text-pitch-alignment":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{},auto:{}},"default":"auto",requires:["text-field"]},"text-rotation-alignment":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{},auto:{}},"default":"auto",requires:["text-field"]},"text-field":{type:"string","function":"piecewise-constant","zoom-function":!0,"property-function":!0,"default":"",tokens:!0},"text-font":{type:"array",value:"string","function":"piecewise-constant","zoom-function":!0,"default":["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"]},"text-size":{type:"number","default":16,minimum:0,units:"pixels","function":"interpolated","zoom-function":!0,"property-function":!0,requires:["text-field"]},"text-max-width":{type:"number","default":10,minimum:0,units:"ems","function":"interpolated","zoom-function":!0,requires:["text-field"]},"text-line-height":{type:"number","default":1.2,units:"ems","function":"interpolated","zoom-function":!0,requires:["text-field"]},"text-letter-spacing":{type:"number","default":0,units:"ems","function":"interpolated","zoom-function":!0,requires:["text-field"]},"text-justify":{type:"enum","function":"piecewise-constant","zoom-function":!0,"property-function":!0,values:{left:{},center:{},right:{}},"default":"center",requires:["text-field"]},"text-anchor":{type:"enum","function":"piecewise-constant","zoom-function":!0,"property-function":!0,values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},"default":"center",requires:["text-field"]},"text-max-angle":{type:"number","default":45,units:"degrees","function":"interpolated","zoom-function":!0,requires:["text-field",{"symbol-placement":"line"}]},"text-rotate":{type:"number","default":0,period:360,units:"degrees","function":"interpolated","zoom-function":!0,"property-function":!0,requires:["text-field"]},"text-padding":{type:"number","default":2,minimum:0,units:"pixels","function":"interpolated","zoom-function":!0,requires:["text-field"]},"text-keep-upright":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":"line"}]},"text-transform":{type:"enum","function":"piecewise-constant","zoom-function":!0,"property-function":!0,values:{none:{},uppercase:{},lowercase:{}},"default":"none",requires:["text-field"]},"text-offset":{type:"array",value:"number",units:"ems","function":"interpolated","zoom-function":!0,"property-function":!0,length:2,"default":[0,0],requires:["text-field"]},"text-allow-overlap":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!1,requires:["text-field"]},"text-ignore-placement":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!1,requires:["text-field"]},"text-optional":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!1,requires:["text-field","icon-image"]},visibility:{type:"enum",values:{visible:{},none:{}},"default":"visible"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},"default":"visible"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},"in":{},"!in":{},all:{},any:{},none:{},has:{},"!has":{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},"function":{stops:{type:"array",value:"function_stop"},base:{type:"number","default":1,minimum:0},property:{type:"string","default":"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},"default":"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},"default":"rgb"},"default":{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:22,value:["number","color"],length:2},light:{anchor:{type:"enum","default":"viewport",values:{map:{},viewport:{}},transition:!1,"zoom-function":!0,"property-function":!1,"function":"piecewise-constant"},position:{type:"array","default":[1.15,210,30],length:3,value:"number",transition:!0,"function":"interpolated","zoom-function":!0,"property-function":!1},color:{type:"color","default":"#ffffff","function":"interpolated","zoom-function":!0,"property-function":!1,transition:!0},intensity:{type:"number","default":.5,minimum:0,maximum:1,"function":"interpolated","zoom-function":!0,"property-function":!1,transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_fill-extrusion","paint_symbol","paint_raster","paint_background"],paint_fill:{"fill-antialias":{type:"boolean","function":"piecewise-constant","zoom-function":!0,"default":!0},"fill-opacity":{type:"number","function":"interpolated","zoom-function":!0,"property-function":!0,"default":1,minimum:0,maximum:1,transition:!0},"fill-color":{type:"color","default":"#000000","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:[{"!":"fill-pattern"}]},"fill-outline-color":{type:"color","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}]},"fill-translate":{type:"array",value:"number",length:2,"default":[0,0],"function":"interpolated","zoom-function":!0,transition:!0,units:"pixels"},"fill-translate-anchor":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},"default":"map",requires:["fill-translate"]},"fill-pattern":{type:"string","function":"piecewise-constant","zoom-function":!0,transition:!0}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number","function":"interpolated","zoom-function":!0,"property-function":!1,"default":1,minimum:0,maximum:1,transition:!0},"fill-extrusion-color":{type:"color","default":"#000000","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:[{"!":"fill-extrusion-pattern"}]},"fill-extrusion-translate":{type:"array",value:"number",length:2,"default":[0,0],"function":"interpolated","zoom-function":!0,transition:!0,units:"pixels"},"fill-extrusion-translate-anchor":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},"default":"map",requires:["fill-extrusion-translate"]},"fill-extrusion-pattern":{type:"string","function":"piecewise-constant","zoom-function":!0,transition:!0},"fill-extrusion-height":{type:"number","function":"interpolated","zoom-function":!0,"property-function":!0,"default":0,minimum:0,maximum:65535,units:"meters",transition:!0},"fill-extrusion-base":{type:"number","function":"interpolated","zoom-function":!0,"property-function":!0,"default":0,minimum:0,maximum:65535,units:"meters",transition:!0,requires:["fill-extrusion-height"]}},paint_line:{"line-opacity":{type:"number","function":"interpolated","zoom-function":!0,"property-function":!0,"default":1,minimum:0,maximum:1,transition:!0},"line-color":{type:"color","default":"#000000","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:[{"!":"line-pattern"}]},"line-translate":{type:"array",value:"number",length:2,"default":[0,0],"function":"interpolated","zoom-function":!0,transition:!0,units:"pixels"},"line-translate-anchor":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},"default":"map",requires:["line-translate"]},"line-width":{type:"number","default":1,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"line-gap-width":{type:"number","default":0,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"line-offset":{type:"number","default":0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"line-blur":{type:"number","default":0,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"line-dasharray":{type:"array",value:"number","function":"piecewise-constant","zoom-function":!0,minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}]},"line-pattern":{type:"string","function":"piecewise-constant","zoom-function":!0,transition:!0}},paint_circle:{"circle-radius":{type:"number","default":5,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"circle-color":{type:"color","default":"#000000","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0},"circle-blur":{type:"number","default":0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0},"circle-opacity":{type:"number","default":1,minimum:0,maximum:1,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0},"circle-translate":{type:"array",value:"number",length:2,"default":[0,0],"function":"interpolated","zoom-function":!0,transition:!0,units:"pixels"},"circle-translate-anchor":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},"default":"map",requires:["circle-translate"]},"circle-pitch-scale":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},"default":"map"},"circle-pitch-alignment":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},"default":"viewport"},"circle-stroke-width":{type:"number","default":0,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"circle-stroke-color":{type:"color","default":"#000000","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0},"circle-stroke-opacity":{type:"number","default":1,minimum:0,maximum:1,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0}},paint_symbol:{"icon-opacity":{type:"number","default":1,minimum:0,maximum:1,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["icon-image"]},"icon-color":{type:"color","default":"#000000","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["icon-image"]},"icon-halo-color":{type:"color","default":"rgba(0, 0, 0, 0)","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["icon-image"]},"icon-halo-width":{type:"number","default":0,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels",requires:["icon-image"]},"icon-halo-blur":{type:"number","default":0,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels",requires:["icon-image"]},"icon-translate":{type:"array",value:"number",length:2,"default":[0,0],"function":"interpolated","zoom-function":!0,transition:!0,units:"pixels",requires:["icon-image"]},"icon-translate-anchor":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},"default":"map",requires:["icon-image","icon-translate"]},"text-opacity":{type:"number","default":1,minimum:0,maximum:1,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["text-field"]},"text-color":{type:"color","default":"#000000","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["text-field"]},"text-halo-color":{type:"color","default":"rgba(0, 0, 0, 0)","function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["text-field"]},"text-halo-width":{type:"number","default":0,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels",requires:["text-field"]},"text-halo-blur":{type:"number","default":0,minimum:0,"function":"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels",requires:["text-field"]},"text-translate":{type:"array",value:"number",length:2,"default":[0,0],"function":"interpolated","zoom-function":!0,transition:!0,units:"pixels",requires:["text-field"]},"text-translate-anchor":{type:"enum","function":"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},"default":"map",requires:["text-field","text-translate"]}},paint_raster:{"raster-opacity":{type:"number","default":1,minimum:0,maximum:1,"function":"interpolated","zoom-function":!0,transition:!0},"raster-hue-rotate":{type:"number","default":0,period:360,"function":"interpolated","zoom-function":!0,transition:!0,units:"degrees"},"raster-brightness-min":{type:"number","function":"interpolated","zoom-function":!0,"default":0,minimum:0,maximum:1,transition:!0},"raster-brightness-max":{type:"number","function":"interpolated","zoom-function":!0,"default":1,minimum:0,maximum:1,transition:!0},"raster-saturation":{type:"number","default":0,minimum:-1,maximum:1,"function":"interpolated","zoom-function":!0,transition:!0},"raster-contrast":{type:"number","default":0,minimum:-1,maximum:1,"function":"interpolated","zoom-function":!0,transition:!0},"raster-fade-duration":{type:"number","default":300,minimum:0,"function":"interpolated","zoom-function":!0,transition:!0,units:"milliseconds"}},paint_background:{"background-color":{type:"color","default":"#000000","function":"interpolated","zoom-function":!0,transition:!0,requires:[{"!":"background-pattern"}]},"background-pattern":{type:"string","function":"piecewise-constant","zoom-function":!0,transition:!0},"background-opacity":{type:"number","default":1,minimum:0,maximum:1,"function":"interpolated","zoom-function":!0,transition:!0}},transition:{duration:{type:"number","default":300,minimum:0,units:"milliseconds"},delay:{type:"number","default":0,minimum:0,units:"milliseconds"}}}},{}],121:[function(t,e,i){"use strict"
e.exports=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1]
for(var r=0,n=e;r<n.length;r+=1){var o=n[r]
for(var a in o)t[a]=o[a]}return t}},{}],122:[function(t,e,i){"use strict"
e.exports=function(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}},{}],123:[function(t,e,i){"use strict"
function r(t,e,i){return t*(1-i)+e*i}e.exports=r,r.number=r,r.vec2=function(t,e,i){return[r(t[0],e[0],i),r(t[1],e[1],i)]},r.color=function(t,e,i){return[r(t[0],e[0],i),r(t[1],e[1],i),r(t[2],e[2],i),r(t[3],e[3],i)]},r.array=function(t,e,i){return t.map(function(t,n){return r(t,e[n],i)})}},{}],124:[function(t,e,i){"use strict"
var r=t("csscolorparser").parseCSSColor
e.exports=function(t){if("string"==typeof t){var e=r(t)
if(!e)return
return[e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3]]}return Array.isArray(t)?t:void 0}},{csscolorparser:6}],125:[function(t,e,i){"use strict"
e.exports=["type","source","source-layer","minzoom","maxzoom","filter","layout"]},{}],126:[function(t,e,i){"use strict"
e.exports=function(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}},{}],127:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("../util/get_type"),o=t("../util/extend")
e.exports=function(e){var i=t("./validate_function"),a=t("./validate_object"),s={"*":function(){return[]},array:t("./validate_array"),"boolean":t("./validate_boolean"),number:t("./validate_number"),color:t("./validate_color"),constants:t("./validate_constants"),"enum":t("./validate_enum"),filter:t("./validate_filter"),"function":t("./validate_function"),layer:t("./validate_layer"),object:t("./validate_object"),source:t("./validate_source"),light:t("./validate_light"),string:t("./validate_string")},l=e.value,u=e.valueSpec,c=e.key,p=e.styleSpec,h=e.style
if("string"===n(l)&&"@"===l[0]){if(p.$version>7)return[new r(c,l,"constants have been deprecated as of v8")]
if(!(l in h.constants))return[new r(c,l,'constant "%s" not found',l)]
e=o({},e,{value:h.constants[l]})}return u["function"]&&"object"===n(l)?i(e):u.type&&s[u.type]?s[u.type](e):a(o({},e,{valueSpec:u.type?p[u.type]:u}))}},{"../error/validation_error":114,"../util/extend":121,"../util/get_type":122,"./validate_array":128,"./validate_boolean":129,"./validate_color":130,"./validate_constants":131,"./validate_enum":132,"./validate_filter":133,"./validate_function":134,"./validate_layer":136,"./validate_light":138,"./validate_number":139,"./validate_object":140,"./validate_source":143,"./validate_string":144}],128:[function(t,e,i){"use strict"
var r=t("../util/get_type"),n=t("./validate"),o=t("../error/validation_error")
e.exports=function(t){var e=t.value,i=t.valueSpec,a=t.style,s=t.styleSpec,l=t.key,u=t.arrayElementValidator||n
if("array"!==r(e))return[new o(l,e,"array expected, %s found",r(e))]
if(i.length&&e.length!==i.length)return[new o(l,e,"array length %d expected, length %d found",i.length,e.length)]
if(i["min-length"]&&e.length<i["min-length"])return[new o(l,e,"array length at least %d expected, length %d found",i["min-length"],e.length)]
var c={type:i.value}
s.$version<7&&(c["function"]=i["function"]),"object"===r(i.value)&&(c=i.value)
for(var p=[],h=0;h<e.length;h++)p=p.concat(u({array:e,arrayIndex:h,value:e[h],valueSpec:c,style:a,styleSpec:s,key:l+"["+h+"]"}))
return p}},{"../error/validation_error":114,"../util/get_type":122,"./validate":127}],129:[function(t,e,i){"use strict"
var r=t("../util/get_type"),n=t("../error/validation_error")
e.exports=function(t){var e=t.value,i=t.key,o=r(e)
return"boolean"!==o?[new n(i,e,"boolean expected, %s found",o)]:[]}},{"../error/validation_error":114,"../util/get_type":122}],130:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("../util/get_type"),o=t("csscolorparser").parseCSSColor
e.exports=function(t){var e=t.key,i=t.value,a=n(i)
return"string"!==a?[new r(e,i,"color expected, %s found",a)]:null===o(i)?[new r(e,i,'color expected, "%s" found',i)]:[]}},{"../error/validation_error":114,"../util/get_type":122,csscolorparser:6}],131:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("../util/get_type")
e.exports=function(t){var e=t.key,i=t.value
if(t.styleSpec.$version>7)return i?[new r(e,i,"constants have been deprecated as of v8")]:[]
var o=n(i)
if("object"!==o)return[new r(e,i,"object expected, %s found",o)]
var a=[]
for(var s in i)"@"!==s[0]&&a.push(new r(e+"."+s,i[s],'constants must start with "@"'))
return a}},{"../error/validation_error":114,"../util/get_type":122}],132:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("../util/unbundle_jsonlint")
e.exports=function(t){var e=t.key,i=t.value,o=t.valueSpec,a=[]
return Array.isArray(o.values)?-1===o.values.indexOf(n(i))&&a.push(new r(e,i,"expected one of [%s], %s found",o.values.join(", "),i)):-1===Object.keys(o.values).indexOf(n(i))&&a.push(new r(e,i,"expected one of [%s], %s found",Object.keys(o.values).join(", "),i)),a}},{"../error/validation_error":114,"../util/unbundle_jsonlint":126}],133:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("./validate_enum"),o=t("../util/get_type"),a=t("../util/unbundle_jsonlint")
e.exports=function s(t){var e,i=t.value,l=t.key,u=t.styleSpec,c=[]
if("array"!==o(i))return[new r(l,i,"array expected, %s found",o(i))]
if(i.length<1)return[new r(l,i,"filter array must have at least 1 element")]
switch(c=c.concat(n({key:l+"[0]",value:i[0],valueSpec:u.filter_operator,style:t.style,styleSpec:t.styleSpec})),a(i[0])){case"<":case"<=":case">":case">=":i.length>=2&&"$type"===a(i[1])&&c.push(new r(l,i,'"$type" cannot be use with operator "%s"',i[0]))
case"==":case"!=":3!==i.length&&c.push(new r(l,i,'filter array for operator "%s" must have 3 elements',i[0]))
case"in":case"!in":i.length>=2&&"string"!==(e=o(i[1]))&&c.push(new r(l+"[1]",i[1],"string expected, %s found",e))
for(var p=2;p<i.length;p++)e=o(i[p]),"$type"===a(i[1])?c=c.concat(n({key:l+"["+p+"]",value:i[p],valueSpec:u.geometry_type,style:t.style,styleSpec:t.styleSpec})):"string"!==e&&"number"!==e&&"boolean"!==e&&c.push(new r(l+"["+p+"]",i[p],"string, number, or boolean expected, %s found",e))
break
case"any":case"all":case"none":for(var h=1;h<i.length;h++)c=c.concat(s({key:l+"["+h+"]",value:i[h],style:t.style,styleSpec:t.styleSpec}))
break
case"has":case"!has":e=o(i[1]),2!==i.length?c.push(new r(l,i,'filter array for "%s" operator must have 2 elements',i[0])):"string"!==e&&c.push(new r(l+"[1]",i[1],"string expected, %s found",e))}return c}},{"../error/validation_error":114,"../util/get_type":122,"../util/unbundle_jsonlint":126,"./validate_enum":132}],134:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("../util/get_type"),o=t("./validate"),a=t("./validate_object"),s=t("./validate_array"),l=t("./validate_number"),u=t("../util/unbundle_jsonlint")
e.exports=function(t){function e(t){if("identity"===y)return[new r(t.key,t.value,'identity function may not have a "stops" property')]
var e=[],o=t.value
return e=e.concat(s({key:t.key,value:o,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:i})),"array"===n(o)&&0===o.length&&e.push(new r(t.key,o,"array must have at least one stop")),e}function i(t){var e=[],i=t.value,s=t.key
if("array"!==n(i))return[new r(s,i,"array expected, %s found",n(i))]
if(2!==i.length)return[new r(s,i,"array length %d expected, length %d found",2,i.length)]
if(x){if("object"!==n(i[0]))return[new r(s,i,"object expected, %s found",n(i[0]))]
if(void 0===i[0].zoom)return[new r(s,i,"object stop key must have zoom")]
if(void 0===i[0].value)return[new r(s,i,"object stop key must have value")]
if(d&&d>u(i[0].zoom))return[new r(s,i[0].zoom,"stop zoom values must appear in ascending order")]
u(i[0].zoom)!==d&&(d=u(i[0].zoom),f=void 0,_={}),e=e.concat(a({key:s+"[0]",value:i[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:l,value:c}}))}else e=e.concat(c({key:s+"[0]",value:i[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec}))
return e.concat(o({key:s+"[1]",value:i[1],valueSpec:m,style:t.style,styleSpec:t.styleSpec}))}function c(t){var e=n(t.value),i=u(t.value)
if(h){if(e!==h)return[new r(t.key,t.value,"%s stop domain type must match previous stop domain type %s",e,h)]}else h=e
if("number"!==e&&"string"!==e&&"boolean"!==e)return[new r(t.key,t.value,"stop domain value must be a number, string, or boolean")]
if("number"!==e&&"categorical"!==y){var o="number expected, %s found"
return m["property-function"]&&void 0===y&&(o+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new r(t.key,t.value,o,e)]}return"categorical"!==y||"number"!==e||isFinite(i)&&Math.floor(i)===i?"categorical"!==y&&"number"===e&&void 0!==f&&f>i?[new r(t.key,t.value,"stop domain values must appear in ascending order")]:(f=i,"categorical"===y&&i in _?[new r(t.key,t.value,"stop domain values must be unique")]:(_[i]=!0,[])):[new r(t.key,t.value,"integer expected, found %s",i)]}function p(t){return o({key:t.key,value:t.value,valueSpec:m,style:t.style,styleSpec:t.styleSpec})}var h,f,d,m=t.valueSpec,y=u(t.value.type),_={},v="categorical"!==y&&void 0===t.value.property,g=!v,x="array"===n(t.value.stops)&&"array"===n(t.value.stops[0])&&"object"===n(t.value.stops[0][0]),b=a({key:t.key,value:t.value,valueSpec:t.styleSpec["function"],style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:e,"default":p}})
return"identity"===y&&v&&b.push(new r(t.key,t.value,'missing required property "property"')),"identity"===y||t.value.stops||b.push(new r(t.key,t.value,'missing required property "stops"')),"exponential"===y&&"piecewise-constant"===t.valueSpec["function"]&&b.push(new r(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(g&&!t.valueSpec["property-function"]?b.push(new r(t.key,t.value,"property functions not supported")):v&&!t.valueSpec["zoom-function"]&&b.push(new r(t.key,t.value,"zoom functions not supported"))),"categorical"!==y&&!x||void 0!==t.value.property||b.push(new r(t.key,t.value,'"property" property is required')),b}},{"../error/validation_error":114,"../util/get_type":122,"../util/unbundle_jsonlint":126,"./validate":127,"./validate_array":128,"./validate_number":139,"./validate_object":140}],135:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("./validate_string")
e.exports=function(t){var e=t.value,i=t.key,o=n(t)
return o.length?o:(-1===e.indexOf("{fontstack}")&&o.push(new r(i,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&o.push(new r(i,e,'"glyphs" url must include a "{range}" token')),o)}},{"../error/validation_error":114,"./validate_string":144}],136:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("../util/unbundle_jsonlint"),o=t("./validate_object"),a=t("./validate_filter"),s=t("./validate_paint_property"),l=t("./validate_layout_property"),u=t("../util/extend")
e.exports=function(t){var e=[],i=t.value,c=t.key,p=t.style,h=t.styleSpec
i.type||i.ref||e.push(new r(c,i,'either "type" or "ref" is required'))
var f=n(i.type),d=n(i.ref)
if(i.id)for(var m=n(i.id),y=0;y<t.arrayIndex;y++){var _=p.layers[y]
n(_.id)===m&&e.push(new r(c,i.id,'duplicate layer id "%s", previously used at line %d',i.id,_.id.__line__))}if("ref"in i){["type","source","source-layer","filter","layout"].forEach(function(t){t in i&&e.push(new r(c,i[t],'"%s" is prohibited for ref layers',t))})
var v
p.layers.forEach(function(t){n(t.id)===d&&(v=t)}),v?v.ref?e.push(new r(c,i.ref,"ref cannot reference another ref layer")):f=n(v.type):e.push(new r(c,i.ref,'ref layer "%s" not found',d))}else if("background"!==f)if(i.source){var g=p.sources&&p.sources[i.source],x=g&&n(g.type)
g?"vector"===x&&"raster"===f?e.push(new r(c,i.source,'layer "%s" requires a raster source',i.id)):"raster"===x&&"raster"!==f?e.push(new r(c,i.source,'layer "%s" requires a vector source',i.id)):"vector"!==x||i["source-layer"]||e.push(new r(c,i,'layer "%s" must specify a "source-layer"',i.id)):e.push(new r(c,i.source,'source "%s" not found',i.source))}else e.push(new r(c,i,'missing required property "source"'))
return e=e.concat(o({key:c,value:i,valueSpec:h.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(){return[]},filter:a,layout:function(t){return o({layer:i,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return l(u({layerType:f},t))}}})},paint:function(t){return o({layer:i,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return s(u({layerType:f},t))}}})}}}))}},{"../error/validation_error":114,"../util/extend":121,"../util/unbundle_jsonlint":126,"./validate_filter":133,"./validate_layout_property":137,"./validate_object":140,"./validate_paint_property":141}],137:[function(t,e,i){"use strict"
var r=t("./validate_property")
e.exports=function(t){return r(t,"layout")}},{"./validate_property":142}],138:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("../util/get_type"),o=t("./validate")
e.exports=function(t){var e=t.value,i=t.styleSpec,a=i.light,s=t.style,l=[],u=n(e)
if(void 0===e)return l
if("object"!==u)return l=l.concat([new r("light",e,"object expected, %s found",u)])
for(var c in e){var p=c.match(/^(.*)-transition$/)
l=p&&a[p[1]]&&a[p[1]].transition?l.concat(o({key:c,value:e[c],valueSpec:i.transition,style:s,styleSpec:i})):a[c]?l.concat(o({key:c,value:e[c],valueSpec:a[c],style:s,styleSpec:i})):l.concat([new r(c,e[c],'unknown property "%s"',c)])}return l}},{"../error/validation_error":114,"../util/get_type":122,"./validate":127}],139:[function(t,e,i){"use strict"
var r=t("../util/get_type"),n=t("../error/validation_error")
e.exports=function(t){var e=t.key,i=t.value,o=t.valueSpec,a=r(i)
return"number"!==a?[new n(e,i,"number expected, %s found",a)]:"minimum"in o&&i<o.minimum?[new n(e,i,"%s is less than the minimum value %s",i,o.minimum)]:"maximum"in o&&i>o.maximum?[new n(e,i,"%s is greater than the maximum value %s",i,o.maximum)]:[]}},{"../error/validation_error":114,"../util/get_type":122}],140:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("../util/get_type"),o=t("./validate")
e.exports=function(t){var e=t.key,i=t.value,a=t.valueSpec||{},s=t.objectElementValidators||{},l=t.style,u=t.styleSpec,c=[],p=n(i)
if("object"!==p)return[new r(e,i,"object expected, %s found",p)]
for(var h in i){var f=h.split(".")[0],d=a[f]||a["*"],m=void 0
if(s[f])m=s[f]
else if(a[f])m=o
else if(s["*"])m=s["*"]
else{if(!a["*"]){c.push(new r(e,i[h],'unknown property "%s"',h))
continue}m=o}c=c.concat(m({key:(e?e+".":e)+h,value:i[h],valueSpec:d,style:l,styleSpec:u,object:i,objectKey:h}))}for(var y in a)a[y].required&&void 0===a[y]["default"]&&void 0===i[y]&&c.push(new r(e,i,'missing required property "%s"',y))
return c}},{"../error/validation_error":114,"../util/get_type":122,"./validate":127}],141:[function(t,e,i){"use strict"
var r=t("./validate_property")
e.exports=function(t){return r(t,"paint")}},{"./validate_property":142}],142:[function(t,e,i){"use strict"
var r=t("./validate"),n=t("../error/validation_error"),o=t("../util/get_type")
e.exports=function(t,e){var i=t.key,a=t.style,s=t.styleSpec,l=t.value,u=t.objectKey,c=s[e+"_"+t.layerType]
if(!c)return[]
var p=u.match(/^(.*)-transition$/)
if("paint"===e&&p&&c[p[1]]&&c[p[1]].transition)return r({key:i,value:l,valueSpec:s.transition,style:a,styleSpec:s})
var h=t.valueSpec||c[u]
if(!h)return[new n(i,l,'unknown property "%s"',u)]
var f
if("string"===o(l)&&h["property-function"]&&!h.tokens&&(f=/^{([^}]+)}$/.exec(l)))return[new n(i,l,'"%s" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": %s` }`.',u,JSON.stringify(f[1]))]
var d=[]
return"symbol"===t.layerType&&"text-field"===u&&a&&!a.glyphs&&d.push(new n(i,l,'use of "text-field" requires a style "glyphs" property')),d.concat(r({key:t.key,value:l,valueSpec:h,style:a,styleSpec:s}))}},{"../error/validation_error":114,"../util/get_type":122,"./validate":127}],143:[function(t,e,i){"use strict"
var r=t("../error/validation_error"),n=t("../util/unbundle_jsonlint"),o=t("./validate_object"),a=t("./validate_enum")
e.exports=function(t){var e=t.value,i=t.key,s=t.styleSpec,l=t.style
if(!e.type)return[new r(i,e,'"type" is required')]
var u=n(e.type),c=[]
switch(u){case"vector":case"raster":if(c=c.concat(o({key:i,value:e,valueSpec:s.source_tile,style:t.style,styleSpec:s})),"url"in e)for(var p in e)["type","url","tileSize"].indexOf(p)<0&&c.push(new r(i+"."+p,e[p],'a source with a "url" property may not include a "%s" property',p))
return c
case"geojson":return o({key:i,value:e,valueSpec:s.source_geojson,style:l,styleSpec:s})
case"video":return o({key:i,value:e,valueSpec:s.source_video,style:l,styleSpec:s})
case"image":return o({key:i,value:e,valueSpec:s.source_image,style:l,styleSpec:s})
case"canvas":return o({key:i,value:e,valueSpec:s.source_canvas,style:l,styleSpec:s})
default:return a({key:i+".type",value:e.type,valueSpec:{values:["vector","raster","geojson","video","image","canvas"]},style:l,styleSpec:s})}}},{"../error/validation_error":114,"../util/unbundle_jsonlint":126,"./validate_enum":132,"./validate_object":140}],144:[function(t,e,i){"use strict"
var r=t("../util/get_type"),n=t("../error/validation_error")
e.exports=function(t){var e=t.value,i=t.key,o=r(e)
return"string"!==o?[new n(i,e,"string expected, %s found",o)]:[]}},{"../error/validation_error":114,"../util/get_type":122}],145:[function(t,e,i){"use strict"
function r(t,e){e=e||l
var i=[]
return i=i.concat(s({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:u,"*":function(){return[]}}})),e.$version>7&&t.constants&&(i=i.concat(a({key:"constants",value:t.constants,style:t,styleSpec:e}))),n(i)}function n(t){return[].concat(t).sort(function(t,e){return t.line-e.line})}function o(t){return function(){return n(t.apply(this,arguments))}}var a=t("./validate/validate_constants"),s=t("./validate/validate"),l=t("./reference/latest"),u=t("./validate/validate_glyphs_url")
r.source=o(t("./validate/validate_source")),r.light=o(t("./validate/validate_light")),r.layer=o(t("./validate/validate_layer")),r.filter=o(t("./validate/validate_filter")),r.paintProperty=o(t("./validate/validate_paint_property")),r.layoutProperty=o(t("./validate/validate_layout_property")),e.exports=r},{"./reference/latest":119,"./validate/validate":127,"./validate/validate_constants":131,"./validate/validate_filter":133,"./validate/validate_glyphs_url":135,"./validate/validate_layer":136,"./validate/validate_layout_property":137,"./validate/validate_light":138,"./validate/validate_paint_property":141,"./validate/validate_source":143}],146:[function(t,e,i){"use strict"
var r=function(){this.n=0,this.times=[]}
r.prototype.stopped=function(){return this.times=this.times.filter(function(t){return t.time>=(new Date).getTime()}),!this.times.length},r.prototype.set=function(t){return this.times.push({id:this.n,time:t+(new Date).getTime()}),this.n++},r.prototype.cancel=function(t){this.times=this.times.filter(function(e){return e.id!==t})},e.exports=r},{}],147:[function(t,e,i){"use strict"
var r=t("../util/evented"),n=t("../util/ajax"),o=t("../util/browser"),a=t("../util/mapbox").normalizeSpriteURL,s=function(){this.x=0,this.y=0,this.width=0,this.height=0,this.pixelRatio=1,this.sdf=!1},l=function(t){function e(e,i){var r=this
t.call(this),this.base=e,this.retina=o.devicePixelRatio>1,this.setEventedParent(i)
var s=this.retina?"@2x":""
n.getJSON(a(e,s,".json"),function(t,e){t?r.fire("error",{error:t}):e&&(r.data=e,r.imgData&&r.fire("data",{dataType:"style"}))}),n.getImage(a(e,s,".png"),function(t,e){t?r.fire("error",{error:t}):e&&(r.imgData=o.getImageData(e),r.width=e.width,r.data&&r.fire("data",{dataType:"style"}))})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.toJSON=function(){return this.base},e.prototype.loaded=function(){return!(!this.data||!this.imgData)},e.prototype.resize=function(){var t=this
if(o.devicePixelRatio>1!==this.retina){var i=new e(this.base)
i.on("data",function(){t.data=i.data,t.imgData=i.imgData,t.width=i.width,t.retina=i.retina})}},e.prototype.getSpritePosition=function(t){if(!this.loaded())return new s
var e=this.data&&this.data[t]
return e&&this.imgData?e:new s},e}(r)
e.exports=l},{"../util/ajax":196,"../util/browser":197,"../util/evented":205,"../util/mapbox":212}],148:[function(t,e,i){"use strict"
var r=t("../style-spec/reference/latest"),n=t("../util/util"),o=t("../util/evented"),a=t("./validate_style"),s=t("./style_declaration"),l=t("./style_transition"),u="-transition",c=function(t){function e(e){t.call(this),this.properties=["anchor","color","position","intensity"],this._specifications=r.light,this.set(e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){var e=this
if(!this._validate(a.light,t)){this._declarations={},this._transitions={},this._transitionOptions={},this.calculated={},t=n.extend({anchor:this._specifications.anchor["default"],color:this._specifications.color["default"],position:this._specifications.position["default"],intensity:this._specifications.intensity["default"]},t)
for(var i=0,r=e.properties;i<r.length;i+=1){var o=r[i]
e._declarations[o]=new s(e._specifications[o],t[o])}return this}},e.prototype.getLight=function(){return{anchor:this.getLightProperty("anchor"),color:this.getLightProperty("color"),position:this.getLightProperty("position"),intensity:this.getLightProperty("intensity")}},e.prototype.getLightProperty=function(t){return n.endsWith(t,u)?this._transitionOptions[t]:this._declarations[t]&&this._declarations[t].value},e.prototype.getLightValue=function(t,e){if("position"===t){var i=this._transitions[t].calculate(e),r=n.sphericalToCartesian(i)
return{x:r[0],y:r[1],z:r[2]}}return this._transitions[t].calculate(e)},e.prototype.setLight=function(t){var e=this
if(!this._validate(a.light,t))for(var i in t){var r=t[i]
n.endsWith(i,u)?e._transitionOptions[i]=r:null===r||void 0===r?delete e._declarations[i]:e._declarations[i]=new s(e._specifications[i],r)}},e.prototype.recalculate=function(t){var e=this
for(var i in e._declarations)e.calculated[i]=e.getLightValue(i,{zoom:t})},e.prototype._applyLightDeclaration=function(t,e,i,r,o){var a=i.transition?this._transitions[t]:void 0,c=this._specifications[t]
if(null!==e&&void 0!==e||(e=new s(c,c["default"])),!a||a.declaration.json!==e.json){var p=n.extend({duration:300,delay:0},r,this.getLightProperty(t+u)),h=this._transitions[t]=new l(c,e,a,p)
h.instant()||(h.loopID=o.set(h.endTime-Date.now())),a&&o.cancel(a.loopID)}},e.prototype.updateLightTransitions=function(t,e,i){var r,n=this
for(r in n._declarations)n._applyLightDeclaration(r,n._declarations[r],t,e,i)},e.prototype._validate=function(t,e){return a.emitErrors(this,t.call(a,n.extend({value:e,style:{glyphs:!0,sprite:!0},styleSpec:r})))},e}(o)
e.exports=c},{"../style-spec/reference/latest":119,"../util/evented":205,"../util/util":218,"./style_declaration":150,"./style_transition":158,"./validate_style":159}],149:[function(t,e,i){"use strict"
var r=t("../util/evented"),n=t("./style_layer"),o=t("./image_sprite"),a=t("./light"),s=t("../symbol/glyph_source"),l=t("../symbol/sprite_atlas"),u=t("../render/line_atlas"),c=t("../util/util"),p=t("../util/ajax"),h=t("../util/mapbox"),f=t("../util/browser"),d=t("../util/dispatcher"),m=t("./animation_loop"),y=t("./validate_style"),_=t("../source/source"),v=t("../source/query_features"),g=t("../source/source_cache"),x=t("../style-spec/reference/latest"),b=t("../style-spec/function"),w=t("../util/global_worker_pool"),T=t("../style-spec/deref"),z=t("../style-spec/diff"),E=t("../source/rtl_text_plugin"),S=c.pick(z.operations,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition"]),L=c.pick(z.operations,["setCenter","setZoom","setBearing","setPitch"]),M=function(t){function e(e,i,r){var n=this
t.call(this),this.map=i,this.animationLoop=i&&i.animationLoop||new m,this.dispatcher=new d(w(),this),this.spriteAtlas=new l(1024,1024),this.spriteAtlas.setEventedParent(this),this.lineAtlas=new u(256,512),this._layers={},this._order=[],this.sourceCaches={},this.zoomHistory={},this._loaded=!1,c.bindAll(["_redoPlacement"],this),this._resetUpdates(),r=c.extend({validate:"string"!=typeof e||!h.isMapboxURL(e)},r),this.setEventedParent(i),this.fire("dataloading",{dataType:"style"})
var a=this
this._rtlTextPluginCallback=E.registerForPluginAvailability(function(t){a.dispatcher.broadcast("loadRTLTextPlugin",t.pluginBlobURL,t.errorCallback)
for(var e in a.sourceCaches)a.sourceCaches[e].reload()})
var _=function(t,e){if(t)return void n.fire("error",{error:t})
if(!r.validate||!y.emitErrors(n,y(e))){n._loaded=!0,n.stylesheet=e,n.updateClasses()
for(var i in e.sources)n.addSource(i,e.sources[i],r)
e.sprite&&(n.sprite=new o(e.sprite,n)),n.glyphSource=new s(e.glyphs,r.localIdeographFontFamily,n),n._resolve(),n.fire("data",{dataType:"style"}),n.fire("style.load")}}
"string"==typeof e?p.getJSON(h.normalizeStyleURL(e),_):f.frame(_.bind(this,null,e)),this.on("data",function(t){if("source"===t.dataType&&"metadata"===t.sourceDataType){var e=!!n.sourceCaches[t.sourceId]&&n.sourceCaches[t.sourceId].getSource()
if(e&&e.vectorLayerIds)for(var i in n._layers){var r=n._layers[i]
r.source===e.id&&n._validateLayer(r)}}})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._validateLayer=function(t){var e=this.sourceCaches[t.source]
if(t.sourceLayer&&e){var i=e.getSource();("geojson"===i.type||i.vectorLayerIds&&-1===i.vectorLayerIds.indexOf(t.sourceLayer))&&this.fire("error",{error:Error('Source layer "'+t.sourceLayer+'" does not exist on source "'+i.id+'" as specified by style layer "'+t.id+'"')})}},e.prototype.loaded=function(){var t=this
if(!this._loaded)return!1
if(Object.keys(this._updatedSources).length)return!1
for(var e in t.sourceCaches)if(!t.sourceCaches[e].loaded())return!1
return!(this.sprite&&!this.sprite.loaded())},e.prototype._resolve=function(){var t=this,e=T(this.stylesheet.layers)
this._order=e.map(function(t){return t.id}),this._layers={}
for(var i=0,r=e;i<r.length;i+=1){var o=r[i]
o=n.create(o),o.setEventedParent(t,{layer:{id:o.id}}),t._layers[o.id]=o}this.dispatcher.broadcast("setLayers",this._serializeLayers(this._order)),this.light=new a(this.stylesheet.light)},e.prototype._serializeLayers=function(t){var e=this
return t.map(function(t){return e._layers[t].serialize()})},e.prototype._applyClasses=function(t,e){var i=this
if(this._loaded){t=t||[],e=e||{transition:!0}
var r=this.stylesheet.transition||{},n=this._updatedAllPaintProps?this._layers:this._updatedPaintProps
for(var o in n){var a=i._layers[o],s=i._updatedPaintProps[o]
if(i._updatedAllPaintProps||s.all)a.updatePaintTransitions(t,e,r,i.animationLoop,i.zoomHistory)
else for(var l in s)i._layers[o].updatePaintTransition(l,t,e,r,i.animationLoop,i.zoomHistory)}this.light.updateLightTransitions(e,r,this.animationLoop)}},e.prototype._recalculate=function(t){var e=this
if(this._loaded){for(var i in e.sourceCaches)e.sourceCaches[i].used=!1
this._updateZoomHistory(t)
for(var r=0,n=e._order;r<n.length;r+=1){var o=n[r],a=e._layers[o]
a.recalculate(t),!a.isHidden(t)&&a.source&&(e.sourceCaches[a.source].used=!0)}this.light.recalculate(t),Math.floor(this.z)!==Math.floor(t)&&this.animationLoop.set(300),this.z=t}},e.prototype._updateZoomHistory=function(t){var e=this.zoomHistory
void 0===e.lastIntegerZoom&&(e.lastIntegerZoom=Math.floor(t),e.lastIntegerZoomTime=0,e.lastZoom=t),Math.floor(e.lastZoom)<Math.floor(t)?(e.lastIntegerZoom=Math.floor(t),e.lastIntegerZoomTime=Date.now()):Math.floor(e.lastZoom)>Math.floor(t)&&(e.lastIntegerZoom=Math.floor(t+1),e.lastIntegerZoomTime=Date.now()),e.lastZoom=t},e.prototype._checkLoaded=function(){if(!this._loaded)throw Error("Style is not done loading")},e.prototype.update=function(t,e){var i=this
if(this._changed){var r=Object.keys(this._updatedLayers),n=Object.keys(this._removedLayers);(r.length||n.length||this._updatedSymbolOrder)&&this._updateWorkerLayers(r,n)
for(var o in i._updatedSources){var a=i._updatedSources[o]
"reload"===a?i._reloadSource(o):"clear"===a&&i._clearSource(o)}this._applyClasses(t,e),this._resetUpdates(),this.fire("data",{dataType:"style"})}},e.prototype._updateWorkerLayers=function(t,e){var i=this,r=this._updatedSymbolOrder?this._order.filter(function(t){return"symbol"===i._layers[t].type}):null
this.dispatcher.broadcast("updateLayers",{layers:this._serializeLayers(t),removedIds:e,symbolOrder:r})},e.prototype._resetUpdates=function(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSymbolOrder=!1,this._updatedSources={},this._updatedPaintProps={},this._updatedAllPaintProps=!1},e.prototype.setState=function(t){var e=this
if(this._checkLoaded(),y.emitErrors(this,y(t)))return!1
t=c.extend({},t),t.layers=T(t.layers)
var i=z(this.serialize(),t).filter(function(t){return!(t.command in L)})
if(0===i.length)return!1
var r=i.filter(function(t){return!(t.command in S)})
if(r.length>0)throw Error("Unimplemented: "+r.map(function(t){return t.command}).join(", ")+".")
return i.forEach(function(t){"setTransition"!==t.command&&e[t.command].apply(e,t.args)}),this.stylesheet=t,!0},e.prototype.addSource=function(t,e,i){var r=this
if(this._checkLoaded(),void 0!==this.sourceCaches[t])throw Error("There is already a source with this ID")
if(!e.type)throw Error("The type property must be defined, but the only the following properties were given: "+Object.keys(e)+".")
if(!(["vector","raster","geojson","video","image","canvas"].indexOf(e.type)>=0&&this._validate(y.source,"sources."+t,e,null,i))){var n=this.sourceCaches[t]=new g(t,e,this.dispatcher)
n.style=this,n.setEventedParent(this,function(){return{isSourceLoaded:r.loaded(),source:n.serialize(),sourceId:t}}),n.onAdd(this.map),this._changed=!0}},e.prototype.removeSource=function(t){if(this._checkLoaded(),void 0===this.sourceCaches[t])throw Error("There is no source with this ID")
var e=this.sourceCaches[t]
delete this.sourceCaches[t],delete this._updatedSources[t],e.fire("data",{sourceDataType:"metadata",dataType:"source",sourceId:t}),e.setEventedParent(null),e.clearTiles(),e.onRemove&&e.onRemove(this.map),this._changed=!0},e.prototype.getSource=function(t){return this.sourceCaches[t]&&this.sourceCaches[t].getSource()},e.prototype.addLayer=function(t,e,i){this._checkLoaded()
var r=t.id
if("object"==typeof t.source&&(this.addSource(r,t.source),t=c.extend(t,{source:r})),!this._validate(y.layer,"layers."+r,t,{arrayIndex:-1},i)){var o=n.create(t)
this._validateLayer(o),o.setEventedParent(this,{layer:{id:r}})
var a=e?this._order.indexOf(e):this._order.length
if(this._order.splice(a,0,r),this._layers[r]=o,this._removedLayers[r]&&o.source){var s=this._removedLayers[r]
delete this._removedLayers[r],s.type!==o.type?this._updatedSources[o.source]="clear":(this._updatedSources[o.source]="reload",this.sourceCaches[o.source].pause())}this._updateLayer(o),"symbol"===o.type&&(this._updatedSymbolOrder=!0),this.updateClasses(r)}},e.prototype.moveLayer=function(t,e){this._checkLoaded(),this._changed=!0
var i=this._layers[t]
if(!i)return void this.fire("error",{error:Error("The layer '"+t+"' does not exist in the map's style and cannot be moved.")})
var r=this._order.indexOf(t)
this._order.splice(r,1)
var n=e?this._order.indexOf(e):this._order.length
this._order.splice(n,0,t),"symbol"===i.type&&(this._updatedSymbolOrder=!0,i.source&&!this._updatedSources[i.source]&&(this._updatedSources[i.source]="reload",this.sourceCaches[i.source].pause()))},e.prototype.removeLayer=function(t){this._checkLoaded()
var e=this._layers[t]
if(!e)return void this.fire("error",{error:Error("The layer '"+t+"' does not exist in the map's style and cannot be removed.")})
e.setEventedParent(null)
var i=this._order.indexOf(t)
this._order.splice(i,1),"symbol"===e.type&&(this._updatedSymbolOrder=!0),this._changed=!0,this._removedLayers[t]=e,delete this._layers[t],delete this._updatedLayers[t],delete this._updatedPaintProps[t]},e.prototype.getLayer=function(t){return this._layers[t]},e.prototype.setLayerZoomRange=function(t,e,i){this._checkLoaded()
var r=this.getLayer(t)
return r?void(r.minzoom===e&&r.maxzoom===i||(null!=e&&(r.minzoom=e),null!=i&&(r.maxzoom=i),this._updateLayer(r))):void this.fire("error",{error:Error("The layer '"+t+"' does not exist in the map's style and cannot have zoom extent.")})},e.prototype.setFilter=function(t,e){this._checkLoaded()
var i=this.getLayer(t)
return i?void(null!==e&&void 0!==e&&this._validate(y.filter,"layers."+i.id+".filter",e)||c.deepEqual(i.filter,e)||(i.filter=c.clone(e),this._updateLayer(i))):void this.fire("error",{error:Error("The layer '"+t+"' does not exist in the map's style and cannot be filtered.")})},e.prototype.getFilter=function(t){return c.clone(this.getLayer(t).filter)},e.prototype.setLayoutProperty=function(t,e,i){this._checkLoaded()
var r=this.getLayer(t)
return r?void(c.deepEqual(r.getLayoutProperty(e),i)||(r.setLayoutProperty(e,i),this._updateLayer(r))):void this.fire("error",{error:Error("The layer '"+t+"' does not exist in the map's style and cannot be styled.")})},e.prototype.getLayoutProperty=function(t,e){return this.getLayer(t).getLayoutProperty(e)},e.prototype.setPaintProperty=function(t,e,i,r){this._checkLoaded()
var n=this.getLayer(t)
if(!n)return void this.fire("error",{error:Error("The layer '"+t+"' does not exist in the map's style and cannot be styled.")})
if(!c.deepEqual(n.getPaintProperty(e,r),i)){var o=n.isPaintValueFeatureConstant(e)
n.setPaintProperty(e,i,r),!(i&&b.isFunctionDefinition(i)&&"$zoom"!==i.property&&void 0!==i.property)&&o||this._updateLayer(n),this.updateClasses(t,e)}},e.prototype.getPaintProperty=function(t,e,i){return this.getLayer(t).getPaintProperty(e,i)},e.prototype.getTransition=function(){return c.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)},e.prototype.updateClasses=function(t,e){if(this._changed=!0,t){var i=this._updatedPaintProps
i[t]||(i[t]={}),i[t][e||"all"]=!0}else this._updatedAllPaintProps=!0},e.prototype.serialize=function(){var t=this
return c.filterObject({version:this.stylesheet.version,name:this.stylesheet.name,metadata:this.stylesheet.metadata,light:this.stylesheet.light,center:this.stylesheet.center,zoom:this.stylesheet.zoom,bearing:this.stylesheet.bearing,pitch:this.stylesheet.pitch,sprite:this.stylesheet.sprite,glyphs:this.stylesheet.glyphs,transition:this.stylesheet.transition,sources:c.mapObject(this.sourceCaches,function(t){return t.serialize()}),layers:this._order.map(function(e){return t._layers[e].serialize()})},function(t){return void 0!==t})},e.prototype._updateLayer=function(t){this._updatedLayers[t.id]=!0,t.source&&!this._updatedSources[t.source]&&(this._updatedSources[t.source]="reload",this.sourceCaches[t.source].pause()),this._changed=!0},e.prototype._flattenRenderedFeatures=function(t){for(var e=this,i=[],r=this._order.length-1;r>=0;r--)for(var n=e._order[r],o=0,a=t;o<a.length;o+=1){var s=a[o],l=s[n]
if(l)for(var u=0,c=l;u<c.length;u+=1){var p=c[u]
i.push(p)}}return i},e.prototype.queryRenderedFeatures=function(t,e,i,r){var n=this
e&&e.filter&&this._validate(y.filter,"queryRenderedFeatures.filter",e.filter)
var o={}
if(e&&e.layers){if(!Array.isArray(e.layers))return this.fire("error",{error:"parameters.layers must be an Array."}),[]
for(var a=0,s=e.layers;a<s.length;a+=1){var l=s[a],u=n._layers[l]
if(!u)return n.fire("error",{error:"The layer '"+l+"' does not exist in the map's style and cannot be queried for features."}),[]
o[u.source]=!0}}var c=[]
for(var p in n.sourceCaches)if(!e.layers||o[p]){var h=v.rendered(n.sourceCaches[p],n._layers,t,e,i,r)
c.push(h)}return this._flattenRenderedFeatures(c)},e.prototype.querySourceFeatures=function(t,e){e&&e.filter&&this._validate(y.filter,"querySourceFeatures.filter",e.filter)
var i=this.sourceCaches[t]
return i?v.source(i,e):[]},e.prototype.addSourceType=function(t,e,i){return _.getType(t)?i(Error('A source type called "'+t+'" already exists.')):(_.setType(t,e),e.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:t,url:e.workerSourceURL},i):i(null,null))},e.prototype.getLight=function(){return this.light.getLight()},e.prototype.setLight=function(t,e){this._checkLoaded()
var i=this.light.getLight(),r=!1
for(var n in t)if(!c.deepEqual(t[n],i[n])){r=!0
break}if(r){var o=this.stylesheet.transition||{}
this.light.setLight(t),this.light.updateLightTransitions(e||{transition:!0},o,this.animationLoop)}},e.prototype._validate=function(t,e,i,r,n){return(!n||!1!==n.validate)&&y.emitErrors(this,t.call(y,c.extend({key:e,style:this.serialize(),value:i,styleSpec:x},r)))},e.prototype._remove=function(){var t=this
E.evented.off("pluginAvailable",this._rtlTextPluginCallback)
for(var e in t.sourceCaches)t.sourceCaches[e].clearTiles()
this.dispatcher.remove()},e.prototype._clearSource=function(t){this.sourceCaches[t].clearTiles()},e.prototype._reloadSource=function(t){this.sourceCaches[t].resume(),this.sourceCaches[t].reload()},e.prototype._updateSources=function(t){var e=this
for(var i in e.sourceCaches)e.sourceCaches[i].update(t)},e.prototype._redoPlacement=function(){var t=this
for(var e in t.sourceCaches)t.sourceCaches[e].redoPlacement()},e.prototype.getIcons=function(t,e,i){var r=this,n=function(){r.spriteAtlas.setSprite(r.sprite),r.spriteAtlas.addIcons(e.icons,i)}
!this.sprite||this.sprite.loaded()?n():this.sprite.on("data",n)},e.prototype.getGlyphs=function(t,e,i){function r(t,e,r){t&&console.error(t),s[r]=e,0===--a&&i(null,s)}var n=this,o=e.stacks,a=Object.keys(o).length,s={}
for(var l in o)n.glyphSource.getSimpleGlyphs(l,o[l],e.uid,r)},e}(r)
e.exports=M},{"../render/line_atlas":86,"../source/query_features":99,"../source/rtl_text_plugin":101,"../source/source":102,"../source/source_cache":103,"../style-spec/deref":112,"../style-spec/diff":113,"../style-spec/function":117,"../style-spec/reference/latest":119,"../symbol/glyph_source":168,"../symbol/sprite_atlas":173,"../util/ajax":196,"../util/browser":197,"../util/dispatcher":203,"../util/evented":205,"../util/global_worker_pool":207,"../util/mapbox":212,"../util/util":218,"./animation_loop":146,"./image_sprite":147,"./light":148,"./style_layer":151,"./validate_style":159}],150:[function(t,e,i){"use strict"
var r=t("../style-spec/function"),n=t("../util/util"),o=function(t,e){var i=this
if(this.value=n.clone(e),this.isFunction=r.isFunctionDefinition(e),this.json=JSON.stringify(this.value),this.minimum=t.minimum,this["function"]=r(this.value,t),this.isFeatureConstant=this["function"].isFeatureConstant,this.isZoomConstant=this["function"].isZoomConstant,this.isFeatureConstant||this.isZoomConstant){if(!this.isZoomConstant){this.stopZoomLevels=[]
for(var o=0,a=i.value.stops;o<a.length;o+=1){var s=a[o]
i.stopZoomLevels.indexOf(s[0])<0&&i.stopZoomLevels.push(s[0])}}}else{this.stopZoomLevels=[]
for(var l=[],u=0,c=i.value.stops;u<c.length;u+=1){var p=c[u],h=p[0].zoom
i.stopZoomLevels.indexOf(h)<0&&(i.stopZoomLevels.push(h),l.push([h,l.length]))}this._functionInterpolationT=r({type:"exponential",stops:l,base:e.base},{type:"number"})}}
o.prototype.calculate=function(t,e){var i=this["function"](t&&t.zoom,e||{})
return void 0!==this.minimum&&i<this.minimum?this.minimum:i},o.prototype.calculateInterpolationT=function(t){return this.isFeatureConstant||this.isZoomConstant?0:this._functionInterpolationT(t&&t.zoom,{})},e.exports=o},{"../style-spec/function":117,"../util/util":218}],151:[function(t,e,i){"use strict"
function r(t){return t.value}var n=t("../util/util"),o=t("./style_transition"),a=t("./style_declaration"),s=t("../style-spec/reference/latest"),l=t("./validate_style"),u=t("./../style-spec/util/parse_color"),c=t("../util/evented"),p="-transition",h=function(t){function e(e){var i=this
t.call(this),this.id=e.id,this.metadata=e.metadata,this.type=e.type,this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,"background"!==e.type&&(this.source=e.source,this.sourceLayer=e["source-layer"],this.filter=e.filter),this.paint={},this.layout={},this._paintSpecifications=s["paint_"+this.type],this._layoutSpecifications=s["layout_"+this.type],this._paintTransitions={},this._paintTransitionOptions={},this._paintDeclarations={},this._layoutDeclarations={},this._layoutFunctions={}
var r,n,o={validate:!1}
for(var a in e){var l=a.match(/^paint(?:\.(.*))?$/)
if(l){var u=l[1]||""
for(r in e[a])i.setPaintProperty(r,e[a][r],u,o)}}for(n in e.layout)i.setLayoutProperty(n,e.layout[n],o)
for(r in i._paintSpecifications)i.paint[r]=i.getPaintValue(r)
for(n in i._layoutSpecifications)i._updateLayoutValue(n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setLayoutProperty=function(t,e,i){if(null==e)delete this._layoutDeclarations[t]
else{var r="layers."+this.id+".layout."+t
if(this._validate(l.layoutProperty,r,t,e,i))return
this._layoutDeclarations[t]=new a(this._layoutSpecifications[t],e)}this._updateLayoutValue(t)},e.prototype.getLayoutProperty=function(t){return this._layoutDeclarations[t]&&this._layoutDeclarations[t].value},e.prototype.getLayoutValue=function(t,e,i){var r=this._layoutSpecifications[t],n=this._layoutDeclarations[t]
return n?n.calculate(e,i):r["default"]},e.prototype.setPaintProperty=function(t,e,i,r){var o="layers."+this.id+(i?'["paint.'+i+'"].':".paint.")+t
if(n.endsWith(t,p))if(this._paintTransitionOptions[i||""]||(this._paintTransitionOptions[i||""]={}),null===e||void 0===e)delete this._paintTransitionOptions[i||""][t]
else{if(this._validate(l.paintProperty,o,t,e,r))return
this._paintTransitionOptions[i||""][t]=e}else if(this._paintDeclarations[i||""]||(this._paintDeclarations[i||""]={}),null===e||void 0===e)delete this._paintDeclarations[i||""][t]
else{if(this._validate(l.paintProperty,o,t,e,r))return
this._paintDeclarations[i||""][t]=new a(this._paintSpecifications[t],e)}},e.prototype.getPaintProperty=function(t,e){return e=e||"",n.endsWith(t,p)?this._paintTransitionOptions[e]&&this._paintTransitionOptions[e][t]:this._paintDeclarations[e]&&this._paintDeclarations[e][t]&&this._paintDeclarations[e][t].value},e.prototype.getPaintValue=function(t,e,i){var r=this._paintSpecifications[t],n=this._paintTransitions[t]
return n?n.calculate(e,i):"color"===r.type&&r["default"]?u(r["default"]):r["default"]},e.prototype.getPaintValueStopZoomLevels=function(t){var e=this._paintTransitions[t]
return e?e.declaration.stopZoomLevels:[]},e.prototype.getLayoutValueStopZoomLevels=function(t){var e=this._layoutDeclarations[t]
return e?e.stopZoomLevels:[]},e.prototype.getPaintInterpolationT=function(t,e){return this._paintTransitions[t].declaration.calculateInterpolationT(e)},e.prototype.getLayoutInterpolationT=function(t,e){return this._layoutDeclarations[t].calculateInterpolationT(e)},e.prototype.isPaintValueFeatureConstant=function(t){var e=this._paintTransitions[t]
return!e||e.declaration.isFeatureConstant},e.prototype.isLayoutValueFeatureConstant=function(t){var e=this._layoutDeclarations[t]
return!e||e.isFeatureConstant},e.prototype.isPaintValueZoomConstant=function(t){var e=this._paintTransitions[t]
return!e||e.declaration.isZoomConstant},e.prototype.isLayoutValueZoomConstant=function(t){var e=this._layoutDeclarations[t]
return!e||e.isZoomConstant},e.prototype.isHidden=function(t){return!!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.layout.visibility},e.prototype.updatePaintTransitions=function(t,e,i,r,o){for(var a=this,s=n.extend({},this._paintDeclarations[""]),l=0;l<t.length;l++)n.extend(s,a._paintDeclarations[t[l]])
var u
for(u in s)a._applyPaintDeclaration(u,s[u],e,i,r,o)
for(u in a._paintTransitions)u in s||a._applyPaintDeclaration(u,null,e,i,r,o)},e.prototype.updatePaintTransition=function(t,e,i,r,n,o){for(var a=this,s=this._paintDeclarations[""][t],l=0;l<e.length;l++){var u=a._paintDeclarations[e[l]]
u&&u[t]&&(s=u[t])}this._applyPaintDeclaration(t,s,i,r,n,o)},e.prototype.recalculate=function(t){var e=this
for(var i in e._paintTransitions)e.paint[i]=e.getPaintValue(i,{zoom:t})
for(var r in e._layoutFunctions)e.layout[r]=e.getLayoutValue(r,{zoom:t})},e.prototype.serialize=function(){var t=this,e={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:n.mapObject(this._layoutDeclarations,r)}
for(var i in t._paintDeclarations)e[""===i?"paint":"paint."+i]=n.mapObject(t._paintDeclarations[i],r)
return n.filterObject(e,function(t,e){return void 0!==t&&!("layout"===e&&!Object.keys(t).length)})},e.prototype._applyPaintDeclaration=function(t,e,i,r,s,l){var u=i.transition?this._paintTransitions[t]:void 0,c=this._paintSpecifications[t]
if(null!==e&&void 0!==e||(e=new a(c,c["default"])),!u||u.declaration.json!==e.json){var h=n.extend({duration:300,delay:0},r,this.getPaintProperty(t+p)),f=this._paintTransitions[t]=new o(c,e,u,h,l)
f.instant()||(f.loopID=s.set(f.endTime-Date.now())),u&&s.cancel(u.loopID)}},e.prototype._updateLayoutValue=function(t){var e=this._layoutDeclarations[t]
e&&e.isFunction?this._layoutFunctions[t]=!0:(delete this._layoutFunctions[t],this.layout[t]=this.getLayoutValue(t))},e.prototype._validate=function(t,e,i,r,n){return(!n||!1!==n.validate)&&l.emitErrors(this,t.call(l,{key:e,layerType:this.type,objectKey:i,value:r,styleSpec:s,style:{glyphs:!0,sprite:!0}}))},e}(c)
e.exports=h
var f={circle:t("./style_layer/circle_style_layer"),fill:t("./style_layer/fill_style_layer"),"fill-extrusion":t("./style_layer/fill_extrusion_style_layer"),line:t("./style_layer/line_style_layer"),symbol:t("./style_layer/symbol_style_layer"),background:h,raster:h}
h.create=function(t){return new f[t.type](t)}},{"../style-spec/reference/latest":119,"../util/evented":205,"../util/util":218,"./../style-spec/util/parse_color":124,"./style_declaration":150,"./style_layer/circle_style_layer":152,"./style_layer/fill_extrusion_style_layer":153,"./style_layer/fill_style_layer":154,"./style_layer/line_style_layer":155,"./style_layer/symbol_style_layer":156,"./style_transition":158,"./validate_style":159}],152:[function(t,e,i){"use strict"
var r=t("../style_layer"),n=t("../../data/bucket/circle_bucket"),o=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new n(t)},e}(r)
e.exports=o},{"../../data/bucket/circle_bucket":56,"../style_layer":151}],153:[function(t,e,i){"use strict"
var r=t("../style_layer"),n=t("../../data/bucket/fill_extrusion_bucket"),o=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getPaintValue=function(e,i,r){var n=t.prototype.getPaintValue.call(this,e,i,r)
return"fill-extrusion-color"===e&&n&&(n[3]=1),n},e.prototype.createBucket=function(t){return new n(t)},e}(r)
e.exports=o},{"../../data/bucket/fill_extrusion_bucket":58,"../style_layer":151}],154:[function(t,e,i){"use strict"
var r=t("../style_layer"),n=t("../../data/bucket/fill_bucket"),o=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getPaintValue=function(e,i,r){var n=this
if("fill-outline-color"===e){if(void 0===this.getPaintProperty("fill-outline-color"))return t.prototype.getPaintValue.call(this,"fill-color",i,r)
for(var o=this._paintTransitions["fill-outline-color"];o;){if(!(o&&o.declaration&&o.declaration.value))return t.prototype.getPaintValue.call(n,"fill-color",i,r)
o=o.oldTransition}}return t.prototype.getPaintValue.call(this,e,i,r)},e.prototype.getPaintValueStopZoomLevels=function(e){return"fill-outline-color"===e&&void 0===this.getPaintProperty("fill-outline-color")?t.prototype.getPaintValueStopZoomLevels.call(this,"fill-color"):t.prototype.getPaintValueStopZoomLevels.call(this,e)},e.prototype.getPaintInterpolationT=function(e,i){return"fill-outline-color"===e&&void 0===this.getPaintProperty("fill-outline-color")?t.prototype.getPaintInterpolationT.call(this,"fill-color",i):t.prototype.getPaintInterpolationT.call(this,e,i)},e.prototype.isPaintValueFeatureConstant=function(e){return"fill-outline-color"===e&&void 0===this.getPaintProperty("fill-outline-color")?t.prototype.isPaintValueFeatureConstant.call(this,"fill-color"):t.prototype.isPaintValueFeatureConstant.call(this,e)},e.prototype.isPaintValueZoomConstant=function(e){return"fill-outline-color"===e&&void 0===this.getPaintProperty("fill-outline-color")?t.prototype.isPaintValueZoomConstant.call(this,"fill-color"):t.prototype.isPaintValueZoomConstant.call(this,e)},e.prototype.createBucket=function(t){return new n(t)},e}(r)
e.exports=o},{"../../data/bucket/fill_bucket":57,"../style_layer":151}],155:[function(t,e,i){"use strict"
var r=t("../style_layer"),n=t("../../data/bucket/line_bucket"),o=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new n(t)},e}(r)
e.exports=o},{"../../data/bucket/line_bucket":59,"../style_layer":151}],156:[function(t,e,i){"use strict"
var r=t("../style_layer"),n=t("../../data/bucket/symbol_bucket"),o=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getLayoutValue=function(e,i,r){var n=t.prototype.getLayoutValue.call(this,e,i,r)
if("auto"!==n)return n
switch(e){case"text-rotation-alignment":case"icon-rotation-alignment":return"line"===this.getLayoutValue("symbol-placement",i,r)?"map":"viewport"
case"text-pitch-alignment":return this.getLayoutValue("text-rotation-alignment",i,r)
case"icon-pitch-alignment":return this.getLayoutValue("icon-rotation-alignment",i,r)
default:return n}},e.prototype.createBucket=function(t){return new n(t)},e}(r)
e.exports=o},{"../../data/bucket/symbol_bucket":60,"../style_layer":151}],157:[function(t,e,i){"use strict"
var r=t("./style_layer"),n=t("../util/util"),o=t("../style-spec/feature_filter"),a=t("../style-spec/group_by_layout"),s=function(t){t&&this.replace(t)}
s.prototype.replace=function(t){var e=this
this.symbolOrder=[]
for(var i=0,r=t;i<r.length;i+=1){var n=r[i]
"symbol"===n.type&&e.symbolOrder.push(n.id)}this._layerConfigs={},this._layers={},this.update(t,[])},s.prototype.update=function(t,e,i){for(var s=this,l=0,u=t;l<u.length;l+=1){var c=u[l]
s._layerConfigs[c.id]=c
var p=s._layers[c.id]=r.create(c)
p.updatePaintTransitions({},{transition:!1}),p.filter=o(p.filter)}for(var h=0,f=e;h<f.length;h+=1){var d=f[h]
delete s._layerConfigs[d],delete s._layers[d]}i&&(this.symbolOrder=i),this.familiesBySource={}
for(var m=a(n.values(this._layerConfigs)),y=0,_=m;y<_.length;y+=1){var v=_[y],g=v.map(function(t){return s._layers[t.id]}),x=g[0]
if(!x.layout||"none"!==x.layout.visibility){var b=x.source||"",w=s.familiesBySource[b]
w||(w=s.familiesBySource[b]={})
var T=x.sourceLayer||"_geojsonTileLayer",z=w[T]
z||(z=w[T]=[]),z.push(g)}}},e.exports=s},{"../style-spec/feature_filter":115,"../style-spec/group_by_layout":118,"../util/util":218,"./style_layer":151}],158:[function(t,e,i){"use strict"
function r(t,e,i){return void 0!==t&&void 0!==e?{from:t.to,fromScale:t.toScale,to:e.to,toScale:e.toScale,t:i}:void 0}var n=t("../util/util"),o=t("../style-spec/util/interpolate"),a={lastIntegerZoom:0,lastIntegerZoomTime:0,lastZoom:0},s=function(t,e,i,n,s){this.declaration=e,this.startTime=this.endTime=(new Date).getTime(),this.oldTransition=i,this.duration=n.duration||0,this.delay=n.delay||0,this.zoomTransitioned="piecewise-constant"===t["function"]&&t.transition,this.interp=this.zoomTransitioned?r:o[t.type],this.zoomHistory=s||a,this.instant()||(this.endTime=this.startTime+this.duration+this.delay),i&&i.endTime<=this.startTime&&delete i.oldTransition}
s.prototype.instant=function(){return!this.oldTransition||!this.interp||0===this.duration&&0===this.delay},s.prototype.calculate=function(t,e,i){var r=this._calculateTargetValue(t,e)
if(this.instant())return r
if((i=i||Date.now())>=this.endTime)return r
var o=this.oldTransition.calculate(t,e,this.startTime),a=n.easeCubicInOut((i-this.startTime-this.delay)/this.duration)
return this.interp(o,r,a)},s.prototype._calculateTargetValue=function(t,e){if(!this.zoomTransitioned)return this.declaration.calculate(t,e)
var i=t.zoom,r=this.zoomHistory.lastIntegerZoom,n=i>r?2:.5,a=this.declaration.calculate({zoom:i>r?i-1:i+1},e),s=this.declaration.calculate({zoom:i},e),l=Math.min((Date.now()-this.zoomHistory.lastIntegerZoomTime)/this.duration,1),u=Math.abs(i-r),c=o(l,1,u)
return void 0!==a&&void 0!==s?{from:a,fromScale:n,to:s,toScale:1,t:c}:void 0},e.exports=s},{"../style-spec/util/interpolate":123,"../util/util":218}],159:[function(t,e,i){"use strict"
e.exports=t("../style-spec/validate_style.min"),e.exports.emitErrors=function(t,e){if(e&&e.length){for(var i=0;i<e.length;i++)t.fire("error",{error:Error(e[i].message)})
return!0}return!1}},{"../style-spec/validate_style.min":145}],160:[function(t,e,i){"use strict"
var r=t("point-geometry"),n=function(t){function e(e,i,r,n){t.call(this,e,i),this.angle=r,void 0!==n&&(this.segment=n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.x,this.y,this.angle,this.segment)},e}(r)
e.exports=n},{"point-geometry":36}],161:[function(t,e,i){"use strict"
function r(t,e,i,r,n){if(void 0===e.segment)return!0
for(var o=e,a=e.segment+1,s=0;s>-i/2;){if(--a<0)return!1
s-=t[a].dist(o),o=t[a]}s+=t[a].dist(t[a+1]),a++
for(var l=[],u=0;i/2>s;){var c=t[a-1],p=t[a],h=t[a+1]
if(!h)return!1
var f=c.angleTo(p)-p.angleTo(h)
for(f=Math.abs((f+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:s,angleDelta:f}),u+=f;s-l[0].distance>r;)u-=l.shift().angleDelta
if(u>n)return!1
a++,s+=p.dist(h)}return!0}e.exports=r},{}],162:[function(t,e,i){"use strict"
function r(t,e,i,r,o){for(var a=[],s=0;s<t.length;s++)for(var l=t[s],u=void 0,c=0;c<l.length-1;c++){var p=l[c],h=l[c+1]
p.x<e&&h.x<e||(p.x<e?p=new n(e,p.y+(h.y-p.y)*((e-p.x)/(h.x-p.x)))._round():h.x<e&&(h=new n(e,p.y+(h.y-p.y)*((e-p.x)/(h.x-p.x)))._round()),p.y<i&&h.y<i||(p.y<i?p=new n(p.x+(h.x-p.x)*((i-p.y)/(h.y-p.y)),i)._round():h.y<i&&(h=new n(p.x+(h.x-p.x)*((i-p.y)/(h.y-p.y)),i)._round()),p.x>=r&&h.x>=r||(p.x>=r?p=new n(r,p.y+(h.y-p.y)*((r-p.x)/(h.x-p.x)))._round():h.x>=r&&(h=new n(r,p.y+(h.y-p.y)*((r-p.x)/(h.x-p.x)))._round()),p.y>=o&&h.y>=o||(p.y>=o?p=new n(p.x+(h.x-p.x)*((o-p.y)/(h.y-p.y)),o)._round():h.y>=o&&(h=new n(p.x+(h.x-p.x)*((o-p.y)/(h.y-p.y)),o)._round()),u&&p.equals(u[u.length-1])||(u=[p],a.push(u)),u.push(h)))))}return a}var n=t("point-geometry")
e.exports=r},{"point-geometry":36}],163:[function(t,e,i){"use strict"
var r=t("../util/struct_array"),n=t("point-geometry"),o=r({members:[{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"offsetX"},{type:"Int16",name:"offsetY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Float32",name:"unadjustedMaxScale"},{type:"Float32",name:"maxScale"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"},{type:"Int16",name:"bbox0"},{type:"Int16",name:"bbox1"},{type:"Int16",name:"bbox2"},{type:"Int16",name:"bbox3"},{type:"Float32",name:"placementScale"}]})
Object.defineProperty(o.prototype.StructType.prototype,"anchorPoint",{get:function(){return new n(this.anchorPointX,this.anchorPointY)}}),e.exports=o},{"../util/struct_array":215,"point-geometry":36}],164:[function(t,e,i){"use strict"
var r=function(t,e,i,r,n,o,a,s,l,u,c){var p=a.top*s-l,h=a.bottom*s+l,f=a.left*s-l,d=a.right*s+l
if(this.boxStartIndex=t.length,u){var m=h-p,y=d-f
if(m>0)if(m=Math.max(10*s,m),c){var _=e[i.segment+1].sub(e[i.segment])._unit()._mult(y),v=[i.sub(_),i.add(_)]
this._addLineCollisionBoxes(t,v,i,0,y,m,r,n,o)}else this._addLineCollisionBoxes(t,e,i,i.segment,y,m,r,n,o)}else t.emplaceBack(i.x,i.y,0,0,f,p,d,h,1/0,1/0,r,n,o,0,0,0,0,0)
this.boxEndIndex=t.length}
r.prototype._addLineCollisionBoxes=function(t,e,i,r,n,o,a,s,l){var u=o/2,c=Math.floor(n/u),p=Math.floor(c/2),h=-o/2,f=i,d=r+1,m=h,y=-n/2,_=y-n/8
do{if(--d<0){if(m>y)return
d=0
break}m-=e[d].dist(f),f=e[d]}while(m>_)
for(var v=e[d].dist(e[d+1]),g=-p;c+p>g;g++){var x=g*u,b=y+x
if(0>x&&(b+=x),x>n&&(b+=x-n),!(m>b)){for(;b>m+v;){if(m+=v,++d+1>=e.length)return
v=e[d].dist(e[d+1])}var w=b-m,T=e[d],z=e[d+1],E=z.sub(T)._unit()._mult(w)._add(T)._round(),S=Math.max(Math.abs(b-h)-u/2,0),L=n/2/S;(0>g||g>=c)&&(L=Math.min(L,.99)),t.emplaceBack(E.x,E.y,E.x-i.x,E.y-i.y,-o/2,-o/2,o/2,o/2,L,L,a,s,l,0,0,0,0,0)}}},e.exports=r},{}],165:[function(t,e,i){"use strict"
var r=t("point-geometry"),n=t("../data/extent"),o=t("grid-index"),a=t("../util/intersection_tests"),s=function(t,e,i,r,a,s,l){void 0===s&&(s=new o(n,12,6)),void 0===l&&(l=new o(n,12,0)),this.angle=t,this.pitch=e,this.cameraToCenterDistance=i,this.cameraToTileDistance=r,this.grid=s,this.ignoredGrid=l,this.perspectiveRatio=1+.5*(r/i-1),this.minScale=.5/this.perspectiveRatio,this.maxScale=2/this.perspectiveRatio
var u=Math.sin(this.angle),c=Math.cos(this.angle)
this.rotationMatrix=[c,-u,u,c],this.reverseRotationMatrix=[c,u,-u,c],this.yStretch=Math.max(1,r/(i*Math.cos(e/180*Math.PI))),this.collisionBoxArray=a,0===a.length&&(a.emplaceBack(),a.emplaceBack(0,0,0,0,0,-32767,0,32767,1/0,1/0,0,0,0,0,0,0,0,0,0),a.emplaceBack(n,0,0,0,0,-32767,0,32767,1/0,1/0,0,0,0,0,0,0,0,0,0),a.emplaceBack(0,0,0,0,-32767,0,32767,0,1/0,1/0,0,0,0,0,0,0,0,0,0),a.emplaceBack(0,n,0,0,-32767,0,32767,0,1/0,1/0,0,0,0,0,0,0,0,0,0)),this.tempCollisionBox=a.get(0),this.edges=[a.get(1),a.get(2),a.get(3),a.get(4)]}
s.deserialize=function(t,e){return new s(t.angle,t.pitch,t.cameraToCenterDistance,t.cameraToTileDistance,e,new o(t.grid),new o(t.ignoredGrid))},s.prototype.serialize=function(t){var e=this.grid.toArrayBuffer(),i=this.ignoredGrid.toArrayBuffer()
return t&&(t.push(e),t.push(i)),{angle:this.angle,pitch:this.pitch,cameraToCenterDistance:this.cameraToCenterDistance,cameraToTileDistance:this.cameraToTileDistance,grid:e,ignoredGrid:i}},s.prototype.placeCollisionFeature=function(t,e,i){for(var n=this,o=this.collisionBoxArray,a=this.minScale,s=this.rotationMatrix,l=this.yStretch,u=t.boxStartIndex;u<t.boxEndIndex;u++){var c=o.get(u),p=c.anchorPoint._matMult(s),h=p.x,f=p.y,d=h+c.x1*n.perspectiveRatio,m=f+c.y1*l*n.perspectiveRatio,y=h+c.x2*n.perspectiveRatio,_=f+c.y2*l*n.perspectiveRatio
c.bbox0=d,c.bbox1=m,c.bbox2=y,c.bbox3=_
var v=new r(c.offsetX,c.offsetY)._matMult(s),g=v.x*v.x,x=v.y*v.y,b=x*l*l,w=Math.sqrt((g+b)/(g+x))||1
if(c.maxScale=c.unadjustedMaxScale*w,!e)for(var T=n.grid.query(d,m,y,_),z=0;z<T.length;z++){var E=o.get(T[z]),S=E.anchorPoint._matMult(s)
if((a=n.getPlacementScale(a,p,c,S,E))>=n.maxScale)return a}if(i){var L=void 0
if(n.angle){var M=n.reverseRotationMatrix,A=new r(c.x1,c.y1).matMult(M),C=new r(c.x2,c.y1).matMult(M),P=new r(c.x1,c.y2).matMult(M),k=new r(c.x2,c.y2).matMult(M)
L=n.tempCollisionBox,L.anchorPointX=c.anchorPoint.x,L.anchorPointY=c.anchorPoint.y,L.x1=Math.min(A.x,C.x,P.x,k.x),L.y1=Math.min(A.y,C.x,P.x,k.x),L.x2=Math.max(A.x,C.x,P.x,k.x),L.y2=Math.max(A.y,C.x,P.x,k.x),L.maxScale=c.maxScale}else L=c
for(var I=0;I<this.edges.length;I++){var D=n.edges[I]
if((a=n.getPlacementScale(a,c.anchorPoint,L,D.anchorPoint,D))>=n.maxScale)return a}}}return a},s.prototype.queryRenderedSymbols=function(t,e){var i={},n=[]
if(0===t.length||0===this.grid.keys.length&&0===this.ignoredGrid.keys.length)return n
for(var o=this.collisionBoxArray,s=this.rotationMatrix,l=this.yStretch,u=[],c=1/0,p=1/0,h=-1/0,f=-1/0,d=0;d<t.length;d++)for(var m=t[d],y=0;y<m.length;y++){var _=m[y].matMult(s)
c=Math.min(c,_.x),p=Math.min(p,_.y),h=Math.max(h,_.x),f=Math.max(f,_.y),u.push(_)}for(var v=this.grid.query(c,p,h,f),g=this.ignoredGrid.query(c,p,h,f),x=0;x<g.length;x++)v.push(g[x])
for(var b=e/this.perspectiveRatio,w=Math.pow(2,Math.ceil(Math.log(b)/Math.LN2*10)/10),T=0;T<v.length;T++){var z=o.get(v[T]),E=z.sourceLayerIndex,S=z.featureIndex
if(void 0===i[E]&&(i[E]={}),!i[E][S]&&!(w<z.placementScale||w>z.maxScale)){var L=z.anchorPoint.matMult(s),M=L.x+z.x1/b,A=L.y+z.y1/b*l,C=L.x+z.x2/b,P=L.y+z.y2/b*l,k=[new r(M,A),new r(C,A),new r(C,P),new r(M,P)]
a.polygonIntersectsPolygon(u,k)&&(i[E][S]=!0,n.push(v[T]))}}return n},s.prototype.getPlacementScale=function(t,e,i,r,n){var o=e.x-r.x,a=e.y-r.y,s=(n.x1-i.x2)/o,l=(n.x2-i.x1)/o,u=(n.y1-i.y2)*this.yStretch/a,c=(n.y2-i.y1)*this.yStretch/a;(isNaN(s)||isNaN(l))&&(s=l=1),(isNaN(u)||isNaN(c))&&(u=c=1)
var p=Math.min(Math.max(s,l),Math.max(u,c)),h=n.maxScale,f=i.maxScale
return p>h&&(p=h),p>f&&(p=f),p>t&&p>=n.placementScale&&(t=p),t},s.prototype.insertCollisionFeature=function(t,e,i){for(var r=this,n=i?this.ignoredGrid:this.grid,o=this.collisionBoxArray,a=t.boxStartIndex;a<t.boxEndIndex;a++){var s=o.get(a)
s.placementScale=e,e<r.maxScale&&(1===r.perspectiveRatio||s.maxScale>=1)&&n.insert(a,s.bbox0,s.bbox1,s.bbox2,s.bbox3)}},e.exports=s},{"../data/extent":64,"../util/intersection_tests":209,"grid-index":19,"point-geometry":36}],166:[function(t,e,i){"use strict"
function r(t,e,i,r,o,a,s,l,u){var c=r?.6*a*s:0,p=Math.max(r?r.right-r.left:0,o?o.right-o.left:0),h=0===t[0].x||t[0].x===u||0===t[0].y||t[0].y===u
e/4>e-p*s&&(e=p*s+e/4)
var f=2*a
return n(t,h?e/2*l%e:(p/2+f)*s*l%e,e,c,i,p*s,h,!1,u)}function n(t,e,i,r,l,u,c,p,h){for(var f=u/2,d=0,m=0;m<t.length-1;m++)d+=t[m].dist(t[m+1])
for(var y=0,_=e-i,v=[],g=0;g<t.length-1;g++){for(var x=t[g],b=t[g+1],w=x.dist(b),T=b.angleTo(x);y+w>_+i;){_+=i
var z=(_-y)/w,E=o(x.x,b.x,z),S=o(x.y,b.y,z)
if(E>=0&&h>E&&S>=0&&h>S&&_-f>=0&&d>=_+f){var L=new a(E,S,T,g)._round()
r&&!s(t,L,u,r,l)||v.push(L)}}y+=w}return p||v.length||c||(v=n(t,y/2,i,r,l,u,c,!0,h)),v}var o=t("../style-spec/util/interpolate"),a=t("../symbol/anchor"),s=t("./check_max_angle")
e.exports=r},{"../style-spec/util/interpolate":123,"../symbol/anchor":160,"./check_max_angle":161}],167:[function(t,e,i){"use strict"
var r=t("@mapbox/shelf-pack"),n=t("../util/util"),o=4,a=128,s=2048,l=function(){this.width=a,this.height=a,this.atlas=new r(this.width,this.height),this.index={},this.ids={},this.data=new Uint8Array(this.width*this.height)}
l.prototype.getGlyphs=function(){var t,e,i,r=this,n={}
for(var o in r.ids)t=o.split("#"),e=t[0],i=t[1],n[e]||(n[e]=[]),n[e].push(i)
return n},l.prototype.getRects=function(){var t,e,i,r=this,n={}
for(var o in r.ids)t=o.split("#"),e=t[0],i=t[1],n[e]||(n[e]={}),n[e][i]=r.index[o]
return n},l.prototype.addGlyph=function(t,e,i,r){var o=this
if(!i)return null
var a=e+"#"+i.id
if(this.index[a])return this.ids[a].indexOf(t)<0&&this.ids[a].push(t),this.index[a]
if(!i.bitmap)return null
var s=i.width+2*r,l=i.height+2*r,u=s+2,c=l+2,p=this.atlas.packOne(u,c)
if(p||(this.resize(),p=this.atlas.packOne(u,c)),!p)return n.warnOnce("glyph bitmap overflow"),null
this.index[a]=p,this.ids[a]=[t]
for(var h=this.data,f=i.bitmap,d=0;l>d;d++)for(var m=o.width*(p.y+d+1)+p.x+1,y=s*d,_=0;s>_;_++)h[m+_]=f[y+_]
return this.dirty=!0,p},l.prototype.resize=function(){var t=this,e=this.width,i=this.height
if(!(e>=s||i>=s)){this.texture&&(this.gl&&this.gl.deleteTexture(this.texture),this.texture=null),this.width*=o,this.height*=o,this.atlas.resize(this.width,this.height)
for(var r=new ArrayBuffer(this.width*this.height),n=0;i>n;n++){var a=new Uint8Array(t.data.buffer,i*n,e)
new Uint8Array(r,i*n*o,e).set(a)}this.data=new Uint8Array(r)}},l.prototype.bind=function(t){this.gl=t,this.texture?t.bindTexture(t.TEXTURE_2D,this.texture):(this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.ALPHA,this.width,this.height,0,t.ALPHA,t.UNSIGNED_BYTE,null))},l.prototype.updateTexture=function(t){this.bind(t),this.dirty&&(t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.width,this.height,t.ALPHA,t.UNSIGNED_BYTE,this.data),this.dirty=!1)},e.exports=l},{"../util/util":218,"@mapbox/shelf-pack":2}],168:[function(t,e,i){"use strict"
function r(t,e,i,r){return r=r||"abc",i.replace("{s}",r[t.length%r.length]).replace("{fontstack}",t).replace("{range}",e)}var n=t("../util/mapbox").normalizeGlyphsURL,o=t("../util/ajax"),a=t("../util/glyphs"),s=t("../symbol/glyph_atlas"),l=t("pbf"),u=t("@mapbox/tiny-sdf"),c=t("../util/is_char_in_unicode_block"),p=t("../util/evented"),h=function(t,e,i){this.advance=t.advance,this.left=t.left-i-1,this.top=t.top+i+1,this.rect=e},f=function(t){function e(e,i,r){t.call(this),this.url=e&&n(e),this.atlases={},this.stacks={},this.loading={},this.localIdeographFontFamily=i,this.tinySDFs={},this.setEventedParent(r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getSimpleGlyphs=function(t,e,i,r){var n=this
void 0===this.stacks[t]&&(this.stacks[t]={ranges:{},cjkGlyphs:{}}),void 0===this.atlases[t]&&(this.atlases[t]=new s)
for(var o={},a=this.stacks[t],l=this.atlases[t],u={},p=0,f=0;f<e.length;f++)!function(e){var r=Math.floor(e/256)
if(n.localIdeographFontFamily&&(c["CJK Unified Ideographs"](e)||c["Hangul Syllables"](e))){a.cjkGlyphs[e]||(a.cjkGlyphs[e]=n.loadCJKGlyph(t,e))
var s=a.cjkGlyphs[e],f=l.addGlyph(i,t,s,3)
s&&(o[e]=new h(s,f,3))}else if(a.ranges[r]){var d=a.ranges[r].glyphs[e],m=l.addGlyph(i,t,d,3)
d&&(o[e]=new h(d,m,3))}else void 0===u[r]&&(u[r]=[],p++),u[r].push(e)}(e[f])
p||r(void 0,o,t)
var d=function(e,a,s){if(e)return void n.fire("error",{error:e})
for(var c=n.stacks[t].ranges[a]=s.stacks[0],f=0;f<u[a].length;f++){var d=u[a][f],m=c.glyphs[d],y=l.addGlyph(i,t,m,3)
m&&(o[d]=new h(m,y,3))}--p||r(void 0,o,t)}
for(var m in u)n.loadRange(t,m,d)},e.prototype.createTinySDF=function(t,e){return new u(24,3,8,.25,t,e)},e.prototype.loadCJKGlyph=function(t,e){var i=this.tinySDFs[t]
if(!i){var r="400";/bold/i.test(t)?r="900":/medium/i.test(t)?r="500":/light/i.test(t)&&(r="200"),i=this.tinySDFs[t]=this.createTinySDF(this.localIdeographFontFamily,r)}return{id:e,bitmap:i.draw(String.fromCharCode(e)),width:24,height:24,left:0,top:-8,advance:24}},e.prototype.loadPBF=function(t,e){o.getArrayBuffer(t,e)},e.prototype.loadRange=function(t,e,i){if(256*e>65535)return i("glyphs > 65535 not supported")
void 0===this.loading[t]&&(this.loading[t]={})
var n=this.loading[t]
if(n[e])n[e].push(i)
else{n[e]=[i]
var o=256*e+"-"+(256*e+255),s=r(t,o,this.url)
this.loadPBF(s,function(t,i){for(var r=!t&&new a(new l(i.data)),o=0;o<n[e].length;o++)n[e][o](t,e,r)
delete n[e]})}},e.prototype.getGlyphAtlas=function(t){return this.atlases[t]},e}(p)
e.exports=f},{"../symbol/glyph_atlas":167,"../util/ajax":196,"../util/evented":205,"../util/glyphs":208,"../util/is_char_in_unicode_block":210,"../util/mapbox":212,"@mapbox/tiny-sdf":3,pbf:35}],169:[function(t,e,i){"use strict"
e.exports=function(t){function e(e){s.push(t[e]),l++}function i(t,e,i){var r=a[t]
return delete a[t],a[e]=r,s[r].geometry[0].pop(),s[r].geometry[0]=s[r].geometry[0].concat(i[0]),r}function r(t,e,i){var r=o[e]
return delete o[e],o[t]=r,s[r].geometry[0].shift(),s[r].geometry[0]=i[0].concat(s[r].geometry[0]),r}function n(t,e,i){var r=i?e[0][e[0].length-1]:e[0][0]
return t+":"+r.x+":"+r.y}for(var o={},a={},s=[],l=0,u=0;u<t.length;u++){var c=t[u],p=c.geometry,h=c.text
if(h){var f=n(h,p),d=n(h,p,!0)
if(f in a&&d in o&&a[f]!==o[d]){var m=r(f,d,p),y=i(f,d,s[m].geometry)
delete o[f],delete a[d],a[n(h,s[y].geometry,!0)]=y,s[m].geometry=null}else f in a?i(f,d,p):d in o?r(f,d,p):(e(u),o[f]=l-1,a[d]=l-1)}else e(u)}return s.filter(function(t){return t.geometry})}},{}],170:[function(t,e,i){"use strict"
function r(t,e,i,r,n){var o=h.identity(new Float32Array(16))
return e?(h.identity(o),h.scale(o,o,[1/n,1/n,1]),i||h.rotateZ(o,o,r.angle)):(h.scale(o,o,[r.width/2,-r.height/2,1]),h.translate(o,o,[1,-1,0]),h.multiply(o,o,t)),o}function n(t,e,i,r,n){var o=h.identity(new Float32Array(16))
return e?(h.multiply(o,o,t),h.scale(o,o,[n,n,1]),i||h.rotateZ(o,o,-r.angle)):(h.scale(o,o,[1,-1,1]),h.translate(o,o,[-1,-1,0]),h.scale(o,o,[2/r.width,2/r.height,1])),o}function o(t,e){var i=[t.x,t.y,0,1]
return f.transformMat4(i,i,e),new p(i[0]/i[3],i[1]/i[3])}function a(t,e,i,r){var n=t[0]/t[3],o=t[1]/t[3]
return n>=-i[0]&&n<=i[0]&&o>=-i[1]&&o<=i[1]&&r.frameHistory.isVisible(e)}function s(t,e,i,r,n,s,u,h,m,y){var _=r?t.textSizeData:t.iconSizeData,v=d.evaluateSizeForZoom(_,i.transform,y,r),g=[256/i.width*2+1,256/i.height*2+1],x=r?t.buffers.glyph.dynamicLayoutVertexArray:t.buffers.icon.dynamicLayoutVertexArray
x.clear()
for(var b=t.lineVertexArray,w=r?t.placedGlyphArray:t.placedIconArray,T=0;T<w.length;T++){var z=w.get(T),E=[z.anchorX,z.anchorY,0,1]
if(f.transformMat4(E,E,e),a(E,z.placementZoom,g,i)){var S=E[3],L=1+.5*(S/i.transform.cameraToCenterDistance-1),M=d.evaluateSizeForFeature(_,v,z),A=u?M*L:M/L,C=o(new p(z.anchorX,z.anchorY),n),P={},k=l(z,A,!1,h,e,n,s,t.glyphOffsetArray,b,x,C,P);(k.notEnoughRoom||k.needsFlipping&&l(z,A,!0,h,e,n,s,t.glyphOffsetArray,b,x,C,P).notEnoughRoom)&&c(z.numGlyphs,x)}else c(z.numGlyphs,x)}r?t.buffers.glyph.dynamicLayoutVertexBuffer.updateData(x.serialize()):t.buffers.icon.dynamicLayoutVertexBuffer.updateData(x.serialize())}function l(t,e,i,r,n,a,s,l,c,p,h,f){var d,y=e/24,_=t.lineOffsetX*e,v=t.lineOffsetY*e
if(t.numGlyphs>1){var g=t.glyphStartIndex+t.numGlyphs,x=l.get(t.glyphStartIndex).offsetX,b=l.get(g-1).offsetX,w=t.lineStartIndex,T=t.lineStartIndex+t.lineLength,z=u(y*x,_,v,i,h,t.segment,w,T,c,a,f)
if(!z)return{notEnoughRoom:!0}
var E=u(y*b,_,v,i,h,t.segment,w,T,c,a,f)
if(!E)return{notEnoughRoom:!0}
var S=o(z.point,s),L=o(E.point,s)
if(r&&!i&&(t.vertical?S.y<L.y:S.x>L.x))return{needsFlipping:!0}
d=[z]
for(var M=t.glyphStartIndex+1;g-1>M;M++){var A=l.get(M)
d.push(u(y*A.offsetX,_,v,i,h,t.segment,w,T,c,a,f))}d.push(E)}else{if(r&&!i){var C=o(c.get(t.lineStartIndex+t.segment),n),P=o(c.get(t.lineStartIndex+t.segment+1),n)
if(t.vertical?P.y>C.y:P.x<C.x)return{needsFlipping:!0}}var k=l.get(t.glyphStartIndex),I=u(y*k.offsetX,_,v,i,h,t.segment,t.lineStartIndex,t.lineStartIndex+t.lineLength,c,a,f)
if(!I)return{notEnoughRoom:!0}
d=[I]}for(var D=t.placementZoom,R=0,O=d;R<O.length;R+=1){var B=O[R]
m(p,B.point,B.angle,D)}return{}}function u(t,e,i,r,n,a,s,l,u,c,p){var h=r?t-e:t+e,f=h>0?1:-1,d=0
r&&(f*=-1,d=Math.PI),0>f&&(d+=Math.PI)
for(var m=f>0?s+a:s+a+1,y=n,_=n,v=0,g=0,x=Math.abs(h);x>=v+g;){if((m+=f)<s||m>=l)return null
_=y,y=p[m],void 0===y&&(y=p[m]=o(u.get(m),c)),v+=g,g=_.dist(y)}var b=(x-v)/g,w=y.sub(_),T=w.mult(b)._add(_)
return T._add(w._unit()._perp()._mult(i*f)),{point:T,angle:d+Math.atan2(y.y-_.y,y.x-_.x)}}function c(t,e){for(var i=0;t>i;i++)m(e,y,0,25)}var p=t("point-geometry"),h=t("@mapbox/gl-matrix").mat4,f=t("@mapbox/gl-matrix").vec4,d=t("./symbol_size"),m=t("../data/bucket/symbol_bucket").addDynamicAttributes
e.exports={updateLineLabels:s,getLabelPlaneMatrix:r,getGlCoordMatrix:n}
var y=new p(-1/0,-1/0)},{"../data/bucket/symbol_bucket":60,"./symbol_size":174,"@mapbox/gl-matrix":1,"point-geometry":36}],171:[function(t,e,i){"use strict"
function r(t,e,i,r,n,o,a){this.tl=t,this.tr=e,this.bl=i,this.br=r,this.tex=n,this.writingMode=o,this.glyphOffset=a}function n(t,e,i,n,o,s,l){var u,c,p,h,f=e.image,d=i.layout,m=e.top-1/f.pixelRatio,y=e.left-1/f.pixelRatio,_=e.bottom+1/f.pixelRatio,v=e.right+1/f.pixelRatio
if("none"!==d["icon-text-fit"]&&o){var g=v-y,x=_-m,b=d["text-size"]/24,w=o.left*b,T=o.right*b,z=o.top*b,E=o.bottom*b,S=T-w,L=E-z,M=d["icon-text-fit-padding"][0],A=d["icon-text-fit-padding"][1],C=d["icon-text-fit-padding"][2],P=d["icon-text-fit-padding"][3],k="width"===d["icon-text-fit"]?.5*(L-x):0,I="height"===d["icon-text-fit"]?.5*(S-g):0,D="width"===d["icon-text-fit"]||"both"===d["icon-text-fit"]?S:g,R="height"===d["icon-text-fit"]||"both"===d["icon-text-fit"]?L:x
u=new a(w+I-P,z+k-M),c=new a(w+I+A+D,z+k-M),p=new a(w+I+A+D,z+k+C+R),h=new a(w+I-P,z+k+C+R)}else u=new a(y,m),c=new a(v,m),p=new a(v,_),h=new a(y,_)
var O=i.getLayoutValue("icon-rotate",s,l)*Math.PI/180
if(O){var B=Math.sin(O),F=Math.cos(O),j=[F,-B,B,F]
u._matMult(j),c._matMult(j),h._matMult(j),p._matMult(j)}return[new r(u,c,h,p,{x:f.textureRect.x-1,y:f.textureRect.y-1,w:f.textureRect.w+2,h:f.textureRect.h+2},void 0,[0,0])]}function o(t,e,i,n,o,s){for(var l=i.getLayoutValue("text-rotate",o,s)*Math.PI/180,u=i.getLayoutValue("text-offset",o,s).map(function(t){return 24*t}),c=e.positionedGlyphs,p=[],h=0;h<c.length;h++){var f=c[h],d=f.glyph
if(d){var m=d.rect
if(m){var y=d.advance/2,_=n?[f.x+y,f.y]:[0,0],v=n?[0,0]:[f.x+y+u[0],f.y+u[1]],g=d.left-y+v[0],x=-d.top+v[1],b=g+m.w,w=x+m.h,T=new a(g,x),z=new a(b,x),E=new a(g,w),S=new a(b,w),L=new a(v[0]-y,d.advance/2)
if(0!==f.angle&&(T._sub(L)._rotate(f.angle)._add(L),z._sub(L)._rotate(f.angle)._add(L),E._sub(L)._rotate(f.angle)._add(L),S._sub(L)._rotate(f.angle)._add(L)),l){var M=Math.sin(l),A=Math.cos(l),C=[A,-M,M,A]
T._matMult(C),z._matMult(C),E._matMult(C),S._matMult(C)}p.push(new r(T,z,E,S,m,e.writingMode,_))}}}return p}var a=t("point-geometry")
e.exports={getIconQuads:n,getGlyphQuads:o,SymbolQuad:r}},{"point-geometry":36}],172:[function(t,e,i){"use strict"
function r(t,e,i,r,n){this.codePoint=t,this.x=e,this.y=i,this.glyph=r||null,this.angle=n}function n(t,e,i,r,n,o,a){this.positionedGlyphs=t,this.text=e,this.top=i,this.bottom=r,this.left=n,this.right=o,this.writingMode=a}function o(t,e){for(var i=[],r=0,n=0,o=e;n<o.length;n+=1){var a=o[n]
i.push(t.substring(r,a)),r=a}return r<t.length&&i.push(t.substring(r,t.length)),i}function a(t,e,i,r,a,s,l,u,c,p){var f=t.trim()
p===w.vertical&&(f=x(f))
var m,y=[],_=new n(y,f,u[1],u[1],u[0],u[0],p)
return m=b.processBidirectionalText?b.processBidirectionalText(f,h(f,l,i,e)):o(f,h(f,l,i,e)),d(_,e,m,r,a,s,u,p,l,c),!!y.length&&_}function s(t,e,i,r){var n=0
for(var o in t){var a=r[t.charCodeAt(o)]
a&&(n+=a.advance+e)}return n/Math.max(1,Math.ceil(n/i))}function l(t,e,i,r){var n=Math.pow(t-e,2)
return r?e>t?n/2:2*n:n+Math.abs(i)*i}function u(t,e){var i=0
return 10===t&&(i-=1e4),40!==t&&65288!==t||(i+=50),41!==e&&65289!==e||(i+=50),i}function c(t,e,i,r,n,o){for(var a=null,s=l(e,i,n,o),u=0,c=r;u<c.length;u+=1){var p=c[u],h=e-p.x,f=l(h,i,n,o)+p.badness
s>=f&&(a=p,s=f)}return{index:t,x:e,priorBreak:a,badness:s}}function p(t){return t?p(t.priorBreak).concat(t.index):[]}function h(t,e,i,r){if(!i)return[]
if(!t)return[]
for(var n=[],o=s(t,e,i,r),a=0,l=0;l<t.length;l++){var h=t.charCodeAt(l),f=r[h]
f&&!T[h]&&(a+=f.advance+e),l<t.length-1&&(z[h]||g.charAllowsIdeographicBreaking(h))&&n.push(c(l+1,a,o,n,u(h,t.charCodeAt(l+1)),!1))}return p(c(t.length,a,o,n,0,!0))}function f(t){var e=.5,i=.5
switch(t){case"right":case"top-right":case"bottom-right":e=1
break
case"left":case"top-left":case"bottom-left":e=0}switch(t){case"bottom":case"bottom-right":case"bottom-left":i=1
break
case"top":case"top-right":case"top-left":i=0}return{horizontalAlign:e,verticalAlign:i}}function d(t,e,i,n,o,a,s,l,u,c){var p=0,h=-17,d=0,_=t.positionedGlyphs,v="right"===a?1:"left"===a?0:.5
for(var x in i){var b=i[x].trim()
if(b.length){for(var T=_.length,z=0;z<b.length;z++){var E=b.charCodeAt(z),S=e[E]
S&&(g.charHasUprightVerticalOrientation(E)&&l!==w.horizontal?(_.push(new r(E,p,0,S,-Math.PI/2)),p+=c+u):(_.push(new r(E,p,h,S,0)),p+=S.advance+u))}if(_.length!==T){var L=p-u
d=Math.max(L,d),m(_,e,T,_.length-1,v)}p=0,h+=n}else h+=n}var M=f(o)
y(_,v,M.horizontalAlign,M.verticalAlign,d,n,i.length)
var A=i.length*n
t.top+=-M.verticalAlign*A,t.bottom=t.top+A,t.left+=-M.horizontalAlign*d,t.right=t.left+d}function m(t,e,i,r,n){if(n)for(var o=e[t[r].codePoint].advance,a=(t[r].x+o)*n,s=i;r>=s;s++)t[s].x-=a}function y(t,e,i,r,n,o,a){for(var s=(e-i)*n,l=(-r*a+.5)*o,u=0;u<t.length;u++)t[u].x+=s,t[u].y+=l}function _(t,e){var i=e[0],r=e[1],n=i-t.displaySize[0]/2,o=n+t.displaySize[0],a=r-t.displaySize[1]/2
return new v(t,a,a+t.displaySize[1],n,o)}function v(t,e,i,r,n){this.image=t,this.top=e,this.bottom=i,this.left=r,this.right=n}var g=t("../util/script_detection"),x=t("../util/verticalize_punctuation"),b=t("../source/rtl_text_plugin"),w={horizontal:1,vertical:2}
e.exports={shapeText:a,shapeIcon:_,WritingMode:w}
var T={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},z={10:!0,32:!0,38:!0,40:!0,41:!0,43:!0,45:!0,47:!0,173:!0,183:!0,8203:!0,8208:!0,8211:!0,8231:!0}},{"../source/rtl_text_plugin":101,"../util/script_detection":213,"../util/verticalize_punctuation":220}],173:[function(t,e,i){"use strict"
function r(t){var e={x:t.rect.x+c,y:t.rect.y+c,w:t.rect.w-2*c,h:t.rect.h-2*c}
return{sdf:t.sdf,pixelRatio:t.pixelRatio,isNativePixelRatio:t.pixelRatio===a.devicePixelRatio,textureRect:e,tl:[e.x,e.y],br:[e.x+e.w,e.y+e.h],displaySize:[e.w/t.pixelRatio,e.h/t.pixelRatio]}}function n(t,e,i,r,n,o,a,s,l,u,c){var p,h,f=r*e+i,d=s*o+a
if(c)for(d-=o,h=-1;u>=h;h++,d+=o)for(f=((h+u)%u+r)*e+i,p=-1;l>=p;p++)n[d+p]=t[f+(p+l)%l]
else for(h=0;u>h;h++,f+=e,d+=o)for(p=0;l>p;p++)n[d+p]=t[f+p]}var o=t("@mapbox/shelf-pack"),a=t("../util/browser"),s=t("../util/util"),l=t("../util/window"),u=t("../util/evented"),c=1,p=function(t){function e(e,i){t.call(this),this.images={},this.data=!1,this.texture=0,this.filter=0,this.width=Math.ceil(e*a.devicePixelRatio),this.height=Math.ceil(i*a.devicePixelRatio),this.shelfPack=new o(this.width,this.height),this.dirty=!0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getPixelSize=function(){return[this.width,this.height]},e.prototype.allocateImage=function(t,e){var i=t+2*c,r=e+2*c,n=this.shelfPack.packOne(i,r)
return n||(s.warnOnce("SpriteAtlas out of space."),null)},e.prototype.addImage=function(t,e,i){var r,n,o
if(e instanceof l.HTMLImageElement?(r=e.width,n=e.height,e=a.getImageData(e),o=1):(r=i.width,n=i.height,o=i.pixelRatio||1),ArrayBuffer.isView(e)&&(e=new Uint32Array(e.buffer)),!(e instanceof Uint32Array))return this.fire("error",{error:Error("Image provided in an invalid format. Supported formats are HTMLImageElement and ArrayBufferView.")})
if(this.images[t])return this.fire("error",{error:Error("An image with this name already exists.")})
var s=this.allocateImage(r,n)
return s?(this.images[t]={rect:s,width:r,height:n,pixelRatio:o,sdf:!1},this.copy(e,r,s,{x:0,y:0,width:r,height:n},!1),this.fire("data",{dataType:"style"}),void 0):this.fire("error",{error:Error("There is not enough space to add this image.")})},e.prototype.removeImage=function(t){var e=this.images[t]
return delete this.images[t],e?(this.shelfPack.unref(e.rect),void this.fire("data",{dataType:"style"})):this.fire("error",{error:Error("No image with this name exists.")})},e.prototype.getIcon=function(t){return this._getImage(t,!1)},e.prototype.getPattern=function(t){return this._getImage(t,!0)},e.prototype._getImage=function(t,e){if(this.images[t])return r(this.images[t])
if(!this.sprite)return null
var i=this.sprite.getSpritePosition(t)
if(!i.width||!i.height)return null
var n=this.allocateImage(i.width,i.height)
if(!n)return null
var o={rect:n,width:i.width,height:i.height,sdf:i.sdf,pixelRatio:i.pixelRatio}
if(this.images[t]=o,!this.sprite.imgData)return null
var a=new Uint32Array(this.sprite.imgData.buffer)
return this.copy(a,this.sprite.width,n,i,e),r(o)},e.prototype.allocate=function(){var t=this
if(!this.data){this.data=new Uint32Array(this.width*this.height)
for(var e=0;e<this.data.length;e++)t.data[e]=0}},e.prototype.copy=function(t,e,i,r,o){this.allocate()
var a=this.data
n(t,e,r.x,r.y,a,this.getPixelSize()[0],i.x+c,i.y+c,r.width,r.height,o),this.dirty=!0},e.prototype.setSprite=function(t){t&&this.canvas&&(this.canvas.width=this.width,this.canvas.height=this.height),this.sprite=t},e.prototype.addIcons=function(t,e){for(var i=this,r={},n=0,o=t;n<o.length;n+=1){var a=o[n]
r[a]=i.getIcon(a)}e(null,r)},e.prototype.bind=function(t,e){var i=!1
this.texture?t.bindTexture(t.TEXTURE_2D,this.texture):(this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),i=!0)
var r=e?t.LINEAR:t.NEAREST
r!==this.filter&&(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,r),this.filter=r),this.dirty&&(this.allocate(),i?t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(this.data.buffer)):t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.width,this.height,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(this.data.buffer)),this.dirty=!1)},e}(u)
e.exports=p},{"../util/browser":197,"../util/evented":205,"../util/util":218,"../util/window":199,"@mapbox/shelf-pack":2}],174:[function(t,e,i){"use strict"
function r(t,e,i){var r=e
return t.isFeatureConstant?r.uSize:t.isZoomConstant?i.lowerSize/10:o.number(i.lowerSize/10,i.upperSize/10,r.uSizeT)}function n(t,e,i,r){var n={}
if(t.isZoomConstant||t.isFeatureConstant)if(t.isFeatureConstant&&!t.isZoomConstant){var o
if("interval"===t.functionType)o=i.getLayoutValue(r?"text-size":"icon-size",{zoom:e.zoom})
else{var l="interval"===t.functionType?0:s(e.zoom,t.functionBase,t.coveringZoomRange[0],t.coveringZoomRange[1]),u=t.coveringStopValues[0],c=t.coveringStopValues[1]
o=u+(c-u)*a.clamp(l,0,1)}n.uSize=o}else t.isFeatureConstant&&t.isZoomConstant&&(n.uSize=t.layoutSize)
else{var p=s(e.zoom,t.functionBase,t.coveringZoomRange[0],t.coveringZoomRange[1])
n.uSizeT=a.clamp(p,0,1)}return n}var o=t("../style-spec/util/interpolate"),a=t("../util/util"),s=t("../style-spec/function").interpolationFactor
e.exports={evaluateSizeForFeature:r,evaluateSizeForZoom:n}},{"../style-spec/function":117,"../style-spec/util/interpolate":123,"../util/util":218}],175:[function(t,e,i){"use strict"
var r=t("../source/rtl_text_plugin")
e.exports=function(t,e,i,n){var o=e.getLayoutValue("text-transform",i,n)
return"uppercase"===o?t=t.toLocaleUpperCase():"lowercase"===o&&(t=t.toLocaleLowerCase()),r.applyArabicShaping&&(t=r.applyArabicShaping(t)),t}},{"../source/rtl_text_plugin":101}],176:[function(t,e,i){"use strict"
var r=t("../util/dom"),n=t("point-geometry"),o={scrollZoom:t("./handler/scroll_zoom"),boxZoom:t("./handler/box_zoom"),dragRotate:t("./handler/drag_rotate"),dragPan:t("./handler/drag_pan"),keyboard:t("./handler/keyboard"),doubleClickZoom:t("./handler/dblclick_zoom"),touchZoomRotate:t("./handler/touch_zoom_rotate")}
e.exports=function(t,e){function i(t){_("mouseout",t)}function a(e){t.stop(),w=r.mousePos(g,e),_("mousedown",e),b=!0}function s(e){var i=t.dragRotate&&t.dragRotate.isActive()
x&&!i&&_("contextmenu",x),x=null,b=!1,_("mouseup",e)}function l(e){if(!(t.dragPan&&t.dragPan.isActive()||t.dragRotate&&t.dragRotate.isActive())){for(var i=e.toElement||e.target;i&&i!==g;)i=i.parentNode
i===g&&_("mousemove",e)}}function u(e){t.stop(),v("touchstart",e),!e.touches||e.touches.length>1||(T?(clearTimeout(T),T=null,_("dblclick",e)):T=setTimeout(f,300))}function c(t){v("touchmove",t)}function p(t){v("touchend",t)}function h(t){v("touchcancel",t)}function f(){T=null}function d(t){r.mousePos(g,t).equals(w)&&_("click",t)}function m(t){_("dblclick",t),t.preventDefault()}function y(e){var i=t.dragRotate&&t.dragRotate.isActive()
b||i?b&&(x=e):_("contextmenu",e),e.preventDefault()}function _(e,i){var n=r.mousePos(g,i)
return t.fire(e,{lngLat:t.unproject(n),point:n,originalEvent:i})}function v(e,i){var o=r.touchPos(g,i),a=o.reduce(function(t,e,i,r){return t.add(e.div(r.length))},new n(0,0))
return t.fire(e,{lngLat:t.unproject(a),point:a,lngLats:o.map(function(e){return t.unproject(e)},this),points:o,originalEvent:i})}var g=t.getCanvasContainer(),x=null,b=!1,w=null,T=null
for(var z in o)t[z]=new o[z](t,e),e.interactive&&e[z]&&t[z].enable(e[z])
g.addEventListener("mouseout",i,!1),g.addEventListener("mousedown",a,!1),g.addEventListener("mouseup",s,!1),g.addEventListener("mousemove",l,!1),g.addEventListener("touchstart",u,!1),g.addEventListener("touchend",p,!1),g.addEventListener("touchmove",c,!1),g.addEventListener("touchcancel",h,!1),g.addEventListener("click",d,!1),g.addEventListener("dblclick",m,!1),g.addEventListener("contextmenu",y,!1)}},{"../util/dom":204,"./handler/box_zoom":184,"./handler/dblclick_zoom":185,"./handler/drag_pan":186,"./handler/drag_rotate":187,"./handler/keyboard":188,"./handler/scroll_zoom":189,"./handler/touch_zoom_rotate":190,"point-geometry":36}],177:[function(t,e,i){"use strict"
var r=t("../util/util"),n=t("../style-spec/util/interpolate"),o=t("../util/browser"),a=t("../geo/lng_lat"),s=t("../geo/lng_lat_bounds"),l=t("point-geometry"),u=t("../util/evented"),c=function(t){function e(e,i){t.call(this),this.moving=!1,this.transform=e,this._bearingSnap=i.bearingSnap}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getCenter=function(){return this.transform.center},e.prototype.setCenter=function(t,e){return this.jumpTo({center:t},e)},e.prototype.panBy=function(t,e,i){return t=l.convert(t).mult(-1),this.panTo(this.transform.center,r.extend({offset:t},e),i)},e.prototype.panTo=function(t,e,i){return this.easeTo(r.extend({center:t},e),i)},e.prototype.getZoom=function(){return this.transform.zoom},e.prototype.setZoom=function(t,e){return this.jumpTo({zoom:t},e),this},e.prototype.zoomTo=function(t,e,i){return this.easeTo(r.extend({zoom:t},e),i)},e.prototype.zoomIn=function(t,e){return this.zoomTo(this.getZoom()+1,t,e),this},e.prototype.zoomOut=function(t,e){return this.zoomTo(this.getZoom()-1,t,e),this},e.prototype.getBearing=function(){return this.transform.bearing},e.prototype.setBearing=function(t,e){return this.jumpTo({bearing:t},e),this},e.prototype.rotateTo=function(t,e,i){return this.easeTo(r.extend({bearing:t},e),i)},e.prototype.resetNorth=function(t,e){return this.rotateTo(0,r.extend({duration:1e3},t),e),this},e.prototype.snapToNorth=function(t,e){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,e):this},e.prototype.getPitch=function(){return this.transform.pitch},e.prototype.setPitch=function(t,e){return this.jumpTo({pitch:t},e),this},e.prototype.fitBounds=function(t,e,i){if(e=r.extend({padding:{top:0,bottom:0,right:0,left:0},offset:[0,0],maxZoom:this.transform.maxZoom},e),"number"==typeof e.padding){var n=e.padding
e.padding={top:n,bottom:n,right:n,left:n}}if(!r.deepEqual(Object.keys(e.padding).sort(function(t,e){return e>t?-1:t>e?1:0}),["bottom","left","right","top"]))return void r.warnOnce("options.padding must be a positive number, or an Object with keys 'bottom', 'left', 'right', 'top'")
t=s.convert(t)
var o=[e.padding.left-e.padding.right,e.padding.top-e.padding.bottom],a=Math.min(e.padding.right,e.padding.left),u=Math.min(e.padding.top,e.padding.bottom)
e.offset=[e.offset[0]+o[0],e.offset[1]+o[1]]
var c=l.convert(e.offset),p=this.transform,h=p.project(t.getNorthWest()),f=p.project(t.getSouthEast()),d=f.sub(h),m=(p.width-2*a-2*Math.abs(c.x))/d.x,y=(p.height-2*u-2*Math.abs(c.y))/d.y
return 0>y||0>m?void r.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset."):(e.center=p.unproject(h.add(f).div(2)),e.zoom=Math.min(p.scaleZoom(p.scale*Math.min(m,y)),e.maxZoom),e.bearing=0,e.linear?this.easeTo(e,i):this.flyTo(e,i))},e.prototype.jumpTo=function(t,e){this.stop()
var i=this.transform,r=!1,n=!1,o=!1
return"zoom"in t&&i.zoom!==+t.zoom&&(r=!0,i.zoom=+t.zoom),"center"in t&&(i.center=a.convert(t.center)),"bearing"in t&&i.bearing!==+t.bearing&&(n=!0,i.bearing=+t.bearing),"pitch"in t&&i.pitch!==+t.pitch&&(o=!0,i.pitch=+t.pitch),this.fire("movestart",e).fire("move",e),r&&this.fire("zoomstart",e).fire("zoom",e).fire("zoomend",e),n&&this.fire("rotate",e),o&&this.fire("pitchstart",e).fire("pitch",e).fire("pitchend",e),this.fire("moveend",e)},e.prototype.easeTo=function(t,e){var i=this
this.stop(),t=r.extend({offset:[0,0],duration:500,easing:r.ease},t),!1===t.animate&&(t.duration=0),t.smoothEasing&&0!==t.duration&&(t.easing=this._smoothOutEasing(t.duration))
var o=this.transform,s=this.getZoom(),u=this.getBearing(),c=this.getPitch(),p="zoom"in t?+t.zoom:s,h="bearing"in t?this._normalizeBearing(t.bearing,u):u,f="pitch"in t?+t.pitch:c,d=o.centerPoint.add(l.convert(t.offset)),m=o.pointLocation(d),y=a.convert(t.center||m)
this._normalizeCenter(y)
var _,v,g=o.project(m),x=o.project(y).sub(g),b=o.zoomScale(p-s)
return t.around&&(_=a.convert(t.around),v=o.locationPoint(_)),this.zooming=p!==s,this.rotating=u!==h,this.pitching=f!==c,this._prepareEase(e,t.noMoveStart),clearTimeout(this._onEaseEnd),this._ease(function(t){if(this.zooming&&(o.zoom=n(s,p,t)),this.rotating&&(o.bearing=n(u,h,t)),this.pitching&&(o.pitch=n(c,f,t)),_)o.setLocationAtPoint(_,v)
else{var i=o.zoomScale(o.zoom-s),r=p>s?Math.min(2,b):Math.max(.5,b),a=Math.pow(r,1-t),l=o.unproject(g.add(x.mult(t*a)).mult(i))
o.setLocationAtPoint(o.renderWorldCopies?l.wrap():l,d)}this._fireMoveEvents(e)},function(){t.delayEndEvents?i._onEaseEnd=setTimeout(function(){return i._easeToEnd(e)},t.delayEndEvents):i._easeToEnd(e)},t),this},e.prototype._prepareEase=function(t,e){this.moving=!0,e||this.fire("movestart",t),this.zooming&&this.fire("zoomstart",t),this.pitching&&this.fire("pitchstart",t)},e.prototype._fireMoveEvents=function(t){this.fire("move",t),this.zooming&&this.fire("zoom",t),this.rotating&&this.fire("rotate",t),this.pitching&&this.fire("pitch",t)},e.prototype._easeToEnd=function(t){var e=this.zooming,i=this.pitching
this.moving=!1,this.zooming=!1,this.rotating=!1,this.pitching=!1,e&&this.fire("zoomend",t),i&&this.fire("pitchend",t),this.fire("moveend",t)},e.prototype.flyTo=function(t,e){function i(t){var e=(S*S-E*E+(t?-1:1)*C*C*L*L)/(2*(t?S:E)*C*L)
return Math.log(Math.sqrt(e*e+1)-e)}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function s(t){return(Math.exp(t)+Math.exp(-t))/2}function u(t){return o(t)/s(t)}var c=this
this.stop(),t=r.extend({offset:[0,0],speed:1.2,curve:1.42,easing:r.ease},t)
var p=this.transform,h=this.getZoom(),f=this.getBearing(),d=this.getPitch(),m="zoom"in t?r.clamp(+t.zoom,p.minZoom,p.maxZoom):h,y="bearing"in t?this._normalizeBearing(t.bearing,f):f,_="pitch"in t?+t.pitch:d,v=p.zoomScale(m-h),g=p.centerPoint.add(l.convert(t.offset)),x=p.pointLocation(g),b=a.convert(t.center||x)
this._normalizeCenter(b)
var w=p.project(x),T=p.project(b).sub(w),z=t.curve,E=Math.max(p.width,p.height),S=E/v,L=T.mag()
if("minZoom"in t){var M=r.clamp(Math.min(t.minZoom,h,m),p.minZoom,p.maxZoom),A=E/p.zoomScale(M-h)
z=Math.sqrt(A/L*2)}var C=z*z,P=i(0),k=function(t){return s(P)/s(P+z*t)},I=function(t){return E*((s(P)*u(P+z*t)-o(P))/C)/L},D=(i(1)-P)/z
if(Math.abs(L)<1e-6||isNaN(D)){if(Math.abs(E-S)<1e-6)return this.easeTo(t,e)
var R=E>S?-1:1
D=Math.abs(Math.log(S/E))/z,I=function(){return 0},k=function(t){return Math.exp(R*z*t)}}if("duration"in t)t.duration=+t.duration
else{var O="screenSpeed"in t?+t.screenSpeed/z:+t.speed
t.duration=1e3*D/O}return this.zooming=!0,this.rotating=f!==y,this.pitching=_!==d,this._prepareEase(e,!1),this._ease(function(t){var i=t*D,r=1/k(i)
p.zoom=h+p.scaleZoom(r),this.rotating&&(p.bearing=n(f,y,t)),this.pitching&&(p.pitch=n(d,_,t))
var o=p.unproject(w.add(T.mult(I(i))).mult(r))
p.setLocationAtPoint(p.renderWorldCopies?o.wrap():o,g),this._fireMoveEvents(e)},function(){return c._easeToEnd(e)},t),this},e.prototype.isEasing=function(){return!!this._abortFn},e.prototype.isMoving=function(){return this.moving},e.prototype.stop=function(){return this._abortFn&&(this._abortFn(),this._finishEase()),this},e.prototype._ease=function(t,e,i){this._finishFn=e,this._abortFn=o.timed(function(e){t.call(this,i.easing(e)),1===e&&this._finishEase()},!1===i.animate?0:i.duration,this)},e.prototype._finishEase=function(){delete this._abortFn
var t=this._finishFn
delete this._finishFn,t.call(this)},e.prototype._normalizeBearing=function(t,e){t=r.wrap(t,-180,180)
var i=Math.abs(t-e)
return Math.abs(t-360-e)<i&&(t-=360),Math.abs(t+360-e)<i&&(t+=360),t},e.prototype._normalizeCenter=function(t){var e=this.transform
if(e.renderWorldCopies&&!e.lngRange){var i=t.lng-e.center.lng
t.lng+=i>180?-360:-180>i?360:0}},e.prototype._smoothOutEasing=function(t){var e=r.ease
if(this._prevEase){var i=this._prevEase,n=(Date.now()-i.start)/i.duration,o=i.easing(n+.01)-i.easing(n),a=.27/Math.sqrt(o*o+1e-4)*.01,s=Math.sqrt(.0729-a*a)
e=r.bezier(a,s,.25,1)}return this._prevEase={start:(new Date).getTime(),duration:t,easing:e},e},e}(u)
e.exports=c},{"../geo/lng_lat":72,"../geo/lng_lat_bounds":73,"../style-spec/util/interpolate":123,"../util/browser":197,"../util/evented":205,"../util/util":218,"point-geometry":36}],178:[function(t,e,i){"use strict"
var r=t("../../util/dom"),n=t("../../util/util"),o=t("../../util/config"),a=function(t){this.options=t,n.bindAll(["_updateEditLink","_updateData","_updateCompact"],this)}
a.prototype.getDefaultPosition=function(){return"bottom-right"},a.prototype.onAdd=function(t){var e=this.options&&this.options.compact
return this._map=t,this._container=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-attrib"),e&&this._container.classList.add("mapboxgl-compact"),this._updateAttributions(),this._updateEditLink(),this._map.on("sourcedata",this._updateData),this._map.on("moveend",this._updateEditLink),void 0===e&&(this._map.on("resize",this._updateCompact),this._updateCompact()),this._container},a.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map.off("sourcedata",this._updateData),this._map.off("moveend",this._updateEditLink),this._map.off("resize",this._updateCompact),this._map=void 0},a.prototype._updateEditLink=function(){this._editLink||(this._editLink=this._container.querySelector(".mapbox-improve-map"))
var t=[{key:"owner",value:this.styleOwner},{key:"id",value:this.styleId},{key:"access_token",value:o.ACCESS_TOKEN}]
if(this._editLink){var e=t.reduce(function(e,i,r){return void 0!==i.value&&(e+=i.key+"="+i.value+(r<t.length-1?"&":"")),e},"?")
this._editLink.href="https://www.mapbox.com/feedback/"+e+(this._map._hash?this._map._hash.getHashString(!0):"")}},a.prototype._updateData=function(t){t&&"metadata"===t.sourceDataType&&(this._updateAttributions(),this._updateEditLink())},a.prototype._updateAttributions=function(){if(this._map.style){var t=[]
if(this._map.style.stylesheet){var e=this._map.style.stylesheet
this.styleOwner=e.owner,this.styleId=e.id}var i=this._map.style.sourceCaches
for(var r in i){var n=i[r].getSource()
n.attribution&&t.indexOf(n.attribution)<0&&t.push(n.attribution)}t.sort(function(t,e){return t.length-e.length}),t=t.filter(function(e,i){for(var r=i+1;r<t.length;r++)if(t[r].indexOf(e)>=0)return!1
return!0}),this._container.innerHTML=t.join(" | "),this._editLink=null}},a.prototype._updateCompact=function(){var t=this._map.getCanvasContainer().offsetWidth<=640
this._container.classList[t?"add":"remove"]("mapboxgl-compact")},e.exports=a},{"../../util/config":201,"../../util/dom":204,"../../util/util":218}],179:[function(t,e,i){"use strict"
var r=t("../../util/dom"),n=t("../../util/util"),o=t("../../util/window"),a=function(){this._fullscreen=!1,n.bindAll(["_onClickFullscreen","_changeIcon"],this),"onfullscreenchange"in o.document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in o.document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in o.document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in o.document&&(this._fullscreenchange="MSFullscreenChange"),this._className="mapboxgl-ctrl"}
a.prototype.onAdd=function(t){return this._map=t,this._mapContainer=this._map.getContainer(),this._container=r.create("div",this._className+" mapboxgl-ctrl-group"),this._checkFullscreenSupport()?this._setupUI():(this._container.style.display="none",n.warnOnce("This device does not support fullscreen mode.")),this._container},a.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map=null,o.document.removeEventListener(this._fullscreenchange,this._changeIcon)},a.prototype._checkFullscreenSupport=function(){return!!(o.document.fullscreenEnabled||o.document.mozFullscreenEnabled||o.document.msFullscreenEnabled||o.document.webkitFullscreenEnabled)},a.prototype._setupUI=function(){var t=this._fullscreenButton=r.create("button",this._className+"-icon "+this._className+"-fullscreen",this._container)
t.setAttribute("aria-label","Toggle fullscreen"),t.type="button",this._fullscreenButton.addEventListener("click",this._onClickFullscreen),o.document.addEventListener(this._fullscreenchange,this._changeIcon)},a.prototype._isFullscreen=function(){return this._fullscreen},a.prototype._changeIcon=function(){(o.document.fullscreenElement||o.document.mozFullScreenElement||o.document.webkitFullscreenElement||o.document.msFullscreenElement)===this._mapContainer!==this._fullscreen&&(this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle(this._className+"-shrink"),this._fullscreenButton.classList.toggle(this._className+"-fullscreen"))},a.prototype._onClickFullscreen=function(){this._isFullscreen()?o.document.exitFullscreen?o.document.exitFullscreen():o.document.mozCancelFullScreen?o.document.mozCancelFullScreen():o.document.msExitFullscreen?o.document.msExitFullscreen():o.document.webkitCancelFullScreen&&o.document.webkitCancelFullScreen():this._mapContainer.requestFullscreen?this._mapContainer.requestFullscreen():this._mapContainer.mozRequestFullScreen?this._mapContainer.mozRequestFullScreen():this._mapContainer.msRequestFullscreen?this._mapContainer.msRequestFullscreen():this._mapContainer.webkitRequestFullscreen&&this._mapContainer.webkitRequestFullscreen()},e.exports=a},{"../../util/dom":204,"../../util/util":218,"../../util/window":199}],180:[function(t,e,i){"use strict"
function r(t){void 0!==n?t(n):void 0!==s.navigator.permissions?s.navigator.permissions.query({name:"geolocation"}).then(function(e){n="denied"!==e.state,t(n)}):(n=!!s.navigator.geolocation,t(n))}var n,o=t("../../util/evented"),a=t("../../util/dom"),s=t("../../util/window"),l=t("../../util/util"),u=t("../../geo/lng_lat"),c=t("../marker"),p={positionOptions:{enableHighAccuracy:!1,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showUserLocation:!0},h="mapboxgl-ctrl",f=function(t){function e(e){t.call(this),this.options=l.extend({},p,e),l.bindAll(["_onSuccess","_onError","_finish","_setupUI","_updateCamera","_updateMarker","_onClickGeolocate"],this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.onAdd=function(t){return this._map=t,this._container=a.create("div",h+" "+h+"-group"),r(this._setupUI),this._container},e.prototype.onRemove=function(){void 0!==this._geolocationWatchID&&(s.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker.remove(),this._container.parentNode.removeChild(this._container),this._map=void 0},e.prototype._onSuccess=function(t){if(this.options.trackUserLocation)switch(this._lastKnownPosition=t,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active")
break
case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background")}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(t),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(t),this.options.showUserLocation&&this._dotElement.classList.remove("mapboxgl-user-location-dot-stale"),this.fire("geolocate",t),this._finish()},e.prototype._updateCamera=function(t){var e=new u(t.coords.longitude,t.coords.latitude),i=t.coords.accuracy
this._map.fitBounds(e.toBounds(i),this.options.fitBoundsOptions,{geolocateSource:!0})},e.prototype._updateMarker=function(t){t?this._userLocationDotMarker.setLngLat([t.coords.longitude,t.coords.latitude]).addTo(this._map):this._userLocationDotMarker.remove()},e.prototype._onError=function(t){if(this.options.trackUserLocation)if(1===t.code)this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),void 0!==this._geolocationWatchID&&this._clearWatch()
else switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error")
break
case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting")
break
case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting")}"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("mapboxgl-user-location-dot-stale"),this.fire("error",t),this._finish()},e.prototype._finish=function(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0},e.prototype._setupUI=function(t){var e=this
!1!==t&&(this._container.addEventListener("contextmenu",function(t){return t.preventDefault()}),this._geolocateButton=a.create("button",h+"-icon "+h+"-geolocate",this._container),this._geolocateButton.type="button",this._geolocateButton.setAttribute("aria-label","Geolocate"),this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed",!1),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=a.create("div","mapboxgl-user-location-dot"),this._userLocationDotMarker=new c(this._dotElement),this.options.trackUserLocation&&(this._watchState="OFF")),this._geolocateButton.addEventListener("click",this._onClickGeolocate.bind(this)),this.options.trackUserLocation&&this._map.on("movestart",function(t){t.geolocateSource||"ACTIVE_LOCK"!==e._watchState||(e._watchState="BACKGROUND",e._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background"),e._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),e.fire("trackuserlocationend"))}))},e.prototype._onClickGeolocate=function(){if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire("trackuserlocationstart")
break
case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this.fire("trackuserlocationend")
break
case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire("trackuserlocationstart")}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active")
break
case"ACTIVE_LOCK":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active")
break
case"ACTIVE_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error")
break
case"BACKGROUND":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background")
break
case"BACKGROUND_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error")}"OFF"===this._watchState&&void 0!==this._geolocationWatchID?this._clearWatch():void 0===this._geolocationWatchID&&(this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed",!0),this._geolocationWatchID=s.navigator.geolocation.watchPosition(this._onSuccess,this._onError,this.options.positionOptions))}else s.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4)},e.prototype._clearWatch=function(){s.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed",!1),this.options.showUserLocation&&this._updateMarker(null)},e}(o)
e.exports=f},{"../../geo/lng_lat":72,"../../util/dom":204,"../../util/evented":205,"../../util/util":218,"../../util/window":199,"../marker":193}],181:[function(t,e,i){"use strict"
var r=t("../../util/dom"),n=t("../../util/util"),o=function(){n.bindAll(["_updateLogo"],this)}
o.prototype.onAdd=function(t){this._map=t,this._container=r.create("div","mapboxgl-ctrl")
var e=r.create("a","mapboxgl-ctrl-logo")
return e.target="_blank",e.href="https://www.mapbox.com/",e.setAttribute("aria-label","Mapbox logo"),this._container.appendChild(e),this._container.style.display="none",this._map.on("sourcedata",this._updateLogo),this._updateLogo(),this._container},o.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map.off("sourcedata",this._updateLogo)},o.prototype.getDefaultPosition=function(){return"bottom-left"},o.prototype._updateLogo=function(t){t&&"metadata"!==t.sourceDataType||(this._container.style.display=this._logoRequired()?"block":"none")},o.prototype._logoRequired=function(){if(this._map.style){var t=this._map.style.sourceCaches
for(var e in t)if(t[e].getSource().mapbox_logo)return!0
return!1}},e.exports=o},{"../../util/dom":204,"../../util/util":218}],182:[function(t,e,i){"use strict"
function r(t){return new o.MouseEvent(t.type,{button:2,buttons:2,bubbles:!0,cancelable:!0,detail:t.detail,view:t.view,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY,movementX:t.movementX,movementY:t.movementY,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey})}var n=t("../../util/dom"),o=t("../../util/window"),a=t("../../util/util"),s="mapboxgl-ctrl",l=function(){a.bindAll(["_rotateCompassArrow"],this)}
l.prototype._rotateCompassArrow=function(){var t="rotate("+this._map.transform.angle*(180/Math.PI)+"deg)"
this._compassArrow.style.transform=t},l.prototype.onAdd=function(t){return this._map=t,this._container=n.create("div",s+" "+s+"-group",t.getContainer()),this._container.addEventListener("contextmenu",this._onContextMenu.bind(this)),this._zoomInButton=this._createButton(s+"-icon "+s+"-zoom-in","Zoom In",t.zoomIn.bind(t)),this._zoomOutButton=this._createButton(s+"-icon "+s+"-zoom-out","Zoom Out",t.zoomOut.bind(t)),this._compass=this._createButton(s+"-icon "+s+"-compass","Reset North",t.resetNorth.bind(t)),this._compassArrow=n.create("span",s+"-compass-arrow",this._compass),this._compass.addEventListener("mousedown",this._onCompassDown.bind(this)),this._onCompassMove=this._onCompassMove.bind(this),this._onCompassUp=this._onCompassUp.bind(this),this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._container},l.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map.off("rotate",this._rotateCompassArrow),this._map=void 0},l.prototype._onContextMenu=function(t){t.preventDefault()},l.prototype._onCompassDown=function(t){0===t.button&&(n.disableDrag(),o.document.addEventListener("mousemove",this._onCompassMove),o.document.addEventListener("mouseup",this._onCompassUp),this._map.getCanvasContainer().dispatchEvent(r(t)),t.stopPropagation())},l.prototype._onCompassMove=function(t){0===t.button&&(this._map.getCanvasContainer().dispatchEvent(r(t)),t.stopPropagation())},l.prototype._onCompassUp=function(t){0===t.button&&(o.document.removeEventListener("mousemove",this._onCompassMove),o.document.removeEventListener("mouseup",this._onCompassUp),n.enableDrag(),this._map.getCanvasContainer().dispatchEvent(r(t)),t.stopPropagation())},l.prototype._createButton=function(t,e,i){var r=n.create("button",t,this._container)
return r.type="button",r.setAttribute("aria-label",e),r.addEventListener("click",function(){i()}),r},e.exports=l},{"../../util/dom":204,"../../util/util":218,"../../util/window":199}],183:[function(t,e,i){"use strict"
function r(t,e,i){var r=i&&i.maxWidth||100,a=t._container.clientHeight/2,s=o(t.unproject([0,a]),t.unproject([r,a]))
if(i&&"imperial"===i.unit){var l=3.2808*s
l>5280?n(e,r,l/5280,"mi"):n(e,r,l,"ft")}else n(e,r,s,"m")}function n(t,e,i,r){var n=a(i),o=n/i
"m"===r&&n>=1e3&&(n/=1e3,r="km"),t.style.width=e*o+"px",t.innerHTML=n+r}function o(t,e){var i=Math.PI/180,r=t.lat*i,n=e.lat*i,o=Math.sin(r)*Math.sin(n)+Math.cos(r)*Math.cos(n)*Math.cos((e.lng-t.lng)*i)
return 6371e3*Math.acos(Math.min(o,1))}function a(t){var e=Math.pow(10,(""+Math.floor(t)).length-1),i=t/e
return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}var s=t("../../util/dom"),l=t("../../util/util"),u=function(t){this.options=t,l.bindAll(["_onMove"],this)}
u.prototype.getDefaultPosition=function(){return"bottom-left"},u.prototype._onMove=function(){r(this._map,this._container,this.options)},u.prototype.onAdd=function(t){return this._map=t,this._container=s.create("div","mapboxgl-ctrl mapboxgl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container},u.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map.off("move",this._onMove),this._map=void 0},e.exports=u},{"../../util/dom":204,"../../util/util":218}],184:[function(t,e,i){"use strict"
var r=t("../../util/dom"),n=t("../../geo/lng_lat_bounds"),o=t("../../util/util"),a=t("../../util/window"),s=function(t){this._map=t,this._el=t.getCanvasContainer(),this._container=t.getContainer(),o.bindAll(["_onMouseDown","_onMouseMove","_onMouseUp","_onKeyDown"],this)}
s.prototype.isEnabled=function(){return!!this._enabled},s.prototype.isActive=function(){return!!this._active},s.prototype.enable=function(){this.isEnabled()||(this._map.dragPan&&this._map.dragPan.disable(),this._el.addEventListener("mousedown",this._onMouseDown,!1),this._map.dragPan&&this._map.dragPan.enable(),this._enabled=!0)},s.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("mousedown",this._onMouseDown),this._enabled=!1)},s.prototype._onMouseDown=function(t){t.shiftKey&&0===t.button&&(a.document.addEventListener("mousemove",this._onMouseMove,!1),a.document.addEventListener("keydown",this._onKeyDown,!1),a.document.addEventListener("mouseup",this._onMouseUp,!1),r.disableDrag(),this._startPos=r.mousePos(this._el,t),this._active=!0)},s.prototype._onMouseMove=function(t){var e=this._startPos,i=r.mousePos(this._el,t)
this._box||(this._box=r.create("div","mapboxgl-boxzoom",this._container),this._container.classList.add("mapboxgl-crosshair"),this._fireEvent("boxzoomstart",t))
var n=Math.min(e.x,i.x),o=Math.max(e.x,i.x),a=Math.min(e.y,i.y),s=Math.max(e.y,i.y)
r.setTransform(this._box,"translate("+n+"px,"+a+"px)"),this._box.style.width=o-n+"px",this._box.style.height=s-a+"px"},s.prototype._onMouseUp=function(t){if(0===t.button){var e=this._startPos,i=r.mousePos(this._el,t),o=(new n).extend(this._map.unproject(e)).extend(this._map.unproject(i))
this._finish(),e.x===i.x&&e.y===i.y?this._fireEvent("boxzoomcancel",t):this._map.fitBounds(o,{linear:!0}).fire("boxzoomend",{originalEvent:t,boxZoomBounds:o})}},s.prototype._onKeyDown=function(t){27===t.keyCode&&(this._finish(),this._fireEvent("boxzoomcancel",t))},s.prototype._finish=function(){this._active=!1,a.document.removeEventListener("mousemove",this._onMouseMove,!1),a.document.removeEventListener("keydown",this._onKeyDown,!1),a.document.removeEventListener("mouseup",this._onMouseUp,!1),this._container.classList.remove("mapboxgl-crosshair"),this._box&&(this._box.parentNode.removeChild(this._box),this._box=null),r.enableDrag()},s.prototype._fireEvent=function(t,e){return this._map.fire(t,{originalEvent:e})},e.exports=s},{"../../geo/lng_lat_bounds":73,"../../util/dom":204,"../../util/util":218,"../../util/window":199}],185:[function(t,e,i){"use strict"
var r=function(t){this._map=t,this._onDblClick=this._onDblClick.bind(this)}
r.prototype.isEnabled=function(){return!!this._enabled},r.prototype.enable=function(){this.isEnabled()||(this._map.on("dblclick",this._onDblClick),this._enabled=!0)},r.prototype.disable=function(){this.isEnabled()&&(this._map.off("dblclick",this._onDblClick),this._enabled=!1)},r.prototype._onDblClick=function(t){this._map.zoomTo(this._map.getZoom()+(t.originalEvent.shiftKey?-1:1),{around:t.lngLat},t)},e.exports=r},{}],186:[function(t,e,i){"use strict"
var r=t("../../util/dom"),n=t("../../util/util"),o=t("../../util/window"),a=.3,s=n.bezier(0,0,a,1),l=1400,u=2500,c=function(t){this._map=t,this._el=t.getCanvasContainer(),n.bindAll(["_onDown","_onMove","_onUp","_onTouchEnd","_onMouseUp"],this)}
c.prototype.isEnabled=function(){return!!this._enabled},c.prototype.isActive=function(){return!!this._active},c.prototype.enable=function(){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-drag-pan"),this._el.addEventListener("mousedown",this._onDown),this._el.addEventListener("touchstart",this._onDown),this._enabled=!0)},c.prototype.disable=function(){this.isEnabled()&&(this._el.classList.remove("mapboxgl-touch-drag-pan"),this._el.removeEventListener("mousedown",this._onDown),this._el.removeEventListener("touchstart",this._onDown),this._enabled=!1)},c.prototype._onDown=function(t){this._ignoreEvent(t)||this.isActive()||(t.touches?(o.document.addEventListener("touchmove",this._onMove),o.document.addEventListener("touchend",this._onTouchEnd)):(o.document.addEventListener("mousemove",this._onMove),o.document.addEventListener("mouseup",this._onMouseUp)),o.addEventListener("blur",this._onMouseUp),this._active=!1,this._startPos=this._pos=r.mousePos(this._el,t),this._inertia=[[Date.now(),this._pos]])},c.prototype._onMove=function(t){if(!this._ignoreEvent(t)){this.isActive()||(this._active=!0,this._map.moving=!0,this._fireEvent("dragstart",t),this._fireEvent("movestart",t))
var e=r.mousePos(this._el,t),i=this._map
i.stop(),this._drainInertiaBuffer(),this._inertia.push([Date.now(),e]),i.transform.setLocationAtPoint(i.transform.pointLocation(this._pos),e),this._fireEvent("drag",t),this._fireEvent("move",t),this._pos=e,t.preventDefault()}},c.prototype._onUp=function(t){var e=this
if(this.isActive()){this._active=!1,this._fireEvent("dragend",t),this._drainInertiaBuffer()
var i=function(){e._map.moving=!1,e._fireEvent("moveend",t)},r=this._inertia
if(r.length<2)return void i()
var n=r[r.length-1],o=r[0],c=n[1].sub(o[1]),p=(n[0]-o[0])/1e3
if(0===p||n[1].equals(o[1]))return void i()
var h=c.mult(a/p),f=h.mag()
f>l&&(f=l,h._unit()._mult(f))
var d=f/(u*a),m=h.mult(-d/2)
this._map.panBy(m,{duration:1e3*d,easing:s,noMoveStart:!0},{originalEvent:t})}},c.prototype._onMouseUp=function(t){this._ignoreEvent(t)||(this._onUp(t),o.document.removeEventListener("mousemove",this._onMove),o.document.removeEventListener("mouseup",this._onMouseUp),o.removeEventListener("blur",this._onMouseUp))},c.prototype._onTouchEnd=function(t){this._ignoreEvent(t)||(this._onUp(t),o.document.removeEventListener("touchmove",this._onMove),o.document.removeEventListener("touchend",this._onTouchEnd))},c.prototype._fireEvent=function(t,e){return this._map.fire(t,{originalEvent:e})},c.prototype._ignoreEvent=function(t){var e=this._map
return e.boxZoom&&e.boxZoom.isActive()?!0:e.dragRotate&&e.dragRotate.isActive()?!0:t.touches?t.touches.length>1:t.ctrlKey?!0:"mousemove"===t.type?!1&t.buttons:t.button&&0!==t.button},c.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=Date.now();t.length>0&&e-t[0][0]>160;)t.shift()},e.exports=c},{"../../util/dom":204,"../../util/util":218,"../../util/window":199}],187:[function(t,e,i){"use strict"
var r=t("../../util/dom"),n=t("../../util/util"),o=t("../../util/window"),a=.25,s=n.bezier(0,0,a,1),l=180,u=720,c=function(t,e){this._map=t,this._el=t.getCanvasContainer(),this._bearingSnap=e.bearingSnap,this._pitchWithRotate=!1!==e.pitchWithRotate,n.bindAll(["_onDown","_onMove","_onUp"],this)}
c.prototype.isEnabled=function(){return!!this._enabled},c.prototype.isActive=function(){return!!this._active},c.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("mousedown",this._onDown),this._enabled=!0)},c.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("mousedown",this._onDown),this._enabled=!1)},c.prototype._onDown=function(t){this._ignoreEvent(t)||this.isActive()||(o.document.addEventListener("mousemove",this._onMove),o.document.addEventListener("mouseup",this._onUp),o.addEventListener("blur",this._onUp),this._active=!1,this._inertia=[[Date.now(),this._map.getBearing()]],this._startPos=this._pos=r.mousePos(this._el,t),this._center=this._map.transform.centerPoint,t.preventDefault())},c.prototype._onMove=function(t){if(!this._ignoreEvent(t)){this.isActive()||(this._active=!0,this._map.moving=!0,this._fireEvent("rotatestart",t),this._fireEvent("movestart",t),this._pitchWithRotate&&this._fireEvent("pitchstart",t))
var e=this._map
e.stop()
var i=this._pos,n=r.mousePos(this._el,t),o=.8*(i.x-n.x),a=-.5*(i.y-n.y),s=e.getBearing()-o,l=e.getPitch()-a,u=this._inertia,c=u[u.length-1]
this._drainInertiaBuffer(),u.push([Date.now(),e._normalizeBearing(s,c[1])]),e.transform.bearing=s,this._pitchWithRotate&&(this._fireEvent("pitch",t),e.transform.pitch=l),this._fireEvent("rotate",t),this._fireEvent("move",t),this._pos=n}},c.prototype._onUp=function(t){var e=this
if(!this._ignoreEvent(t)&&(o.document.removeEventListener("mousemove",this._onMove),o.document.removeEventListener("mouseup",this._onUp),o.removeEventListener("blur",this._onUp),this.isActive())){this._active=!1,this._fireEvent("rotateend",t),this._drainInertiaBuffer()
var i=this._map,r=i.getBearing(),n=this._inertia,c=function(){Math.abs(r)<e._bearingSnap?i.resetNorth({noMoveStart:!0},{originalEvent:t}):(e._map.moving=!1,e._fireEvent("moveend",t)),e._pitchWithRotate&&e._fireEvent("pitchend",t)}
if(n.length<2)return void c()
var p=n[0],h=n[n.length-1],f=n[n.length-2],d=i._normalizeBearing(r,f[1]),m=h[1]-p[1],y=0>m?-1:1,_=(h[0]-p[0])/1e3
if(0===m||0===_)return void c()
var v=Math.abs(m*(a/_))
v>l&&(v=l)
var g=v/(u*a)
d+=y*v*(g/2),Math.abs(i._normalizeBearing(d,0))<this._bearingSnap&&(d=i._normalizeBearing(0,d)),i.rotateTo(d,{duration:1e3*g,easing:s,noMoveStart:!0},{originalEvent:t})}},c.prototype._fireEvent=function(t,e){return this._map.fire(t,{originalEvent:e})},c.prototype._ignoreEvent=function(t){var e=this._map
if(e.boxZoom&&e.boxZoom.isActive())return!0
if(e.dragPan&&e.dragPan.isActive())return!0
if(t.touches)return t.touches.length>1
var i=t.ctrlKey?1:2,r=t.ctrlKey?0:2,n=t.button
return"undefined"!=typeof InstallTrigger&&2===t.button&&t.ctrlKey&&o.navigator.platform.toUpperCase().indexOf("MAC")>=0&&(n=0),"mousemove"===t.type?t.buttons&0===i:!this.isActive()&&n!==r},c.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=Date.now();t.length>0&&e-t[0][0]>160;)t.shift()},e.exports=c},{"../../util/dom":204,"../../util/util":218,"../../util/window":199}],188:[function(t,e,i){"use strict"
function r(t){return t*(2-t)}var n=100,o=15,a=10,s=function(t){this._map=t,this._el=t.getCanvasContainer(),this._onKeyDown=this._onKeyDown.bind(this)}
s.prototype.isEnabled=function(){return!!this._enabled},s.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("keydown",this._onKeyDown,!1),this._enabled=!0)},s.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("keydown",this._onKeyDown),this._enabled=!1)},s.prototype._onKeyDown=function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=0,i=0,s=0,l=0,u=0
switch(t.keyCode){case 61:case 107:case 171:case 187:e=1
break
case 189:case 109:case 173:e=-1
break
case 37:t.shiftKey?i=-1:(t.preventDefault(),l=-1)
break
case 39:t.shiftKey?i=1:(t.preventDefault(),l=1)
break
case 38:t.shiftKey?s=1:(t.preventDefault(),u=-1)
break
case 40:t.shiftKey?s=-1:(u=1,t.preventDefault())
break
default:return}var c=this._map,p=c.getZoom(),h={duration:300,delayEndEvents:500,easing:r,zoom:e?Math.round(p)+e*(t.shiftKey?2:1):p,bearing:c.getBearing()+i*o,pitch:c.getPitch()+s*a,offset:[-l*n,-u*n],center:c.getCenter()}
c.easeTo(h,{originalEvent:t})}},e.exports=s},{}],189:[function(t,e,i){"use strict"
var r=t("../../util/dom"),n=t("../../util/util"),o=t("../../util/browser"),a=t("../../util/window"),s=a.navigator.userAgent.toLowerCase(),l=-1!==s.indexOf("firefox"),u=-1!==s.indexOf("safari")&&-1===s.indexOf("chrom"),c=function(t){this._map=t,this._el=t.getCanvasContainer(),n.bindAll(["_onWheel","_onTimeout"],this)}
c.prototype.isEnabled=function(){return!!this._enabled},c.prototype.enable=function(t){this.isEnabled()||(this._el.addEventListener("wheel",this._onWheel,!1),this._el.addEventListener("mousewheel",this._onWheel,!1),this._enabled=!0,this._aroundCenter=t&&"center"===t.around)},c.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("wheel",this._onWheel),this._el.removeEventListener("mousewheel",this._onWheel),this._enabled=!1)},c.prototype._onWheel=function(t){var e
"wheel"===t.type?(e=t.deltaY,l&&t.deltaMode===a.WheelEvent.DOM_DELTA_PIXEL&&(e/=o.devicePixelRatio),t.deltaMode===a.WheelEvent.DOM_DELTA_LINE&&(e*=40)):"mousewheel"===t.type&&(e=-t.wheelDeltaY,u&&(e/=3))
var i=o.now(),n=i-(this._time||0)
this._pos=r.mousePos(this._el,t),this._time=i,0!==e&&e%4.000244140625==0?this._type="wheel":0!==e&&Math.abs(e)<4?this._type="trackpad":n>400?(this._type=null,this._lastValue=e,this._timeout=setTimeout(this._onTimeout,40)):this._type||(this._type=Math.abs(n*e)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,e+=this._lastValue)),t.shiftKey&&e&&(e/=4),this._type&&this._zoom(-e,t),t.preventDefault()},c.prototype._onTimeout=function(){this._type="wheel",this._zoom(-this._lastValue)},c.prototype._zoom=function(t,e){if(0!==t){var i=this._map,r=2/(1+Math.exp(-Math.abs(t/100)))
0>t&&0!==r&&(r=1/r)
var n=i.ease?i.ease.to:i.transform.scale,o=i.transform.scaleZoom(n*r)
i.zoomTo(o,{duration:"wheel"===this._type?200:0,around:this._aroundCenter?i.getCenter():i.unproject(this._pos),delayEndEvents:200,smoothEasing:!0},{originalEvent:e})}},e.exports=c},{"../../util/browser":197,"../../util/dom":204,"../../util/util":218,"../../util/window":199}],190:[function(t,e,i){"use strict"
var r=t("../../util/dom"),n=t("../../util/util"),o=t("../../util/window"),a=.15,s=n.bezier(0,0,a,1),l=12,u=2.5,c=.15,p=10,h=function(t){this._map=t,this._el=t.getCanvasContainer(),n.bindAll(["_onStart","_onMove","_onEnd"],this)}
h.prototype.isEnabled=function(){return!!this._enabled},h.prototype.enable=function(t){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-zoom-rotate"),this._el.addEventListener("touchstart",this._onStart,!1),this._enabled=!0,this._aroundCenter=t&&"center"===t.around)},h.prototype.disable=function(){this.isEnabled()&&(this._el.classList.remove("mapboxgl-touch-zoom-rotate"),this._el.removeEventListener("touchstart",this._onStart),this._enabled=!1)},h.prototype.disableRotation=function(){this._rotationDisabled=!0},h.prototype.enableRotation=function(){this._rotationDisabled=!1},h.prototype._onStart=function(t){if(2===t.touches.length){var e=r.mousePos(this._el,t.touches[0]),i=r.mousePos(this._el,t.touches[1])
this._startVec=e.sub(i),this._startScale=this._map.transform.scale,this._startBearing=this._map.transform.bearing,this._gestureIntent=void 0,this._inertia=[],o.document.addEventListener("touchmove",this._onMove,!1),o.document.addEventListener("touchend",this._onEnd,!1)}},h.prototype._onMove=function(t){if(2===t.touches.length){var e=r.mousePos(this._el,t.touches[0]),i=r.mousePos(this._el,t.touches[1]),n=e.add(i).div(2),o=e.sub(i),a=o.mag()/this._startVec.mag(),s=this._rotationDisabled?0:180*o.angleWith(this._startVec)/Math.PI,l=this._map
if(this._gestureIntent){var u={duration:0,around:l.unproject(n)}
"rotate"===this._gestureIntent&&(u.bearing=this._startBearing+s),"zoom"!==this._gestureIntent&&"rotate"!==this._gestureIntent||(u.zoom=l.transform.scaleZoom(this._startScale*a)),l.stop(),this._drainInertiaBuffer(),this._inertia.push([Date.now(),a,n]),l.easeTo(u,{originalEvent:t})}else{var h=Math.abs(1-a)>c
Math.abs(s)>p?this._gestureIntent="rotate":h&&(this._gestureIntent="zoom"),this._gestureIntent&&(this._startVec=o,this._startScale=l.transform.scale,this._startBearing=l.transform.bearing)}t.preventDefault()}},h.prototype._onEnd=function(t){o.document.removeEventListener("touchmove",this._onMove),o.document.removeEventListener("touchend",this._onEnd),this._drainInertiaBuffer()
var e=this._inertia,i=this._map
if(e.length<2)return void i.snapToNorth({},{originalEvent:t})
var r=e[e.length-1],n=e[0],c=i.transform.scaleZoom(this._startScale*r[1]),p=i.transform.scaleZoom(this._startScale*n[1]),h=c-p,f=(r[0]-n[0])/1e3,d=r[2]
if(0===f||c===p)return void i.snapToNorth({},{originalEvent:t})
var m=h*a/f
Math.abs(m)>u&&(m=m>0?u:-u)
var y=1e3*Math.abs(m/(l*a)),_=c+m*y/2e3
0>_&&(_=0),i.easeTo({zoom:_,duration:y,easing:s,around:this._aroundCenter?i.getCenter():i.unproject(d)},{originalEvent:t})},h.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=Date.now();t.length>2&&e-t[0][0]>160;)t.shift()},e.exports=h},{"../../util/dom":204,"../../util/util":218,"../../util/window":199}],191:[function(t,e,i){"use strict"
var r=t("../util/util"),n=t("../util/window"),o=function(){r.bindAll(["_onHashChange","_updateHash"],this)}
o.prototype.addTo=function(t){return this._map=t,n.addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this},o.prototype.remove=function(){return n.removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),delete this._map,this},o.prototype.getHashString=function(t){var e=this._map.getCenter(),i=Math.round(100*this._map.getZoom())/100,r=Math.max(0,Math.ceil(Math.log(i)/Math.LN2)),n=Math.round(e.lng*Math.pow(10,r))/Math.pow(10,r),o=Math.round(e.lat*Math.pow(10,r))/Math.pow(10,r),a=this._map.getBearing(),s=this._map.getPitch(),l=""
return l+=t?"#/"+n+"/"+o+"/"+i:"#"+i+"/"+o+"/"+n,(a||s)&&(l+="/"+Math.round(10*a)/10),s&&(l+="/"+Math.round(s)),l},o.prototype._onHashChange=function(){var t=n.location.hash.replace("#","").split("/")
return t.length>=3&&(this._map.jumpTo({center:[+t[2],+t[1]],zoom:+t[0],bearing:+(t[3]||0),pitch:+(t[4]||0)}),!0)},o.prototype._updateHash=function(){var t=this.getHashString()
n.history.replaceState("","",t)},e.exports=o},{"../util/util":218,"../util/window":199}],192:[function(t,e,i){"use strict"
function r(t){t.parentNode&&t.parentNode.removeChild(t)}var n=t("../util/util"),o=t("../util/browser"),a=t("../util/window"),s=t("../util/dom"),l=t("../util/ajax"),u=t("../style/style"),c=t("../style/animation_loop"),p=t("../render/painter"),h=t("../geo/transform"),f=t("./hash"),d=t("./bind_handlers"),m=t("./camera"),y=t("../geo/lng_lat"),_=t("../geo/lng_lat_bounds"),v=t("point-geometry"),g=t("./control/attribution_control"),x=t("./control/logo_control"),b=t("mapbox-gl-supported"),w=0,T=22,z={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:w,maxZoom:T,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,bearingSnap:7,hash:!1,attributionControl:!0,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null},E=function(t){function e(e){var i=this
if(e=n.extend({},z,e),null!=e.minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw Error("maxZoom must be greater than minZoom")
var r=new h(e.minZoom,e.maxZoom,e.renderWorldCopies)
if(t.call(this,r,e),this._interactive=e.interactive,this._maxTileCacheSize=e.maxTileCacheSize,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,"string"==typeof e.container){if(this._container=a.document.getElementById(e.container),!this._container)throw Error("Container '"+e.container+"' not found.")}else this._container=e.container
this.animationLoop=new c,e.maxBounds&&this.setMaxBounds(e.maxBounds),n.bindAll(["_onWindowOnline","_onWindowResize","_contextLost","_contextRestored","_update","_render","_onData","_onDataLoading"],this),this._setupContainer(),this._setupPainter(),this.on("move",this._update.bind(this,!1)),this.on("zoom",this._update.bind(this,!0)),this.on("moveend",function(){i.animationLoop.set(300),i._rerender()}),void 0!==a&&(a.addEventListener("online",this._onWindowOnline,!1),a.addEventListener("resize",this._onWindowResize,!1)),d(this,e),this._hash=e.hash&&(new f).addTo(this),this._hash&&this._hash._onHashChange()||this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),this._classes=[],this.resize(),e.classes&&this.setClasses(e.classes),e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new g),this.addControl(new x,e.logoPosition),this.on("style.load",function(){this.transform.unmodified&&this.jumpTo(this.style.stylesheet),this.style.update(this._classes,{transition:!1})}),this.on("data",this._onData),this.on("dataloading",this._onDataLoading)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e
var i={showTileBoundaries:{},showCollisionBoxes:{},showOverdrawInspector:{},repaint:{},vertices:{}}
return e.prototype.addControl=function(t,e){void 0===e&&t.getDefaultPosition&&(e=t.getDefaultPosition()),void 0===e&&(e="top-right")
var i=t.onAdd(this),r=this._controlPositions[e]
return-1!==e.indexOf("bottom")?r.insertBefore(i,r.firstChild):r.appendChild(i),this},e.prototype.removeControl=function(t){return t.onRemove(this),this},e.prototype.addClass=function(t,e){return n.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS."),this._classes.indexOf(t)>=0||""===t?this:(this._classes.push(t),this._classOptions=e,this.style&&this.style.updateClasses(),this._update(!0))},e.prototype.removeClass=function(t,e){n.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS.")
var i=this._classes.indexOf(t)
return 0>i||""===t?this:(this._classes.splice(i,1),this._classOptions=e,this.style&&this.style.updateClasses(),this._update(!0))},e.prototype.setClasses=function(t,e){n.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS.")
for(var i={},r=0;r<t.length;r++)""!==t[r]&&(i[t[r]]=!0)
return this._classes=Object.keys(i),this._classOptions=e,this.style&&this.style.updateClasses(),this._update(!0)},e.prototype.hasClass=function(t){return n.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS."),this._classes.indexOf(t)>=0},e.prototype.getClasses=function(){return n.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS."),this._classes},e.prototype.resize=function(){var t=this._containerDimensions(),e=t[0],i=t[1]
return this._resizeCanvas(e,i),this.transform.resize(e,i),this.painter.resize(e,i),this.fire("movestart").fire("move").fire("resize").fire("moveend")},e.prototype.getBounds=function(){var t=new _(this.transform.pointLocation(new v(0,this.transform.height)),this.transform.pointLocation(new v(this.transform.width,0)))
return(this.transform.angle||this.transform.pitch)&&(t.extend(this.transform.pointLocation(new v(this.transform.size.x,0))),t.extend(this.transform.pointLocation(new v(0,this.transform.size.y)))),t},e.prototype.getMaxBounds=function(){return this.transform.latRange&&2===this.transform.latRange.length&&this.transform.lngRange&&2===this.transform.lngRange.length?new _([this.transform.lngRange[0],this.transform.latRange[0]],[this.transform.lngRange[1],this.transform.latRange[1]]):null},e.prototype.setMaxBounds=function(t){if(t){var e=_.convert(t)
this.transform.lngRange=[e.getWest(),e.getEast()],this.transform.latRange=[e.getSouth(),e.getNorth()],this.transform._constrain(),this._update()}else null!==t&&void 0!==t||(this.transform.lngRange=[],this.transform.latRange=[],this._update())
return this},e.prototype.setMinZoom=function(t){if((t=null===t||void 0===t?w:t)>=w&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this
throw Error("minZoom must be between "+w+" and the current maxZoom, inclusive")},e.prototype.getMinZoom=function(){return this.transform.minZoom},e.prototype.setMaxZoom=function(t){if((t=null===t||void 0===t?T:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this
throw Error("maxZoom must be greater than the current minZoom")},e.prototype.getMaxZoom=function(){return this.transform.maxZoom},e.prototype.project=function(t){return this.transform.locationPoint(y.convert(t))},e.prototype.unproject=function(t){return this.transform.pointLocation(v.convert(t))},e.prototype.on=function(e,i,r){var o=this
if(void 0===r)return t.prototype.on.call(this,e,i)
var a=function(){if("mouseenter"===e||"mouseover"===e){var t=!1
return{layer:i,listener:r,delegates:{mousemove:function(a){var s=o.queryRenderedFeatures(a.point,{layers:[i]})
s.length?t||(t=!0,r.call(o,n.extend({features:s},a,{type:e}))):t=!1},mouseout:function(){t=!1}}}}if("mouseleave"===e||"mouseout"===e){var a=!1
return{layer:i,listener:r,delegates:{mousemove:function(t){o.queryRenderedFeatures(t.point,{layers:[i]}).length?a=!0:a&&(a=!1,r.call(o,n.extend({},t,{type:e})))},mouseout:function(t){a&&(a=!1,r.call(o,n.extend({},t,{type:e})))}}}}var s=function(t){var e=o.queryRenderedFeatures(t.point,{layers:[i]})
e.length&&r.call(o,n.extend({features:e},t))}
return{layer:i,listener:r,delegates:(l={},l[e]=s,l)}
var l}()
this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[e]=this._delegatedListeners[e]||[],this._delegatedListeners[e].push(a)
for(var s in a.delegates)o.on(s,a.delegates[s])
return this},e.prototype.off=function(e,i,r){var n=this
if(void 0===r)return t.prototype.off.call(this,e,i)
if(this._delegatedListeners&&this._delegatedListeners[e])for(var o=this._delegatedListeners[e],a=0;a<o.length;a++){var s=o[a]
if(s.layer===i&&s.listener===r){for(var l in s.delegates)n.off(l,s.delegates[l])
return o.splice(a,1),n}}},e.prototype.queryRenderedFeatures=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e]
var i,r={}
return 2===t.length?(i=arguments[0],r=arguments[1]):1===t.length&&function(t){return t instanceof v||Array.isArray(t)}(t[0])?i=t[0]:1===t.length&&(r=t[0]),this.style?this.style.queryRenderedFeatures(this._makeQueryGeometry(i),r,this.transform.zoom,this.transform.angle):[]},e.prototype._makeQueryGeometry=function(t){var e=this
void 0===t&&(t=[v.convert([0,0]),v.convert([this.transform.width,this.transform.height])])
var i
if(t instanceof v||"number"==typeof t[0])i=[v.convert(t)]
else{var r=[v.convert(t[0]),v.convert(t[1])]
i=[r[0],new v(r[1].x,r[0].y),r[1],new v(r[0].x,r[1].y),r[0]]}return i=i.map(function(t){return e.transform.pointCoordinate(t)})},e.prototype.querySourceFeatures=function(t,e){return this.style.querySourceFeatures(t,e)},e.prototype.setStyle=function(t,e){if((!e||!1!==e.diff&&!e.localIdeographFontFamily)&&this.style&&t&&!(t instanceof u)&&"string"!=typeof t)try{return this.style.setState(t)&&this._update(!0),this}catch(t){n.warnOnce("Unable to perform style diff: "+(t.message||t.error||t)+".  Rebuilding the style from scratch.")}return this.style&&(this.style.setEventedParent(null),this.style._remove(),this.off("rotate",this.style._redoPlacement),this.off("pitch",this.style._redoPlacement),this.off("move",this.style._redoPlacement)),t?(this.style=t instanceof u?t:new u(t,this,e),this.style.setEventedParent(this,{style:this.style}),this.on("rotate",this.style._redoPlacement),this.on("pitch",this.style._redoPlacement),this.on("move",this.style._redoPlacement),this):(this.style=null,this)},e.prototype.getStyle=function(){return this.style?this.style.serialize():void 0},e.prototype.isStyleLoaded=function(){return this.style?this.style.loaded():n.warnOnce("There is no style added to the map.")},e.prototype.addSource=function(t,e){return this.style.addSource(t,e),this._update(!0),this},e.prototype.isSourceLoaded=function(t){var e=this.style&&this.style.sourceCaches[t]
return void 0===e?void this.fire("error",{error:Error("There is no source with ID '"+t+"'")}):e.loaded()},e.prototype.areTilesLoaded=function(){var t=this.style&&this.style.sourceCaches
for(var e in t){var i=t[e],r=i._tiles
for(var n in r){var o=r[n]
if("loaded"!==o.state&&"errored"!==o.state)return!1}}return!0},e.prototype.addSourceType=function(t,e,i){return this.style.addSourceType(t,e,i)},e.prototype.removeSource=function(t){return this.style.removeSource(t),this._update(!0),this},e.prototype.getSource=function(t){return this.style.getSource(t)},e.prototype.addImage=function(t,e,i){this.style.spriteAtlas.addImage(t,e,i)},e.prototype.removeImage=function(t){this.style.spriteAtlas.removeImage(t)},e.prototype.loadImage=function(t,e){l.getImage(t,e)},e.prototype.addLayer=function(t,e){return this.style.addLayer(t,e),this._update(!0),this},e.prototype.moveLayer=function(t,e){return this.style.moveLayer(t,e),this._update(!0),this},e.prototype.removeLayer=function(t){return this.style.removeLayer(t),this._update(!0),this},e.prototype.getLayer=function(t){return this.style.getLayer(t)},e.prototype.setFilter=function(t,e){return this.style.setFilter(t,e),this._update(!0),this},e.prototype.setLayerZoomRange=function(t,e,i){return this.style.setLayerZoomRange(t,e,i),this._update(!0),this},e.prototype.getFilter=function(t){return this.style.getFilter(t)},e.prototype.setPaintProperty=function(t,e,i,r){return this.style.setPaintProperty(t,e,i,r),this._update(!0),this},e.prototype.getPaintProperty=function(t,e,i){return this.style.getPaintProperty(t,e,i)},e.prototype.setLayoutProperty=function(t,e,i){return this.style.setLayoutProperty(t,e,i),this._update(!0),this},e.prototype.getLayoutProperty=function(t,e){return this.style.getLayoutProperty(t,e)},e.prototype.setLight=function(t){return this.style.setLight(t),this._update(!0),this},e.prototype.getLight=function(){return this.style.getLight()},e.prototype.getContainer=function(){return this._container},e.prototype.getCanvasContainer=function(){return this._canvasContainer},e.prototype.getCanvas=function(){return this._canvas},e.prototype._containerDimensions=function(){var t=0,e=0
return this._container&&(t=this._container.offsetWidth||400,e=this._container.offsetHeight||300),[t,e]},e.prototype._setupContainer=function(){var t=this._container
t.classList.add("mapboxgl-map")
var e=this._canvasContainer=s.create("div","mapboxgl-canvas-container",t)
this._interactive&&e.classList.add("mapboxgl-interactive"),this._canvas=s.create("canvas","mapboxgl-canvas",e),this._canvas.style.position="absolute",this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map")
var i=this._containerDimensions()
this._resizeCanvas(i[0],i[1])
var r=this._controlContainer=s.create("div","mapboxgl-control-container",t),n=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach(function(t){n[t]=s.create("div","mapboxgl-ctrl-"+t,r)})},e.prototype._resizeCanvas=function(t,e){var i=a.devicePixelRatio||1
this._canvas.width=i*t,this._canvas.height=i*e,this._canvas.style.width=t+"px",this._canvas.style.height=e+"px"},e.prototype._setupPainter=function(){var t=n.extend({failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer},b.webGLContextAttributes),e=this._canvas.getContext("webgl",t)||this._canvas.getContext("experimental-webgl",t)
return e?void(this.painter=new p(e,this.transform)):void this.fire("error",{error:Error("Failed to initialize WebGL")})},e.prototype._contextLost=function(t){t.preventDefault(),this._frameId&&(o.cancelFrame(this._frameId),this._frameId=null),this.fire("webglcontextlost",{originalEvent:t})},e.prototype._contextRestored=function(t){this._setupPainter(),this.resize(),this._update(),this.fire("webglcontextrestored",{originalEvent:t})},e.prototype.loaded=function(){return!this._styleDirty&&!this._sourcesDirty&&!(!this.style||!this.style.loaded())},e.prototype._update=function(t){return this.style?(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this._rerender(),this):this},e.prototype._render=function(){return this.style&&this._styleDirty&&(this._styleDirty=!1,this.style.update(this._classes,this._classOptions),this._classOptions=null,this.style._recalculate(this.transform.zoom)),this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.rotating,zooming:this.zooming}),this.fire("render"),this.loaded()&&!this._loaded&&(this._loaded=!0,this.fire("load")),this._frameId=null,this.animationLoop.stopped()||(this._styleDirty=!0),(this._sourcesDirty||this._repaint||this._styleDirty)&&this._rerender(),this},e.prototype.remove=function(){this._hash&&this._hash.remove(),o.cancelFrame(this._frameId),this._frameId=null,this.setStyle(null),void 0!==a&&(a.removeEventListener("resize",this._onWindowResize,!1),a.removeEventListener("online",this._onWindowOnline,!1))
var t=this.painter.gl.getExtension("WEBGL_lose_context")
t&&t.loseContext(),r(this._canvasContainer),r(this._controlContainer),this._container.classList.remove("mapboxgl-map"),this.fire("remove")},e.prototype._rerender=function(){this.style&&!this._frameId&&(this._frameId=o.frame(this._render))},e.prototype._onWindowOnline=function(){this._update()},e.prototype._onWindowResize=function(){this._trackResize&&this.stop().resize()._update()},i.showTileBoundaries.get=function(){return!!this._showTileBoundaries},i.showTileBoundaries.set=function(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update())},i.showCollisionBoxes.get=function(){return!!this._showCollisionBoxes},i.showCollisionBoxes.set=function(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,this.style._redoPlacement())},i.showOverdrawInspector.get=function(){return!!this._showOverdrawInspector},i.showOverdrawInspector.set=function(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update())},i.repaint.get=function(){return!!this._repaint},i.repaint.set=function(t){this._repaint=t,this._update()},i.vertices.get=function(){return!!this._vertices},i.vertices.set=function(t){this._vertices=t,this._update()},e.prototype._onData=function(t){this._update("style"===t.dataType),this.fire(t.dataType+"data",t)},e.prototype._onDataLoading=function(t){this.fire(t.dataType+"dataloading",t)},Object.defineProperties(e.prototype,i),e}(m)
e.exports=E},{"../geo/lng_lat":72,"../geo/lng_lat_bounds":73,"../geo/transform":74,"../render/painter":87,"../style/animation_loop":146,"../style/style":149,"../util/ajax":196,"../util/browser":197,"../util/dom":204,"../util/util":218,"../util/window":199,"./bind_handlers":176,"./camera":177,"./control/attribution_control":178,"./control/logo_control":181,"./hash":191,"mapbox-gl-supported":33,"point-geometry":36}],193:[function(t,e,i){"use strict"
var r=t("../util/dom"),n=t("../geo/lng_lat"),o=t("point-geometry"),a=t("../util/smart_wrap"),s=function(t,e){this._offset=o.convert(e&&e.offset||[0,0]),this._update=this._update.bind(this),this._onMapClick=this._onMapClick.bind(this),t||(t=r.create("div")),t.classList.add("mapboxgl-marker"),this._element=t,this._popup=null}
s.prototype.addTo=function(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this._update(),this._map.on("click",this._onMapClick),this},s.prototype.remove=function(){return this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),this._map=null),r.remove(this._element),this._popup&&this._popup.remove(),this},s.prototype.getLngLat=function(){return this._lngLat},s.prototype.setLngLat=function(t){return this._lngLat=n.convert(t),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this},s.prototype.getElement=function(){return this._element},s.prototype.setPopup=function(t){return this._popup&&(this._popup.remove(),this._popup=null),t&&("offset"in t.options||(t.options.offset=this._offset),this._popup=t,this._popup.setLngLat(this._lngLat)),this},s.prototype._onMapClick=function(t){var e=t.originalEvent.target,i=this._element
this._popup&&(e===i||i.contains(e))&&this.togglePopup()},s.prototype.getPopup=function(){return this._popup},s.prototype.togglePopup=function(){var t=this._popup
t&&(t.isOpen()?t.remove():t.addTo(this._map))},s.prototype._update=function(t){this._map&&(this._map.transform.renderWorldCopies&&(this._lngLat=a(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset)._add({x:-this._element.offsetWidth/2,y:-this._element.offsetHeight/2}),t&&"moveend"!==t.type||(this._pos=this._pos.round()),r.setTransform(this._element,"translate("+this._pos.x+"px, "+this._pos.y+"px)"))},e.exports=s},{"../geo/lng_lat":72,"../util/dom":204,"../util/smart_wrap":214,"point-geometry":36}],194:[function(t,e,i){"use strict"
function r(t){if(t){if("number"==typeof t){var e=Math.round(Math.sqrt(.5*Math.pow(t,2)))
return{top:new u(0,t),"top-left":new u(e,e),"top-right":new u(-e,e),bottom:new u(0,-t),"bottom-left":new u(e,-e),"bottom-right":new u(-e,-e),left:new u(t,0),right:new u(-t,0)}}if(n(t)){var i=u.convert(t)
return{top:i,"top-left":i,"top-right":i,bottom:i,"bottom-left":i,"bottom-right":i,left:i,right:i}}return{top:u.convert(t.top||[0,0]),"top-left":u.convert(t["top-left"]||[0,0]),"top-right":u.convert(t["top-right"]||[0,0]),bottom:u.convert(t.bottom||[0,0]),"bottom-left":u.convert(t["bottom-left"]||[0,0]),"bottom-right":u.convert(t["bottom-right"]||[0,0]),left:u.convert(t.left||[0,0]),right:u.convert(t.right||[0,0])}}return r(new u(0,0))}function n(t){return t instanceof u||Array.isArray(t)}var o=t("../util/util"),a=t("../util/evented"),s=t("../util/dom"),l=t("../geo/lng_lat"),u=t("point-geometry"),c=t("../util/window"),p=t("../util/smart_wrap"),h={closeButton:!0,closeOnClick:!0},f=function(t){function e(e){t.call(this),this.options=o.extend(Object.create(h),e),o.bindAll(["_update","_onClickClose"],this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addTo=function(t){return this._map=t,this._map.on("move",this._update),this.options.closeOnClick&&this._map.on("click",this._onClickClose),this._update(),this},e.prototype.isOpen=function(){return!!this._map},e.prototype.remove=function(){return this._content&&this._content.parentNode&&this._content.parentNode.removeChild(this._content),this._container&&(this._container.parentNode.removeChild(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("click",this._onClickClose),delete this._map),this.fire("close"),this},e.prototype.getLngLat=function(){return this._lngLat},e.prototype.setLngLat=function(t){return this._lngLat=l.convert(t),this._pos=null,this._update(),this},e.prototype.setText=function(t){return this.setDOMContent(c.document.createTextNode(t))},e.prototype.setHTML=function(t){var e,i=c.document.createDocumentFragment(),r=c.document.createElement("body")
for(r.innerHTML=t;e=r.firstChild;)i.appendChild(e)
return this.setDOMContent(i)},e.prototype.setDOMContent=function(t){return this._createContent(),this._content.appendChild(t),this._update(),this},e.prototype._createContent=function(){this._content&&this._content.parentNode&&this._content.parentNode.removeChild(this._content),this._content=s.create("div","mapboxgl-popup-content",this._container),this.options.closeButton&&(this._closeButton=s.create("button","mapboxgl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClickClose))},e.prototype._update=function(){if(this._map&&this._lngLat&&this._content){this._container||(this._container=s.create("div","mapboxgl-popup",this._map.getContainer()),this._tip=s.create("div","mapboxgl-popup-tip",this._container),this._container.appendChild(this._content)),this._map.transform.renderWorldCopies&&(this._lngLat=p(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)
var t=this.options.anchor,e=r(this.options.offset)
if(!t){var i=this._container.offsetWidth,n=this._container.offsetHeight
t=this._pos.y+e.bottom.y<n?["top"]:this._pos.y>this._map.transform.height-n?["bottom"]:[],this._pos.x<i/2?t.push("left"):this._pos.x>this._map.transform.width-i/2&&t.push("right"),t=0===t.length?"bottom":t.join("-")}var o=this._pos.add(e[t]).round(),a={top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"},l=this._container.classList
for(var u in a)l.remove("mapboxgl-popup-anchor-"+u)
l.add("mapboxgl-popup-anchor-"+t),s.setTransform(this._container,a[t]+" translate("+o.x+"px,"+o.y+"px)")}},e.prototype._onClickClose=function(){this.remove()},e}(a)
e.exports=f},{"../geo/lng_lat":72,"../util/dom":204,"../util/evented":205,"../util/smart_wrap":214,"../util/util":218,"../util/window":199,"point-geometry":36}],195:[function(t,e,i){"use strict"
var r=function(t,e,i){this.target=t,this.parent=e,this.mapId=i,this.callbacks={},this.callbackID=0,this.receive=this.receive.bind(this),this.target.addEventListener("message",this.receive,!1)}
r.prototype.send=function(t,e,i,r,n){var o=i?this.mapId+":"+this.callbackID++:null
i&&(this.callbacks[o]=i),this.target.postMessage({targetMapId:n,sourceMapId:this.mapId,type:t,id:o+"",data:e},r)},r.prototype.receive=function(t){var e,i=this,r=t.data,n=r.id
if(!r.targetMapId||this.mapId===r.targetMapId){var o=function(t,e,r){i.target.postMessage({sourceMapId:i.mapId,type:"<response>",id:n+"",error:t?t+"":null,data:e},r)}
if("<response>"===r.type)e=this.callbacks[r.id],delete this.callbacks[r.id],e&&r.error?e(Error(r.error)):e&&e(null,r.data)
else if(void 0!==r.id&&this.parent[r.type])this.parent[r.type](r.sourceMapId,r.data,o)
else if(void 0!==r.id&&this.parent.getWorkerSource){var a=r.type.split("."),s=this.parent.getWorkerSource(r.sourceMapId,a[0])
s[a[1]](r.data,o)}else this.parent[r.type](r.data)}},r.prototype.remove=function(){this.target.removeEventListener("message",this.receive,!1)},e.exports=r},{}],196:[function(t,e,i){"use strict"
function r(t){var e=n.document.createElement("a")
return e.href=t,e.protocol===n.document.location.protocol&&e.host===n.document.location.host}var n=t("./window"),o=function(t){function e(e,i){t.call(this,e),this.status=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error)
i.getJSON=function(t,e){var i=new n.XMLHttpRequest
return i.open("GET",t,!0),i.setRequestHeader("Accept","application/json"),i.onerror=function(){e(Error(i.statusText))},i.onload=function(){if(i.status>=200&&i.status<300&&i.response){var t
try{t=JSON.parse(i.response)}catch(t){return e(t)}e(null,t)}else e(new o(i.statusText,i.status))},i.send(),i},i.getArrayBuffer=function(t,e){var i=new n.XMLHttpRequest
return i.open("GET",t,!0),i.responseType="arraybuffer",i.onerror=function(){e(Error(i.statusText))},i.onload=function(){var t=i.response
return 0===t.byteLength&&200===i.status?e(Error("http status 200 returned without content.")):void(i.status>=200&&i.status<300&&i.response?e(null,{data:t,cacheControl:i.getResponseHeader("Cache-Control"),expires:i.getResponseHeader("Expires")}):e(new o(i.statusText,i.status)))},i.send(),i}
var a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII="
i.getImage=function(t,e){return i.getArrayBuffer(t,function(t,i){if(t)e(t)
else if(i){var r=new n.Image,o=n.URL||n.webkitURL
r.onload=function(){e(null,r),o.revokeObjectURL(r.src)}
var s=new n.Blob([new Uint8Array(i.data)],{type:"image/png"})
r.cacheControl=i.cacheControl,r.expires=i.expires,r.src=i.data.byteLength?o.createObjectURL(s):a}})},i.getVideo=function(t,e){var i=n.document.createElement("video")
i.onloadstart=function(){e(null,i)}
for(var o=0;o<t.length;o++){var a=n.document.createElement("source")
r(t[o])||(i.crossOrigin="Anonymous"),a.src=t[o],i.appendChild(a)}return i}},{"./window":199}],197:[function(t,e,i){"use strict"
var r=t("./window"),n=r.performance&&r.performance.now?r.performance.now.bind(r.performance):Date.now.bind(Date),o=r.requestAnimationFrame||r.mozRequestAnimationFrame||r.webkitRequestAnimationFrame||r.msRequestAnimationFrame,a=r.cancelAnimationFrame||r.mozCancelAnimationFrame||r.webkitCancelAnimationFrame||r.msCancelAnimationFrame
e.exports={now:n,frame:function(t){return o(t)},cancelFrame:function(t){return a(t)},timed:function(t,e,i){function r(){if(!a){var l=n()
l>=s+e?t.call(i,1):(t.call(i,(l-s)/e),o(r))}}if(!e)return t.call(i,1),null
var a=!1,s=n()
return o(r),function(){a=!0}},getImageData:function(t){var e=r.document.createElement("canvas"),i=e.getContext("2d")
return e.width=t.width,e.height=t.height,i.drawImage(t,0,0,t.width,t.height),i.getImageData(0,0,t.width,t.height).data},hardwareConcurrency:r.navigator.hardwareConcurrency||4,get devicePixelRatio(){return r.devicePixelRatio},supportsWebp:!1}
var s=r.document.createElement("img")
s.onload=function(){e.exports.supportsWebp=!0},s.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="},{"./window":199}],198:[function(t,e,i){"use strict"
var r=t("webworkify"),n=t("../window"),o=n.URL.createObjectURL(new r(t("../../source/worker"),{bare:!0}))
e.exports=function(){return new n.Worker(o)}},{"../../source/worker":110,"../window":199,webworkify:51}],199:[function(t,e,i){"use strict"
e.exports=self},{}],200:[function(t,e,i){"use strict"
function r(t,e){return e.area-t.area}var n=t("quickselect"),o=t("./util").calculateSignedArea
e.exports=function(t,e){var i=t.length
if(1>=i)return[t]
for(var a,s,l=[],u=0;i>u;u++){var c=o(t[u])
0!==c&&(t[u].area=Math.abs(c),void 0===s&&(s=0>c),s===0>c?(a&&l.push(a),a=[t[u]]):a.push(t[u]))}if(a&&l.push(a),e>1)for(var p=0;p<l.length;p++)l[p].length<=e||(n(l[p],e,1,l[p].length-1,r),l[p]=l[p].slice(0,e))
return l}},{"./util":218,quickselect:38}],201:[function(t,e,i){"use strict"
var r={API_URL:"https://api.mapbox.com",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null}
e.exports=r},{}],202:[function(t,e,i){"use strict"
var r=function(t){var e=this
this._stringToNumber={},this._numberToString=[]
for(var i=0;i<t.length;i++){var r=t[i]
e._stringToNumber[r]=i,e._numberToString[i]=r}}
r.prototype.encode=function(t){return this._stringToNumber[t]},r.prototype.decode=function(t){return this._numberToString[t]},e.exports=r},{}],203:[function(t,e,i){"use strict"
var r=t("./util"),n=t("./actor"),o=function(t,e){var i=this
this.workerPool=t,this.actors=[],this.currentActor=0,this.id=r.uniqueId()
for(var o=this.workerPool.acquire(this.id),a=0;a<o.length;a++){var s=o[a],l=new n(s,e,i.id)
l.name="Worker "+a,i.actors.push(l)}}
o.prototype.broadcast=function(t,e,i){i=i||function(){},r.asyncAll(this.actors,function(i,r){i.send(t,e,r)},i)},o.prototype.send=function(t,e,i,r,n){return("number"!=typeof r||isNaN(r))&&(r=this.currentActor=(this.currentActor+1)%this.actors.length),this.actors[r].send(t,e,i,n),r},o.prototype.remove=function(){this.actors.forEach(function(t){t.remove()}),this.actors=[],this.workerPool.release(this.id)},e.exports=o},{"./actor":195,"./util":218}],204:[function(t,e,i){"use strict"
function r(t){for(var e=0;e<t.length;e++)if(t[e]in l)return t[e]
return t[0]}function n(t){t.preventDefault(),t.stopPropagation(),a.removeEventListener("click",n,!0)}var o=t("point-geometry"),a=t("./window")
i.create=function(t,e,i){var r=a.document.createElement(t)
return e&&(r.className=e),i&&i.appendChild(r),r}
var s,l=a.document.documentElement.style,u=r(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"])
i.disableDrag=function(){u&&(s=l[u],l[u]="none")},i.enableDrag=function(){u&&(l[u]=s)}
var c=r(["transform","WebkitTransform"])
i.setTransform=function(t,e){t.style[c]=e},i.suppressClick=function(){a.addEventListener("click",n,!0),a.setTimeout(function(){a.removeEventListener("click",n,!0)},0)},i.mousePos=function(t,e){var i=t.getBoundingClientRect()
return e=e.touches?e.touches[0]:e,new o(e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop)},i.touchPos=function(t,e){for(var i=t.getBoundingClientRect(),r=[],n="touchend"===e.type?e.changedTouches:e.touches,a=0;a<n.length;a++)r.push(new o(n[a].clientX-i.left-t.clientLeft,n[a].clientY-i.top-t.clientTop))
return r},i.remove=function(t){t.parentNode&&t.parentNode.removeChild(t)}},{"./window":199,"point-geometry":36}],205:[function(t,e,i){"use strict"
function r(t,e,i){i[t]=i[t]||[],i[t].push(e)}function n(t,e,i){if(i&&i[t]){var r=i[t].indexOf(e);-1!==r&&i[t].splice(r,1)}}var o=t("./util"),a=function(){}
a.prototype.on=function(t,e){return this._listeners=this._listeners||{},r(t,e,this._listeners),this},a.prototype.off=function(t,e){return n(t,e,this._listeners),n(t,e,this._oneTimeListeners),this},a.prototype.once=function(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},r(t,e,this._oneTimeListeners),this},a.prototype.fire=function(t,e){var i=this
if(this.listens(t)){e=o.extend({},e,{type:t,target:this})
for(var r=this._listeners&&this._listeners[t]?this._listeners[t].slice():[],a=0;a<r.length;a++)r[a].call(i,e)
for(var s=this._oneTimeListeners&&this._oneTimeListeners[t]?this._oneTimeListeners[t].slice():[],l=0;l<s.length;l++)s[l].call(i,e),n(t,s[l],i._oneTimeListeners)
this._eventedParent&&this._eventedParent.fire(t,o.extend({},e,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData))}else o.endsWith(t,"error")&&console.error(e&&e.error||e||"Empty error event")
return this},a.prototype.listens=function(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)},a.prototype.setEventedParent=function(t,e){return this._eventedParent=t,this._eventedParentData=e,this},e.exports=a},{"./util":218}],206:[function(t,e,i){"use strict"
function r(t,e){return e.max-t.max}function n(t,e,i,r){this.p=new l(t,e),this.h=i,this.d=o(this.p,r),this.max=this.d+this.h*Math.SQRT2}function o(t,e){for(var i=!1,r=1/0,n=0;n<e.length;n++)for(var o=e[n],a=0,s=o.length,l=s-1;s>a;l=a++){var c=o[a],p=o[l]
c.y>t.y!=p.y>t.y&&t.x<(p.x-c.x)*(t.y-c.y)/(p.y-c.y)+c.x&&(i=!i),r=Math.min(r,u(t,c,p))}return(i?1:-1)*Math.sqrt(r)}function a(t){for(var e=0,i=0,r=0,o=t[0],a=0,s=o.length,l=s-1;s>a;l=a++){var u=o[a],c=o[l],p=u.x*c.y-c.x*u.y
i+=(u.x+c.x)*p,r+=(u.y+c.y)*p,e+=3*p}return new n(i/e,r/e,0,t)}var s=t("tinyqueue"),l=t("point-geometry"),u=t("./intersection_tests").distToSegmentSquared
e.exports=function(t,e,i){e=e||1
for(var o,l,u,c,p=t[0],h=0;h<p.length;h++){var f=p[h];(!h||f.x<o)&&(o=f.x),(!h||f.y<l)&&(l=f.y),(!h||f.x>u)&&(u=f.x),(!h||f.y>c)&&(c=f.y)}var d=u-o,m=c-l,y=Math.min(d,m),_=y/2,v=new s(null,r)
if(0===y)return[o,l]
for(var g=o;u>g;g+=y)for(var x=l;c>x;x+=y)v.push(new n(g+_,x+_,_,t))
for(var b=a(t),w=v.length;v.length;){var T=v.pop();(T.d>b.d||!b.d)&&(b=T,i&&console.log("found best %d after %d probes",Math.round(1e4*T.d)/1e4,w)),T.max-b.d<=e||(_=T.h/2,v.push(new n(T.p.x-_,T.p.y-_,_,t)),v.push(new n(T.p.x+_,T.p.y-_,_,t)),v.push(new n(T.p.x-_,T.p.y+_,_,t)),v.push(new n(T.p.x+_,T.p.y+_,_,t)),w+=4)}return i&&(console.log("num probes: "+w),console.log("best distance: "+b.d)),b.p}},{"./intersection_tests":209,"point-geometry":36,tinyqueue:40}],207:[function(t,e,i){"use strict"
var r,n=t("./worker_pool")
e.exports=function(){return r||(r=new n),r}},{"./worker_pool":221}],208:[function(t,e,i){"use strict"
function r(t,e){this.stacks=t.readFields(n,[],e)}function n(t,e,i){if(1===t){var r=i.readMessage(o,{glyphs:{}})
e.push(r)}}function o(t,e,i){if(1===t)e.name=i.readString()
else if(2===t)e.range=i.readString()
else if(3===t){var r=i.readMessage(a,{})
e.glyphs[r.id]=r}}function a(t,e,i){1===t?e.id=i.readVarint():2===t?e.bitmap=i.readBytes():3===t?e.width=i.readVarint():4===t?e.height=i.readVarint():5===t?e.left=i.readSVarint():6===t?e.top=i.readSVarint():7===t&&(e.advance=i.readVarint())}e.exports=r},{}],209:[function(t,e,i){"use strict"
function r(t,e){for(var i=0;i<t.length;i++)if(f(e,t[i]))return!0
for(var r=0;r<e.length;r++)if(f(t,e[r]))return!0
return!!l(t,e)}function n(t,e,i){for(var r=0;r<t.length;r++)for(var n=t[r],o=0;o<e.length;o++)for(var a=e[o],s=0;s<a.length;s++){var l=a[s]
if(f(n,l))return!0
if(c(l,n,i))return!0}return!1}function o(t,e){if(1===t.length&&1===t[0].length)return h(e,t[0][0])
for(var i=0;i<e.length;i++)for(var r=e[i],n=0;n<r.length;n++)if(h(t,r[n]))return!0
for(var o=0;o<t.length;o++){for(var a=t[o],s=0;s<a.length;s++)if(h(e,a[s]))return!0
for(var u=0;u<e.length;u++)if(l(a,e[u]))return!0}return!1}function a(t,e,i){for(var r=0;r<e.length;r++)for(var n=e[r],o=0;o<t.length;o++){var a=t[o]
if(a.length>=3)for(var l=0;l<n.length;l++)if(f(a,n[l]))return!0
if(s(a,n,i))return!0}return!1}function s(t,e,i){if(t.length>1){if(l(t,e))return!0
for(var r=0;r<e.length;r++)if(c(e[r],t,i))return!0}for(var n=0;n<t.length;n++)if(c(t[n],e,i))return!0
return!1}function l(t,e){if(0===t.length||0===e.length)return!1
for(var i=0;i<t.length-1;i++)for(var r=t[i],n=t[i+1],o=0;o<e.length-1;o++){var a=e[o],s=e[o+1]
if(u(r,n,a,s))return!0}return!1}function u(t,e,i,r){return d(t,i,r)!==d(e,i,r)&&d(t,e,i)!==d(t,e,r)}function c(t,e,i){var r=i*i
if(1===e.length)return t.distSqr(e[0])<r
for(var n=1;n<e.length;n++)if(p(t,e[n-1],e[n])<r)return!0
return!1}function p(t,e,i){var r=e.distSqr(i)
if(0===r)return t.distSqr(e)
var n=((t.x-e.x)*(i.x-e.x)+(t.y-e.y)*(i.y-e.y))/r
return 0>n?t.distSqr(e):n>1?t.distSqr(i):t.distSqr(i.sub(e)._mult(n)._add(e))}function h(t,e){for(var i,r,n,o=!1,a=0;a<t.length;a++){i=t[a]
for(var s=0,l=i.length-1;s<i.length;l=s++)r=i[s],n=i[l],r.y>e.y!=n.y>e.y&&e.x<(n.x-r.x)*(e.y-r.y)/(n.y-r.y)+r.x&&(o=!o)}return o}function f(t,e){for(var i=!1,r=0,n=t.length-1;r<t.length;n=r++){var o=t[r],a=t[n]
o.y>e.y!=a.y>e.y&&e.x<(a.x-o.x)*(e.y-o.y)/(a.y-o.y)+o.x&&(i=!i)}return i}var d=t("./util").isCounterClockwise
e.exports={multiPolygonIntersectsBufferedMultiPoint:n,multiPolygonIntersectsMultiPolygon:o,multiPolygonIntersectsBufferedMultiLine:a,polygonIntersectsPolygon:r,distToSegmentSquared:p}},{"./util":218}],210:[function(t,e,i){"use strict"
var r={"Latin-1 Supplement":function(t){return t>=128&&255>=t},Arabic:function(t){return t>=1536&&1791>=t},"Arabic Supplement":function(t){return t>=1872&&1919>=t},"Arabic Extended-A":function(t){return t>=2208&&2303>=t},"Hangul Jamo":function(t){return t>=4352&&4607>=t},"Unified Canadian Aboriginal Syllabics":function(t){return t>=5120&&5759>=t},"Unified Canadian Aboriginal Syllabics Extended":function(t){return t>=6320&&6399>=t},"General Punctuation":function(t){return t>=8192&&8303>=t},"Letterlike Symbols":function(t){return t>=8448&&8527>=t},"Number Forms":function(t){return t>=8528&&8591>=t},"Miscellaneous Technical":function(t){return t>=8960&&9215>=t},"Control Pictures":function(t){return t>=9216&&9279>=t},"Optical Character Recognition":function(t){return t>=9280&&9311>=t},"Enclosed Alphanumerics":function(t){return t>=9312&&9471>=t},"Geometric Shapes":function(t){return t>=9632&&9727>=t},"Miscellaneous Symbols":function(t){return t>=9728&&9983>=t},"Miscellaneous Symbols and Arrows":function(t){return t>=11008&&11263>=t},"CJK Radicals Supplement":function(t){return t>=11904&&12031>=t},"Kangxi Radicals":function(t){return t>=12032&&12255>=t},"Ideographic Description Characters":function(t){return t>=12272&&12287>=t},"CJK Symbols and Punctuation":function(t){return t>=12288&&12351>=t},Hiragana:function(t){return t>=12352&&12447>=t},Katakana:function(t){return t>=12448&&12543>=t},Bopomofo:function(t){return t>=12544&&12591>=t},"Hangul Compatibility Jamo":function(t){return t>=12592&&12687>=t},Kanbun:function(t){return t>=12688&&12703>=t},"Bopomofo Extended":function(t){return t>=12704&&12735>=t},"CJK Strokes":function(t){return t>=12736&&12783>=t},"Katakana Phonetic Extensions":function(t){return t>=12784&&12799>=t},"Enclosed CJK Letters and Months":function(t){return t>=12800&&13055>=t},"CJK Compatibility":function(t){return t>=13056&&13311>=t},"CJK Unified Ideographs Extension A":function(t){return t>=13312&&19903>=t},"Yijing Hexagram Symbols":function(t){return t>=19904&&19967>=t},"CJK Unified Ideographs":function(t){return t>=19968&&40959>=t},"Yi Syllables":function(t){return t>=40960&&42127>=t},"Yi Radicals":function(t){return t>=42128&&42191>=t},"Hangul Jamo Extended-A":function(t){return t>=43360&&43391>=t},"Hangul Syllables":function(t){return t>=44032&&55215>=t},"Hangul Jamo Extended-B":function(t){return t>=55216&&55295>=t},"Private Use Area":function(t){return t>=57344&&63743>=t},"CJK Compatibility Ideographs":function(t){return t>=63744&&64255>=t},"Arabic Presentation Forms-A":function(t){return t>=64336&&65023>=t},"Vertical Forms":function(t){return t>=65040&&65055>=t},"CJK Compatibility Forms":function(t){return t>=65072&&65103>=t},"Small Form Variants":function(t){return t>=65104&&65135>=t},"Arabic Presentation Forms-B":function(t){return t>=65136&&65279>=t},"Halfwidth and Fullwidth Forms":function(t){return t>=65280&&65519>=t}}
e.exports=r},{}],211:[function(t,e,i){"use strict"
var r=function(t,e){this.max=t,this.onRemove=e,this.reset()}
r.prototype.reset=function(){var t=this
for(var e in t.data)t.onRemove(t.data[e])
return this.data={},this.order=[],this},r.prototype.add=function(t,e){if(this.has(t))this.order.splice(this.order.indexOf(t),1),this.data[t]=e,this.order.push(t)
else if(this.data[t]=e,this.order.push(t),this.order.length>this.max){var i=this.get(this.order[0])
i&&this.onRemove(i)}return this},r.prototype.has=function(t){return t in this.data},r.prototype.keys=function(){return this.order},r.prototype.get=function(t){if(!this.has(t))return null
var e=this.data[t]
return delete this.data[t],this.order.splice(this.order.indexOf(t),1),e},r.prototype.getWithoutRemoving=function(t){return this.has(t)?this.data[t]:null},r.prototype.remove=function(t){if(!this.has(t))return this
var e=this.data[t]
return delete this.data[t],this.onRemove(e),this.order.splice(this.order.indexOf(t),1),this},r.prototype.setMaxSize=function(t){var e=this
for(this.max=t;this.order.length>this.max;){var i=e.get(e.order[0])
i&&e.onRemove(i)}return this},e.exports=r},{}],212:[function(t,e,i){"use strict"
function r(t,e){var i=a(l.API_URL)
if(t.protocol=i.protocol,t.authority=i.authority,"/"!==i.path&&(t.path=""+i.path+t.path),!l.REQUIRE_ACCESS_TOKEN)return s(t)
if(!(e=e||l.ACCESS_TOKEN))throw Error("An API access token is required to use Mapbox GL. "+c)
if("s"===e[0])throw Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). "+c)
return t.params.push("access_token="+e),s(t)}function n(t){return 0===t.indexOf("mapbox:")}function o(t){for(var e=0;e<t.length;e++)0===t[e].indexOf("access_token=tk.")&&(t[e]="access_token="+(l.ACCESS_TOKEN||""))}function a(t){var e=t.match(h)
if(!e)throw Error("Unable to parse URL object")
return{protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function s(t){var e=t.params.length?"?"+t.params.join("&"):""
return t.protocol+"://"+t.authority+t.path+e}var l=t("./config"),u=t("./browser"),c="See https://www.mapbox.com/api-documentation/#access-tokens"
i.isMapboxURL=n,i.normalizeStyleURL=function(t,e){if(!n(t))return t
var i=a(t)
return i.path="/styles/v1"+i.path,r(i,e)},i.normalizeGlyphsURL=function(t,e){if(!n(t))return t
var i=a(t)
return i.path="/fonts/v1"+i.path,r(i,e)},i.normalizeSourceURL=function(t,e){if(!n(t))return t
var i=a(t)
return i.path="/v4/"+i.authority+".json",i.params.push("secure"),r(i,e)},i.normalizeSpriteURL=function(t,e,i,o){var l=a(t)
return n(t)?(l.path="/styles/v1"+l.path+"/sprite"+e+i,r(l,o)):(l.path+=""+e+i,s(l))}
var p=/(\.(png|jpg)\d*)(?=$)/
i.normalizeTileURL=function(t,e,i){if(!e||!n(e))return t
var r=a(t),l=u.devicePixelRatio>=2||512===i?"@2x":"",c=u.supportsWebp?".webp":"$1"
return r.path=r.path.replace(p,""+l+c),o(r.params),s(r)}
var h=/^(\w+):\/\/([^\/?]*)(\/[^?]+)?\??(.+)?/},{"./browser":197,"./config":201}],213:[function(t,e,i){"use strict"
var r=t("./is_char_in_unicode_block")
e.exports.allowsIdeographicBreaking=function(t){for(var e=0,r=t;e<r.length;e+=1){var n=r[e]
if(!i.charAllowsIdeographicBreaking(n.charCodeAt(0)))return!1}return!0},e.exports.allowsVerticalWritingMode=function(t){for(var e=0,r=t;e<r.length;e+=1){var n=r[e]
if(i.charHasUprightVerticalOrientation(n.charCodeAt(0)))return!0}return!1},e.exports.allowsLetterSpacing=function(t){for(var e=0,r=t;e<r.length;e+=1){var n=r[e]
if(!i.charAllowsLetterSpacing(n.charCodeAt(0)))return!1}return!0},e.exports.charAllowsLetterSpacing=function(t){return!(r.Arabic(t)||r["Arabic Supplement"](t)||r["Arabic Extended-A"](t)||r["Arabic Presentation Forms-A"](t)||r["Arabic Presentation Forms-B"](t))},e.exports.charAllowsIdeographicBreaking=function(t){return!!(!(11904>t)&&(r["Bopomofo Extended"](t)||r.Bopomofo(t)||r["CJK Compatibility Forms"](t)||r["CJK Compatibility Ideographs"](t)||r["CJK Compatibility"](t)||r["CJK Radicals Supplement"](t)||r["CJK Strokes"](t)||r["CJK Symbols and Punctuation"](t)||r["CJK Unified Ideographs Extension A"](t)||r["CJK Unified Ideographs"](t)||r["Enclosed CJK Letters and Months"](t)||r["Halfwidth and Fullwidth Forms"](t)||r.Hiragana(t)||r["Ideographic Description Characters"](t)||r["Kangxi Radicals"](t)||r["Katakana Phonetic Extensions"](t)||r.Katakana(t)||r["Vertical Forms"](t)||r["Yi Radicals"](t)||r["Yi Syllables"](t)))},i.charHasUprightVerticalOrientation=function(t){return!!(746===t||747===t||!(4352>t)&&(r["Bopomofo Extended"](t)||r.Bopomofo(t)||r["CJK Compatibility Forms"](t)&&!(t>=65097&&65103>=t)||r["CJK Compatibility Ideographs"](t)||r["CJK Compatibility"](t)||r["CJK Radicals Supplement"](t)||r["CJK Strokes"](t)||!(!r["CJK Symbols and Punctuation"](t)||t>=12296&&12305>=t||t>=12308&&12319>=t||12336===t)||r["CJK Unified Ideographs Extension A"](t)||r["CJK Unified Ideographs"](t)||r["Enclosed CJK Letters and Months"](t)||r["Hangul Compatibility Jamo"](t)||r["Hangul Jamo Extended-A"](t)||r["Hangul Jamo Extended-B"](t)||r["Hangul Jamo"](t)||r["Hangul Syllables"](t)||r.Hiragana(t)||r["Ideographic Description Characters"](t)||r.Kanbun(t)||r["Kangxi Radicals"](t)||r["Katakana Phonetic Extensions"](t)||r.Katakana(t)&&12540!==t||!(!r["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&65310>=t||65339===t||65341===t||65343===t||t>=65371&&65503>=t||65507===t||t>=65512&&65519>=t)||!(!r["Small Form Variants"](t)||t>=65112&&65118>=t||t>=65123&&65126>=t)||r["Unified Canadian Aboriginal Syllabics"](t)||r["Unified Canadian Aboriginal Syllabics Extended"](t)||r["Vertical Forms"](t)||r["Yijing Hexagram Symbols"](t)||r["Yi Syllables"](t)||r["Yi Radicals"](t)))},i.charHasNeutralVerticalOrientation=function(t){return!!(r["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||r["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||r["Letterlike Symbols"](t)||r["Number Forms"](t)||r["Miscellaneous Technical"](t)&&(t>=8960&&8967>=t||t>=8972&&8991>=t||t>=8996&&9e3>=t||9003===t||t>=9085&&9114>=t||t>=9150&&9165>=t||9167===t||t>=9169&&9179>=t||t>=9186&&9215>=t)||r["Control Pictures"](t)&&9251!==t||r["Optical Character Recognition"](t)||r["Enclosed Alphanumerics"](t)||r["Geometric Shapes"](t)||r["Miscellaneous Symbols"](t)&&!(t>=9754&&9759>=t)||r["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&11055>=t||t>=11088&&11097>=t||t>=11192&&11243>=t)||r["CJK Symbols and Punctuation"](t)||r.Katakana(t)||r["Private Use Area"](t)||r["CJK Compatibility Forms"](t)||r["Small Form Variants"](t)||r["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&10087>=t||t>=10102&&10131>=t||65532===t||65533===t)},i.charHasRotatedVerticalOrientation=function(t){return!(i.charHasUprightVerticalOrientation(t)||i.charHasNeutralVerticalOrientation(t))}},{"./is_char_in_unicode_block":210}],214:[function(t,e,i){"use strict"
var r=t("../geo/lng_lat")
e.exports=function(t,e,i){if(t=new r(t.lng,t.lat),e){var n=new r(t.lng-360,t.lat),o=new r(t.lng+360,t.lat),a=i.locationPoint(t).distSqr(e)
i.locationPoint(n).distSqr(e)<a?t=n:i.locationPoint(o).distSqr(e)<a&&(t=o)}for(;Math.abs(t.lng-i.center.lng)>180;){var s=i.locationPoint(t)
if(s.x>=0&&s.y>=0&&s.x<=i.width&&s.y<=i.height)break
t.lng>i.center.lng?t.lng-=360:t.lng+=360}return t}},{"../geo/lng_lat":72}],215:[function(t,e,i){"use strict"
function r(t){var e=JSON.stringify(t)
if(y[e])return y[e]
var i=void 0===t.alignment?1:t.alignment,r=0,a=0,l=["Uint8"],p=t.members.map(function(t){l.indexOf(t.type)<0&&l.push(t.type)
var e=o(t.type),s=r=n(r,Math.max(i,e)),u=t.components||1
return a=Math.max(a,e),r+=e*u,{name:t.name,type:t.type,components:u,offset:s}}),f=n(r,Math.max(a,i)),d=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(h)
d.prototype.alignment=i,d.prototype.size=f
for(var _=0,v=p;_<v.length;_+=1)for(var g=v[_],x=0;x<g.components;x++){var b=g.name+(1===g.components?"":x)
if(b in d.prototype)throw Error(b+" is a reserved name and cannot be used as a member name.")
Object.defineProperty(d.prototype,b,{get:u(g,x),set:c(g,x)})}var w=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(m)
return w.prototype.members=p,w.prototype.StructType=d,w.prototype.bytesPerElement=f,w.prototype.emplaceBack=s(p,f),w.prototype._usedTypes=l,y[e]=w,w}function n(t,e){return Math.ceil(t/e)*e}function o(t){return p[t].BYTES_PER_ELEMENT}function a(t){return t.toLowerCase()}function s(t,e){for(var i=[],r=[],n="var i = this.length;\nthis.resize(this.length + 1);\n",s=0,l=t;s<l.length;s+=1){var u=l[s],c=o(u.type)
i.indexOf(c)<0&&(i.push(c),n+="var o"+c.toFixed(0)+" = i * "+(e/c).toFixed(0)+";\n")
for(var p=0;p<u.components;p++){var h="v"+r.length,f="o"+c.toFixed(0)+" + "+(u.offset/c+p).toFixed(0)
n+="this."+a(u.type)+"["+f+"] = "+h+";\n",r.push(h)}}return n+="return i;",Function(""+r,n)}function l(t,e){var i="this._pos"+o(t.type).toFixed(0),r=(t.offset/o(t.type)+e).toFixed(0),n=i+" + "+r
return"this._structArray."+a(t.type)+"["+n+"]"}function u(t,e){return Function("return "+l(t,e)+";")}function c(t,e){return Function("x",l(t,e)+" = x;")}e.exports=r
var p={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array},h=function(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8},f=128,d=5,m=function(t){this.isTransferred=!1,void 0!==t?(this.arrayBuffer=t.arrayBuffer,this.length=t.length,this.capacity=this.arrayBuffer.byteLength/this.bytesPerElement,this._refreshViews()):(this.capacity=-1,this.resize(0))}
m.serialize=function(){return{members:this.prototype.members,alignment:this.prototype.StructType.prototype.alignment,bytesPerElement:this.prototype.bytesPerElement}},m.prototype.serialize=function(t){return this._trim(),t&&(this.isTransferred=!0,t.push(this.arrayBuffer)),{length:this.length,arrayBuffer:this.arrayBuffer}},m.prototype.get=function(t){return new this.StructType(this,t)},m.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews())},m.prototype.clear=function(){this.length=0},m.prototype.resize=function(t){if(this.length=t,t>this.capacity){this.capacity=Math.max(t,Math.floor(this.capacity*d),f),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement)
var e=this.uint8
this._refreshViews(),e&&this.uint8.set(e)}},m.prototype._refreshViews=function(){for(var t=this,e=0,i=t._usedTypes;e<i.length;e+=1){var r=i[e]
t[a(r)]=new p[r](t.arrayBuffer)}},m.prototype.toArray=function(t,e){for(var i=this,r=[],n=t;e>n;n++){var o=i.get(n)
r.push(o)}return r}
var y={}},{}],216:[function(t,e,i){"use strict"
var r=t("./browser"),n=function(t,e){this.frequency=t,this.throttledFunction=e,this.lastInvocation=0}
n.prototype.invoke=function(){var t=this
if(!this.pendingInvocation){var e=0===this.lastInvocation?0:this.lastInvocation+this.frequency-r.now()
0>=e?(this.lastInvocation=r.now(),this.throttledFunction()):this.pendingInvocation=setTimeout(function(){t.pendingInvocation=void 0,t.lastInvocation=r.now(),t.throttledFunction()},e)}},n.prototype.stop=function(){this.pendingInvocation&&(clearTimeout(this.pendingInvocation),this.pendingInvocation=void 0)},e.exports=n},{"./browser":197}],217:[function(t,e,i){"use strict"
function r(t,e){return e.replace(/{([^{}]+)}/g,function(e,i){return i in t?t[i]:""})}e.exports=r},{}],218:[function(t,e,i){"use strict"
var r=t("@mapbox/unitbezier"),n=t("../geo/coordinate")
t("point-geometry")
i.easeCubicInOut=function(t){if(0>=t)return 0
if(t>=1)return 1
var e=t*t,i=e*t
return 4*(.5>t?i:3*(t-e)+i-.75)},i.bezier=function(t,e,i,n){var o=new r(t,e,i,n)
return function(t){return o.solve(t)}},i.ease=i.bezier(.25,.1,.25,1),i.clamp=function(t,e,i){return Math.min(i,Math.max(e,t))},i.wrap=function(t,e,i){var r=i-e,n=((t-e)%r+r)%r+e
return n===e?i:n},i.asyncAll=function(t,e,i){if(!t.length)return i(null,[])
var r=t.length,n=Array(t.length),o=null
t.forEach(function(t,a){e(t,function(t,e){t&&(o=t),n[a]=e,0==--r&&i(o,n)})})},i.values=function(t){var e=[]
for(var i in t)e.push(t[i])
return e},i.keysDifference=function(t,e){var i=[]
for(var r in t)r in e||i.push(r)
return i},i.extend=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1]
for(var r=0,n=e;r<n.length;r+=1){var o=n[r]
for(var a in o)t[a]=o[a]}return t},i.pick=function(t,e){for(var i={},r=0;r<e.length;r++){var n=e[r]
n in t&&(i[n]=t[n])}return i}
var o=1
i.uniqueId=function(){return o++},i.bindAll=function(t,e){t.forEach(function(t){e[t]&&(e[t]=e[t].bind(e))})},i.getCoordinatesCenter=function(t){for(var e=1/0,i=1/0,r=-1/0,o=-1/0,a=0;a<t.length;a++)e=Math.min(e,t[a].column),i=Math.min(i,t[a].row),r=Math.max(r,t[a].column),o=Math.max(o,t[a].row)
var s=r-e,l=o-i,u=Math.max(s,l),c=Math.max(0,Math.floor(-Math.log(u)/Math.LN2))
return new n((e+r)/2,(i+o)/2,0).zoomTo(c)},i.endsWith=function(t,e){return-1!==t.indexOf(e,t.length-e.length)},i.mapObject=function(t,e,i){var r=this,n={}
for(var o in t)n[o]=e.call(i||r,t[o],o,t)
return n},i.filterObject=function(t,e,i){var r=this,n={}
for(var o in t)e.call(i||r,t[o],o,t)&&(n[o]=t[o])
return n},i.deepEqual=function(t,e){if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1
for(var r=0;r<t.length;r++)if(!i.deepEqual(t[r],e[r]))return!1
return!0}if("object"==typeof t&&null!==t&&null!==e){if("object"!=typeof e)return!1
if(Object.keys(t).length!==Object.keys(e).length)return!1
for(var n in t)if(!i.deepEqual(t[n],e[n]))return!1
return!0}return t===e},i.clone=function(t){return Array.isArray(t)?t.map(i.clone):"object"==typeof t&&t?i.mapObject(t,i.clone):t},i.arraysIntersect=function(t,e){for(var i=0;i<t.length;i++)if(e.indexOf(t[i])>=0)return!0
return!1}
var a={}
i.warnOnce=function(t){a[t]||("undefined"!=typeof console&&console.warn(t),a[t]=!0)},i.isCounterClockwise=function(t,e,i){return(i.y-t.y)*(e.x-t.x)>(e.y-t.y)*(i.x-t.x)},i.calculateSignedArea=function(t){for(var e=0,i=0,r=t.length,n=r-1,o=void 0,a=void 0;r>i;n=i++)o=t[i],a=t[n],e+=(a.x-o.x)*(o.y+a.y)
return e},i.isClosedPolygon=function(t){if(t.length<4)return!1
var e=t[0],r=t[t.length-1]
return!(Math.abs(e.x-r.x)>0||Math.abs(e.y-r.y)>0)&&Math.abs(i.calculateSignedArea(t))>.01},i.sphericalToCartesian=function(t){var e=t[0],i=t[1],r=t[2]
return i+=90,i*=Math.PI/180,r*=Math.PI/180,[e*Math.cos(i)*Math.sin(r),e*Math.sin(i)*Math.sin(r),e*Math.cos(r)]},i.parseCacheControl=function(t){var e=/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,i={}
if(t.replace(e,function(t,e,r,n){var o=r||n
return i[e]=!o||o.toLowerCase(),""}),i["max-age"]){var r=parseInt(i["max-age"],10)
isNaN(r)?delete i["max-age"]:i["max-age"]=r}return i}},{"../geo/coordinate":71,"@mapbox/unitbezier":4,"point-geometry":36}],219:[function(t,e,i){"use strict"
var r=function(t,e,i,r){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=i,t._y=r,this.properties=t.properties,null!=t.id&&(this.id=t.id)},n={geometry:{}}
n.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},n.geometry.set=function(t){this._geometry=t},r.prototype.toJSON=function(){var t=this,e={geometry:this.geometry}
for(var i in t)"_geometry"!==i&&"_vectorTileFeature"!==i&&(e[i]=t[i])
return e},Object.defineProperties(r.prototype,n),e.exports=r},{}],220:[function(t,e,i){"use strict"
var r=t("./script_detection")
e.exports=function(t){for(var i="",n=0;n<t.length;n++){var o=t.charCodeAt(n+1)||null,a=t.charCodeAt(n-1)||null
i+=o&&r.charHasRotatedVerticalOrientation(o)&&!e.exports.lookup[t[n+1]]||a&&r.charHasRotatedVerticalOrientation(a)&&!e.exports.lookup[t[n-1]]||!e.exports.lookup[t[n]]?t[n]:e.exports.lookup[t[n]]}return i},e.exports.lookup={"!":"ï¸•","#":"ï¼ƒ",$:"ï¼„","%":"ï¼…","&":"ï¼†","(":"ï¸µ",")":"ï¸¶","*":"ï¼Š","+":"ï¼‹",",":"ï¸","-":"ï¸²",".":"ãƒ»","/":"ï¼",":":"ï¸“",";":"ï¸”","<":"ï¸¿","=":"ï¼",">":"ï¹€","?":"ï¸–","@":"ï¼ ","[":"ï¹‡","\\":"ï¼¼","]":"ï¹ˆ","^":"ï¼¾",_:"ï¸³","`":"ï½€","{":"ï¸·","|":"â€•","}":"ï¸¸","~":"ï½ž","Â¢":"ï¿ ","Â£":"ï¿¡","Â¥":"ï¿¥","Â¦":"ï¿¤","Â¬":"ï¿¢","Â¯":"ï¿£","â€“":"ï¸²","â€”":"ï¸±","â€˜":"ï¹ƒ","â€™":"ï¹„","â€œ":"ï¹","â€":"ï¹‚","â€¦":"ï¸™","â€§":"ãƒ»","â‚©":"ï¿¦","ã€":"ï¸‘","ã€‚":"ï¸’","ã€ˆ":"ï¸¿","ã€‰":"ï¹€","ã€Š":"ï¸½","ã€‹":"ï¸¾","ã€Œ":"ï¹","ã€":"ï¹‚","ã€Ž":"ï¹ƒ","ã€":"ï¹„","ã€":"ï¸»","ã€‘":"ï¸¼","ã€”":"ï¸¹","ã€•":"ï¸º","ã€–":"ï¸—","ã€—":"ï¸˜","ï¼":"ï¸•","ï¼ˆ":"ï¸µ","ï¼‰":"ï¸¶","ï¼Œ":"ï¸","ï¼":"ï¸²","ï¼Ž":"ãƒ»","ï¼š":"ï¸“","ï¼›":"ï¸”","ï¼œ":"ï¸¿","ï¼ž":"ï¹€","ï¼Ÿ":"ï¸–","ï¼»":"ï¹‡","ï¼½":"ï¹ˆ","ï¼¿":"ï¸³","ï½›":"ï¸·","ï½œ":"â€•","ï½":"ï¸¸","ï½Ÿ":"ï¸µ","ï½ ":"ï¸¶","ï½¡":"ï¸’","ï½¢":"ï¹","ï½£":"ï¹‚"}},{"./script_detection":213}],221:[function(t,e,i){"use strict"
var r=t("./web_worker"),n=function(){this.active={}}
n.prototype.acquire=function(e){var i=this
if(!this.workers){var n=t("../").workerCount
for(this.workers=[];this.workers.length<n;)i.workers.push(new r)}return this.active[e]=!0,this.workers.slice()},n.prototype.release=function(t){delete this.active[t],0===Object.keys(this.active).length&&(this.workers.forEach(function(t){t.terminate()}),this.workers=null)},e.exports=n},{"../":75,"./web_worker":198}]},{},[75])(75)})
