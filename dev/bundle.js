!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){t.markdown=n(7),t.parse=t.markdown.toHTML},function(e,t,n){"use strict";n.r(t);n(10),n(8);var r=n(0),i=function(e,t,n){return function(i){var o=e.getElementById(t).value;e.getElementById(n).innerHTML=r.markdown.toHTML(o),i.preventDefault()}};window.onload=function(){document.getElementById("editor").addEventListener("submit",i(document,"source","preview"))}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var a,c=[],u=!1,f=-1;function h(){u&&a&&(u=!1,a.length?c=a.concat(c):f=-1,c.length&&p())}function p(){if(!u){var e=s(h);u=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function d(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new g(e,t)),1!==c.length||u||s(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(e,r){var i=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(s(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,o=r.length,l=String(e).replace(i,function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),a=r[n];n<o;a=r[++n])d(a)||!_(a)?l+=" "+a:l+=" "+s(a);return l},t.deprecate=function(n,i){if(y(e.process))return function(){return t.deprecate(n,i).apply(this,arguments)};if(!0===r.noDeprecation)return n;var o=!1;return function(){if(!o){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),o=!0}return n.apply(this,arguments)}};var o,l={};function s(e,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&t._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),u(r,e,r.depth)}function a(e,t){var n=s.styles[t];return n?"["+s.colors[n][0]+"m"+e+"["+s.colors[n][1]+"m":e}function c(e,t){return e}function u(e,n,r){if(e.customInspect&&n&&x(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return b(i)||(i=u(e,i,r)),i}var o=function(e,t){if(y(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(v(t))return e.stylize(""+t,"number");if(g(t))return e.stylize(""+t,"boolean");if(d(t))return e.stylize("null","null")}(e,n);if(o)return o;var l=Object.keys(n),s=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(l);if(e.showHidden&&(l=Object.getOwnPropertyNames(n)),w(n)&&(l.indexOf("message")>=0||l.indexOf("description")>=0))return f(n);if(0===l.length){if(x(n)){var a=n.name?": "+n.name:"";return e.stylize("[Function"+a+"]","special")}if(m(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(k(n))return e.stylize(Date.prototype.toString.call(n),"date");if(w(n))return f(n)}var c,_="",j=!1,S=["{","}"];(p(n)&&(j=!0,S=["[","]"]),x(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]");return m(n)&&(_=" "+RegExp.prototype.toString.call(n)),k(n)&&(_=" "+Date.prototype.toUTCString.call(n)),w(n)&&(_=" "+f(n)),0!==l.length||j&&0!=n.length?r<0?m(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),c=j?function(e,t,n,r,i){for(var o=[],l=0,s=t.length;l<s;++l)E(t,String(l))?o.push(h(e,t,n,r,String(l),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(h(e,t,n,r,i,!0))}),o}(e,n,r,s,l):l.map(function(t){return h(e,n,r,s,t,j)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(c,_,S)):S[0]+_+S[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,n,r,i,o){var l,s,a;if((a=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?s=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(s=e.stylize("[Setter]","special")),E(r,i)||(l="["+i+"]"),s||(e.seen.indexOf(a.value)<0?(s=d(n)?u(e,a.value,null):u(e,a.value,n-1)).indexOf("\n")>-1&&(s=o?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),y(l)){if(o&&i.match(/^\d+$/))return s;(l=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(l=l.substr(1,l.length-2),l=e.stylize(l,"name")):(l=l.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),l=e.stylize(l,"string"))}return l+": "+s}function p(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function d(e){return null===e}function v(e){return"number"==typeof e}function b(e){return"string"==typeof e}function y(e){return void 0===e}function m(e){return _(e)&&"[object RegExp]"===j(e)}function _(e){return"object"==typeof e&&null!==e}function k(e){return _(e)&&"[object Date]"===j(e)}function w(e){return _(e)&&("[object Error]"===j(e)||e instanceof Error)}function x(e){return"function"==typeof e}function j(e){return Object.prototype.toString.call(e)}function S(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(y(o)&&(o=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!l[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var n=r.pid;l[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else l[e]=function(){};return l[e]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=g,t.isNull=d,t.isNullOrUndefined=function(e){return null==e},t.isNumber=v,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=y,t.isRegExp=m,t.isObject=_,t.isDate=k,t.isError=w,t.isFunction=x,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(3);var O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",function(){var e=new Date,t=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":");return[e.getDate(),O[e.getMonth()],t].join(" ")}(),t.format.apply(t,arguments))},t.inherits=n(2),t._extend=function(e,t){if(!t||!_(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(5),n(4))},function(e,t,n){!function(e){var t=e.Markdown=function(e){switch(typeof e){case"undefined":this.dialect=t.dialects.Gruber;break;case"object":this.dialect=e;break;default:if(!(e in t.dialects))throw new Error("Unknown Markdown dialect '"+String(e)+"'");this.dialect=t.dialects[e]}this.em_state=[],this.strong_state=[],this.debug_indent=""};function r(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function i(){var e=n(6);return"Markdown.mk_block( "+e.inspect(this.toString())+", "+e.inspect(this.trailing)+", "+e.inspect(this.lineNumber)+" )"}e.parse=function(e,n){return new t(n).toTree(e)},e.toHTML=function(t,n,r){var i=e.toHTMLTree(t,n,r);return e.renderJsonML(i)},e.toHTMLTree=function(e,t,n){"string"==typeof e&&(e=this.parse(e,t));var r=h(e),i={};r&&r.references&&(i=r.references);var o=function e(t,n,r){var i;r=r||{};var o=t.slice(0);"function"==typeof r.preprocessTreeNode&&(o=r.preprocessTreeNode(o,n));var l=h(o);if(l){for(i in o[1]={},l)o[1][i]=l[i];l=o[1]}if("string"==typeof o)return o;switch(o[0]){case"header":o[0]="h"+o[1].level,delete o[1].level;break;case"bulletlist":o[0]="ul";break;case"numberlist":o[0]="ol";break;case"listitem":o[0]="li";break;case"para":o[0]="p";break;case"markdown":o[0]="html",l&&delete l.references;break;case"code_block":o[0]="pre",i=l?2:1;var s=["code"];s.push.apply(s,o.splice(i,o.length-i)),o[i]=s;break;case"inlinecode":o[0]="code";break;case"img":o[1].src=o[1].href,delete o[1].href;break;case"linebreak":o[0]="br";break;case"link":o[0]="a";break;case"link_ref":o[0]="a";var a=n[l.ref];if(!a)return l.original;delete l.ref,l.href=a.href,a.title&&(l.title=a.title),delete l.original;break;case"img_ref":o[0]="img";var a=n[l.ref];if(!a)return l.original;delete l.ref,l.src=a.href,a.title&&(l.title=a.title),delete l.original}i=1;if(l){for(var c in o[1]){i=2;break}1===i&&o.splice(i,1)}for(;i<o.length;++i)o[i]=e(o[i],n,r);return o}(e,i,n);return function e(t){var n=h(t)?2:1;for(;n<t.length;)"string"==typeof t[n]?n+1<t.length&&"string"==typeof t[n+1]?t[n]+=t.splice(n+1,1)[0]:++n:(e(t[n]),++n)}(o),o};var o=t.mk_block=function(e,t,n){1==arguments.length&&(t="\n\n");var o=new String(e);return o.trailing=t,o.inspect=i,o.toSource=r,void 0!=n&&(o.lineNumber=n),o};function l(e){for(var t=0,n=-1;-1!==(n=e.indexOf("\n",n+1));)t++;return t}function s(e,t){var n=e+"_state",r="strong"==e?"em_state":"strong_state";function i(e){this.len_after=e,this.name="close_"+t}return function(o,l){if(this[n][0]==t)return this[n].shift(),[o.length,new i(o.length-t.length)];var s=this[r].slice(),a=this[n].slice();this[n].unshift(t);var c=this.processInline(o.substr(t.length)),u=c[c.length-1];this[n].shift();return u instanceof i?(c.pop(),[o.length-u.len_after,[e].concat(c)]):(this[r]=s,this[n]=a,[t.length,t])}}t.prototype.split_blocks=function(e,t){e=e.replace(/(\r\n|\n|\r)/g,"\n");var n,r=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,i=[],s=1;for(null!=(n=/^(\s*\n)/.exec(e))&&(s+=l(n[0]),r.lastIndex=n[0].length);null!==(n=r.exec(e));)"\n#"==n[2]&&(n[2]="\n",r.lastIndex--),i.push(o(n[1],n[2],s)),s+=l(n[0]);return i},t.prototype.processBlock=function(e,t){var n=this.dialect.block,r=n.__order__;if("__call__"in n)return n.__call__.call(this,e,t);for(var i=0;i<r.length;i++){var o=n[r[i]].call(this,e,t);if(o)return(!u(o)||o.length>0&&!u(o[0]))&&this.debug(r[i],"didn't return a proper array"),o}return[]},t.prototype.processInline=function(e){return this.dialect.inline.__call__.call(this,String(e))},t.prototype.toTree=function(e,t){var n=e instanceof Array?e:this.split_blocks(e),r=this.tree;try{for(this.tree=t||this.tree||["markdown"];n.length;){var i=this.processBlock(n.shift(),n);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{t&&(this.tree=r)}},t.prototype.debug=function(){var e=Array.prototype.slice.call(arguments);e.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,e),"undefined"!=typeof console&&void 0!==console.log&&console.log.apply(null,e)},t.prototype.loop_re_over_block=function(e,t,n){for(var r,i=t.valueOf();i.length&&null!=(r=e.exec(i));)i=i.substr(r[0].length),n.call(this,r);return i},t.dialects={},t.dialects.Gruber={block:{atxHeader:function(e,t){var n=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var r=["header",{level:n[1].length}];return Array.prototype.push.apply(r,this.processInline(n[2])),n[0].length<e.length&&t.unshift(o(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[r]}},setextHeader:function(e,t){var n=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var r=["header",{level:"="===n[2]?1:2},n[1]];return n[0].length<e.length&&t.unshift(o(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[r]}},code:function(e,t){var n=[],r=/^(?: {0,3}\t| {4})(.*)\n?/;if(e.match(r)){e:for(;;){var i=this.loop_re_over_block(r,e.valueOf(),function(e){n.push(e[1])});if(i.length){t.unshift(o(i,e.trailing));break e}if(!t.length)break e;if(!t[0].match(r))break e;n.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=t.shift()}return[["code_block",n.join("\n")]]}},horizRule:function(e,t){var n=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var r=[["hr"]];return n[1]&&r.unshift.apply(r,this.processBlock(n[1],[])),n[3]&&t.unshift(o(n[3])),r}},lists:function(){var e="[*+-]|\\d+\\.",t=/[*+-]/,n=new RegExp("^( {0,3})("+e+")[ \t]+"),r="(?: {0,3}\\t| {4})";function i(t){return new RegExp("(?:^("+r+"{0,"+t+"} {0,3})("+e+")\\s+)|(^"+r+"{0,"+(t-1)+"}[ ]{0,4})")}function l(e){return e.replace(/ {0,3}\t/g,"    ")}function s(e,t,n,r){if(t)e.push(["para"].concat(n));else{var i=e[e.length-1]instanceof Array&&"para"==e[e.length-1][0]?e[e.length-1]:e;r&&e.length>1&&n.unshift(r);for(var o=0;o<n.length;o++){var l=n[o];"string"==typeof l&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=l:i.push(l)}}}function a(e,t){for(var n=new RegExp("^("+r+"{"+e+"}.*?\\n?)*$"),i=new RegExp("^"+r+"{"+e+"}","gm"),l=[];t.length>0&&n.exec(t[0]);){var s=t.shift(),a=s.replace(i,"");l.push(o(a,s.trailing,s.lineNumber))}return l}function u(e,t,n){var r=e.list,i=r[r.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(t+1==n.length)i.push(["para"].concat(i.splice(1,i.length-1)));else{var o=i.pop();i.push(["para"].concat(i.splice(1,i.length-1)),o)}}return function(e,r){var o=e.match(n);if(o){for(var f,h,p=[],g=M(o),d=!1,v=[p[0].list];;){for(var b=e.split(/(?=\n)/),y="",m=0;m<b.length;m++){var _="",k=b[m].replace(/^\n/,function(e){return _=e,""}),w=i(p.length);if(void 0!==(o=k.match(w))[1]){y.length&&(s(f,d,this.processInline(y),_),d=!1,y=""),o[1]=l(o[1]);var x=Math.floor(o[1].length/4)+1;if(x>p.length)g=M(o),f.push(g),f=g[1]=["listitem"];else{var j=!1;for(h=0;h<p.length;h++)if(p[h].indent==o[1]){g=p[h].list,p.splice(h+1,p.length-(h+1)),j=!0;break}j||(++x<=p.length?(p.splice(x,p.length-x),g=p[x-1].list):(g=M(o),f.push(g))),f=["listitem"],g.push(f)}_=""}k.length>o[0].length&&(y+=_+k.substr(o[0].length))}y.length&&(s(f,d,this.processInline(y),_),d=!1,y="");var S=a(p.length,r);S.length>0&&(c(p,u,this),f.push.apply(f,this.toTree(S,[])));var O=r[0]&&r[0].valueOf()||"";if(!O.match(n)&&!O.match(/^ /))break;e=r.shift();var E=this.dialect.block.horizRule(e,r);if(E){v.push.apply(v,E);break}c(p,u,this),d=!0}return v}function M(e){var n=t.exec(e[2])?["bulletlist"]:["numberlist"];return p.push({list:n,indent:e[1]}),n}}}(),blockquote:function(e,t){if(e.match(/^>/m)){var n=[];if(">"!=e[0]){for(var r=e.split(/\n/),i=[],l=e.lineNumber;r.length&&">"!=r[0][0];)i.push(r.shift()),l++;var s=o(i.join("\n"),"\n",e.lineNumber);n.push.apply(n,this.processBlock(s,[])),e=o(r.join("\n"),e.trailing,l)}for(;t.length&&">"==t[0][0];){var a=t.shift();e=o(e+e.trailing+a,a.trailing,e.lineNumber)}var c=e.replace(/^> ?/gm,""),u=(this.tree,this.toTree(c,["blockquote"])),p=h(u);return p&&p.references&&(delete p.references,f(p)&&u.splice(1,1)),n.push(u),n}},referenceDefn:function(e,t){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(e.match(n)){h(this.tree)||this.tree.splice(1,0,{});var r=h(this.tree);void 0===r.references&&(r.references={});var i=this.loop_re_over_block(n,e,function(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1));var t=r.references[e[1].toLowerCase()]={href:e[2]};void 0!==e[4]?t.title=e[4]:void 0!==e[5]&&(t.title=e[5])});return i.length&&t.unshift(o(i,e.trailing)),[]}},para:function(e,t){return[["para"].concat(this.processInline(e))]}}},t.dialects.Gruber.inline={__oneElement__:function(e,t,n){var r,i;return t=t||this.dialect.inline.__patterns__,(r=new RegExp("([\\s\\S]*?)("+(t.source||t)+")").exec(e))?r[1]?[r[1].length,r[1]]:(r[2]in this.dialect.inline&&(i=this.dialect.inline[r[2]].call(this,e.substr(r.index),r,n||[])),i=i||[r[2].length,r[2]]):[e.length,e]},__call__:function(e,t){var n,r=[];function i(e){"string"==typeof e&&"string"==typeof r[r.length-1]?r[r.length-1]+=e:r.push(e)}for(;e.length>0;)n=this.dialect.inline.__oneElement__.call(this,e,t,r),e=e.substr(n.shift()),c(n,i);return r},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(e){return this.dialect.inline.__escape__.exec(e)?[2,e.charAt(1)]:[1,"\\"]},"![":function(e){var t=e.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1)),t[2]=this.dialect.inline.__call__.call(this,t[2],/\\/)[0];var n={alt:t[1],href:t[2]||""};return void 0!==t[4]&&(n.title=t[4]),[t[0].length,["img",n]]}return(t=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/))?[t[0].length,["img_ref",{alt:t[1],ref:t[2].toLowerCase(),original:t[0]}]]:[2,"!["]},"[":function(e){var n=String(e),r=t.DialectHelpers.inline_until_char.call(this,e.substr(1),"]");if(!r)return[1,"["];var i,o,l=1+r[0],s=r[1],a=(e=e.substr(l)).match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(a){var c=a[1];if(l+=a[0].length,c&&"<"==c[0]&&">"==c[c.length-1]&&(c=c.substring(1,c.length-1)),!a[3])for(var u=1,f=0;f<c.length;f++)switch(c[f]){case"(":u++;break;case")":0==--u&&(l-=c.length-f,c=c.substring(0,f))}return o={href:(c=this.dialect.inline.__call__.call(this,c,/\\/)[0])||""},void 0!==a[3]&&(o.title=a[3]),i=["link",o].concat(s),[l,i]}return(a=e.match(/^\s*\[(.*?)\]/))?(l+=a[0].length,i=["link_ref",o={ref:(a[1]||String(s)).toLowerCase(),original:n.substr(0,l)}].concat(s),[l,i]):1==s.length&&"string"==typeof s[0]?(i=["link_ref",o={ref:s[0].toLowerCase(),original:n.substr(0,l)},s[0]],[l,i]):[1,"["]},"<":function(e){var t;return null!=(t=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?t[3]?[t[0].length,["link",{href:"mailto:"+t[3]},t[3]]]:"mailto"==t[2]?[t[0].length,["link",{href:t[1]},t[1].substr("mailto:".length)]]:[t[0].length,["link",{href:t[1]},t[1]]]:[1,"<"]},"`":function(e){var t=e.match(/(`+)(([\s\S]*?)\1)/);return t&&t[2]?[t[1].length+t[2].length,["inlinecode",t[3]]]:[1,"`"]},"  \n":function(e){return[3,["linebreak"]]}},t.dialects.Gruber.inline["**"]=s("strong","**"),t.dialects.Gruber.inline.__=s("strong","__"),t.dialects.Gruber.inline["*"]=s("em","*"),t.dialects.Gruber.inline._=s("em","_"),t.buildBlockOrder=function(e){var t=[];for(var n in e)"__order__"!=n&&"__call__"!=n&&t.push(n);e.__order__=t},t.buildInlinePatterns=function(e){var t=[];for(var n in e)if(!n.match(/^__.*__$/)){var r=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(1==n.length?r:"(?:"+r+")")}t=t.join("|"),e.__patterns__=t;var i=e.__call__;e.__call__=function(e,n){return void 0!=n?i.call(this,e,n):i.call(this,e,t)}},t.DialectHelpers={},t.DialectHelpers.inline_until_char=function(e,t){for(var n=0,r=[];;){if(e.charAt(n)==t)return[++n,r];if(n>=e.length)return null;var i=this.dialect.inline.__oneElement__.call(this,e.substr(n));n+=i[0],r.push.apply(r,i.slice(1))}},t.subclassDialect=function(e){function t(){}function n(){}return t.prototype=e.block,n.prototype=e.inline,{block:new t,inline:new n}},t.buildBlockOrder(t.dialects.Gruber.block),t.buildInlinePatterns(t.dialects.Gruber.inline),t.dialects.Maruku=t.subclassDialect(t.dialects.Gruber),t.dialects.Maruku.processMetaHash=function(e){for(var t=function(e){var t=e.split(""),n=[""],r=!1;for(;t.length;){var i=t.shift();switch(i){case" ":r?n[n.length-1]+=i:n.push("");break;case"'":case'"':r=!r;break;case"\\":i=t.shift();default:n[n.length-1]+=i}}return n}(e),n={},r=0;r<t.length;++r)if(/^#/.test(t[r]))n.id=t[r].substring(1);else if(/^\./.test(t[r]))n.class?n.class=n.class+t[r].replace(/./," "):n.class=t[r].substring(1);else if(/\=/.test(t[r])){var i=t[r].split(/\=/);n[i[0]]=i[1]}return n},t.dialects.Maruku.block.document_meta=function(e,t){if(!(e.lineNumber>1)&&e.match(/^(?:\w+:.*\n)*\w+:.*$/)){h(this.tree)||this.tree.splice(1,0,{});var n=e.split(/\n/);for(p in n){var r=n[p].match(/(\w+):\s*(.*)$/),i=r[1].toLowerCase(),o=r[2];this.tree[1][i]=o}return[]}},t.dialects.Maruku.block.block_meta=function(e,t){var n=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var r,i=this.dialect.processMetaHash(n[2]);if(""===n[1]){var o=this.tree[this.tree.length-1];if(r=h(o),"string"==typeof o)return;for(a in r||(r={},o.splice(1,0,r)),i)r[a]=i[a];return[]}var l=e.replace(/\n.*$/,""),s=this.processBlock(l,[]);for(a in(r=h(s[0]))||(r={},s[0].splice(1,0,r)),i)r[a]=i[a];return s}},t.dialects.Maruku.block.definition_list=function(e,t){var n,r=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"];if(s=e.match(r)){for(var o=[e];t.length&&r.exec(t[0]);)o.push(t.shift());for(var l=0;l<o.length;++l){var s,a=(s=o[l].match(r))[1].replace(/\n$/,"").split(/\n/),c=s[2].split(/\n:\s+/);for(n=0;n<a.length;++n)i.push(["dt",a[n]]);for(n=0;n<c.length;++n)i.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/,"$1"))))}return[i]}},t.dialects.Maruku.block.table=function(e,t){var n,r,i=function(e,t){(t=t||"\\s").match(/^[\\|\[\]{}?*.+^$]$/)&&(t="\\"+t);for(var n,r=[],i=new RegExp("^((?:\\\\.|[^\\\\"+t+"])*)"+t+"(.*)");n=e.match(i);)r.push(n[1]),e=n[2];return r.push(e),r};if(r=e.match(/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/))r[3]=r[3].replace(/^\s*\|/gm,"");else if(!(r=e.match(/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/)))return;var o=["table",["thead",["tr"]],["tbody"]];r[2]=r[2].replace(/\|\s*$/,"").split("|");var l=[];for(c(r[2],function(e){e.match(/^\s*-+:\s*$/)?l.push({align:"right"}):e.match(/^\s*:-+\s*$/)?l.push({align:"left"}):e.match(/^\s*:-+:\s*$/)?l.push({align:"center"}):l.push({})}),r[1]=i(r[1].replace(/\|\s*$/,""),"|"),n=0;n<r[1].length;n++)o[1][1].push(["th",l[n]||{}].concat(this.processInline(r[1][n].trim())));return c(r[3].replace(/\|\s*$/gm,"").split("\n"),function(e){var t=["tr"];for(e=i(e,"|"),n=0;n<e.length;n++)t.push(["td",l[n]||{}].concat(this.processInline(e[n].trim())));o[2].push(t)},this),[o]},t.dialects.Maruku.inline["{:"]=function(e,t,n){if(!n.length)return[2,"{:"];var r=n[n.length-1];if("string"==typeof r)return[2,"{:"];var i=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var o=this.dialect.processMetaHash(i[1]),l=h(r);for(var s in l||(l={},r.splice(1,0,l)),o)l[s]=o[s];return[i[0].length,""]},t.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,t.buildBlockOrder(t.dialects.Maruku.block),t.buildInlinePatterns(t.dialects.Maruku.inline);var c,u=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};c=Array.prototype.forEach?function(e,t,n){return e.forEach(t,n)}:function(e,t,n){for(var r=0;r<e.length;r++)t.call(n||e,e[r],r,e)};var f=function(e){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0};function h(e){return u(e)&&e.length>1&&"object"==typeof e[1]&&!u(e[1])?e[1]:void 0}function g(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d(e){if("string"==typeof e)return g(e);var t=e.shift(),n={},r=[];for(!e.length||"object"!=typeof e[0]||e[0]instanceof Array||(n=e.shift());e.length;)r.push(d(e.shift()));var i="";for(var o in n)i+=" "+o+'="'+g(n[o])+'"';return"img"==t||"br"==t||"hr"==t?"<"+t+i+"/>":"<"+t+i+">"+r.join("")+"</"+t+">"}e.renderJsonML=function(e,t){(t=t||{}).root=t.root||!1;var n=[];if(t.root)n.push(d(e));else for(e.shift(),!e.length||"object"!=typeof e[0]||e[0]instanceof Array||e.shift();e.length;)n.push(d(e.shift()));return n.join("\n\n")}}(t)},function(e,t){},,function(e,t){}]);