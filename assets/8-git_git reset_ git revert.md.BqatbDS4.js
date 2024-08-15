import{_ as i,c as s,o as a,a5 as t}from"./chunks/framework.C9ySr1fn.js";const E=JSON.parse('{"title":"说说你对git reset 和 git revert 的理解？区别？","description":"","frontmatter":{},"headers":[],"relativePath":"8-git/git reset_ git revert.md","filePath":"8-git/git reset_ git revert.md","lastUpdated":1723738320000}'),e={name:"8-git/git reset_ git revert.md"},n=t(`<h1 id="说说你对git-reset-和-git-revert-的理解-区别" tabindex="-1">说说你对git reset 和 git revert 的理解？区别？ <a class="header-anchor" href="#说说你对git-reset-和-git-revert-的理解-区别" aria-label="Permalink to &quot;说说你对git reset 和 git revert 的理解？区别？&quot;">​</a></h1><p><img src="https://static.vue-js.com/046b4440-ff74-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><h3 id="git-reset" tabindex="-1">git reset <a class="header-anchor" href="#git-reset" aria-label="Permalink to &quot;git reset&quot;">​</a></h3><p><code>reset</code>用于回退版本，可以遗弃不再使用的提交</p><p>执行遗弃时，需要根据影响的范围而指定不同的参数，可以指定是否复原索引或工作树内容</p><p><img src="https://static.vue-js.com/ab4d0c00-ff72-11eb-bc6f-3f06e1491664.png" alt=""></p><h3 id="git-revert" tabindex="-1">git revert <a class="header-anchor" href="#git-revert" aria-label="Permalink to &quot;git revert&quot;">​</a></h3><p>在当前提交后面，新增一次提交，抵消掉上一次提交导致的所有变化，不会改变过去的历史，主要是用于安全地取消过去发布的提交</p><p><img src="https://static.vue-js.com/bd12c290-ff72-11eb-991d-334fd31f0201.png" alt=""></p><h2 id="二、如何用" tabindex="-1">二、如何用 <a class="header-anchor" href="#二、如何用" aria-label="Permalink to &quot;二、如何用&quot;">​</a></h2><h3 id="git-reset-1" tabindex="-1">git reset <a class="header-anchor" href="#git-reset-1" aria-label="Permalink to &quot;git reset&quot;">​</a></h3><p>当没有指定<code>ID</code>的时候，默认使用<code>HEAD</code>，如果指定<code>ID</code>，那么就是基于指向<code>ID</code>去变动暂存区或工作区的内容</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 没有指定ID, 暂存区的内容会被当前ID版本号的内容覆盖，工作区不变</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git reset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 指定ID，暂存区的内容会被指定ID版本号的内容覆盖，工作区不变</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git reset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>日志<code>ID</code>可以通过查询，可以<code>git log</code>进行查询，如下：</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commit a7700083ace1204ccdff9f71631fb34c9913f7c5 (HEAD </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> master)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Author: linguanghui </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linguanghui@baidu.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   Tue Aug </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2021</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0800</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    second</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> commit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commit e31118663ce66717edd8a179688a7f3dde5a9393</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Author: linguanghui </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linguanghui@baidu.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   Tue Aug </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">01</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2021</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0800</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    first commit</span></span></code></pre></div><p>常见命令如下：</p><ul><li><p>--mixed（默认）：默认的时候，只有暂存区变化</p></li><li><p>--hard参数：如果使用 --hard 参数，那么工作区也会变化</p></li><li><p>--soft：如果使用 --soft 参数，那么暂存区和工作区都不会变化</p></li></ul><p><img src="https://static.vue-js.com/225b41e0-ff73-11eb-bc6f-3f06e1491664.png" alt=""></p><h3 id="git-revert-1" tabindex="-1">git revert <a class="header-anchor" href="#git-revert-1" aria-label="Permalink to &quot;git revert&quot;">​</a></h3><p>跟<code>git reset</code>用法基本一致，<code>git revert</code> 撤销某次操作，此次操作之前和之后的 <code>commit</code>和<code>history</code>都会保留，并且把这次撤销，作为一次最新的提交，如下：</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git revert </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commit_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>如果撤销前一个版本，可以通过如下命令：</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git revert HEAD</span></span></code></pre></div><p>撤销前前一次，如下：</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git revert HEAD^</span></span></code></pre></div><h2 id="三、区别" tabindex="-1">三、区别 <a class="header-anchor" href="#三、区别" aria-label="Permalink to &quot;三、区别&quot;">​</a></h2><p>撤销（revert）被设计为撤销公开的提交（比如已经push）的安全方式，<code>git reset</code>被设计为重设本地更改</p><p>因为两个命令的目的不同，它们的实现也不一样：重设完全地移除了一堆更改，而撤销保留了原来的更改，用一个新的提交来实现撤销</p><p>两者主要区别如下：</p><ul><li>git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit</li><li>git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容</li><li>在回滚这一操作上看，效果差不多。但是在日后继续 merge 以前的老版本时有区别</li></ul><blockquote><p>git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，之前提交合并的代码仍然存在，导致不能够重新合并</p><p>但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入</p></blockquote><ul><li>如果回退分支的代码以后还需要的情况则使用<code>git revert</code>， 如果分支是提错了没用的并且不想让别人发现这些错误代码，则使用<code>git reset</code></li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6844903542931587086" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903542931587086</a></li><li><a href="https://marklodato.github.io/visual-git-guide/index-zh-cn.html#reset" target="_blank" rel="noreferrer">https://marklodato.github.io/visual-git-guide/index-zh-cn.html#reset</a></li></ul>`,35),l=[n];function h(p,r,d,c,k,g){return a(),s("div",null,l)}const u=i(e,[["render",h]]);export{E as __pageData,u as default};