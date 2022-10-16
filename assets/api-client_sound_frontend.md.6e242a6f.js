import{_ as t,c as a,a as e,b as n,t as o,d as l,o as r}from"./app.368adc6b.js";const A=JSON.parse('{"title":".frontend","description":"","frontmatter":{"title":".frontend","order":-99},"headers":[],"relativePath":"api-client/sound/frontend.md","lastUpdated":1665935249000}'),p={name:"api-client/sound/frontend.md"},i={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(`<p>Used to play a sound from the frontend. Sound list: <a href="https://altv.stuyk.com/docs/articles/tables/frontend-sounds.html" target="_blank" rel="noreferrer">https://altv.stuyk.com/docs/articles/tables/frontend-sounds.html</a></p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Arguments</p><ul><li>audioName -&gt; string <ul><li>Name of the audio</li><li>Example: &#39;10_SEC_WARNING&#39;</li></ul></li><li>ref -&gt; string <ul><li>Reference of the audio</li><li>Example: &#39;HUD_MINI_GAME_SOUNDSET&#39;</li></ul></li></ul><p>Returns</p><ul><li>Returns a void.</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sound</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">frontend</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10_SEC_WARNING</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HUD_MINI_GAME_SOUNDSET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,7);function _(s,u,D,f,h,y){return r(),a("div",null,[e("h1",i,[n(o(s.$frontmatter.title)+" ",1),c]),d])}const F=t(p,[["render",_]]);export{A as __pageData,F as default};
