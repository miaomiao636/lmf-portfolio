// 创意艺术风 - 互动效果

document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        zh: {
            pageTitle: '淼淼 — 作品集',
            pageDescription: '淼淼的个人作品集：喜欢研究和使用 AI，关注真实需求，持续尝试把想法做成能运行、能使用的小产品。',
            languageSwitch: '语言选择',
            name: '淼淼',
            navAbout: '关于',
            navWork: '作品',
            navContact: '联系',
            heroRole: 'AI个人项目实践者',
            heroDesc1: '喜欢研究和使用 AI，关注真实需求，习惯用合适的技术和 AI 工具解决具体问题。',
            heroDesc2: '持续尝试把想法做成能运行、能使用的小产品。',
            viewWork: '看看作品',
            aboutTag: '关于我',
            aboutTitlePrefix: '把想法',
            aboutTitleHighlight: '做完',
            aboutTitleSuffix: '的人',
            aboutBadge: 'AI 工具与项目实践',
            aboutIntro: '嗨！我是淼淼，一名 AI个人项目实践者。',
            aboutBody: '喜欢研究和使用 AI，关注真实需求，习惯用合适的技术和 AI 工具解决具体问题。持续尝试把想法做成能运行、能使用的小产品。',
            independentProjects: '独立项目',
            ongoing: '持续',
            projectPractice: '项目实践',
            techStacks: '技术栈',
            aiTools: 'AI 工具',
            fullStackDevelopment: '全栈开发',
            workTag: '精选作品',
            workTitlePrefix: '四个从真实需求出发、',
            workTitleHighlight: '持续打磨',
            workTitleSuffix: '的项目',
            workLead: '从安卓工具、开源插件，到数据分析与自动化系统。每个项目都对应一个具体问题，也保留了可以继续迭代的空间。',
            navigatorAria: 'DSH Message Navigator 界面示意',
            messages: '消息',
            navigatorCaption: '长对话 · 快速定位',
            openSourcePlugin: '开源插件',
            productivityTool: '效率工具',
            navigatorDesc: '为 DeepSeek Harness Web UI 增加 Codex 风格的会话消息导航。长对话不用反复滚动，点击目录即可回到指定消息。',
            navigatorPoint1: '自动生成会话消息目录',
            navigatorPoint2: '支持一键定位与长对话浏览',
            navigatorPoint3: '以插件形式接入现有 Web UI',
            viewSource: '查看源码',
            pureskipAria: 'PureSkip 安卓应用界面示意',
            serviceRunning: '服务运行中',
            skipSplashAds: '自动识别并跳过开屏广告',
            skippedToday: '今日已跳过',
            pureskipCaption: '本地处理 · 无联网权限',
            androidApp: 'Android 应用',
            privacyFriendly: '隐私友好',
            pureskipTitle: '纯净跳过 PureSkip',
            pureskipDesc: '通过无障碍服务自动识别并跳过应用开屏广告。功能在本地完成，不申请联网权限，保持轻量和透明。',
            pureskipPoint1: '自动识别常见“跳过”控件',
            pureskipPoint2: '本地运行，不上传用户数据',
            pureskipPoint3: 'APK 约 2.6MB，安装与使用简单',
            productSite: '产品网站',
            sourceCode: '开源代码',
            stockAria: '智能选股分析系统看板示意',
            live: '实时',
            totalAssets: '总资产',
            cumulativeReturn: '累计收益',
            todaysPicks: '今日推荐',
            sixCandidates: '6 个候选',
            stockCaption: '盘前筛选 · 模拟交易 · 盘后复盘',
            fullStackSystem: '全栈系统',
            automation: '自动化',
            stockTitle: '智能选股分析系统',
            stockDesc: '将每日选股研究整理成一套可持续运行的流程，覆盖盘前筛选、消息推送、模拟交易、跟踪与盘后复盘。',
            stockPoint1: '多因子筛选并生成候选清单',
            stockPoint2: '飞书推送与交互确认',
            stockPoint3: '云端定时运行，记录收益与回撤',
            dataAnalysis: '数据分析',
            feishuApi: '飞书 API',
            openLiveSystem: '进入在线系统',
            reviewscopeAria: 'ReviewScope 用户反馈分析看板示意',
            analysisComplete: '分析完成',
            reviews: '评论数',
            positive: '正面反馈',
            highPriority: '高优问题',
            reviewInsight: '重点关注：登录体验与响应速度',
            reviewscopeCaption: '评论输入 · 自动分析 · 可视化报告',
            openSourceProject: '开源项目',
            userInsights: '用户洞察',
            reviewscopeDesc: '面向产品和运营的用户反馈分析平台。导入评论后，可集中查看情感倾向、问题分类、紧急度、趋势和高频关键词。',
            reviewscopePoint1: '支持 CSV 导入及小红书、抖音评论采集',
            reviewscopePoint2: '提供情感、分类、紧急度与趋势看板',
            reviewscopePoint3: '可导出分析结果和 Markdown 洞察报告',
            liveDemo: '在线体验',
            contactTag: '想聊聊？',
            contactTitlePrefix: '随时找我',
            contactTitleHighlight: '都欢迎',
            contactDesc1: '有项目想法、想找人一起做，或者只是想认识一下——',
            contactDesc2: '如果你也关注实用工具、自动化或独立项目，欢迎来聊聊。',
            sendEmail: '发送邮件',
            footerText: '独立构思，持续打磨 ✦'
        },
        en: {
            pageTitle: 'Miaomiao — Portfolio',
            pageDescription: "Miaomiao's portfolio: exploring AI, focusing on real needs, and turning ideas into small products that work.",
            languageSwitch: 'Choose language',
            name: 'Miaomiao',
            navAbout: 'About',
            navWork: 'Work',
            navContact: 'Contact',
            heroRole: 'AI Project Builder',
            heroDesc1: 'I enjoy exploring and using AI, focusing on real needs, and choosing the right technologies and AI tools to solve practical problems.',
            heroDesc2: 'I keep turning ideas into small products that work and can be used.',
            viewWork: 'View my work',
            aboutTag: 'About me',
            aboutTitlePrefix: 'Someone who',
            aboutTitleHighlight: 'ships',
            aboutTitleSuffix: 'ideas',
            aboutBadge: 'AI tools & hands-on projects',
            aboutIntro: "Hi, I'm Miaomiao, an AI project builder.",
            aboutBody: 'I enjoy exploring and using AI, focusing on real needs, and choosing the right technologies and AI tools to solve practical problems. I keep turning ideas into small products that work and can be used.',
            independentProjects: 'Independent projects',
            ongoing: 'Ongoing',
            projectPractice: 'Hands-on practice',
            techStacks: 'Tech stacks',
            aiTools: 'AI Tools',
            fullStackDevelopment: 'Full-stack Development',
            workTag: 'Selected work',
            workTitlePrefix: 'Four projects built from real needs,',
            workTitleHighlight: 'improved over time',
            workTitleSuffix: '',
            workLead: 'From an Android utility and an open-source plugin to data analysis and automation systems, each project addresses a specific problem and leaves room to evolve.',
            navigatorAria: 'DSH Message Navigator interface preview',
            messages: 'Messages',
            navigatorCaption: 'Long conversations · Quick navigation',
            openSourcePlugin: 'Open-source plugin',
            productivityTool: 'Productivity tool',
            navigatorDesc: 'Adds a Codex-style message navigator to the DeepSeek Harness Web UI. Instead of repeatedly scrolling through long conversations, users can jump directly to any message from the outline.',
            navigatorPoint1: 'Automatically builds a conversation outline',
            navigatorPoint2: 'One-click navigation for long conversations',
            navigatorPoint3: 'Integrates with the existing Web UI as a plugin',
            viewSource: 'View source',
            pureskipAria: 'PureSkip Android app preview',
            serviceRunning: 'Service running',
            skipSplashAds: 'Automatically detects and skips splash ads',
            skippedToday: 'Skipped today',
            pureskipCaption: 'On-device · No internet permission',
            androidApp: 'Android app',
            privacyFriendly: 'Privacy-friendly',
            pureskipTitle: 'PureSkip',
            pureskipDesc: 'An Android utility that uses accessibility services to detect and skip splash-screen ads. Everything runs on-device, with no internet permission required.',
            pureskipPoint1: 'Detects common “Skip” controls automatically',
            pureskipPoint2: 'Runs locally without uploading user data',
            pureskipPoint3: 'About 2.6 MB, simple to install and use',
            productSite: 'Product site',
            sourceCode: 'Source code',
            stockAria: 'Stock Intelligence dashboard preview',
            live: 'Live',
            totalAssets: 'Total assets',
            cumulativeReturn: 'Cumulative return',
            todaysPicks: "Today's picks",
            sixCandidates: '6 candidates',
            stockCaption: 'Pre-market screening · Paper trading · Post-market review',
            fullStackSystem: 'Full-stack system',
            automation: 'Automation',
            stockTitle: 'Stock Intelligence',
            stockDesc: 'A repeatable daily stock-research workflow covering pre-market screening, notifications, paper trading, tracking, and post-market review.',
            stockPoint1: 'Multi-factor screening and candidate lists',
            stockPoint2: 'Feishu notifications and interaction',
            stockPoint3: 'Scheduled cloud runs with return and drawdown tracking',
            dataAnalysis: 'Data Analysis',
            feishuApi: 'Feishu API',
            openLiveSystem: 'Open live system',
            reviewscopeAria: 'ReviewScope feedback analysis dashboard preview',
            analysisComplete: 'Analysis complete',
            reviews: 'Reviews',
            positive: 'Positive',
            highPriority: 'High-priority',
            reviewInsight: 'Focus: login experience and response time',
            reviewscopeCaption: 'Import reviews · Analyze · Visualize',
            openSourceProject: 'Open-source project',
            userInsights: 'User insights',
            reviewscopeDesc: 'A feedback analysis platform for product and operations teams. Import reviews to explore sentiment, issue categories, urgency, trends, and frequent keywords in one place.',
            reviewscopePoint1: 'CSV import plus Xiaohongshu and Douyin review collection',
            reviewscopePoint2: 'Sentiment, category, urgency, and trend dashboards',
            reviewscopePoint3: 'Exports analysis results and Markdown insight reports',
            liveDemo: 'Live demo',
            contactTag: "Let's talk",
            contactTitlePrefix: 'Feel free to',
            contactTitleHighlight: 'reach out',
            contactDesc1: 'Have a project idea, want to build something together, or simply say hello?',
            contactDesc2: "If you care about useful tools, automation, or independent projects, I'd be happy to chat.",
            sendEmail: 'Send an email',
            footerText: 'Independent ideas, continuously refined ✦'
        }
    };

    const languageButtons = document.querySelectorAll('.language-option');
    const descriptionMeta = document.querySelector('meta[name="description"]');

    function setLanguage(language, remember = true) {
        const selectedLanguage = translations[language] ? language : 'zh';
        const dictionary = translations[selectedLanguage];

        document.documentElement.lang = selectedLanguage === 'zh' ? 'zh-CN' : 'en';
        document.title = dictionary.pageTitle;
        if (descriptionMeta) descriptionMeta.setAttribute('content', dictionary.pageDescription);

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
                element.textContent = dictionary[key];
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.dataset.i18nAria;
            if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
                element.setAttribute('aria-label', dictionary[key]);
            }
        });

        languageButtons.forEach(button => {
            const isActive = button.dataset.language === selectedLanguage;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        if (remember) {
            try {
                localStorage.setItem('portfolioLanguage', selectedLanguage);
            } catch (error) {
                // 浏览器禁用存储时仍可正常切换语言。
            }
        }
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.language));
    });

    let savedLanguage = 'zh';
    try {
        savedLanguage = localStorage.getItem('portfolioLanguage') || 'zh';
    } catch (error) {
        // 无法读取存储时默认使用中文。
    }
    setLanguage(savedLanguage, false);

    // 鼠标形状跟随
    const cursorShape = document.querySelector('.cursor-shape');
    const cursorDot = document.querySelector('.cursor-dot');
    let mouseX = 0, mouseY = 0;
    let shapeX = 0, shapeY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // 形状跟随（慢）
        shapeX += (mouseX - shapeX) * 0.08;
        shapeY += (mouseY - shapeY) * 0.08;
        cursorShape.style.left = shapeX + 'px';
        cursorShape.style.top = shapeY + 'px';

        // 点跟随（快）
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover效果 - 形状变化
    const hoverElements = document.querySelectorAll('a, button, .work-card, .skill-bubble, .social-btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorShape.classList.add('squircle');
        });
        el.addEventListener('mouseleave', () => {
            cursorShape.classList.remove('squircle');
        });
    });

    // 滚动动画 - Intersection Observer
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // 数字计数动画
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statObserver.observe(el));

    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 60;
        const duration = 1500;
        const stepTime = duration / 60;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, stepTime);
    }

    // 技能标签弹性动画
    const skillBubbles = document.querySelectorAll('.skill-bubble');
    skillBubbles.forEach((bubble, index) => {
        bubble.addEventListener('mouseenter', () => {
            bubble.style.animationDelay = (index * 0.05) + 's';
        });
    });

    // 装饰元素视差
    const decos = document.querySelectorAll('.deco');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        decos.forEach((deco, index) => {
            const speed = (index + 1) * 0.1;
            deco.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // 平滑滚动导航
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(254, 249, 243, 0.95)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        } else {
            nav.style.background = 'rgba(254, 249, 243, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });

    // Blob鼠标跟随
    const blobs = document.querySelectorAll('.blob');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const moveX = (x - 0.5) * speed;
            const moveY = (y - 0.5) * speed;
            blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // 页面加载动画
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
    }, 100);
});

// 初始样式
document.querySelector('.hero-content').style.cssText = `
    opacity: 0;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
`;
