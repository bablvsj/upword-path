import{_ as s,c as t,o as i,a5 as a}from"./chunks/framework.C9ySr1fn.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front/harmony/code_animation.md","filePath":"front/harmony/code_animation.md","lastUpdated":1723738320000}'),n={name:"front/harmony/code_animation.md"},e=a(`<p><a href="https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101705081897917056" target="_blank" rel="noreferrer">官方文档参考： 合理使用动画</a></p><h3 id="动效场景设计" tabindex="-1">动效场景设计 <a class="header-anchor" href="#动效场景设计" aria-label="Permalink to &quot;动效场景设计&quot;">​</a></h3><p>在设计动效过程中，要清楚地理解动效在系统中承载的作用，动效能体现页面的流畅过渡、对象的明确提示、元素的层级关系、产品的品牌印象等。</p><p><strong>特征动效</strong>：特征动效是指在用户界面中突出某个特定元素的动画效果。通过特征动效，可以吸引用户的注意力，提升用户体验。例如，当用户点击”下载”按钮时，渐变显示出进度条并动态加载。</p><p><strong>转场动效</strong>：<a href="https://developer.huawei.com/consumer/cn/doc/design-guides-V1/transition-motion-0000001158153645-V1" target="_blank" rel="noreferrer">转场动效</a>是指在不同页面或视图之间切换时使用的动画效果。</p><p><strong>手势动效</strong>：<a href="https://developer.huawei.com/consumer/cn/doc/design-guides-V1/gesture-motion-0000001158273625-V1" target="_blank" rel="noreferrer">手势动效</a>是指根据用户的手势操作而产生的动画效果。</p><ul><li>点击：在按下那一刻即响应动效反馈。</li><li>滑动：滑动手势是用户进行滑动操作时产生的相应动画效果</li><li>翻动：翻动手势动效通常用于模拟翻书或翻页的效果</li><li>夹捏：捏合手势是指双/多指合拢或分开的动作，常用于缩放或旋转对象。</li><li>拖拽：拖拽手势是指手指按下同时进行移动的动作</li></ul><p><strong>微动效</strong>：是指在界面中细微的动画效果，用于增加界面的生动感和交互性。微动效可以体现在按钮的点击效果、图标的变化、文本的出现等。</p><p><strong>插画动效</strong>：是指在界面中应用的基于插画的动画效果。</p><h3 id="动画能力选型" tabindex="-1">动画能力选型 <a class="header-anchor" href="#动画能力选型" aria-label="Permalink to &quot;动画能力选型&quot;">​</a></h3><p>HarmonyOS为开发者提供了系统能力、资源调用、三方库三种方式，在选择动画能力时，开发者需要考虑目标和需求以及效率和质量，合理选择能够满足需求的工具、追求高效率和高质量的结果导向，帮助应用实现更好的动画效果。</p><p><strong>系统能力</strong></p><ul><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-animatorproperty-V5" target="_blank" rel="noreferrer">属性动画</a>：通过更改组件的属性值实现渐变过渡效果，例如缩放、旋转、平移等。支持的属性包括width、height、backgroundColor、opacity、scale、rotate、translate等。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-explicit-animation-V5" target="_blank" rel="noreferrer">显式动画</a>：可以通过用户的直接操作或应用程序的特定逻辑来触发，例如按钮点击时的缩放动画、列表项展开时的渐变动画等。HarmonyOS提供了全局animateTo显式动画接口来指定由于闭包代码导致状态变化的插入过渡动效。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/5_4_u8f6c_u573a_u52a8_u753b-V5" target="_blank" rel="noreferrer">转场动画</a>：转场动画可以实现平滑的界面切换效果，例如页面之间的淡入淡出、滑动切换、旋转切换等，增强了界面的连贯性和吸引力。具体使用方法可参考<a href="https://developer.huawei.com/consumer/cn/doc/best-practices-V5/bpta-page-transition-V5" target="_blank" rel="noreferrer">《合理使用页面间转场》</a>。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-motion-path-animation-V5" target="_blank" rel="noreferrer">路径动画</a>：指对象沿着指定路径进行移动的动画效果。通过设置路径可以实现视图沿着预定义的路径进行移动，例如曲线运动、圆周运动等，为用户呈现更加生动的交互效果。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-particle-animation-V5" target="_blank" rel="noreferrer">粒子动画</a>：通过大量小颗粒的运动来形成整体动画效果。通过对粒子在颜色、透明度、大小、速度、加速度、自旋角度等维度变化做动画，来营造一种氛围感。</li></ul><p><strong>资源调用</strong></p><ul><li>GIF动画：GIF动画可以在特定位置循环播放，为应用界面增添生动的视觉效果。在开发中，可以使用<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-basic-components-image-V5" target="_blank" rel="noreferrer">Image组件</a>来实现GIF动画的播放。通过在特定位置放置Image组件，并加载GIF格式的图像，开发者可以轻松实现动画效果，具体实现可以参考后文”<strong>加载GIF实现微动效</strong>”。</li><li>帧动画：通过逐帧播放一系列图片来实现动画效果，在开发中可以使用<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-basic-components-imageanimator-V5" target="_blank" rel="noreferrer">ImageAnimator组件</a>来实现帧动画的播放。开发者可以配置需要播放的图片列表，以及每张图片的播放时长，从而实现精细的动画效果。</li></ul><p><strong>三方库</strong></p><ul><li>Lottie：解析Adobe After Effects软件通过Bodymovin插件导出的json格式的动画，并在移动设备上进行本地渲染。Lottie动画可以在各种屏幕尺寸和分辨率上呈现，并且支持动画的交互性，通过添加触摸事件或其他用户交互操作，使动画更加生动和具有响应性。</li><li>SVG：通过将SVG图片解析并渲染到页面上并对SVG图片样式动态改变实现动画。OHOS-SVG不仅能够提供高质量的图形呈现，而且还能够实现图形样式的实时更新，为用户带来更加丰富的视觉体验。</li></ul><p><strong>表1</strong> 各种动画能力的特点</p><table tabindex="0"><thead><tr><th style="text-align:left;">动画能力</th><th style="text-align:left;">特点</th></tr></thead><tbody><tr><td style="text-align:left;">系统能力</td><td style="text-align:left;">可以直接调用，性能优秀，但太复杂的动画不便于实现</td></tr><tr><td style="text-align:left;">GIF</td><td style="text-align:left;">可设计、直接调用组件实现，但文件占用空间大，掉帧严重、会出现失真、模糊、锯齿等现象</td></tr><tr><td style="text-align:left;">帧动画</td><td style="text-align:left;">兼容性高、直接调用组件实现，但需要大量图片，占据大量内存</td></tr><tr><td style="text-align:left;">Lottie</td><td style="text-align:left;">跨平台、可设计，但性能难以提升、帧率较低</td></tr><tr><td style="text-align:left;">SVG</td><td style="text-align:left;">可代码编辑，文件较小、无损伸缩，但实现、维护成本高，并且复杂度高会减慢渲染速度</td></tr></tbody></table><h4 id="属性动画" tabindex="-1">属性动画 <a class="header-anchor" href="#属性动画" aria-label="Permalink to &quot;属性动画&quot;">​</a></h4><p>属性动画是通过设置组件的 animation 属性来给组件添加动画，当组件的width、height、Opacity、backgroundColor、scale、rotate、translate 等属性变更时，可以实现渐变过渡效果。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Text(&quot;^_^&quot;)</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	.positon(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	})</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	.rotate(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		angle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		centerX:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		centerY:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50%&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	})</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	.animation(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		curve: Curve.EaseInOut</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	})</span></span></code></pre></div><p>animation需要放在实现效果样式后</p><table tabindex="0"><thead><tr><th>名称</th><th>参数类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>duration</td><td>number</td><td>否</td><td>设置动画时长</td></tr><tr><td>tempo</td><td>number</td><td>否</td><td>动画播放速度。数值越大，速度越快。</td></tr><tr><td>curve</td><td>string | Curve</td><td>否</td><td>设置动画曲线。默认值：Curve.EaseInOut，平滑开始和结束</td></tr><tr><td>delay</td><td>number</td><td>否</td><td>设置动画延迟执行的时长。</td></tr><tr><td>iterations</td><td>number</td><td>否</td><td>播放次数，默认1，设置为-1表示无限次</td></tr><tr><td>palyMode</td><td>PlayMode</td><td>否</td><td>设置动画播放模式，默认播放完成后从头开始播放。<br>默认值： PlayMode.Normal</td></tr><tr><td>onFinish</td><td>()=&gt;void</td><td>否</td><td>状态回调，动画播放完成时触发。</td></tr></tbody></table><h4 id="显式动画" tabindex="-1">显式动画 <a class="header-anchor" href="#显式动画" aria-label="Permalink to &quot;显式动画&quot;">​</a></h4><p>显式动画是通过全局 animateTo 函数来修改组件属性，实现属性变化时的渐变过渡效果。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 显式调用 animateTo 函数触发动画</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">animateTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	()=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 实际代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;触发动画&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">backgroundColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#cef&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		animateTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		duration:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">			// 要实现的动画效果</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.fishX </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;app.media.fish&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	})</span></span></code></pre></div><h4 id="组件转场动画" tabindex="-1">组件转场动画 <a class="header-anchor" href="#组件转场动画" aria-label="Permalink to &quot;组件转场动画&quot;">​</a></h4><p>组件转场动画是在组件插入或移除时的过渡动画，通过组件的transition属性来配置。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^_^&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		type：TransitionType.Insert,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ALL、Delete、Insert</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		opcity:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		rotate:{angle:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">360</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		scale:{x:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,y:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	})</span></span></code></pre></div><table tabindex="0"><thead><tr><th>参数名称</th><th>参数类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>type</td><td>TransitionType</td><td>否</td><td>类型，默认包括组件新增和删除，默认是ALL</td></tr><tr><td>opacity</td><td>number</td><td>否</td><td>不透明度，为插入时起点或删除时终点的值。<br>默认值为1，取值范围为 [0,1]</td></tr><tr><td>translate</td><td>{ <br> x?:number|string<br> y?:number|string<br> z?:number|string<br>}</td><td>否</td><td>平移效果，为插入时起点或删除时终点的值。<br>x,y,z 分别为横向、纵向、竖向的平移距离</td></tr><tr><td>scale</td><td>{ <br> x?:number|string<br> y?:number|string<br> z?:number|string<br>centerX?:number|string<br>centerY?:number|string<br>}</td><td>否</td><td>缩放效果，为插入时起点或删除时终点的值。<br>x,y,z 分别为横向、纵向、竖向的放大倍数或缩小比例<br>centerX、centerY是缩放中心点的位置。</td></tr><tr><td>rotate</td><td>{ <br> x?:number|string<br> y?:number|string<br> z?:number|string<br> angle:number|string<br>centerX?:number|string<br>centerY?:number|string<br>}</td><td>否</td><td>旋转效果，其他与scale类似</td></tr></tbody></table><h3 id="转场场景设计" tabindex="-1">转场场景设计 <a class="header-anchor" href="#转场场景设计" aria-label="Permalink to &quot;转场场景设计&quot;">​</a></h3><h4 id="转场动效" tabindex="-1">转场动效 <a class="header-anchor" href="#转场动效" aria-label="Permalink to &quot;转场动效&quot;">​</a></h4><p>HarmonyOS系统为开发者提供了丰富的转场动效库，使开发者能够轻松实现各种转场动画效果。以下是一些在HarmonyOS系统中提供的转场动效：</p><ul><li><strong>左右位移遮罩动效</strong>：这种效果在转场过程中，页面元素会以左右方向进行位移，并且使用遮罩效果来过渡。这种转场效果常用于切换不同页面或者展示不同内容的情况，能够给用户带来明显的页面变化感。</li><li><strong>左右间隔位移动效</strong>：这种效果在转场过程中，页面元素会以左右方向进行位移，但是与左右位移遮罩转场不同的是，元素之间会有一定的间隔。这种转场效果常用于展示多个相关页面之间的切换，能够给用户带来清晰的页面切换感。</li><li><strong>一镜到底动效</strong>：这种效果在转场过程中，整个页面会以一种平滑的方式从一个场景过渡到另一个场景，仿佛是通过一镜到底的方式切换。这种转场效果常用于展示不同页面之间的关联性，能够给用户带来流畅的视觉体验。</li><li><strong>淡入淡出动效</strong>：这种效果在转场过程中，页面元素会以逐渐淡入或淡出的方式进行过渡。这种转场效果常用于切换不同页面或者展示不同内容的情况，能够给用户带来柔和的视觉过渡效果。</li><li><strong>缩放动效</strong>：这种效果在转场过程中，页面元素会以放大或缩小的方式进行过渡。这种转场效果常用于突出某个元素或者展示不同页面之间的层次感，能够给用户带来视觉上的冲击和焦点转移。</li></ul><h4 id="转场场景" tabindex="-1">转场场景 <a class="header-anchor" href="#转场场景" aria-label="Permalink to &quot;转场场景&quot;">​</a></h4><p><strong>层级转场</strong>：是指在用户界面中，从一个层级结构的界面状态转换到另一个层级结构的界面状态的过程，它通常用于在应用中进行页面间的导航和视图层级的变化。层级转场的场景可以划分为卡片、图标展开和列表展开：</p><ul><li>列表展开：通常是完整的页面替换，开发者可以使用左右位移遮罩动效完成这类变化。</li><li>卡片/图表展开：单体独立卡片展开推荐使用一镜到底动效，相对复杂的组合卡片样式则需要由开发者以更为符合用户视觉流畅感为标准，根据实际情况选择左右位移遮罩动效或一镜到底动效。</li></ul><p>对于层级转场，推荐使用系统转场，页面转场采用左右位移的运动方式，不应单帧直接切换或上下位移切换，曲线优先使用弹簧曲线。</p><p><strong>搜索转场</strong></p><p>搜索转场是指在用户执行搜索操作，如在搜索栏中输入关键词并按下搜索按钮、或者直接触摸搜索图标时，应用改变应用页面以显示搜索结果的过程。它包含了固定搜索区域和非固定搜索区域两种情况。</p><p>对于搜索转场，推荐使用共享元素转场，搜索框作为持续存在的元素串联前后两个界面，其他元素可采用淡入淡出或者其他过渡方式，不应单帧切换或非共享元素的方式转场。</p><p><strong>新建转场</strong></p><p>新建转场是指用户创建新内容或实体时，应用页面发生的过渡效果，它可以让用户感知到新的事物的添加或创建，并提供一种连贯和引人注目的视觉切换。</p><p>对于新建转场，推荐使用系统转场，页面转场采用左右位移的运动方式，不应单帧直接切换或上下位移切换，曲线优先使用弹簧曲线。</p><p><strong>编辑转场</strong></p><p>对于编辑转场，推荐使用系统转场，页面转场采用淡入淡出的过渡方式，不应单帧直接切换或位移切换。</p><p><strong>通用转场</strong></p><p>通用转场是一种广泛适用于不同情境和应用类型的页面过渡效果，目的是提供一种通用的、可重复使用的方式，以改善用户页面之间的切换，增强用户体验。其关键点在于要适用各种应用情境，包括不同类型的应用（例如社交媒体、电子商务、新闻等）和不同操作（例如导航、搜索、编辑等）。</p><p>这就需要一种通用的、不需要复杂操作的动效来完成跳转任务，而缩放能够满足绝大多数用户的需求和视觉体验感受</p><p><strong>跨应用转场</strong></p><p>跨应用转场是指用户从一个应用程序切换到另一个应用程序，用户能够无缝地从一个应用切换到另一个应用，而不会感到中断或不适。推荐开发者使用专为此设计的左右间隔位移动效。</p><h4 id="场景解构" tabindex="-1">场景解构 <a class="header-anchor" href="#场景解构" aria-label="Permalink to &quot;场景解构&quot;">​</a></h4><p>转场是由交互行为引起的界面变化，分析界面元素在过程中的意义，定义其在转场中所在的类型，并将它们进行分类，元素所属的类别会影响它们使用怎样的转场方式，同时也将决定用什么类型的曲线和时长。</p><ul><li><strong>进场元素</strong>：转场中新出现的元素，一般是结果界面上的构成元素。</li><li><strong>出场元素</strong>：转场中消失的元素，一般是上一界面中的构成元素。</li><li><strong>持续元素</strong>：转场中持续存在的元素，可以是元素在布局上的变化，也可以是某种连续性的动画效果，整个过程无中断。</li><li><strong>静止元素</strong>：转场中无任何变化的元素。</li></ul><h5 id="一镜到底" tabindex="-1">一镜到底 <a class="header-anchor" href="#一镜到底" aria-label="Permalink to &quot;一镜到底&quot;">​</a></h5><p>一镜到底是通过共享元素、容器和动势来进行转场过渡的一种编排方式，有助于提升用户操作任务的效率，增强视觉的流畅感，是转场设计中重点推荐的技法。</p><ul><li>共享元素</li><li>共享容器</li><li>共享动势</li></ul><h5 id="淡入淡出" tabindex="-1">淡入淡出 <a class="header-anchor" href="#淡入淡出" aria-label="Permalink to &quot;淡入淡出&quot;">​</a></h5><p>淡入淡出是通过透明度变化来实现过渡转场，适用于无中间属性的组件或元素之间进行过渡变化，可参考以下手法：</p><p><strong>单向淡入淡出</strong>：在前后层叠的场景中，只有前景元素进行淡入或淡出动作，下方元素无变化。</p><p><strong>交叉淡入淡出</strong>：存在出场元素与进场元素的场景下，根据元素图形特点进行淡入淡出效果处理。</p><h5 id="多设备编排设计" tabindex="-1">多设备编排设计 <a class="header-anchor" href="#多设备编排设计" aria-label="Permalink to &quot;多设备编排设计&quot;">​</a></h5><p>原则：符合人因，避免动效引起的不适感。</p><p>同一类型的动效下，编排方式不一样。例如手机和智慧屏上的差异，手机上使用图标到界面共享容器的方式；智慧屏上采用共享动势的方式来避免过大的位移路径给用户带来不适感。</p>`,65),l=[e];function r(h,p,d,k,o,E){return i(),t("div",null,l)}const y=s(n,[["render",r]]);export{c as __pageData,y as default};