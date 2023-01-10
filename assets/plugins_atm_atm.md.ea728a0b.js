import{_ as t,c as r,a,b as i,t as n,d as o,o as s}from"./app.310de484.js";const b=JSON.parse('{"title":"ATM","description":"","frontmatter":{"title":"ATM","order":-99},"headers":[],"relativePath":"plugins/atm/atm.md","lastUpdated":1673355520000}'),c={name:"plugins/atm/atm.md"},d={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=o('<h3 id="abstract" tabindex="-1">Abstract <a class="header-anchor" href="#abstract" aria-hidden="true">#</a></h3><p>The ATM plugin is a basic banking plugin that enables all ATMs in the map to have a banking service attached to them. This means you can deposit, and withdraw cash from an ATM as well as perform general transfers.</p><p>\u{1F4C1} <code>src/core/plugins/core-atm/</code></p><ul><li>Generate Bank Account Numbers</li><li>Withdraw Cash</li><li>Deposit Cash</li><li>Transfer Bank Balance</li><li>An ATM Interface</li></ul><p><img src="https://i.imgur.com/D11jNNW.png" alt="Standard ATM Interface"></p><h3 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h3><p>General configuration information can be found in the following directory.</p><p>\u{1F4C1}<code>src/core/plugins/core-atm/server/src/config.ts</code></p><ul><li>BANK_ACCOUNT_START_NUMBER <ul><li>The number to start all bank accounts from.</li><li><em><strong>Modifying this after going into production could break a lot of stuff.</strong></em></li></ul></li></ul><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Visit any ATM in-game and press <code>E</code> to bring up the ATM interface.</p><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h3><p>No Commands Available</p>',13);function p(e,m,u,f,_,g){return s(),r("div",null,[a("h1",d,[i(n(e.$frontmatter.title)+" ",1),l]),h])}const A=t(c,[["render",p]]);export{b as __pageData,A as default};