import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.9bc09dc8.js";const g=JSON.parse('{"title":"不定高度的过渡动画组件","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/vue/use/1.不定高度的过渡动画组件.md","filePath":"front-end/vue/use/1.不定高度的过渡动画组件.md","lastUpdated":1695089801000}'),p={name:"front-end/vue/use/1.不定高度的过渡动画组件.md"},o=l(`<h1 id="不定高度的过渡动画组件" tabindex="-1">不定高度的过渡动画组件 <a class="header-anchor" href="#不定高度的过渡动画组件" aria-label="Permalink to &quot;不定高度的过渡动画组件&quot;">​</a></h1><p>适用于给高度不确定的元素添加展开收起动画。当前版本适用于<code>Vue3</code>，原版摘自大神<a href="https://segmentfault.com/u/frozenjun" target="_blank" rel="noreferrer">鹿俊</a>关于问题：<a href="https://segmentfault.com/q/1010000011359250" target="_blank" rel="noreferrer">vuejs 如何实现这样的展开收起动画？</a>的回答。</p><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, Transition } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">elTransition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transitionEvents</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onBeforeEnter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> elTransition</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">el.dataset) el.dataset </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldPaddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.paddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldPaddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.paddingBottom</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onEnter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldOverflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.overflow</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (el.scrollHeight </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.scrollHeight </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.overflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hidden&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onAfterEnter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.overflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldOverflow</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onBeforeLeave</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">el.dataset) el.dataset </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldPaddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.paddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldPaddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.paddingBottom</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldOverflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.overflow</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.scrollHeight </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.overflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hidden&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onLeave</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (el.scrollHeight </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> elTransition</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onAfterLeave</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.overflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldOverflow</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CollapseTransition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(Transition, transitionEvents, context.slots)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> CollapseTransition</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { h, Transition } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">elTransition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transitionEvents</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onBeforeEnter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.style.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> elTransition</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">el.dataset) el.dataset </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldPaddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.paddingTop</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldPaddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.paddingBottom</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onEnter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldOverflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.overflow</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (el.scrollHeight </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.scrollHeight </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    el.style.overflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hidden&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onAfterEnter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.style.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.overflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldOverflow</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onBeforeLeave</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">el.dataset) el.dataset </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldPaddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.paddingTop</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldPaddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.paddingBottom</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldOverflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.overflow</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.scrollHeight </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.overflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hidden&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onLeave</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (el.scrollHeight </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      el.style.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> elTransition</span></span>
<span class="line"><span style="color:#24292E;">      el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onAfterLeave</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.style.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.overflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldOverflow</span></span>
<span class="line"><span style="color:#24292E;">    el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#24292E;">    el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CollapseTransition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">props</span><span style="color:#24292E;">, </span><span style="color:#E36209;">context</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(Transition, transitionEvents, context.slots)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> CollapseTransition</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, Transition } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { TransitionProps, SetupContext, RendererElement } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">elTransition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transitionEvents</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onBeforeEnter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RendererElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> elTransition</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">el.dataset) el.dataset </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldPaddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.paddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldPaddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.paddingBottom</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onEnter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RendererElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldOverflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.overflow</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (el.scrollHeight </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.scrollHeight </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.overflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hidden&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onAfterEnter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RendererElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.overflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldOverflow</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onBeforeLeave</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RendererElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">el.dataset) el.dataset </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldPaddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.paddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldPaddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.paddingBottom</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.dataset.oldOverflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.style.overflow</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.scrollHeight </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.overflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hidden&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onLeave</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RendererElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (el.scrollHeight </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> elTransition</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onAfterLeave</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RendererElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.overflow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldOverflow</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.paddingTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.style.paddingBottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CollapseTransition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">props</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TransitionProps</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SetupContext</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(Transition, transitionEvents, context.slots)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> CollapseTransition</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { h, Transition } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { TransitionProps, SetupContext, RendererElement } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">elTransition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transitionEvents</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onBeforeEnter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RendererElement</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.style.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> elTransition</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">el.dataset) el.dataset </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldPaddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.paddingTop</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldPaddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.paddingBottom</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onEnter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RendererElement</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldOverflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.overflow</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (el.scrollHeight </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.scrollHeight </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    el.style.overflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hidden&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onAfterEnter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RendererElement</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.style.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.overflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldOverflow</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onBeforeLeave</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RendererElement</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">el.dataset) el.dataset </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldPaddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.paddingTop</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldPaddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.paddingBottom</span></span>
<span class="line"><span style="color:#24292E;">    el.dataset.oldOverflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.style.overflow</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.scrollHeight </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.overflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hidden&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onLeave</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RendererElement</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (el.scrollHeight </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      el.style.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> elTransition</span></span>
<span class="line"><span style="color:#24292E;">      el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">      el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onAfterLeave</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RendererElement</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.style.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    el.style.overflow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldOverflow</span></span>
<span class="line"><span style="color:#24292E;">    el.style.paddingTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingTop</span></span>
<span class="line"><span style="color:#24292E;">    el.style.paddingBottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.dataset.oldPaddingBottom</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CollapseTransition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">props</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TransitionProps</span><span style="color:#24292E;">, </span><span style="color:#E36209;">context</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SetupContext</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(Transition, transitionEvents, context.slots)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> CollapseTransition</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ol><li>定义一个 js 文件，文件名可任意，如<code>collapse.js</code>，将源码拷入；</li><li>在 Vue 组件中引入源码中导出的<code>CollapseTransition</code>组件并注册，<code>setup</code>语法无需声明注册；</li><li>将要包裹的元素作为子级传入。</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> CollapseTransition </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./collapse&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isCollapse</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">CollapseTransition</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;collapse-wrapper&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-show</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;!isCollapse&quot;</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">CollapseTransition</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.collapse-wrapper</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> CollapseTransition </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./collapse&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isCollapse</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">CollapseTransition</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;collapse-wrapper&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-show</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;!isCollapse&quot;</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">CollapseTransition</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.collapse-wrapper</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,8),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{g as __pageData,A as default};
