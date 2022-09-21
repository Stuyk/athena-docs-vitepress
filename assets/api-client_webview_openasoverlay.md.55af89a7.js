import{_ as n,c as e,a as s,b as l,t as p,d as o,o as t}from"./app.489834bc.js";const _=JSON.parse('{"title":".openAsOverlay","description":"","frontmatter":{"title":".openAsOverlay","order":-99},"headers":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"relativePath":"api-client/webview/openasoverlay.md"}'),r={name:"api-client/webview/openasoverlay.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=o(`<p>Register a Page Overlay such as HUD elements.</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Arguments</p><ul><li>pageName -&gt; string <ul><li>Name of the page.</li></ul></li><li>callback -&gt; (isVisible -&gt; boolean) =&gt; void = undefined (optional) <ul><li>Callback to call when the visibility changes.</li><li>Example: The HUD elements are hidden when the player opens the inventory. That&#39;s when it&#39;s called. No need to change the visibility in the callback.</li></ul></li></ul><p>Returns</p><ul><li>Returns a void.</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">webview</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">openAsOverlay</span><span style="color:#A6ACCD;">(ComponentName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ExampleWebView</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">setVisible)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExampleWebView</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">setVisible</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">isVisible</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">isVisible</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">native</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">displayRadar</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">native</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">displayRadar</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,7);function F(a,D,A,d,C,h){return t(),e("div",null,[s("h1",c,[l(p(a.$frontmatter.title)+" ",1),i]),y])}const g=n(r,[["render",F]]);export{_ as __pageData,g as default};