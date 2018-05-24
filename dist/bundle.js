window.Conjugate=function(e){var t={};function r(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=16)}([function(e,t,r){"use strict";var i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce(function(e,t){return t(e)},e)}},o=function(e){return e.split("")},n=function(e){return e.split(" ")},a=function(e){return e.join("")},s=function(e){return e.reverse()},u=i(o,s,a),l=function(e){return/[aeiıouöüI]/gi.test(e)},m=function(e){return e.filter(l)},f=i(o,m,a),p=i(n,function(e){return e.slice(0,-1)},function(e){return e.map(function(e){return e+" "})},a),v=i(n,function(e){return e.slice(-1)},a);e.exports={_:i,length:function(e){return e.length},split:o,splitWords:n,join:a,push:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e),r)},lowerCase:function(e){return e.toLowerCase()},reverse:s,reverseStr:u,lastLetter:function(e){return e.slice(-1)},firstLetter:function(e){return e[0]||""},strInit:function(e){return e.slice(0,-1)},isVowel:l,getVowelsArr:m,getVowelsStr:f,empty:function(e){return 0===e.length},strEndsWith:function(e){return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return r.some(function(t){return e.endsWith(t)})}},strStarsWith:function(e){return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return r.some(function(t){return e.startsWith(t)})}},getStrInit:p,getStrLast:v,getLastVowel:function(e){return f(e).slice(-1)}}},function(e,t,r){"use strict";var i=r(0),o=i._,n=i.length,a=(i.split,i.splitWords,i.join,i.push,i.lowerCase,i.reverse,i.reverseStr),s=(i.lastLetter,i.firstLetter,i.strInit,i.isVowel,i.getVowelsArr,i.getVowelsStr),u=(i.getLastPart,i.empty,i.strEndsWith,i.getStrLast),l=i.getStrInit,m=r(2),f=m.harmony,p=m.mutableVerbs,v=(m.alphabet,m.compositionExceptions),y=r(3).isNegativeVerb,g=function(e){return e.slice(0,-3)},c=function(e){return e.slice(0,-5)},d={I:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return[e+"m",t+"s"+e+"n",""+t,e+"z",t+"s"+e+"n"+e+"z"]},II:function(e){return[e+"m",e+"n",""+e,e+"k",e+"n"+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:e)+"z"]},IN:function(e){return["m","zs"+e+"n","z","y"+e+"z","zs"+e+"n"+e+"z"]}},b=o(g,s,n),x=function(e){return(e.match(/[aeiıouöü]/gi)||[!1])[0]},V=o(a,x),h=function(e){return f.fourWays.find(function(t){return t.includes(e)}).slice(-1)},C=function(e){return f.twoWays.find(function(t){return t.includes(e)}).slice(-1)},k=o(g,V,h),I=o(g,V,C),P=function(e){return(e.match(/\s/g)||[]).length},w=/(geçmek|etmek|yapmak|eylemek|olmak|vermek|kalmak|edilmek|demek|dilemek|gelmek|bulunmak|söylemek|durmak)$/,A=/^[a-zşüıöğç\s?]{2,}(geçmek|etmek|yapmak|eylemek|olmak|vermek|kalmak|edilmek|demek|dilemek|gelmek|bulunmak|söylemek|durmak)$/,N=/(geçmemek|etmemek|yapmamak|eylememek|olmamak|vermemek|kalmamak|edilmemek|dememek|dilememek|gelmemek|bulunmamak|söylememek|durmamak)$/,S=/^[a-zşüıöğç\s?]{2,}(geçmemek|etmemek|yapmamak|eylememek|olmamak|vermemek|kalmamak|edilmemek|dememek|dilememek|gelmemek|bulunmamak|söylememek|durmamak)$/,F=function(e){return A.test(e)},L=function(e){return S.test(e)};e.exports={verbRoot:g,negativeVerbRoot:c,arrayOfPersonalSuffixes:d,vowelsQuantity:b,getFirstVowel:x,getLastVowel:V,lookIn4Ways:h,lookIn2Ways:C,get4WayHarmonyOf:k,get2WayHarmonyOf:I,generateResult:function(e){var t=e.personalSuffixes,r=e.firstPart,i=e.verbRoot,o=e.tenseSuffix;return o=o||"",t.map(function(e){return r+i+o+e})},getProperties:function(e){return{verb:e,root:p.includes(e)?g(e).replace("t","d"):g(e),originalRoot:g(e),verbSuffix:e.slice(-3),vowelsLength:b(e),verbVowels:s(g(e)),harmony4way:k(e),harmony2way:I(e),negativeSuffix:"m"+I(e),positiveRoot:y(e)&&c(e),isNegative:y(e),isSingleSyllableVerb:function(e){return 1===b(e)}(e),isComposed:Boolean(P(e)),initPart:Boolean(P(e))&&l(e),lastPart:Boolean(P(e))&&u(e),isAuxiliaryComposedVerb:F(e)&&!v.includes(e),auxiliaryVerb:(t=e,(t.match(w)||[!1])[0]),initComposedVerb:F(e)&&function(e){return e.replace(w,"")}(e),isAuxiliaryComposedVerbInNegativeForm:L(e),auxiliaryVerbInNegativeForm:function(e){return(e.match(N)||[!1])[0]}(e),initComposedVerbInNegativeForm:L(e)&&function(e){return e.replace(N,"")}(e)};var t},whiteSpaces:P}},function(e,t,r){"use strict";e.exports.harmony={fourWays:["aı","ou","ei","öü"],twoWays:["ıoua","iöüe"]},e.exports.mutation=[{from:["p","t","k","ç","s","ş","h"]}],e.exports.mutableVerbs=["etmek","gitmek","ditmek","tatmak","gütmek"],e.exports.alphabet=["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"," "],e.exports.exceptions=["almak","bilmek","bulmak","durmak","gelmek","görmek","kalmak","olmak","ölmek","sanmak","vermek","varmak","vurmak"],e.exports.compositionExceptions=["gözetmek"]},function(e,t,r){"use strict";var i=r(0).strEndsWith,o=r(2).alphabet,n=function(e,t){return e.length>=t},a=function(e){return i(e)("mek","mak")},s=function(e){return i(e)("memek","mamak")},u=function(e){return e.replace(/\w{5}$/,function(e){return e[0]+e[1]+"k"})},l=function(e){return e.every(function(e){return o.includes(e)})};e.exports={hasMinLength:n,isVerb:a,isNegativeVerb:s,convertToNegative:function(e){return e.replace(/\w{3}$/,function(e){return e[0]+e[1]+e[0]+e[1]+"k"})},convertToPositive:u,isAlphabeticallyValid:l,gotAccepted:function(e){if(e=lowerCase(e),n(e,5)&&l(split(e))){if(s(e)&&n(e,7))return u(e);if(a(e))return e}return!1}}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.strInit,a=i.isVowel,s=i.lastLetter,u=r(1),l=u.arrayOfPersonalSuffixes,m=u.generateResult,f=u.getProperties;e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"";t=t.isAuxiliaryComposedVerb?f(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?f(t.auxiliaryVerbInNegativeForm):t.isComposed?f(t.lastPart):t;var i="e"===s(t.root)&&1===t.vowelsLength?n(t.root)+"i":t.root,u=(a(s(i))?"y":"")+t.harmony2way+"bil",p=l.I("i");return m({personalSuffixes:o(p,"ler"),firstPart:r,verbRoot:i+u,tenseSuffix:"ir"})}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.lastLetter,a=i.isVowel,s=i.length,u=i.strInit,l=r(1),m=l.arrayOfPersonalSuffixes,f=l.generateResult,p=l.getProperties;e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"";t=t.isAuxiliaryComposedVerb?p(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?p(t.auxiliaryVerbInNegativeForm):t.isComposed?p(t.lastPart):t;var i=("e"===n(t.root)&&2===s(t.root)?u(t.root)+"i":t.root)+(a(n(t.root))?"y":"")+t.harmony2way+t.negativeSuffix,l=m.IN("mak"===t.verbSuffix?"ı":"i"),v="zl"+t.harmony2way+"r";return f({personalSuffixes:o(l,v),firstPart:r,verbRoot:i})}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.strInit,a=i.isVowel,s=i.lastLetter,u=r(1),l=(u.isLastLetterOfRootAVowel,u.arrayOfPersonalSuffixes),m=u.generateResult,f=u.getProperties;e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"";t=t.isAuxiliaryComposedVerb?f(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?f(t.auxiliaryVerbInNegativeForm):t.isComposed?f(t.lastPart):t;var i=("e"===s(t.root)&&1===t.vowelsLength?n(t.root)+"i":t.root)+(a(s(t.root))?"y":""),u=t.harmony2way+"c"+t.harmony2way+"k",p="ecek"===u?"i":"ı",v="m"+p+"şl"+t.harmony2way+"r",y=l.I(p).map(function(e){return"m"+p+"ş"+e});return m({personalSuffixes:o(y,v),firstPart:r,verbRoot:i,tenseSuffix:u})}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.strInit,a=i.isVowel,s=i.lastLetter,u=i.getLastVowel,l=i.length,m=r(1),f=m.arrayOfPersonalSuffixes,p=m.generateResult,v=m.getProperties,y=m.lookIn4Ways;e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"",i=(t=t.isAuxiliaryComposedVerb?v(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?v(t.auxiliaryVerbInNegativeForm):t.isComposed?v(t.lastPart):t).isNegative||a(s(t.root))?n(t.root):t.root,m=y(u(1===l(i)?t.root:i))+"yor",g=f.I("u").map(function(e){return"muş"+e});return p({personalSuffixes:o(g,"muşlar"),firstPart:r,verbRoot:i,tenseSuffix:m})}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.lastLetter,a=i.isVowel,s=i.length,u=r(1),l=u.arrayOfPersonalSuffixes,m=u.generateResult,f=u.getProperties,p=(u.getLastVowel,r(2).exceptions);e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"";t=t.isAuxiliaryComposedVerb?f(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?f(t.auxiliaryVerbInNegativeForm):t.isComposed?f(t.lastPart):t;var i=a(n(t.root))?"r":p.includes(t.verb)||s(t.root)>3?t.harmony4way+"r":t.harmony2way+"r",u="m"+t.harmony4way+"şl"+t.harmony2way+"r",v=l.I(t.harmony4way).map(function(e){return"m"+t.harmony4way+"ş"+e});return m({personalSuffixes:o(v,u),firstPart:r,verbRoot:t.root,tenseSuffix:t.isNegative?"z":i})}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.strInit,a=i.isVowel,s=i.lastLetter,u=i.getLastVowel,l=i.length,m=r(1),f=m.arrayOfPersonalSuffixes,p=m.generateResult,v=m.getProperties,y=m.lookIn4Ways;e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"",i=(t=t.isAuxiliaryComposedVerb?v(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?v(t.auxiliaryVerbInNegativeForm):t.isComposed?v(t.lastPart):t).isNegative||a(s(t.root))?n(t.root):t.root,m=y(u(1===l(i)?t.root:i))+"yor",g=o(f.II("du","u"),"dular");return p({personalSuffixes:g,firstPart:r,verbRoot:i,tenseSuffix:m})}},function(e,t,r){"use strict";var i=r(0).push,o=r(1),n=o.arrayOfPersonalSuffixes,a=o.generateResult,s=o.getProperties;e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"",o="m"+(t=t.isAuxiliaryComposedVerb?s(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?s(t.auxiliaryVerbInNegativeForm):t.isComposed?s(t.lastPart):t).harmony4way+"ş",u="l"+t.harmony2way+"r",l=i(n.I(t.harmony4way),u);return a({personalSuffixes:l,firstPart:r,verbRoot:t.originalRoot,tenseSuffix:o})}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.lastLetter,a=r(1),s=a.arrayOfPersonalSuffixes,u=a.generateResult,l=a.getProperties,m=(a.doWeNeedToMutate,r(2).mutation);e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"";t=t.isAuxiliaryComposedVerb?l(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?l(t.auxiliaryVerbInNegativeForm):t.isComposed?l(t.lastPart):t;var i=m[0].from.includes(n(t.originalRoot))?t.originalRoot+"t":t.root+"d",a=t.harmony4way+"l"+t.harmony2way+"r",f=o(s.II(t.harmony4way),a);return u({personalSuffixes:f,firstPart:r,verbRoot:i})}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.firstLetter,a=i.isVowel,s=i.lastLetter,u=i.strInit,l=r(1),m=l.arrayOfPersonalSuffixes,f=l.generateResult,p=l.getProperties;e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"";t=t.isAuxiliaryComposedVerb?p(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?p(t.auxiliaryVerbInNegativeForm):t.isComposed?p(t.lastPart):t;var i="e"===s(t.root)&&1===t.vowelsLength?u(t.root)+"i":t.root;i=a(s(i))?i+"y":i;var l=t.harmony2way+"c"+t.harmony2way,v="ece"===l?"i":"ı",y="l"+t.harmony2way+"r",g=o(m.I(v),y).map(function(e){return(a(n(e))?"ğ":"k")+e});return f({personalSuffixes:g,firstPart:r,verbRoot:i,tenseSuffix:l})}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.strInit,a=i.lastLetter,s=i.isVowel,u=i.getLastVowel,l=i.length,m=r(1),f=m.arrayOfPersonalSuffixes,p=m.generateResult,v=m.getProperties,y=m.lookIn4Ways;e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"",i=(t=t.isAuxiliaryComposedVerb?v(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?v(t.auxiliaryVerbInNegativeForm):t.isComposed?v(t.lastPart):t).isNegative||s(a(t.root))?n(t.root):t.root,m=y(u(1===l(i)?t.root:i))+"yor",g=o(f.I("u"),"lar");return p({personalSuffixes:g,firstPart:r,verbRoot:i,tenseSuffix:m})}},function(e,t,r){"use strict";var i=r(0),o=i.push,n=i.lastLetter,a=(i.firstLetter,i.isVowel),s=(i.strInit,i.length),u=r(1),l=u.arrayOfPersonalSuffixes,m=(u.get4WayHarmonyOf,u.generateResult),f=u.getProperties,p=u.getLastVowel,v=u.lookIn4Ways,y=u.lookIn2Ways,g=r(2).exceptions;e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f(e),r=t.isAuxiliaryComposedVerb?t.initComposedVerb:t.isAuxiliaryComposedVerbInNegativeForm?t.initComposedVerbInNegativeForm:t.isComposed?t.initPart:"";t=t.isAuxiliaryComposedVerb?f(t.auxiliaryVerb):t.isAuxiliaryComposedVerbInNegativeForm?f(t.auxiliaryVerbInNegativeForm):t.isComposed?f(t.lastPart):t;var i=a(n(t.root))?"r":g.includes(t.verb)||s(t.root)>3?t.harmony4way+"r":t.harmony2way+"r",u="r"===i?t.harmony4way:v(p(i)),c="l"+("r"===i?t.harmony2way:y(p(i)))+"r",d=o(l.I(u),c),b=t.positiveRoot+t.negativeSuffix,x="zl"+t.harmony2way+"r",V=o(l.IN(t.harmony4way),x);return t.isNegative?m({personalSuffixes:V,verbRoot:b,firstPart:r}):m({personalSuffixes:d,firstPart:r,verbRoot:t.root,tenseSuffix:i})}},function(e,t,r){"use strict";var i=r(14),o=r(13),n=r(12),a=r(11),s=r(10),u=r(9),l=r(8),m=r(7),f=r(6),p=r(5),v=r(4);e.exports={Aorist:i,Gerund:o,Future:n,SimplePast:a,MisPast:s,PastContinuous:u,PresentIndefinite:l,PresentContinuousIndefinite:m,FutureIndefinite:f,PotentialNegative:p,PotentialPositive:v}},function(e,t,r){"use strict";var i=r(15),o=i.Aorist,n=i.Gerund,a=i.Future,s=i.SimplePast,u=i.MisPast,l=i.PastContinuous,m=i.PresentIndefinite,f=i.PresentContinuousIndefinite,p=i.FutureIndefinite,v=i.PotentialNegative,y=i.PotentialPositive,g=r(3),c=g.hasMinLength,d=g.isVerb,b=g.isNegativeVerb,x=g.convertToNegative,V=g.convertToPositive,h=g.isAlphabeticallyValid,C=g.gotAccepted,k={it:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x(e);return[{tense:"aorist",title:"Aorist",conjugation:{positive:o(e),negative:o(t)}},{tense:"gerund",title:"Gerund",conjugation:{positive:n(e),negative:n(t)}},{tense:"future",title:"Future",conjugation:{positive:a(e),negative:a(t)}},{tense:"simple-past",title:"Simple Past",conjugation:{positive:s(e),negative:s(t)}},{tense:"mis-past",title:"Miş Past",conjugation:{positive:u(e),negative:u(t)}},{tense:"past-continuous",title:"Past Continuous",conjugation:{positive:l(e),negative:l(t)}},{tense:"present-indefinite",title:"Present Indefinite",conjugation:{positive:m(e),negative:m(t)}},{tense:"present-continuous-indefinite",title:"Gerund Indefinite",conjugation:{positive:f(e),negative:f(t)}},{tense:"future-indefinite",title:"Future Indefinite",conjugation:{positive:p(e),negative:p(t)}},{tense:"potential",title:"Potential",conjugation:{positive:y(e),negative:v(e)}}]}(e)},verify:{hasMinLength:c,isVerb:d,isNegativeVerb:b,isAlphabeticallyValid:h,whiteSpaces:r(1).whiteSpaces,gotAccepted:C},utils:{convertToPositive:V,convertToNegative:x}};e.exports=k}]);