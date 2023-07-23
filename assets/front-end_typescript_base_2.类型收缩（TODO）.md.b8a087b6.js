import{_ as s,o as n,c as a,U as l}from"./chunks/framework.76b79cb5.js";const A=JSON.parse('{"title":"类型收缩","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/typescript/base/2.类型收缩（TODO）.md","filePath":"front-end/typescript/base/2.类型收缩（TODO）.md","lastUpdated":1690100584000}'),o={name:"front-end/typescript/base/2.类型收缩（TODO）.md"},p=l(`<h1 id="类型收缩" tabindex="-1">类型收缩 <a class="header-anchor" href="#类型收缩" aria-label="Permalink to &quot;类型收缩&quot;">​</a></h1><p>在 TS 中有多种方式可以做类型收缩。</p><h2 id="typeof-类型守卫" tabindex="-1">typeof 类型守卫 <a class="header-anchor" href="#typeof-类型守卫" aria-label="Permalink to &quot;typeof 类型守卫&quot;">​</a></h2><p>JS 中的<code>typeof</code>操作可以给我们一些非常基础的类型信息：</p><ul><li>&quot;string&quot;</li><li>&quot;number&quot;</li><li>&quot;bigint&quot;</li><li>&quot;boolean&quot;</li><li>&quot;symbol&quot;</li><li>&quot;undefined&quot;</li><li>&quot;object&quot;</li><li>&quot;function&quot;</li></ul><p>TS 也知道<code>typeof</code>在 JS 中的一些&#39;怪癖&#39;：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在typeof中，数组和null同样被认为是object类型</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printAll</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">strs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strs</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#FFCB6B;">Error</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">is</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">possibly</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">null</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">strs</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// do nothing</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,7),t=[p];function e(c,r,y,F,D,i){return n(),a("div",null,t)}const u=s(o,[["render",e]]);export{A as __pageData,u as default};
