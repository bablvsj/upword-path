import{_ as a,c as e,o as r,a5 as o}from"./chunks/framework.6Vkfk6hO.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front/harmony/1-base.md","filePath":"front/harmony/1-base.md","lastUpdated":1721987949000}'),l={name:"front/harmony/1-base.md"},t=o('<h3 id="_1-基础知识" tabindex="-1">1. 基础知识 <a class="header-anchor" href="#_1-基础知识" aria-label="Permalink to &quot;1. 基础知识&quot;">​</a></h3><h4 id="应用开发的机遇、挑战和趋势" tabindex="-1">应用开发的机遇、挑战和趋势 <a class="header-anchor" href="#应用开发的机遇、挑战和趋势" aria-label="Permalink to &quot;应用开发的机遇、挑战和趋势&quot;">​</a></h4><p>更多的智能设备没有带来更好的全场景体验</p><ul><li>连接步骤复杂</li><li>数据难以互通</li><li>生态无法共享</li><li>能力难以协同</li></ul><p>移动应用开发中遇到的主要挑战</p><ul><li>针对不同设备的不同操作系统，重复开发，维护多个版本</li><li>多种语言栈，对人员技能要求高</li><li>多种开发框架，不同的范式编程</li><li>命令式编程，关注细节，变更频繁，维护成本高</li></ul><p>为了更好的抓住机遇，应对万物互联所带来的一系列挑战，新的应用生态应该具备以下特征</p><ul><li><strong>单一设备延伸到多设备</strong>：应用一次开发就能在多个设备上运行，软件实体能够从单一设备转移到其他设备上，且多个设备间能够协同运行，给消费者提供全新的分布式体验。</li><li><strong>厚重应用模式到轻量化服务模式</strong>：提供轻量化的服务，最小化资源消耗，一步直达，快速完成消费者特定场景的任务。</li><li><strong>集中化分发到AI加持下的智能分发</strong>：为消费者提供智慧场景服务，实现“服务找人”。</li><li><strong>纯软件到软硬芯协同的AI能力</strong>：提供软硬芯协同优化的原生AI能力，全面满足应用高性能诉求。</li></ul><h4 id="harmonyos核心技术理念" tabindex="-1">HarmonyOS核心技术理念 <a class="header-anchor" href="#harmonyos核心技术理念" aria-label="Permalink to &quot;HarmonyOS核心技术理念&quot;">​</a></h4><p>HarmonyOS是<strong>新一代的智能终端操作系统</strong>，为不同设备的智能化、互联与协同提供了统一语言，为用户带来简捷，流畅，连续，安全可靠的全场景交互体验。</p><h5 id="一次开发多次部署" tabindex="-1">一次开发多次部署 <a class="header-anchor" href="#一次开发多次部署" aria-label="Permalink to &quot;一次开发多次部署&quot;">​</a></h5><h5 id="可分可合-自由流转" tabindex="-1">可分可合 自由流转 <a class="header-anchor" href="#可分可合-自由流转" aria-label="Permalink to &quot;可分可合 自由流转&quot;">​</a></h5><p>元服务是支撑可分可合、自由流转的轻量化程序实体</p><p>HarmonyOS操作系统提供了自由流转的能力，使得开发者可以方便地开发出跨越多个设备的应用，用户也能够方便地使用这些功能。<strong>自由流转可分为跨端迁移和多端协同两种情况</strong>。</p><h5 id="统一生态-原生智能" tabindex="-1">统一生态 原生智能 <a class="header-anchor" href="#统一生态-原生智能" aria-label="Permalink to &quot;统一生态 原生智能&quot;">​</a></h5><p>HarmonyOs支持业界主流跨平台开发框架，通过多层次的开放能力提供统一接入标准，实现三方框架快速接入。</p><p>React Native / Flutter / WEEX / Taro / uni-app ...</p><p>HarmonyOS内置强大的AI能力，面向HarmonyOS生态应用的开发，通过不同层次的 AI能力开放，满足开发者的不同开发场景下的诉求，降低应用的开发门槛，帮助开发者快速实现应用智能化。</p><p><strong>MachineLearning Kit</strong> ：AI控件（使系统控件融合文字识别等AI能力）、场景化能力 （包括通用卡证识别、实时语音识别等）</p><p><strong>Core AI API</strong> ：提供了图像语义、语言语音解析、OCR文字识别的能力、人脸...</p><p><strong>Core DeepLearning API</strong>：提供了高性能、低功耗的端侧推理和端侧学习环境</p><p><strong>意图框架</strong>：提供了HarmonyOS系统级的意图标准体系，通过多维系统感知、大模型等能力，构建全局意图范式。实现对用户显性与潜在意图的理解，并及时、准确的将用户需求传递给生态伙伴。匹配合时宜 的服务，为用户提供多模态、场景化进阶场景体验。</p><h4 id="高效开发与测试" tabindex="-1">高效开发与测试 <a class="header-anchor" href="#高效开发与测试" aria-label="Permalink to &quot;高效开发与测试&quot;">​</a></h4><h5 id="arkui框架" tabindex="-1">ArkUI框架 <a class="header-anchor" href="#arkui框架" aria-label="Permalink to &quot;ArkUI框架&quot;">​</a></h5><p>方舟开发框架为HarmonyOS应用的UI开发，提供了完整的基础设施，包括简洁的UI语法、丰富的UI功能，如组件、布局、动画、交互事件等，以及实时界面预览工具等。可以支持开发者进行可视化界面开发。</p><p>ArkUI框架提供给开发者两种开发方式：<strong>基于ArkTS的声明式开发范式</strong>和<strong>基于JavaScript扩展的类web开发范式</strong>。</p><p>声明式开发范式更加简洁和高效。</p><h5 id="集成开发环境" tabindex="-1">集成开发环境 <a class="header-anchor" href="#集成开发环境" aria-label="Permalink to &quot;集成开发环境&quot;">​</a></h5><p>华为DevEce Studio是面向HarmonyOS生态的集成开发环境。提供了一站式的HarmonyOS生态应用、元服务开发能力。功能包括<strong>基础功能</strong>（工程管理、代码编辑、界面预览、编译构建、代码调试）、<strong>集成工具</strong>（性能调优、设备模拟、命令行工具）和<strong>端云一体化开发</strong>。</p><h5 id="测试工具" tabindex="-1">测试工具 <a class="header-anchor" href="#测试工具" aria-label="Permalink to &quot;测试工具&quot;">​</a></h5><p>测试套件包括测试标准和测试工具两部分。</p><p>测试标准覆盖HarmonyOS生态应用性能、功耗、稳定性、兼容性、UX、安全、分布式、游戏等测试规范。帮助开发者解决测什么的问题。</p><p>测试工具平台提供了HarmonyOS生态应用开发、调试、单元测试、集成测试、上架测试等各开发阶段所需的测试工具集。支持多种设备，帮助开发者全面高效测试。</p><h4 id="上架与分发" tabindex="-1">上架与分发 <a class="header-anchor" href="#上架与分发" aria-label="Permalink to &quot;上架与分发&quot;">​</a></h4><h5 id="huawei-appgallery-connect" tabindex="-1">HUAWEI APPGallery Connect <a class="header-anchor" href="#huawei-appgallery-connect" aria-label="Permalink to &quot;HUAWEI APPGallery Connect&quot;">​</a></h5><p>HUAWEI APPGallery Connect 为开发者提供全球化、全场景、一站式应用与服务分发能力，并未开发者提供质量、安全、工程管理等领域的能力。大幅降低应用开发与运维难度，提升版本质量，帮助开发者获得用户并实现收入的规模增长</p><h5 id="快速上架" tabindex="-1">快速上架 <a class="header-anchor" href="#快速上架" aria-label="Permalink to &quot;快速上架&quot;">​</a></h5><p>即HUAWEI APPGallery Connect，作为开发者统一提交HarmonyOS生态应用与元服务的入口，包括集成证书管理、项目管理、版本管理等功能，支持HarmonyOS生态应用与元服务的快速上架与分发。</p><h5 id="上架审核" tabindex="-1">上架审核 <a class="header-anchor" href="#上架审核" aria-label="Permalink to &quot;上架审核&quot;">​</a></h5><p>是指为了给用户提供更安全且出色的体验，HUAWEI APPGallery Connect 对开发者提交的HarmonyOS生态应用与元服务进行审核与测试。</p><h5 id="应用与服务分发" tabindex="-1">应用与服务分发 <a class="header-anchor" href="#应用与服务分发" aria-label="Permalink to &quot;应用与服务分发&quot;">​</a></h5><p>是指HUAWEI APPGallery Connect 提供了灵活的分发能力，支持按阶段、维度、场景等多种形式高效、精准的分发到用户设备上。</p><p>HarmonyOS作为万物互联时代泛终端服务的载体，面向跨设备多终端环境实现服务随身的跨终端无缝体验。云服务与AI算法深度配合实现多入口、场景化分化。</p><h3 id="_2-赋能套件和学习资源介绍" tabindex="-1">2. 赋能套件和学习资源介绍 <a class="header-anchor" href="#_2-赋能套件和学习资源介绍" aria-label="Permalink to &quot;2. 赋能套件和学习资源介绍&quot;">​</a></h3><h4 id="感知" tabindex="-1">感知 <a class="header-anchor" href="#感知" aria-label="Permalink to &quot;感知&quot;">​</a></h4><h5 id="白皮书" tabindex="-1">白皮书 <a class="header-anchor" href="#白皮书" aria-label="Permalink to &quot;白皮书&quot;">​</a></h5><p><strong>多端开发环境</strong></p><p>HUAWEI DevEco Studio 是面向全场景多设备提供的一站式开发平台，<strong>支持多端双向预览、分布式调优、分布式调试、多设备模拟、低代码可视化开发</strong>等能力，帮助开发者降低成本、提升效率、提高质量。</p><p><strong>多端开发能力</strong></p><p><strong>应用如需在多个设备上运行，需要适配不同的屏幕尺寸和分辨率、不同的交互方式（如触摸和键盘等）、不同的硬件能力（如内存差异和器件差异等），开发成本较高</strong>。因此，多端开发能力的核心目标是降低多设备应用的开发成本。为了实现该目标，鸿蒙系统提供了以下几个核心能力，支持多端 UI 适配，交互事件归一，设备能力抽象，帮助开发者降低开发与维护成本，提高代码复用度。</p><p><strong>多端分发机制</strong></p><p><strong>如果需要开发多设备上运行的应用，一般会针对不同类型的设备多次开发并独立上架</strong>。开发和维护的成本大，为了解决这个问题，鸿蒙系统提供了“一次开发，多端部署”的能力，开发者开发多设备应用，只需要一套工程，一次打包出多个 HAP，统一上架，即可根据设 备类型按需进行分发。</p><p>核心理念 关键能力 创新体验</p><h4 id="学习与评估" tabindex="-1">学习与评估 <a class="header-anchor" href="#学习与评估" aria-label="Permalink to &quot;学习与评估&quot;">​</a></h4><ul><li><p>HarmonyOs第一课 (初、中、高+主题课) 多维资源融合的教学方式</p></li><li><p>Codelabs (含快速入门教学案例) 教学目的，边学边练、所见即所得</p></li></ul><h4 id="开发上架" tabindex="-1">开发上架 <a class="header-anchor" href="#开发上架" aria-label="Permalink to &quot;开发上架&quot;">​</a></h4><ul><li>UX设计指南 UX元素定义以及设计规范</li><li>技术文章/最佳实践 技术原理深度解析，开发最佳实践</li></ul><h5 id="codelabs" tabindex="-1">CodeLabs <a class="header-anchor" href="#codelabs" aria-label="Permalink to &quot;CodeLabs&quot;">​</a></h5><p><a href="https://developer.huawei.com/consumer/cn/codelabsPortal/serviceTypes/43" target="_blank" rel="noreferrer">CodeLabs</a>是一种全新发布的场景化案例，它们的数量丰富，分层分级，并且结合了最佳实践，为开发者提供了丰富的学习资源和实践经验。</p><h5 id="开发指南" tabindex="-1">开发指南 <a class="header-anchor" href="#开发指南" aria-label="Permalink to &quot;开发指南&quot;">​</a></h5><p><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-dev-guide-V5?catalogVersion=V5" target="_blank" rel="noreferrer">开发指南</a>的内容包括相关概念的定义、原理机制的解释、详细的开发步骤以及调试验证的指导等，帮助开发者全面掌握HarmonyOS UI的能力和开发流程。</p><h5 id="api参考" tabindex="-1">API参考 <a class="header-anchor" href="#api参考" aria-label="Permalink to &quot;API参考&quot;">​</a></h5><p><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/syscap-V5?catalogVersion=V5" target="_blank" rel="noreferrer">API参考</a>为开发者提供了清晰的功能描述、详细的参数说明、完善的权限信息以及规范的示例代码，能够帮助开发者更快地理解和使用HarmonyOS的API。</p><h5 id="sample" tabindex="-1">Sample <a class="header-anchor" href="#sample" aria-label="Permalink to &quot;Sample&quot;">​</a></h5><p><a href="https://developer.huawei.com/consumer/cn/samples/" target="_blank" rel="noreferrer">Sample</a>对于开发者具有实际使用价值，帮助开发者理解技术原理，开发者可重用代码片段，快速搭建出原型验证，有助于节省开发时间。</p><h4 id="支持" tabindex="-1">支持 <a class="header-anchor" href="#支持" aria-label="Permalink to &quot;支持&quot;">​</a></h4><p>知识问答 &amp; FAQ全程支持，为开发者进行答疑解惑</p><p>在HarmonyOS应用开发的全程中，我们还提供了FAQ作为支持，提高开发效率和开发质量。我们为开发者获取FAQ提供了以下途径：智能客服、FAQ、IDE</p><h3 id="_3-应用与应用程序包" tabindex="-1">3. 应用与应用程序包 <a class="header-anchor" href="#_3-应用与应用程序包" aria-label="Permalink to &quot;3. 应用与应用程序包&quot;">​</a></h3><p>用户应用程序泛指运行在设备的操作系统之上，为用户提供特定服务的程序，简称“应用”。一个应用所对应的软件包文件，称为“应用程序包”。</p><p>当前系统提供了应用程序包开发、安装、查询、更新、卸载的管理机制，便于开发者开发和管理应用。同时，系统还屏蔽了不同的芯片平台的差异（包括x86/ARM，32位/64位等），应用程序包在不同的芯片平台都能够安装运行，这使得开发者可以聚焦于应用的功能实现。</p><h4 id="应用的多module设计机制" tabindex="-1">应用的多Module设计机制 <a class="header-anchor" href="#应用的多module设计机制" aria-label="Permalink to &quot;应用的多Module设计机制&quot;">​</a></h4><ul><li><p><strong>支持模块化开发：</strong> 一个应用通常会包含多种功能，将不同的功能特性按模块来划分和管理是一种良好的设计方式。在开发过程中，我们可以将每个功能模块作为一个独立的Module进行开发，Module中可以包含源代码、资源文件、第三方库、配置文件等，每一个Module可以独立编译，实现特定的功能。这种模块化、松耦合的应用管理方式有助于应用的开发、维护与扩展。</p></li><li><p><strong>支持多设备适配：</strong> 一个应用往往需要适配多种设备类型，在采用多Module设计的应用中，每个Module都会标注所支持的设备类型。有些Module支持全部类型的设备，有些Module只支持某一种或几种型的设备（比如平板），那么在应用市场分发应用包时，也能够根据设备类型做精准的筛选和匹配，从而将不同的包合理的组合和部署到对应的设备上。</p></li></ul><h4 id="module类型" tabindex="-1">Module类型 <a class="header-anchor" href="#module类型" aria-label="Permalink to &quot;Module类型&quot;">​</a></h4><p>Module按照使用场景可以分为两种类型：</p><ul><li><p><strong>Ability类型的Module：</strong> 用于实现应用的功能和特性。每一个Ability类型的Module编译后，会生成一个以.hap为后缀的文件，我们称其为HAP（Harmony Ability Package）包。HAP包可以独立安装和运行，是应用安装的基本单位，一个应用中可以包含一个或多个HAP包，具体包含如下两种类型。</p><ul><li>entry类型的Module：应用的主模块，包含应用的入口界面、入口图标和主功能特性，编译后生成entry类型的HAP。每一个应用分发到同一类型的设备上的应用程序包，只能包含唯一一个entry类型的HAP。</li><li>feature类型的Module：应用的动态特性模块，编译后生成feature类型的HAP。一个应用中可以包含一个或多个feature类型的HAP，也可以不包含。</li></ul></li><li><p><strong>Library类型的Module：</strong> 用于实现代码和资源的共享。同一个Library类型的Module可以被其他的Module多次引用，合理地使用该类型的Module，能够降低开发和维护成本。Library类型的Module分为Static和Shared两种类型，编译后会生成共享包。</p><ul><li>Static Library：静态共享库。编译后会生成一个以.har为后缀的文件，即静态共享包HAR（Harmony Archive）。</li><li>Shared Library：动态共享库。编译后会生成一个以.hsp为后缀的文件，即动态共享包HSP（Harmony Shared Package）。</li></ul></li></ul>',76),n=[t];function i(h,s,d,p,u,c){return r(),e("div",null,n)}const g=a(l,[["render",i]]);export{b as __pageData,g as default};
