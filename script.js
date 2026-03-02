// 工具数据
const toolsData = [
    {
        id: 1,
        name: 'Google Scholar',
        description: '谷歌学术搜索是一个免费的学术搜索引擘，可以帮助用户查找学术文献，包括期刊论文、学位论文、书籍、预印本、摘要和技术报告等。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Google Scholar logo, simple, minimalist, blue and white, square&image_size=square',
        isFavorite: false
    },
    {
        id: 2,
        name: 'PubMed',
        description: '美国国家医学图书馆的生物医学文献数据库，收录了超过3400万条医学相关文献的引用和摘要。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PubMed logo, simple, minimalist, blue and white, square&image_size=square',
        isFavorite: false
    },
    {
        id: 3,
        name: 'Web of Science',
        description: '综合性学术信息资源，提供全球科技文献的引文索引和分析工具。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Web of Science logo, simple, minimalist, blue and white, square&image_size=square',
        isFavorite: false
    },
    {
        id: 4,
        name: 'Scopus',
        description: ' Elsevier开发的抽象和引文数据库，涵盖科学、技术、医学和社会科学领域。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Scopus logo, simple, minimalist, blue and white, square&image_size=square',
        isFavorite: false
    },
    {
        id: 5,
        name: 'CNKI',
        description: '中国知网，中国最大的学术文献数据库，涵盖期刊、博硕士论文、会议论文等。',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CNKI logo, simple, minimalist, red and white, square&image_size=square',
        isFavorite: false
    },
    {
        id: 6,
        name: 'EndNote',
        description: '专业的文献管理软件，帮助研究者收集、组织和引用文献。',
        category: '文献管理',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=EndNote logo, simple, minimalist, green and white, square&image_size=square',
        isFavorite: false
    },
    {
        id: 7,
        name: 'Zotero',
        description: '开源的文献管理工具，支持多平台，可自动抓取网页上的文献信息。',
        category: '文献管理',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zotero logo, simple, minimalist, blue and white, square&image_size=square',
        isFavorite: false
    },
    {
        id: 8,
        name: 'Mendeley',
        description: ' Elsevier开发的文献管理软件，集成了社交功能，便于研究者之间的协作。',
        category: '文献管理',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mendeley logo, simple, minimalist, purple and white, square&image_size=square',
        isFavorite: false
    },
    {
        id: 9,
        name: 'NoteExpress',
        description: '国产文献管理软件，支持中文文献的管理和引用。',
        category: '文献管理',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NoteExpress logo, simple, minimalist, blue and white, square&image_size=square',
        isFavorite: false
    },
    {
        id: 10,
        name: 'CiteSpace',
        description: '文献可视化分析工具，用于识别研究领域的热点和趋势。',
        category: '文献分析',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CiteSpace logo, simple, minimalist, blue and white, square&image_size=square',
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
            // 这里可以添加访问网站的逻辑
            alert('访问网站功能待实现');
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