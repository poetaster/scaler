(this.webpackJsonpscaler=this.webpackJsonpscaler||[]).push([[0],{142:function(e,t,n){e.exports={chart:"Chart_chart__2ay2D"}},23:function(e,t,n){e.exports={container:"App_container__16xz_",inputs:"App_inputs__2pcYr",input:"App_input__cnruI",labels:"App_labels__sWrEY",play:"App_play__3MUmt"}},302:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(75),s=n.n(c),o=n(15),i=n(309),u=n(307),b=n(157),l=n(67),m=n(18),j=n(57),h=n.n(j),p=n(141),f=function(e,t){if("y="!==(e=e.replace(/\s+/g,"")).substring(0,2))throw Error("Invalid formula: "+e);e=e.substring(2);var n,a=[],r=Object(m.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;try{var s=p.a.evaluate(e,{x:c});a.push(s)}catch(o){throw Error("Formula evaluation error: "+e)}}}catch(i){r.e(i)}finally{r.f()}return a},d=n(142),v=n.n(d),O=n(8),A=["#8338ec","#ff006e","#3a86ff","#fb5607","#ffbe0b"],x=function(e){var t=e.formulas,n=e.numNotes,a=e.noteRange,r=e.notes;(a-=1)<1&&(a=1);for(var c=100*n,s=(2*Math.PI-0)/c,o=[],m=0;m<c;m++)o.push(m*s);for(var j=t.map((function(e){try{return f(e,o)}catch(t){return null}})).filter((function(e){return null!==e})),h=[],p=0;p<c;p++){o[p];for(var d={name:p},x=0;x<j.length;x++){var N="f".concat(x),E=j[x][p];d[N]=E}h.push(d)}for(var g=[],D=0;D<n+1;D++)g.push(730*D/n);for(var G=[],B=0;B<a+1;B++)G.push(250*B/a);return Object(O.jsx)("div",{className:v.a.chart,children:Object(O.jsxs)(i.a,{width:730,height:250,data:h,children:[Object(O.jsx)(u.a,{stroke:"#ccc",strokeDasharray:"3 3",verticalPoints:g,horizontalPoints:G}),j.map((function(e,t){return Object(O.jsx)(b.a,{type:"monotone",dataKey:"f".concat(t),stroke:A[t%A.length]+"99",dot:!1,strokeWidth:3},t)})),Object(O.jsx)(l.a,{formatter:function(e,t,n){return r[Math.round(n.payload.name/100)]},labelFormatter:function(e){return Math.round(e/100)}})]})})},N=n(23),E=n.n(N),g=n(66),D=n.n(g),G=function(e){var t=e.enabledNotes,n=e.setEnabledNotes,a=e.periodDuration,r=e.isPlaying?{animationDuration:"".concat(a,"ms")}:{animation:"none"};return Object(O.jsxs)("div",{className:D.a.notes,children:[t.map((function(e,a){return Object(O.jsx)("div",{onClick:function(){return function(e){for(var a=[],r=0;r<t.length;r++){var c=t[r],s=r===e?!c:c;a.push(s)}n(a)}(a)},className:"".concat(D.a.note," ").concat(e?D.a.enabled:"")},a)})),Object(O.jsx)("div",{className:D.a.timeArm,style:r})]})},B=["C0","Db0","D0","Eb0","E0","F0","Gb0","G0","Ab0","A0","Bb0","B0","C1","Db1","D1","Eb1","E1","F1","Gb1","G1","Ab1","A1","Bb1","B1","C2","Db2","D2","Eb2","E2","F2","Gb2","G2","Ab2","A2","Bb2","B2","C3","Db3","D3","Eb3","E3","F3","Gb3","G3","Ab3","A3","Bb3","B3","C4","Db4","D4","Eb4","E4","F4","Gb4","G4","Ab4","A4","Bb4","B4","C5","Db5","D5","Eb5","E5","F5","Gb5","G5","Ab5","A5","Bb5","B5","C6","Db6","D6","Eb6","E6","F6","Gb6","G6","Ab6","A6","Bb6","B6","C7","Db7","D7","Eb7","E7","F7","Gb7","G7","Ab7","A7","Bb7","B7","C8","Db8","D8","Eb8","E8","F8","Gb8","G8","Ab8","A8","Bb8","B8"],_=[16.35,17.32,18.35,19.45,20.6,21.83,23.12,24.5,25.96,27.5,29.14,30.87,32.7,34.65,36.71,38.89,41.2,43.65,46.25,49,51.91,55,58.27,61.74,65.41,69.3,73.42,77.78,82.41,87.31,92.5,98,103.83,110,116.54,123.47,130.81,138.59,146.83,155.56,164.81,174.61,185,196,207.65,220,233.08,246.94,261.63,277.18,293.66,311.13,329.63,349.23,369.99,392,415.3,440,466.16,493.88,523.25,554.37,587.33,622.25,659.25,698.46,739.99,783.99,830.61,880,932.33,987.77,1046.5,1108.73,1174.66,1244.51,1318.51,1396.91,1479.98,1567.98,1661.22,1760,1864.66,1975.53,2093,2217.46,2349.32,2489.02,2637.02,2793.83,2959.96,3135.96,3322.44,3520,3729.31,3951.07,4186.01,4434.92,4698.63,4978.03,5274.04,5587.65,5919.91,6271.93,6644.88,7040,7458.62,7902.13];if(B.length!==_.length)throw Error("# notes !== # freqs");for(var C={},y=0;y<B.length;y++)C[B[y]]=_[y];for(var F,w=new(window.AudioContext||window.webkitAudioContext),S=function(e,t){if("number"===typeof e&&!isNaN(e)&&e){t=t||85;var n=w.createGain();n.gain.setValueCurveAtTime(new Float32Array([0,.8,1,.3,0].map((function(e){return.05*e}))),w.currentTime,t/1e3),n.connect(w.destination);var a=w.createOscillator();a.connect(n),a.frequency.setValueAtTime(e,0),a.start(0),setTimeout((function(){return a.stop()}),t)}},k=1,P=function(){clearInterval(F),k=0},I=[{name:"C major",pitches:["C","D","E","F","G","A","B"]},{name:"D minor",pitches:["D","E","F","G","A","Bb","C"]},{name:"D major",pitches:["D","E","Gb","G","A","B","Db"]},{name:"E minor",pitches:["E","Gb","G","A","B","C","D"]},{name:"E major",pitches:["E","Gb","G","A","B","C","D"]},{name:"F minor",pitches:["F","G","Ab","Bb","C","Db","Eb"]},{name:"F major",pitches:["F","G","A","Bb","C","D","E"]},{name:"G minor",pitches:["G","A","Bb","C","D","Eb","F"]},{name:"G major",pitches:["G","A","B","C","D","E","Gb"]},{name:"A minor",pitches:["A","B","C","D","E","F","G"]},{name:"A major",pitches:["A","B","Db","D","E","Gb","Ab"]},{name:"B minor",pitches:["B","Db","D","E","Gb","G","A"]},{name:"B major",pitches:["B","Db","Eb","E","Gb","Ab","Bb"]}].map((function(e){e.notes=[];var t,n=Object(m.a)(B);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=a.substring(0,a.length-1);e.pitches.includes(r)&&e.notes.push(a)}}catch(c){n.e(c)}finally{n.f()}return e})),M=[],R=0;R<16;R++)M.push(!0);var T=I[2],z=function(){var e=Object(a.useState)("y = max(sin(x), cos(4*x))"),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(M),s=Object(o.a)(c,2),i=s[0],u=s[1],b=Object(a.useState)(!1),l=Object(o.a)(b,2),m=l[0],j=l[1],p=Object(a.useState)(3e3),d=Object(o.a)(p,2),v=d[0],A=d[1],N=Object(a.useState)(T),g=Object(o.a)(N,2),D=g[0],B=g[1],_=Object(a.useState)(T.pitches[0]+"3"),y=Object(o.a)(_,2),w=y[0],R=y[1],z=Object(a.useState)(14),q=Object(o.a)(z,2),J=q[0],V=q[1],W=Object(a.useState)(85),Y=Object(o.a)(W,2),Z=Y[0],H=Y[1],K=Object(a.useRef)(i),L=Object(a.useRef)(Z);Object(a.useEffect)((function(){K.current=i}),[i]),Object(a.useEffect)((function(){L.current=Z}),[Z]);var U=function(e,t,n,a,r){r-=1;for(var c,s=e.notes.indexOf(a),o=[],i=0;i<t;i++)o.push(i/t*2*Math.PI);try{c=f(n,o)}catch(l){return[]}var u=h.a.min(c),b=h.a.max(c);return c.map((function(e){return Math.round((e-u)/(b-u||1)*r)})).map((function(t){return e.notes[t+s]}))}(D,i.length,n,w,J);return Object(O.jsxs)("div",{className:E.a.container,children:[Object(O.jsxs)("div",{className:E.a.labels,children:[Object(O.jsx)("label",{children:"Formula"}),Object(O.jsx)("label",{children:"Period (ms)"}),Object(O.jsx)("label",{children:"Beats"})]}),Object(O.jsxs)("div",{className:E.a.inputs,children:[Object(O.jsx)("input",{className:E.a.input,value:n,onChange:function(e){j(!1),P(),r(e.target.value)}}),Object(O.jsx)("input",{className:E.a.input,value:v,onChange:function(e){j(!1),P(),A(Number(e.target.value))},type:"number"}),Object(O.jsx)("input",{className:E.a.input,value:i.length,onChange:function(e){if(j(!1),P(),!isNaN(Number(e.target.value))){for(var t=[],n=0;n<Number(e.target.value);n++)t.push(!0);u(t)}},type:"number"})]}),Object(O.jsxs)("div",{className:E.a.labels,children:[Object(O.jsx)("label",{children:"Scale"}),Object(O.jsx)("label",{children:"Low note"}),Object(O.jsx)("label",{children:"Note range"}),Object(O.jsx)("label",{children:"Note duration (ms)"})]}),Object(O.jsxs)("div",{className:E.a.inputs,children:[Object(O.jsx)("select",{className:E.a.input,onChange:function(e){j(!1),P();var t=I[e.target.value];B(t),R(t.pitches[0]+"3")},children:I.map((function(e,t){return Object(O.jsx)("option",{value:t,selected:2===t,children:e.name},t)}))}),Object(O.jsx)("select",{className:E.a.input,value:w,onChange:function(e){j(!1),P(),R(e.target.value)},children:D.notes.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)}))}),Object(O.jsx)("input",{className:E.a.input,value:J,onChange:function(e){j(!1),P(),isNaN(Number(e.target.value))||V(Number(e.target.value))},type:"number"}),Object(O.jsx)("input",{className:E.a.input,value:Z,onChange:function(e){isNaN(Number(e.target.value))||H(Number(e.target.value))},type:"number"})]}),Object(O.jsx)(x,{formulas:[n],numNotes:i.length,noteRange:J,notes:U}),Object(O.jsx)(G,{enabledNotes:i,setEnabledNotes:u,isPlaying:m,periodDuration:v}),Object(O.jsx)("button",{className:E.a.play,onClick:function(){m?(j(!1),P()):(j(!0),function(e,t,n,a){var r=t.current.length,c=e.map((function(e){return C[e]})),s=c[0];t.current[0]&&S(s,a.current),k=1,F=setInterval((function(){var e=c[k];t.current[k]&&S(e,a.current),k=(k+1)%r}),n/r)}(U,K,v,L))},children:m?"stop":"start"})]})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))},66:function(e,t,n){e.exports={notes:"Notes_notes__2CEZy",note:"Notes_note__32ig5",enabled:"Notes_enabled__34Zsz",timeArm:"Notes_timeArm__3vyiP",slide:"Notes_slide__18buH"}}},[[302,1,2]]]);
//# sourceMappingURL=main.c4add675.chunk.js.map