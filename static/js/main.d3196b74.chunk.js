(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,o){e.exports=o(33)},28:function(e,t,o){},33:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),r=o(17),i=o.n(r),s=(o(28),o(5)),u=o(6),h=o(10),c=o(7),l=o(11),m=o(3),y=Object(m.b)(function(e){return{quote:e.currentQuote}})(function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"injectContent",value:function(){return n.a.createElement("div",{className:"quotes",key:this.props.quote.key},n.a.createElement("div",{id:"text",className:"quotes_text"},this.props.quote.content),n.a.createElement("div",{id:"author",className:"quotes_author"},"- ",this.props.quote.author," -"))}},{key:"render",value:function(){return n.a.createElement("div",{className:"quotes_container"},this.injectContent())}}]),t}(a.Component));var d=o(14),p=o(21),b=o(22),g=Object(m.b)(function(e){return{quotes:e.quotes}},{nextQuoteAction:function(e){return{type:"NEXT_QUOTE",payload:e[Math.floor(Math.random()*e.length)]}}})(function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"buttons"},n.a.createElement("span",{id:"buttons_tweet",className:"button"},n.a.createElement("a",{id:"tweet-quote",href:"twitter.com/intent/tweet",target:"_blank"},n.a.createElement(d.a,{icon:p.a}))),n.a.createElement("span",{onClick:function(){return e.props.nextQuoteAction(e.props.quotes)},id:"new-quote",className:"button"},n.a.createElement(d.a,{icon:b.a})))}}]),t}(a.Component));var f=function(){return n.a.createElement("div",{id:"quote-box",className:"App"},n.a.createElement(g,null),n.a.createElement(y,null))},k=o(8),w=o(9),v=o.n(w),E=o(2),j=Object(E.c)({quotes:O,currentQuote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){var e=[{key:0,content:"You've been down there, Neo. You already know that road. You know exactly where it ends. And I know that's not where you want to be.",author:"Trinity"},{key:1,content:"The present is theirs; the future, for which I really worked, is mine.",author:"Nicola Tesla"},{key:2,content:"Take positive care of your mind, and it would surely take positive care of your life.",author:"Edmond Mbiaka"},{key:3,content:"I don't care if it works on your machine! We are not shipping your machine!",author:"Vidiu Platon"},{key:4,content:"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",author:"Christopher Thompson"},{key:5,content:"Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",author:"Alan Kay"},{key:6,content:"The trouble with programmers is that you can never tell what a programmer is doing until it\u2019s too late.",author:"Seymour Cray"},{key:7,content:"On two occasions I have been asked [by members of Parliament]: 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.",author:"Charles Babbage"},{key:8,content:"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",author:"Linus Torvalds"},{key:9,content:"Learning to code is useful no matter what your career ambitions are.",author:"Arianna Huffington"},{key:10,content:"Experience is the name everyone gives to their mistakes.",author:"Oscar Wilde"},{key:11,content:"You start at your most popular and least capable, and you end at your most capable and least popular.",author:"Tony Blair"},{key:12,content:"Grant me the following in the name of our Lord Jesus Christ. Like a leper rotting in flesh, let all avoid me. Like a cripple without limbs, let me not move freely. Remove my cheeks, that tears may not roll down them. Crush my lips and tongue, that I may not sin with them. Pull out my nails, that I may not grasp nothing. Let my shoulders and back be bent, that I may carry nothing. Like a man with tumor in the head let me lack judgment. Ravage my body sworn to chastity leave me with no pride, and have me live in shame. Let no one pray for me. But only the grace of the Lord Jesus Christ have mercy on me.",author:"Sang-hyeon"}].slice(),t=Math.floor(Math.random()*e.length);return e[t]}(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEXT_QUOTE":return t.payload;default:return e}return e}});Object(E.d)(j,Object(E.a)(k.a,w.logger));function O(){return[{key:0,content:"You've been down there, Neo. You already know that road. You know exactly where it ends. And I know that's not where you want to be.",author:"Trinity"},{key:1,content:"The present is theirs; the future, for which I really worked, is mine.",author:"Nicola Tesla"},{key:2,content:"Take positive care of your mind, and it would surely take positive care of your life.",author:"Edmond Mbiaka"},{key:3,content:"I don't care if it works on your machine! We are not shipping your machine!",author:"Vidiu Platon"},{key:4,content:"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",author:"Christopher Thompson"},{key:5,content:"Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",author:"Alan Kay"},{key:6,content:"The trouble with programmers is that you can never tell what a programmer is doing until it\u2019s too late.",author:"Seymour Cray"},{key:7,content:"On two occasions I have been asked [by members of Parliament]: 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.",author:"Charles Babbage"},{key:8,content:"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",author:"Linus Torvalds"},{key:9,content:"Learning to code is useful no matter what your career ambitions are.",author:"Arianna Huffington"},{key:10,content:"Experience is the name everyone gives to their mistakes.",author:"Oscar Wilde"},{key:11,content:"You start at your most popular and least capable, and you end at your most capable and least popular.",author:"Tony Blair"},{key:12,content:"Grant me the following in the name of our Lord Jesus Christ. Like a leper rotting in flesh, let all avoid me. Like a cripple without limbs, let me not move freely. Remove my cheeks, that tears may not roll down them. Crush my lips and tongue, that I may not sin with them. Pull out my nails, that I may not grasp nothing. Let my shoulders and back be bent, that I may carry nothing. Like a man with tumor in the head let me lack judgment. Ravage my body sworn to chastity leave me with no pride, and have me live in shame. Let no one pray for me. But only the grace of the Lord Jesus Christ have mercy on me.",author:"Sang-hyeon"}]}var T=Object(E.d)(j,Object(E.a)(k.a,v.a));i.a.render(n.a.createElement(m.a,{store:T},n.a.createElement(f,null)),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.d3196b74.chunk.js.map