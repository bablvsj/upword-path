import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.BweUKDp7.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/webSecurity.md","filePath":"interview/webSecurity.md","lastUpdated":1722851603000}'),p={name:"interview/webSecurity.md"},l=e(`<h2 id="web安全" tabindex="-1">Web安全 <a class="header-anchor" href="#web安全" aria-label="Permalink to &quot;Web安全&quot;">​</a></h2><h3 id="_1-常见的网站漏洞有哪些" tabindex="-1">1.常见的网站漏洞有哪些？ <a class="header-anchor" href="#_1-常见的网站漏洞有哪些" aria-label="Permalink to &quot;1.常见的网站漏洞有哪些？&quot;">​</a></h3><p>有跨站脚本攻击（XSS）、跨站请求伪造（CSRF）、点击劫持、SQL注入、DDOS攻击、DNS劫持</p><h3 id="_2-简要介绍一下xss以及xss如何防御" tabindex="-1">2.简要介绍一下XSS以及XSS如何防御 <a class="header-anchor" href="#_2-简要介绍一下xss以及xss如何防御" aria-label="Permalink to &quot;2.简要介绍一下XSS以及XSS如何防御&quot;">​</a></h3><p>跨站脚本攻击是说攻击者通过注入恶意的脚本，在用户浏览网页的时候进行攻击，比如获取cookie或者其他用户身份信息。 可以分为存储型和反射型，存储型是攻击者输入一些数据并且存储到了数据库中，其他浏览者看到的时候进行攻击，反射型的话 不存储在数据库中，往往表现为将攻击代码放在URL地址的请求参数中。防御的话为cookie设置HttpOnly属性、对用户的输入进行 检查，进行特殊字符串的过滤</p><h3 id="_3-简要介绍一下csrf-跨站请求伪造-以及如何防御" tabindex="-1">3.简要介绍一下CSRF(跨站请求伪造)以及如何防御 <a class="header-anchor" href="#_3-简要介绍一下csrf-跨站请求伪造-以及如何防御" aria-label="Permalink to &quot;3.简要介绍一下CSRF(跨站请求伪造)以及如何防御&quot;">​</a></h3><p>CSRF可以理解为攻击者盗用了用户的身份，以用户的名义发送了恶意请求。比如，用户登录一个网站 之后，立即在另一个Tab页面访问了攻击者用来制造攻击的网站，这个网站要求访问刚刚登陆的网站，并发送了一个 恶意请求，这时候CSRF就产生了。比如这个制造攻击的网站使用一张图片，而这张图片的链接却是可以修改数据库的， 这时候攻击者就以用户的名义操作了这个数据库。防御方式的话：使用验证码、检查HTTP头部referer、使用token。</p><p>参考： <a href="http://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html" target="_blank" rel="noreferrer">浅谈CSRF攻击方式</a><a href="https://book.douban.com/subject/10546925/" target="_blank" rel="noreferrer">白帽子讲WEB安全</a></p><h3 id="_4-简要介绍一下dns劫持" tabindex="-1">4.简要介绍一下DNS劫持？ <a class="header-anchor" href="#_4-简要介绍一下dns劫持" aria-label="Permalink to &quot;4.简要介绍一下DNS劫持？&quot;">​</a></h3><p>DNS劫持的话是指在用户请求过程的域名解析中，分析请求的域名，返回假的IP地址，使用户访问的是假的网址。</p><h3 id="_5-简要介绍一下sql注入" tabindex="-1">5.简要介绍一下SQL注入？ <a class="header-anchor" href="#_5-简要介绍一下sql注入" aria-label="Permalink to &quot;5.简要介绍一下SQL注入？&quot;">​</a></h3><h3 id="_6-简要介绍一下dns污染" tabindex="-1">6.简要介绍一下DNS污染？ <a class="header-anchor" href="#_6-简要介绍一下dns污染" aria-label="Permalink to &quot;6.简要介绍一下DNS污染？&quot;">​</a></h3><h3 id="_7-了解csp吗-介绍一下" tabindex="-1">7.了解CSP吗，介绍一下？ <a class="header-anchor" href="#_7-了解csp吗-介绍一下" aria-label="Permalink to &quot;7.了解CSP吗，介绍一下？&quot;">​</a></h3><h3 id="_102-xss-攻击" tabindex="-1">102. XSS 攻击 <a class="header-anchor" href="#_102-xss-攻击" aria-label="Permalink to &quot;102. XSS 攻击&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>XSS 攻击指的是跨站脚本攻击，是一种代码注入攻击。攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如 cookie 等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>XSS 的本质是因为网站没有对恶意代码进行过滤，与正常的代码混合在一起了，浏览器没有办法分辨哪些脚本是可信的，从而导致了恶意代码的执行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>XSS 一般分为存储型、反射型和 DOM 型。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>存储型指的是恶意代码提交到了网站的数据库中，当用户请求数据的时候，服务器将其拼接为 HTML 后返回给了用户，从而导致了恶意代码的执行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>反射型指的是攻击者构建了特殊的 URL，当服务器接收到请求后，从 URL 中获取数据，拼接到 HTML 后返回，从而导致了恶意代码的执行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DOM 型指的是攻击者构建了特殊的 URL，用户打开网站后，js 脚本从 URL 中获取数据，从而导致了恶意代码的执行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>XSS 攻击的预防可以从两个方面入手，一个是恶意代码提交的时候，一个是浏览器执行恶意代码的时候。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于第一个方面，如果我们对存入数据库的数据都进行的转义处理，但是一个数据可能在多个地方使用，有的地方可能不需要转义，由于我们没有办法判断数据最后的使用场景，所以直接在输入端进行恶意代码的处理，其实是不太可靠的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此我们可以从浏览器的执行来进行预防，一种是使用纯前端的方式，不用服务器端拼接后返回。另一种是对需要插入到 HTML 中的代码做好充分的转义。对于 DOM 型的攻击，主要是前端脚本的不可靠而造成的，我们对于数据获取渲染和字符串拼接的时候应该对可能出现的恶意代码情况进行判断。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>还有一些方式，比如使用 CSP ，CSP 的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行，从而防止恶意代码的注入攻击。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>还可以对一些敏感信息进行保护，比如 cookie 使用 http-only ，使得脚本无法获取。也可以使用验证码，避免脚本伪装成用户执行一些操作。</span></span></code></pre></div><p>详细资料可以参考： <a href="https://juejin.im/post/5bad9140e51d450e935c6d64" target="_blank" rel="noreferrer">《前端安全系列（一）：如何防止 XSS 攻击？》</a></p><h3 id="_103-什么是-csp" tabindex="-1">103. 什么是 CSP？ <a class="header-anchor" href="#_103-什么是-csp" aria-label="Permalink to &quot;103. 什么是 CSP？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CSP 指的是内容安全策略，它的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截由浏览器自己来实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通常有两种方式来开启 CSP，一种是设置 HTTP 首部中的 Content-Security-Policy，一种是设置 meta 标签的方式 &lt;meta http-equiv=&quot;Content-Security-Policy&quot;&gt;</span></span></code></pre></div><p>详细资料可以参考： <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP" target="_blank" rel="noreferrer">《内容安全策略（CSP）》</a><a href="https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc721851882516c33430a2" target="_blank" rel="noreferrer">《前端面试之道》</a></p><h3 id="_104-csrf-攻击" tabindex="-1">104. CSRF 攻击 <a class="header-anchor" href="#_104-csrf-攻击" aria-label="Permalink to &quot;104. CSRF 攻击&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CSRF 攻击指的是跨站请求伪造攻击，攻击者诱导用户进入一个第三方网站，然后该网站向被攻击网站发送跨站请求。如果用户在被</span></span>
<span class="line"><span>攻击网站中保存了登录状态，那么攻击者就可以利用这个登录状态，绕过后台的用户验证，冒充用户向服务器执行一些操作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CSRF 攻击的本质是利用了 cookie 会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>一般的 CSRF 攻击类型有三种：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第一种是 GET 类型的 CSRF 攻击，比如在网站中的一个 img 标签里构建一个请求，当用户打开这个网站的时候就会自动发起提</span></span>
<span class="line"><span>交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第二种是 POST 类型的 CSRF 攻击，比如说构建一个表单，然后隐藏它，当用户进入页面时，自动提交这个表单。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第三种是链接类型的 CSRF 攻击，比如说在 a 标签的 href 属性里构建一个请求，然后诱导用户去点击。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CSRF 可以用下面几种方法来防护：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第一种是同源检测的方法，服务器根据 http 请求头中 origin 或者 referer 信息来判断请求是否为允许访问的站点，从而对请求进行过滤。当 origin 或者 referer 信息都不存在的时候，直接阻止。这种方式的缺点是有些情况下 referer 可以被伪造。还有就是我们这种方法同时把搜索引擎的链接也给屏蔽了，所以一般网站会允许搜索引擎的页面请求，但是相应的页面请求这种请求方式也可能被攻击者给利用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第二种方法是使用 CSRF Token 来进行验证，服务器向用户返回一个随机数 Token ，当网站再次发起请求时，在请求参数中加入服务器端返回的 token ，然后服务器对这个 token 进行验证。这种方法解决了使用 cookie 单一验证方式时，可能会被冒用的问题，但是这种方法存在一个缺点就是，我们需要给网站中的所有请求都添加上这个 token，操作比较繁琐。还有一个问题是一般不会只有一台网站服务器，如果我们的请求经过负载平衡转移到了其他的服务器，但是这个服务器的 session 中没有保留这个 token 的话，就没有办法验证了。这种情况我们可以通过改变 token 的构建方式来解决。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第三种方式使用双重 Cookie 验证的办法，服务器在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串，然后当用户再次向服务器发送请求的时候，从 cookie 中取出这个字符串，添加到 URL 参数中，然后服务器通过对 cookie 中的数据和参数中的数据进行比较，来进行验证。使用这种方式是利用了攻击者只能利用 cookie，但是不能访问获取 cookie 的特点。并且这种方法比 CSRF Token 的方法更加方便，并且不涉及到分布式访问的问题。这种方法的缺点是如果网站存在 XSS 漏洞的，那么这种方式会失效。同时这种方式不能做到子域名的隔离。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第四种方式是使用在设置 cookie 属性的时候设置 Samesite ，限制 cookie 不能作为被第三方使用，从而可以避免被攻击者利用。Samesite 一共有两种模式，一种是严格模式，在严格模式下 cookie 在任何情况下都不可能作为第三方 Cookie 使用，在宽松模式下，cookie 可以被请求是 GET 请求，且会发生页面跳转的请求所使用。</span></span></code></pre></div><p>详细资料可以参考： <a href="https://juejin.im/post/5bc009996fb9a05d0a055192" target="_blank" rel="noreferrer">《前端安全系列之二：如何防止 CSRF 攻击？》</a><a href="https://www.jianshu.com/p/1f9c71850299" target="_blank" rel="noreferrer">《[ HTTP 趣谈] origin, referer 和 host 区别》</a></p><h3 id="_106-点击劫持" tabindex="-1">106. 点击劫持 <a class="header-anchor" href="#_106-点击劫持" aria-label="Permalink to &quot;106. 点击劫持&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>点击劫持是一种视觉欺骗的攻击手段，攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以在 http 相应头中设置 X-FRAME-OPTIONS 来防御用 iframe 嵌套的点击劫持攻击。通过不同的值，可以规定页面在特</span></span>
<span class="line"><span>定的一些情况才能作为 iframe 来使用。</span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.jianshu.com/p/251704d8ff18" target="_blank" rel="noreferrer">《web 安全之--点击劫持攻击与防御技术简介》</a></p><h3 id="_107-sql-注入攻击" tabindex="-1">107. SQL 注入攻击 <a class="header-anchor" href="#_107-sql-注入攻击" aria-label="Permalink to &quot;107. SQL 注入攻击&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SQL 注入攻击指的是攻击者在 HTTP 请求中注入恶意的 SQL 代码，服务器使用参数构建数据库 SQL 命令时，恶意 SQL 被一起构</span></span>
<span class="line"><span>造，破坏原有 SQL 结构，并在数据库中执行，达到编写程序时意料之外结果的攻击行为。</span></span></code></pre></div><p>详细资料可以参考： <a href="https://juejin.im/post/5bd5b820e51d456f72531fa8" target="_blank" rel="noreferrer">《Web 安全漏洞之 SQL 注入》</a><a href="http://blog.720ui.com/2016/security_web/#SQL%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB" target="_blank" rel="noreferrer">《如何防范常见的 Web 攻击》</a></p>`,28),i=[l];function t(r,o,c,h,d,b){return n(),s("div",null,i)}const k=a(p,[["render",t]]);export{u as __pageData,k as default};