var ZE=Object.create;var Wh=Object.defineProperty,JE=Object.defineProperties,KE=Object.getOwnPropertyDescriptor,QE=Object.getOwnPropertyDescriptors,ew=Object.getOwnPropertyNames,Ky=Object.getOwnPropertySymbols,tw=Object.getPrototypeOf,e_=Object.prototype.hasOwnProperty,nw=Object.prototype.propertyIsEnumerable;var Qy=(n,e,t)=>e in n?Wh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ae=(n,e)=>{for(var t in e||={})e_.call(e,t)&&Qy(n,t,e[t]);if(Ky)for(var t of Ky(e))nw.call(e,t)&&Qy(n,t,e[t]);return n},Dt=(n,e)=>JE(n,QE(e));var $h=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var iw=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ew(e))!e_.call(n,r)&&r!==t&&Wh(n,r,{get:()=>e[r],enumerable:!(i=KE(e,r))||i.enumerable});return n};var rw=(n,e,t)=>(t=n!=null?ZE(tw(n)):{},iw(e||!n||!n.__esModule?Wh(t,"default",{value:n,enumerable:!0}):t,n));var $y=$h((BE,Hh)=>{"use strict";(function(){var n,e,t,i,r,s,o,a,c,l,u,d,f,h,v,x,g,p,b,C,E,T,D,I,y,S,Z,A,B,z,J,H,G;[b,p,h,r,g,n]=[0,1,2,3,4,5],[Z,D,y,E,c,u,o,f]=[0,1,2,3,4,5,6,7],[S,T,I,C,d,a,l,s,x,v,e,t]=[0,1,2,3,4,5,6,7,8,9,10,11],[B,J,G]=(function(){var k,he,le,ue,ye,X;return X=function(oe){return oe-1},ye=function(oe){return X(9)+oe},le=function(oe){return ye(9)+oe},he=function(oe){return le(9)+oe},ue=function(oe){return he(9)+oe},k=function(oe){return ue(9)+oe},[[4,13,22,31,40,49],[[X(9),ye(1),le(3)],[X(7),le(1),ue(3)],[X(1),ue(1),k(3)],[X(3),k(1),ye(3)],[he(3),le(9),ye(7)],[he(1),ue(9),le(7)],[he(7),k(9),ue(7)],[he(9),ye(9),k(7)]],[[X(6),ye(2)],[X(8),le(2)],[X(4),ue(2)],[X(2),k(2)],[he(6),ye(8)],[he(2),le(8)],[he(4),ue(8)],[he(8),k(8)],[le(6),ye(4)],[le(4),ue(6)],[k(6),ue(4)],[k(4),ye(6)]]]})(),A=["U","R","F","D","L","B"],z=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],H=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],i=function(){var k,he,le;class ue{constructor(X){var oe;X!=null?this.init(X):this.identity(),this.newCenter=(function(){var re,ce;for(ce=[],oe=re=0;re<=5;oe=++re)ce.push(0);return ce})(),this.newCp=(function(){var re,ce;for(ce=[],oe=re=0;re<=7;oe=++re)ce.push(0);return ce})(),this.newEp=(function(){var re,ce;for(ce=[],oe=re=0;re<=11;oe=++re)ce.push(0);return ce})(),this.newCo=(function(){var re,ce;for(ce=[],oe=re=0;re<=7;oe=++re)ce.push(0);return ce})(),this.newEo=(function(){var re,ce;for(ce=[],oe=re=0;re<=11;oe=++re)ce.push(0);return ce})()}init(X){return this.center=X.center.slice(0),this.co=X.co.slice(0),this.ep=X.ep.slice(0),this.cp=X.cp.slice(0),this.eo=X.eo.slice(0)}identity(){var X;return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=(function(){var oe,re;for(re=[],X=oe=0;oe<=7;X=++oe)re.push(0);return re})(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=(function(){var oe,re;for(re=[],X=oe=0;oe<=11;X=++oe)re.push(0);return re})()}toJSON(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}}asString(){var X,oe,re,ce,U,K,se,Ce,me,ve,Le;for(Le=[],re=ce=0;ce<=5;re=++ce)Le[9*re+4]=A[this.center[re]];for(re=U=0;U<=7;re=++U)for(X=this.cp[re],me=this.co[re],se=K=0;K<=2;se=++K)Le[J[re][(se+me)%3]]=z[X][se];for(re=Ce=0;Ce<=11;re=++Ce)for(oe=this.ep[re],me=this.eo[re],se=ve=0;ve<=1;se=++ve)Le[G[re][(se+me)%2]]=H[oe][se];return Le.join("")}static fromString(X){var oe,re,ce,U,K,se,Ce,me,ve,Le,Re,$e,qe,ke;for(ce=new ue,U=se=0;se<=5;U=++se)for(K=Ce=0;Ce<=5;K=++Ce)X[9*U+4]===A[K]&&(ce.center[U]=K);for(U=me=0;me<=7;U=++me){for(Le=ve=0;ve<=2&&!((ke=X[J[U][Le]])==="U"||ke==="D");Le=++ve);for(oe=X[J[U][(Le+1)%3]],re=X[J[U][(Le+2)%3]],K=Re=0;Re<=7;K=++Re)oe===z[K][1]&&re===z[K][2]&&(ce.cp[U]=K,ce.co[U]=Le%3)}for(U=$e=0;$e<=11;U=++$e)for(K=qe=0;qe<=11;K=++qe){if(X[G[U][0]]===H[K][0]&&X[G[U][1]]===H[K][1]){ce.ep[U]=K,ce.eo[U]=0;break}if(X[G[U][0]]===H[K][1]&&X[G[U][1]]===H[K][0]){ce.ep[U]=K,ce.eo[U]=1;break}}return ce}clone(){return new ue(this.toJSON())}static random(){return new ue().randomize()}isSolved(){var X,oe,re,ce,U,K,se;for(re=this.clone(),re.move(re.upright()),oe=U=0;U<=5;oe=++U)if(re.center[oe]!==oe)return!1;for(X=K=0;K<=7;X=++K)if(re.cp[X]!==X||re.co[X]!==0)return!1;for(ce=se=0;se<=11;ce=++se)if(re.ep[ce]!==ce||re.eo[ce]!==0)return!1;return!0}centerMultiply(X){var oe,re,ce;for(ce=re=0;re<=5;ce=++re)oe=X.center[ce],this.newCenter[ce]=this.center[oe];return[this.center,this.newCenter]=[this.newCenter,this.center],this}cornerMultiply(X){var oe,re,ce;for(ce=re=0;re<=7;ce=++re)oe=X.cp[ce],this.newCp[ce]=this.cp[oe],this.newCo[ce]=(this.co[oe]+X.co[ce])%3;return[this.cp,this.newCp]=[this.newCp,this.cp],[this.co,this.newCo]=[this.newCo,this.co],this}edgeMultiply(X){var oe,re,ce;for(ce=re=0;re<=11;ce=++re)oe=X.ep[ce],this.newEp[ce]=this.ep[oe],this.newEo[ce]=(this.eo[oe]+X.eo[ce])%2;return[this.ep,this.newEp]=[this.newEp,this.ep],[this.eo,this.newEo]=[this.newEo,this.eo],this}multiply(X){return this.centerMultiply(X),this.cornerMultiply(X),this.edgeMultiply(X),this}move(X){var oe,re,ce,U,K,se,Ce,me,ve;for(Ce=le(X),re=0,U=Ce.length;re<U;re++)for(K=Ce[re],oe=K/3|0,se=K%3,ve=ce=0,me=se;0<=me?ce<=me:ce>=me;ve=0<=me?++ce:--ce)this.multiply(ue.moves[oe]);return this}upright(){var X,oe,re,ce,U,K;for(X=this.clone(),K=[],oe=ce=0;ce<=5&&X.center[oe]!==h;oe=++ce);switch(oe){case r:K.push("x");break;case b:K.push("x'");break;case n:K.push("x2");break;case p:K.push("y");break;case g:K.push("y'")}for(K.length&&X.move(K[0]),re=U=0;U<=5&&X.center[re]!==b;re=++U);switch(re){case g:K.push("z");break;case p:K.push("z'");break;case r:K.push("z2")}return K.join(" ")}static inverse(X){var oe,re,ce,U,K,se,Ce;if(se=(function(){var me,ve,Le,Re;for(Le=le(X),Re=[],me=0,ve=Le.length;me<ve;me++)U=Le[me],oe=U/3|0,K=U%3,Re.push(oe*3+-(K-1)+1);return Re})(),se.reverse(),typeof X=="string"){for(Ce="",re=0,ce=se.length;re<ce;re++)U=se[re],oe=U/3|0,K=U%3,Ce+=k[oe],K===1?Ce+="2":K===2&&(Ce+="'"),Ce+=" ";return Ce.substring(0,Ce.length-1)}else return X.length!=null?se:se[0]}}return ue.prototype.randomize=(function(){var ye,X,oe,re,ce,U,K,se,Ce;return U=function(me,ve){return me+Math.floor(Math.random()*(ve-me+1))},Ce=function(me){var ve,Le,Re;for(ve=me.length;ve!==0;)Le=U(0,ve-1),ve-=1,Re=me[ve],[me[ve],me[Le]]=[me[Le],me[ve]]},re=function(me){var ve,Le,Re,$e,qe,ke,ct,P;for(qe=0,ct=(function(){var Mt,tt,lt;for(lt=[],P=Mt=0,tt=me.length-1;0<=tt?Mt<=tt:Mt>=tt;P=0<=tt?++Mt:--Mt)lt.push(!1);return lt})();;){for(ve=-1,Re=$e=0,ke=me.length-1;0<=ke?$e<=ke:$e>=ke;Re=0<=ke?++$e:--$e)if(!ct[Re]){ve=Re;break}if(ve===-1)break;for(Le=0;!ct[ve];)ct[ve]=!0,Le++,ve=me[ve];qe+=Le+1}return qe},ye=function(me,ve){var Le;return Le=re(ve)+re(me),Le%2===0},oe=function(me,ve){for(Ce(ve),Ce(me);!ye(me,ve);)Ce(ve),Ce(me)},K=function(me,ve){var Le,Re,$e,qe;for($e=0,Le=Re=0,qe=me.length-1;0<=qe?Re<=qe:Re>=qe;Le=0<=qe?++Re:--Re)$e+=me[Le]=U(0,ve-1)},ce=function(me,ve){return me.reduce(function(Le,Re){return Le+Re})%ve===0},X=function(me,ve){for(K(me,3);!ce(me,3);)K(me,3);for(K(ve,2);!ce(ve,2);)K(ve,2)},se=function(){return oe(this.cp,this.ep),X(this.co,this.eo),this},se})(),ue.moves=[{center:[0,1,2,3,4,5],cp:[E,Z,D,y,c,u,o,f],co:[0,0,0,0,0,0,0,0],ep:[C,S,T,I,d,a,l,s,x,v,e,t],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[c,D,y,Z,f,u,o,E],co:[2,0,0,1,1,0,0,2],ep:[x,T,I,C,t,a,l,s,d,v,e,S],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[D,u,y,E,Z,c,o,f],co:[1,2,0,0,2,1,0,0],ep:[S,v,I,C,d,x,l,s,T,a,e,t],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[Z,D,y,E,u,o,f,c],co:[0,0,0,0,0,0,0,0],ep:[S,T,I,C,a,l,s,d,x,v,e,t],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[Z,y,o,E,c,D,u,f],co:[0,1,2,0,0,2,1,0],ep:[S,T,e,C,d,a,v,s,x,I,l,t],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[Z,D,E,f,c,u,y,o],co:[0,0,1,2,0,0,2,1],ep:[S,T,I,t,d,a,l,e,x,v,C,s],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[b,h,g,r,n,p],cp:[Z,D,y,E,c,u,o,f],co:[0,0,0,0,0,0,0,0],ep:[S,T,I,C,d,a,l,s,v,e,t,x],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[n,p,b,h,g,r],cp:[Z,D,y,E,c,u,o,f],co:[0,0,0,0,0,0,0,0],ep:[S,C,I,s,d,T,l,a,x,v,e,t],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[g,b,h,p,r,n],cp:[Z,D,y,E,c,u,o,f],co:[0,0,0,0,0,0,0,0],ep:[I,T,l,C,S,a,d,s,x,v,e,t],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],he={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},k={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},le=function(ye){var X,oe,re,ce,U,K,se;if(typeof ye=="string"){for(K=ye.split(/\s+/),se=[],X=0,oe=K.length;X<oe;X++)if(ce=K[X],ce.length!==0){if(ce.length>2)throw new Error(`Invalid move: ${ce}`);if(re=he[ce[0]],re===void 0)throw new Error(`Invalid move: ${ce}`);if(ce.length===1)U=0;else if(ce[1]==="2")U=1;else if(ce[1]==="'")U=2;else throw new Error(`Invalid move: ${ce}`);se.push(re*3+U)}return se}else return ye.length!=null?ye:[ye]},ue.moves.push(new ue().move("R M' L'").toJSON()),ue.moves.push(new ue().move("U E' D'").toJSON()),ue.moves.push(new ue().move("F S B'").toJSON()),ue.moves.push(new ue().move("U E'").toJSON()),ue.moves.push(new ue().move("R M'").toJSON()),ue.moves.push(new ue().move("F S").toJSON()),ue.moves.push(new ue().move("D E").toJSON()),ue.moves.push(new ue().move("L M").toJSON()),ue.moves.push(new ue().move("B S'").toJSON()),ue}.call(this),typeof Hh<"u"&&Hh!==null?Hh.exports=i:this.Cube=i}).call(BE)});var HE=$h(VE=>{"use strict";(function(){var n,e,t,i,r,s,o,a,c,l,u,d,f,h,v,x,g,p,b,C,E,T,D,I,y,S,Z,A,B,z,J,H,G,k,he,le,ue,ye,X,oe,re,ce,U,K,se,Ce,me,ve,Le,Re,$e,qe,ke,ct,P,Mt,tt,lt,Ie=[].indexOf;r=this.Cube||$y(),[J,z,v,s,b,n]=[0,1,2,3,4,5],[X,he,ue,G,l,d,a,h]=[0,1,2,3,4,5,6,7],[ye,k,le,H,f,c,u,o,g,x,e,t]=[0,1,2,3,4,5,6,7,8,9,10,11],i=function(_,m){var w,O,N;if(_<m)return 0;for(m>_/2&&(m=_-m),N=1,w=_,O=1;w!==_-m;)N*=w,N/=O,w--,O++;return N},Ce=function(_){var m,w,O,N;for(m=1,w=O=2,N=_;2<=N?O<=N:O>=N;w=2<=N?++O:--O)m*=w;return m},ve=function(_,m){return _>m?_:m},Mt=function(_,m,w){var O,N,R,te,q;for(q=_[m],O=N=R=m,te=w-1;R<=te?N<=te:N>=te;O=R<=te?++N:--N)_[O]=_[O+1];return _[w]=q},tt=function(_,m,w){var O,N,R,te,q;for(q=_[w],O=N=R=w,te=m+1;R<=te?N<=te:N>=te;O=R<=te?++N:--N)_[O]=_[O-1];return _[m]=q},ke=function(_,m,w,O=!1){var N,R,te,q,pe,Me;return q=w-m,te=Ce(q+1),_==="corners"?(R=7,Me="cp"):(R=11,Me="ep"),pe=(function(){var ae,Y,W;for(W=[],N=ae=0,Y=q;0<=Y?ae<=Y:ae>=Y;N=0<=Y?++ae:--ae)W.push(0);return W})(),function(ae){var Y,W,ne,ee,Se,F,fe,de,_e,ge,ie,De,ze,dt,rt,Dn,vn,fo,ho,fs,Aa,Cr,Tn,Zi,Zt,Dr,Di;if(ae!=null){for(N=F=0,ie=q;0<=ie?F<=ie:F>=ie;N=0<=ie?++F:--F)pe[N]=N+m;for(W=ae%te,Y=ae/te|0,_e=this[Me],N=fe=0,De=R;0<=De?fe<=De:fe>=De;N=0<=De?++fe:--fe)_e[N]=-1;for(ee=de=1,dt=q;1<=dt?de<=dt:de>=dt;ee=1<=dt?++de:--de)for(Se=W%(ee+1),W=W/(ee+1)|0;Se>0;)tt(pe,0,ee),Se--;if(Zt=q,O)for(ee=ge=0,rt=R;0<=rt?ge<=rt:ge>=rt;ee=0<=rt?++ge:--ge)ne=i(R-ee,Zt+1),Y-ne>=0&&(_e[ee]=pe[q-Zt],Y-=ne,Zt--);else for(ee=Cr=Dn=R;Dn<=0?Cr<=0:Cr>=0;ee=Dn<=0?++Cr:--Cr)ne=i(ee,Zt+1),Y-ne>=0&&(_e[ee]=pe[Zt],Y-=ne,Zt--);return this}else{for(_e=this[Me],N=Tn=0,vn=q;0<=vn?Tn<=vn:Tn>=vn;N=0<=vn?++Tn:--Tn)pe[N]=-1;if(Y=W=Zt=0,O)for(ee=Zi=fo=R;fo<=0?Zi<=0:Zi>=0;ee=fo<=0?++Zi:--Zi)m<=(ho=_e[ee])&&ho<=w&&(Y+=i(R-ee,Zt+1),pe[q-Zt]=_e[ee],Zt++);else for(ee=Dr=0,fs=R;0<=fs?Dr<=fs:Dr>=fs;ee=0<=fs?++Dr:--Dr)m<=(Aa=_e[ee])&&Aa<=w&&(Y+=i(ee,Zt+1),pe[Zt]=_e[ee],Zt++);for(ee=Di=ze=q;ze<=0?Di<=0:Di>=0;ee=ze<=0?++Di:--Di){for(Se=0;pe[ee]!==m+ee;)Mt(pe,0,ee),Se++;W=(ee+1)*W+Se}return Y*te+W}}},p={twist:function(_){var m,w,O,N,R,te;if(_!=null){for(R=0,m=w=6;w>=0;m=--w)N=_%3,_=_/3|0,this.co[m]=N,R+=N;return this.co[7]=(3-R%3)%3,this}else{for(te=0,m=O=0;O<=6;m=++O)te=3*te+this.co[m];return te}},flip:function(_){var m,w,O,N,R,te;if(_!=null){for(R=0,m=w=10;w>=0;m=--w)N=_%2,_=_/2|0,this.eo[m]=N,R+=N;return this.eo[11]=(2-R%2)%2,this}else{for(te=0,m=O=0;O<=10;m=++O)te=2*te+this.eo[m];return te}},cornerParity:function(){var _,m,w,O,N,R,te,q,pe;for(pe=0,_=w=N=h,R=X+1;N<=R?w<=R:w>=R;_=N<=R?++w:--w)for(m=O=te=_-1,q=X;te<=q?O<=q:O>=q;m=te<=q?++O:--O)this.cp[m]>this.cp[_]&&pe++;return pe%2},edgeParity:function(){var _,m,w,O,N,R,te,q,pe;for(pe=0,_=w=N=t,R=ye+1;N<=R?w<=R:w>=R;_=N<=R?++w:--w)for(m=O=te=_-1,q=ye;te<=q?O<=q:O>=q;m=te<=q?++O:--O)this.ep[m]>this.ep[_]&&pe++;return pe%2},URFtoDLF:ke("corners",X,d),URtoUL:ke("edges",ye,le),UBtoDF:ke("edges",H,c),URtoDF:ke("edges",ye,c),FRtoBR:ke("edges",g,t,!0)};for(me in p)lt=p[me],r.prototype[me]=lt;ce=function(_,m,w){var O,N,R,te,q,pe,Me,ae,Y,W,ne,ee;for(O=_==="corners"?"cornerMultiply":"edgeMultiply",N=new r,ee=[],R=Me=0,ne=w-1;0<=ne?Me<=ne:Me>=ne;R=0<=ne?++Me:--Me){for(N[m](R),te=[],q=Y=0;Y<=5;q=++Y){for(ae=r.moves[q],pe=W=0;W<=2;pe=++W)N[O](ae),te.push(N[m]());N[O](ae)}ee.push(te)}return ee},Le=(function(){var _,m;return _=new r,m=new r,function(w,O){var N,R;for(_.URtoUL(w),m.UBtoDF(O),N=R=0;R<=7;N=++R)if(_.ep[N]!==-1){if(m.ep[N]!==-1)return-1;m.ep[N]=_.ep[N]}return m.URtoDF()}})(),y=2187,C=2048,T=2,E=11880,D=495,I=24,Z=20160,A=20160,B=1320,S=1320,r.moveTables={parity:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]],twist:null,flip:null,FRtoBR:null,URFtoDLF:null,URtoDF:null,URtoUL:null,UBtoDF:null,mergeURtoDF:null},Re={twist:["corners",y],flip:["edges",C],FRtoBR:["edges",E],URFtoDLF:["corners",Z],URtoDF:["edges",A],URtoUL:["edges",B],UBtoDF:["edges",S],mergeURtoDF:[]},r.computeMoveTables=function(..._){var m,w,O,N,R,te;for(_.length===0&&(_=(function(){var q;q=[];for(O in Re)q.push(O);return q})()),w=0,m=_.length;w<m;w++)te=_[w],this.moveTables[te]===null&&(te==="mergeURtoDF"?this.moveTables.mergeURtoDF=(function(){var q,pe,Me,ae;for(ae=[],pe=Me=0;Me<=335;pe=++Me)ae.push((function(){var Y,W;for(W=[],q=Y=0;Y<=335;q=++Y)W.push(Le(pe,q));return W})());return ae})():([N,R]=Re[te],this.moveTables[te]=ce(N,te,R)));return this},oe=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],$e=(function(){var _,m,w,O,N,R,te,q;for(q=[],m=w=0;w<=5;m=++w){for(O=[],_=N=0;N<=5;_=++N)if(_!==m&&_!==m-3)for(te=R=0;R<=2;te=++R)O.push(_*3+te);q.push(O)}return q})(),re=[0,1,2,4,7,9,10,11,13,16],qe=(function(){var _,m,w,O,N,R,te,q,pe,Me;for(Me=[],m=O=0;O<=5;m=++O){for(N=[],_=R=0;R<=5;_=++R)if(_!==m&&_!==m-3)for(pe=_===0||_===3?[0,1,2]:[1],te=0,w=pe.length;te<w;te++)q=pe[te],N.push(_*3+q);Me.push(N)}return Me})(),ct=function(_,m,w){var O,N,R;return O=m%8,R=m>>3,N=O<<2,w!=null?(_[R]&=~(15<<N),_[R]|=w<<N,w):(_[R]&15<<N)>>>N},U=function(_,m,w,O){var N,R,te,q,pe,Me,ae,Y,W,ne,ee,Se,F;for(Se=(function(){var fe,de,_e;for(_e=[],F=fe=0,de=Math.ceil(m/8)-1;0<=de?fe<=de:fe>=de;F=0<=de?++fe:--fe)_e.push(4294967295);return _e})(),_===1?Y=oe:Y=re,R=0,ct(Se,0,R),te=1;te!==m;){for(q=Me=0,ee=m-1;0<=ee?Me<=ee:Me>=ee;q=0<=ee?++Me:--Me)if(ct(Se,q)===R)for(N=w(q),ne=0,pe=Y.length;ne<pe;ne++)ae=Y[ne],W=O(N,ae),ct(Se,W)===15&&(ct(Se,W,R+1),te++);R++}return Se},r.pruningTables={sliceTwist:null,sliceFlip:null,sliceURFtoDLFParity:null,sliceURtoDFParity:null},P={sliceTwist:[1,D*y,function(_){return[_%D,_/D|0]},function(_,m){var w,O,N,R;return[N,R]=_,w=r.moveTables.FRtoBR[N*24][m]/24|0,O=r.moveTables.twist[R][m],O*D+w}],sliceFlip:[1,D*C,function(_){return[_%D,_/D|0]},function(_,m){var w,O,N,R;return[R,w]=_,N=r.moveTables.FRtoBR[R*24][m]/24|0,O=r.moveTables.flip[w][m],O*D+N}],sliceURFtoDLFParity:[2,I*Z*T,function(_){return[_%2,(_/2|0)%I,(_/2|0)/I|0]},function(_,m){var w,O,N,R,te,q;return[te,q,w]=_,O=r.moveTables.parity[te][m],N=r.moveTables.FRtoBR[q][m],R=r.moveTables.URFtoDLF[w][m],(R*I+N)*2+O}],sliceURtoDFParity:[2,I*A*T,function(_){return[_%2,(_/2|0)%I,(_/2|0)/I|0]},function(_,m){var w,O,N,R,te,q;return[te,q,w]=_,O=r.moveTables.parity[te][m],N=r.moveTables.FRtoBR[q][m],R=r.moveTables.URtoDF[w][m],(R*I+N)*2+O}]},r.computePruningTables=function(..._){var m,w,O,N,R;for(_.length===0&&(_=(function(){var te;te=[];for(O in P)te.push(O);return te})()),w=0,m=_.length;w<m;w++)R=_[w],this.pruningTables[R]===null&&(N=P[R],this.pruningTables[R]=U(...N));return this},r.initSolver=function(){return r.computeMoveTables(),r.computePruningTables()},r.prototype.solveUpright=function(_=22){var m,w,O,N,R,te,q,pe,Me,ae;return O=(function(){var Y,W,ne,ee,Se,F,fe;for(W=["U","R","F","D","L","B"],F=["","2","'"],fe=[],Y=ne=0;ne<=5;Y=++ne)for(Se=ee=0;ee<=2;Se=++ee)fe.push(W[Y]+F[Se]);return fe})(),m=class{constructor(W){this.parent=null,this.lastMove=null,this.depth=0,W&&this.init(W)}init(W){return this.flip=W.flip(),this.twist=W.twist(),this.slice=W.FRtoBR()/I|0,this.parity=W.cornerParity(),this.URFtoDLF=W.URFtoDLF(),this.FRtoBR=W.FRtoBR(),this.URtoUL=W.URtoUL(),this.UBtoDF=W.UBtoDF(),this}solution(){return this.parent?this.parent.solution()+O[this.lastMove]+" ":""}move(W,ne,ee){return r.moveTables[W][ne][ee]}pruning(W,ne){return ct(r.pruningTables[W],ne)}moves1(){return this.lastMove!==null?$e[this.lastMove/3|0]:oe}minDist1(){var W,ne;return W=this.pruning("sliceFlip",D*this.flip+this.slice),ne=this.pruning("sliceTwist",D*this.twist+this.slice),ve(W,ne)}next1(W){var ne;return ne=w.pop(),ne.parent=this,ne.lastMove=W,ne.depth=this.depth+1,ne.flip=this.move("flip",this.flip,W),ne.twist=this.move("twist",this.twist,W),ne.slice=this.move("FRtoBR",this.slice*24,W)/24|0,ne}moves2(){return this.lastMove!==null?qe[this.lastMove/3|0]:re}minDist2(){var W,ne,ee,Se;return ee=(I*this.URtoDF+this.FRtoBR)*T+this.parity,W=this.pruning("sliceURtoDFParity",ee),Se=(I*this.URFtoDLF+this.FRtoBR)*T+this.parity,ne=this.pruning("sliceURFtoDLFParity",Se),ve(W,ne)}init2(W=!0){if(this.parent!==null&&(this.parent.init2(!1),this.URFtoDLF=this.move("URFtoDLF",this.parent.URFtoDLF,this.lastMove),this.FRtoBR=this.move("FRtoBR",this.parent.FRtoBR,this.lastMove),this.parity=this.move("parity",this.parent.parity,this.lastMove),this.URtoUL=this.move("URtoUL",this.parent.URtoUL,this.lastMove),this.UBtoDF=this.move("UBtoDF",this.parent.UBtoDF,this.lastMove),W))return this.URtoDF=this.move("mergeURtoDF",this.URtoUL,this.UBtoDF)}next2(W){var ne;return ne=w.pop(),ne.parent=this,ne.lastMove=W,ne.depth=this.depth+1,ne.URFtoDLF=this.move("URFtoDLF",this.URFtoDLF,W),ne.FRtoBR=this.move("FRtoBR",this.FRtoBR,W),ne.parity=this.move("parity",this.parity,W),ne.URtoDF=this.move("URtoDF",this.URtoDF,W),ne}},pe=null,R=function(Y){var W,ne,ee,Se;for(W=0,Se=[],W=ne=1,ee=_;(1<=ee?ne<=ee:ne>=ee)&&(N(Y,W),pe===null);W=1<=ee?++ne:--ne)Se.push(W++);return Se},N=function(Y,W){var ne,ee,Se,F,fe,de,_e;if(W===0){if(Y.minDist1()===0&&(Y.lastMove===null||(fe=Y.lastMove,Ie.call(re,fe)<0)))return q(Y)}else if(W>0&&Y.minDist1()<=W){for(de=Y.moves1(),_e=[],ee=0,ne=de.length;ee<ne&&(Se=de[ee],F=Y.next1(Se),N(F,W-1),w.push(F),pe===null);ee++)_e.push(void 0);return _e}},q=function(Y){var W,ne,ee,Se;for(Y.init2(),Se=[],W=ne=1,ee=_-Y.depth;(1<=ee?ne<=ee:ne>=ee)&&(te(Y,W),pe===null);W=1<=ee?++ne:--ne)Se.push(W++);return Se},te=function(Y,W){var ne,ee,Se,F,fe,de;if(W===0){if(Y.minDist2()===0)return pe=Y.solution()}else if(W>0&&Y.minDist2()<=W){for(fe=Y.moves2(),de=[],ee=0,ne=fe.length;ee<ne&&(Se=fe[ee],F=Y.next2(Se),te(F,W-1),w.push(F),pe===null);ee++)de.push(void 0);return de}},w=(function(){var Y,W,ne;for(ne=[],ae=Y=0,W=_+1;0<=W?Y<=W:Y>=W;ae=0<=W?++Y:--Y)ne.push(new m);return ne})(),Me=w.pop().init(this),R(Me),w.push(Me),pe.length>0&&(pe=pe.substring(0,pe.length-1)),pe},se={U:0,R:1,F:2,D:3,L:4,B:5},K={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B"},r.prototype.solve=function(_=22){var m,w,O,N,R,te,q,pe,Me;for(m=this.clone(),pe=m.upright(),m.move(pe),te=new r().move(pe).center,Me=m.solveUpright(_),q=[],R=Me.split(" "),O=0,w=R.length;O<w;O++)N=R[O],q.push(K[te[se[N[0]]]]),N.length>1&&(q[q.length-1]+=N[1]);return q.join(" ")},r.scramble=function(){return r.inverse(r.random().solve())}}).call(VE)});var GE=$h((oZ,zE)=>{"use strict";zE.exports=$y();HE()});var ln=null,Sl=!1,Xh=1,sw=null,jn=Symbol("SIGNAL");function We(n){let e=ln;return ln=n,e}function El(){return ln}var wl={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Cl(n){if(Sl)throw new Error("");if(ln===null)return;ln.consumerOnSignalRead(n);let e=ln.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=ln.recomputing;if(i&&(t=e!==void 0?e.nextProducer:ln.producers,t!==void 0&&t.producer===n)){ln.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===ln&&(!i||aw(r,ln)))return;let s=go(ln),o={producer:n,consumer:ln,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};ln.producersTail=o,e!==void 0?e.nextProducer=o:ln.producers=o,s&&s_(n,o)}function t_(){Xh++}function n_(n){if(!(go(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Xh)){if(!n.producerMustRecompute(n)&&!Tl(n)){qh(n);return}n.producerRecomputeValue(n),qh(n)}}function Yh(n){if(n.consumers===void 0)return;let e=Sl;Sl=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||ow(i)}}finally{Sl=e}}function Zh(){return ln?.consumerAllowSignalWrites!==!1}function ow(n){n.dirty=!0,Yh(n),n.consumerMarkedDirty?.(n)}function qh(n){n.dirty=!1,n.lastCleanEpoch=Xh}function Dl(n){return n&&i_(n),We(n)}function i_(n){n.producersTail=void 0,n.recomputing=!0}function Jh(n,e){We(e),n&&r_(n)}function r_(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(go(n))do t=Kh(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function Tl(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(n_(t),i!==t.version))return!0}return!1}function Ia(n){if(go(n)){let e=n.producers;for(;e!==void 0;)e=Kh(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function s_(n,e){let t=n.consumersTail,i=go(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)s_(r.producer,r)}function Kh(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!go(e)){let s=e.producers;for(;s!==void 0;)s=Kh(s)}return t}function go(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function o_(n){sw?.(n)}function aw(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function a_(n,e){return Object.is(n,e)}function cw(){throw new Error}var c_=cw;function l_(n){c_(n)}function Qh(n){c_=n}var lw=null;function ep(n,e){let t=Object.create(Al);t.value=n,e!==void 0&&(t.equal=e);let i=()=>u_(t);return i[jn]=t,o_(t),[i,o=>Ra(t,o),o=>d_(t,o)]}function u_(n){return Cl(n),n.value}function Ra(n,e){Zh()||l_(n),n.equal(n.value,e)||(n.value=e,uw(n))}function d_(n,e){Zh()||l_(n),Ra(n,e(n.value))}var Al=Dt(Ae({},wl),{equal:a_,value:void 0,kind:"signal"});function uw(n){n.version++,t_(),Yh(n),lw?.(n)}function tp(n){let e=We(null);try{return n()}finally{We(e)}}function Ye(n){return typeof n=="function"}function vo(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Il=vo(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Na(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Kt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ye(i))try{i()}catch(s){e=s instanceof Il?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{f_(s)}catch(o){e=e??[],o instanceof Il?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Il(e)}}add(e){var t;if(e&&e!==this)if(this.closed)f_(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Na(t,e)}remove(e){let{_finalizers:t}=this;t&&Na(t,e),e instanceof n&&e._removeParent(this)}};Kt.EMPTY=(()=>{let n=new Kt;return n.closed=!0,n})();var np=Kt.EMPTY;function Rl(n){return n instanceof Kt||n&&"closed"in n&&Ye(n.remove)&&Ye(n.add)&&Ye(n.unsubscribe)}function f_(n){Ye(n)?n():n.unsubscribe()}var si={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var yo={setTimeout(n,e,...t){let{delegate:i}=yo;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=yo;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Nl(n){yo.setTimeout(()=>{let{onUnhandledError:e}=si;if(e)e(n);else throw n})}function Pa(){}var h_=ip("C",void 0,void 0);function p_(n){return ip("E",void 0,n)}function m_(n){return ip("N",n,void 0)}function ip(n,e,t){return{kind:n,value:e,error:t}}var ps=null;function _o(n){if(si.useDeprecatedSynchronousErrorHandling){let e=!ps;if(e&&(ps={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ps;if(ps=null,t)throw i}}else n()}function g_(n){si.useDeprecatedSynchronousErrorHandling&&ps&&(ps.errorThrown=!0,ps.error=n)}var ms=class extends Kt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Rl(e)&&e.add(this)):this.destination=hw}static create(e,t,i){return new xo(e,t,i)}next(e){this.isStopped?sp(m_(e),this):this._next(e)}error(e){this.isStopped?sp(p_(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?sp(h_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},dw=Function.prototype.bind;function rp(n,e){return dw.call(n,e)}var op=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Pl(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Pl(i)}else Pl(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Pl(t)}}},xo=class extends ms{constructor(e,t,i){super();let r;if(Ye(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&si.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&rp(e.next,s),error:e.error&&rp(e.error,s),complete:e.complete&&rp(e.complete,s)}):r=e}this.destination=new op(r)}};function Pl(n){si.useDeprecatedSynchronousErrorHandling?g_(n):Nl(n)}function fw(n){throw n}function sp(n,e){let{onStoppedNotification:t}=si;t&&yo.setTimeout(()=>t(n,e))}var hw={closed:!0,next:Pa,error:fw,complete:Pa};var Mo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function oi(n){return n}function ap(...n){return cp(n)}function cp(n){return n.length===0?oi:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var pt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=mw(t)?t:new xo(t,i,r);return _o(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=v_(i),new i((r,s)=>{let o=new xo({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Mo](){return this}pipe(...t){return cp(t)(this)}toPromise(t){return t=v_(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function v_(n){var e;return(e=n??si.Promise)!==null&&e!==void 0?e:Promise}function pw(n){return n&&Ye(n.next)&&Ye(n.error)&&Ye(n.complete)}function mw(n){return n&&n instanceof ms||pw(n)&&Rl(n)}function gw(n){return Ye(n?.lift)}function gt(n){return e=>{if(gw(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Et(n,e,t,i,r){return new lp(n,e,t,i,r)}var lp=class extends ms{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var y_=vo(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Qt=(()=>{class n extends pt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Fl(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new y_}next(t){_o(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){_o(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){_o(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?np:(this.currentObservers=null,s.push(t),new Kt(()=>{this.currentObservers=null,Na(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new pt;return t.source=this,t}}return n.create=(e,t)=>new Fl(e,t),n})(),Fl=class extends Qt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:np}};var en=class extends Qt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var tn=new pt(n=>n.complete());function __(n){return n&&Ye(n.schedule)}function x_(n){return n[n.length-1]}function M_(n){return Ye(x_(n))?n.pop():void 0}function Ir(n){return __(x_(n))?n.pop():void 0}function S_(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function b_(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function gs(n){return this instanceof gs?(this.v=n,this):new gs(n)}function E_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(v){return Promise.resolve(v).then(h,d)}}function a(h,v){i[h]&&(r[h]=function(x){return new Promise(function(g,p){s.push([h,x,g,p])>1||c(h,x)})},v&&(r[h]=v(r[h])))}function c(h,v){try{l(i[h](v))}catch(x){f(s[0][3],x)}}function l(h){h.value instanceof gs?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,v){h(v),s.shift(),s.length&&c(s[0][0],s[0][1])}}function w_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof b_=="function"?b_(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ol=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ll(n){return Ye(n?.then)}function kl(n){return Ye(n[Mo])}function Ul(n){return Symbol.asyncIterator&&Ye(n?.[Symbol.asyncIterator])}function Bl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function vw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Vl=vw();function Hl(n){return Ye(n?.[Vl])}function zl(n){return E_(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield gs(t.read());if(r)return yield gs(void 0);yield yield gs(i)}}finally{t.releaseLock()}})}function Gl(n){return Ye(n?.getReader)}function jt(n){if(n instanceof pt)return n;if(n!=null){if(kl(n))return yw(n);if(Ol(n))return _w(n);if(Ll(n))return xw(n);if(Ul(n))return C_(n);if(Hl(n))return Mw(n);if(Gl(n))return bw(n)}throw Bl(n)}function yw(n){return new pt(e=>{let t=n[Mo]();if(Ye(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function _w(n){return new pt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function xw(n){return new pt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Nl)})}function Mw(n){return new pt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function C_(n){return new pt(e=>{Sw(n,e).catch(t=>e.error(t))})}function bw(n){return C_(zl(n))}function Sw(n,e){var t,i,r,s;return S_(this,void 0,void 0,function*(){try{for(t=w_(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Sn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function jl(n,e=0){return gt((t,i)=>{t.subscribe(Et(i,r=>Sn(i,n,()=>i.next(r),e),()=>Sn(i,n,()=>i.complete(),e),r=>Sn(i,n,()=>i.error(r),e)))})}function Wl(n,e=0){return gt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function D_(n,e){return jt(n).pipe(Wl(e),jl(e))}function T_(n,e){return jt(n).pipe(Wl(e),jl(e))}function A_(n,e){return new pt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function I_(n,e){return new pt(t=>{let i;return Sn(t,e,()=>{i=n[Vl](),Sn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ye(i?.return)&&i.return()})}function $l(n,e){if(!n)throw new Error("Iterable cannot be null");return new pt(t=>{Sn(t,e,()=>{let i=n[Symbol.asyncIterator]();Sn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function R_(n,e){return $l(zl(n),e)}function N_(n,e){if(n!=null){if(kl(n))return D_(n,e);if(Ol(n))return A_(n,e);if(Ll(n))return T_(n,e);if(Ul(n))return $l(n,e);if(Hl(n))return I_(n,e);if(Gl(n))return R_(n,e)}throw Bl(n)}function Wt(n,e){return e?N_(n,e):jt(n)}function ot(...n){let e=Ir(n);return Wt(n,e)}function up(n,e){let t=Ye(n)?n:()=>n,i=r=>r.error(t());return new pt(e?r=>e.schedule(i,0,r):i)}function ql(n){return!!n&&(n instanceof pt||Ye(n.lift)&&Ye(n.subscribe))}var vs=vo(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function At(n,e){return gt((t,i)=>{let r=0;t.subscribe(Et(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:Ew}=Array;function ww(n,e){return Ew(e)?n(...e):n(e)}function P_(n){return At(e=>ww(n,e))}var{isArray:Cw}=Array,{getPrototypeOf:Dw,prototype:Tw,keys:Aw}=Object;function F_(n){if(n.length===1){let e=n[0];if(Cw(e))return{args:e,keys:null};if(Iw(e)){let t=Aw(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function Iw(n){return n&&typeof n=="object"&&Dw(n)===Tw}function O_(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function dp(...n){let e=Ir(n),t=M_(n),{args:i,keys:r}=F_(n);if(i.length===0)return Wt([],e);let s=new pt(Rw(i,e,r?o=>O_(r,o):oi));return t?s.pipe(P_(t)):s}function Rw(n,e,t=oi){return i=>{L_(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)L_(e,()=>{let l=Wt(n[c],e),u=!1;l.subscribe(Et(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function L_(n,e,t){n?Sn(t,n,e):e()}function k_(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=x=>l<i?v(x):c.push(x),v=x=>{s&&e.next(x),l++;let g=!1;jt(t(x,u++)).subscribe(Et(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{g=!0},void 0,()=>{if(g)try{for(l--;c.length&&l<i;){let p=c.shift();o?Sn(e,o,()=>v(p)):v(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(Et(e,h,()=>{d=!0,f()})),()=>{a?.()}}function yn(n,e,t=1/0){return Ye(e)?yn((i,r)=>At((s,o)=>e(i,s,r,o))(jt(n(i,r))),t):(typeof e=="number"&&(t=e),gt((i,r)=>k_(i,r,n,t)))}function U_(n=1/0){return yn(oi,n)}function B_(){return U_(1)}function bo(...n){return B_()(Wt(n,Ir(n)))}function Fa(n){return new pt(e=>{jt(n()).subscribe(e)})}function Ji(n,e){return gt((t,i)=>{let r=0;t.subscribe(Et(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Oa(n){return gt((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Et(t,void 0,void 0,o=>{s=jt(n(o,Oa(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Xl(n,e){return Ye(e)?yn(n,e,1):yn(n,1)}function V_(n){return gt((e,t)=>{let i=!1;e.subscribe(Et(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Ki(n){return n<=0?()=>tn:gt((e,t)=>{let i=0;e.subscribe(Et(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function H_(n=Nw){return gt((e,t)=>{let i=!1;e.subscribe(Et(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function Nw(){return new vs}function fp(n){return gt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Qi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Ji((r,s)=>n(r,s,i)):oi,Ki(1),t?V_(e):H_(()=>new vs))}function Yl(n){return n<=0?()=>tn:gt((e,t)=>{let i=[];e.subscribe(Et(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function hp(...n){let e=Ir(n);return gt((t,i)=>{(e?bo(n,t,e):bo(n,t)).subscribe(i)})}function er(n,e){return gt((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Et(i,c=>{r?.unsubscribe();let l=0,u=s++;jt(n(c,u)).subscribe(r=Et(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function La(n){return gt((e,t)=>{jt(n).subscribe(Et(t,()=>t.complete(),Pa)),!t.closed&&e.subscribe(t)})}function Ai(n,e,t){let i=Ye(n)||e||t?{next:n,error:e,complete:t}:n;return i?gt((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Et(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):oi}var pp;function Zl(){return pp}function Ii(n){let e=pp;return pp=n,e}var z_=Symbol("NotFound");function So(n){return n===z_||n?.name==="\u0275NotFound"}var Ap="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Ue=class extends Error{code;constructor(e,t){super(Co(e,t)),this.code=e}};function Lw(n){return`NG0${Math.abs(n)}`}function Co(n,e){return`${Lw(n)}${e?": "+e:""}`}function vt(n){for(let e in n)if(n[e]===vt)return e;throw Error("")}function nr(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(nr).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Ip(n,e){return n?e?`${n} ${e}`:n:e||""}var kw=vt({__forward_ref__:vt});function za(n){return n.__forward_ref__=za,n.toString=function(){return nr(this())},n}function En(n){return Rp(n)?n():n}function Rp(n){return typeof n=="function"&&n.hasOwnProperty(kw)&&n.__forward_ref__===za}function Be(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function rr(n){return{providers:n.providers||[],imports:n.imports||[]}}function Ga(n){return Uw(n,nu)}function Np(n){return Ga(n)!==null}function Uw(n,e){return n.hasOwnProperty(e)&&n[e]||null}function Bw(n){let e=n?.[nu]??null;return e||null}function gp(n){return n&&n.hasOwnProperty(Kl)?n[Kl]:null}var nu=vt({\u0275prov:vt}),Kl=vt({\u0275inj:vt}),Ve=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Be({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Pp(n){return n&&!!n.\u0275providers}var Fp=vt({\u0275cmp:vt}),Op=vt({\u0275dir:vt}),Lp=vt({\u0275pipe:vt}),kp=vt({\u0275mod:vt}),Ua=vt({\u0275fac:vt}),bs=vt({__NG_ELEMENT_ID__:vt}),G_=vt({__NG_ENV_ID__:vt});function Up(n){return iu(n,"@NgModule"),n[kp]||null}function Nr(n){return iu(n,"@Component"),n[Fp]||null}function Bp(n){return iu(n,"@Directive"),n[Op]||null}function q_(n){return iu(n,"@Pipe"),n[Lp]||null}function iu(n,e){if(n==null)throw new Ue(-919,!1)}function Vp(n){return typeof n=="string"?n:n==null?"":String(n)}var X_=vt({ngErrorCode:vt}),Vw=vt({ngErrorMessage:vt}),Hw=vt({ngTokenPath:vt});function Hp(n,e){return Y_("",-200,e)}function ru(n,e){throw new Ue(-201,!1)}function Y_(n,e,t){let i=new Ue(e,n);return i[X_]=e,i[Vw]=n,t&&(i[Hw]=t),i}function zw(n){return n[X_]}var vp;function Z_(){return vp}function In(n){let e=vp;return vp=n,e}function zp(n,e,t){let i=Ga(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;ru(n,"")}var Gw={},ys=Gw,jw="__NG_DI_FLAG__",yp=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=_s(t)||0;try{return this.injector.get(e,i&8?null:ys,i)}catch(r){if(So(r))return r;throw r}}};function Ww(n,e=0){let t=Zl();if(t===void 0)throw new Ue(-203,!1);if(t===null)return zp(n,void 0,e);{let i=$w(e),r=t.retrieve(n,i);if(So(r)){if(i.optional)return null;throw r}return r}}function Qe(n,e=0){return(Z_()||Ww)(En(n),e)}function xe(n,e){return Qe(n,_s(e))}function _s(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function $w(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function _p(n){let e=[];for(let t=0;t<n.length;t++){let i=En(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ue(900,!1);let r,s=0;for(let o=0;o<i.length;o++){let a=i[o],c=qw(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Qe(r,s))}else e.push(Qe(i))}return e}function qw(n){return n[jw]}function xs(n,e){let t=n.hasOwnProperty(Ua);return t?n[Ua]:null}function J_(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function K_(n){return n.flat(Number.POSITIVE_INFINITY)}function su(n,e){n.forEach(t=>Array.isArray(t)?su(t,e):e(t))}function Gp(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function ja(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Q_(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function e0(n,e,t){let i=Do(n,e);return i>=0?n[i|1]=t:(i=~i,Q_(n,i,e,t)),i}function ou(n,e){let t=Do(n,e);if(t>=0)return n[t|1]}function Do(n,e){return Xw(n,e,1)}function Xw(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Ss={},Wn=[],Es=new Ve(""),jp=new Ve("",-1),Wp=new Ve(""),Ba=class{get(e,t=ys){if(t===ys){let r=Y_("",-201);throw r.name="\u0275NotFound",r}return t}};function To(n){return{\u0275providers:n}}function t0(n){return To([{provide:Es,multi:!0,useValue:n}])}function n0(...n){return{\u0275providers:$p(!0,n),\u0275fromNgModule:!0}}function $p(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return su(e,o=>{let a=o;Ql(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&i0(r,s),t}function i0(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];qp(r,s=>{e(s,i)})}}function Ql(n,e,t,i){if(n=En(n),!n)return!1;let r=null,s=gp(n),o=!s&&Nr(n);if(!s&&!o){let c=n.ngModule;if(s=gp(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Ql(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;su(s.imports,u=>{Ql(u,e,t,i)&&(l||=[],l.push(u))}),l!==void 0&&i0(l,e)}if(!a){let l=xs(r)||(()=>new r);e({provide:r,useFactory:l,deps:Wn},r),e({provide:Wp,useValue:r,multi:!0},r),e({provide:Es,useValue:()=>Qe(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;qp(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function qp(n,e){for(let t of n)Pp(t)&&(t=t.\u0275providers),Array.isArray(t)?qp(t,e):e(t)}var Yw=vt({provide:String,useValue:vt});function r0(n){return n!==null&&typeof n=="object"&&Yw in n}function Zw(n){return!!(n&&n.useExisting)}function Jw(n){return!!(n&&n.useFactory)}function eu(n){return typeof n=="function"}var Wa=new Ve(""),Jl={},j_={},mp;function $a(){return mp===void 0&&(mp=new Ba),mp}var Ut=class{},Ms=class extends Ut{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,Mp(e,o=>this.processProvider(o)),this.records.set(jp,Eo(void 0,this)),r.has("environment")&&this.records.set(Ut,Eo(void 0,this));let s=this.records.get(Wa);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Wp,Wn,{self:!0}))}retrieve(e,t){let i=_s(t)||0;try{return this.get(e,ys,i)}catch(r){if(So(r))return r;throw r}}destroy(){ka(this),this._destroyed=!0;let e=We(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),We(e)}}onDestroy(e){return ka(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){ka(this);let t=Ii(this),i=In(void 0),r;try{return e()}finally{Ii(t),In(i)}}get(e,t=ys,i){if(ka(this),e.hasOwnProperty(G_))return e[G_](this);let r=_s(i),s,o=Ii(this),a=In(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=nC(e)&&Ga(e);u&&this.injectableDefInScope(u)?l=Eo(xp(e),Jl):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?$a():this.parent;return t=r&8&&t===ys?null:t,c.get(e,t)}catch(c){let l=zw(c);throw l===-200||l===-201?new Ue(l,null):c}finally{In(a),Ii(o)}}resolveInjectorInitializers(){let e=We(null),t=Ii(this),i=In(void 0),r;try{let s=this.get(Es,Wn,{self:!0});for(let o of s)o()}finally{Ii(t),In(i),We(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(nr(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=En(e);let t=eu(e)?e:En(e&&e.provide),i=Qw(e);if(!eu(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Eo(void 0,Jl,!0),r.factory=()=>_p(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=We(null);try{if(t.value===j_)throw Hp(nr(e));return t.value===Jl&&(t.value=j_,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&tC(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{We(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=En(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function xp(n){let e=Ga(n),t=e!==null?e.factory:xs(n);if(t!==null)return t;if(n instanceof Ve)throw new Ue(204,!1);if(n instanceof Function)return Kw(n);throw new Ue(204,!1)}function Kw(n){if(n.length>0)throw new Ue(204,!1);let t=Bw(n);return t!==null?()=>t.factory(n):()=>new n}function Qw(n){if(r0(n))return Eo(void 0,n.useValue);{let e=s0(n);return Eo(e,Jl)}}function s0(n,e,t){let i;if(eu(n)){let r=En(n);return xs(r)||xp(r)}else if(r0(n))i=()=>En(n.useValue);else if(Jw(n))i=()=>n.useFactory(..._p(n.deps||[]));else if(Zw(n))i=(r,s)=>Qe(En(n.useExisting),s!==void 0&&s&8?8:void 0);else{let r=En(n&&(n.useClass||n.provide));if(eC(n))i=()=>new r(..._p(n.deps));else return xs(r)||xp(r)}return i}function ka(n){if(n.destroyed)throw new Ue(205,!1)}function Eo(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function eC(n){return!!n.deps}function tC(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function nC(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function Mp(n,e){for(let t of n)Array.isArray(t)?Mp(t,e):t&&Pp(t)?Mp(t.\u0275providers,e):e(t)}function dn(n,e){let t;n instanceof Ms?(ka(n),t=n):t=new yp(n);let i,r=Ii(t),s=In(void 0);try{return e()}finally{Ii(r),In(s)}}function o0(){return Z_()!==void 0||Zl()!=null}var ci=0,He=1,Xe=2,Bt=3,$n=4,qn=5,Ao=6,Io=7,Ft=8,sr=9,or=10,Ot=11,Ro=12,Xp=13,ws=14,Nn=15,Pr=16,Cs=17,Ri=18,ar=19,Yp=20,tr=21,au=22,qa=23,Pn=24,cu=25,Ds=26,$t=27,a0=1,Zp=6,Fr=7,Xa=8,Ts=9,It=10;function cr(n){return Array.isArray(n)&&typeof n[a0]=="object"}function li(n){return Array.isArray(n)&&n[a0]===!0}function Jp(n){return(n.flags&4)!==0}function Or(n){return n.componentOffset>-1}function Ya(n){return(n.flags&1)===1}function As(n){return!!n.template}function No(n){return(n[Xe]&512)!==0}function Is(n){return(n[Xe]&256)===256}var Kp="svg",c0="math";function Xn(n){for(;Array.isArray(n);)n=n[ci];return n}function Qp(n,e){return Xn(e[n])}function ui(n,e){return Xn(e[n.index])}function Za(n,e){return n.data[e]}function di(n,e){let t=e[n];return cr(t)?t:t[ci]}function l0(n){return(n[Xe]&4)===4}function lu(n){return(n[Xe]&128)===128}function u0(n){return li(n[Bt])}function Yn(n,e){return e==null?null:n[e]}function em(n){n[Cs]=0}function tm(n){n[Xe]&1024||(n[Xe]|=1024,lu(n)&&Ka(n))}function d0(n,e){for(;n>0;)e=e[ws],n--;return e}function Ja(n){return!!(n[Xe]&9216||n[Pn]?.dirty)}function uu(n){n[or].changeDetectionScheduler?.notify(8),n[Xe]&64&&(n[Xe]|=1024),Ja(n)&&Ka(n)}function Ka(n){n[or].changeDetectionScheduler?.notify(0);let e=Rr(n);for(;e!==null&&!(e[Xe]&8192||(e[Xe]|=8192,!lu(e)));)e=Rr(e)}function nm(n,e){if(Is(n))throw new Ue(911,!1);n[tr]===null&&(n[tr]=[]),n[tr].push(e)}function f0(n,e){if(n[tr]===null)return;let t=n[tr].indexOf(e);t!==-1&&n[tr].splice(t,1)}function Rr(n){let e=n[Bt];return li(e)?e[Bt]:e}function im(n){return n[Io]??=[]}function rm(n){return n.cleanup??=[]}function h0(n,e,t,i){let r=im(e);r.push(t),n.firstCreatePass&&rm(n).push(i,r.length-1)}var it={lFrame:D0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var bp=!1;function p0(){return it.lFrame.elementDepthCount}function m0(){it.lFrame.elementDepthCount++}function sm(){it.lFrame.elementDepthCount--}function om(){return it.bindingsEnabled}function g0(){return it.skipHydrationRootTNode!==null}function am(n){return it.skipHydrationRootTNode===n}function cm(){it.skipHydrationRootTNode=null}function ut(){return it.lFrame.lView}function _n(){return it.lFrame.tView}function Zn(n){return it.lFrame.contextLView=n,n[Ft]}function Jn(n){return it.lFrame.contextLView=null,n}function Kn(){let n=lm();for(;n!==null&&n.type===64;)n=n.parent;return n}function lm(){return it.lFrame.currentTNode}function v0(){let n=it.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Po(n,e){let t=it.lFrame;t.currentTNode=n,t.isParent=e}function um(){return it.lFrame.isParent}function y0(){it.lFrame.isParent=!1}function dm(){return bp}function fm(n){let e=bp;return bp=n,e}function _0(){let n=it.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function x0(n){return it.lFrame.bindingIndex=n}function Fo(){return it.lFrame.bindingIndex++}function M0(n){let e=it.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function b0(){return it.lFrame.inI18n}function S0(n,e){let t=it.lFrame;t.bindingIndex=t.bindingRootIndex=n,du(e)}function E0(){return it.lFrame.currentDirectiveIndex}function du(n){it.lFrame.currentDirectiveIndex=n}function w0(n){let e=it.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function hm(){return it.lFrame.currentQueryIndex}function fu(n){it.lFrame.currentQueryIndex=n}function iC(n){let e=n[He];return e.type===2?e.declTNode:e.type===1?n[qn]:null}function pm(n,e,t){if(t&4){let r=e,s=n;for(;r=r.parent,r===null&&!(t&1);)if(r=iC(s),r===null||(s=s[ws],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=it.lFrame=C0();return i.currentTNode=e,i.lView=n,!0}function hu(n){let e=C0(),t=n[He];it.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function C0(){let n=it.lFrame,e=n===null?null:n.child;return e===null?D0(n):e}function D0(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function T0(){let n=it.lFrame;return it.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var mm=T0;function pu(){let n=T0();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function A0(n){return(it.lFrame.contextLView=d0(n,it.lFrame.contextLView))[Ft]}function Lr(){return it.lFrame.selectedIndex}function kr(n){it.lFrame.selectedIndex=n}function gm(){let n=it.lFrame;return Za(n.tView,n.selectedIndex)}function mu(){it.lFrame.currentNamespace=Kp}function I0(){return it.lFrame.currentNamespace}var R0=!0;function gu(){return R0}function vu(n){R0=n}function Sp(n,e=null,t=null,i){let r=vm(n,e,t,i);return r.resolveInjectorInitializers(),r}function vm(n,e=null,t=null,i,r=new Set){let s=[t||Wn,n0(n)];return i=i||(typeof n=="object"?void 0:nr(n)),new Ms(s,e||$a(),i||null,r)}var ai=class n{static THROW_IF_NOT_FOUND=ys;static NULL=new Ba;static create(e,t){if(Array.isArray(e))return Sp({name:""},t,e,"");{let i=e.name??"";return Sp({name:i},e.parent,e.providers,i)}}static \u0275prov=Be({token:n,providedIn:"any",factory:()=>Qe(jp)});static __NG_ELEMENT_ID__=-1},Vt=new Ve(""),lr=(()=>{class n{static __NG_ELEMENT_ID__=rC;static __NG_ENV_ID__=t=>t}return n})(),Ep=class extends lr{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Is(this._lView)}onDestroy(e){let t=this._lView;return nm(t,e),()=>f0(t,e)}};function rC(){return new Ep(ut())}var N0=!1,P0=new Ve(""),Ur=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new en(!1);debugTaskTracker=xe(P0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new pt(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Be({token:n,providedIn:"root",factory:()=>new n})}return n})(),wp=class extends Qt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,o0()&&(this.destroyRef=xe(lr,{optional:!0})??void 0,this.pendingTasks=xe(Ur,{optional:!0})??void 0)}emit(e){let t=We(null);try{super.next(e)}finally{We(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Kt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},un=wp;function tu(...n){}function ym(n){let e,t;function i(){n=tu;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function F0(n){return queueMicrotask(()=>n()),()=>{n=tu}}var _m="isAngularZone",Va=_m+"_ID",sC=0,Rn=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new un(!1);onMicrotaskEmpty=new un(!1);onStable=new un(!1);onError=new un(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=N0}=e;if(typeof Zone>"u")throw new Ue(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,cC(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(_m)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ue(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ue(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,oC,tu,tu);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},oC={};function xm(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function aC(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){ym(()=>{n.callbackScheduled=!1,Cp(n),n.isCheckStableRunning=!0,xm(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Cp(n)}function cC(n){let e=()=>{aC(n)},t=sC++;n._inner=n._inner.fork({name:"angular",properties:{[_m]:!0,[Va]:t,[Va+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(lC(c))return i.invokeTask(s,o,a,c);try{return W_(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),$_(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return W_(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!uC(c)&&e(),$_(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Cp(n),xm(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Cp(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function W_(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function $_(n){n._nesting--,xm(n)}var Ha=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new un;onMicrotaskEmpty=new un;onStable=new un;onError=new un;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function lC(n){return O0(n,"__ignore_ng_zone__")}function uC(n){return O0(n,"__scheduler_tick__")}function O0(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var ir=class{_console=console;handleError(e){this._console.error("ERROR",e)}},fi=new Ve("",{factory:()=>{let n=xe(Rn),e=xe(Ut),t;return i=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw i}):(t??=e.get(ir),t.handleError(i))})}}}),L0={provide:Es,useValue:()=>{let n=xe(ir,{optional:!0})},multi:!0},dC=new Ve("",{factory:()=>{let n=xe(Vt).defaultView;if(!n)return;let e=xe(fi),t=s=>{e(s.reason),s.preventDefault()},i=s=>{s.error?e(s.error):e(new Error(s.message,{cause:s})),s.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),xe(lr).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function Mm(){return To([t0(()=>{xe(dC)})])}function ur(n,e){let[t,i,r]=ep(n,e?.equal),s=t,o=s[jn];return s.set=i,s.update=r,s.asReadonly=k0.bind(s),s}function k0(){let n=this[jn];if(n.readonlyFn===void 0){let e=()=>this();e[jn]=n,n.readonlyFn=e}return n.readonlyFn}var wo=class{},Qa=new Ve("",{factory:()=>!0});var bm=new Ve("");var Sm=(()=>{class n{static \u0275prov=Be({token:n,providedIn:"root",factory:()=>new Dp})}return n})(),Dp=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}},Tp=class{[jn];constructor(e){this[jn]=e}destroy(){this[jn].destroy()}};function hi(n){return tp(n)}function cc(n){return{toString:n}.toString()}function MC(n){return typeof n=="function"}function fx(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Eu=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}},lc=(()=>{let n=()=>hx;return n.ngInherit=!0,n})();function hx(n){return n.type.prototype.ngOnChanges&&(n.setInput=SC),bC}function bC(){let n=mx(this),e=n?.current;if(e){let t=n.previous;if(t===Ss)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function SC(n,e,t,i,r){let s=this.declaredInputs[i],o=mx(n)||EC(n,{previous:Ss,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Eu(l&&l.currentValue,t,c===Ss),fx(n,e,r,t)}var px="__ngSimpleChanges__";function mx(n){return n[px]||null}function EC(n,e){return n[px]=e}var U0=[];var wt=function(n,e=null,t){for(let i=0;i<U0.length;i++){let r=U0[i];r(n,e,t)}},mt=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(mt||{});function wC(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=hx(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function gx(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function _u(n,e,t){vx(n,e,3,t)}function xu(n,e,t,i){(n[Xe]&3)===t&&vx(n,e,t,i)}function Em(n,e){let t=n[Xe];(t&3)===e&&(t&=16383,t+=1,n[Xe]=t)}function vx(n,e,t,i){let r=i!==void 0?n[Cs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Cs]+=65536),(a<s||s==-1)&&(CC(n,t,e,c),n[Cs]=(n[Cs]&4294901760)+c+2),c++}function B0(n,e){wt(mt.LifecycleHookStart,n,e);let t=We(null);try{e.call(n)}finally{We(t),wt(mt.LifecycleHookEnd,n,e)}}function CC(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Xe]>>14<n[Cs]>>16&&(n[Xe]&3)===e&&(n[Xe]+=16384,B0(a,s)):B0(a,s)}var Lo=-1,nc=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function DC(n){return(n.flags&8)!==0}function TC(n){return(n.flags&16)!==0}function AC(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];RC(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function IC(n){return n===3||n===4||n===6}function RC(n){return n.charCodeAt(0)===64}function Vu(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?V0(n,t,r,null,e[++i]):V0(n,t,r,null,null))}}return n}function V0(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function yx(n){return n!==Lo}function wu(n){return n&32767}function NC(n){return n>>16}function Cu(n,e){let t=NC(n),i=e;for(;t>0;)i=i[ws],t--;return i}var Rm=!0;function H0(n){let e=Rm;return Rm=n,e}var PC=256,_x=PC-1,xx=5,FC=0,Ni={};function OC(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(bs)&&(i=t[bs]),i==null&&(i=t[bs]=FC++);let r=i&_x,s=1<<r;e.data[n+(r>>xx)]|=s}function Mx(n,e){let t=bx(n,e);if(t!==-1)return t;let i=e[He];i.firstCreatePass&&(n.injectorIndex=e.length,wm(i.data,n),wm(e,null),wm(i.blueprint,null));let r=ig(n,e),s=n.injectorIndex;if(yx(r)){let o=wu(r),a=Cu(r,e),c=a[He].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function wm(n,e){n.push(0,0,0,0,0,0,0,0,e)}function bx(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function ig(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Dx(r),i===null)return Lo;if(t++,r=r[ws],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Lo}function LC(n,e,t){OC(n,e,t)}function Sx(n,e,t){if(t&8||n!==void 0)return n;ru(e,"NodeInjector")}function Ex(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[sr],s=In(void 0);try{return r?r.get(e,i,t&8):zp(e,i,t&8)}finally{In(s)}}return Sx(i,e,t)}function wx(n,e,t,i=0,r){if(n!==null){if(e[Xe]&2048&&!(i&2)){let o=VC(n,e,t,i,Ni);if(o!==Ni)return o}let s=Cx(n,e,t,i,Ni);if(s!==Ni)return s}return Ex(e,t,i,r)}function Cx(n,e,t,i,r){let s=UC(t);if(typeof s=="function"){if(!pm(e,n,i))return i&1?Sx(r,t,i):Ex(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&8))ru(t);else return o}finally{mm()}}else if(typeof s=="number"){let o=null,a=bx(n,e),c=Lo,l=i&1?e[Nn][qn]:null;for((a===-1||i&4)&&(c=a===-1?ig(n,e):e[a+8],c===Lo||!G0(i,!1)?a=-1:(o=e[He],a=wu(c),e=Cu(c,e)));a!==-1;){let u=e[He];if(z0(s,a,u.data)){let d=kC(a,e,t,o,i,l);if(d!==Ni)return d}c=e[a+8],c!==Lo&&G0(i,e[He].data[a+8]===l)&&z0(s,a,e)?(o=u,a=wu(c),e=Cu(c,e)):a=-1}}return r}function kC(n,e,t,i,r,s){let o=e[He],a=o.data[n+8],c=i==null?Or(a)&&Rm:i!=o&&(a.type&3)!==0,l=r&1&&s===a,u=Mu(a,o,t,c,l);return u!==null?Du(e,o,u,a,r):Ni}function Mu(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let v=o[h];if(h<c&&t===v||h>=c&&v.type===t)return h}if(r){let h=o[c];if(h&&As(h)&&h.type===t)return c}return null}function Du(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof nc){let a=s;if(a.resolving)throw Hp("");let c=H0(a.canSeeViewProviders);a.resolving=!0;let l=o[t].type||o[t],u,d=a.injectImpl?In(a.injectImpl):null,f=pm(n,i,0);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&wC(t,o[t],e)}finally{d!==null&&In(d),H0(c),a.resolving=!1,mm()}}return s}function UC(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(bs)?n[bs]:void 0;return typeof e=="number"?e>=0?e&_x:BC:e}function z0(n,e,t){let i=1<<n;return!!(t[e+(n>>xx)]&i)}function G0(n,e){return!(n&2)&&!(n&1&&e)}var Rs=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return wx(this._tNode,this._lView,e,_s(i),t)}};function BC(){return new Rs(Kn(),ut())}function uc(n){return cc(()=>{let e=n.prototype.constructor,t=e[Ua]||Nm(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Ua]||Nm(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Nm(n){return Rp(n)?()=>{let e=Nm(En(n));return e&&e()}:xs(n)}function VC(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Xe]&2048&&!No(o);){let a=Cx(s,o,t,i|2,Ni);if(a!==Ni)return a;let c=s.parent;if(!c){let l=o[Yp];if(l){let u=l.get(t,Ni,i);if(u!==Ni)return u}c=Dx(o),o=o[ws]}s=c}return r}function Dx(n){let e=n[He],t=e.type;return t===2?e.declTNode:t===1?n[qn]:null}function HC(){return Vo(Kn(),ut())}function Vo(n,e){return new ks(ui(n,e))}var ks=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=HC}return n})();function zC(n){return n instanceof ks?n.nativeElement:n}function GC(){return this._results[Symbol.iterator]()}var Tu=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Qt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=K_(e);(this._changesDetected=!J_(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=GC};function Tx(n){return(n.flags&128)===128}var rg=(function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n})(rg||{}),Ax=new Map,jC=0;function WC(){return jC++}function $C(n){Ax.set(n[ar],n)}function Pm(n){Ax.delete(n[ar])}var j0="__ngContext__";function ko(n,e){cr(e)?(n[j0]=e[ar],$C(e)):n[j0]=e}function Ix(n){return Nx(n[Ro])}function Rx(n){return Nx(n[$n])}function Nx(n){for(;n!==null&&!li(n);)n=n[$n];return n}var qC;function sg(n){qC=n}var Hu=new Ve("",{factory:()=>XC}),XC="ng";var zu=new Ve(""),dc=new Ve("",{providedIn:"platform",factory:()=>"unknown"});var Gu=new Ve("",{factory:()=>xe(Vt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Px="r";var Fx="di";var Ox=!1,Lx=new Ve("",{factory:()=>Ox});var YC=(n,e,t,i)=>{};function ZC(n,e,t,i){YC(n,e,t,i)}function og(n){return(n.flags&32)===32}var JC=()=>null;function kx(n,e,t=!1){return JC(n,e,t)}function Ux(n,e){let t=n.contentQueries;if(t!==null){let i=We(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];fu(s),a.contentQueries(2,e[o],o)}}}finally{We(i)}}}function Fm(n,e,t){fu(0);let i=We(null);try{e(n,t)}finally{We(i)}}function Bx(n,e,t){if(Jp(e)){let i=We(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{We(i)}}}var mi=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(mi||{});var Om=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ap})`}};function Vx(n){return n instanceof Om?n.changingThisBreaksApplicationSecurity:n}function KC(n,e){return n.createText(e)}function QC(n,e,t){n.setValue(e,t)}function Hx(n,e,t){return n.createElement(e,t)}function Au(n,e,t,i,r){n.insertBefore(e,t,i,r)}function zx(n,e,t){n.appendChild(e,t)}function W0(n,e,t,i,r){i!==null?Au(n,e,t,i,r):zx(n,e,t)}function Gx(n,e,t,i){n.removeChild(null,e,t,i)}function eD(n,e,t){n.setAttribute(e,"style",t)}function tD(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function jx(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&AC(n,e,i),r!==null&&tD(n,e,r),s!==null&&eD(n,e,s)}function Wx(n){return n instanceof Function?n():n}function nD(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var $x="ng-template";function iD(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&nD(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(ag(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function ag(n){return n.type===4&&n.value!==$x}function rD(n,e,t){let i=n.type===4&&!t?$x:n.value;return e===i}function sD(n,e,t){let i=4,r=n.attrs,s=r!==null?cD(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!pi(i)&&!pi(c))return!1;if(o&&pi(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!rD(n,c,t)||c===""&&e.length===1){if(pi(i))return!1;o=!0}}else if(i&8){if(r===null||!iD(n,r,c,t)){if(pi(i))return!1;o=!0}}else{let l=e[++a],u=oD(c,r,ag(n),t);if(u===-1){if(pi(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(pi(i))return!1;o=!0}}}}return pi(i)||o}function pi(n){return(n&1)===0}function oD(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return lD(e,n)}function aD(n,e,t=!1){for(let i=0;i<e.length;i++)if(sD(n,e[i],t))return!0;return!1}function cD(n){for(let e=0;e<n.length;e++){let t=n[e];if(IC(t))return e}return n.length}function lD(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function $0(n,e){return n?":not("+e.trim()+")":e}function uD(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!pi(o)&&(e+=$0(s,r),r=""),i=o,s=s||!pi(i);t++}return r!==""&&(e+=$0(s,r)),e}function dD(n){return n.map(uD).join(",")}function fD(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!pi(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Fi={};function cg(n,e,t,i,r,s,o,a,c,l,u){let d=$t+i,f=d+r,h=hD(d,f),v=typeof l=="function"?l():l;return h[He]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:v,incompleteFirstPass:!1,ssrId:u}}function hD(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Fi);return t}function pD(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=cg(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function lg(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ci]=r,d[Xe]=i|4|128|8|64|1024,(l!==null||n&&n[Xe]&2048)&&(d[Xe]|=2048),em(d),d[Bt]=d[ws]=n,d[Ft]=t,d[or]=o||n&&n[or],d[Ot]=a||n&&n[Ot],d[sr]=c||n&&n[sr]||null,d[qn]=s,d[ar]=WC(),d[Ao]=u,d[Yp]=l,d[Nn]=e.type==2?n[Nn]:d,d}function mD(n,e,t){let i=ui(e,n),r=pD(t),s=n[or].rendererFactory,o=ug(n,lg(n,r,null,qx(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function qx(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Xx(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function ug(n,e){return n[Ro]?n[Xp][$n]=e:n[Ro]=e,n[Xp]=e,e}function nn(n=1){Yx(_n(),ut(),Lr()+n,!1)}function Yx(n,e,t,i){if(!i)if((e[Xe]&3)===3){let s=n.preOrderCheckHooks;s!==null&&_u(e,s,t)}else{let s=n.preOrderHooks;s!==null&&xu(e,s,0,t)}kr(t)}var ju=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(ju||{});function Lm(n,e,t,i){let r=We(null);try{let[s,o,a]=n.inputs[t],c=null;(o&ju.SignalBased)!==0&&(c=e[s][jn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):fx(e,c,s,i)}finally{We(r)}}var Pi=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(Pi||{}),gD;function dg(n,e){return gD(n,e)}var Ns=new Set,fg=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(fg||{}),fc=new Ve(""),q0=new Set;function Us(n){q0.has(n)||(q0.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Zx=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Be({token:n,providedIn:"root",factory:()=>new n})}return n})();var hg=new Ve("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:xe(Ut)})});function Jx(n,e,t){let i=n.get(hg);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function vD(n,e){let t=n.get(hg);if(e.detachedLeaveAnimationFns){for(let i of e.detachedLeaveAnimationFns)t.queue.delete(i);e.detachedLeaveAnimationFns=void 0}}function yD(n,e){for(let[t,i]of e)Jx(n,i.animateFns)}function _D(n,e){let t=n.get(hg);if(Array.isArray(e))for(let i of e)t.queue.delete(i);else t.queue.delete(e)}function X0(n,e,t,i){let r=n?.[Ds]?.enter;e!==null&&r&&r.has(t.index)&&yD(i,r)}function Oo(n,e,t,i,r,s,o,a){if(r!=null){let c,l=!1;li(r)?c=r:cr(r)&&(l=!0,r=r[ci]);let u=Xn(r);n===0&&i!==null?(X0(a,i,s,t),o==null?zx(e,i,u):Au(e,i,u,o||null,!0)):n===1&&i!==null?(X0(a,i,s,t),Au(e,i,u,o||null,!0)):n===2?Y0(a,s,t,d=>{Gx(e,u,l,d)}):n===3&&Y0(a,s,t,()=>{e.destroyNode(u)}),c!=null&&ND(e,n,t,c,s,i,o)}}function xD(n,e){Kx(n,e),e[ci]=null,e[qn]=null}function MD(n,e,t,i,r,s){i[ci]=r,i[qn]=e,$u(n,i,t,1,r,s)}function Kx(n,e){e[or].changeDetectionScheduler?.notify(9),$u(n,e,e[Ot],2,null,null)}function bD(n){let e=n[Ro];if(!e)return Cm(n[He],n);for(;e;){let t=null;if(cr(e))t=e[Ro];else{let i=e[It];i&&(t=i)}if(!t){for(;e&&!e[$n]&&e!==n;)cr(e)&&Cm(e[He],e),e=e[Bt];e===null&&(e=n),cr(e)&&Cm(e[He],e),t=e&&e[$n]}e=t}}function pg(n,e){let t=n[Ts],i=t.indexOf(e);t.splice(i,1)}function Wu(n,e){if(Is(e))return;let t=e[Ot];t.destroyNode&&$u(n,e,t,3,null,null),bD(e)}function Cm(n,e){if(Is(e))return;let t=We(null);try{e[Xe]&=-129,e[Xe]|=256,e[Pn]&&Ia(e[Pn]),wD(n,e),ED(n,e),e[He].type===1&&e[Ot].destroy();let i=e[Pr];if(i!==null&&li(e[Bt])){i!==e[Bt]&&pg(i,e);let r=e[Ri];r!==null&&r.detachView(n)}Pm(e)}finally{We(t)}}function Y0(n,e,t,i){let r=n?.[Ds];if(r?.enter?.has(e.index)&&_D(t,r.enter.get(e.index).animateFns),r==null||r.leave==null||!r.leave.has(e.index))return i(!1);n&&Ns.add(n[ar]),Jx(t,()=>{if(r.leave&&r.leave.has(e.index)){let o=r.leave.get(e.index),a=[];if(o){for(let c=0;c<o.animateFns.length;c++){let l=o.animateFns[c],{promise:u}=l();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),SD(n,i)}else n&&Ns.delete(n[ar]),i(!1)},r)}function SD(n,e){let t=n[Ds]?.running;if(t){t.then(()=>{n[Ds].running=void 0,Ns.delete(n[ar]),e(!0)});return}e(!1)}function ED(n,e){let t=n.cleanup,i=e[Io];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Io]=null);let r=e[tr];if(r!==null){e[tr]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[qa];if(s!==null){e[qa]=null;for(let o of s)o.destroy()}}function wD(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof nc)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];wt(mt.LifecycleHookStart,a,c);try{c.call(a)}finally{wt(mt.LifecycleHookEnd,a,c)}}else{wt(mt.LifecycleHookStart,r,s);try{s.call(r)}finally{wt(mt.LifecycleHookEnd,r,s)}}}}}function CD(n,e,t){return DD(n,e.parent,t)}function DD(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[ci];if(Or(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===mi.None||r===mi.Emulated)return null}return ui(i,t)}function TD(n,e,t){return ID(n,e,t)}function AD(n,e,t){return n.type&40?ui(n,t):null}var ID=AD,Z0;function mg(n,e,t,i){let r=CD(n,i,e),s=e[Ot],o=i.parent||e[qn],a=TD(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)W0(s,r,t[c],a,!1);else W0(s,r,t,a,!1);Z0!==void 0&&Z0(s,i,e,t,r)}function ec(n,e){if(e!==null){let t=e.type;if(t&3)return ui(e,n);if(t&4)return km(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return ec(n,i);{let r=n[e.index];return li(r)?km(-1,r):Xn(r)}}else{if(t&128)return ec(n,e.next);if(t&32)return dg(e,n)()||Xn(n[e.index]);{let i=Qx(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Rr(n[Nn]);return ec(r,i)}else return ec(n,e.next)}}}return null}function Qx(n,e){if(e!==null){let i=n[Nn][qn],r=e.projection;return i.projection[r]}return null}function km(n,e){let t=It+n+1;if(t<e.length){let i=e[t],r=i[He].firstChild;if(r!==null)return ec(i,r)}return e[Fr]}function gg(n,e,t,i,r,s,o){for(;t!=null;){let a=i[sr];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(o&&e===0&&(c&&ko(Xn(c),i),t.flags|=2),!og(t))if(l&8)gg(n,e,t.child,i,r,s,!1),Oo(e,n,a,r,c,t,s,i);else if(l&32){let u=dg(t,i),d;for(;d=u();)Oo(e,n,a,r,d,t,s,i);Oo(e,n,a,r,c,t,s,i)}else l&16?RD(n,e,i,t,r,s):Oo(e,n,a,r,c,t,s,i);t=o?t.projectionNext:t.next}}function $u(n,e,t,i,r,s){gg(t,i,n.firstChild,e,r,s,!1)}function RD(n,e,t,i,r,s){let o=t[Nn],c=o[qn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Oo(e,n,t[sr],r,u,i,s,t)}else{let l=c,u=o[Bt];Tx(i)&&(l.flags|=128),gg(n,e,l,u,r,s,!0)}}function ND(n,e,t,i,r,s,o){let a=i[Fr],c=Xn(i);a!==c&&Oo(e,n,t,s,a,r,o);for(let l=It;l<i.length;l++){let u=i[l];$u(u[He],u,n,e,s,a)}}function PD(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Pi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Pi.Important),n.setStyle(t,i,r,s))}}function eM(n,e,t,i,r){let s=Lr(),o=i&2;try{kr(-1),o&&e.length>$t&&Yx(n,e,$t,!1);let a=o?mt.TemplateUpdateStart:mt.TemplateCreateStart;wt(a,r,t),t(i,r)}finally{kr(s);let a=o?mt.TemplateUpdateEnd:mt.TemplateCreateEnd;wt(a,r,t)}}function vg(n,e,t){HD(n,e,t),(t.flags&64)===64&&zD(n,e,t)}function qu(n,e,t=ui){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function FD(n,e,t,i){let s=i.get(Lx,Ox)||t===mi.ShadowDom||t===mi.ExperimentalIsolatedShadowDom,o=n.selectRootElement(e,s);return OD(o),o}function OD(n){LD(n)}var LD=()=>null;function kD(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function UD(n,e,t,i,r,s){let o=e[He];if(yg(n,o,e,t,i)){Or(n)&&VD(e,n.index);return}n.type&3&&(t=kD(t)),BD(n,e,t,i,r,s)}function BD(n,e,t,i,r,s){if(n.type&3){let o=ui(n,e);i=s!=null?s(i,n.value||"",t):i,r.setProperty(o,t,i)}else n.type&12}function VD(n,e){let t=di(e,n);t[Xe]&16||(t[Xe]|=64)}function HD(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Or(t)&&mD(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||Mx(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Du(e,n,o,t);if(ko(c,e),s!==null&&$D(e,o-i,c,a,t,s),As(a)){let l=di(t.index,e);l[Ft]=Du(e,n,o,t)}}}function zD(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=E0();try{kr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];du(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&GD(c,l)}}finally{kr(-1),du(o)}}function GD(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function tM(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];aD(e,s.selectors,!1)&&(i??=[],As(s)?i.unshift(s):i.push(s))}return i}function jD(n,e,t,i,r,s){let o=ui(n,e);WD(e[Ot],o,s,n.value,t,i,r)}function WD(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?Vp(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function $D(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Lm(i,t,c,l)}}function nM(n,e,t,i,r){let s=$t+t,o=e[He],a=r(o,e,n,i,t);e[s]=a,Po(n,!0);let c=n.type===2;return c?(jx(e[Ot],a,n),(p0()===0||Ya(n))&&ko(a,e),m0()):ko(a,e),gu()&&(!c||!og(n))&&mg(o,e,a,n),n}function iM(n){let e=n;return um()?y0():(e=e.parent,Po(e,!1)),e}function qD(n,e){let t=n[sr];if(!t)return;let i;try{i=t.get(fi,null)}catch{i=null}i?.(e)}function yg(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Lm(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Lm(u,l,i,r),a=!0}return a}function XD(n,e){let t=di(e,n),i=t[He];YD(i,t);let r=t[ci];r!==null&&t[Ao]===null&&(t[Ao]=kx(r,t[sr])),wt(mt.ComponentStart);try{_g(i,t,t[Ft])}finally{wt(mt.ComponentEnd,t[Ft])}}function YD(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function _g(n,e,t){hu(e);try{let i=n.viewQuery;i!==null&&Fm(1,i,t);let r=n.template;r!==null&&eM(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Ri]?.finishViewCreation(n),n.staticContentQueries&&Ux(n,e),n.staticViewQueries&&Fm(2,n.viewQuery,t);let s=n.components;s!==null&&ZD(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Xe]&=-5,pu()}}function ZD(n,e){for(let t=0;t<e.length;t++)XD(n,e[t])}function Xu(n,e,t,i){let r=We(null);try{let s=e.tView,a=n[Xe]&4096?4096:16,c=lg(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Pr]=l;let u=n[Ri];return u!==null&&(c[Ri]=u.createEmbeddedView(s)),_g(s,c,t),c}finally{We(r)}}function ic(n,e){return!e||e.firstChild===null||Tx(n)}function rc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Xn(s)),li(s)&&rM(s,i);let o=t.type;if(o&8)rc(n,e,t.child,i);else if(o&32){let a=dg(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Qx(e,t);if(Array.isArray(a))i.push(...a);else{let c=Rr(e[Nn]);rc(c[He],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function rM(n,e){for(let t=It;t<n.length;t++){let i=n[t],r=i[He].firstChild;r!==null&&rc(i[He],i,r,e)}n[Fr]!==n[ci]&&e.push(n[Fr])}function sM(n){if(n[cu]!==null){for(let e of n[cu])e.impl.addSequence(e);n[cu].length=0}}var oM=[];function JD(n){return n[Pn]??KD(n)}function KD(n){let e=oM.pop()??Object.create(eT);return e.lView=n,e}function QD(n){n.lView[Pn]!==n&&(n.lView=null,oM.push(n))}var eT=Dt(Ae({},wl),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Ka(n.lView)},consumerOnSignalRead(){this.lView[Pn]=this}});function tT(n){let e=n[Pn]??Object.create(nT);return e.lView=n,e}var nT=Dt(Ae({},wl),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Rr(n.lView);for(;e&&!aM(e[He]);)e=Rr(e);e&&tm(e)},consumerOnSignalRead(){this.lView[Pn]=this}});function aM(n){return n.type!==2}function cM(n){if(n[qa]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[qa])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Xe]&8192)}}var iT=100;function lM(n,e=0){let i=n[or].rendererFactory,r=!1;r||i.begin?.();try{rT(n,e)}finally{r||i.end?.()}}function rT(n,e){let t=dm();try{fm(!0),Um(n,e);let i=0;for(;Ja(n);){if(i===iT)throw new Ue(103,!1);i++,Um(n,1)}}finally{fm(t)}}function sT(n,e,t,i){if(Is(e))return;let r=e[Xe],s=!1,o=!1;hu(e);let a=!0,c=null,l=null;s||(aM(n)?(l=JD(e),c=Dl(l)):El()===null?(a=!1,l=tT(e),c=Dl(l)):e[Pn]&&(Ia(e[Pn]),e[Pn]=null));try{em(e),x0(n.bindingStartIndex),t!==null&&eM(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&_u(e,h,null)}else{let h=n.preOrderHooks;h!==null&&xu(e,h,0,null),Em(e,0)}if(o||oT(e),cM(e),uM(e,0),n.contentQueries!==null&&Ux(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&_u(e,h)}else{let h=n.contentHooks;h!==null&&xu(e,h,1),Em(e,1)}cT(n,e);let d=n.components;d!==null&&fM(e,d,0);let f=n.viewQuery;if(f!==null&&Fm(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&_u(e,h)}else{let h=n.viewHooks;h!==null&&xu(e,h,2),Em(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[au]){for(let h of e[au])h();e[au]=null}s||(sM(e),e[Xe]&=-73)}catch(u){throw s||Ka(e),u}finally{l!==null&&(Jh(l,c),a&&QD(l)),pu()}}function uM(n,e){for(let t=Ix(n);t!==null;t=Rx(t))for(let i=It;i<t.length;i++){let r=t[i];dM(r,e)}}function oT(n){for(let e=Ix(n);e!==null;e=Rx(e)){if(!(e[Xe]&2))continue;let t=e[Ts];for(let i=0;i<t.length;i++){let r=t[i];tm(r)}}}function aT(n,e,t){wt(mt.ComponentStart);let i=di(e,n);try{dM(i,t)}finally{wt(mt.ComponentEnd,i[Ft])}}function dM(n,e){lu(n)&&Um(n,e)}function Um(n,e){let i=n[He],r=n[Xe],s=n[Pn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Tl(s)),o||=!1,s&&(s.dirty=!1),n[Xe]&=-9217,o)sT(i,n,i.template,n[Ft]);else if(r&8192){let a=We(null);try{cM(n),uM(n,1);let c=i.components;c!==null&&fM(n,c,1),sM(n)}finally{We(a)}}}function fM(n,e,t){for(let i=0;i<e.length;i++)aT(n,e[i],t)}function cT(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)kr(~r);else{let s=r,o=t[++i],a=t[++i];S0(o,s);let c=e[s];wt(mt.HostBindingsUpdateStart,c);try{a(2,c)}finally{wt(mt.HostBindingsUpdateEnd,c)}}}}finally{kr(-1)}}function xg(n,e){let t=dm()?64:1088;for(n[or].changeDetectionScheduler?.notify(e);n;){n[Xe]|=t;let i=Rr(n);if(No(n)&&!i)return n;n=i}return null}function hM(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function pM(n,e){let t=It+e;if(t<n.length)return n[t]}function Yu(n,e,t,i=!0){let r=e[He];if(lT(r,e,n,t),i){let o=km(t,n),a=e[Ot],c=a.parentNode(n[Fr]);c!==null&&MD(r,n[qn],a,e,c,o)}let s=e[Ao];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function mM(n,e){let t=sc(n,e);return t!==void 0&&Wu(t[He],t),t}function sc(n,e){if(n.length<=It)return;let t=It+e,i=n[t];if(i){let r=i[Pr];r!==null&&r!==n&&pg(r,i),e>0&&(n[t-1][$n]=i[$n]);let s=ja(n,It+e);xD(i[He],i);let o=s[Ri];o!==null&&o.detachView(s[He]),i[Bt]=null,i[$n]=null,i[Xe]&=-129}return i}function lT(n,e,t,i){let r=It+i,s=t.length;i>0&&(t[r-1][$n]=e),i<s-It?(e[$n]=t[r],Gp(t,It+i,e)):(t.push(e),e[$n]=null),e[Bt]=t;let o=e[Pr];o!==null&&t!==o&&gM(o,e);let a=e[Ri];a!==null&&a.insertView(n),uu(e),e[Xe]|=128}function gM(n,e){let t=n[Ts],i=e[Bt];if(cr(i))n[Xe]|=2;else{let r=i[Bt][Nn];e[Nn]!==r&&(n[Xe]|=2)}t===null?n[Ts]=[e]:t.push(e)}var Br=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[He];return rc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[Ft]}set context(e){this._lView[Ft]=e}get destroyed(){return Is(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Bt];if(li(e)){let t=e[Xa],i=t?t.indexOf(this):-1;i>-1&&(sc(e,i),ja(t,i))}this._attachedToViewContainer=!1}Wu(this._lView[He],this._lView)}onDestroy(e){nm(this._lView,e)}markForCheck(){xg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Xe]&=-129}reattach(){uu(this._lView),this._lView[Xe]|=128}detectChanges(){this._lView[Xe]|=1024,lM(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ue(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=No(this._lView),t=this._lView[Pr];t!==null&&!e&&pg(t,this._lView),Kx(this._lView[He],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ue(902,!1);this._appRef=e;let t=No(this._lView),i=this._lView[Pr];i!==null&&!t&&gM(i,this._lView),uu(this._lView)}};var Ps=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=uT;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let s=Xu(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Br(s)}}return n})();function uT(){return Mg(Kn(),ut())}function Mg(n,e){return n.type&4?new Ps(e,n,Vo(n,e)):null}function hc(n,e,t,i,r){let s=n.data[e];if(s===null)s=dT(n,e,t,i,r),b0()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=v0();s.injectorIndex=o===null?-1:o.injectorIndex}return Po(s,!0),s}function dT(n,e,t,i,r){let s=lm(),o=um(),a=o?s:s&&s.parent,c=n.data[e]=hT(n,a,t,e,i,r);return fT(n,c,s,o),c}function fT(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function hT(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return g0()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,fieldIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function pT(n){let e=n[Zp]??[],i=n[Bt][Ot],r=[];for(let s of e)s.data[Fx]!==void 0?r.push(s):mT(s,i);n[Zp]=r}function mT(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[Px];for(;t<r;){let s=i.nextSibling;Gx(e,i,!1),i=s,t++}}}var gT=()=>null,vT=()=>null;function Bm(n,e){return gT(n,e)}function vM(n,e,t){return vT(n,e,t)}var yM=class{},Zu=class{},Vm=class{resolveComponentFactory(e){throw new Ue(917,!1)}},pc=class{static NULL=new Vm},Fs=class{};var _M=(()=>{class n{static \u0275prov=Be({token:n,providedIn:"root",factory:()=>null})}return n})();var bu={},Hm=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,bu,i);return r!==bu||t===bu?r:this.parentInjector.get(e,t,i)}};function Iu(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Ip(r,a);else if(s==2){let c=a,l=e[++o];i=Ip(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Qn(n,e=0){let t=ut();if(t===null)return Qe(n,e);let i=Kn();return wx(i,t,En(n),e)}function xM(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a=o,c=null,l=null;for(let u of o)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(o);break}xT(n,e,t,a,s,c,l)}s!==null&&i!==null&&yT(t,i,s)}function yT(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ue(-301,!1);i.push(e[r],s)}}function _T(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function xT(n,e,t,i,r,s,o){let a=i.length,c=null;for(let f=0;f<a;f++){let h=i[f];c===null&&As(h)&&(c=h,_T(n,t,f)),LC(Mx(t,e),n,h.type)}CT(t,n.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=Xx(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=Vu(t.mergedAttrs,h.hostAttrs),bT(n,t,e,d,h),wT(d,h,r),o!==null&&o.has(h)){let[x,g]=o.get(h);t.directiveToIndex.set(h.type,[d,x+t.directiveStart,g+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let v=h.type.prototype;!l&&(v.ngOnChanges||v.ngOnInit||v.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(v.ngOnChanges||v.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}MT(n,t,s)}function MT(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))J0(0,e,r,i),J0(1,e,r,i),Q0(e,i,!1);else{let s=t.get(r);K0(0,e,s,i),K0(1,e,s,i),Q0(e,i,!0)}}}function J0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),MM(e,s)}}function K0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),MM(e,o)}}function MM(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function Q0(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||ag(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function bT(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=xs(r.type,!0)),o=new nc(s,As(r),Qn,null);n.blueprint[i]=o,t[i]=o,ST(n,e,i,Xx(n,t,r.hostVars,Fi),r)}function ST(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;ET(o)!=a&&o.push(a),o.push(t,i,s)}}function ET(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function wT(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;As(e)&&(t[""]=n)}}function CT(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function bM(n,e,t,i,r,s,o,a){let c=e[He],l=c.consts,u=Yn(l,o),d=hc(c,n,t,i,u);return s&&xM(c,e,d,Yn(l,a),r),d.mergedAttrs=Vu(d.mergedAttrs,d.attrs),d.attrs!==null&&Iu(d,d.attrs,!1),d.mergedAttrs!==null&&Iu(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function SM(n,e){gx(n,e),Jp(e)&&n.queries.elementEnd(e)}function DT(n,e,t,i,r,s){let o=e.consts,a=Yn(o,r),c=hc(e,n,t,i,a);if(c.mergedAttrs=Vu(c.mergedAttrs,c.attrs),s!=null){let l=Yn(o,s);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&Iu(c,c.attrs,!1),c.mergedAttrs!==null&&Iu(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function TT(n,e,t){return n[e]=t}function AT(n,e){return n[e]}function Ho(n,e,t){if(t===Fi)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Su(n,e,t){return function i(r){let s=Or(n)?di(n.index,e):e;xg(s,5);let o=e[Ft],a=ex(e,o,t,r),c=i.__ngNextListenerFn__;for(;c;)a=ex(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function ex(n,e,t,i){let r=We(null);try{return wt(mt.OutputStart,e,t),t(i)!==!1}catch(s){return qD(n,s),!1}finally{wt(mt.OutputEnd,e,t),We(r)}}function EM(n,e,t,i,r,s,o,a){let c=Ya(n),l=!1,u=null;if(!i&&c&&(u=RT(e,t,s,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=o,u.__ngLastListenerFn__=o,l=!0}else{let d=ui(n,t),f=i?i(d):d;ZC(t,f,s,a);let h=r.listen(f,s,a);if(!IT(s)){let v=i?x=>i(Xn(x[n.index])):n.index;wM(v,e,t,s,a,h,!1)}}return l}function IT(n){return n.startsWith("animation")||n.startsWith("transition")}function RT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Io],c=r[s+2];return a&&a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function wM(n,e,t,i,r,s,o){let a=e.firstCreatePass?rm(e):null,c=im(t),l=c.length;c.push(r,s),a&&a.push(i,n,l,(l+1)*(o?-1:1))}function tx(n,e,t,i,r,s){let o=e[t],a=e[He],l=a.data[t].outputs[i],d=o[l].subscribe(s);wM(n.index,a,e,r,s,d,!0)}var zm=Symbol("BINDING");var Ru=class extends pc{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Nr(e);return new Uo(t,this.ngModule)}};function NT(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&ju.SignalBased)!==0};return r&&(s.transform=r),s})}function PT(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function FT(n,e,t){let i=e instanceof Ut?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Hm(t,i):t}function OT(n){let e=n.get(Fs,null);if(e===null)throw new Ue(407,!1);let t=n.get(_M,null),i=n.get(wo,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1}}function LT(n,e){let t=CM(n);return Hx(e,t,t==="svg"?Kp:t==="math"?c0:null)}function CM(n){return(n.selectors[0][0]||"div").toLowerCase()}var Uo=class extends Zu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=NT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=PT(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=dD(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,s,o){wt(mt.DynamicComponentStart);let a=We(null);try{let c=this.componentDef,l=kT(i,c,o,s),u=FT(c,r||this.ngModule,e),d=OT(u),f=d.rendererFactory.createRenderer(null,c),h=i?FD(f,i,c.encapsulation,u):LT(c,f),v=o?.some(nx)||s?.some(p=>typeof p!="function"&&p.bindings.some(nx)),x=lg(null,l,null,512|qx(c),null,null,d,f,u,null,kx(h,u,!0));x[$t]=h,hu(x);let g=null;try{let p=bM($t,x,2,"#host",()=>l.directiveRegistry,!0,0);jx(f,h,p),ko(h,x),vg(l,x,p),Bx(l,p,x),SM(l,p),t!==void 0&&BT(p,this.ngContentSelectors,t),g=di(p.index,x),x[Ft]=g[Ft],_g(l,x,null)}catch(p){throw g!==null&&Pm(g),Pm(x),p}finally{wt(mt.DynamicComponentEnd),pu()}return new Nu(this.componentType,x,!!v)}finally{We(a)}}};function kT(n,e,t,i){let r=n?["ng-version","21.1.5"]:fD(e.selectors[0]),s=null,o=null,a=0;if(t)for(let u of t)a+=u[zm].requiredVars,u.create&&(u.targetIdx=0,(s??=[]).push(u)),u.update&&(u.targetIdx=0,(o??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[zm].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(s??=[]).push(f)),f.update&&(f.targetIdx=h,(o??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=Bp(d);c.push(f)}return cg(0,null,UT(s,o),1,a,c,null,null,null,[r],null)}function UT(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function nx(n){let e=n[zm].kind;return e==="input"||e==="twoWay"}var Nu=class extends yM{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Za(t[He],$t),this.location=Vo(this._tNode,t),this.instance=di(this._tNode.index,t)[Ft],this.hostView=this.changeDetectorRef=new Br(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=yg(i,r[He],r,e,t);this.previousInputValues.set(e,t);let o=di(i.index,r);xg(o,1)}get injector(){return new Rs(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function BT(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Vr=(()=>{class n{static __NG_ELEMENT_ID__=VT}return n})();function VT(){let n=Kn();return TM(n,ut())}var HT=Vr,DM=class extends HT{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Vo(this._hostTNode,this._hostLView)}get injector(){return new Rs(this._hostTNode,this._hostLView)}get parentInjector(){let e=ig(this._hostTNode,this._hostLView);if(yx(e)){let t=Cu(e,this._hostLView),i=wu(e),r=t[He].data[i+8];return new Rs(r,t)}else return new Rs(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=ix(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-It}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Bm(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,ic(this._hostTNode,o)),a}createComponent(e,t,i,r,s,o,a){let c=e&&!MC(e),l;if(c)l=t;else{let g=t||{};l=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef,o=g.directives,a=g.bindings}let u=c?e:new Uo(Nr(e)),d=i||this.parentInjector;if(!s&&u.ngModule==null){let p=(c?d:this.parentInjector).get(Ut,null);p&&(s=p)}let f=Nr(u.componentType??{}),h=Bm(this._lContainer,f?.id??null),v=h?.firstChild??null,x=u.create(d,r,v,s,o,a);return this.insertImpl(x.hostView,l,ic(this._hostTNode,h)),x}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(u0(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Bt],l=new DM(c,c[qn],c[Bt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Yu(o,r,s,i),e.attachToViewContainerRef(),Gp(Dm(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=ix(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=sc(this._lContainer,t);i&&(ja(Dm(this._lContainer),t),Wu(i[He],i))}detach(e){let t=this._adjustIndex(e,-1),i=sc(this._lContainer,t);return i&&ja(Dm(this._lContainer),t)!=null?new Br(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function ix(n){return n[Xa]}function Dm(n){return n[Xa]||(n[Xa]=[])}function TM(n,e){let t,i=e[n.index];return li(i)?t=i:(t=hM(i,e,null,n),e[n.index]=t,ug(e,t)),GT(t,e,n,i),new DM(t,n,e)}function zT(n,e){let t=n[Ot],i=t.createComment(""),r=ui(e,n),s=t.parentNode(r);return Au(t,s,i,t.nextSibling(r),!1),i}var GT=$T,jT=()=>!1;function WT(n,e,t){return jT(n,e,t)}function $T(n,e,t,i){if(n[Fr])return;let r;t.type&8?r=Xn(i):r=zT(e,t),n[Fr]=r}var Gm=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},jm=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)bg(e,t).matches!==null&&this.queries[t].setDirty()}},Wm=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=eA(e):this.predicate=e}},$m=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},qm=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,qT(t,s)),this.matchTNodeWithReadOption(e,t,Mu(t,e,s,!1,!1))}else i===Ps?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Mu(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===ks||r===Vr||r===Ps&&t.type&4)this.addMatch(t.index,-2);else{let s=Mu(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function qT(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function XT(n,e){return n.type&11?Vo(n,e):n.type&4?Mg(n,e):null}function YT(n,e,t,i){return t===-1?XT(e,n):t===-2?ZT(n,e,i):Du(n,n[He],t,e)}function ZT(n,e,t){if(t===ks)return Vo(e,n);if(t===Ps)return Mg(e,n);if(t===Vr)return TM(e,n)}function AM(n,e,t,i){let r=e[Ri].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(YT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Xm(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=AM(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=It;d<u.length;d++){let f=u[d];f[Pr]===f[Bt]&&Xm(f[He],f,l,i)}if(u[Ts]!==null){let d=u[Ts];for(let f=0;f<d.length;f++){let h=d[f];Xm(h[He],h,l,i)}}}}}return i}function JT(n,e){return n[Ri].queries[e].queryList}function KT(n,e,t){let i=new Tu((t&4)===4);return h0(n,e,i,i.destroy),(e[Ri]??=new jm).queries.push(new Gm(i))-1}function QT(n,e,t){let i=_n();return i.firstCreatePass&&(tA(i,new Wm(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),KT(i,ut(),e)}function eA(n){return n.split(",").map(e=>e.trim())}function tA(n,e,t){n.queries===null&&(n.queries=new $m),n.queries.track(new qm(e,t))}function bg(n,e){return n.queries.getByIndex(e)}function nA(n,e){let t=n[He],i=bg(t,e);return i.crossesNgTemplate?Xm(t,n,e,[]):AM(t,n,i,e)}var Os=class{},Ju=class{};var Pu=class extends Os{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Ru(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Up(e);this._bootstrapComponents=Wx(s.bootstrap),this._r3Injector=vm(e,t,[{provide:Os,useValue:this},{provide:pc,useValue:this.componentFactoryResolver},...i],nr(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Fu=class extends Ju{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Pu(this.moduleType,e,[])}};var oc=class extends Os{injector;componentFactoryResolver=new Ru(this);instance=null;constructor(e){super();let t=new Ms([...e.providers,{provide:Os,useValue:this},{provide:pc,useValue:this.componentFactoryResolver}],e.parent||$a(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function mc(n,e,t=null){return new oc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var iA=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=$p(!1,t.type),r=i.length>0?mc([i],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Be({token:n,providedIn:"environment",factory:()=>new n(Qe(Ut))})}return n})();function gi(n){return cc(()=>{let e=IM(n),t=Dt(Ae({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===rg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(iA).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||mi.Emulated,styles:n.styles||Wn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Us("NgStandalone"),RM(t);let i=n.dependencies;return t.directiveDefs=rx(i,rA),t.pipeDefs=rx(i,q_),t.id=aA(t),t})}function rA(n){return Nr(n)||Bp(n)}function Hr(n){return cc(()=>({type:n.type,bootstrap:n.bootstrap||Wn,declarations:n.declarations||Wn,imports:n.imports||Wn,exports:n.exports||Wn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function sA(n,e){if(n==null)return Ss;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=ju.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function oA(n){if(n==null)return Ss;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function zo(n){return cc(()=>{let e=IM(n);return RM(e),e})}function IM(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Ss,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Wn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:sA(n.inputs,e),outputs:oA(n.outputs),debugInfo:null}}function RM(n){n.features?.forEach(e=>e(n))}function rx(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let s=e(r);s!==null&&i.push(s)}return i}:null}function aA(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function NM(n,e,t,i,r,s,o,a){if(t.firstCreatePass){n.mergedAttrs=Vu(n.mergedAttrs,n.attrs);let u=n.tView=cg(2,n,r,s,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),Po(n,!1);let c=lA(t,e,n,i);gu()&&mg(t,e,c,n),ko(c,e);let l=hM(c,e,c,n);e[i+$t]=l,ug(e,l),WT(l,n,e)}function cA(n,e,t,i,r,s,o,a,c,l,u){let d=t+$t,f;return e.firstCreatePass?(f=hc(e,d,4,o||null,a||null),om()&&xM(e,n,f,Yn(e.consts,l),tM),gx(e,f)):f=e.data[d],NM(f,n,e,t,i,r,s,c),Ya(f)&&vg(e,n,f),l!=null&&qu(n,f,u),f}function Ou(n,e,t,i,r,s,o,a,c,l,u){let d=t+$t,f;if(e.firstCreatePass){if(f=hc(e,d,4,o||null,a||null),l!=null){let h=Yn(e.consts,l);f.localNames=[];for(let v=0;v<h.length;v+=2)f.localNames.push(h[v],-1)}}else f=e.data[d];return NM(f,n,e,t,i,r,s,c),l!=null&&qu(n,f,u),f}function Ku(n,e,t,i,r,s,o,a){let c=ut(),l=_n(),u=Yn(l.consts,s);return cA(c,l,n,e,t,i,r,u,void 0,o,a),Ku}var lA=uA;function uA(n,e,t,i){return vu(!0),e[Ot].createComment("")}var Sg=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var Eg=new Ve("");function Bs(n){return!!n&&typeof n.then=="function"}function wg(n){return!!n&&typeof n.subscribe=="function"}var PM=new Ve("");var Cg=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=xe(PM,{optional:!0})??[];injector=xe(ai);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=dn(this.injector,r);if(Bs(s))t.push(s);else if(wg(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qu=new Ve("");function FM(){Qh(()=>{let n="";throw new Ue(600,n)})}function OM(n){return n.isBoundToModule}var dA=10;var Vs=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=xe(fi);afterRenderManager=xe(Zx);zonelessEnabled=xe(Qa);rootEffectScheduler=xe(Sm);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new Qt;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=xe(Ur);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(At(t=>!t))}constructor(){xe(fc,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=xe(Ut);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=ai.NULL){return this._injector.get(Rn).run(()=>{wt(mt.BootstrapComponentStart);let o=t instanceof Zu;if(!this._injector.get(Cg).done){let v="";throw new Ue(405,v)}let c;o?c=t:c=this._injector.get(pc).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=OM(c)?void 0:this._injector.get(Os),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(Eg,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),tc(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),wt(mt.BootstrapComponentEnd,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){wt(mt.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(fg.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw wt(mt.ChangeDetectionEnd),new Ue(101,!1);let t=We(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,We(t),this.afterTick.next(),wt(mt.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Fs,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<dA;){wt(mt.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{wt(mt.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Ja(r))continue;let s=i&&!this.zonelessEnabled?0:1;lM(r,s),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Ja(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;tc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(Qu,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>tc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ue(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function tc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Oi(n,e,t,i){let r=ut(),s=Fo();if(Ho(r,s,e)){let o=_n(),a=gm();jD(a,r,n,e,t,i)}return Oi}var nz=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Ym=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function Tm(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function fA(n,e,t,i){let r,s,o=0,a=n.length-1,c=void 0;if(Array.isArray(e)){We(i);let l=e.length-1;for(We(null);o<=a&&o<=l;){let u=n.at(o),d=e[o],f=Tm(o,u,o,d,t);if(f!==0){f<0&&n.updateValue(o,d),o++;continue}let h=n.at(a),v=e[l],x=Tm(a,h,l,v,t);if(x!==0){x<0&&n.updateValue(a,v),a--,l--;continue}let g=t(o,u),p=t(a,h),b=t(o,d);if(Object.is(b,p)){let C=t(l,v);Object.is(C,g)?(n.swap(o,a),n.updateValue(a,v),l--,a--):n.move(a,o),n.updateValue(o,d),o++;continue}if(r??=new Lu,s??=ox(n,o,a,t),Zm(n,r,o,b))n.updateValue(o,d),o++,a++;else if(s.has(b))r.set(g,n.detach(o)),a--;else{let C=n.create(o,e[o]);n.attach(o,C),o++,a++}}for(;o<=l;)sx(n,r,t,o,e[o]),o++}else if(e!=null){We(i);let l=e[Symbol.iterator]();We(null);let u=l.next();for(;!u.done&&o<=a;){let d=n.at(o),f=u.value,h=Tm(o,d,o,f,t);if(h!==0)h<0&&n.updateValue(o,f),o++,u=l.next();else{r??=new Lu,s??=ox(n,o,a,t);let v=t(o,f);if(Zm(n,r,o,v))n.updateValue(o,f),o++,a++,u=l.next();else if(!s.has(v))n.attach(o,n.create(o,f)),o++,a++,u=l.next();else{let x=t(o,d);r.set(x,n.detach(o)),a--}}}for(;!u.done;)sx(n,r,t,n.length,u.value),u=l.next()}for(;o<=a;)n.destroy(n.detach(a--));r?.forEach(l=>{n.destroy(l)})}function Zm(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function sx(n,e,t,i,r){if(Zm(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function ox(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var Lu=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function Dg(n,e,t,i,r,s,o,a){Us("NgControlFlow");let c=ut(),l=_n(),u=Yn(l.consts,s);return Ou(c,l,n,e,t,i,r,u,256,o,a),Tg}function Tg(n,e,t,i,r,s,o,a){Us("NgControlFlow");let c=ut(),l=_n(),u=Yn(l.consts,s);return Ou(c,l,n,e,t,i,r,u,512,o,a),Tg}function Ag(n,e){Us("NgControlFlow");let t=ut(),i=Fo(),r=t[i]!==Fi?t[i]:-1,s=r!==-1?ku(t,$t+r):void 0,o=0;if(Ho(t,i,n)){let a=We(null);try{if(s!==void 0&&mM(s,o),n!==-1){let c=$t+n,l=ku(t,c),u=eg(t[He],c),d=vM(l,u,t),f=Xu(t,u,e,{dehydratedView:d});Yu(l,f,o,ic(u,d))}}finally{We(a)}}else if(s!==void 0){let a=pM(s,o);a!==void 0&&(a[Ft]=e)}}var Jm=class{lContainer;$implicit;$index;constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-It}};function gc(n){return n}var Km=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function vc(n,e,t,i,r,s,o,a,c,l,u,d,f){Us("NgControlFlow");let h=ut(),v=_n(),x=c!==void 0,g=ut(),p=a?o.bind(g[Nn][Ft]):o,b=new Km(x,p);g[$t+n]=b,Ou(h,v,n+1,e,t,i,r,Yn(v.consts,s),256),x&&Ou(h,v,n+2,c,l,u,d,Yn(v.consts,f),512)}var Qm=class extends Ym{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i}get length(){return this.lContainer.length-It}at(e){return this.getLView(e)[Ft].$implicit}attach(e,t){let i=t[Ao];this.needsIndexUpdate||=e!==this.length,Yu(this.lContainer,t,e,ic(this.templateTNode,i)),hA(this.lContainer,e)}detach(e){return this.needsIndexUpdate||=e!==this.length-1,pA(this.lContainer,e),mA(this.lContainer,e)}create(e,t){let i=Bm(this.lContainer,this.templateTNode.tView.ssrId);return Xu(this.hostLView,this.templateTNode,new Jm(this.lContainer,t,e),{dehydratedView:i})}destroy(e){Wu(e[He],e)}updateValue(e,t){this.getLView(e)[Ft].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Ft].$index=e}getLView(e){return gA(this.lContainer,e)}};function yc(n){let e=We(null),t=Lr();try{let i=ut(),r=i[He],s=i[t],o=t+1,a=ku(i,o);if(s.liveCollection===void 0){let l=eg(r,o);s.liveCollection=new Qm(a,i,l)}else s.liveCollection.reset();let c=s.liveCollection;if(fA(c,n,s.trackByFn,e),c.updateIndexes(),s.hasEmptyBlock){let l=Fo(),u=c.length===0;if(Ho(i,l,u)){let d=t+2,f=ku(i,d);if(u){let h=eg(r,d),v=vM(f,h,i),x=Xu(i,h,void 0,{dehydratedView:v});Yu(f,x,0,ic(h,v))}else r.firstUpdatePass&&pT(f),mM(f,0)}}}finally{We(e)}}function ku(n,e){return n[e]}function hA(n,e){if(n.length<=It)return;let t=It+e,i=n[t],r=i?i[Ds]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let s=i[sr];vD(s,r),Ns.delete(i[ar]),r.detachedLeaveAnimationFns=void 0}}function pA(n,e){if(n.length<=It)return;let t=It+e,i=n[t],r=i?i[Ds]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function mA(n,e){return sc(n,e)}function gA(n,e){return pM(n,e)}function eg(n,e){return Za(n,e)}function Go(n,e,t){let i=ut(),r=Fo();if(Ho(i,r,e)){let s=_n(),o=gm();UD(o,i,n,e,i[Ot],t)}return Go}function ax(n,e,t,i,r){yg(e,n,t,r?"class":"style",i)}function Hs(n,e,t,i){let r=ut(),s=r[He],o=n+$t,a=s.firstCreatePass?bM(o,r,2,e,tM,om(),t,i):s.data[o];if(nM(a,r,n,e,LM),Ya(a)){let c=r[He];vg(c,r,a),Bx(c,a,r)}return i!=null&&qu(r,a),Hs}function zs(){let n=_n(),e=Kn(),t=iM(e);return n.firstCreatePass&&SM(n,t),am(t)&&cm(),sm(),t.classesWithoutHost!=null&&DC(t)&&ax(n,t,ut(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&TC(t)&&ax(n,t,ut(),t.stylesWithoutHost,!1),zs}function zr(n,e,t,i){return Hs(n,e,t,i),zs(),zr}function qt(n,e,t,i){let r=ut(),s=r[He],o=n+$t,a=s.firstCreatePass?DT(o,s,2,e,t,i):s.data[o];return nM(a,r,n,e,LM),i!=null&&qu(r,a),qt}function rn(){let n=Kn(),e=iM(n);return am(e)&&cm(),sm(),rn}function dr(n,e,t,i){return qt(n,e,t,i),rn(),dr}var LM=(n,e,t,i,r)=>(vu(!0),Hx(e[Ot],i,I0()));function fr(){return ut()}var _c="en-US";var vA=_c;function kM(n){typeof n=="string"&&(vA=n.toLowerCase().replace(/_/g,"-"))}function jo(n,e,t){let i=ut(),r=_n(),s=Kn();return yA(r,i,i[Ot],s,n,e,t),jo}function Li(n,e,t){let i=ut(),r=_n(),s=Kn();return(s.type&3||t)&&EM(s,r,i,t,i[Ot],n,e,Su(s,i,e)),Li}function yA(n,e,t,i,r,s,o){let a=!0,c=null;if((i.type&3||o)&&(c??=Su(i,e,s),EM(i,n,e,o,t,r,s,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],h=u[d+1];c??=Su(i,e,s),tx(i,e,f,h,r,c)}if(l&&l.length)for(let d of l)c??=Su(i,e,s),tx(i,e,d,r,r,c)}}function ki(n=1){return A0(n)}function Wo(n,e,t){return QT(n,e,t),Wo}function $o(n){let e=ut(),t=_n(),i=hm();fu(i+1);let r=bg(t,i);if(n.dirty&&l0(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=nA(e,i);n.reset(s,zC),n.notifyOnChanges()}return!0}return!1}function qo(){return JT(ut(),hm())}function yu(n,e){return n<<17|e<<2}function Ls(n){return n>>17&32767}function _A(n){return(n&2)==2}function xA(n,e){return n&131071|e<<17}function tg(n){return n|2}function Bo(n){return(n&131068)>>2}function Am(n,e){return n&-131069|e<<2}function MA(n){return(n&1)===1}function ng(n){return n|1}function bA(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Ls(o),c=Bo(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Do(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Ls(n[a+1]);n[i+1]=yu(f,a),f!==0&&(n[f+1]=Am(n[f+1],i)),n[a+1]=xA(n[a+1],i)}else n[i+1]=yu(a,0),a!==0&&(n[a+1]=Am(n[a+1],i)),a=i;else n[i+1]=yu(c,0),a===0?a=i:n[c+1]=Am(n[c+1],i),c=i;l&&(n[i+1]=tg(n[i+1])),cx(n,u,i,!0),cx(n,u,i,!1),SA(e,u,n,i,s),o=yu(a,c),s?e.classBindings=o:e.styleBindings=o}function SA(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Do(s,e)>=0&&(t[i+1]=ng(t[i+1]))}function cx(n,e,t,i){let r=n[t+1],s=e===null,o=i?Ls(r):Bo(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];EA(c,e)&&(a=!0,n[o+1]=i?ng(l):tg(l)),o=i?Ls(l):Bo(l)}a&&(n[t+1]=i?tg(r):ng(r))}function EA(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Do(n,e)>=0:!1}function ed(n,e,t){return wA(n,e,t,!1),ed}function wA(n,e,t,i){let r=ut(),s=_n(),o=M0(2);if(s.firstUpdatePass&&DA(s,n,o,i),e!==Fi&&Ho(r,o,e)){let a=s.data[Lr()];NA(s,a,r,r[Ot],n,r[o+1]=PA(e,t),i,o)}}function CA(n,e){return e>=n.expandoStartIndex}function DA(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Lr()],o=CA(n,t);FA(s,i)&&e===null&&!o&&(e=!1),e=TA(r,s,e,i),bA(r,s,e,t,o,i)}}function TA(n,e,t,i){let r=w0(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=Im(null,n,e,t,i),t=ac(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=Im(r,n,e,t,i),s===null){let c=AA(n,e,i);c!==void 0&&Array.isArray(c)&&(c=Im(null,n,e,c[1],i),c=ac(c,e.attrs,i),IA(n,e,i,c))}else s=RA(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function AA(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Bo(i)!==0)return n[Ls(i)]}function IA(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Ls(r)]=i}function RA(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=ac(i,o,t)}return ac(i,e.attrs,t)}function Im(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=ac(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function ac(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),e0(n,o,t?!0:e[++s]))}return n===void 0?null:n}function NA(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=MA(l)?lx(c,e,t,r,Bo(l),o):void 0;if(!Uu(u)){Uu(s)||_A(l)&&(s=lx(c,null,t,r,a,o));let d=Qp(Lr(),t);PD(i,o,d,r,s)}}function lx(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Fi&&(f=d?Wn:void 0);let h=d?ou(f,i):u===i?f:void 0;if(l&&!Uu(h)&&(h=ou(c,i)),Uu(h)&&(a=h,o))return a;let v=n[r+1];r=o?Ls(v):Bo(v)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=ou(c,i))}return a}function Uu(n){return n!==void 0}function PA(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=nr(Vx(n)))),n}function FA(n,e){return(n.flags&(e?8:16))!==0}function vi(n,e=""){let t=ut(),i=_n(),r=n+$t,s=i.firstCreatePass?hc(i,r,1,e,null):i.data[r],o=OA(i,t,s,e);t[r]=o,gu()&&mg(i,t,o,s),Po(s,!1)}var OA=(n,e,t,i)=>(vu(!0),KC(e[Ot],i));function LA(n,e,t,i=""){return Ho(n,Fo(),t)?e+Vp(t)+i:Fi}function td(n,e,t){let i=ut(),r=LA(i,n,e,t);return r!==Fi&&kA(i,Lr(),r),td}function kA(n,e,t){let i=Qp(e,n);QC(n[Ot],i,t)}function Ig(n,e){let t=_0()+n,i=ut();return i[t]===Fi?TT(i,t,e()):AT(i,t)}var Bu=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Rg=(()=>{class n{compileModuleSync(t){return new Fu(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Up(t),s=Wx(r.declarations).reduce((o,a)=>{let c=Nr(a);return c&&o.push(new Uo(c)),o},[]);return new Bu(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var UM=(()=>{class n{applicationErrorHandler=xe(fi);appRef=xe(Vs);taskService=xe(Ur);ngZone=xe(Rn);zonelessEnabled=xe(Qa);tracing=xe(fc,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Kt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Va):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(xe(bm,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?F0:ym;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Va+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function BM(){return[{provide:wo,useExisting:UM},{provide:Rn,useClass:Ha},{provide:Qa,useValue:!0}]}function UA(){return typeof $localize<"u"&&$localize.locale||_c}var nd=new Ve("",{factory:()=>xe(nd,{optional:!0,skipSelf:!0})||UA()});var zM=Symbol("InputSignalNode#UNSET"),oI=Dt(Ae({},Al),{transformFn:void 0,applyValueToInputSignal(n,e){Ra(n,e)}});function GM(n,e){let t=Object.create(oI);t.value=n,t.transformFn=e?.transform;function i(){if(Cl(t),t.value===zM){let r=null;throw new Ue(-950,r)}return t.value}return i[jn]=t,i}function VM(n,e){return GM(n,e)}function aI(n){return GM(zM,n)}var jM=(VM.required=aI,VM);var Ng=new Ve(""),cI=new Ve("");function xc(n){return!n.moduleRef}function lI(n){let e=xc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Rn);return t.run(()=>{xc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(fi),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),xc(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Ng);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Ng);o.add(s),n.moduleRef.onDestroy(()=>{tc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return dI(i,t,()=>{let s=e.get(Ur),o=s.add(),a=e.get(Cg);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(nd,_c);if(kM(c||_c),!e.get(cI,!0))return xc(n)?e.get(Vs):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(xc(n)){let u=e.get(Vs);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return uI?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{s.remove(o)})})})}var uI;function dI(n,e,t){try{let i=t();return Bs(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var id=null;function fI(n=[],e){return ai.create({name:e,providers:[{provide:Wa,useValue:"platform"},{provide:Ng,useValue:new Set([()=>id=null])},...n]})}function hI(n=[]){if(id)return id;let e=fI(n);return id=e,FM(),pI(e),e}function pI(n){let e=n.get(zu,null);dn(n,()=>{e?.forEach(t=>t())})}var mI=1e4;var D8=mI-1e3;var sd=(()=>{class n{static __NG_ELEMENT_ID__=gI}return n})();function gI(n){return vI(Kn(),ut(),(n&16)===16)}function vI(n,e,t){if(Or(n)&&!t){let i=di(n.index,e);return new Br(i,i)}else if(n.type&175){let i=e[Nn];return new Br(i,e)}return null}function WM(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;wt(mt.BootstrapApplicationStart);try{let s=r?.injector??hI(i),o=[BM(),L0,...t||[]],a=new oc({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return lI({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}finally{wt(mt.BootstrapApplicationEnd)}}var $M=null;function hr(){return $M}function Fg(n){$M??=n}var Mc=class{},od=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:()=>xe(qM),providedIn:"platform"})}return n})();var qM=(()=>{class n extends od{_location;_history;_doc=xe(Vt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return hr().getBaseHref(this._doc)}onPopState(t){let i=hr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=hr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function ZM(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function XM(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Gr(n){return n&&n[0]!=="?"?`?${n}`:n}var ad=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:()=>xe(_I),providedIn:"root"})}return n})(),yI=new Ve(""),_I=(()=>{class n extends ad{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??xe(Vt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return ZM(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Gr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Gr(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Gr(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Qe(od),Qe(yI,8))};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xo=(()=>{class n{_subject=new Qt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=bI(XM(YM(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Gr(i))}normalize(t){return n.stripTrailingSlash(MI(this._basePath,YM(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Gr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Gr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Gr;static joinWithSlash=ZM;static stripTrailingSlash=XM;static \u0275fac=function(i){return new(i||n)(Qe(ad))};static \u0275prov=Be({token:n,factory:()=>xI(),providedIn:"root"})}return n})();function xI(){return new Xo(Qe(ad))}function MI(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function YM(n){return n.replace(/\/index.html$/,"")}function bI(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var Og=(()=>{class n{_viewContainer;_context=new cd;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,i){this._viewContainer=t,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){JM(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){JM(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(Qn(Vr),Qn(Ps))};static \u0275dir=zo({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),cd=class{$implicit=null;ngIf=null};function JM(n,e){if(n&&!n.createEmbeddedView)throw new Ue(2020,!1)}var jr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Hr({type:n});static \u0275inj=rr({})}return n})();function Lg(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var bc=class{};var KM="browser";var Sc=class{_doc;constructor(e){this._doc=e}manager},ld=(()=>{class n extends Sc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(Qe(Vt))};static \u0275prov=Be({token:n,factory:n.\u0275fac})}return n})(),fd=new Ve(""),Vg=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(o=>{o.manager=this});let r=t.filter(o=>!(o instanceof ld));this._plugins=r.slice().reverse();let s=t.find(o=>o instanceof ld);s&&this._plugins.push(s)}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ue(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Qe(fd),Qe(Rn))};static \u0275prov=Be({token:n,factory:n.\u0275fac})}return n})(),kg="ng-app-id";function QM(n){for(let e of n)e.remove()}function eb(n,e){let t=e.createElement("style");return t.textContent=n,t}function wI(n,e,t,i){let r=n.head?.querySelectorAll(`style[${kg}="${e}"],link[${kg}="${e}"]`);if(r)for(let s of r)s.removeAttribute(kg),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Bg(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Hg=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,wI(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,eb);i?.forEach(r=>this.addUsage(r,this.external,Bg))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(QM(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])QM(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,eb(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Bg(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Qe(Vt),Qe(Hu),Qe(Gu,8),Qe(dc))};static \u0275prov=Be({token:n,factory:n.\u0275fac})}return n})(),Ug={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},zg=/%COMP%/g;var nb="%COMP%",CI=`_nghost-${nb}`,DI=`_ngcontent-${nb}`,TI=!0,AI=new Ve("",{factory:()=>TI});function II(n){return DI.replace(zg,n)}function RI(n){return CI.replace(zg,n)}function ib(n,e){return e.map(t=>t.replace(zg,n))}var Gg=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,i,r,s,o,a,c=null,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Ec(t,o,a,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof dd?r.applyToHost(t):r instanceof wc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(i.encapsulation){case mi.Emulated:s=new dd(c,l,i,this.appId,u,o,a,d);break;case mi.ShadowDom:return new ud(c,t,i,o,a,this.nonce,d,l);case mi.ExperimentalIsolatedShadowDom:return new ud(c,t,i,o,a,this.nonce,d);default:s=new wc(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Qe(Vg),Qe(Hg),Qe(Hu),Qe(AI),Qe(Vt),Qe(Rn),Qe(Gu),Qe(fc,8))};static \u0275prov=Be({token:n,factory:n.\u0275fac})}return n})(),Ec=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Ug[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(tb(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(tb(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ue(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Ug[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Ug[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Pi.DashCase|Pi.Important)?e.style.setProperty(t,i,r&Pi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Pi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=hr().getGlobalEventTarget(this.doc,e),!e))throw new Ue(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function tb(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var ud=class extends Ec{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,r,s,o,a,c){super(e,r,s,a),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=ib(i.id,l);for(let d of l){let f=document.createElement("style");o&&f.setAttribute("nonce",o),f.textContent=d,this.shadowRoot.appendChild(f)}let u=i.getExternalStyles?.();if(u)for(let d of u){let f=Bg(d,r);o&&f.setAttribute("nonce",o),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},wc=class extends Ec{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?ib(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ns.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},dd=class extends wc{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=II(l),this.hostAttr=RI(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var hd=class n extends Mc{supportsDOMEvents=!0;static makeCurrent(){Fg(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=NI();return t==null?null:PI(t)}resetBaseElement(){Cc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Lg(document.cookie,e)}},Cc=null;function NI(){return Cc=Cc||document.head.querySelector("base"),Cc?Cc.getAttribute("href"):null}function PI(n){return new URL(n,document.baseURI).pathname}var FI=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac})}return n})(),rb=["alt","control","meta","shift"],OI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},LI={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},sb=(()=>{class n extends Sc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>hr().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),rb.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=OI[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),rb.forEach(o=>{if(o!==r){let a=LI[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Qe(Vt))};static \u0275prov=Be({token:n,factory:n.\u0275fac})}return n})();async function jg(n,e,t){let i=Ae({rootComponent:n},kI(e,t));return WM(i)}function kI(n,e){return{platformRef:e?.platformRef,appProviders:[...zI,...n?.providers??[]],platformProviders:HI}}function UI(){hd.makeCurrent()}function BI(){return new ir}function VI(){return sg(document),document}var HI=[{provide:dc,useValue:KM},{provide:zu,useValue:UI,multi:!0},{provide:Vt,useFactory:VI}];var zI=[{provide:Wa,useValue:"root"},{provide:ir,useFactory:BI},{provide:fd,useClass:ld,multi:!0},{provide:fd,useClass:sb,multi:!0},Gg,Hg,Vg,{provide:Fs,useExisting:Gg},{provide:bc,useClass:FI},[]];var ob=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Qe(Vt))};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ze="primary",kc=Symbol("RouteTitle"),Yg=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Qo(n){return new Yg(n)}function Wg(n,e,t){for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(r[0]===":")t[r.substring(1)]=s;else if(r!==s.path)return!1}return!0}function WI(n,e,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let c={},l=n.slice(0,i.length);return Wg(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let s=i.slice(0,r),o=i.slice(r+1);if(s.length+o.length>n.length||t.pathMatch==="full"&&e.hasChildren()&&t.path!=="**")return null;let a={};return!Wg(s,n.slice(0,s.length),a)||!Wg(o,n.slice(n.length-o.length),a)?null:{consumed:n,posParams:a}}function _d(n){return new Promise((e,t)=>{n.pipe(Qi()).subscribe({next:i=>e(i),error:i=>t(i)})})}function $I(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Ui(n[t],e[t]))return!1;return!0}function Ui(n,e){let t=n?Zg(n):void 0,i=e?Zg(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!gb(n[r],e[r]))return!1;return!0}function Zg(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function gb(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function qI(n){return n.length>0?n[n.length-1]:null}function qs(n){return ql(n)?n:Bs(n)?Wt(Promise.resolve(n)):ot(n)}function vb(n){return ql(n)?_d(n):Promise.resolve(n)}var XI={exact:_b,subset:xb},yb={exact:YI,subset:ZI,ignored:()=>!0};function ab(n,e,t){return XI[t.paths](n.root,e.root,t.matrixParams)&&yb[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function YI(n,e){return Ui(n,e)}function _b(n,e,t){if(!js(n.segments,e.segments)||!gd(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!_b(n.children[i],e.children[i],t))return!1;return!0}function ZI(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>gb(n[t],e[t]))}function xb(n,e,t){return Mb(n,e,e.segments,t)}function Mb(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!js(r,t)||e.hasChildren()||!gd(r,t,i))}else if(n.segments.length===t.length){if(!js(n.segments,t)||!gd(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!xb(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!js(n.segments,r)||!gd(n.segments,r,i)||!n.children[Ze]?!1:Mb(n.children[Ze],e,s,i)}}function gd(n,e,t){return e.every((i,r)=>yb[t](n[r].parameters,i.parameters))}var Bi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new yt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Qo(this.queryParams),this._queryParamMap}toString(){return QI.serialize(this)}},yt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return vd(this)}},Gs=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Qo(this.parameters),this._parameterMap}toString(){return Sb(this)}};function JI(n,e){return js(n,e)&&n.every((t,i)=>Ui(t.parameters,e[i].parameters))}function js(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function KI(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ze&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ze&&(t=t.concat(e(r,i)))}),t}var Ad=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:()=>new Ws,providedIn:"root"})}return n})(),Ws=class{parse(e){let t=new Kg(e);return new Bi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Dc(e.root,!0)}`,i=nR(e.queryParams),r=typeof e.fragment=="string"?`#${eR(e.fragment)}`:"";return`${t}${i}${r}`}},QI=new Ws;function vd(n){return n.segments.map(e=>Sb(e)).join("/")}function Dc(n,e){if(!n.hasChildren())return vd(n);if(e){let t=n.children[Ze]?Dc(n.children[Ze],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ze&&i.push(`${r}:${Dc(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=KI(n,(i,r)=>r===Ze?[Dc(n.children[Ze],!1)]:[`${r}:${Dc(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ze]!=null?`${vd(n)}/${t[0]}`:`${vd(n)}/(${t.join("//")})`}}function bb(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function pd(n){return bb(n).replace(/%3B/gi,";")}function eR(n){return encodeURI(n)}function Jg(n){return bb(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function yd(n){return decodeURIComponent(n)}function cb(n){return yd(n.replace(/\+/g,"%20"))}function Sb(n){return`${Jg(n.path)}${tR(n.parameters)}`}function tR(n){return Object.entries(n).map(([e,t])=>`;${Jg(e)}=${Jg(t)}`).join("")}function nR(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${pd(t)}=${pd(r)}`).join("&"):`${pd(t)}=${pd(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var iR=/^[^\/()?;#]+/;function $g(n){let e=n.match(iR);return e?e[0]:""}var rR=/^[^\/()?;=#]+/;function sR(n){let e=n.match(rR);return e?e[0]:""}var oR=/^[^=?&#]+/;function aR(n){let e=n.match(oR);return e?e[0]:""}var cR=/^[^&#]+/;function lR(n){let e=n.match(cR);return e?e[0]:""}var Kg=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new yt([],{}):new yt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(e=0){if(e>50)throw new Ue(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,e));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,e)),(t.length>0||Object.keys(i).length>0)&&(r[Ze]=new yt(t,i)),r}parseSegment(){let e=$g(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ue(4009,!1);return this.capture(e),new Gs(yd(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=sR(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=$g(this.remaining);r&&(i=r,this.capture(i))}e[yd(t)]=yd(i)}parseQueryParam(e){let t=aR(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=lR(this.remaining);o&&(i=o,this.capture(i))}let r=cb(t),s=cb(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=$g(this.remaining),s=this.remaining[r.length];if(s!=="/"&&s!==")"&&s!==";")throw new Ue(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):e&&(o=Ze);let a=this.parseChildren(t+1);i[o??Ze]=Object.keys(a).length===1&&a[Ze]?a[Ze]:new yt([],a),this.consumeOptional("//")}return i}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ue(4011,!1)}};function Eb(n){return n.segments.length>0?new yt([],{[Ze]:n}):n}function wb(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=wb(r);if(i===Ze&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new yt(n.segments,e);return uR(t)}function uR(n){if(n.numberOfChildren===1&&n.children[Ze]){let e=n.children[Ze];return new yt(n.segments.concat(e.segments),e.children)}return n}function ea(n){return n instanceof Bi}function dR(n,e,t=null,i=null,r=new Ws){let s=Cb(n);return Db(s,e,t,i,r)}function Cb(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new yt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Eb(i);return e??r}function Db(n,e,t,i,r){let s=n;for(;s.parent;)s=s.parent;if(e.length===0)return qg(s,s,s,t,i,r);let o=fR(e);if(o.toRoot())return qg(s,s,new yt([],{}),t,i,r);let a=hR(o,s,n),c=a.processChildren?Ac(a.segmentGroup,a.index,o.commands):Ab(a.segmentGroup,a.index,o.commands);return qg(s,a.segmentGroup,c,t,i,r)}function xd(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Nc(n){return typeof n=="object"&&n!=null&&n.outlets}function lb(n,e,t){n||="\u0275";let i=new Bi;return i.queryParams={[n]:e},t.parse(t.serialize(i)).queryParams[n]}function qg(n,e,t,i,r,s){let o={};for(let[l,u]of Object.entries(i??{}))o[l]=Array.isArray(u)?u.map(d=>lb(l,d,s)):lb(l,u,s);let a;n===e?a=t:a=Tb(n,e,t);let c=Eb(wb(a));return new Bi(c,o,r)}function Tb(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Tb(s,e,t)}),new yt(n.segments,i)}var Md=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&xd(i[0]))throw new Ue(4003,!1);let r=i.find(Nc);if(r&&r!==qI(i))throw new Ue(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function fR(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Md(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Md(t,e,i)}var Zo=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function hR(n,e,t){if(n.isAbsolute)return new Zo(e,!0,0);if(!t)return new Zo(e,!1,NaN);if(t.parent===null)return new Zo(t,!0,0);let i=xd(n.commands[0])?0:1,r=t.segments.length-1+i;return pR(t,r,n.numberOfDoubleDots)}function pR(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ue(4005,!1);r=i.segments.length}return new Zo(i,!1,r-s)}function mR(n){return Nc(n[0])?n[0].outlets:{[Ze]:n}}function Ab(n,e,t){if(n??=new yt([],{}),n.segments.length===0&&n.hasChildren())return Ac(n,e,t);let i=gR(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new yt(n.segments.slice(0,i.pathIndex),{});return s.children[Ze]=new yt(n.segments.slice(i.pathIndex),n.children),Ac(s,0,r)}else return i.match&&r.length===0?new yt(n.segments,{}):i.match&&!n.hasChildren()?Qg(n,e,t):i.match?Ac(n,0,r):Qg(n,e,t)}function Ac(n,e,t){if(t.length===0)return new yt(n.segments,{});{let i=mR(t),r={};if(Object.keys(i).some(s=>s!==Ze)&&n.children[Ze]&&n.numberOfChildren===1&&n.children[Ze].segments.length===0){let s=Ac(n.children[Ze],e,t);return new yt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Ab(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new yt(n.segments,r)}}function gR(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Nc(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!db(c,l,o))return s;i+=2}else{if(!db(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Qg(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Nc(s)){let c=vR(s.outlets);return new yt(i,c)}if(r===0&&xd(t[0])){let c=n.segments[e];i.push(new Gs(c.path,ub(t[0]))),r++;continue}let o=Nc(s)?s.outlets[Ze]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&xd(a)?(i.push(new Gs(o,ub(a))),r+=2):(i.push(new Gs(o,{})),r++)}return new yt(i,{})}function vR(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Qg(new yt([],{}),0,i))}),e}function ub(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function db(n,e,t){return n==t.path&&Ui(e,t.parameters)}var Ic="imperative",sn=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(sn||{}),ei=class{id;url;constructor(e,t){this.id=e,this.url=t}},ta=class extends ei{type=sn.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Wr=class extends ei{urlAfterRedirects;type=sn.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Mn=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Mn||{}),bd=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(bd||{}),_i=class extends ei{reason;code;type=sn.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Ib(n){return n instanceof _i&&(n.code===Mn.Redirect||n.code===Mn.SupersededByNewNavigation)}var $r=class extends ei{reason;code;type=sn.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},na=class extends ei{error;target;type=sn.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Pc=class extends ei{urlAfterRedirects;state;type=sn.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ev=class extends ei{urlAfterRedirects;state;type=sn.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tv=class extends ei{urlAfterRedirects;state;shouldActivate;type=sn.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},nv=class extends ei{urlAfterRedirects;state;type=sn.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},iv=class extends ei{urlAfterRedirects;state;type=sn.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},rv=class{route;type=sn.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},sv=class{route;type=sn.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ov=class{snapshot;type=sn.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},av=class{snapshot;type=sn.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cv=class{snapshot;type=sn.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},lv=class{snapshot;type=sn.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ia=class{},ra=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function yR(n){return!(n instanceof ia)&&!(n instanceof ra)}var uv=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Uc(this.rootInjector)}},Uc=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new uv(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Qe(Ut))};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sd=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=dv(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=dv(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=fv(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return fv(e,this._root).map(t=>t.value)}};function dv(n,e){if(n===e.value)return e;for(let t of e.children){let i=dv(n,t);if(i)return i}return null}function fv(n,e){if(n===e.value)return[e];for(let t of e.children){let i=fv(n,t);if(i.length)return i.unshift(e),i}return[]}var Fn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Yo(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Ed=class extends Sd{snapshot;constructor(e,t){super(e),this.snapshot=t,Mv(this,e)}toString(){return this.snapshot.toString()}};function Rb(n,e){let t=_R(n,e),i=new en([new Gs("",{})]),r=new en({}),s=new en({}),o=new en({}),a=new en(""),c=new $s(i,r,o,a,s,Ze,n,t.root);return c.snapshot=t.root,new Ed(new Fn(c,[]),t)}function _R(n,e){let t={},i={},r={},o=new Jo([],t,r,"",i,Ze,n,null,{},e);return new Cd("",new Fn(o,[]))}var $s=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(At(l=>l[kc]))??ot(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(At(e=>Qo(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(At(e=>Qo(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function wd(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:Ae(Ae({},e.params),n.params),data:Ae(Ae({},e.data),n.data),resolve:Ae(Ae(Ae(Ae({},n.data),e.data),r?.data),n._resolvedData)}:i={params:Ae({},n.params),data:Ae({},n.data),resolve:Ae(Ae({},n.data),n._resolvedData??{})},r&&Pb(r)&&(i.resolve[kc]=r.title),i}var Jo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[kc]}constructor(e,t,i,r,s,o,a,c,l,u){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Qo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Qo(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Cd=class extends Sd{url;constructor(e,t){super(t),this.url=e,Mv(this,t)}toString(){return Nb(this._root)}};function Mv(n,e){e.value._routerState=n,e.children.forEach(t=>Mv(n,t))}function Nb(n){let e=n.children.length>0?` { ${n.children.map(Nb).join(", ")} } `:"";return`${n.value}${e}`}function Xg(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Ui(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Ui(e.params,t.params)||n.paramsSubject.next(t.params),$I(e.url,t.url)||n.urlSubject.next(t.url),Ui(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function hv(n,e){let t=Ui(n.params,e.params)&&JI(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||hv(n.parent,e.parent))}function Pb(n){return typeof n.title=="string"||n.title===null}var xR=new Ve(""),Fb=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ze;activateEvents=new un;deactivateEvents=new un;attachEvents=new un;detachEvents=new un;routerOutletData=jM();parentContexts=xe(Uc);location=xe(Vr);changeDetector=xe(sd);inputBinder=xe(Id,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ue(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ue(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ue(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ue(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new pv(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=zo({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[lc]})}return n})(),pv=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===$s?this.route:e===Uc?this.childContexts:e===xR?this.outletData:this.parent.get(e,t)}},Id=new Ve("");var Ob=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=gi({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&zr(0,"router-outlet")},dependencies:[Fb],encapsulation:2})}return n})();function bv(n){let e=n.children&&n.children.map(bv),t=e?Dt(Ae({},n),{children:e}):Ae({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ze&&(t.component=Ob),t}function MR(n,e,t){let i=Fc(n,e._root,t?t._root:void 0);return new Ed(i,e)}function Fc(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=bR(n,e,t);return new Fn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Fc(n,a)),o}}let i=SR(e.value),r=e.children.map(s=>Fc(n,s));return new Fn(i,r)}}function bR(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Fc(n,i,r);return Fc(n,i)})}function SR(n){return new $s(new en(n.url),new en(n.params),new en(n.queryParams),new en(n.fragment),new en(n.data),n.outlet,n.component,n)}var Oc=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},Lb="ngNavigationCancelingError";function Dd(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=ea(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=kb(!1,Mn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function kb(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[Lb]=!0,t.cancellationCode=e,t}function ER(n){return Ub(n)&&ea(n.url)}function Ub(n){return!!n&&n[Lb]}var mv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Xg(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Yo(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Yo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Yo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Yo(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new lv(s.value.snapshot))}),e.children.length&&this.forwardEvent(new av(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Xg(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Xg(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Td=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ko=class{component;route;constructor(e,t){this.component=e,this.route=t}};function wR(n,e,t){let i=n._root,r=e?e._root:null;return Tc(i,r,t,[i.value])}function CR(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function oa(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Np(n)?n:e.get(n):i}function Tc(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Yo(e);return n.children.forEach(o=>{DR(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Rc(a,t.getContext(o),r)),r}function DR(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=TR(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Td(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Tc(n,e,a?a.children:null,i,r):Tc(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ko(a.outlet.component,o))}else o&&Rc(e,a,r),r.canActivateChecks.push(new Td(i)),s.component?Tc(n,null,a?a.children:null,i,r):Tc(n,null,t,i,r);return r}function TR(n,e,t){if(typeof t=="function")return dn(e._environmentInjector,()=>t(n,e));switch(t){case"pathParamsChange":return!js(n.url,e.url);case"pathParamsOrQueryParamsChange":return!js(n.url,e.url)||!Ui(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!hv(n,e)||!Ui(n.queryParams,e.queryParams);default:return!hv(n,e)}}function Rc(n,e,t){let i=Yo(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Rc(o,e.children.getContext(s),t):Rc(o,null,t):Rc(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Ko(e.outlet.component,r)):t.canDeactivateChecks.push(new Ko(null,r)):t.canDeactivateChecks.push(new Ko(null,r))}function Bc(n){return typeof n=="function"}function AR(n){return typeof n=="boolean"}function IR(n){return n&&Bc(n.canLoad)}function RR(n){return n&&Bc(n.canActivate)}function NR(n){return n&&Bc(n.canActivateChild)}function PR(n){return n&&Bc(n.canDeactivate)}function FR(n){return n&&Bc(n.canMatch)}function Bb(n){return n instanceof vs||n?.name==="EmptyError"}var md=Symbol("INITIAL_VALUE");function sa(){return er(n=>dp(n.map(e=>e.pipe(Ki(1),hp(md)))).pipe(At(e=>{for(let t of e)if(t!==!0){if(t===md)return md;if(t===!1||OR(t))return t}return!0}),Ji(e=>e!==md),Ki(1)))}function OR(n){return ea(n)||n instanceof Oc}function Vb(n){return n.aborted?ot(void 0).pipe(Ki(1)):new pt(e=>{let t=()=>{e.next(),e.complete()};return n.addEventListener("abort",t),()=>n.removeEventListener("abort",t)})}function Hb(n){return La(Vb(n))}function LR(n){return yn(e=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:s}}=e;return s.length===0&&r.length===0?ot(Dt(Ae({},e),{guardsResult:!0})):kR(s,t,i).pipe(yn(o=>o&&AR(o)?UR(t,r,n):ot(o)),At(o=>Dt(Ae({},e),{guardsResult:o})))})}function kR(n,e,t){return Wt(n).pipe(yn(i=>GR(i.component,i.route,t,e)),Qi(i=>i!==!0,!0))}function UR(n,e,t){return Wt(e).pipe(Xl(i=>bo(VR(i.route.parent,t),BR(i.route,t),zR(n,i.path),HR(n,i.route))),Qi(i=>i!==!0,!0))}function BR(n,e){return n!==null&&e&&e(new cv(n)),ot(!0)}function VR(n,e){return n!==null&&e&&e(new ov(n)),ot(!0)}function HR(n,e){let t=e.routeConfig?e.routeConfig.canActivate:null;if(!t||t.length===0)return ot(!0);let i=t.map(r=>Fa(()=>{let s=e._environmentInjector,o=oa(r,s),a=RR(o)?o.canActivate(e,n):dn(s,()=>o(e,n));return qs(a).pipe(Qi())}));return ot(i).pipe(sa())}function zR(n,e){let t=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(s=>CR(s)).filter(s=>s!==null).map(s=>Fa(()=>{let o=s.guards.map(a=>{let c=s.node._environmentInjector,l=oa(a,c),u=NR(l)?l.canActivateChild(t,n):dn(c,()=>l(t,n));return qs(u).pipe(Qi())});return ot(o).pipe(sa())}));return ot(r).pipe(sa())}function GR(n,e,t,i){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return ot(!0);let s=r.map(o=>{let a=e._environmentInjector,c=oa(o,a),l=PR(c)?c.canDeactivate(n,e,t,i):dn(a,()=>c(n,e,t,i));return qs(l).pipe(Qi())});return ot(s).pipe(sa())}function jR(n,e,t,i,r){let s=e.canLoad;if(s===void 0||s.length===0)return ot(!0);let o=s.map(a=>{let c=oa(a,n),l=IR(c)?c.canLoad(e,t):dn(n,()=>c(e,t)),u=qs(l);return r?u.pipe(Hb(r)):u});return ot(o).pipe(sa(),zb(i))}function zb(n){return ap(Ai(e=>{if(typeof e!="boolean")throw Dd(n,e)}),At(e=>e===!0))}function WR(n,e,t,i,r){let s=e.canMatch;if(!s||s.length===0)return ot(!0);let o=s.map(a=>{let c=oa(a,n),l=FR(c)?c.canMatch(e,t):dn(n,()=>c(e,t));return qs(l).pipe(Hb(r))});return ot(o).pipe(sa(),zb(i))}var pr=class n extends Error{segmentGroup;constructor(e){super(),this.segmentGroup=e||null,Object.setPrototypeOf(this,n.prototype)}},Lc=class n extends Error{urlTree;constructor(e){super(),this.urlTree=e,Object.setPrototypeOf(this,n.prototype)}};function $R(n){throw new Ue(4e3,!1)}function qR(n){throw kb(!1,Mn.GuardRejected)}var gv=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}async lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[Ze])throw $R(`${e.redirectTo}`);r=r.children[Ze]}}async applyRedirectCommands(e,t,i,r,s){let o=await XR(t,r,s);if(o instanceof Bi)throw new Lc(o);let a=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),e,i);if(o[0]==="/")throw new Lc(a);return a}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Bi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new yt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ue(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function XR(n,e,t){if(typeof n=="string")return Promise.resolve(n);let i=n,{queryParams:r,fragment:s,routeConfig:o,url:a,outlet:c,params:l,data:u,title:d,paramMap:f,queryParamMap:h}=e;return _d(qs(dn(t,()=>i({params:l,data:u,queryParams:r,fragment:s,routeConfig:o,url:a,outlet:c,title:d,paramMap:f,queryParamMap:h}))))}function YR(n,e){return n.providers&&!n._injector&&(n._injector=mc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function yi(n){return n.outlet||Ze}function ZR(n,e){let t=n.filter(i=>yi(i)===e);return t.push(...n.filter(i=>yi(i)!==e)),t}var vv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function JR(n,e,t,i,r,s){let o=Gb(n,e,t);return o.matched?(i=YR(e,i),WR(i,e,t,r,s).pipe(At(a=>a===!0?o:Ae({},vv)))):ot(o)}function Gb(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?Ae({},vv):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||WI)(t,n,e);if(!r)return Ae({},vv);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?Ae(Ae({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function fb(n,e,t,i){return t.length>0&&e1(n,t,i)?{segmentGroup:new yt(e,QR(i,new yt(t,n.children))),slicedSegments:[]}:t.length===0&&t1(n,t,i)?{segmentGroup:new yt(n.segments,KR(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new yt(n.segments,n.children),slicedSegments:t}}function KR(n,e,t,i){let r={};for(let s of t)if(Rd(n,e,s)&&!i[yi(s)]){let o=new yt([],{});r[yi(s)]=o}return Ae(Ae({},i),r)}function QR(n,e){let t={};t[Ze]=e;for(let i of n)if(i.path===""&&yi(i)!==Ze){let r=new yt([],{});t[yi(i)]=r}return t}function e1(n,e,t){return t.some(i=>Rd(n,e,i)&&yi(i)!==Ze)}function t1(n,e,t){return t.some(i=>Rd(n,e,i))}function Rd(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function n1(n,e,t){return e.length===0&&!n.children[t]}var yv=class{};async function i1(n,e,t,i,r,s,o="emptyOnly",a){return new _v(n,e,t,i,r,o,s,a).recognize()}var r1=31,_v=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a,c){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new gv(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ue(4002,`'${e.segmentGroup}'`)}async recognize(){let e=fb(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(e),r=new Fn(i,t),s=new Cd("",r),o=dR(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}async match(e){let t=new Jo([],Object.freeze({}),Object.freeze(Ae({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ze,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,e,Ze,t),rootSnapshot:t}}catch(i){if(i instanceof Lc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof pr?this.noMatchError(i):i}}async processSegmentGroup(e,t,i,r,s){if(i.segments.length===0&&i.hasChildren())return this.processChildren(e,t,i,s);let o=await this.processSegment(e,t,i,i.segments,r,!0,s);return o instanceof Fn?[o]:[]}async processChildren(e,t,i,r){let s=[];for(let c of Object.keys(i.children))c==="primary"?s.unshift(c):s.push(c);let o=[];for(let c of s){let l=i.children[c],u=ZR(t,c),d=await this.processSegmentGroup(e,u,l,c,r);o.push(...d)}let a=jb(o);return s1(a),a}async processSegment(e,t,i,r,s,o,a){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a)}catch(l){if(l instanceof pr||Bb(l))continue;throw l}if(n1(i,r,s))return new yv;throw new pr(i)}async processSegmentAgainstRoute(e,t,i,r,s,o,a,c){if(yi(i)!==o&&(o===Ze||!Rd(r,s,i)))throw new pr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(e,r,i,s,o,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c);throw new pr(r)}async expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=Gb(t,r,s);if(!c)throw new pr(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>r1&&(this.allowRedirects=!1));let h=new Jo(s,l,Object.freeze(Ae({},this.urlTree.queryParams)),this.urlTree.fragment,hb(r),yi(r),r.component??r._loadedComponent??null,r,pb(r),e),v=wd(h,a,this.paramsInheritanceStrategy);if(h.params=Object.freeze(v.params),h.data=Object.freeze(v.data),this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let x=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e),g=await this.applyRedirects.lineralizeSegments(r,x);return this.processSegment(e,i,t,g.concat(f),o,!1,a)}async matchSegmentAgainstRoute(e,t,i,r,s,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=await _d(JR(t,i,r,e,this.urlSerializer,this.abortSignal));if(i.path==="**"&&(t.children={}),!a?.matched)throw new pr(t);e=i._injector??e;let{routes:c}=await this.getChildConfig(e,i,r),l=i._loadedInjector??e,{parameters:u,consumedSegments:d,remainingSegments:f}=a,h=new Jo(d,u,Object.freeze(Ae({},this.urlTree.queryParams)),this.urlTree.fragment,hb(i),yi(i),i.component??i._loadedComponent??null,i,pb(i),e),v=wd(h,o,this.paramsInheritanceStrategy);h.params=Object.freeze(v.params),h.data=Object.freeze(v.data);let{segmentGroup:x,slicedSegments:g}=fb(t,d,f,c);if(g.length===0&&x.hasChildren()){let C=await this.processChildren(l,c,x,h);return new Fn(h,C)}if(c.length===0&&g.length===0)return new Fn(h,[]);let p=yi(i)===s,b=await this.processSegment(l,c,x,g,p?Ze:s,!0,h);return new Fn(h,b instanceof Fn?[b]:[])}async getChildConfig(e,t,i){if(t.children)return{routes:t.children,injector:e};if(t.loadChildren){if(t._loadedRoutes!==void 0){let s=t._loadedNgModuleFactory;return s&&!t._loadedInjector&&(t._loadedInjector=s.create(e).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await _d(jR(e,t,i,this.urlSerializer,this.abortSignal))){let s=await this.configLoader.loadChildren(e,t);return t._loadedRoutes=s.routes,t._loadedInjector=s.injector,t._loadedNgModuleFactory=s.factory,s}throw qR(t)}return{routes:[],injector:e}}};function s1(n){n.sort((e,t)=>e.value.outlet===Ze?-1:t.value.outlet===Ze?1:e.value.outlet.localeCompare(t.value.outlet))}function o1(n){let e=n.value.routeConfig;return e&&e.path===""}function jb(n){let e=[],t=new Set;for(let i of n){if(!o1(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=jb(i.children);e.push(new Fn(i.value,r))}return e.filter(i=>!t.has(i))}function hb(n){return n.data||{}}function pb(n){return n.resolve||{}}function a1(n,e,t,i,r,s,o){return yn(async a=>{let{state:c,tree:l}=await i1(n,e,t,i,a.extractedUrl,r,s,o);return Dt(Ae({},a),{targetSnapshot:c,urlAfterRedirects:l})})}function c1(n){return yn(e=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=e;if(!i.length)return ot(e);let r=new Set(i.map(a=>a.route)),s=new Set;for(let a of r)if(!s.has(a))for(let c of Wb(a))s.add(c);let o=0;return Wt(s).pipe(Xl(a=>r.has(a)?l1(a,t,n):(a.data=wd(a,a.parent,n).resolve,ot(void 0))),Ai(()=>o++),Yl(1),yn(a=>o===s.size?ot(e):tn))})}function Wb(n){let e=n.children.map(t=>Wb(t)).flat();return[n,...e]}function l1(n,e,t){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!Pb(i)&&(r[kc]=i.title),Fa(()=>(n.data=wd(n,n.parent,t).resolve,u1(r,n,e).pipe(At(s=>(n._resolvedData=s,n.data=Ae(Ae({},n.data),s),null)))))}function u1(n,e,t){let i=Zg(n);if(i.length===0)return ot({});let r={};return Wt(i).pipe(yn(s=>d1(n[s],e,t).pipe(Qi(),Ai(o=>{if(o instanceof Oc)throw Dd(new Ws,o);r[s]=o}))),Yl(1),At(()=>r),Oa(s=>Bb(s)?tn:up(s)))}function d1(n,e,t){let i=e._environmentInjector,r=oa(n,i),s=r.resolve?r.resolve(e,t):dn(i,()=>r(e,t));return qs(s)}function mb(n){return er(e=>{let t=n(e);return t?Wt(t).pipe(At(()=>e)):ot(e)})}var $b=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ze);return i}getResolvedTitleForRoute(t){return t.data[kc]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:()=>xe(f1),providedIn:"root"})}return n})(),f1=(()=>{class n extends $b{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Qe(ob))};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Nd=new Ve("",{factory:()=>({})}),Pd=new Ve(""),qb=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=xe(Rg);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let s=await vb(dn(t,()=>i.loadComponent())),o=await Yb(Xb(s));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o,o}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let s=await h1(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,s}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function h1(n,e,t,i){let r=await vb(dn(t,()=>n.loadChildren())),s=await Yb(Xb(r)),o;s instanceof Ju||Array.isArray(s)?o=s:o=await e.compileModuleAsync(s),i&&i(n);let a,c,l=!1,u;return Array.isArray(o)?(c=o,l=!0):(a=o.create(t).injector,u=o,c=a.get(Pd,[],{optional:!0,self:!0}).flat()),{routes:c.map(bv),injector:a,factory:u}}function p1(n){return n&&typeof n=="object"&&"default"in n}function Xb(n){return p1(n)?n.default:n}async function Yb(n){return n}var Sv=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:()=>xe(m1),providedIn:"root"})}return n})(),m1=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zb=new Ve("");var g1=()=>{},Jb=new Ve(""),Kb=(()=>{class n{currentNavigation=ur(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ur(null);events=new Qt;transitionAbortWithErrorSubject=new Qt;configLoader=xe(qb);environmentInjector=xe(Ut);destroyRef=xe(lr);urlSerializer=xe(Ad);rootContexts=xe(Uc);location=xe(Xo);inputBindingEnabled=xe(Id,{optional:!0})!==null;titleStrategy=xe($b);options=xe(Nd,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=xe(Sv);createViewTransition=xe(Zb,{optional:!0});navigationErrorHandler=xe(Jb,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>ot(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new rv(r)),i=r=>this.events.next(new sv(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;hi(()=>{this.transitions?.next(Dt(Ae({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))})}setupNavigations(t){return this.transitions=new en(null),this.transitions.pipe(Ji(i=>i!==null),er(i=>{let r=!1,s=new AbortController,o=()=>!r&&this.currentTransition?.id===i.id;return ot(i).pipe(er(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Mn.SupersededByNewNavigation),tn;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:c?Dt(Ae({},c),{previousNavigation:null}):null,abort:()=>s.abort()});let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new $r(a.id,this.urlSerializer.serialize(a.rawUrl),"",bd.IgnoredSameUrlNavigation)),a.resolve(!1),tn;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return ot(a).pipe(er(d=>(this.events.next(new ta(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),d.id!==this.navigationId?tn:Promise.resolve(d))),a1(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),Ai(d=>{i.targetSnapshot=d.targetSnapshot,i.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=d.urlAfterRedirects,h));let f=new Pc(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:v,extras:x}=a,g=new ta(d,this.urlSerializer.serialize(f),h,v);this.events.next(g);let p=Rb(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=Dt(Ae({},a),{targetSnapshot:p,urlAfterRedirects:f,extras:Dt(Ae({},x),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(b=>(b.finalUrl=f,b)),ot(i)}else return this.events.next(new $r(a.id,this.urlSerializer.serialize(a.extractedUrl),"",bd.IgnoredByUrlHandlingStrategy)),a.resolve(!1),tn}),At(a=>{let c=new ev(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(c),this.currentTransition=i=Dt(Ae({},a),{guards:wR(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),LR(a=>this.events.next(a)),er(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Dd(this.urlSerializer,a.guardsResult);let c=new tv(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(c),!o())return tn;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",Mn.GuardRejected),tn;if(a.guards.canActivateChecks.length===0)return ot(a);let l=new nv(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(l),!o())return tn;let u=!1;return ot(a).pipe(c1(this.paramsInheritanceStrategy),Ai({next:()=>{u=!0;let d=new iv(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(d)},complete:()=>{u||this.cancelNavigationTransition(a,"",Mn.NoDataFromResolver)}}))}),mb(a=>{let c=u=>{let d=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let f=u._environmentInjector;d.push(this.configLoader.loadComponent(f,u.routeConfig).then(h=>{u.component=h}))}for(let f of u.children)d.push(...c(f));return d},l=c(a.targetSnapshot.root);return l.length===0?ot(a):Wt(Promise.all(l).then(()=>a))}),mb(()=>this.afterPreactivation()),er(()=>{let{currentSnapshot:a,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return l?Wt(l).pipe(At(()=>i)):ot(i)}),Ki(1),At(a=>{let c=MR(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=Dt(Ae({},a),{targetRouterState:c}),this.currentNavigation.update(l=>(l.targetRouterState=c,l)),this.events.next(new ia),o()&&(new mv(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),o()&&(r=!0,this.currentNavigation.update(l=>(l.abort=g1,l)),this.lastSuccessfulNavigation.set(hi(this.currentNavigation)),this.events.next(new Wr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)))}),La(Vb(s.signal).pipe(Ji(()=>!r&&!i.targetRouterState),Ai(()=>{this.cancelNavigationTransition(i,s.signal.reason+"",Mn.Aborted)}))),Ai({complete:()=>{r=!0}}),La(this.transitionAbortWithErrorSubject.pipe(Ai(a=>{throw a}))),fp(()=>{s.abort(),r||this.cancelNavigationTransition(i,"",Mn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Oa(a=>{if(r=!0,this.destroyed)return i.resolve(!1),tn;if(Ub(a))this.events.next(new _i(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),ER(a)?this.events.next(new ra(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let c=new na(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let l=dn(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Oc){let{message:u,cancellationCode:d}=Dd(this.urlSerializer,l);this.events.next(new _i(i.id,this.urlSerializer.serialize(i.extractedUrl),u,d)),this.events.next(new ra(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return tn}))}))}cancelNavigationTransition(t,i,r){let s=new _i(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=hi(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function v1(n){return n!==Ic}var Qb=new Ve("");var y1=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:()=>xe(_1),providedIn:"root"})}return n})(),xv=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}shouldDestroyInjector(e){return!0}},_1=(()=>{class n extends xv{static \u0275fac=(()=>{let t;return function(r){return(t||(t=uc(n)))(r||n)}})();static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ev=(()=>{class n{urlSerializer=xe(Ad);options=xe(Nd,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=xe(Xo);urlHandlingStrategy=xe(Sv);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Bi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof Bi?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=Rb(null,xe(Ut));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:()=>xe(x1),providedIn:"root"})}return n})(),x1=(()=>{class n extends Ev{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof ta?this.updateStateMemento():t instanceof $r?this.commitTransition(i):t instanceof Pc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof ia?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof _i&&!Ib(t)?this.restoreHistory(i):t instanceof na?this.restoreHistory(i,!0):t instanceof Wr&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,c=Ae(Ae({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=Ae(Ae({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=uc(n)))(r||n)}})();static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function eS(n,e){n.events.pipe(Ji(t=>t instanceof Wr||t instanceof _i||t instanceof na||t instanceof $r),At(t=>t instanceof Wr||t instanceof $r?0:(t instanceof _i?t.code===Mn.Redirect||t.code===Mn.SupersededByNewNavigation:!1)?2:1),Ji(t=>t!==2),Ki(1)).subscribe(()=>{e()})}var tS={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},nS={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},wv=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=xe(Sg);stateManager=xe(Ev);options=xe(Nd,{optional:!0})||{};pendingTasks=xe(Ur);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=xe(Kb);urlSerializer=xe(Ad);location=xe(Xo);urlHandlingStrategy=xe(Sv);injector=xe(Ut);_events=new Qt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=xe(y1);injectorCleanup=xe(Qb,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=xe(Pd,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!xe(Id,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Kt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=hi(this.navigationTransitions.currentNavigation);if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof _i&&i.code!==Mn.Redirect&&i.code!==Mn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Wr)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof ra){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=Ae({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||v1(r.source)},o);this.scheduleNavigation(a,Ic,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}yR(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ic,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=Ae({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s).catch(c=>{this.disposed||this.injector.get(fi)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return hi(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(bv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=Ae(Ae({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=Cb(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return Db(d,t,u,l??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=ea(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Ic,null,i)}navigate(t,i={skipLocationChange:!1}){return M1(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Co(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=Ae({},tS):i===!1?r=Ae({},nS):r=i,ea(t))return ab(this.currentUrlTree,t,r);let s=this.parseUrl(t);return ab(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return eS(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function M1(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ue(4008,!1)}var S1=new Ve("");function Cv(n,...e){return To([{provide:Pd,multi:!0,useValue:n},[],{provide:$s,useFactory:E1},{provide:Qu,multi:!0,useFactory:w1},e.map(t=>t.\u0275providers)])}function E1(){return xe(wv).routerState.root}function w1(){let n=xe(ai);return e=>{let t=n.get(Vs);if(e!==t.components[0])return;let i=n.get(wv),r=n.get(C1);n.get(D1)===1&&i.initialNavigation(),n.get(T1,null,{optional:!0})?.setUpPreloading(),n.get(S1,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var C1=new Ve("",{factory:()=>new Qt}),D1=new Ve("",{factory:()=>1});var T1=new Ve("");var iS=[];var rS={providers:[Mm(),Cv(iS)]};var wS=0,oy=1,CS=2;var dl=1,DS=2,Sa=3,Mr=0,bn=1,ni=2,$i=0,Qs=1,ay=2,cy=3,ly=4,TS=5;var es=100,AS=101,IS=102,RS=103,NS=104,PS=200,FS=201,OS=202,LS=203,sf=204,of=205,kS=206,US=207,BS=208,VS=209,HS=210,zS=211,GS=212,jS=213,WS=214,af=0,cf=1,lf=2,eo=3,uf=4,df=5,ff=6,hf=7,uy=0,$S=1,qS=2,Ei=0,dy=1,fy=2,hy=3,py=4,my=5,gy=6,vy=7;var Kv=300,cs=301,so=302,Hf=303,zf=304,fl=306,pf=1e3,zi=1001,mf=1002,Yt=1003,XS=1004;var hl=1005;var an=1006,Gf=1007;var ls=1008;var Gn=1009,yy=1010,_y=1011,Ea=1012,jf=1013,wi=1014,Ci=1015,qi=1016,Wf=1017,$f=1018,wa=1020,xy=35902,My=35899,by=1021,Sy=1022,ii=1023,ji=1026,us=1027,Ey=1028,qf=1029,oo=1030,Xf=1031;var Yf=1033,pl=33776,ml=33777,gl=33778,vl=33779,Zf=35840,Jf=35841,Kf=35842,Qf=35843,eh=36196,th=37492,nh=37496,ih=37488,rh=37489,sh=37490,oh=37491,ah=37808,ch=37809,lh=37810,uh=37811,dh=37812,fh=37813,hh=37814,ph=37815,mh=37816,gh=37817,vh=37818,yh=37819,_h=37820,xh=37821,Mh=36492,bh=36494,Sh=36495,Eh=36283,wh=36284,Ch=36285,Dh=36286;var $c=2300,gf=2301,rf=2302,Qv=2303,ey=2400,ty=2401,ny=2402;var YS=3200;var ZS=0,JS=1,Sr="",kn="srgb",to="srgb-linear",qc="linear",_t="srgb";var Ks=7680;var iy=519,KS=512,QS=513,eE=514,Th=515,tE=516,nE=517,Ah=518,iE=519,ry=35044;var wy="300 es",Si=2e3,Xc=2001;function I1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function R1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Yc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rE(){let n=Yc("canvas");return n.style.display="block",n}var sS={},xa=null;function Cy(...n){let e="THREE."+n.shift();xa?xa("log",e,...n):console.log(e,...n)}function sE(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=sE(n);let e="THREE."+n.shift();if(xa)xa("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ge(...n){n=sE(n);let e="THREE."+n.shift();if(xa)xa("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zc(...n){let e=n.join(" ");e in sS||(sS[e]=!0,je(...n))}function oE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var aE={[af]:cf,[lf]:ff,[uf]:hf,[eo]:df,[cf]:af,[ff]:lf,[hf]:uf,[df]:eo},br=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dv=Math.PI/180,vf=180/Math.PI;function yl(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function N1(n,e){return(n%e+e)%e}function Tv(n,e,t){return(1-t)*n+t*e}function Vc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var xt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],v=s[o+2],x=s[o+3];if(d!==x||c!==f||l!==h||u!==v){let g=c*f+l*h+u*v+d*x;g<0&&(f=-f,h=-h,v=-v,x=-x,g=-g);let p=1-a;if(g<.9995){let b=Math.acos(g),C=Math.sin(b);p=Math.sin(p*b)/C,a=Math.sin(a*b)/C,c=c*p+f*a,l=l*p+h*a,u=u*p+v*a,d=d*p+x*a}else{c=c*p+f*a,l=l*p+h*a,u=u*p+v*a,d=d*p+x*a;let b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],v=s[o+3];return e[t]=a*v+u*d+c*h-l*f,e[t+1]=c*v+u*f+l*d-a*h,e[t+2]=l*v+u*h+a*f-c*d,e[t+3]=u*v-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*v,this._y=l*h*d-f*u*v,this._z=l*u*v+f*h*d,this._w=l*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+l*h*v,this._y=l*h*d-f*u*v,this._z=l*u*v-f*h*d,this._w=l*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-l*h*v,this._y=l*h*d+f*u*v,this._z=l*u*v+f*h*d,this._w=l*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-l*h*v,this._y=l*h*d+f*u*v,this._z=l*u*v-f*h*d,this._w=l*u*d+f*h*v;break;case"YZX":this._x=f*u*d+l*h*v,this._y=l*h*d+f*u*v,this._z=l*u*v-f*h*d,this._w=l*u*d-f*h*v;break;case"XZY":this._x=f*u*d-l*h*v,this._y=l*h*d-f*u*v,this._z=l*u*v+f*h*d,this._w=l*u*d+f*h*v;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oS.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oS.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Av.copy(this).projectOnVector(e),this.sub(Av)}reflect(e){return this.sub(Av.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Av=new V,oS=new Wi,Ke=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],x=r[0],g=r[3],p=r[6],b=r[1],C=r[4],E=r[7],T=r[2],D=r[5],I=r[8];return s[0]=o*x+a*b+c*T,s[3]=o*g+a*C+c*D,s[6]=o*p+a*E+c*I,s[1]=l*x+u*b+d*T,s[4]=l*g+u*C+d*D,s[7]=l*p+u*E+d*I,s[2]=f*x+h*b+v*T,s[5]=f*g+h*C+v*D,s[8]=f*p+h*E+v*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,v=t*d+i*f+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Iv.makeScale(e,t)),this}rotate(e){return this.premultiply(Iv.makeRotation(-e)),this}translate(e,t){return this.premultiply(Iv.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Iv=new Ke,aS=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cS=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P1(){let n={enabled:!0,workingColorSpace:to,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=_a(r.r),r.g=_a(r.g),r.b=_a(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?qc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[to]:{primaries:e,whitePoint:i,transfer:qc,toXYZ:aS,fromXYZ:cS,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:aS,fromXYZ:cS,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),n}var at=P1();function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _a(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var aa,yf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{aa===void 0&&(aa=Yc("canvas")),aa.width=e.width,aa.height=e.height;let r=aa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=aa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F1=0,Ma=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rv(r[o].image)):s.push(Rv(r[o]))}else s=Rv(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Rv(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var O1=0,Nv=new V,Er=(()=>{class n extends br{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=zi,s=zi,o=an,a=ls,c=ii,l=Gn,u=n.DEFAULT_ANISOTROPY,d=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=yl(),this.name="",this.source=new Ma(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nv).x}get height(){return this.source.getSize(Nv).y}get depth(){return this.source.getSize(Nv).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){je(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){je(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pf:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case mf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pf:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case mf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Kv,n.DEFAULT_ANISOTROPY=1,n})(),Nt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],v=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+g)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,E=(h+1)/2,T=(p+1)/2,D=(u+f)/4,I=(d+x)/4,y=(v+g)/4;return C>E&&C>T?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=D/i,s=I/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=I/s,r=y/s),this.set(i,r,s,t),this}let b=Math.sqrt((g-v)*(g-v)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(g-v)/b,this.y=(d-x)/b,this.z=(f-u)/b,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_f=class extends br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new Er(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ma(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends _f{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jc=class extends Er{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xf=class extends Er{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,v,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,v,x,g)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,v,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/ca.setFromMatrixColumn(e,0).length(),s=1/ca.setFromMatrixColumn(e,1).length(),o=1/ca.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,v=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+v*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=v+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,v=l*u,x=l*d;t[0]=f+x*a,t[4]=v*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-v,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,v=l*u,x=l*d;t[0]=f-x*a,t[4]=-o*d,t[8]=v+h*a,t[1]=h+v*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,v=a*u,x=a*d;t[0]=c*u,t[4]=v*l-h,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=h*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,v=a*c,x=a*l;t[0]=c*u,t[4]=x-f*d,t[8]=v*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+v,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*c,h=o*l,v=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-v,t[2]=v*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L1,e,k1)}lookAt(e,t,i){let r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),qr.crossVectors(i,On),qr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),qr.crossVectors(i,On)),qr.normalize(),Fd.crossVectors(On,qr),r[0]=qr.x,r[4]=Fd.x,r[8]=On.x,r[1]=qr.y,r[5]=Fd.y,r[9]=On.y,r[2]=qr.z,r[6]=Fd.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],x=i[6],g=i[10],p=i[14],b=i[3],C=i[7],E=i[11],T=i[15],D=r[0],I=r[4],y=r[8],S=r[12],Z=r[1],A=r[5],B=r[9],z=r[13],J=r[2],H=r[6],G=r[10],k=r[14],he=r[3],le=r[7],ue=r[11],ye=r[15];return s[0]=o*D+a*Z+c*J+l*he,s[4]=o*I+a*A+c*H+l*le,s[8]=o*y+a*B+c*G+l*ue,s[12]=o*S+a*z+c*k+l*ye,s[1]=u*D+d*Z+f*J+h*he,s[5]=u*I+d*A+f*H+h*le,s[9]=u*y+d*B+f*G+h*ue,s[13]=u*S+d*z+f*k+h*ye,s[2]=v*D+x*Z+g*J+p*he,s[6]=v*I+x*A+g*H+p*le,s[10]=v*y+x*B+g*G+p*ue,s[14]=v*S+x*z+g*k+p*ye,s[3]=b*D+C*Z+E*J+T*he,s[7]=b*I+C*A+E*H+T*le,s[11]=b*y+C*B+E*G+T*ue,s[15]=b*S+C*z+E*k+T*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],v=e[3],x=e[7],g=e[11],p=e[15],b=c*h-l*f,C=a*h-l*d,E=a*f-c*d,T=o*h-l*u,D=o*f-c*u,I=o*d-a*u;return t*(x*b-g*C+p*E)-i*(v*b-g*T+p*D)+r*(v*C-x*T+p*I)-s*(v*E-x*D+g*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],v=e[12],x=e[13],g=e[14],p=e[15],b=t*a-i*o,C=t*c-r*o,E=t*l-s*o,T=i*c-r*a,D=i*l-s*a,I=r*l-s*c,y=u*x-d*v,S=u*g-f*v,Z=u*p-h*v,A=d*g-f*x,B=d*p-h*x,z=f*p-h*g,J=b*z-C*B+E*A+T*Z-D*S+I*y;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/J;return e[0]=(a*z-c*B+l*A)*H,e[1]=(r*B-i*z-s*A)*H,e[2]=(x*I-g*D+p*T)*H,e[3]=(f*D-d*I-h*T)*H,e[4]=(c*Z-o*z-l*S)*H,e[5]=(t*z-r*Z+s*S)*H,e[6]=(g*E-v*I-p*C)*H,e[7]=(u*I-f*E+h*C)*H,e[8]=(o*B-a*Z+l*y)*H,e[9]=(i*Z-t*B-s*y)*H,e[10]=(v*D-x*E+p*b)*H,e[11]=(d*E-u*D-h*b)*H,e[12]=(a*S-o*A-c*y)*H,e[13]=(t*A-i*S+r*y)*H,e[14]=(x*C-v*T-g*b)*H,e[15]=(u*T-d*C+f*b)*H,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,v=s*d,x=o*u,g=o*d,p=a*d,b=c*l,C=c*u,E=c*d,T=i.x,D=i.y,I=i.z;return r[0]=(1-(x+p))*T,r[1]=(h+E)*T,r[2]=(v-C)*T,r[3]=0,r[4]=(h-E)*D,r[5]=(1-(f+p))*D,r[6]=(g+b)*D,r[7]=0,r[8]=(v+C)*I,r[9]=(g-b)*I,r[10]=(1-(f+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=ca.set(r[0],r[1],r[2]).length(),a=ca.set(r[4],r[5],r[6]).length(),c=ca.set(r[8],r[9],r[10]).length();s<0&&(o=-o),xi.copy(this);let l=1/o,u=1/a,d=1/c;return xi.elements[0]*=l,xi.elements[1]*=l,xi.elements[2]*=l,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=d,xi.elements[9]*=d,xi.elements[10]*=d,t.setFromRotationMatrix(xi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=Si,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),v,x;if(c)v=s/(o-s),x=o*s/(o-s);else if(a===Si)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Xc)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Si,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),v,x;if(c)v=1/(o-s),x=o/(o-s);else if(a===Si)v=-2/(o-s),x=-(o+s)/(o-s);else if(a===Xc)v=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ca=new V,xi=new Lt,L1=new V(0,0,0),k1=new V(1,1,1),qr=new V,Fd=new V,On=new V,lS=new Lt,uS=new Wi,no=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],v=s[10];switch(i){case"XYZ":this._y=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,v),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return lS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lS,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return uS.setFromEuler(this),this.setFromQuaternion(uS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Kc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},U1=0,dS=new V,la=new Wi,mr=new Lt,Od=new V,Hc=new V,B1=new V,V1=new Wi,fS=new V(1,0,0),hS=new V(0,1,0),pS=new V(0,0,1),mS={type:"added"},H1={type:"removed"},ua={type:"childadded",child:null},Pv={type:"childremoved",child:null},wr=(()=>{class n extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,i=new no,r=new Wi,s=new V(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ke}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return la.setFromAxisAngle(t,i),this.quaternion.multiply(la),this}rotateOnWorldAxis(t,i){return la.setFromAxisAngle(t,i),this.quaternion.premultiply(la),this}rotateX(t){return this.rotateOnAxis(fS,t)}rotateY(t){return this.rotateOnAxis(hS,t)}rotateZ(t){return this.rotateOnAxis(pS,t)}translateOnAxis(t,i){return dS.copy(t).applyQuaternion(this.quaternion),this.position.add(dS.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(fS,t)}translateY(t){return this.translateOnAxis(hS,t)}translateZ(t){return this.translateOnAxis(pS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Od.copy(t):Od.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Hc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Hc,Od,this.up):mr.lookAt(Od,Hc,this.up),this.quaternion.setFromRotationMatrix(mr),s&&(mr.extractRotation(s.matrixWorld),la.setFromRotationMatrix(mr),this.quaternion.premultiply(la.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mS),ua.child=t,this.dispatchEvent(ua),ua.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(H1),Pv.child=t,this.dispatchEvent(Pv),Pv.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mr.multiply(t.parent.matrixWorld)),t.applyMatrix4(mr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mS),ua.child=t,this.dispatchEvent(ua),ua.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hc,t,B1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hc,V1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,s=t.z,o=this.matrix.elements;o[12]+=i-o[0]*i-o[4]*r-o[8]*s,o[13]+=r-o[1]*i-o[5]*r-o[9]*s,o[14]+=s-o[2]*i-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Dt(Ae({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>Ae({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),v=a(t.animations),x=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),v.length>0&&(r.animations=v),x.length>0&&(r.nodes=x)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new V(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Gi=class extends wr{constructor(){super(),this.isGroup=!0,this.type="Group"}},z1={type:"move"},ba=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;l.inputState.pinching&&f>h+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z1)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},cE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Ld={h:0,s:0,l:0};function Fv(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ht=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=N1(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Fv(o,s,e+1/3),this.g=Fv(o,s,e),this.b=Fv(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=kn){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){let i=cE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return at.workingToColorSpace(hn.copy(this),e),Math.round(st(hn.r*255,0,255))*65536+Math.round(st(hn.g*255,0,255))*256+Math.round(st(hn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(hn.copy(this),t);let i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=kn){at.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,r=hn.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Ld);let i=Tv(Xr.h,Ld.h,t),r=Tv(Xr.s,Ld.s,t),s=Tv(Xr.l,Ld.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ht;ht.NAMES=cE;var Qc=class extends wr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new no,this.environmentIntensity=1,this.environmentRotation=new no,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mi=new V,gr=new V,Ov=new V,vr=new V,da=new V,fa=new V,gS=new V,Lv=new V,kv=new V,Uv=new V,Bv=new Nt,Vv=new Nt,Hv=new Nt,Qr=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mi.subVectors(e,t),r.cross(Mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mi.subVectors(r,t),gr.subVectors(i,t),Ov.subVectors(e,t);let o=Mi.dot(Mi),a=Mi.dot(gr),c=Mi.dot(Ov),l=gr.dot(gr),u=gr.dot(Ov),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,v=(o*u-a*c)*f;return s.set(1-h-v,v,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,vr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vr.x),c.addScaledVector(o,vr.y),c.addScaledVector(a,vr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Bv.setScalar(0),Vv.setScalar(0),Hv.setScalar(0),Bv.fromBufferAttribute(e,t),Vv.fromBufferAttribute(e,i),Hv.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bv,s.x),o.addScaledVector(Vv,s.y),o.addScaledVector(Hv,s.z),o}static isFrontFacing(e,t,i,r){return Mi.subVectors(i,t),gr.subVectors(e,t),Mi.cross(gr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Mi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;da.subVectors(r,i),fa.subVectors(s,i),Lv.subVectors(e,i);let c=da.dot(Lv),l=fa.dot(Lv);if(c<=0&&l<=0)return t.copy(i);kv.subVectors(e,r);let u=da.dot(kv),d=fa.dot(kv);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(da,o);Uv.subVectors(e,s);let h=da.dot(Uv),v=fa.dot(Uv);if(v>=0&&h<=v)return t.copy(s);let x=h*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(fa,a);let g=u*v-h*d;if(g<=0&&d-u>=0&&h-v>=0)return gS.subVectors(s,r),a=(d-u)/(d-u+(h-v)),t.copy(r).addScaledVector(gS,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(da,o).addScaledVector(fa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ts=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(s,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kd.copy(i.boundingBox)),kd.applyMatrix4(e.matrixWorld),this.union(kd)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zc),Ud.subVectors(this.max,zc),ha.subVectors(e.a,zc),pa.subVectors(e.b,zc),ma.subVectors(e.c,zc),Yr.subVectors(pa,ha),Zr.subVectors(ma,pa),Xs.subVectors(ha,ma);let t=[0,-Yr.z,Yr.y,0,-Zr.z,Zr.y,0,-Xs.z,Xs.y,Yr.z,0,-Yr.x,Zr.z,0,-Zr.x,Xs.z,0,-Xs.x,-Yr.y,Yr.x,0,-Zr.y,Zr.x,0,-Xs.y,Xs.x,0];return!zv(t,ha,pa,ma,Ud)||(t=[1,0,0,0,1,0,0,0,1],!zv(t,ha,pa,ma,Ud))?!1:(Bd.crossVectors(Yr,Zr),t=[Bd.x,Bd.y,Bd.z],zv(t,ha,pa,ma,Ud))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yr=[new V,new V,new V,new V,new V,new V,new V,new V],bi=new V,kd=new ts,ha=new V,pa=new V,ma=new V,Yr=new V,Zr=new V,Xs=new V,zc=new V,Ud=new V,Bd=new V,Ys=new V;function zv(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ys.fromArray(n,s);let a=r.x*Math.abs(Ys.x)+r.y*Math.abs(Ys.y)+r.z*Math.abs(Ys.z),c=e.dot(Ys),l=t.dot(Ys),u=i.dot(Ys);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var kt=new V,Vd=new xt,G1=0,Un=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ry,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vd.fromBufferAttribute(this,t),Vd.applyMatrix3(e),this.setXY(t,Vd.x,Vd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vc(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vc(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vc(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ry&&(e.usage=this.usage),e}};var el=class extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var tl=class extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var on=class extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}},j1=new ts,Gc=new V,Gv=new V,io=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):j1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gc.subVectors(e,this.center);let t=Gc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gv.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gc.copy(e.center).add(Gv)),this.expandByPoint(Gc.copy(e.center).sub(Gv))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},W1=0,ti=new Lt,jv=new wr,ga=new V,Ln=new ts,jc=new ts,Xt=new V,Vn=class n extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I1(e)?tl:el)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return jv.lookAt(e),jv.updateMatrix(),this.applyMatrix4(jv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new on(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];jc.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Ln.min,jc.min),Ln.expandByPoint(Xt),Xt.addVectors(Ln.max,jc.max),Ln.expandByPoint(Xt)):(Ln.expandByPoint(jc.min),Ln.expandByPoint(jc.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xt.fromBufferAttribute(a,l),c&&(ga.fromBufferAttribute(e,l),Xt.add(ga)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new V,c[y]=new V;let l=new V,u=new V,d=new V,f=new xt,h=new xt,v=new xt,x=new V,g=new V;function p(y,S,Z){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,Z),f.fromBufferAttribute(s,y),h.fromBufferAttribute(s,S),v.fromBufferAttribute(s,Z),u.sub(l),d.sub(l),h.sub(f),v.sub(f);let A=1/(h.x*v.y-v.x*h.y);isFinite(A)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(A),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(A),a[y].add(x),a[S].add(x),a[Z].add(x),c[y].add(g),c[S].add(g),c[Z].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,S=b.length;y<S;++y){let Z=b[y],A=Z.start,B=Z.count;for(let z=A,J=A+B;z<J;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let C=new V,E=new V,T=new V,D=new V;function I(y){T.fromBufferAttribute(r,y),D.copy(T);let S=a[y];C.copy(S),C.sub(T.multiplyScalar(T.dot(S))).normalize(),E.crossVectors(D,S);let A=E.dot(c[y])<0?-1:1;o.setXYZW(y,C.x,C.y,C.z,A)}for(let y=0,S=b.length;y<S;++y){let Z=b[y],A=Z.start,B=Z.count;for(let z=A,J=A+B;z<J;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,u=new V,d=new V;if(e)for(let f=0,h=e.count;f<h;f+=3){let v=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,v=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)f[v++]=l[h++]}return new Un(f,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $1=0,ns=class extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=Qs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=of,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sf&&(i.blendSrc=this.blendSrc),this.blendDst!==of&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var _r=new V,Wv=new V,Hd=new V,Jr=new V,$v=new V,zd=new V,qv=new V,nl=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wv.copy(e).add(t).multiplyScalar(.5),Hd.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(Wv);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Hd),a=Jr.dot(this.direction),c=-Jr.dot(Hd),l=Jr.lengthSq(),u=Math.abs(1-o*o),d,f,h,v;if(u>0)if(d=o*c-a,f=o*a-c,v=s*u,d>=0)if(f>=-v)if(f<=v){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=v?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Wv).addScaledVector(Hd,f),h}intersectSphere(e,t){_r.subVectors(e.center,this.origin);let i=_r.dot(this.direction),r=_r.dot(_r)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,r,s){$v.subVectors(t,e),zd.subVectors(i,e),qv.crossVectors($v,zd);let o=this.direction.dot(qv),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jr.subVectors(this.origin,e);let c=a*this.direction.dot(zd.crossVectors(Jr,zd));if(c<0)return null;let l=a*this.direction.dot($v.cross(Jr));if(l<0||c+l>o)return null;let u=-a*Jr.dot(qv);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new no,this.combine=uy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vS=new Lt,Zs=new nl,Gd=new io,yS=new V,jd=new V,Wd=new V,$d=new V,Xv=new V,qd=new V,_S=new V,Xd=new V,mn=class extends wr{constructor(e=new Vn,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){qd.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Xv.fromBufferAttribute(d,e),o?qd.addScaledVector(Xv,u):qd.addScaledVector(Xv.sub(t),u))}t.add(qd)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gd.copy(i.boundingSphere),Gd.applyMatrix4(s),Zs.copy(e.ray).recast(e.near),!(Gd.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Gd,yS)===null||Zs.origin.distanceToSquared(yS)>(e.far-e.near)**2))&&(vS.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(vS),!(i.boundingBox!==null&&Zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){let g=f[v],p=o[g.materialIndex],b=Math.max(g.start,h.start),C=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let E=b,T=C;E<T;E+=3){let D=a.getX(E),I=a.getX(E+1),y=a.getX(E+2);r=Yd(this,p,e,i,l,u,d,D,I,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=v,p=x;g<p;g+=3){let b=a.getX(g),C=a.getX(g+1),E=a.getX(g+2);r=Yd(this,o,e,i,l,u,d,b,C,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){let g=f[v],p=o[g.materialIndex],b=Math.max(g.start,h.start),C=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let E=b,T=C;E<T;E+=3){let D=E,I=E+1,y=E+2;r=Yd(this,p,e,i,l,u,d,D,I,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let g=v,p=x;g<p;g+=3){let b=g,C=g+1,E=g+2;r=Yd(this,o,e,i,l,u,d,b,C,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function q1(n,e,t,i,r,s,o,a){let c;if(e.side===bn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Mr,a),c===null)return null;Xd.copy(a),Xd.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Xd);return l<t.near||l>t.far?null:{distance:l,point:Xd.clone(),object:n}}function Yd(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,jd),n.getVertexPosition(c,Wd),n.getVertexPosition(l,$d);let u=q1(n,e,t,i,jd,Wd,$d,_S);if(u){let d=new V;Qr.getBarycoord(_S,jd,Wd,$d,d),r&&(u.uv=Qr.getInterpolatedAttribute(r,a,c,l,d,new xt)),s&&(u.uv1=Qr.getInterpolatedAttribute(s,a,c,l,d,new xt)),o&&(u.normal=Qr.getInterpolatedAttribute(o,a,c,l,d,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new V,materialIndex:0};Qr.getNormal(jd,Wd,$d,f.normal),u.face=f,u.barycoord=d}return u}var Mf=class extends Er{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Yt,u=Yt,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yv=new V,X1=new V,Y1=new Ke,Hi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Yv.subVectors(i,t).cross(X1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Yv),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Y1.getNormalMatrix(e),r=this.coplanarPoint(Yv).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new io,Z1=new xt(.5,.5),Zd=new V,il=class{constructor(e=new Hi,t=new Hi,i=new Hi,r=new Hi,s=new Hi,o=new Hi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],h=s[7],v=s[8],x=s[9],g=s[10],p=s[11],b=s[12],C=s[13],E=s[14],T=s[15];if(r[0].setComponents(l-o,h-u,p-v,T-b).normalize(),r[1].setComponents(l+o,h+u,p+v,T+b).normalize(),r[2].setComponents(l+a,h+d,p+x,T+C).normalize(),r[3].setComponents(l-a,h-d,p-x,T-C).normalize(),i)r[4].setComponents(c,f,g,E).normalize(),r[5].setComponents(l-c,h-f,p-g,T-E).normalize();else if(r[4].setComponents(l-c,h-f,p-g,T-E).normalize(),t===Si)r[5].setComponents(l+c,h+f,p+g,T+E).normalize();else if(t===Xc)r[5].setComponents(c,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=Z1.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Zd.x=r.normal.x>0?e.max.x:e.min.x,Zd.y=r.normal.y>0?e.max.y:e.min.y,Zd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rl=class extends ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bf=new V,Sf=new V,xS=new Lt,Wc=new nl,Jd=new io,Zv=new V,MS=new V,Ef=class extends wr{constructor(e=new Vn,t=new rl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)bf.fromBufferAttribute(t,r-1),Sf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bf.distanceTo(Sf);e.setAttribute("lineDistance",new on(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jd.copy(i.boundingSphere),Jd.applyMatrix4(r),Jd.radius+=s,e.ray.intersectsSphere(Jd)===!1)return;xS.copy(r).invert(),Wc.copy(e.ray).applyMatrix4(xS);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=h,g=v-1;x<g;x+=l){let p=u.getX(x),b=u.getX(x+1),C=Kd(this,e,Wc,c,p,b,x);C&&t.push(C)}if(this.isLineLoop){let x=u.getX(v-1),g=u.getX(h),p=Kd(this,e,Wc,c,x,g,v-1);p&&t.push(p)}}else{let h=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let x=h,g=v-1;x<g;x+=l){let p=Kd(this,e,Wc,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Kd(this,e,Wc,c,v-1,h,v-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Kd(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(bf.fromBufferAttribute(a,r),Sf.fromBufferAttribute(a,s),t.distanceSqToSegment(bf,Sf,Zv,MS)>i)return;Zv.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Zv);if(!(l<e.near||l>e.far))return{distance:l,point:MS.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var sl=class extends Er{constructor(e=[],t=cs,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var is=class extends Er{constructor(e,t,i=wi,r,s,o,a=Yt,c=Yt,l,u=ji,d=1){if(u!==ji&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ma(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wf=class extends is{constructor(e,t=wi,i=cs,r,s,o=Yt,a=Yt,c,l=ji){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ol=class extends Er{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rs=class n extends Vn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new on(l,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(d,2));function v(x,g,p,b,C,E,T,D,I,y,S){let Z=E/I,A=T/y,B=E/2,z=T/2,J=D/2,H=I+1,G=y+1,k=0,he=0,le=new V;for(let ue=0;ue<G;ue++){let ye=ue*A-z;for(let X=0;X<H;X++){let oe=X*Z-B;le[x]=oe*b,le[g]=ye*C,le[p]=J,l.push(le.x,le.y,le.z),le[x]=0,le[g]=0,le[p]=D>0?1:-1,u.push(le.x,le.y,le.z),d.push(X/I),d.push(1-ue/y),k+=1}}for(let ue=0;ue<y;ue++)for(let ye=0;ye<I;ye++){let X=f+ye+H*ue,oe=f+ye+H*(ue+1),re=f+(ye+1)+H*(ue+1),ce=f+(ye+1)+H*ue;c.push(X,oe,ce),c.push(oe,re,ce),he+=6}a.addGroup(h,he,S),h+=he,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Cf=class n extends Vn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],v=0,x=[],g=i/2,p=0;b(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(f,3)),this.setAttribute("uv",new on(h,2));function b(){let E=new V,T=new V,D=0,I=(t-e)/i;for(let y=0;y<=s;y++){let S=[],Z=y/s,A=Z*(t-e)+e;for(let B=0;B<=r;B++){let z=B/r,J=z*c+a,H=Math.sin(J),G=Math.cos(J);T.x=A*H,T.y=-Z*i+g,T.z=A*G,d.push(T.x,T.y,T.z),E.set(H,I,G).normalize(),f.push(E.x,E.y,E.z),h.push(z,1-Z),S.push(v++)}x.push(S)}for(let y=0;y<r;y++)for(let S=0;S<s;S++){let Z=x[S][y],A=x[S+1][y],B=x[S+1][y+1],z=x[S][y+1];(e>0||S!==0)&&(u.push(Z,A,z),D+=3),(t>0||S!==s-1)&&(u.push(A,B,z),D+=3)}l.addGroup(p,D,0),p+=D}function C(E){let T=v,D=new xt,I=new V,y=0,S=E===!0?e:t,Z=E===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,g*Z,0),f.push(0,Z,0),h.push(.5,.5),v++;let A=v;for(let B=0;B<=r;B++){let J=B/r*c+a,H=Math.cos(J),G=Math.sin(J);I.x=S*G,I.y=g*Z,I.z=S*H,d.push(I.x,I.y,I.z),f.push(0,Z,0),D.x=H*.5+.5,D.y=G*.5*Z+.5,h.push(D.x,D.y),v++}for(let B=0;B<r;B++){let z=T+B,J=A+B;E===!0?u.push(J,J+1,z):u.push(J+1,J,z),y+=3}l.addGroup(p,y,E===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Df=class n extends Cf{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ro=class n extends Vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],v=[],x=[],g=[];for(let p=0;p<u;p++){let b=p*f-o;for(let C=0;C<l;C++){let E=C*d-s;v.push(E,-b,0),x.push(0,0,1),g.push(C/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let C=b+l*p,E=b+l*(p+1),T=b+1+l*(p+1),D=b+1+l*p;h.push(C,E,D),h.push(E,T,D)}this.setIndex(h),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(x,3)),this.setAttribute("uv",new on(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function ao(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=ao(n[t]);for(let r in i)e[r]=i[r]}return e}function J1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dy(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var lE={clone:ao,merge:gn},K1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K1,this.fragmentShader=Q1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=J1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Tf=class extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Af=class extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},If=class extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qd(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var ss=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rf=class extends ss{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ey,endingEnd:ey}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ty:s=e,a=2*t-i;break;case ny:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ty:o=e,c=2*i-t;break;case ny:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,v=(i-t)/(r-t),x=v*v,g=x*v,p=-f*g+2*f*x-f*v,b=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*v+1,C=(-1-h)*g+(1.5+h)*x+.5*v,E=h*g-h*x;for(let T=0;T!==a;++T)s[T]=p*o[u+T]+b*o[l+T]+C*o[c+T]+E*o[d+T];return s}},Nf=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Pf=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ff=class extends ss{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,f=u.outTangents;if(!d||!f){let x=(i-t)/(r-t),g=1-x;for(let p=0;p!==a;++p)s[p]=o[l+p]*g+o[c+p]*x;return s}let h=a*2,v=e-1;for(let x=0;x!==a;++x){let g=o[l+x],p=o[c+x],b=v*h+x*2,C=f[b],E=f[b+1],T=e*h+x*2,D=d[T],I=d[T+1],y=(i-t)/(r-t),S,Z,A,B,z;for(let J=0;J<8;J++){S=y*y,Z=S*y,A=1-y,B=A*A,z=B*A;let G=z*t+3*B*y*C+3*A*S*D+Z*r-i;if(Math.abs(G)<1e-10)break;let k=3*B*(C-t)+6*A*y*(D-C)+3*S*(r-D);if(Math.abs(k)<1e-10)break;y=y-G/k,y=Math.max(0,Math.min(1,y))}s[x]=z*g+3*B*y*E+3*A*S*I+Z*p}return s}},zn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qd(t,this.TimeBufferType),this.values=Qd(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qd(e.times,Array),values:Qd(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ff(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case $c:t=this.InterpolantFactoryMethodDiscrete;break;case gf:t=this.InterpolantFactoryMethodLinear;break;case rf:t=this.InterpolantFactoryMethodSmooth;break;case Qv:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $c;case this.InterpolantFactoryMethodLinear:return gf;case this.InterpolantFactoryMethodSmooth:return rf;case this.InterpolantFactoryMethodBezier:return Qv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Ge("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ge("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&R1(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Ge("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===rf,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let v=0;v!==i;++v){let x=t[d+v];if(x!==t[f+v]||x!==t[h+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=gf;var os=class extends zn{constructor(e,t,i){super(e,t,i)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=$c;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Of=class extends zn{constructor(e,t,i,r){super(e,t,i,r)}};Of.prototype.ValueTypeName="color";var Lf=class extends zn{constructor(e,t,i,r){super(e,t,i,r)}};Lf.prototype.ValueTypeName="number";var kf=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Wi.slerpFlat(s,0,o,l-a,o,l,c);return s}},al=class extends zn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new kf(this.times,this.values,this.getValueSize(),e)}};al.prototype.ValueTypeName="quaternion";al.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends zn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=$c;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Uf=class extends zn{constructor(e,t,i,r){super(e,t,i,r)}};Uf.prototype.ValueTypeName="vector";var ef=new V,tf=new Wi,Vi=new V,cl=class extends wr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ef,tf,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ef,tf,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ef,tf,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ef,tf,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kr=new V,bS=new xt,SS=new xt,pn=class extends cl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dv*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(Dv*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,bS,SS),t.subVectors(SS,bS)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dv*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ll=class extends cl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var va=-90,ya=1,Bf=class extends wr{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new pn(va,ya,e,t);r.layers=this.layers,this.add(r);let s=new pn(va,ya,e,t);s.layers=this.layers,this.add(s);let o=new pn(va,ya,e,t);o.layers=this.layers,this.add(o);let a=new pn(va,ya,e,t);a.layers=this.layers,this.add(a);let c=new pn(va,ya,e,t);c.layers=this.layers,this.add(c);let l=new pn(va,ya,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Vf=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ty="\\[\\]\\.:\\/",eN=new RegExp("["+Ty+"]","g"),Ay="[^"+Ty+"]",tN="[^"+Ty.replace("\\.","")+"]",nN=/((?:WC+[\/:])*)/.source.replace("WC",Ay),iN=/(WCOD+)?/.source.replace("WCOD",tN),rN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ay),sN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ay),oN=new RegExp("^"+nN+iN+rN+sN+"$"),aN=["material","materials","bones","map"],sy=class{constructor(e,t,i){let r=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(eN,"")}static parseTrackName(t){let i=oN.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);aN.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;Ge("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=sy,n})();Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q9=new Float32Array(1);var ES=new V,nf,Jv,ul=class extends wr{constructor(e=new V(0,0,1),t=new V(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",nf===void 0&&(nf=new Vn,nf.setAttribute("position",new on([0,0,0,0,1,0],3)),Jv=new Df(.5,1,5,1),Jv.translate(0,-.5,0)),this.position.copy(t),this.line=new Ef(nf,new rl({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new mn(Jv,new Cn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ES.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ES,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};function Iy(n,e,t,i){let r=cN(i);switch(t){case by:return n*e;case Ey:return n*e/r.components*r.byteLength;case qf:return n*e/r.components*r.byteLength;case oo:return n*e*2/r.components*r.byteLength;case Xf:return n*e*2/r.components*r.byteLength;case Sy:return n*e*3/r.components*r.byteLength;case ii:return n*e*4/r.components*r.byteLength;case Yf:return n*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jf:case Qf:return Math.max(n,16)*Math.max(e,8)/4;case Zf:case Kf:return Math.max(n,8)*Math.max(e,8)/2;case eh:case th:case ih:case rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nh:case sh:case oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ph:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mh:case bh:case Sh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Eh:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ch:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cN(n){switch(n){case Gn:case yy:return{byteLength:1,components:1};case Ea:case _y:case qi:return{byteLength:2,components:1};case Wf:case $f:return{byteLength:2,components:4};case wi:case jf:case Ci:return{byteLength:4,components:1};case xy:case My:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function NE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uN(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,v)=>h.start-v.start);let f=0;for(let h=1;h<d.length;h++){let v=d[f],x=d[h];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,v=d.length;h<v;h++){let x=d[h];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var dN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fN=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vN=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_N=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SN=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EN=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CN=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,RN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ON=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LN=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HN="gl_FragColor = linearToOutputTexel( gl_FragColor );",zN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,WN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$N=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_P=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,VP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$P=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iF=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rF=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sF=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_F=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bF=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SF=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wF=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CF=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DF=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AF=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RF=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PF=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FF=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OF=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LF=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kF=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UF=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VF=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HF=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zF=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:dN,alphahash_pars_fragment:fN,alphamap_fragment:hN,alphamap_pars_fragment:pN,alphatest_fragment:mN,alphatest_pars_fragment:gN,aomap_fragment:vN,aomap_pars_fragment:yN,batching_pars_vertex:_N,batching_vertex:xN,begin_vertex:MN,beginnormal_vertex:bN,bsdfs:SN,iridescence_fragment:EN,bumpmap_pars_fragment:wN,clipping_planes_fragment:CN,clipping_planes_pars_fragment:DN,clipping_planes_pars_vertex:TN,clipping_planes_vertex:AN,color_fragment:IN,color_pars_fragment:RN,color_pars_vertex:NN,color_vertex:PN,common:FN,cube_uv_reflection_fragment:ON,defaultnormal_vertex:LN,displacementmap_pars_vertex:kN,displacementmap_vertex:UN,emissivemap_fragment:BN,emissivemap_pars_fragment:VN,colorspace_fragment:HN,colorspace_pars_fragment:zN,envmap_fragment:GN,envmap_common_pars_fragment:jN,envmap_pars_fragment:WN,envmap_pars_vertex:$N,envmap_physical_pars_fragment:iP,envmap_vertex:qN,fog_vertex:XN,fog_pars_vertex:YN,fog_fragment:ZN,fog_pars_fragment:JN,gradientmap_pars_fragment:KN,lightmap_pars_fragment:QN,lights_lambert_fragment:eP,lights_lambert_pars_fragment:tP,lights_pars_begin:nP,lights_toon_fragment:rP,lights_toon_pars_fragment:sP,lights_phong_fragment:oP,lights_phong_pars_fragment:aP,lights_physical_fragment:cP,lights_physical_pars_fragment:lP,lights_fragment_begin:uP,lights_fragment_maps:dP,lights_fragment_end:fP,logdepthbuf_fragment:hP,logdepthbuf_pars_fragment:pP,logdepthbuf_pars_vertex:mP,logdepthbuf_vertex:gP,map_fragment:vP,map_pars_fragment:yP,map_particle_fragment:_P,map_particle_pars_fragment:xP,metalnessmap_fragment:MP,metalnessmap_pars_fragment:bP,morphinstance_vertex:SP,morphcolor_vertex:EP,morphnormal_vertex:wP,morphtarget_pars_vertex:CP,morphtarget_vertex:DP,normal_fragment_begin:TP,normal_fragment_maps:AP,normal_pars_fragment:IP,normal_pars_vertex:RP,normal_vertex:NP,normalmap_pars_fragment:PP,clearcoat_normal_fragment_begin:FP,clearcoat_normal_fragment_maps:OP,clearcoat_pars_fragment:LP,iridescence_pars_fragment:kP,opaque_fragment:UP,packing:BP,premultiplied_alpha_fragment:VP,project_vertex:HP,dithering_fragment:zP,dithering_pars_fragment:GP,roughnessmap_fragment:jP,roughnessmap_pars_fragment:WP,shadowmap_pars_fragment:$P,shadowmap_pars_vertex:qP,shadowmap_vertex:XP,shadowmask_pars_fragment:YP,skinbase_vertex:ZP,skinning_pars_vertex:JP,skinning_vertex:KP,skinnormal_vertex:QP,specularmap_fragment:eF,specularmap_pars_fragment:tF,tonemapping_fragment:nF,tonemapping_pars_fragment:iF,transmission_fragment:rF,transmission_pars_fragment:sF,uv_pars_fragment:oF,uv_pars_vertex:aF,uv_vertex:cF,worldpos_vertex:lF,background_vert:uF,background_frag:dF,backgroundCube_vert:fF,backgroundCube_frag:hF,cube_vert:pF,cube_frag:mF,depth_vert:gF,depth_frag:vF,distance_vert:yF,distance_frag:_F,equirect_vert:xF,equirect_frag:MF,linedashed_vert:bF,linedashed_frag:SF,meshbasic_vert:EF,meshbasic_frag:wF,meshlambert_vert:CF,meshlambert_frag:DF,meshmatcap_vert:TF,meshmatcap_frag:AF,meshnormal_vert:IF,meshnormal_frag:RF,meshphong_vert:NF,meshphong_frag:PF,meshphysical_vert:FF,meshphysical_frag:OF,meshtoon_vert:LF,meshtoon_frag:kF,points_vert:UF,points_frag:BF,shadow_vert:VF,shadow_frag:HF,sprite_vert:zF,sprite_frag:GF},be={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Yi={basic:{uniforms:gn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:gn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:gn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:gn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:gn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ht(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:gn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:gn([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:gn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:gn([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:gn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:gn([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:gn([be.common,be.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:gn([be.lights,be.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Yi.physical={uniforms:gn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Ih={r:0,b:0,g:0},co=new no,jF=new Lt;function WF(n,e,t,i,r,s){let o=new ht(0),a=r===!0?0:1,c,l,u=null,d=0,f=null;function h(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){let E=b.backgroundBlurriness>0;C=e.get(C,E)}return C}function v(b){let C=!1,E=h(b);E===null?g(o,a):E&&E.isColor&&(g(E,1),C=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,C){let E=h(C);E&&(E.isCubeTexture||E.mapping===fl)?(l===void 0&&(l=new mn(new rs(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:ao(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),co.copy(C.backgroundRotation),co.x*=-1,co.y*=-1,co.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jF.makeRotationFromEuler(co)),l.material.toneMapped=at.getTransfer(E.colorSpace)!==_t,(u!==E||d!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new mn(new ro(2,2),new Hn({name:"BackgroundMaterial",uniforms:ao(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=at.getTransfer(E.colorSpace)!==_t,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,C){b.getRGB(Ih,Dy(n)),t.buffers.color.setClear(Ih.r,Ih.g,Ih.b,C,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,C=1){o.set(b),a=C,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:v,addToRenderList:x,dispose:p}}function $F(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(A,B,z,J,H){let G=!1,k=d(A,J,z,B);s!==k&&(s=k,l(s.object)),G=h(A,J,z,H),G&&v(A,J,z,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,E(A,B,z,J),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function d(A,B,z,J){let H=J.wireframe===!0,G=i[B.id];G===void 0&&(G={},i[B.id]=G);let k=A.isInstancedMesh===!0?A.id:0,he=G[k];he===void 0&&(he={},G[k]=he);let le=he[z.id];le===void 0&&(le={},he[z.id]=le);let ue=le[H];return ue===void 0&&(ue=f(c()),le[H]=ue),ue}function f(A){let B=[],z=[],J=[];for(let H=0;H<t;H++)B[H]=0,z[H]=0,J[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:J,object:A,attributes:{},index:null}}function h(A,B,z,J){let H=s.attributes,G=B.attributes,k=0,he=z.getAttributes();for(let le in he)if(he[le].location>=0){let ye=H[le],X=G[le];if(X===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(X=A.instanceColor)),ye===void 0||ye.attribute!==X||X&&ye.data!==X.data)return!0;k++}return s.attributesNum!==k||s.index!==J}function v(A,B,z,J){let H={},G=B.attributes,k=0,he=z.getAttributes();for(let le in he)if(he[le].location>=0){let ye=G[le];ye===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ye=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ye=A.instanceColor));let X={};X.attribute=ye,ye&&ye.data&&(X.data=ye.data),H[le]=X,k++}s.attributes=H,s.attributesNum=k,s.index=J}function x(){let A=s.newAttributes;for(let B=0,z=A.length;B<z;B++)A[B]=0}function g(A){p(A,0)}function p(A,B){let z=s.newAttributes,J=s.enabledAttributes,H=s.attributeDivisors;z[A]=1,J[A]===0&&(n.enableVertexAttribArray(A),J[A]=1),H[A]!==B&&(n.vertexAttribDivisor(A,B),H[A]=B)}function b(){let A=s.newAttributes,B=s.enabledAttributes;for(let z=0,J=B.length;z<J;z++)B[z]!==A[z]&&(n.disableVertexAttribArray(z),B[z]=0)}function C(A,B,z,J,H,G,k){k===!0?n.vertexAttribIPointer(A,B,z,H,G):n.vertexAttribPointer(A,B,z,J,H,G)}function E(A,B,z,J){x();let H=J.attributes,G=z.getAttributes(),k=B.defaultAttributeValues;for(let he in G){let le=G[he];if(le.location>=0){let ue=H[he];if(ue===void 0&&(he==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),he==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ue!==void 0){let ye=ue.normalized,X=ue.itemSize,oe=e.get(ue);if(oe===void 0)continue;let re=oe.buffer,ce=oe.type,U=oe.bytesPerElement,K=ce===n.INT||ce===n.UNSIGNED_INT||ue.gpuType===jf;if(ue.isInterleavedBufferAttribute){let se=ue.data,Ce=se.stride,me=ue.offset;if(se.isInstancedInterleavedBuffer){for(let ve=0;ve<le.locationSize;ve++)p(le.location+ve,se.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<le.locationSize;ve++)g(le.location+ve);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ve=0;ve<le.locationSize;ve++)C(le.location+ve,X/le.locationSize,ce,ye,Ce*U,(me+X/le.locationSize*ve)*U,K)}else{if(ue.isInstancedBufferAttribute){for(let se=0;se<le.locationSize;se++)p(le.location+se,ue.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<le.locationSize;se++)g(le.location+se);n.bindBuffer(n.ARRAY_BUFFER,re);for(let se=0;se<le.locationSize;se++)C(le.location+se,X/le.locationSize,ce,ye,X*U,X/le.locationSize*se*U,K)}}else if(k!==void 0){let ye=k[he];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(le.location,ye);break;case 3:n.vertexAttrib3fv(le.location,ye);break;case 4:n.vertexAttrib4fv(le.location,ye);break;default:n.vertexAttrib1fv(le.location,ye)}}}}b()}function T(){S();for(let A in i){let B=i[A];for(let z in B){let J=B[z];for(let H in J){let G=J[H];for(let k in G)u(G[k].object),delete G[k];delete J[H]}}delete i[A]}}function D(A){if(i[A.id]===void 0)return;let B=i[A.id];for(let z in B){let J=B[z];for(let H in J){let G=J[H];for(let k in G)u(G[k].object),delete G[k];delete J[H]}}delete i[A.id]}function I(A){for(let B in i){let z=i[B];for(let J in z){let H=z[J];if(H[A.id]===void 0)continue;let G=H[A.id];for(let k in G)u(G[k].object),delete G[k];delete H[A.id]}}}function y(A){for(let B in i){let z=i[B],J=A.isInstancedMesh===!0?A.id:0,H=z[J];if(H!==void 0){for(let G in H){let k=H[G];for(let he in k)u(k[he].object),delete k[he];delete H[G]}delete z[J],Object.keys(z).length===0&&delete i[B]}}}function S(){Z(),o=!0,s!==r&&(s=r,l(s.object))}function Z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:Z,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function qF(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<l.length;v++)o(l[v],u[v],f[v]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x]*f[x];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function XF(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==ii&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let y=I===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Gn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ci&&!y)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:E,maxSamples:T,samples:D}}function YF(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Hi,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let v=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||v===null||v.length===0||s&&!g)s?u(null):l();else{let b=s?0:i,C=b*4,E=p.clippingState||null;c.value=E,E=u(v,f,C,h);for(let T=0;T!==C;++T)E[T]=t[T];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,v){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,v!==!0||g===null){let p=h+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let C=0,E=h;C!==x;++C,E+=4)o.copy(d[C]).applyMatrix4(b,a),o.normal.toArray(g,E),g[E+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var ds=4,uE=[.125,.215,.35,.446,.526,.582],uo=20,ZF=256,_l=new ll,dE=new ht,Ry=null,Ny=0,Py=0,Fy=!1,JF=new V,Nh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=JF}=s;Ry=this._renderer.getRenderTarget(),Ny=this._renderer.getActiveCubeFace(),Py=this._renderer.getActiveMipmapLevel(),Fy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ry,Ny,Py),this._renderer.xr.enabled=Fy,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ry=this._renderer.getRenderTarget(),Ny=this._renderer.getActiveCubeFace(),Py=this._renderer.getActiveMipmapLevel(),Fy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:qi,format:ii,colorSpace:to,depthBuffer:!1},r=fE(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fE(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KF(s)),this._blurMaterial=eO(s,e,t),this._ggxMaterial=QF(s,e,t)}return r}_compileMaterial(e){let t=new mn(new Vn,e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,i,r,s){let c=new pn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(dE),d.toneMapping=Ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new rs,new Cn({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(dE),p=!0);for(let C=0;C<6;C++){let E=C%3;E===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[C],s.y,s.z)):E===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[C]));let T=this._cubeSize;Ca(r,E*T,C>2?T:0,T,T),d.setRenderTarget(r),p&&d.render(x,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===cs||e.mapping===so;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hE());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ca(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,_l)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:v}=this,x=this._sizeLods[i],g=3*x*(i>v-ds?i-v+ds:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=v-t,Ca(s,g,p,3*x,2*x),r.setRenderTarget(s),r.render(a,_l),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-i,Ca(e,g,p,3*x,2*x),r.setRenderTarget(e),r.render(a,_l)}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=l;let f=l.uniforms,h=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*uo-1),x=s/v,g=isFinite(s)?1+Math.floor(u*x):uo;g>uo&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${uo}`);let p=[],b=0;for(let I=0;I<uo;++I){let y=I/x,S=Math.exp(-y*y/2);p.push(S),I===0?b+=S:I<g&&(b+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:C}=this;f.dTheta.value=v,f.mipInt.value=C-i;let E=this._sizeLods[r],T=3*E*(r>C-ds?r-C+ds:0),D=4*(this._cubeSize-E);Ca(t,T,D,3*E,2*E),c.setRenderTarget(t),c.render(d,_l)}};function KF(n){let e=[],t=[],i=[],r=n,s=n-ds+1+uE.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-ds?c=uE[o-n+ds-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,x=3,g=2,p=1,b=new Float32Array(x*v*h),C=new Float32Array(g*v*h),E=new Float32Array(p*v*h);for(let D=0;D<h;D++){let I=D%3*2/3-1,y=D>2?0:-1,S=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];b.set(S,x*v*D),C.set(f,g*v*D);let Z=[D,D,D,D,D,D];E.set(Z,p*v*D)}let T=new Vn;T.setAttribute("position",new Un(b,x)),T.setAttribute("uv",new Un(C,g)),T.setAttribute("faceIndex",new Un(E,p)),i.push(new mn(T,null)),r>ds&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function fE(n,e,t){let i=new Bn(n,e,t);return i.texture.mapping=fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function QF(n,e,t){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZF,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function eO(n,e,t){let i=new Float32Array(uo),r=new V(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function hE(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function pE(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ph=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rs(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:$i});s.uniforms.tEquirect.value=t;let o=new mn(r,s),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=an),new Bf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};function tO(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){let h=f.mapping;if(h===Hf||h===zf)if(e.has(f)){let v=e.get(f).texture;return a(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let x=new Ph(v.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let h=f.mapping,v=h===Hf||h===zf,x=h===cs||h===so;if(v||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Nh(n)),g=v?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let b=f.image;return v&&b&&b.height>0||x&&b&&c(b)?(i===null&&(i=new Nh(n)),g=v?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,h){return h===Hf?f.mapping=cs:h===zf&&(f.mapping=so),f}function c(f){let h=0,v=6;for(let x=0;x<v;x++)f[x]!==void 0&&h++;return h===v}function l(f){let h=f.target;h.removeEventListener("dispose",l);let v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let v=t.get(h);v!==void 0&&(t.delete(h),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function nO(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Zc("WebGLRenderer: "+i+" extension not supported."),r}}}function iO(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,v=d.attributes.position,x=0;if(v===void 0)return;if(h!==null){let b=h.array;x=h.version;for(let C=0,E=b.length;C<E;C+=3){let T=b[C+0],D=b[C+1],I=b[C+2];f.push(T,D,D,I,I,T)}}else{let b=v.array;x=v.version;for(let C=0,E=b.length/3-1;C<E;C+=3){let T=C+0,D=C+1,I=C+2;f.push(T,D,D,I,I,T)}}let g=new(v.count>=65535?tl:el)(f,1);g.version=x;let p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function rO(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,v){v!==0&&(n.drawElementsInstanced(i,h,s,f*o,v),t.update(h,i,v))}function u(f,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,v);let g=0;for(let p=0;p<v;p++)g+=h[p];t.update(g,i,1)}function d(f,h,v,x){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,v);let p=0;for(let b=0;b<v;b++)p+=h[b]*x[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function sO(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function oO(n,e,t){let i=new WeakMap,r=new Nt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let Z=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",Z)};var h=Z;f!==void 0&&f.texture.dispose();let v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],E=0;v===!0&&(E=1),x===!0&&(E=2),g===!0&&(E=3);let T=a.attributes.position.count*E,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let I=new Float32Array(T*D*4*d),y=new Jc(I,T,D,d);y.type=Ci,y.needsUpdate=!0;let S=E*4;for(let A=0;A<d;A++){let B=p[A],z=b[A],J=C[A],H=T*D*4*A;for(let G=0;G<B.count;G++){let k=G*S;v===!0&&(r.fromBufferAttribute(B,G),I[H+k+0]=r.x,I[H+k+1]=r.y,I[H+k+2]=r.z,I[H+k+3]=0),x===!0&&(r.fromBufferAttribute(z,G),I[H+k+4]=r.x,I[H+k+5]=r.y,I[H+k+6]=r.z,I[H+k+7]=0),g===!0&&(r.fromBufferAttribute(J,G),I[H+k+8]=r.x,I[H+k+9]=r.y,I[H+k+10]=r.z,I[H+k+11]=J.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new xt(T,D)},i.set(a,f),a.addEventListener("dispose",Z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let g=0;g<l.length;g++)v+=l[g];let x=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function aO(n,e,t,i,r){let s=new WeakMap;function o(l){let u=r.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var cO={[dy]:"LINEAR_TONE_MAPPING",[fy]:"REINHARD_TONE_MAPPING",[hy]:"CINEON_TONE_MAPPING",[py]:"ACES_FILMIC_TONE_MAPPING",[gy]:"AGX_TONE_MAPPING",[vy]:"NEUTRAL_TONE_MAPPING",[my]:"CUSTOM_TONE_MAPPING"};function lO(n,e,t,i,r){let s=new Bn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Bn(e,t,{type:qi,depthBuffer:!1,stencilBuffer:!1}),a=new Vn;a.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new on([0,2,0,0,2,0],2));let c=new Tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new mn(a,c),u=new ll(-1,1,1,-1,0,1),d=null,f=null,h=!1,v,x=null,g=[],p=!1;this.setSize=function(b,C){s.setSize(b,C),o.setSize(b,C);for(let E=0;E<g.length;E++){let T=g[E];T.setSize&&T.setSize(b,C)}},this.setEffects=function(b){g=b,p=g.length>0&&g[0].isRenderPass===!0;let C=s.width,E=s.height;for(let T=0;T<g.length;T++){let D=g[T];D.setSize&&D.setSize(C,E)}},this.begin=function(b,C){if(h||b.toneMapping===Ei&&g.length===0)return!1;if(x=C,C!==null){let E=C.width,T=C.height;(s.width!==E||s.height!==T)&&this.setSize(E,T)}return p===!1&&b.setRenderTarget(s),v=b.toneMapping,b.toneMapping=Ei,!0},this.hasRenderPass=function(){return p},this.end=function(b,C){b.toneMapping=v,h=!0;let E=s,T=o;for(let D=0;D<g.length;D++){let I=g[D];if(I.enabled!==!1&&(I.render(b,T,E,C),I.needsSwap!==!1)){let y=E;E=T,T=y}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,c.defines={},at.getTransfer(d)===_t&&(c.defines.SRGB_TRANSFER="");let D=cO[f];D&&(c.defines[D]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(x),b.render(l,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var PE=new Er,ky=new is(1,1),FE=new Jc,OE=new xf,LE=new sl,mE=[],gE=[],vE=new Float32Array(16),yE=new Float32Array(9),_E=new Float32Array(4);function Ta(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=mE[r];if(s===void 0&&(s=new Float32Array(r),mE[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lh(n,e){let t=gE[e];t===void 0&&(t=new Int32Array(e),gE[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function fO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function hO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function pO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,i))return;_E.set(i),n.uniformMatrix2fv(this.addr,!1,_E),zt(t,i)}}function mO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,i))return;yE.set(i),n.uniformMatrix3fv(this.addr,!1,yE),zt(t,i)}}function gO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,i))return;vE.set(i),n.uniformMatrix4fv(this.addr,!1,vE),zt(t,i)}}function vO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function _O(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function xO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function MO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function SO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function EO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function wO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ky.compareFunction=t.isReversedDepthBuffer()?Ah:Th,s=ky):s=PE,t.setTexture2D(e||s,r)}function CO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||OE,r)}function DO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||LE,r)}function TO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||FE,r)}function AO(n){switch(n){case 5126:return uO;case 35664:return dO;case 35665:return fO;case 35666:return hO;case 35674:return pO;case 35675:return mO;case 35676:return gO;case 5124:case 35670:return vO;case 35667:case 35671:return yO;case 35668:case 35672:return _O;case 35669:case 35673:return xO;case 5125:return MO;case 36294:return bO;case 36295:return SO;case 36296:return EO;case 35678:case 36198:case 36298:case 36306:case 35682:return wO;case 35679:case 36299:case 36307:return CO;case 35680:case 36300:case 36308:case 36293:return DO;case 36289:case 36303:case 36311:case 36292:return TO}}function IO(n,e){n.uniform1fv(this.addr,e)}function RO(n,e){let t=Ta(e,this.size,2);n.uniform2fv(this.addr,t)}function NO(n,e){let t=Ta(e,this.size,3);n.uniform3fv(this.addr,t)}function PO(n,e){let t=Ta(e,this.size,4);n.uniform4fv(this.addr,t)}function FO(n,e){let t=Ta(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OO(n,e){let t=Ta(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function LO(n,e){let t=Ta(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kO(n,e){n.uniform1iv(this.addr,e)}function UO(n,e){n.uniform2iv(this.addr,e)}function BO(n,e){n.uniform3iv(this.addr,e)}function VO(n,e){n.uniform4iv(this.addr,e)}function HO(n,e){n.uniform1uiv(this.addr,e)}function zO(n,e){n.uniform2uiv(this.addr,e)}function GO(n,e){n.uniform3uiv(this.addr,e)}function jO(n,e){n.uniform4uiv(this.addr,e)}function WO(n,e,t){let i=this.cache,r=e.length,s=Lh(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=ky:o=PE;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function $O(n,e,t){let i=this.cache,r=e.length,s=Lh(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||OE,s[o])}function qO(n,e,t){let i=this.cache,r=e.length,s=Lh(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||LE,s[o])}function XO(n,e,t){let i=this.cache,r=e.length,s=Lh(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||FE,s[o])}function YO(n){switch(n){case 5126:return IO;case 35664:return RO;case 35665:return NO;case 35666:return PO;case 35674:return FO;case 35675:return OO;case 35676:return LO;case 5124:case 35670:return kO;case 35667:case 35671:return UO;case 35668:case 35672:return BO;case 35669:case 35673:return VO;case 5125:return HO;case 36294:return zO;case 36295:return GO;case 36296:return jO;case 35678:case 36198:case 36298:case 36306:case 35682:return WO;case 35679:case 36299:case 36307:return $O;case 35680:case 36300:case 36308:case 36293:return qO;case 36289:case 36303:case 36311:case 36292:return XO}}var Uy=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=AO(t.type)}},By=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YO(t.type)}},Vy=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Oy=/(\w+)(\])?(\[|\.)?/g;function xE(n,e){n.seq.push(e),n.map[e.id]=e}function ZO(n,e,t){let i=n.name,r=i.length;for(Oy.lastIndex=0;;){let s=Oy.exec(i),o=Oy.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){xE(t,l===void 0?new Uy(a,n,e):new By(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Vy(a),xE(t,d)),t=d}}}var Da=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);ZO(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function ME(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var JO=37297,KO=0;function QO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var bE=new Ke;function eL(n){at._getMatrix(bE,at.workingColorSpace,n);let e=`mat3( ${bE.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case qc:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function SE(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+QO(n.getShaderSource(e),a)}else return s}function tL(n,e){let t=eL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var nL={[dy]:"Linear",[fy]:"Reinhard",[hy]:"Cineon",[py]:"ACESFilmic",[gy]:"AgX",[vy]:"Neutral",[my]:"Custom"};function iL(n,e){let t=nL[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Rh=new V;function rL(){at.getLuminanceCoefficients(Rh);let n=Rh.x.toFixed(4),e=Rh.y.toFixed(4),t=Rh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function oL(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aL(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ml(n){return n!==""}function EE(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wE(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hy(n){return n.replace(cL,uL)}var lL=new Map;function uL(n,e){let t=et[e];if(t===void 0){let i=lL.get(e);if(i!==void 0)t=et[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hy(t)}var dL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function CE(n){return n.replace(dL,fL)}function fL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function DE(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var hL={[dl]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function pL(n){return hL[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mL={[cs]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE",[fl]:"ENVMAP_TYPE_CUBE_UV"};function gL(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":mL[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var vL={[so]:"ENVMAP_MODE_REFRACTION"};function yL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vL[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _L={[uy]:"ENVMAP_BLENDING_MULTIPLY",[$S]:"ENVMAP_BLENDING_MIX",[qS]:"ENVMAP_BLENDING_ADD"};function xL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_L[n.combine]||"ENVMAP_BLENDING_NONE"}function ML(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bL(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=pL(t),l=gL(t),u=yL(t),d=xL(t),f=ML(t),h=sL(t),v=oL(s),x=r.createProgram(),g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ml).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ml).join(`
`),p.length>0&&(p+=`
`)):(g=[DE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),p=[DE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?et.tonemapping_pars_fragment:"",t.toneMapping!==Ei?iL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,tL("linearToOutputTexel",t.outputColorSpace),rL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ml).join(`
`)),o=Hy(o),o=EE(o,t),o=wE(o,t),a=Hy(a),a=EE(a,t),a=wE(a,t),o=CE(o),a=CE(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===wy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=b+g+o,E=b+p+a,T=ME(r,r.VERTEX_SHADER,C),D=ME(r,r.FRAGMENT_SHADER,E);r.attachShader(x,T),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(A){if(n.debug.checkShaderErrors){let B=r.getProgramInfoLog(x)||"",z=r.getShaderInfoLog(T)||"",J=r.getShaderInfoLog(D)||"",H=B.trim(),G=z.trim(),k=J.trim(),he=!0,le=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,D);else{let ue=SE(r,T,"vertex"),ye=SE(r,D,"fragment");Ge("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+H+`
`+ue+`
`+ye)}else H!==""?je("WebGLProgram: Program Info Log:",H):(G===""||k==="")&&(le=!1);le&&(A.diagnostics={runnable:he,programLog:H,vertexShader:{log:G,prefix:g},fragmentShader:{log:k,prefix:p}})}r.deleteShader(T),r.deleteShader(D),y=new Da(r,x),S=aL(r,x)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=r.getProgramParameter(x,JO)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KO++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=D,this}var SL=0,zy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gy(e),t.set(e,i)),i}},Gy=class{constructor(e){this.id=SL++,this.code=e,this.usedTimes=0}};function EL(n,e,t,i,r,s){let o=new Kc,a=new zy,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,S,Z,A,B){let z=A.fog,J=B.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||H,G),he=k&&k.mapping===fl?k.image.height:null,le=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&je("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ue=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ye=ue!==void 0?ue.length:0,X=0;J.morphAttributes.position!==void 0&&(X=1),J.morphAttributes.normal!==void 0&&(X=2),J.morphAttributes.color!==void 0&&(X=3);let oe,re,ce,U;if(le){let rt=Yi[le];oe=rt.vertexShader,re=rt.fragmentShader}else oe=y.vertexShader,re=y.fragmentShader,a.update(y),ce=a.getVertexShaderID(y),U=a.getFragmentShaderID(y);let K=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,me=B.isBatchedMesh===!0,ve=!!y.map,Le=!!y.matcap,Re=!!k,$e=!!y.aoMap,qe=!!y.lightMap,ke=!!y.bumpMap,ct=!!y.normalMap,P=!!y.displacementMap,Mt=!!y.emissiveMap,tt=!!y.metalnessMap,lt=!!y.roughnessMap,Ie=y.anisotropy>0,_=y.clearcoat>0,m=y.dispersion>0,w=y.iridescence>0,O=y.sheen>0,N=y.transmission>0,R=Ie&&!!y.anisotropyMap,te=_&&!!y.clearcoatMap,q=_&&!!y.clearcoatNormalMap,pe=_&&!!y.clearcoatRoughnessMap,Me=w&&!!y.iridescenceMap,ae=w&&!!y.iridescenceThicknessMap,Y=O&&!!y.sheenColorMap,W=O&&!!y.sheenRoughnessMap,ne=!!y.specularMap,ee=!!y.specularColorMap,Se=!!y.specularIntensityMap,F=N&&!!y.transmissionMap,fe=N&&!!y.thicknessMap,de=!!y.gradientMap,_e=!!y.alphaMap,ge=y.alphaTest>0,ie=!!y.alphaHash,De=!!y.extensions,ze=Ei;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ze=n.toneMapping);let dt={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:oe,fragmentShader:re,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:U,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:me,batchingColor:me&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:to,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:Le,envMap:Re,envMapMode:Re&&k.mapping,envMapCubeUVHeight:he,aoMap:$e,lightMap:qe,bumpMap:ke,normalMap:ct,displacementMap:P,emissiveMap:Mt,normalMapObjectSpace:ct&&y.normalMapType===JS,normalMapTangentSpace:ct&&y.normalMapType===ZS,metalnessMap:tt,roughnessMap:lt,anisotropy:Ie,anisotropyMap:R,clearcoat:_,clearcoatMap:te,clearcoatNormalMap:q,clearcoatRoughnessMap:pe,dispersion:m,iridescence:w,iridescenceMap:Me,iridescenceThicknessMap:ae,sheen:O,sheenColorMap:Y,sheenRoughnessMap:W,specularMap:ne,specularColorMap:ee,specularIntensityMap:Se,transmission:N,transmissionMap:F,thicknessMap:fe,gradientMap:de,opaque:y.transparent===!1&&y.blending===Qs&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:ge,alphaHash:ie,combine:y.combine,mapUv:ve&&v(y.map.channel),aoMapUv:$e&&v(y.aoMap.channel),lightMapUv:qe&&v(y.lightMap.channel),bumpMapUv:ke&&v(y.bumpMap.channel),normalMapUv:ct&&v(y.normalMap.channel),displacementMapUv:P&&v(y.displacementMap.channel),emissiveMapUv:Mt&&v(y.emissiveMap.channel),metalnessMapUv:tt&&v(y.metalnessMap.channel),roughnessMapUv:lt&&v(y.roughnessMap.channel),anisotropyMapUv:R&&v(y.anisotropyMap.channel),clearcoatMapUv:te&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:q&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:W&&v(y.sheenRoughnessMap.channel),specularMapUv:ne&&v(y.specularMap.channel),specularColorMapUv:ee&&v(y.specularColorMap.channel),specularIntensityMapUv:Se&&v(y.specularIntensityMap.channel),transmissionMapUv:F&&v(y.transmissionMap.channel),thicknessMapUv:fe&&v(y.thicknessMap.channel),alphaMapUv:_e&&v(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ct||Ie),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(ve||_e),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||J.attributes.normal===void 0&&ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:X,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:Mt&&y.emissiveMap.isVideoTexture===!0&&at.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ni,flipSided:y.side===bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:De&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&y.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function g(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let Z in y.defines)S.push(Z),S.push(y.defines[Z]);return y.isRawShaderMaterial===!1&&(p(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function p(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function C(y){let S=h[y.type],Z;if(S){let A=Yi[S];Z=lE.clone(A.uniforms)}else Z=y.uniforms;return Z}function E(y,S){let Z=u.get(S);return Z!==void 0?++Z.usedTimes:(Z=new bL(n,S,y,r),l.push(Z),u.set(S,Z)),Z}function T(y){if(--y.usedTimes===0){let S=l.indexOf(y);l[S]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function D(y){a.remove(y)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:C,acquireProgram:E,releaseProgram:T,releaseShaderCache:D,programs:l,dispose:I}}function wL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function TE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function AE(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,v,x,g,p){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:v,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},n[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=v,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=g,b.group=p),e++,b}function c(f,h,v,x,g,p){let b=a(f,h,v,x,g,p);v.transmission>0?i.push(b):v.transparent===!0?r.push(b):t.push(b)}function l(f,h,v,x,g,p){let b=a(f,h,v,x,g,p);v.transmission>0?i.unshift(b):v.transparent===!0?r.unshift(b):t.unshift(b)}function u(f,h){t.length>1&&t.sort(f||CL),i.length>1&&i.sort(h||TE),r.length>1&&r.sort(h||TE)}function d(){for(let f=e,h=n.length;f<h;f++){let v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function DL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new AE,n.set(i,[o])):r>=s.length?(o=new AE,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function TL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ht};break;case"SpotLight":t={position:new V,direction:new V,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function AL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var IL=0;function RL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function NL(n){let e=new TL,t=AL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);let r=new V,s=new Lt,o=new Lt;function a(l){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,v=0,x=0,g=0,p=0,b=0,C=0,E=0,T=0,D=0,I=0;l.sort(RL);for(let S=0,Z=l.length;S<Z;S++){let A=l[S],B=A.color,z=A.intensity,J=A.distance,H=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===oo?H=A.shadow.map.texture:H=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=B.r*z,d+=B.g*z,f+=B.b*z;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],z);I++}else if(A.isDirectionalLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let k=A.shadow,he=t.get(A);he.shadowIntensity=k.intensity,he.shadowBias=k.bias,he.shadowNormalBias=k.normalBias,he.shadowRadius=k.radius,he.shadowMapSize=k.mapSize,i.directionalShadow[h]=he,i.directionalShadowMap[h]=H,i.directionalShadowMatrix[h]=A.shadow.matrix,b++}i.directional[h]=G,h++}else if(A.isSpotLight){let G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(B).multiplyScalar(z),G.distance=J,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[x]=G;let k=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,k.updateMatrices(A),A.castShadow&&D++),i.spotLightMatrix[x]=k.matrix,A.castShadow){let he=t.get(A);he.shadowIntensity=k.intensity,he.shadowBias=k.bias,he.shadowNormalBias=k.normalBias,he.shadowRadius=k.radius,he.shadowMapSize=k.mapSize,i.spotShadow[x]=he,i.spotShadowMap[x]=H,E++}x++}else if(A.isRectAreaLight){let G=e.get(A);G.color.copy(B).multiplyScalar(z),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=G,g++}else if(A.isPointLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let k=A.shadow,he=t.get(A);he.shadowIntensity=k.intensity,he.shadowBias=k.bias,he.shadowNormalBias=k.normalBias,he.shadowRadius=k.radius,he.shadowMapSize=k.mapSize,he.shadowCameraNear=k.camera.near,he.shadowCameraFar=k.camera.far,i.pointShadow[v]=he,i.pointShadowMap[v]=H,i.pointShadowMatrix[v]=A.shadow.matrix,C++}i.point[v]=G,v++}else if(A.isHemisphereLight){let G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(z),G.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[p]=G,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let y=i.hash;(y.directionalLength!==h||y.pointLength!==v||y.spotLength!==x||y.rectAreaLength!==g||y.hemiLength!==p||y.numDirectionalShadows!==b||y.numPointShadows!==C||y.numSpotShadows!==E||y.numSpotMaps!==T||y.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=E+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,y.directionalLength=h,y.pointLength=v,y.spotLength=x,y.rectAreaLength=g,y.hemiLength=p,y.numDirectionalShadows=b,y.numPointShadows=C,y.numSpotShadows=E,y.numSpotMaps=T,y.numLightProbes=I,i.version=IL++)}function c(l,u){let d=0,f=0,h=0,v=0,x=0,g=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let C=l[p];if(C.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),d++}else if(C.isSpotLight){let E=i.spot[h];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),h++}else if(C.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(g),o.identity(),s.copy(C.matrixWorld),s.premultiply(g),o.extractRotation(s),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(C.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(g),f++}else if(C.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:i}}function IE(n){let e=new NL(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function PL(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new IE(n),e.set(r,[a])):s>=o.length?(a=new IE(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var FL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LL=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],kL=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],RE=new Lt,xl=new V,Ly=new V;function UL(n,e,t){let i=new il,r=new xt,s=new xt,o=new Nt,a=new Af,c=new If,l={},u=t.maxTextureSize,d={[Mr]:bn,[bn]:Mr,[ni]:ni},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:FL,fragmentShader:OL}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let v=new Vn;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let p=this.type;this.render=function(D,I,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;this.type===DS&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dl);let S=n.getRenderTarget(),Z=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),B=n.state;B.setBlending($i),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=p!==this.type;z&&I.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(H=>H.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,H=D.length;J<H;J++){let G=D[J],k=G.shadow;if(k===void 0){je("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let he=k.getFrameExtents();r.multiply(he),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,k.mapSize.y=s.y));let le=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=le,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Sa){if(G.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Bn(r.x,r.y,{format:oo,type:qi,minFilter:an,magFilter:an,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new is(r.x,r.y,Ci),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=ji,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt}else G.isPointLight?(k.map=new Ph(r.x),k.map.depthTexture=new wf(r.x,wi)):(k.map=new Bn(r.x,r.y),k.map.depthTexture=new is(r.x,r.y,wi)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=ji,this.type===dl?(k.map.depthTexture.compareFunction=le?Ah:Th,k.map.depthTexture.minFilter=an,k.map.depthTexture.magFilter=an):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt);k.camera.updateProjectionMatrix()}let ue=k.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<ue;ye++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(k.map),n.clear());let X=k.getViewport(ye);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),B.viewport(o)}if(G.isPointLight){let X=k.camera,oe=k.matrix,re=G.distance||X.far;re!==X.far&&(X.far=re,X.updateProjectionMatrix()),xl.setFromMatrixPosition(G.matrixWorld),X.position.copy(xl),Ly.copy(X.position),Ly.add(LL[ye]),X.up.copy(kL[ye]),X.lookAt(Ly),X.updateMatrixWorld(),oe.makeTranslation(-xl.x,-xl.y,-xl.z),RE.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),k._frustum.setFromProjectionMatrix(RE,X.coordinateSystem,X.reversedDepth)}else k.updateMatrices(G);i=k.getFrustum(),E(I,y,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===Sa&&b(k,y),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,Z,A)};function b(D,I){let y=e.update(x);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Bn(r.x,r.y,{format:oo,type:qi})),f.uniforms.shadow_pass.value=D.map.depthTexture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,y,f,x,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,y,h,x,null)}function C(D,I,y,S){let Z=null,A=y.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(A!==void 0)Z=A;else if(Z=y.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let B=Z.uuid,z=I.uuid,J=l[B];J===void 0&&(J={},l[B]=J);let H=J[z];H===void 0&&(H=Z.clone(),J[z]=H,I.addEventListener("dispose",T)),Z=H}if(Z.visible=I.visible,Z.wireframe=I.wireframe,S===Sa?Z.side=I.shadowSide!==null?I.shadowSide:I.side:Z.side=I.shadowSide!==null?I.shadowSide:d[I.side],Z.alphaMap=I.alphaMap,Z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,Z.map=I.map,Z.clipShadows=I.clipShadows,Z.clippingPlanes=I.clippingPlanes,Z.clipIntersection=I.clipIntersection,Z.displacementMap=I.displacementMap,Z.displacementScale=I.displacementScale,Z.displacementBias=I.displacementBias,Z.wireframeLinewidth=I.wireframeLinewidth,Z.linewidth=I.linewidth,y.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){let B=n.properties.get(Z);B.light=y}return Z}function E(D,I,y,S,Z){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&Z===Sa)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,D.matrixWorld);let z=e.update(D),J=D.material;if(Array.isArray(J)){let H=z.groups;for(let G=0,k=H.length;G<k;G++){let he=H[G],le=J[he.materialIndex];if(le&&le.visible){let ue=C(D,le,S,Z);D.onBeforeShadow(n,D,I,y,z,ue,he),n.renderBufferDirect(y,null,z,ue,D,he),D.onAfterShadow(n,D,I,y,z,ue,he)}}}else if(J.visible){let H=C(D,J,S,Z);D.onBeforeShadow(n,D,I,y,z,H,null),n.renderBufferDirect(y,null,z,H,D,null),D.onAfterShadow(n,D,I,y,z,H,null)}}let B=D.children;for(let z=0,J=B.length;z<J;z++)E(B[z],I,y,S,Z)}function T(D){D.target.removeEventListener("dispose",T);for(let y in l){let S=l[y],Z=D.target.uuid;Z in S&&(S[Z].dispose(),delete S[Z])}}}function BL(n,e){function t(){let F=!1,fe=new Nt,de=null,_e=new Nt(0,0,0,0);return{setMask:function(ge){de!==ge&&!F&&(n.colorMask(ge,ge,ge,ge),de=ge)},setLocked:function(ge){F=ge},setClear:function(ge,ie,De,ze,dt){dt===!0&&(ge*=ze,ie*=ze,De*=ze),fe.set(ge,ie,De,ze),_e.equals(fe)===!1&&(n.clearColor(ge,ie,De,ze),_e.copy(fe))},reset:function(){F=!1,de=null,_e.set(-1,0,0,0)}}}function i(){let F=!1,fe=!1,de=null,_e=null,ge=null;return{setReversed:function(ie){if(fe!==ie){let De=e.get("EXT_clip_control");ie?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;let ze=ge;ge=null,this.setClear(ze)}},getReversed:function(){return fe},setTest:function(ie){ie?K(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(ie){de!==ie&&!F&&(n.depthMask(ie),de=ie)},setFunc:function(ie){if(fe&&(ie=aE[ie]),_e!==ie){switch(ie){case af:n.depthFunc(n.NEVER);break;case cf:n.depthFunc(n.ALWAYS);break;case lf:n.depthFunc(n.LESS);break;case eo:n.depthFunc(n.LEQUAL);break;case uf:n.depthFunc(n.EQUAL);break;case df:n.depthFunc(n.GEQUAL);break;case ff:n.depthFunc(n.GREATER);break;case hf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=ie}},setLocked:function(ie){F=ie},setClear:function(ie){ge!==ie&&(ge=ie,fe&&(ie=1-ie),n.clearDepth(ie))},reset:function(){F=!1,de=null,_e=null,ge=null,fe=!1}}}function r(){let F=!1,fe=null,de=null,_e=null,ge=null,ie=null,De=null,ze=null,dt=null;return{setTest:function(rt){F||(rt?K(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!F&&(n.stencilMask(rt),fe=rt)},setFunc:function(rt,Dn,vn){(de!==rt||_e!==Dn||ge!==vn)&&(n.stencilFunc(rt,Dn,vn),de=rt,_e=Dn,ge=vn)},setOp:function(rt,Dn,vn){(ie!==rt||De!==Dn||ze!==vn)&&(n.stencilOp(rt,Dn,vn),ie=rt,De=Dn,ze=vn)},setLocked:function(rt){F=rt},setClear:function(rt){dt!==rt&&(n.clearStencil(rt),dt=rt)},reset:function(){F=!1,fe=null,de=null,_e=null,ge=null,ie=null,De=null,ze=null,dt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],v=null,x=!1,g=null,p=null,b=null,C=null,E=null,T=null,D=null,I=new ht(0,0,0),y=0,S=!1,Z=null,A=null,B=null,z=null,J=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,k=0,he=n.getParameter(n.VERSION);he.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(he)[1]),G=k>=1):he.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),G=k>=2);let le=null,ue={},ye=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),oe=new Nt().fromArray(ye),re=new Nt().fromArray(X);function ce(F,fe,de,_e){let ge=new Uint8Array(4),ie=n.createTexture();n.bindTexture(F,ie),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<de;De++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(fe+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ie}let U={};U[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),U[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),U[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(eo),ke(!1),ct(oy),K(n.CULL_FACE),$e($i);function K(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function se(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ce(F,fe){return d[F]!==fe?(n.bindFramebuffer(F,fe),d[F]=fe,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function me(F,fe){let de=h,_e=!1;if(F){de=f.get(fe),de===void 0&&(de=[],f.set(fe,de));let ge=F.textures;if(de.length!==ge.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,De=ge.length;ie<De;ie++)de[ie]=n.COLOR_ATTACHMENT0+ie;de.length=ge.length,_e=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,_e=!0);_e&&n.drawBuffers(de)}function ve(F){return v!==F?(n.useProgram(F),v=F,!0):!1}let Le={[es]:n.FUNC_ADD,[AS]:n.FUNC_SUBTRACT,[IS]:n.FUNC_REVERSE_SUBTRACT};Le[RS]=n.MIN,Le[NS]=n.MAX;let Re={[PS]:n.ZERO,[FS]:n.ONE,[OS]:n.SRC_COLOR,[sf]:n.SRC_ALPHA,[HS]:n.SRC_ALPHA_SATURATE,[BS]:n.DST_COLOR,[kS]:n.DST_ALPHA,[LS]:n.ONE_MINUS_SRC_COLOR,[of]:n.ONE_MINUS_SRC_ALPHA,[VS]:n.ONE_MINUS_DST_COLOR,[US]:n.ONE_MINUS_DST_ALPHA,[zS]:n.CONSTANT_COLOR,[GS]:n.ONE_MINUS_CONSTANT_COLOR,[jS]:n.CONSTANT_ALPHA,[WS]:n.ONE_MINUS_CONSTANT_ALPHA};function $e(F,fe,de,_e,ge,ie,De,ze,dt,rt){if(F===$i){x===!0&&(se(n.BLEND),x=!1);return}if(x===!1&&(K(n.BLEND),x=!0),F!==TS){if(F!==g||rt!==S){if((p!==es||E!==es)&&(n.blendEquation(n.FUNC_ADD),p=es,E=es),rt)switch(F){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ay:n.blendFunc(n.ONE,n.ONE);break;case cy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ly:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",F);break}else switch(F){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ay:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cy:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ly:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",F);break}b=null,C=null,T=null,D=null,I.set(0,0,0),y=0,g=F,S=rt}return}ge=ge||fe,ie=ie||de,De=De||_e,(fe!==p||ge!==E)&&(n.blendEquationSeparate(Le[fe],Le[ge]),p=fe,E=ge),(de!==b||_e!==C||ie!==T||De!==D)&&(n.blendFuncSeparate(Re[de],Re[_e],Re[ie],Re[De]),b=de,C=_e,T=ie,D=De),(ze.equals(I)===!1||dt!==y)&&(n.blendColor(ze.r,ze.g,ze.b,dt),I.copy(ze),y=dt),g=F,S=!1}function qe(F,fe){F.side===ni?se(n.CULL_FACE):K(n.CULL_FACE);let de=F.side===bn;fe&&(de=!de),ke(de),F.blending===Qs&&F.transparent===!1?$e($i):$e(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let _e=F.stencilWrite;a.setTest(_e),_e&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Mt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(F){Z!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),Z=F)}function ct(F){F!==wS?(K(n.CULL_FACE),F!==A&&(F===oy?n.cullFace(n.BACK):F===CS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),A=F}function P(F){F!==B&&(G&&n.lineWidth(F),B=F)}function Mt(F,fe,de){F?(K(n.POLYGON_OFFSET_FILL),(z!==fe||J!==de)&&(z=fe,J=de,o.getReversed()&&(fe=-fe),n.polygonOffset(fe,de))):se(n.POLYGON_OFFSET_FILL)}function tt(F){F?K(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function lt(F){F===void 0&&(F=n.TEXTURE0+H-1),le!==F&&(n.activeTexture(F),le=F)}function Ie(F,fe,de){de===void 0&&(le===null?de=n.TEXTURE0+H-1:de=le);let _e=ue[de];_e===void 0&&(_e={type:void 0,texture:void 0},ue[de]=_e),(_e.type!==F||_e.texture!==fe)&&(le!==de&&(n.activeTexture(de),le=de),n.bindTexture(F,fe||U[F]),_e.type=F,_e.texture=fe)}function _(){let F=ue[le];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function O(){try{n.texSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function N(){try{n.texSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function R(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function q(){try{n.texStorage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function pe(){try{n.texStorage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function Me(){try{n.texImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function ae(){try{n.texImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function Y(F){oe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),oe.copy(F))}function W(F){re.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),re.copy(F))}function ne(F,fe){let de=l.get(fe);de===void 0&&(de=new WeakMap,l.set(fe,de));let _e=de.get(F);_e===void 0&&(_e=n.getUniformBlockIndex(fe,F.name),de.set(F,_e))}function ee(F,fe){let _e=l.get(fe).get(F);c.get(fe)!==_e&&(n.uniformBlockBinding(fe,_e,F.__bindingPointIndex),c.set(fe,_e))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,ue={},d={},f=new WeakMap,h=[],v=null,x=!1,g=null,p=null,b=null,C=null,E=null,T=null,D=null,I=new ht(0,0,0),y=0,S=!1,Z=null,A=null,B=null,z=null,J=null,oe.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:se,bindFramebuffer:Ce,drawBuffers:me,useProgram:ve,setBlending:$e,setMaterial:qe,setFlipSided:ke,setCullFace:ct,setLineWidth:P,setPolygonOffset:Mt,setScissorTest:tt,activeTexture:lt,bindTexture:Ie,unbindTexture:_,compressedTexImage2D:m,compressedTexImage3D:w,texImage2D:Me,texImage3D:ae,updateUBOMapping:ne,uniformBlockBinding:ee,texStorage2D:q,texStorage3D:pe,texSubImage2D:O,texSubImage3D:N,compressedTexSubImage2D:R,compressedTexSubImage3D:te,scissor:Y,viewport:W,reset:Se}}function VL(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,m){return h?new OffscreenCanvas(_,m):Yc("canvas")}function x(_,m,w){let O=1,N=Ie(_);if((N.width>w||N.height>w)&&(O=w/Math.max(N.width,N.height)),O<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let R=Math.floor(O*N.width),te=Math.floor(O*N.height);d===void 0&&(d=v(R,te));let q=m?v(R,te):d;return q.width=R,q.height=te,q.getContext("2d").drawImage(_,0,0,R,te),je("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+R+"x"+te+")."),q}else return"data"in _&&je("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),_;return _}function g(_){return _.generateMipmaps}function p(_){n.generateMipmap(_)}function b(_){return _.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?n.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(_,m,w,O,N=!1){if(_!==null){if(n[_]!==void 0)return n[_];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let R=m;if(m===n.RED&&(w===n.FLOAT&&(R=n.R32F),w===n.HALF_FLOAT&&(R=n.R16F),w===n.UNSIGNED_BYTE&&(R=n.R8)),m===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(R=n.R8UI),w===n.UNSIGNED_SHORT&&(R=n.R16UI),w===n.UNSIGNED_INT&&(R=n.R32UI),w===n.BYTE&&(R=n.R8I),w===n.SHORT&&(R=n.R16I),w===n.INT&&(R=n.R32I)),m===n.RG&&(w===n.FLOAT&&(R=n.RG32F),w===n.HALF_FLOAT&&(R=n.RG16F),w===n.UNSIGNED_BYTE&&(R=n.RG8)),m===n.RG_INTEGER&&(w===n.UNSIGNED_BYTE&&(R=n.RG8UI),w===n.UNSIGNED_SHORT&&(R=n.RG16UI),w===n.UNSIGNED_INT&&(R=n.RG32UI),w===n.BYTE&&(R=n.RG8I),w===n.SHORT&&(R=n.RG16I),w===n.INT&&(R=n.RG32I)),m===n.RGB_INTEGER&&(w===n.UNSIGNED_BYTE&&(R=n.RGB8UI),w===n.UNSIGNED_SHORT&&(R=n.RGB16UI),w===n.UNSIGNED_INT&&(R=n.RGB32UI),w===n.BYTE&&(R=n.RGB8I),w===n.SHORT&&(R=n.RGB16I),w===n.INT&&(R=n.RGB32I)),m===n.RGBA_INTEGER&&(w===n.UNSIGNED_BYTE&&(R=n.RGBA8UI),w===n.UNSIGNED_SHORT&&(R=n.RGBA16UI),w===n.UNSIGNED_INT&&(R=n.RGBA32UI),w===n.BYTE&&(R=n.RGBA8I),w===n.SHORT&&(R=n.RGBA16I),w===n.INT&&(R=n.RGBA32I)),m===n.RGB&&(w===n.UNSIGNED_INT_5_9_9_9_REV&&(R=n.RGB9_E5),w===n.UNSIGNED_INT_10F_11F_11F_REV&&(R=n.R11F_G11F_B10F)),m===n.RGBA){let te=N?qc:at.getTransfer(O);w===n.FLOAT&&(R=n.RGBA32F),w===n.HALF_FLOAT&&(R=n.RGBA16F),w===n.UNSIGNED_BYTE&&(R=te===_t?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(R=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(R=n.RGB5_A1)}return(R===n.R16F||R===n.R32F||R===n.RG16F||R===n.RG32F||R===n.RGBA16F||R===n.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function E(_,m){let w;return _?m===null||m===wi||m===wa?w=n.DEPTH24_STENCIL8:m===Ci?w=n.DEPTH32F_STENCIL8:m===Ea&&(w=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===wi||m===wa?w=n.DEPTH_COMPONENT24:m===Ci?w=n.DEPTH_COMPONENT32F:m===Ea&&(w=n.DEPTH_COMPONENT16),w}function T(_,m){return g(_)===!0||_.isFramebufferTexture&&_.minFilter!==Yt&&_.minFilter!==an?Math.log2(Math.max(m.width,m.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?m.mipmaps.length:1}function D(_){let m=_.target;m.removeEventListener("dispose",D),y(m),m.isVideoTexture&&u.delete(m)}function I(_){let m=_.target;m.removeEventListener("dispose",I),Z(m)}function y(_){let m=i.get(_);if(m.__webglInit===void 0)return;let w=_.source,O=f.get(w);if(O){let N=O[m.__cacheKey];N.usedTimes--,N.usedTimes===0&&S(_),Object.keys(O).length===0&&f.delete(w)}i.remove(_)}function S(_){let m=i.get(_);n.deleteTexture(m.__webglTexture);let w=_.source,O=f.get(w);delete O[m.__cacheKey],o.memory.textures--}function Z(_){let m=i.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),i.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(m.__webglFramebuffer[O]))for(let N=0;N<m.__webglFramebuffer[O].length;N++)n.deleteFramebuffer(m.__webglFramebuffer[O][N]);else n.deleteFramebuffer(m.__webglFramebuffer[O]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[O])}else{if(Array.isArray(m.__webglFramebuffer))for(let O=0;O<m.__webglFramebuffer.length;O++)n.deleteFramebuffer(m.__webglFramebuffer[O]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let O=0;O<m.__webglColorRenderbuffer.length;O++)m.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[O]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let w=_.textures;for(let O=0,N=w.length;O<N;O++){let R=i.get(w[O]);R.__webglTexture&&(n.deleteTexture(R.__webglTexture),o.memory.textures--),i.remove(w[O])}i.remove(_)}let A=0;function B(){A=0}function z(){let _=A;return _>=r.maxTextures&&je("WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),A+=1,_}function J(_){let m=[];return m.push(_.wrapS),m.push(_.wrapT),m.push(_.wrapR||0),m.push(_.magFilter),m.push(_.minFilter),m.push(_.anisotropy),m.push(_.internalFormat),m.push(_.format),m.push(_.type),m.push(_.generateMipmaps),m.push(_.premultiplyAlpha),m.push(_.flipY),m.push(_.unpackAlignment),m.push(_.colorSpace),m.join()}function H(_,m){let w=i.get(_);if(_.isVideoTexture&&tt(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&w.__version!==_.version){let O=_.image;if(O===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{U(w,_,m);return}}else _.isExternalTexture&&(w.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+m)}function G(_,m){let w=i.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&w.__version!==_.version){U(w,_,m);return}else _.isExternalTexture&&(w.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+m)}function k(_,m){let w=i.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&w.__version!==_.version){U(w,_,m);return}t.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+m)}function he(_,m){let w=i.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&w.__version!==_.version){K(w,_,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+m)}let le={[pf]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[mf]:n.MIRRORED_REPEAT},ue={[Yt]:n.NEAREST,[XS]:n.NEAREST_MIPMAP_NEAREST,[hl]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Gf]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},ye={[KS]:n.NEVER,[iE]:n.ALWAYS,[QS]:n.LESS,[Th]:n.LEQUAL,[eE]:n.EQUAL,[Ah]:n.GEQUAL,[tE]:n.GREATER,[nE]:n.NOTEQUAL};function X(_,m){if(m.type===Ci&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===an||m.magFilter===Gf||m.magFilter===hl||m.magFilter===ls||m.minFilter===an||m.minFilter===Gf||m.minFilter===hl||m.minFilter===ls)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,le[m.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,le[m.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,le[m.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,ue[m.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,ue[m.minFilter]),m.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,ye[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Yt||m.minFilter!==hl&&m.minFilter!==ls||m.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){let w=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function oe(_,m){let w=!1;_.__webglInit===void 0&&(_.__webglInit=!0,m.addEventListener("dispose",D));let O=m.source,N=f.get(O);N===void 0&&(N={},f.set(O,N));let R=J(m);if(R!==_.__cacheKey){N[R]===void 0&&(N[R]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,w=!0),N[R].usedTimes++;let te=N[_.__cacheKey];te!==void 0&&(N[_.__cacheKey].usedTimes--,te.usedTimes===0&&S(m)),_.__cacheKey=R,_.__webglTexture=N[R].texture}return w}function re(_,m,w){return Math.floor(Math.floor(_/w)/m)}function ce(_,m,w,O){let R=_.updateRanges;if(R.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,w,O,m.data);else{R.sort((ae,Y)=>ae.start-Y.start);let te=0;for(let ae=1;ae<R.length;ae++){let Y=R[te],W=R[ae],ne=Y.start+Y.count,ee=re(W.start,m.width,4),Se=re(Y.start,m.width,4);W.start<=ne+1&&ee===Se&&re(W.start+W.count-1,m.width,4)===ee?Y.count=Math.max(Y.count,W.start+W.count-Y.start):(++te,R[te]=W)}R.length=te+1;let q=n.getParameter(n.UNPACK_ROW_LENGTH),pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let ae=0,Y=R.length;ae<Y;ae++){let W=R[ae],ne=Math.floor(W.start/4),ee=Math.ceil(W.count/4),Se=ne%m.width,F=Math.floor(ne/m.width),fe=ee,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Se,F,fe,de,w,O,m.data)}_.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,q),n.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function U(_,m,w){let O=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(O=n.TEXTURE_3D);let N=oe(_,m),R=m.source;t.bindTexture(O,_.__webglTexture,n.TEXTURE0+w);let te=i.get(R);if(R.version!==te.__version||N===!0){t.activeTexture(n.TEXTURE0+w);let q=at.getPrimaries(at.workingColorSpace),pe=m.colorSpace===Sr?null:at.getPrimaries(m.colorSpace),Me=m.colorSpace===Sr||q===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ae=x(m.image,!1,r.maxTextureSize);ae=lt(m,ae);let Y=s.convert(m.format,m.colorSpace),W=s.convert(m.type),ne=C(m.internalFormat,Y,W,m.colorSpace,m.isVideoTexture);X(O,m);let ee,Se=m.mipmaps,F=m.isVideoTexture!==!0,fe=te.__version===void 0||N===!0,de=R.dataReady,_e=T(m,ae);if(m.isDepthTexture)ne=E(m.format===us,m.type),fe&&(F?t.texStorage2D(n.TEXTURE_2D,1,ne,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,ne,ae.width,ae.height,0,Y,W,null));else if(m.isDataTexture)if(Se.length>0){F&&fe&&t.texStorage2D(n.TEXTURE_2D,_e,ne,Se[0].width,Se[0].height);for(let ge=0,ie=Se.length;ge<ie;ge++)ee=Se[ge],F?de&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,ee.width,ee.height,Y,W,ee.data):t.texImage2D(n.TEXTURE_2D,ge,ne,ee.width,ee.height,0,Y,W,ee.data);m.generateMipmaps=!1}else F?(fe&&t.texStorage2D(n.TEXTURE_2D,_e,ne,ae.width,ae.height),de&&ce(m,ae,Y,W)):t.texImage2D(n.TEXTURE_2D,0,ne,ae.width,ae.height,0,Y,W,ae.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){F&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ne,Se[0].width,Se[0].height,ae.depth);for(let ge=0,ie=Se.length;ge<ie;ge++)if(ee=Se[ge],m.format!==ii)if(Y!==null)if(F){if(de)if(m.layerUpdates.size>0){let De=Iy(ee.width,ee.height,m.format,m.type);for(let ze of m.layerUpdates){let dt=ee.data.subarray(ze*De/ee.data.BYTES_PER_ELEMENT,(ze+1)*De/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,ze,ee.width,ee.height,1,Y,dt)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,ee.width,ee.height,ae.depth,Y,ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,ne,ee.width,ee.height,ae.depth,0,ee.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,ee.width,ee.height,ae.depth,Y,W,ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,ne,ee.width,ee.height,ae.depth,0,Y,W,ee.data)}else{F&&fe&&t.texStorage2D(n.TEXTURE_2D,_e,ne,Se[0].width,Se[0].height);for(let ge=0,ie=Se.length;ge<ie;ge++)ee=Se[ge],m.format!==ii?Y!==null?F?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,ee.width,ee.height,Y,ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,ne,ee.width,ee.height,0,ee.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?de&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,ee.width,ee.height,Y,W,ee.data):t.texImage2D(n.TEXTURE_2D,ge,ne,ee.width,ee.height,0,Y,W,ee.data)}else if(m.isDataArrayTexture)if(F){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ne,ae.width,ae.height,ae.depth),de)if(m.layerUpdates.size>0){let ge=Iy(ae.width,ae.height,m.format,m.type);for(let ie of m.layerUpdates){let De=ae.data.subarray(ie*ge/ae.data.BYTES_PER_ELEMENT,(ie+1)*ge/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,Y,W,De)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Y,W,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,ae.width,ae.height,ae.depth,0,Y,W,ae.data);else if(m.isData3DTexture)F?(fe&&t.texStorage3D(n.TEXTURE_3D,_e,ne,ae.width,ae.height,ae.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Y,W,ae.data)):t.texImage3D(n.TEXTURE_3D,0,ne,ae.width,ae.height,ae.depth,0,Y,W,ae.data);else if(m.isFramebufferTexture){if(fe)if(F)t.texStorage2D(n.TEXTURE_2D,_e,ne,ae.width,ae.height);else{let ge=ae.width,ie=ae.height;for(let De=0;De<_e;De++)t.texImage2D(n.TEXTURE_2D,De,ne,ge,ie,0,Y,W,null),ge>>=1,ie>>=1}}else if(Se.length>0){if(F&&fe){let ge=Ie(Se[0]);t.texStorage2D(n.TEXTURE_2D,_e,ne,ge.width,ge.height)}for(let ge=0,ie=Se.length;ge<ie;ge++)ee=Se[ge],F?de&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Y,W,ee):t.texImage2D(n.TEXTURE_2D,ge,ne,Y,W,ee);m.generateMipmaps=!1}else if(F){if(fe){let ge=Ie(ae);t.texStorage2D(n.TEXTURE_2D,_e,ne,ge.width,ge.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y,W,ae)}else t.texImage2D(n.TEXTURE_2D,0,ne,Y,W,ae);g(m)&&p(O),te.__version=R.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function K(_,m,w){if(m.image.length!==6)return;let O=oe(_,m),N=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+w);let R=i.get(N);if(N.version!==R.__version||O===!0){t.activeTexture(n.TEXTURE0+w);let te=at.getPrimaries(at.workingColorSpace),q=m.colorSpace===Sr?null:at.getPrimaries(m.colorSpace),pe=m.colorSpace===Sr||te===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Me=m.isCompressedTexture||m.image[0].isCompressedTexture,ae=m.image[0]&&m.image[0].isDataTexture,Y=[];for(let ie=0;ie<6;ie++)!Me&&!ae?Y[ie]=x(m.image[ie],!0,r.maxCubemapSize):Y[ie]=ae?m.image[ie].image:m.image[ie],Y[ie]=lt(m,Y[ie]);let W=Y[0],ne=s.convert(m.format,m.colorSpace),ee=s.convert(m.type),Se=C(m.internalFormat,ne,ee,m.colorSpace),F=m.isVideoTexture!==!0,fe=R.__version===void 0||O===!0,de=N.dataReady,_e=T(m,W);X(n.TEXTURE_CUBE_MAP,m);let ge;if(Me){F&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Se,W.width,W.height);for(let ie=0;ie<6;ie++){ge=Y[ie].mipmaps;for(let De=0;De<ge.length;De++){let ze=ge[De];m.format!==ii?ne!==null?F?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,0,0,ze.width,ze.height,ne,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,Se,ze.width,ze.height,0,ze.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,0,0,ze.width,ze.height,ne,ee,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,Se,ze.width,ze.height,0,ne,ee,ze.data)}}}else{if(ge=m.mipmaps,F&&fe){ge.length>0&&_e++;let ie=Ie(Y[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Se,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Y[ie].width,Y[ie].height,ne,ee,Y[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Se,Y[ie].width,Y[ie].height,0,ne,ee,Y[ie].data);for(let De=0;De<ge.length;De++){let dt=ge[De].image[ie].image;F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,0,0,dt.width,dt.height,ne,ee,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,Se,dt.width,dt.height,0,ne,ee,dt.data)}}else{F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ne,ee,Y[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Se,ne,ee,Y[ie]);for(let De=0;De<ge.length;De++){let ze=ge[De];F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,0,0,ne,ee,ze.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,Se,ne,ee,ze.image[ie])}}}g(m)&&p(n.TEXTURE_CUBE_MAP),R.__version=N.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function se(_,m,w,O,N,R){let te=s.convert(w.format,w.colorSpace),q=s.convert(w.type),pe=C(w.internalFormat,te,q,w.colorSpace),Me=i.get(m),ae=i.get(w);if(ae.__renderTarget=m,!Me.__hasExternalTextures){let Y=Math.max(1,m.width>>R),W=Math.max(1,m.height>>R);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,R,pe,Y,W,m.depth,0,te,q,null):t.texImage2D(N,R,pe,Y,W,0,te,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),Mt(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,N,ae.__webglTexture,0,P(m)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,N,ae.__webglTexture,R),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(_,m,w){if(n.bindRenderbuffer(n.RENDERBUFFER,_),m.depthBuffer){let O=m.depthTexture,N=O&&O.isDepthTexture?O.type:null,R=E(m.stencilBuffer,N),te=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Mt(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(m),R,m.width,m.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(m),R,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,R,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,_)}else{let O=m.textures;for(let N=0;N<O.length;N++){let R=O[N],te=s.convert(R.format,R.colorSpace),q=s.convert(R.type),pe=C(R.internalFormat,te,q,R.colorSpace);Mt(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(m),pe,m.width,m.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(m),pe,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,pe,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(_,m,w){let O=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=i.get(m.depthTexture);if(N.__renderTarget=m,(!N.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),O){if(N.__webglInit===void 0&&(N.__webglInit=!0,m.depthTexture.addEventListener("dispose",D)),N.__webglTexture===void 0){N.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),X(n.TEXTURE_CUBE_MAP,m.depthTexture);let Me=s.convert(m.depthTexture.format),ae=s.convert(m.depthTexture.type),Y;m.depthTexture.format===ji?Y=n.DEPTH_COMPONENT24:m.depthTexture.format===us&&(Y=n.DEPTH24_STENCIL8);for(let W=0;W<6;W++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Y,m.width,m.height,0,Me,ae,null)}}else H(m.depthTexture,0);let R=N.__webglTexture,te=P(m),q=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+w:n.TEXTURE_2D,pe=m.depthTexture.format===us?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===ji)Mt(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,q,R,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,pe,q,R,0);else if(m.depthTexture.format===us)Mt(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,q,R,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,pe,q,R,0);else throw new Error("Unknown depthTexture format")}function ve(_){let m=i.get(_),w=_.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==_.depthTexture){let O=_.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),O){let N=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,O.removeEventListener("dispose",N)};O.addEventListener("dispose",N),m.__depthDisposeCallback=N}m.__boundDepthTexture=O}if(_.depthTexture&&!m.__autoAllocateDepthBuffer)if(w)for(let O=0;O<6;O++)me(m.__webglFramebuffer[O],_,O);else{let O=_.texture.mipmaps;O&&O.length>0?me(m.__webglFramebuffer[0],_,0):me(m.__webglFramebuffer,_,0)}else if(w){m.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[O]),m.__webglDepthbuffer[O]===void 0)m.__webglDepthbuffer[O]=n.createRenderbuffer(),Ce(m.__webglDepthbuffer[O],_,!1);else{let N=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=m.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,R)}}else{let O=_.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Ce(m.__webglDepthbuffer,_,!1);else{let N=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,R)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(_,m,w){let O=i.get(_);m!==void 0&&se(O.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&ve(_)}function Re(_){let m=_.texture,w=i.get(_),O=i.get(m);_.addEventListener("dispose",I);let N=_.textures,R=_.isWebGLCubeRenderTarget===!0,te=N.length>1;if(te||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=m.version,o.memory.textures++),R){w.__webglFramebuffer=[];for(let q=0;q<6;q++)if(m.mipmaps&&m.mipmaps.length>0){w.__webglFramebuffer[q]=[];for(let pe=0;pe<m.mipmaps.length;pe++)w.__webglFramebuffer[q][pe]=n.createFramebuffer()}else w.__webglFramebuffer[q]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){w.__webglFramebuffer=[];for(let q=0;q<m.mipmaps.length;q++)w.__webglFramebuffer[q]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(te)for(let q=0,pe=N.length;q<pe;q++){let Me=i.get(N[q]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(_.samples>0&&Mt(_)===!1){w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let q=0;q<N.length;q++){let pe=N[q];w.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[q]);let Me=s.convert(pe.format,pe.colorSpace),ae=s.convert(pe.type),Y=C(pe.internalFormat,Me,ae,pe.colorSpace,_.isXRRenderTarget===!0),W=P(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,w.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(w.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(R){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),X(n.TEXTURE_CUBE_MAP,m);for(let q=0;q<6;q++)if(m.mipmaps&&m.mipmaps.length>0)for(let pe=0;pe<m.mipmaps.length;pe++)se(w.__webglFramebuffer[q][pe],_,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe);else se(w.__webglFramebuffer[q],_,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);g(m)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){for(let q=0,pe=N.length;q<pe;q++){let Me=N[q],ae=i.get(Me),Y=n.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Y=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,ae.__webglTexture),X(Y,Me),se(w.__webglFramebuffer,_,Me,n.COLOR_ATTACHMENT0+q,Y,0),g(Me)&&p(Y)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(q=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,O.__webglTexture),X(q,m),m.mipmaps&&m.mipmaps.length>0)for(let pe=0;pe<m.mipmaps.length;pe++)se(w.__webglFramebuffer[pe],_,m,n.COLOR_ATTACHMENT0,q,pe);else se(w.__webglFramebuffer,_,m,n.COLOR_ATTACHMENT0,q,0);g(m)&&p(q),t.unbindTexture()}_.depthBuffer&&ve(_)}function $e(_){let m=_.textures;for(let w=0,O=m.length;w<O;w++){let N=m[w];if(g(N)){let R=b(_),te=i.get(N).__webglTexture;t.bindTexture(R,te),p(R),t.unbindTexture()}}}let qe=[],ke=[];function ct(_){if(_.samples>0){if(Mt(_)===!1){let m=_.textures,w=_.width,O=_.height,N=n.COLOR_BUFFER_BIT,R=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(_),q=m.length>1;if(q)for(let Me=0;Me<m.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);let pe=_.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let Me=0;Me<m.length;Me++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[Me]);let ae=i.get(m[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,w,O,0,0,w,O,N,n.NEAREST),c===!0&&(qe.length=0,ke.length=0,qe.push(n.COLOR_ATTACHMENT0+Me),_.depthBuffer&&_.resolveDepthBuffer===!1&&(qe.push(R),ke.push(R),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let Me=0;Me<m.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,te.__webglColorRenderbuffer[Me]);let ae=i.get(m[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&c){let m=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function P(_){return Math.min(r.maxSamples,_.samples)}function Mt(_){let m=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function tt(_){let m=o.render.frame;u.get(_)!==m&&(u.set(_,m),_.update())}function lt(_,m){let w=_.colorSpace,O=_.format,N=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||w!==to&&w!==Sr&&(at.getTransfer(w)===_t?(O!==ii||N!==Gn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",w)),m}function Ie(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(l.width=_.naturalWidth||_.width,l.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(l.width=_.displayWidth,l.height=_.displayHeight):(l.width=_.width,l.height=_.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=k,this.setTextureCube=he,this.rebindTextures=Le,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HL(n,e){function t(i,r=Sr){let s,o=at.getTransfer(r);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Wf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$f)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===My)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yy)return n.BYTE;if(i===_y)return n.SHORT;if(i===Ea)return n.UNSIGNED_SHORT;if(i===jf)return n.INT;if(i===wi)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===qi)return n.HALF_FLOAT;if(i===by)return n.ALPHA;if(i===Sy)return n.RGB;if(i===ii)return n.RGBA;if(i===ji)return n.DEPTH_COMPONENT;if(i===us)return n.DEPTH_STENCIL;if(i===Ey)return n.RED;if(i===qf)return n.RED_INTEGER;if(i===oo)return n.RG;if(i===Xf)return n.RG_INTEGER;if(i===Yf)return n.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===vl)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zf||i===Jf||i===Kf||i===Qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eh||i===th)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ih)return s.COMPRESSED_R11_EAC;if(i===rh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===sh)return s.COMPRESSED_RG11_EAC;if(i===oh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ah||i===ch||i===lh||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===yh||i===_h||i===xh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ah)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ch)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ph)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_h)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mh||i===bh||i===Sh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mh)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eh||i===wh||i===Ch||i===Dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var zL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Hn({vertexShader:zL,fragmentShader:GL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wy=class extends br{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,v=null,x=typeof XRWebGLBinding<"u",g=new jy,p={},b=t.getContextAttributes(),C=null,E=null,T=[],D=[],I=new xt,y=null,S=new pn;S.viewport=new Nt;let Z=new pn;Z.viewport=new Nt;let A=[S,Z],B=new Vf,z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let K=T[U];return K===void 0&&(K=new ba,T[U]=K),K.getTargetRaySpace()},this.getControllerGrip=function(U){let K=T[U];return K===void 0&&(K=new ba,T[U]=K),K.getGripSpace()},this.getHand=function(U){let K=T[U];return K===void 0&&(K=new ba,T[U]=K),K.getHandSpace()};function H(U){let K=D.indexOf(U.inputSource);if(K===-1)return;let se=T[K];se!==void 0&&(se.update(U.inputSource,U.frame,l||o),se.dispatchEvent({type:U.type,data:U.inputSource}))}function G(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",k);for(let U=0;U<T.length;U++){let K=D[U];K!==null&&(D[U]=null,T[U].disconnect(K))}z=null,J=null,g.reset();for(let U in p)delete p[U];e.setRenderTarget(C),h=null,f=null,d=null,r=null,E=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",G),r.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ce=null,me=null;b.depth&&(me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?us:ji,Ce=b.stencil?wa:wi);let ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Bn(f.textureWidth,f.textureHeight,{format:ii,type:Gn,depthTexture:new is(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Bn(h.framebufferWidth,h.framebufferHeight,{format:ii,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(U){for(let K=0;K<U.removed.length;K++){let se=U.removed[K],Ce=D.indexOf(se);Ce>=0&&(D[Ce]=null,T[Ce].disconnect(se))}for(let K=0;K<U.added.length;K++){let se=U.added[K],Ce=D.indexOf(se);if(Ce===-1){for(let ve=0;ve<T.length;ve++)if(ve>=D.length){D.push(se),Ce=ve;break}else if(D[ve]===null){D[ve]=se,Ce=ve;break}if(Ce===-1)break}let me=T[Ce];me&&me.connect(se)}}let he=new V,le=new V;function ue(U,K,se){he.setFromMatrixPosition(K.matrixWorld),le.setFromMatrixPosition(se.matrixWorld);let Ce=he.distanceTo(le),me=K.projectionMatrix.elements,ve=se.projectionMatrix.elements,Le=me[14]/(me[10]-1),Re=me[14]/(me[10]+1),$e=(me[9]+1)/me[5],qe=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],ct=(ve[8]+1)/ve[0],P=Le*ke,Mt=Le*ct,tt=Ce/(-ke+ct),lt=tt*-ke;if(K.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(lt),U.translateZ(tt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),me[10]===-1)U.projectionMatrix.copy(K.projectionMatrix),U.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ie=Le+tt,_=Re+tt,m=P-lt,w=Mt+(Ce-lt),O=$e*Re/_*Ie,N=qe*Re/_*Ie;U.projectionMatrix.makePerspective(m,w,O,N,Ie,_),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function ye(U,K){K===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(K.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let K=U.near,se=U.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(se=g.depthFar)),B.near=Z.near=S.near=K,B.far=Z.far=S.far=se,(z!==B.near||J!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,J=B.far),B.layers.mask=U.layers.mask|6,S.layers.mask=B.layers.mask&-5,Z.layers.mask=B.layers.mask&-3;let Ce=U.parent,me=B.cameras;ye(B,Ce);for(let ve=0;ve<me.length;ve++)ye(me[ve],Ce);me.length===2?ue(B,S,Z):B.projectionMatrix.copy(S.projectionMatrix),X(U,B,Ce)};function X(U,K,se){se===null?U.matrix.copy(K.matrixWorld):(U.matrix.copy(se.matrixWorld),U.matrix.invert(),U.matrix.multiply(K.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(K.projectionMatrix),U.projectionMatrixInverse.copy(K.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=vf*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(U){c=U,f!==null&&(f.fixedFoveation=U),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(U){return p[U]};let oe=null;function re(U,K){if(u=K.getViewerPose(l||o),v=K,u!==null){let se=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let Ce=!1;se.length!==B.cameras.length&&(B.cameras.length=0,Ce=!0);for(let Re=0;Re<se.length;Re++){let $e=se[Re],qe=null;if(h!==null)qe=h.getViewport($e);else{let ct=d.getViewSubImage(f,$e);qe=ct.viewport,Re===0&&(e.setRenderTargetTextures(E,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(E))}let ke=A[Re];ke===void 0&&(ke=new pn,ke.layers.enable(Re),ke.viewport=new Nt,A[Re]=ke),ke.matrix.fromArray($e.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray($e.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(qe.x,qe.y,qe.width,qe.height),Re===0&&(B.matrix.copy(ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ce===!0&&B.cameras.push(ke)}let me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Re=d.getDepthInformation(se[0]);Re&&Re.isValid&&Re.texture&&g.init(Re,r.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Re=0;Re<se.length;Re++){let $e=se[Re].camera;if($e){let qe=p[$e];qe||(qe=new ol,p[$e]=qe);let ke=d.getCameraImage($e);qe.sourceTexture=ke}}}}for(let se=0;se<T.length;se++){let Ce=D[se],me=T[se];Ce!==null&&me!==void 0&&me.update(Ce,K,l||o)}oe&&oe(U,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}let ce=new NE;ce.setAnimationLoop(re),this.setAnimationLoop=function(U){oe=U},this.dispose=function(){}}},lo=new no,jL=new Lt;function WL(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Dy(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,C,E){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),v(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,b,C):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===bn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===bn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),C=b.envMap,E=b.envMapRotation;C&&(g.envMap.value=C,lo.copy(E),lo.x*=-1,lo.y*=-1,lo.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(lo.y*=-1,lo.z*=-1),g.envMapRotation.value.setFromMatrix4(jL.makeRotationFromEuler(lo)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,C){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=C*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $L(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,C){let E=C.program;i.uniformBlockBinding(b,E)}function l(b,C){let E=r[b.id];E===void 0&&(v(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",g));let T=C.program;i.updateUBOMapping(b,T);let D=e.render.frame;s[b.id]!==D&&(f(b),s[b.id]=D)}function u(b){let C=d();b.__bindingPointIndex=C;let E=n.createBuffer(),T=b.__size,D=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,T,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,E),E}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let C=r[b.id],E=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let D=0,I=E.length;D<I;D++){let y=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,Z=y.length;S<Z;S++){let A=y[S];if(h(A,D,S,T)===!0){let B=A.__offset,z=Array.isArray(A.value)?A.value:[A.value],J=0;for(let H=0;H<z.length;H++){let G=z[H],k=x(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,B+J,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,J),J+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,C,E,T){let D=b.value,I=C+"_"+E;if(T[I]===void 0)return typeof D=="number"||typeof D=="boolean"?T[I]=D:T[I]=D.clone(),!0;{let y=T[I];if(typeof D=="number"||typeof D=="boolean"){if(y!==D)return T[I]=D,!0}else if(y.equals(D)===!1)return y.copy(D),!0}return!1}function v(b){let C=b.uniforms,E=0,T=16;for(let I=0,y=C.length;I<y;I++){let S=Array.isArray(C[I])?C[I]:[C[I]];for(let Z=0,A=S.length;Z<A;Z++){let B=S[Z],z=Array.isArray(B.value)?B.value:[B.value];for(let J=0,H=z.length;J<H;J++){let G=z[J],k=x(G),he=E%T,le=he%k.boundary,ue=he+le;E+=le,ue!==0&&T-ue<k.storage&&(E+=T-ue),B.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=k.storage}}}let D=E%T;return D>0&&(E+=T-D),b.__size=E,b.__cache={},this}function x(b){let C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",b),C}function g(b){let C=b.target;C.removeEventListener("dispose",g);let E=o.indexOf(C.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var qL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function XL(){return Xi===null&&(Xi=new Mf(qL,16,16,oo,qi),Xi.name="DFG_LUT",Xi.minFilter=an,Xi.magFilter=an,Xi.wrapS=zi,Xi.wrapT=zi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var Fh=class{constructor(e={}){let{canvas:t=rE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Gn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;let x=h,g=new Set([Yf,Xf,qf]),p=new Set([Gn,wi,Ea,wa,Wf,$f]),b=new Uint32Array(4),C=new Int32Array(4),E=null,T=null,D=[],I=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,Z=!1;this._outputColorSpace=kn;let A=0,B=0,z=null,J=-1,H=null,G=new Nt,k=new Nt,he=null,le=new ht(0),ue=0,ye=t.width,X=t.height,oe=1,re=null,ce=null,U=new Nt(0,0,ye,X),K=new Nt(0,0,ye,X),se=!1,Ce=new il,me=!1,ve=!1,Le=new Lt,Re=new V,$e=new Nt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function ct(){return z===null?oe:1}let P=i;function Mt(M,L){return t.getContext(M,L)}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",dt,!1),P===null){let L="webgl2";if(P=Mt(L,M),P===null)throw Mt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ge("WebGLRenderer: "+M.message),M}let tt,lt,Ie,_,m,w,O,N,R,te,q,pe,Me,ae,Y,W,ne,ee,Se,F,fe,de,_e;function ge(){tt=new nO(P),tt.init(),fe=new HL(P,tt),lt=new XF(P,tt,e,fe),Ie=new BL(P,tt),lt.reversedDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),_=new sO(P),m=new wL,w=new VL(P,tt,Ie,m,lt,fe,_),O=new tO(S),N=new uN(P),de=new $F(P,N),R=new iO(P,N,_,de),te=new aO(P,R,N,de,_),ee=new oO(P,lt,w),Y=new YF(m),q=new EL(S,O,tt,lt,de,Y),pe=new WL(S,m),Me=new DL,ae=new PL(tt),ne=new WF(S,O,Ie,te,v,c),W=new UL(S,te,lt),_e=new $L(P,_,lt,Ie),Se=new qF(P,tt,_),F=new rO(P,tt,_),_.programs=q.programs,S.capabilities=lt,S.extensions=tt,S.properties=m,S.renderLists=Me,S.shadowMap=W,S.state=Ie,S.info=_}ge(),x!==Gn&&(y=new lO(x,t.width,t.height,r,s));let ie=new Wy(S,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(M){M!==void 0&&(oe=M,this.setSize(ye,X,!1))},this.getSize=function(M){return M.set(ye,X)},this.setSize=function(M,L,Q=!0){if(ie.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=M,X=L,t.width=Math.floor(M*oe),t.height=Math.floor(L*oe),Q===!0&&(t.style.width=M+"px",t.style.height=L+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(ye*oe,X*oe).floor()},this.setDrawingBufferSize=function(M,L,Q){ye=M,X=L,oe=Q,t.width=Math.floor(M*Q),t.height=Math.floor(L*Q),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(x===Gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(G)},this.getViewport=function(M){return M.copy(U)},this.setViewport=function(M,L,Q,$){M.isVector4?U.set(M.x,M.y,M.z,M.w):U.set(M,L,Q,$),Ie.viewport(G.copy(U).multiplyScalar(oe).round())},this.getScissor=function(M){return M.copy(K)},this.setScissor=function(M,L,Q,$){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,L,Q,$),Ie.scissor(k.copy(K).multiplyScalar(oe).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(M){Ie.setScissorTest(se=M)},this.setOpaqueSort=function(M){re=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,Q=!0){let $=0;if(M){let j=!1;if(z!==null){let Ee=z.texture.format;j=g.has(Ee)}if(j){let Ee=z.texture.type,Te=p.has(Ee),we=ne.getClearColor(),Ne=ne.getClearAlpha(),Fe=we.r,Je=we.g,nt=we.b;Te?(b[0]=Fe,b[1]=Je,b[2]=nt,b[3]=Ne,P.clearBufferuiv(P.COLOR,0,b)):(C[0]=Fe,C[1]=Je,C[2]=nt,C[3]=Ne,P.clearBufferiv(P.COLOR,0,C))}else $|=P.COLOR_BUFFER_BIT}L&&($|=P.DEPTH_BUFFER_BIT),Q&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),ne.dispose(),Me.dispose(),ae.dispose(),m.dispose(),O.dispose(),te.dispose(),de.dispose(),_e.dispose(),q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Aa),ie.removeEventListener("sessionend",Cr),Tn.stop()};function De(M){M.preventDefault(),Cy("WebGLRenderer: Context Lost."),Z=!0}function ze(){Cy("WebGLRenderer: Context Restored."),Z=!1;let M=_.autoReset,L=W.enabled,Q=W.autoUpdate,$=W.needsUpdate,j=W.type;ge(),_.autoReset=M,W.enabled=L,W.autoUpdate=Q,W.needsUpdate=$,W.type=j}function dt(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){let L=M.target;L.removeEventListener("dispose",rt),Dn(L)}function Dn(M){vn(M),m.remove(M)}function vn(M){let L=m.get(M).programs;L!==void 0&&(L.forEach(function(Q){q.releaseProgram(Q)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,Q,$,j,Ee){L===null&&(L=qe);let Te=j.isMesh&&j.matrixWorld.determinant()<0,we=jE(M,L,Q,$,j);Ie.setMaterial($,Te);let Ne=Q.index,Fe=1;if($.wireframe===!0){if(Ne=R.getWireframeAttribute(Q),Ne===void 0)return;Fe=2}let Je=Q.drawRange,nt=Q.attributes.position,Oe=Je.start*Fe,bt=(Je.start+Je.count)*Fe;Ee!==null&&(Oe=Math.max(Oe,Ee.start*Fe),bt=Math.min(bt,(Ee.start+Ee.count)*Fe)),Ne!==null?(Oe=Math.max(Oe,0),bt=Math.min(bt,Ne.count)):nt!=null&&(Oe=Math.max(Oe,0),bt=Math.min(bt,nt.count));let Pt=bt-Oe;if(Pt<0||Pt===1/0)return;de.setup(j,$,we,Q,Ne);let Tt,St=Se;if(Ne!==null&&(Tt=N.get(Ne),St=F,St.setIndex(Tt)),j.isMesh)$.wireframe===!0?(Ie.setLineWidth($.wireframeLinewidth*ct()),St.setMode(P.LINES)):St.setMode(P.TRIANGLES);else if(j.isLine){let cn=$.linewidth;cn===void 0&&(cn=1),Ie.setLineWidth(cn*ct()),j.isLineSegments?St.setMode(P.LINES):j.isLineLoop?St.setMode(P.LINE_LOOP):St.setMode(P.LINE_STRIP)}else j.isPoints?St.setMode(P.POINTS):j.isSprite&&St.setMode(P.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Zc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let cn=j._multiDrawStarts,Pe=j._multiDrawCounts,An=j._multiDrawCount,ft=Ne?N.get(Ne).bytesPerElement:1,ri=m.get($).currentProgram.getUniforms();for(let Ti=0;Ti<An;Ti++)ri.setValue(P,"_gl_DrawID",Ti),St.render(cn[Ti]/ft,Pe[Ti])}else if(j.isInstancedMesh)St.renderInstances(Oe,Pt,j.count);else if(Q.isInstancedBufferGeometry){let cn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pe=Math.min(Q.instanceCount,cn);St.renderInstances(Oe,Pt,Pe)}else St.render(Oe,Pt)};function fo(M,L,Q){M.transparent===!0&&M.side===ni&&M.forceSinglePass===!1?(M.side=bn,M.needsUpdate=!0,bl(M,L,Q),M.side=Mr,M.needsUpdate=!0,bl(M,L,Q),M.side=ni):bl(M,L,Q)}this.compile=function(M,L,Q=null){Q===null&&(Q=M),T=ae.get(Q),T.init(L),I.push(T),Q.traverseVisible(function(j){j.isLight&&j.layers.test(L.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),M!==Q&&M.traverseVisible(function(j){j.isLight&&j.layers.test(L.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();let $=new Set;return M.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Te=0;Te<Ee.length;Te++){let we=Ee[Te];fo(we,Q,j),$.add(we)}else fo(Ee,Q,j),$.add(Ee)}),T=I.pop(),$},this.compileAsync=function(M,L,Q=null){let $=this.compile(M,L,Q);return new Promise(j=>{function Ee(){if($.forEach(function(Te){m.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){j(M);return}setTimeout(Ee,10)}tt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ho=null;function fs(M){ho&&ho(M)}function Aa(){Tn.stop()}function Cr(){Tn.start()}let Tn=new NE;Tn.setAnimationLoop(fs),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(M){ho=M,ie.setAnimationLoop(M),M===null?Tn.stop():Tn.start()},ie.addEventListener("sessionstart",Aa),ie.addEventListener("sessionend",Cr),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;let Q=ie.enabled===!0&&ie.isPresenting===!0,$=y!==null&&(z===null||Q)&&y.begin(S,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(L),L=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,L,z),T=ae.get(M,I.length),T.init(L),I.push(T),Le.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ce.setFromProjectionMatrix(Le,Si,L.reversedDepth),ve=this.localClippingEnabled,me=Y.init(this.clippingPlanes,ve),E=Me.get(M,D.length),E.init(),D.push(E),ie.enabled===!0&&ie.isPresenting===!0){let Te=S.xr.getDepthSensingMesh();Te!==null&&Zi(Te,L,-1/0,S.sortObjects)}Zi(M,L,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(re,ce),ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ke&&ne.addToRenderList(E,M),this.info.render.frame++,me===!0&&Y.beginShadows();let j=T.state.shadowsArray;if(W.render(j,M,L),me===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&y.hasRenderPass())===!1){let Te=E.opaque,we=E.transmissive;if(T.setupLights(),L.isArrayCamera){let Ne=L.cameras;if(we.length>0)for(let Fe=0,Je=Ne.length;Fe<Je;Fe++){let nt=Ne[Fe];Dr(Te,we,M,nt)}ke&&ne.render(M);for(let Fe=0,Je=Ne.length;Fe<Je;Fe++){let nt=Ne[Fe];Zt(E,M,nt,nt.viewport)}}else we.length>0&&Dr(Te,we,M,L),ke&&ne.render(M),Zt(E,M,L)}z!==null&&B===0&&(w.updateMultisampleRenderTarget(z),w.updateRenderTargetMipmap(z)),$&&y.end(S),M.isScene===!0&&M.onAfterRender(S,M,L),de.resetDefaultState(),J=-1,H=null,I.pop(),I.length>0?(T=I[I.length-1],me===!0&&Y.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?E=D[D.length-1]:E=null};function Zi(M,L,Q,$){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ce.intersectsSprite(M)){$&&$e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Le);let Te=te.update(M),we=M.material;we.visible&&E.push(M,Te,we,Q,$e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ce.intersectsObject(M))){let Te=te.update(M),we=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$e.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),$e.copy(Te.boundingSphere.center)),$e.applyMatrix4(M.matrixWorld).applyMatrix4(Le)),Array.isArray(we)){let Ne=Te.groups;for(let Fe=0,Je=Ne.length;Fe<Je;Fe++){let nt=Ne[Fe],Oe=we[nt.materialIndex];Oe&&Oe.visible&&E.push(M,Te,Oe,Q,$e.z,nt)}}else we.visible&&E.push(M,Te,we,Q,$e.z,null)}}let Ee=M.children;for(let Te=0,we=Ee.length;Te<we;Te++)Zi(Ee[Te],L,Q,$)}function Zt(M,L,Q,$){let{opaque:j,transmissive:Ee,transparent:Te}=M;T.setupLightsView(Q),me===!0&&Y.setGlobalState(S.clippingPlanes,Q),$&&Ie.viewport(G.copy($)),j.length>0&&Di(j,L,Q),Ee.length>0&&Di(Ee,L,Q),Te.length>0&&Di(Te,L,Q),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Dr(M,L,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){let Oe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new Bn(1,1,{generateMipmaps:!0,type:Oe?qi:Gn,minFilter:ls,samples:lt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Ee=T.state.transmissionRenderTarget[$.id],Te=$.viewport||G;Ee.setSize(Te.z*S.transmissionResolutionScale,Te.w*S.transmissionResolutionScale);let we=S.getRenderTarget(),Ne=S.getActiveCubeFace(),Fe=S.getActiveMipmapLevel();S.setRenderTarget(Ee),S.getClearColor(le),ue=S.getClearAlpha(),ue<1&&S.setClearColor(16777215,.5),S.clear(),ke&&ne.render(Q);let Je=S.toneMapping;S.toneMapping=Ei;let nt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),me===!0&&Y.setGlobalState(S.clippingPlanes,$),Di(M,Q,$),w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let bt=0,Pt=L.length;bt<Pt;bt++){let Tt=L[bt],{object:St,geometry:cn,material:Pe,group:An}=Tt;if(Pe.side===ni&&St.layers.test($.layers)){let ft=Pe.side;Pe.side=bn,Pe.needsUpdate=!0,Xy(St,Q,$,cn,Pe,An),Pe.side=ft,Pe.needsUpdate=!0,Oe=!0}}Oe===!0&&(w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee))}S.setRenderTarget(we,Ne,Fe),S.setClearColor(le,ue),nt!==void 0&&($.viewport=nt),S.toneMapping=Je}function Di(M,L,Q){let $=L.isScene===!0?L.overrideMaterial:null;for(let j=0,Ee=M.length;j<Ee;j++){let Te=M[j],{object:we,geometry:Ne,group:Fe}=Te,Je=Te.material;Je.allowOverride===!0&&$!==null&&(Je=$),we.layers.test(Q.layers)&&Xy(we,L,Q,Ne,Je,Fe)}}function Xy(M,L,Q,$,j,Ee){M.onBeforeRender(S,L,Q,$,j,Ee),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(S,L,Q,$,M,Ee),j.transparent===!0&&j.side===ni&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,S.renderBufferDirect(Q,L,$,j,M,Ee),j.side=Mr,j.needsUpdate=!0,S.renderBufferDirect(Q,L,$,j,M,Ee),j.side=ni):S.renderBufferDirect(Q,L,$,j,M,Ee),M.onAfterRender(S,L,Q,$,j,Ee)}function bl(M,L,Q){L.isScene!==!0&&(L=qe);let $=m.get(M),j=T.state.lights,Ee=T.state.shadowsArray,Te=j.state.version,we=q.getParameters(M,j.state,Ee,L,Q),Ne=q.getProgramCacheKey(we),Fe=$.programs;$.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,$.fog=L.fog;let Je=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;$.envMap=O.get(M.envMap||$.environment,Je),$.envMapRotation=$.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",rt),Fe=new Map,$.programs=Fe);let nt=Fe.get(Ne);if(nt!==void 0){if($.currentProgram===nt&&$.lightsStateVersion===Te)return Zy(M,we),nt}else we.uniforms=q.getUniforms(M),M.onBeforeCompile(we,S),nt=q.acquireProgram(we,Ne),Fe.set(Ne,nt),$.uniforms=we.uniforms;let Oe=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=Y.uniform),Zy(M,we),$.needsLights=$E(M),$.lightsStateVersion=Te,$.needsLights&&(Oe.ambientLightColor.value=j.state.ambient,Oe.lightProbe.value=j.state.probe,Oe.directionalLights.value=j.state.directional,Oe.directionalLightShadows.value=j.state.directionalShadow,Oe.spotLights.value=j.state.spot,Oe.spotLightShadows.value=j.state.spotShadow,Oe.rectAreaLights.value=j.state.rectArea,Oe.ltc_1.value=j.state.rectAreaLTC1,Oe.ltc_2.value=j.state.rectAreaLTC2,Oe.pointLights.value=j.state.point,Oe.pointLightShadows.value=j.state.pointShadow,Oe.hemisphereLights.value=j.state.hemi,Oe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Oe.spotLightMatrix.value=j.state.spotLightMatrix,Oe.spotLightMap.value=j.state.spotLightMap,Oe.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=nt,$.uniformsList=null,nt}function Yy(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Da.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Zy(M,L){let Q=m.get(M);Q.outputColorSpace=L.outputColorSpace,Q.batching=L.batching,Q.batchingColor=L.batchingColor,Q.instancing=L.instancing,Q.instancingColor=L.instancingColor,Q.instancingMorph=L.instancingMorph,Q.skinning=L.skinning,Q.morphTargets=L.morphTargets,Q.morphNormals=L.morphNormals,Q.morphColors=L.morphColors,Q.morphTargetsCount=L.morphTargetsCount,Q.numClippingPlanes=L.numClippingPlanes,Q.numIntersection=L.numClipIntersection,Q.vertexAlphas=L.vertexAlphas,Q.vertexTangents=L.vertexTangents,Q.toneMapping=L.toneMapping}function jE(M,L,Q,$,j){L.isScene!==!0&&(L=qe),w.resetTextureUnits();let Ee=L.fog,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?L.environment:null,we=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:to,Ne=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Fe=O.get($.envMap||Te,Ne),Je=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,nt=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!Q.morphAttributes.position,bt=!!Q.morphAttributes.normal,Pt=!!Q.morphAttributes.color,Tt=Ei;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Tt=S.toneMapping);let St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,cn=St!==void 0?St.length:0,Pe=m.get($),An=T.state.lights;if(me===!0&&(ve===!0||M!==H)){let Gt=M===H&&$.id===J;Y.setState($,M,Gt)}let ft=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==An.state.version||Pe.outputColorSpace!==we||j.isBatchedMesh&&Pe.batching===!1||!j.isBatchedMesh&&Pe.batching===!0||j.isBatchedMesh&&Pe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Pe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Pe.instancing===!1||!j.isInstancedMesh&&Pe.instancing===!0||j.isSkinnedMesh&&Pe.skinning===!1||!j.isSkinnedMesh&&Pe.skinning===!0||j.isInstancedMesh&&Pe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Pe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Pe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Pe.instancingMorph===!1&&j.morphTexture!==null||Pe.envMap!==Fe||$.fog===!0&&Pe.fog!==Ee||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Y.numPlanes||Pe.numIntersection!==Y.numIntersection)||Pe.vertexAlphas!==Je||Pe.vertexTangents!==nt||Pe.morphTargets!==Oe||Pe.morphNormals!==bt||Pe.morphColors!==Pt||Pe.toneMapping!==Tt||Pe.morphTargetsCount!==cn)&&(ft=!0):(ft=!0,Pe.__version=$.version);let ri=Pe.currentProgram;ft===!0&&(ri=bl($,L,j));let Ti=!1,hs=!1,po=!1,Ct=ri.getUniforms(),Jt=Pe.uniforms;if(Ie.useProgram(ri.program)&&(Ti=!0,hs=!0,po=!0),$.id!==J&&(J=$.id,hs=!0),Ti||H!==M){Ie.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ct.setValue(P,"projectionMatrix",M.projectionMatrix),Ct.setValue(P,"viewMatrix",M.matrixWorldInverse);let Ar=Ct.map.cameraPosition;Ar!==void 0&&Ar.setValue(P,Re.setFromMatrixPosition(M.matrixWorld)),lt.logarithmicDepthBuffer&&Ct.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ct.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,hs=!0,po=!0)}if(Pe.needsLights&&(An.state.directionalShadowMap.length>0&&Ct.setValue(P,"directionalShadowMap",An.state.directionalShadowMap,w),An.state.spotShadowMap.length>0&&Ct.setValue(P,"spotShadowMap",An.state.spotShadowMap,w),An.state.pointShadowMap.length>0&&Ct.setValue(P,"pointShadowMap",An.state.pointShadowMap,w)),j.isSkinnedMesh){Ct.setOptional(P,j,"bindMatrix"),Ct.setOptional(P,j,"bindMatrixInverse");let Gt=j.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Ct.setValue(P,"boneTexture",Gt.boneTexture,w))}j.isBatchedMesh&&(Ct.setOptional(P,j,"batchingTexture"),Ct.setValue(P,"batchingTexture",j._matricesTexture,w),Ct.setOptional(P,j,"batchingIdTexture"),Ct.setValue(P,"batchingIdTexture",j._indirectTexture,w),Ct.setOptional(P,j,"batchingColorTexture"),j._colorsTexture!==null&&Ct.setValue(P,"batchingColorTexture",j._colorsTexture,w));let Tr=Q.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&ee.update(j,Q,ri),(hs||Pe.receiveShadow!==j.receiveShadow)&&(Pe.receiveShadow=j.receiveShadow,Ct.setValue(P,"receiveShadow",j.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&L.environment!==null&&(Jt.envMapIntensity.value=L.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=XL()),hs&&(Ct.setValue(P,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&WE(Jt,po),Ee&&$.fog===!0&&pe.refreshFogUniforms(Jt,Ee),pe.refreshMaterialUniforms(Jt,$,oe,X,T.state.transmissionRenderTarget[M.id]),Da.upload(P,Yy(Pe),Jt,w)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Da.upload(P,Yy(Pe),Jt,w),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ct.setValue(P,"center",j.center),Ct.setValue(P,"modelViewMatrix",j.modelViewMatrix),Ct.setValue(P,"normalMatrix",j.normalMatrix),Ct.setValue(P,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Gt=$.uniformsGroups;for(let Ar=0,mo=Gt.length;Ar<mo;Ar++){let Jy=Gt[Ar];_e.update(Jy,ri),_e.bind(Jy,ri)}}return ri}function WE(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function $E(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,L,Q){let $=m.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),m.get(M.texture).__webglTexture=L,m.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let Q=m.get(M);Q.__webglFramebuffer=L,Q.__useDefaultFramebuffer=L===void 0};let qE=P.createFramebuffer();this.setRenderTarget=function(M,L=0,Q=0){z=M,A=L,B=Q;let $=null,j=!1,Ee=!1;if(M){let we=m.get(M);if(we.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(P.FRAMEBUFFER,we.__webglFramebuffer),G.copy(M.viewport),k.copy(M.scissor),he=M.scissorTest,Ie.viewport(G),Ie.scissor(k),Ie.setScissorTest(he),J=-1;return}else if(we.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(we.__hasExternalTextures)w.rebindTextures(M,m.get(M.texture).__webglTexture,m.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Je=M.depthTexture;if(we.__boundDepthTexture!==Je){if(Je!==null&&m.has(Je)&&(M.width!==Je.image.width||M.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}let Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ee=!0);let Fe=m.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[L])?$=Fe[L][Q]:$=Fe[L],j=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?$=m.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?$=Fe[Q]:$=Fe,G.copy(M.viewport),k.copy(M.scissor),he=M.scissorTest}else G.copy(U).multiplyScalar(oe).floor(),k.copy(K).multiplyScalar(oe).floor(),he=se;if(Q!==0&&($=qE),Ie.bindFramebuffer(P.FRAMEBUFFER,$)&&Ie.drawBuffers(M,$),Ie.viewport(G),Ie.scissor(k),Ie.setScissorTest(he),j){let we=m.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,we.__webglTexture,Q)}else if(Ee){let we=L;for(let Ne=0;Ne<M.textures.length;Ne++){let Fe=m.get(M.textures[Ne]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,Q,we)}}else if(M!==null&&Q!==0){let we=m.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,we.__webglTexture,Q)}J=-1},this.readRenderTargetPixels=function(M,L,Q,$,j,Ee,Te,we=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=m.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){Ie.bindFramebuffer(P.FRAMEBUFFER,Ne);try{let Fe=M.textures[we],Je=Fe.format,nt=Fe.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+we),!lt.textureFormatReadable(Je)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(nt)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-$&&Q>=0&&Q<=M.height-j&&P.readPixels(L,Q,$,j,fe.convert(Je),fe.convert(nt),Ee)}finally{let Fe=z!==null?m.get(z).__webglFramebuffer:null;Ie.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,L,Q,$,j,Ee,Te,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=m.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne)if(L>=0&&L<=M.width-$&&Q>=0&&Q<=M.height-j){Ie.bindFramebuffer(P.FRAMEBUFFER,Ne);let Fe=M.textures[we],Je=Fe.format,nt=Fe.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+we),!lt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.bufferData(P.PIXEL_PACK_BUFFER,Ee.byteLength,P.STREAM_READ),P.readPixels(L,Q,$,j,fe.convert(Je),fe.convert(nt),0);let bt=z!==null?m.get(z).__webglFramebuffer:null;Ie.bindFramebuffer(P.FRAMEBUFFER,bt);let Pt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await oE(P,Pt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ee),P.deleteBuffer(Oe),P.deleteSync(Pt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,Q=0){let $=Math.pow(2,-Q),j=Math.floor(M.image.width*$),Ee=Math.floor(M.image.height*$),Te=L!==null?L.x:0,we=L!==null?L.y:0;w.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,Q,0,0,Te,we,j,Ee),Ie.unbindTexture()};let XE=P.createFramebuffer(),YE=P.createFramebuffer();this.copyTextureToTexture=function(M,L,Q=null,$=null,j=0,Ee=0){let Te,we,Ne,Fe,Je,nt,Oe,bt,Pt,Tt=M.isCompressedTexture?M.mipmaps[Ee]:M.image;if(Q!==null)Te=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,Fe=Q.min.x,Je=Q.min.y,nt=Q.isBox3?Q.min.z:0;else{let Jt=Math.pow(2,-j);Te=Math.floor(Tt.width*Jt),we=Math.floor(Tt.height*Jt),M.isDataArrayTexture?Ne=Tt.depth:M.isData3DTexture?Ne=Math.floor(Tt.depth*Jt):Ne=1,Fe=0,Je=0,nt=0}$!==null?(Oe=$.x,bt=$.y,Pt=$.z):(Oe=0,bt=0,Pt=0);let St=fe.convert(L.format),cn=fe.convert(L.type),Pe;L.isData3DTexture?(w.setTexture3D(L,0),Pe=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(w.setTexture2DArray(L,0),Pe=P.TEXTURE_2D_ARRAY):(w.setTexture2D(L,0),Pe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let An=P.getParameter(P.UNPACK_ROW_LENGTH),ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ri=P.getParameter(P.UNPACK_SKIP_PIXELS),Ti=P.getParameter(P.UNPACK_SKIP_ROWS),hs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nt);let po=M.isDataArrayTexture||M.isData3DTexture,Ct=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let Jt=m.get(M),Tr=m.get(L),Gt=m.get(Jt.__renderTarget),Ar=m.get(Tr.__renderTarget);Ie.bindFramebuffer(P.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ie.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let mo=0;mo<Ne;mo++)po&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,m.get(M).__webglTexture,j,nt+mo),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,m.get(L).__webglTexture,Ee,Pt+mo)),P.blitFramebuffer(Fe,Je,Te,we,Oe,bt,Te,we,P.DEPTH_BUFFER_BIT,P.NEAREST);Ie.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(j!==0||M.isRenderTargetTexture||m.has(M)){let Jt=m.get(M),Tr=m.get(L);Ie.bindFramebuffer(P.READ_FRAMEBUFFER,XE),Ie.bindFramebuffer(P.DRAW_FRAMEBUFFER,YE);for(let Gt=0;Gt<Ne;Gt++)po?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Jt.__webglTexture,j,nt+Gt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Jt.__webglTexture,j),Ct?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tr.__webglTexture,Ee,Pt+Gt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tr.__webglTexture,Ee),j!==0?P.blitFramebuffer(Fe,Je,Te,we,Oe,bt,Te,we,P.COLOR_BUFFER_BIT,P.NEAREST):Ct?P.copyTexSubImage3D(Pe,Ee,Oe,bt,Pt+Gt,Fe,Je,Te,we):P.copyTexSubImage2D(Pe,Ee,Oe,bt,Fe,Je,Te,we);Ie.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ct?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Pe,Ee,Oe,bt,Pt,Te,we,Ne,St,cn,Tt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,Ee,Oe,bt,Pt,Te,we,Ne,St,Tt.data):P.texSubImage3D(Pe,Ee,Oe,bt,Pt,Te,we,Ne,St,cn,Tt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ee,Oe,bt,Te,we,St,cn,Tt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ee,Oe,bt,Tt.width,Tt.height,St,Tt.data):P.texSubImage2D(P.TEXTURE_2D,Ee,Oe,bt,Te,we,St,cn,Tt);P.pixelStorei(P.UNPACK_ROW_LENGTH,An),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ri),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ti),P.pixelStorei(P.UNPACK_SKIP_IMAGES,hs),Ee===0&&L.generateMipmaps&&P.generateMipmap(Pe),Ie.unbindTexture()},this.initRenderTarget=function(M){m.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Ie.unbindTexture()},this.resetState=function(){A=0,B=0,z=null,Ie.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var kh=class n{scene;camera;renderer;cubies=[];cubeGroup;moveQueue=[];isAnimating=!1;highlightMesh;arrowHelper;colors=["W","R","G","Y","O","B"];init(e){this.scene=new Qc,this.camera=new pn(75,e.clientWidth/e.clientHeight,.1,1e3),this.renderer=new Fh({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),this.camera.position.z=5,this.createCube(),this.animate()}createCube(){this.cubies=[],this.cubeGroup=new Gi;let e={U:16777215,R:16711680,F:65280,D:16776960,L:16753920,B:255};for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++)for(let r=-1;r<=1;r++){let s=new rs(.9,.9,.9),o=[new Cn({color:e.R}),new Cn({color:e.L}),new Cn({color:e.U}),new Cn({color:e.D}),new Cn({color:e.F}),new Cn({color:e.B})],a=new mn(s,o);a.position.set(t,i,r),this.cubies.push(a),this.cubeGroup.add(a)}this.scene.add(this.cubeGroup)}animate=()=>{requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)};playMoves(e){e.length&&(this.moveQueue=[...e],this.isAnimating||this.executeNext())}executeNext(){if(!this.moveQueue.length){this.isAnimating=!1;return}this.isAnimating=!0;let e=this.moveQueue.shift();this.applyMove(e)}applyMove(e){let t=e[0],i=e.includes("'"),r=Math.PI/2*(i?-1:1),s=[];switch(t){case"R":s=this.cubies.filter(v=>v.position.x>.5);break;case"L":s=this.cubies.filter(v=>v.position.x<-.5);break;case"U":s=this.cubies.filter(v=>v.position.y>.5);break;case"D":s=this.cubies.filter(v=>v.position.y<-.5);break;case"F":s=this.cubies.filter(v=>v.position.z>.5);break;case"B":s=this.cubies.filter(v=>v.position.z<-.5);break}let o={R:["x",new V(1,0,0)],L:["x",new V(1,0,0)],U:["y",new V(0,1,0)],D:["y",new V(0,1,0)],F:["z",new V(0,0,1)],B:["z",new V(0,0,1)]},[a,c]=o[t],l={R:1,L:-1,U:1,D:-1,F:1,B:-1}[t]??0;this.addFaceHighlight(a,l),this.showRotationArrow(c,new V(0,0,0),!i);let u=new Gi;s.forEach(v=>{this.cubeGroup.remove(v),u.add(v)}),this.scene.add(u);let d=500,f=performance.now(),h=v=>{let x=v-f,g=Math.min(x/d,1);u.rotation.setFromVector3(c.clone().multiplyScalar(r*g)),g<1?requestAnimationFrame(h):(s.forEach(p=>{p.position.applyAxisAngle(c,r),p.rotation.set(0,0,0),u.remove(p),this.cubeGroup.add(p)}),this.scene.remove(u),this.scene.remove(this.highlightMesh),this.scene.remove(this.arrowHelper),this.executeNext())};requestAnimationFrame(h)}resetCube(){this.cubies.forEach(e=>{e.position.set(Math.round(e.position.x),Math.round(e.position.y),Math.round(e.position.z)),e.rotation.set(0,0,0)}),this.isAnimating=!1,this.moveQueue=[],console.log("Cube reset")}addFaceHighlight(e,t){this.highlightMesh&&this.scene.remove(this.highlightMesh);let i=3.2,r=new ro(i,i),s=new Cn({color:16776960,opacity:.3,transparent:!0,side:ni});switch(this.highlightMesh=new mn(r,s),e){case"x":this.highlightMesh.position.set(t,0,0),this.highlightMesh.rotation.set(0,Math.PI/2,0);break;case"y":this.highlightMesh.position.set(0,t,0),this.highlightMesh.rotation.set(-Math.PI/2,0,0);break;case"z":this.highlightMesh.position.set(0,0,t);break}this.scene.add(this.highlightMesh)}showRotationArrow(e,t,i){this.arrowHelper&&this.scene.remove(this.arrowHelper);let r=e.clone();i||r.negate();let s=t.clone(),o=1.2,a=16711680;this.arrowHelper=new ul(r,s,o,a,.4,.2),this.scene.add(this.arrowHelper)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})};var JL=["cubeContainer"],Uh=class n{constructor(e){this.rendererService=e}moves=[];cubeContainer;ngAfterViewInit(){this.rendererService.init(this.cubeContainer.nativeElement)}autoPlay(){this.moves.length&&this.rendererService.playMoves(this.moves)}nextStep(){if(this.moves.length){let e=this.moves.shift();this.rendererService.playMoves([e])}}resetCube(){this.rendererService.resetCube()}static \u0275fac=function(t){return new(t||n)(Qn(kh))};static \u0275cmp=gi({type:n,selectors:[["app-cube-3d"]],viewQuery:function(t,i){if(t&1&&Wo(JL,7),t&2){let r;$o(r=qo())&&(i.cubeContainer=r.first)}},inputs:{moves:"moves"},decls:9,vars:0,consts:[["cubeContainer",""],[1,"cube-container"],[1,"controls"],[3,"click"]],template:function(t,i){if(t&1){let r=fr();dr(0,"div",1,0),qt(2,"div",2)(3,"button",3),Li("click",function(){return Zn(r),Jn(i.nextStep())}),vi(4,"Next Step"),rn(),qt(5,"button",3),Li("click",function(){return Zn(r),Jn(i.autoPlay())}),vi(6,"Auto Play"),rn(),qt(7,"button",3),Li("click",function(){return Zn(r),Jn(i.resetCube())}),vi(8,"Reset Cube"),rn()()}},dependencies:[jr],styles:[".cube-container[_ngcontent-%COMP%]{width:100%;height:400px;margin-bottom:1rem;border:1px solid #ccc}.controls[_ngcontent-%COMP%]{display:flex;gap:1rem;justify-content:center}"]})};var Bh=class n{extractColors(e){let t=e.getContext("2d",{willReadFrequently:!0}),i=e.width,r=e.height,s=[],o=i/3,a=r/3;for(let c=0;c<3;c++){let l=[];for(let u=0;u<3;u++){let d=Math.floor(u*o+o/2),f=Math.floor(c*a+a/2),h=t.getImageData(d,f,1,1).data;l.push(this.detectColor(h))}s.push(l)}return s}detectColor(e){let[t,i,r]=e;return t>200&&i>200&&r>200?"W":t>200&&i<100&&r<100?"R":t<100&&i>200&&r<100?"G":t>200&&i>200&&r<100?"Y":t>200&&i>100&&i<200&&r<100?"O":r>150?"B":"W"}mapColor(e){return{W:"white",R:"red",G:"green",Y:"yellow",O:"orange",B:"blue"}[e]}validateCube(e){let t=Object.values(e).flatMap(r=>r?r.split(""):[]),i={W:0,R:0,G:0,Y:0,O:0,B:0};t.forEach(r=>{i[r]!==void 0&&i[r]++});for(let r in i)if(i[r]!==9)return{valid:!1,message:`Color ${r} count is ${i[r]}, should be 9`};return{valid:!0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})};var QL=["video"],ek=["canvas"],tk=()=>[1,2,3,4,5,6,7,8,9];function nk(n,e){n&1&&dr(0,"div")}function ik(n,e){if(n&1){let t=fr();qt(0,"div",7),Li("click",function(){let r=Zn(t).$index,s=ki().$index,o=ki(2);return Jn(o.editColor(s,r))}),rn()}if(n&2){let t=e.$implicit,i=ki(3);ed("background",i.scanService.mapColor(t))}}function rk(n,e){if(n&1&&(qt(0,"div",17),vc(1,ik,1,2,"div",18,gc),rn()),n&2){let t=e.$implicit;nn(),yc(t)}}function sk(n,e){if(n&1){let t=fr();qt(0,"div",16),vc(1,rk,3,0,"div",17,gc),rn(),qt(3,"button",7),Li("click",function(){Zn(t);let r=ki();return Jn(r.confirmFace())}),vi(4,"Confirm Face"),rn()}if(n&2){let t=ki();nn(),yc(t.detectedGrid)}}var Vh=class n{constructor(e){this.scanService=e}videoRef;canvasRef;facesOrder=["U","R","F","D","L","B"];currentIndex=0;detectedGrid=[];cubeState={};stream;async ngAfterViewInit(){await this.startCamera()}async startCamera(){this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),this.videoRef.nativeElement.srcObject=this.stream}get currentFace(){return this.facesOrder[this.currentIndex]}capture(){let e=this.videoRef.nativeElement,t=this.canvasRef.nativeElement,i=t.getContext("2d",{willReadFrequently:!0});t.width=e.videoWidth,t.height=e.videoHeight,i.drawImage(e,0,0),this.detectedGrid=this.scanService.extractColors(t)}confirmFace(){if(this.cubeState[this.currentFace]=this.detectedGrid.flat().join(""),this.currentIndex++,this.detectedGrid=[],this.currentIndex===6){let e=this.scanService.validateCube(this.cubeState);e.valid?console.log("Cube scanned successfully:",this.cubeState):(alert("Cube is invalid: "+e.message),this.currentIndex=0)}}editColor(e,t){let i=["W","R","G","Y","O","B"],r=this.detectedGrid[e][t],s=i[(i.indexOf(r)+1)%i.length];this.detectedGrid[e][t]=s}highlightFace(e){let t={U:"#ffffff",R:"#ff0000",F:"#00ff00",D:"#ffff00",L:"#ffa500",B:"#0000ff"};return this.currentFace===e?t[e]:"#444444"}static \u0275fac=function(t){return new(t||n)(Qn(Bh))};static \u0275cmp=gi({type:n,selectors:[["app-scanner"]],viewQuery:function(t,i){if(t&1&&Wo(QL,7)(ek,7),t&2){let r;$o(r=qo())&&(i.videoRef=r.first),$o(r=qo())&&(i.canvasRef=r.first)}},decls:22,vars:9,consts:[["video",""],["canvas",""],[1,"scanner-container"],[1,"camera-wrapper"],["autoplay","","playsinline",""],[1,"grid-overlay"],["hidden",""],[3,"click"],[1,"mini-cube"],["width","200","height","150"],["x","50","y","0","width","50","height","50"],["x","0","y","50","width","50","height","50"],["x","50","y","50","width","50","height","50"],["x","100","y","50","width","50","height","50"],["x","50","y","100","width","50","height","50"],["x","150","y","50","width","50","height","50"],[1,"preview-grid"],[1,"row"],[3,"background"]],template:function(t,i){if(t&1){let r=fr();qt(0,"div",2)(1,"h2"),vi(2),rn(),qt(3,"div",3),dr(4,"video",4,0),qt(6,"div",5),vc(7,nk,1,0,"div",null,gc),rn()(),dr(9,"canvas",6,1),qt(11,"button",7),Li("click",function(){return Zn(r),Jn(i.capture())}),vi(12,"Capture"),rn(),qt(13,"div",8),mu(),qt(14,"svg",9),dr(15,"rect",10)(16,"rect",11)(17,"rect",12)(18,"rect",13)(19,"rect",14)(20,"rect",15),rn()(),Dg(21,sk,5,0),rn()}t&2&&(nn(2),td("Scan Face: ",i.currentFace),nn(5),yc(Ig(8,tk)),nn(8),Oi("fill",i.highlightFace("U")),nn(),Oi("fill",i.highlightFace("L")),nn(),Oi("fill",i.highlightFace("F")),nn(),Oi("fill",i.highlightFace("R")),nn(),Oi("fill",i.highlightFace("D")),nn(),Oi("fill",i.highlightFace("B")),nn(),Ag(i.detectedGrid.length?21:-1))},dependencies:[jr],styles:[".scanner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:1rem}.camera-wrapper[_ngcontent-%COMP%]{position:relative;width:90vw;max-width:400px;aspect-ratio:1}video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:12px}.grid-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr)}.grid-overlay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:2px solid rgba(255,255,255,.8)}.preview-grid[_ngcontent-%COMP%]{margin-top:1rem;display:grid;grid-template-columns:repeat(3,50px);gap:5px}.preview-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:6px;cursor:pointer}.mini-cube[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;justify-content:center}.mini-cube[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{stroke:#000;stroke-width:2px}"]})};var ok=new Ve("",{factory:()=>kE}),kE="always";var ak=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Hr({type:n});static \u0275inj=rr({})}return n})();var UE=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ok,useValue:t.callSetDisabledState??kE}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Hr({type:n});static \u0275inj=rr({imports:[ak]})}return n})();var qy=rw(GE());var zh=class n{constructor(){qy.default.initSolver()}solve(e){let t=e.U+e.R+e.F+e.D+e.L+e.B,r=qy.default.fromString(t).solve();return r?r.trim().split(/\s+/):[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Be({token:n,factory:n.\u0275fac,providedIn:"root"})};function lk(n,e){if(n&1){let t=fr();Hs(0,"div")(1,"button",2),jo("click",function(){Zn(t);let r=ki();return Jn(r.solveCube())}),vi(2,"Show Solution Steps"),zs()()}}function uk(n,e){if(n&1&&(Hs(0,"div"),zr(1,"app-cube-3d",3),zs()),n&2){let t=ki();nn(),Go("moves",t.solutionMoves)}}var Gh=class n{constructor(e){this.solverService=e}scannedCube;solutionMoves=[];showCube=!1;onScanned(e){this.scannedCube=e.detail,this.solutionMoves=[],this.showCube=!1}solveCube(){this.scannedCube&&(this.solutionMoves=this.solverService.solve(this.scannedCube),this.showCube=!0)}static \u0275fac=function(t){return new(t||n)(Qn(zh))};static \u0275cmp=gi({type:n,selectors:[["app-controller"]],decls:3,vars:2,consts:[[3,"scanned"],[4,"ngIf"],[3,"click"],[3,"moves"]],template:function(t,i){t&1&&(Hs(0,"app-scanner",0),jo("scanned",function(s){return i.onScanned(s)}),zs(),Ku(1,lk,3,0,"div",1)(2,uk,2,1,"div",1)),t&2&&(nn(),Go("ngIf",i.scannedCube),nn(),Go("ngIf",i.showCube))},dependencies:[jr,Og,UE,Vh,Uh],encapsulation:2})};var jh=class n{title=ur("cube-solver");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=gi({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&zr(0,"app-controller")},dependencies:[Gh],encapsulation:2})};jg(jh,rS).catch(n=>console.error(n));
