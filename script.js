// 工具数据
const toolsData = [
    // IDE工具
    {
        id: 1,
        name: 'Visual Studio Code',
        description: '轻量级但功能强大的代码编辑器，支持多种编程语言。',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Visual Studio Code logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://code.visualstudio.com',
        isFavorite: false
    },
    {
        id: 2,
        name: 'Cursor',
        description: '基于VS Code的AI增强编辑器，提供智能代码补全和生成功能。',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cursor IDE logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://cursor.sh',
        isFavorite: false
    },
    {
        id: 3,
        name: 'Trae',
        description: 'AI辅助开发工具，提供智能代码生成和分析功能。',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Trae IDE logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    {
        id: 4,
        name: 'PyCharm',
        description: 'Python专业开发IDE，提供代码智能提示和调试功能。',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PyCharm logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.jetbrains.com/pycharm/',
        isFavorite: false
    },
    {
        id: 5,
        name: 'Visual Studio',
        description: '微软开发的综合开发环境，支持多种编程语言。',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Visual Studio logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://visualstudio.microsoft.com',
        isFavorite: false
    },
    
    // LLM工具
    {
        id: 6,
        name: 'ChatGPT',
        description: 'OpenAI开发的大型语言模型，提供智能对话和文本生成功能。',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ChatGPT logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://chat.openai.com',
        isFavorite: false
    },
    {
        id: 7,
        name: '豆包',
        description: '字节跳动开发的AI对话助手，支持中文对话和文本生成。',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=豆包 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.doubao.com',
        isFavorite: false
    },
    {
        id: 8,
        name: '智谱清言',
        description: '智谱AI开发的大型语言模型，支持中文对话和文本生成。',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=智谱清言 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://chatglm.cn',
        isFavorite: false
    },
    {
        id: 9,
        name: '千问',
        description: '阿里云开发的大型语言模型，支持中文对话和文本生成。',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=千问 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://qianwen.aliyun.com',
        isFavorite: false
    },
    {
        id: 10,
        name: 'kimi',
        description: '深度求索开发的大型语言模型，支持长文本处理和多轮对话。',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kimi logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://kimi.moonshot.cn',
        isFavorite: false
    },
    
    // AI平台
    {
        id: 11,
        name: 'TensorFlow',
        description: '谷歌开发的开源机器学习框架，用于构建和部署AI模型。',
        category: 'AI平台',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TensorFlow logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.tensorflow.org',
        isFavorite: false
    },
    {
        id: 12,
        name: 'PyTorch',
        description: 'Facebook开发的开源机器学习框架，用于构建和部署AI模型。',
        category: 'AI平台',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PyTorch logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://pytorch.org',
        isFavorite: false
    },
    
    // 代码库
    {
        id: 13,
        name: 'GitHub',
        description: '全球最大的代码托管平台，用于版本控制和协作开发。',
        category: '代码库',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GitHub logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://github.com',
        isFavorite: false
    },
    {
        id: 14,
        name: 'Hugging Face',
        description: 'AI模型共享平台，提供预训练模型和工具。',
        category: '代码库',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hugging Face logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://huggingface.co',
        isFavorite: false
    },
    
    // 嵌入式开发
    {
        id: 15,
        name: 'Keil',
        description: '嵌入式系统开发工具，支持ARM处理器的开发。',
        category: '嵌入式开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Keil logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.keil.com',
        isFavorite: false
    },
    {
        id: 16,
        name: 'IAR',
        description: '嵌入式系统开发工具，支持多种处理器架构。',
        category: '嵌入式开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=IAR logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.iar.com',
        isFavorite: false
    },
    {
        id: 17,
        name: 'Eclipse',
        description: '开源的集成开发环境，支持多种编程语言和嵌入式开发。',
        category: '嵌入式开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Eclipse logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.eclipse.org',
        isFavorite: false
    },
    
    // 硬件开发
    {
        id: 18,
        name: '半导小芯',
        description: '半导体设计和仿真工具。',
        category: '硬件开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=半导小芯 logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    {
        id: 19,
        name: 'EDA',
        description: '电子设计自动化工具，用于芯片和电路板设计。',
        category: '硬件开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=EDA logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    
    // 文献检索
    {
        id: 20,
        name: '知网',
        description: '研究生最常用的中文数据库。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=知网 logo, simple, minimalist, red and white, square&image_size=square',
        url: 'https://www.cnki.net/',
        isFavorite: false
    },
    {
        id: 21,
        name: '万方',
        description: '研究生第二常用的中文数据库。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=万方 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://g.wanfangdata.com.cn/',
        isFavorite: false
    },
    {
        id: 22,
        name: 'Web of Science',
        description: '研究生必备英文数据库，所有专业通用。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Web of Science logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.webofscience.com',
        isFavorite: false
    },
    {
        id: 23,
        name: 'PubMed',
        description: '医学相关专业数据库。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PubMed logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://pubmed.ncbi.nlm.nih.gov/',
        isFavorite: false
    },
    {
        id: 24,
        name: 'Scopus',
        description: '较为常用的英文数据库。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Scopus logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.scopus.com',
        isFavorite: false
    },
    {
        id: 25,
        name: 'ScienceDirect',
        description: '较为常用的英文数据库。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ScienceDirect logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.sciencedirect.com/',
        isFavorite: false
    },
    {
        id: 26,
        name: 'Google Scholar 镜像',
        description: '开源文献检索数据库。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Google Scholar logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.sssam.com/tool/ggscholar/',
        isFavorite: false
    },
    {
        id: 27,
        name: '国家自然科学基金门户',
        description: '查询已结题项目。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=国家自然科学基金 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://kd.nsfc.cn/',
        isFavorite: false
    },
    
    // 文献管理
    {
        id: 28,
        name: 'EndNote',
        description: '详细实用教程（B站）。',
        category: '文献管理',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=EndNote logo, simple, minimalist, green and white, square&image_size=square',
        url: 'https://b23.tv/BR3py6Y',
        isFavorite: false
    },
    {
        id: 29,
        name: 'Zotero',
        description: '课程级免费教程（B站）。',
        category: '文献管理',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zotero logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://b23.tv/4ja5KsP',
        isFavorite: false
    },
    
    // 文献分析
    {
        id: 30,
        name: 'ASTA',
        description: 'AI寻找高相关文献/主题综述。',
        category: '文献分析',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ASTA logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://asta.allen.ai/chat',
        isFavorite: false
    },
    {
        id: 31,
        name: 'Connected Papers',
        description: '通过一篇文献寻找高相关文献。',
        category: '文献分析',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Connected Papers logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.connectedpapers.com',
        isFavorite: false
    },
    
    // 影响因子
    {
        id: 32,
        name: 'Journal Citation Reports',
        description: '最权威的IF查询网站。',
        category: '影响因子',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Journal Citation Reports logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://jcr.clarivate.com/jcr/home',
        isFavorite: false
    },
    {
        id: 33,
        name: '中科院期刊分区表',
        description: '中文版JCR，分区更严格。',
        category: '影响因子',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=中科院期刊分区表 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.fenqubiao.com/Default.aspx',
        isFavorite: false
    },
    {
        id: 34,
        name: 'Justscience',
        description: '同时查看JCR和中科院分区，推荐。',
        category: '影响因子',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Justscience logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://sci.justscience.cn/#0',
        isFavorite: false
    },
    
    // 文献下载
    {
        id: 35,
        name: 'Sci-Hub',
        description: '通过DOI解析PDF论文。',
        category: '文献下载',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sci-Hub logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.sci-hub.ren/',
        isFavorite: false
    },
    {
        id: 36,
        name: '国家标准全文公开',
        description: '标准下载。',
        category: '文献下载',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=国家标准全文公开 logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    {
        id: 37,
        name: '国家知识产权局',
        description: '专利下载。',
        category: '文献下载',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=国家知识产权局 logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    
    // 课程学习
    {
        id: 38,
        name: '中国大学MOOC',
        description: '国内慕课平台。',
        category: '课程学习',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=中国大学MOOC logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.icourse163.org/',
        isFavorite: false
    },
    {
        id: 39,
        name: 'Coursera',
        description: '国外慕课平台。',
        category: '课程学习',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Coursera logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.coursera.org/',
        isFavorite: false
    },
    {
        id: 40,
        name: 'Bilibili',
        description: '国内慕课平台。',
        category: '课程学习',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bilibili logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    
    // 思维导图
    {
        id: 41,
        name: 'Xmind',
        description: '思维导图绘制工具。',
        category: '思维导图',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xmind logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    {
        id: 42,
        name: 'ProcessOn',
        description: '在线思维导图和流程图绘制工具。',
        category: '思维导图',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ProcessOn logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    {
        id: 43,
        name: '百度脑图',
        description: '便捷绘制思维导图。',
        category: '思维导图',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=百度脑图 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://naotu.baidu.com/home',
        isFavorite: false
    },
    {
        id: 44,
        name: 'ImageGP',
        description: '傻瓜式绘图。',
        category: '思维导图',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ImageGP logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.bic.ac.cn/BIC/#/',
        isFavorite: false
    },
    
    // 文档工具
    {
        id: 45,
        name: 'MarkText',
        description: 'Markdown编辑器。',
        category: '文档工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MarkText logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    {
        id: 46,
        name: 'Typora',
        description: 'Markdown编辑器。',
        category: '文档工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Typora logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    {
        id: 47,
        name: '映像笔记',
        description: '笔记工具。',
        category: '文档工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=映像笔记 logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    
    // 手写工具
    {
        id: 48,
        name: 'drawio',
        description: '流程图绘制工具。',
        category: '手写工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=drawio logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    },
    {
        id: 49,
        name: 'Excalidraw',
        description: '手绘风格的绘图工具。',
        category: '手写工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Excalidraw logo, simple, minimalist, blue and white, square&image_size=square',
        url: '',
        isFavorite: false
    }
];

// DOM元素
const categoryItems = document.querySelectorAll('.category-item');
const searchInput = document.querySelector('.search-box input');
const toolsGrid = document.querySelector('.tools-grid');
const toolsCount = document.querySelector('.tools-count');

// 渲染工具列表
function renderTools(tools) {
    toolsGrid.innerHTML = '';
    
    if (tools.length === 0) {
        toolsGrid.innerHTML = '<p class="no-tools">未找到符合条件的工具</p>';
        toolsCount.textContent = `共 0 个工具`;
        return;
    }
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-card-header">
                <div class="tool-icon">
                    <img src="${tool.icon}" alt="${tool.name}">
                </div>
                <h3 class="tool-name">${tool.name}</h3>
                <button class="tool-favorite ${tool.isFavorite ? 'favorited' : ''}" data-id="${tool.id}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="${tool.isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tags">
                <span class="tool-tag">${tool.category}</span>
            </div>
            <div class="tool-actions">
                <button class="tool-btn visit-btn">访问网站</button>
            </div>
        `;
        toolsGrid.appendChild(toolCard);
    });
    
    toolsCount.textContent = `共 ${tools.length} 个工具`;
    
    // 添加收藏按钮事件
    addFavoriteListeners();
    
    // 添加访问按钮事件
    addVisitListeners();
}

// 添加收藏按钮事件
function addFavoriteListeners() {
    const favoriteButtons = document.querySelectorAll('.tool-favorite');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolId = parseInt(this.dataset.id);
            const tool = toolsData.find(t => t.id === toolId);
            if (tool) {
                tool.isFavorite = !tool.isFavorite;
                this.classList.toggle('favorited');
                const svg = this.querySelector('svg');
                svg.setAttribute('fill', tool.isFavorite ? 'currentColor' : 'none');
            }
        });
    });
}

// 添加访问按钮事件
function addVisitListeners() {
    const visitButtons = document.querySelectorAll('.visit-btn');
    visitButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolCard = this.closest('.tool-card');
            const toolName = toolCard.querySelector('.tool-name').textContent;
            const tool = toolsData.find(t => t.name === toolName);
            if (tool && tool.url) {
                window.open(tool.url, '_blank');
            } else {
                alert('该工具暂无访问链接');
            }
        });
    });
}

// 分类筛选
function filterByCategory(category) {
    let filteredTools;
    if (category === '全部工具') {
        filteredTools = toolsData;
    } else {
        filteredTools = toolsData.filter(tool => tool.category === category);
    }
    renderTools(filteredTools);
}

// 搜索筛选
function searchTools(query) {
    const filteredTools = toolsData.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase())
    );
    renderTools(filteredTools);
}

// 初始化
function init() {
    // 渲染所有工具
    renderTools(toolsData);
    
    // 分类筛选事件
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有分类的活跃状态
            categoryItems.forEach(i => i.classList.remove('active'));
            // 添加当前分类的活跃状态
            this.classList.add('active');
            // 筛选工具
            const category = this.querySelector('span').textContent;
            filterByCategory(category);
        });
    });
    
    // 搜索事件
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        searchTools(query);
    });
    
    // 顶部按钮事件
    const remixBtn = document.querySelector('.remix-btn');
    const heartBtn = document.querySelector('.heart-btn');
    const bookBtn = document.querySelector('.book-btn');
    
    remixBtn.addEventListener('click', function() {
        alert('Remix功能待实现');
    });
    
    heartBtn.addEventListener('click', function() {
        alert('收藏功能待实现');
    });
    
    bookBtn.addEventListener('click', function() {
        alert('书签功能待实现');
    });
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);
