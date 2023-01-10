import{_ as l,c as t,a as e,b as i,t as s,d as n,o as r}from"./app.310de484.js";const E=JSON.parse('{"title":"Fuel","description":"","frontmatter":{"title":"Fuel","order":-99},"headers":[],"relativePath":"plugins/fuel/fuel.md","lastUpdated":1673355520000}'),o={name:"plugins/fuel/fuel.md"},c={id:"frontmatter-title",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=n(`<h3 id="abstract" tabindex="-1">Abstract <a class="header-anchor" href="#abstract" aria-hidden="true">#</a></h3><p>The fuel system is very basic and does not provide any measurement of how far a player has driven. Instead it will remove fuel at a set interval which can be configured.</p><p>\u{1F4C1} <code>src/core/plugins/core-fuel/</code></p><ul><li>Removes Fuel from 100</li><li>Removes Fuel in unoccupied vehicles</li><li>Only removes vehicles with fuel and save ability flag</li><li>The HUD reflects fuel through Synced Meta that is set</li></ul><p><img src="https://i.imgur.com/7FnZsCH.png" alt=""></p><h3 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h3><p>\u{1F4C1} <code>src/core/plugins/core-fuel/server/src/config.ts</code></p><ul><li>MAXIMUM_FUEL <ul><li>The maximum amount of fuel available for all vehicles.</li></ul></li><li>FUEL_LOSS_PER_TICK <ul><li>The amount of fuel to remove on each TIME_BETWEEN_UPDATES</li></ul></li><li>TIME_BETWEEN_UPDATES <ul><li>How many milliseconds between each vehicle update</li><li>Default is 5000 (5s)</li></ul></li><li>FUEL_ON_NEW_VEHICLE_CREATE <ul><li>How much fuel to give a new vehicle?</li><li>Default is 100</li></ul></li></ul><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Get in a vehicle. Turn on the engine. Drive around. Watch fuel go away.</p><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h3><h4 id="setfuel" tabindex="-1">setfuel <a class="header-anchor" href="#setfuel" aria-hidden="true">#</a></h4><p>Administrative command used to set the current fuel level for the vehicle you are in.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/setfuel [0-100]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14);function h(a,f,p,m,_,v){return r(),t("div",null,[e("h1",c,[i(s(a.$frontmatter.title)+" ",1),u]),d])}const T=l(o,[["render",h]]);export{E as __pageData,T as default};