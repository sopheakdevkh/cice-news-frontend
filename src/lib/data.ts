export interface Article {
  id: string;
  slug: string;
  lang: 'en' | 'zh';
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  image: string;
  excerpt: string;
  content?: string;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
  readTime?: string;
  views?: number;
  rank?: number;
}

export const CATEGORIES_EN = [
  { name: 'Home', slug: '' },
  { name: 'Cambodia', slug: 'cambodia' },
  { name: 'World', slug: 'world' },
  { name: 'Business', slug: 'business' },
  { name: 'Diplomacy', slug: 'diplomacy' },
  { name: 'Insight', slug: 'insight' },
];

export const CATEGORIES_ZH = [
  { name: '首页', slug: '' },
  { name: '柬埔寨', slug: 'cambodia' },
  { name: '国际', slug: 'world' },
  { name: '商业', slug: 'business' },
  { name: '外交', slug: 'diplomacy' },
  { name: '观点', slug: 'insight' },
  { name: '中文新闻', slug: 'chinese-news' },
];

export const HERO_ARTICLE_EN: Article = {
  id: 'cambodia-capital-market-milestone',
  slug: 'cambodia-capital-market-marks-new-milestone',
  lang: 'en',
  category: 'MARKETS',
  categorySlug: 'cambodia',
  title: "Cambodia's Capital Market Marks New Milestone",
  excerpt:
    "Cambodia's capital market reaches a new milestone as the country continues to strengthen its financial sector and attract international investment. The development reflects growing confidence in Cambodia's economic potential and its commitment to deeper integration with global markets.",
  date: 'Sep 12, 2026',
  image: 'https://cice.news/wp-content/uploads/2026/09/802032215_2911760719164575_3287661511473095817_n.png-7-edited-1.jpeg',
  readTime: '4 min read',
  author: {
    name: 'CICE Editorial Team',
    role: 'Financial Desk',
  },
  content: `
    Phnom Penh — Cambodia's securities and capital markets reached a historic watershed moment this week as trading volume and institutional investor participation surged to unprecedented levels.

    Presiding over the official bell-ringing ceremony in Phnom Penh, high-level officials and financial sector leaders gathered to celebrate key structural milestones that are repositioning the Kingdom as a competitive financial hub in Southeast Asia.

    The continuous expansion of the capital market framework, coupled with modern regulatory modernization, has attracted renewed interest from regional private equity, sovereign funds, and global asset management institutions.

    "Today's accomplishment demonstrates not merely growth in numbers, but an enduring trust in Cambodia's macroeconomic fundamentals and regulatory transparency," remarked the Director-General of the Securities and Exchange Regulator.

    International stakeholders highlighted that Cambodia's dollarized and open capital account offers rare liquidity resilience and seamless cross-border settlement opportunities for forward-looking enterprises.
  `,
};

export const SUB_GRID_ARTICLES_EN: Article[] = [
  {
    id: 'wp-143',
    slug: 'sihanoukville-sez-attracts-new-investments-in-2026',
    lang: 'en',
    category: 'ECONOMY',
    categorySlug: 'cambodia',
    title: 'Sihanoukville SEZ Attracts New Investments in 2026',
    excerpt: 'The multi-purpose Special Economic Zone expands industrial logistics capacity with cutting-edge smart manufacturing hubs.',
    date: 'Sep 12, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
    readTime: '3 min read',
    content: `
      Sihanoukville — The Sihanoukville Special Economic Zone (SSEZ) announced a new wave of international capital commitments this week, with industrial partners signing expansion agreements totaling tens of millions of dollars.

      As Cambodia's premier trade corridor and coastal gateway, the SSEZ continues to play a catalytic role in driving high-value manufacturing, electronics assembly, and modern logistics services. Zone authorities reported that streamlined customs clearance, solar-powered infrastructure, and integrated worker training centers have significantly bolstered investor confidence.

      With direct access to the Phnom Penh–Sihanoukville Expressway and the deep-sea port expansion, manufacturers operating within the zone benefit from optimized transport turnaround times, solidifying Cambodia’s strategic presence in global supply chains.
    `,
  },
  {
    id: 'wp-146',
    slug: 'cambodia-tourism-board-launches-new-co-marketing-grant',
    lang: 'en',
    category: 'TOURISM',
    categorySlug: 'cambodia',
    title: 'Cambodia Tourism Board Launches New Co-Marketing Grant',
    excerpt: 'Targeted support for international travel operators aims to revitalize historical heritage routes and eco-tourism initiatives.',
    date: 'Sep 11, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_49_35-PM.png',
    readTime: '3 min read',
    content: `
      Siem Reap — The Cambodia Tourism Board has officially unveiled a dedicated co-marketing grant scheme designed to incentivize international airlines, tour operators, and digital travel agencies to develop creative itineraries across the Kingdom.

      The initiative specifically prioritizes immersive cultural experiences in Siem Reap, culinary trails in Battambang, and nature-based conservation tourism throughout the Cardamom Mountains. Grant recipients will collaborate with local hospitality providers to ensure sustainable, high-value tourism growth that benefits local communities.

      Tourism officials emphasized that the grant program aligns with Cambodia's broader vision of transitioning from volume-driven sight-seeing to enriched, experiential voyages that celebrate the nation's profound heritage and natural wonders.
    `,
  },
  {
    id: 'wp-151',
    slug: 'cambodias-tvet-base-to-train-10000-skilled-talents-annually',
    lang: 'en',
    category: 'EDUCATION',
    categorySlug: 'cambodia',
    title: "Cambodia's TVET Base to Train 10,000 Skilled Talents Annually",
    excerpt: 'Vocational training institutions partner with multinational enterprises to cultivate technical expertise in electronics and automation.',
    date: 'Sep 10, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_55_34-PM.png',
    readTime: '4 min read',
    content: `
      Phnom Penh — The Ministry of Labour and Vocational Training celebrated the launch of an expanded Technical and Vocational Education and Training (TVET) base capable of training more than 10,000 technicians and specialists each year.

      Equipped with industry-standard labs in precision mechanics, mechatronics, and digital green technologies, the state-of-the-art academy partners directly with accredited manufacturers across the nation. Trainees will gain both theoretical foundations and on-the-job apprenticeship credentials.

      "Human capital development is the cornerstone of Cambodia's industrial transformation," officials noted during the opening ceremony. The initiative guarantees direct recruitment pipelines for graduates into specialized roles across automotive assembly and advanced electronics.
    `,
  },
];

export const SHOWCASE_ARTICLES_EN: Article[] = [
  {
    id: 'wp-182',
    slug: 'asean-and-partners-seek-deeper-cooperation-in-a-changing-world',
    lang: 'en',
    category: 'WORLD',
    categorySlug: 'world',
    title: 'ASEAN and Partners Seek Deeper Cooperation in a Changing World',
    excerpt: 'Regional diplomats congregate in Phnom Penh to advance multilateral dialogue and sustainable supply chains.',
    date: 'Sep 10, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
    readTime: '4 min read',
    content: `
      Phnom Penh — Senior diplomats and economic delegates from across ASEAN member states and dialogue partner nations convened in Phnom Penh to discuss multilateral cooperation amid evolving global economic shifts.

      Discussions centered on accelerating the implementation of the Regional Comprehensive Economic Partnership (RCEP), standardizing cross-border digital payment networks, and strengthening renewable energy transitions across Southeast Asia.

      Participants reaffirmed ASEAN centrality as a stabilizing force and expressed strong support for Cambodia's ongoing initiatives to foster inclusive trade and shared economic resilience.
    `,
  },
  {
    id: 'wp-185',
    slug: 'chinese-brands-see-growing-opportunities-in-cambodia',
    lang: 'en',
    category: 'BUSINESS',
    categorySlug: 'business',
    title: 'Chinese Brands See Growing Opportunities in Cambodia',
    excerpt: 'Leading retail, electric mobility, and digital infrastructure firms establish flagship headquarters in Phnom Penh.',
    date: 'Sep 9, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_18_04-PM.png',
    readTime: '3 min read',
    content: `
      Phnom Penh — Prominent Chinese enterprises spanning new-energy automotive manufacturing, digital commerce, and modern consumer lifestyle retail are rapidly expanding their operational footprint in Cambodia.

      Business leaders cite Cambodia's favorable investment laws, youthful demographic dividend, and strong bilateral diplomatic ties as primary catalysts for capital commitments. Over recent months, flagship showrooms, tech innovation incubators, and distribution hubs have opened in prominent commercial centers across Phnom Penh.

      Industry analysts expect this momentum to generate robust downstream employment while accelerating the adoption of green tech and digital logistics throughout the Kingdom.
    `,
  },
  {
    id: 'wp-188',
    slug: 'cambodia-and-china-strengthen-comprehensive-strategic-partnership',
    lang: 'en',
    category: 'DIPLOMACY',
    categorySlug: 'diplomacy',
    title: 'Cambodia and China Strengthen Comprehensive Strategic Partnership',
    excerpt: 'Bilateral leaders ink expansive agreements spanning clean energy, agri-tech innovation, and digital education networks.',
    date: 'Sep 8, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
    readTime: '5 min read',
    content: `
      Beijing / Phnom Penh — High-level bilateral consultations concluded this week with the reaffirmation of the comprehensive strategic partnership of cooperation between Cambodia and China.

      The two sides endorsed several landmark agreements addressing modern agriculture export protocols, industrial modernization projects, and joint cultural exchange programs under the 'Diamond Hexagon' cooperation framework.

      Both governments reaffirmed mutual support on fundamental interests and committed to deepening pragmatic collaboration that delivers tangible socio-economic dividends to both nations.
    `,
  },
  {
    id: 'wp-191',
    slug: 'beyond-the-headlines-a-deeper-look-at-cambodia',
    lang: 'en',
    category: 'INSIGHT',
    categorySlug: 'insight',
    title: 'Beyond the Headlines: A Deeper Look at Cambodia',
    excerpt: 'An analytical exploration of the Kingdom’s demographic transition, urbanization velocity, and green industrial evolution.',
    date: 'Sep 7, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_49_35-PM.png',
    readTime: '6 min read',
    content: `
      Phnom Penh — A comprehensive analysis of Cambodia's development landscape reveals transformative structural changes extending well beyond conventional economic indicators.

      From the nationwide rollout of digital public administration systems to the rapid adoption of solar agro-industrial parks in rural provinces, Cambodia is actively charting a forward-looking path toward upper-middle-income status.

      By leveraging strategic connectivity within ASEAN and cultivating a tech-savvy generation of entrepreneurs, the Kingdom continues to demonstrate an agility that challenges dated perceptions and inspires long-term investor confidence.
    `,
  },
];

export const CHINESE_PREVIEW_ARTICLES: Article[] = [
  {
    id: 'wp-216',
    slug: 'cambodia-capital-market-new-milestone-zh',
    lang: 'zh',
    category: '中文新闻',
    categorySlug: 'chinese-news',
    title: '柬埔寨资本市场迎来新里程碑',
    excerpt: '柬埔寨资本市场持续发展壮大，多项金融创新机制落地见效，吸引国际机构投资者广泛关注。',
    date: '2026年9月20日',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_18_04-PM.png',
    content: `
      金边讯 — 柬埔寨证券交易委员会与柬埔寨证券交易所举行重要里程碑发布会，宣布资本市场在交易体量、机构参与度和金融衍生品创新方面均创历史新高。

      多项面向国际投资者的便利准入措施及数字化交易工具全面上线，标志着柬埔寨在对接东盟及全球金融体系进程中迈出坚实一步。
    `,
  },
  {
    id: 'wp-219',
    slug: 'sihanoukville-sez-new-investments-zh',
    lang: 'zh',
    category: '中文新闻',
    categorySlug: 'chinese-news',
    title: '西港特区吸引新一轮投资',
    excerpt: '西哈努克港经济特区推进高端制造与现代物流双轮驱动，入驻企业产值再创新高。',
    date: '2026年9月20日',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
    content: `
      西哈努克省讯 — 西港特区最新公布招商引资成果，新签约多家智能电气、汽车配套与绿色建材领域重点企业。特区配套基础设施与数字化通关服务持续升级，为打造国际化综合工业园区提供有力支撑。
    `,
  },
  {
    id: 'wp-221',
    slug: 'cambodia-tourism-grant-zh',
    lang: 'zh',
    category: '中文新闻',
    categorySlug: 'chinese-news',
    title: '柬埔寨旅游局推出联合营销补助计划',
    excerpt: '政府出台多项文旅扶持政策，与国际主流旅行社展开战略协同，全面激活海外入境游市场。',
    date: '2026年9月20日',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_49_35-PM.png',
    content: `
      暹粒讯 — 柬埔寨旅游局正式公布联合营销支持机制，重点扶持针对全球游客的高品质生态游、文化研学和海岛度假精品路线，助力文旅产业实现质与量的双重跨越。
    `,
  },
  {
    id: 'wp-223',
    slug: 'cambodia-tvet-skills-training-zh',
    lang: 'zh',
    category: '中文新闻',
    categorySlug: 'chinese-news',
    title: '柬埔寨TVET基地每年培养 1万名技能人才',
    excerpt: '产教融合深入推进，柬埔寨职业技术培训基地加快孵化自动化、电子与精密制造骨干力量。',
    date: '2026年9月20日',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_55_34-PM.png',
    content: `
      金边讯 — 柬埔寨国家职业技术培训中心与多家跨国制造企业签署校企联合培养协议，依托先进实验室和双轨制教学体系，为国家工业化战略培育大批青年技能型骨干。
    `,
  },
];

export const MOST_READ_ARTICLES_EN: Article[] = [
  {
    id: 'most-read-1',
    rank: 1,
    slug: 'cambodia-capital-market-marks-new-milestone',
    lang: 'en',
    category: 'MARKETS',
    categorySlug: 'cambodia',
    title: "Cambodia's Capital Market Marks New Milestone",
    date: 'Sep 12, 2026',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=400&q=80',
    excerpt: 'Trading volume and institutional investor participation reached record heights.',
  },
  {
    id: 'most-read-2',
    rank: 2,
    slug: 'sihanoukville-sez-attracts-new-investments-in-2026',
    lang: 'en',
    category: 'ECONOMY',
    categorySlug: 'cambodia',
    title: 'Sihanoukville SEZ Attracts New Investments in 2026',
    date: 'Sep 11, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
    excerpt: 'Smart logistics expansion brings hundreds of high-value manufacturing roles.',
  },
  {
    id: 'most-read-3',
    rank: 3,
    slug: 'cambodia-tourism-board-launches-new-co-marketing-grant',
    lang: 'en',
    category: 'TOURISM',
    categorySlug: 'cambodia',
    title: 'Cambodia Tourism Board Launches New Co-Marketing Grant',
    date: 'Sep 11, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_49_35-PM.png',
    excerpt: 'Comprehensive subsidies designed for global travel partners.',
  },
  {
    id: 'most-read-4',
    rank: 4,
    slug: 'cambodias-tvet-base-to-train-10000-skilled-talents-annually',
    lang: 'en',
    category: 'EDUCATION',
    categorySlug: 'cambodia',
    title: "Cambodia's TVET Base to Train 10,000 Skilled Talents Annually",
    date: 'Sep 10, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_55_34-PM.png',
    excerpt: 'Technical education accelerates nationwide industrial transition.',
  },
  {
    id: 'most-read-5',
    rank: 5,
    slug: 'new-road-projects-to-boost-regional-connectivity',
    lang: 'en',
    category: 'INFRASTRUCTURE',
    categorySlug: 'cambodia',
    title: 'New Road Projects Boost Regional Connectivity',
    date: 'Sep 9, 2026',
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Comprehensive highway modernization connects commercial corridors across Cambodia.',
  },
];

export const CATEGORY_ARTICLES_MAP: Record<string, Article[]> = {
  cambodia: [
    {
      id: 'cam-1',
      slug: 'phnom-penh-attracts-new-wave-of-investment-in-2026',
      lang: 'en',
      category: 'CAMBODIA',
      categorySlug: 'cambodia',
      title: 'Phnom Penh Attracts New Wave of Investment in 2026',
      excerpt: 'Urban modernization and tech start-up incubators ignite fresh capital infusions across Phnom Penh’s burgeoning commercial districts.',
      date: 'Sep 12, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-08_58_41-PM.png',
      readTime: '4 min read',
      author: {
        name: 'CICE News Desk',
        role: 'Phnom Penh Bureau',
      },
      content: `
        Phnom Penh — The capital city of Cambodia has registered unprecedented capital inflow in commercial developments, technology startup accelerators, and modern service clusters.
        
        International development banks and private regional syndicates noted that Phnom Penh's strategic position at the heart of the Greater Mekong Subregion continues to make it a favored location for corporate regional headquarters.
        
        Urban modernization initiatives, digital transaction infrastructure, and progressive zoning regulations have turned the metropolitan center into a resilient magnet for regional commerce and talent retention.
      `,
    },
    {
      id: 'cam-2',
      slug: 'sihanoukville-sez-attracts-new-investments-in-2026',
      lang: 'en',
      category: 'ECONOMY',
      categorySlug: 'cambodia',
      title: 'Sihanoukville SEZ Attracts New Investments in 2026',
      excerpt: 'Global electronics and consumer goods manufacturers commit over $450 million in new production capacity.',
      date: 'Sep 11, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
      readTime: '3 min read',
      author: {
        name: 'Sokha Meng',
        role: 'Industrial Correspondent',
      },
      content: `
        Sihanoukville — The Sihanoukville Special Economic Zone (SSEZ) announced a new wave of international capital commitments this week, with industrial partners signing expansion agreements totaling tens of millions of dollars.
        
        As Cambodia's premier trade corridor and coastal gateway, the SSEZ continues to play a catalytic role in driving high-value manufacturing, electronics assembly, and modern logistics services.
        
        Zone authorities reported that streamlined customs clearance, solar-powered infrastructure, and integrated worker training centers have significantly bolstered investor confidence, positioning Cambodia firmly within global value chains.
      `,
    },
    {
      id: 'cam-3',
      slug: 'cambodia-tourism-board-launches-new-co-marketing-grant',
      lang: 'en',
      category: 'TOURISM',
      categorySlug: 'cambodia',
      title: 'Cambodia Tourism Board Launches New Co-Marketing Grant',
      excerpt: 'Targeted support for international travel operators aims to revitalize historical heritage routes and eco-tourism initiatives.',
      date: 'Sep 11, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_49_35-PM.png',
      readTime: '3 min read',
      author: {
        name: 'Vannak Chhum',
        role: 'Tourism & Culture Desk',
      },
      content: `
        Siem Reap — The Cambodia Tourism Board has officially unveiled a dedicated co-marketing grant scheme designed to incentivize international airlines, tour operators, and digital travel agencies to develop creative itineraries across the Kingdom.
        
        The initiative specifically prioritizes immersive cultural experiences in Siem Reap, culinary trails in Battambang, and nature-based conservation tourism throughout the Cardamom Mountains.
        
        Tourism officials emphasized that the grant program aligns with Cambodia's broader vision of transitioning from volume-driven sight-seeing to enriched, experiential voyages that celebrate the nation's profound heritage and natural wonders.
      `,
    },
    {
      id: 'cam-4',
      slug: 'cambodias-tvet-base-to-train-10000-skilled-talents-annually',
      lang: 'en',
      category: 'EDUCATION',
      categorySlug: 'cambodia',
      title: "Cambodia's TVET Base to Train 10,000 Skilled Talents Annually",
      excerpt: 'Vocational training institutions partner with multinational enterprises to cultivate technical expertise in electronics and automation.',
      date: 'Sep 10, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_55_34-PM.png',
      readTime: '4 min read',
      author: {
        name: 'Chenda Ly',
        role: 'Education & Workforce',
      },
      content: `
        Phnom Penh — The Ministry of Labour and Vocational Training celebrated the launch of an expanded Technical and Vocational Education and Training (TVET) base capable of training more than 10,000 technicians and specialists each year.
        
        Equipped with industry-standard labs in precision mechanics, mechatronics, and digital green technologies, the state-of-the-art academy partners directly with accredited manufacturers across the nation.
        
        "Human capital development is the cornerstone of Cambodia's industrial transformation," officials noted during the opening ceremony, guaranteeing direct recruitment pipelines into specialized manufacturing roles.
      `,
    },
    {
      id: 'cam-5',
      slug: 'new-road-projects-to-boost-regional-connectivity',
      lang: 'en',
      category: 'INFRASTRUCTURE',
      categorySlug: 'cambodia',
      title: 'New Road Projects to Boost Regional Connectivity',
      excerpt: 'Comprehensive highway modernization connects commercial corridors and deep-sea logistics hubs across Cambodia.',
      date: 'Sep 9, 2026',
      image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'CICE Infrastructure Desk',
        role: 'Special Reports',
      },
      content: `
        Phnom Penh — The Ministry of Public Works and Transport has announced the rollout of major expressway upgrades and provincial connectivity corridors designed to streamline freight transit times across the Kingdom.
        
        The projects link Phnom Penh directly to major economic zones, provincial agro-industrial hubs, and key border checkpoints with Thailand and Vietnam.
        
        Enhanced multimodal freight networks will significantly lower logistical costs for exporters, further integrating Cambodia into regional supply chains and accelerating sustainable socioeconomic progress.
      `,
    },
  ],

  world: [
    {
      id: 'world-1',
      slug: 'global-economic-growth-shows-renewed-momentum',
      lang: 'en',
      category: 'WORLD',
      categorySlug: 'world',
      title: 'Global Economic Growth Shows Renewed Momentum',
      excerpt: 'International financial institutions highlight resilient consumer demand and easing monetary conditions across major trade hubs.',
      date: 'Sep 12, 2026',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Michael Wong',
        role: 'Global Markets Analyst',
      },
      content: `
        Singapore / Washington — Global economic indicators signal a robust rebound in trade activities and industrial demand heading into late 2026.
        
        Central banks across key economies have maintained accommodative monetary policies, boosting investor confidence and spurring cross-border capital investments in clean energy, digital infrastructure, and consumer goods.
        
        Emerging Southeast Asian markets continue to outperform baseline forecasts, demonstrating high resilience against external headwinds and attracting diversified international production commitments.
      `,
    },
    {
      id: 'world-2',
      slug: 'asean-strengthens-regional-cooperation',
      lang: 'en',
      category: 'WORLD',
      categorySlug: 'world',
      title: 'ASEAN Strengthens Regional Cooperation',
      excerpt: 'Member states reaffirm shared commitment to economic integration, cross-border payments, and diplomatic unity.',
      date: 'Sep 11, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
      readTime: '4 min read',
      author: {
        name: 'Somaly Keo',
        role: 'Diplomatic Correspondent',
      },
      content: `
        Phnom Penh — Foreign and economic ministers from ASEAN member states concluded bilateral and multilateral consultations aimed at deepening regional market integration.
        
        The ministers emphasized shared commitments to standardizing local-currency settlement frameworks, enhancing digital customs interoperability, and safeguarding supply chain stability across the Asia-Pacific region.
        
        The discussions highlighted ASEAN's central role as an indispensable platform for peace, cooperation, and inclusive economic progress.
      `,
    },
    {
      id: 'world-3',
      slug: 'major-powers-seek-common-ground-on-global-challenges',
      lang: 'en',
      category: 'WORLD',
      categorySlug: 'world',
      title: 'Major Powers Seek Common Ground on Global Challenges',
      excerpt: 'Diplomatic delegations explore coordinated solutions on international commerce, maritime stability, and food security.',
      date: 'Sep 11, 2026',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
      readTime: '5 min read',
      author: {
        name: 'David Reynolds',
        role: 'International Affairs',
      },
      content: `
        Geneva — Delegations representing major global powers convened for comprehensive multilateral talks focusing on international commerce, climate resilience, and food supply reliability.
        
        Participants reaffirmed their willingness to maintain open communication channels and adhere to rule-based international trade norms, preventing geopolitical tensions from hindering sustainable development.
        
        Developing nations welcomed the pragmatic tone of the discussions, expressing hope for tangible collaborative frameworks in green energy financing and equitable technology transfer.
      `,
    },
    {
      id: 'world-4',
      slug: 'climate-action-becomes-central-to-global-agenda',
      lang: 'en',
      category: 'WORLD',
      categorySlug: 'world',
      title: 'Climate Action Becomes Central to Global Agenda',
      excerpt: 'International conference yields ambitious green financing pledges and accelerated renewable transition milestones.',
      date: 'Sep 10, 2026',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Elena Rostova',
        role: 'Environmental Desk',
      },
      content: `
        Paris — World leaders and environmental policymakers concluded a landmark climate summit, signing new pledges to accelerate decarbonization across industrial supply chains.
        
        The agreements encompass significant financing pledges for climate-vulnerable nations in the Global South, facilitating investments in solar grids, smart irrigation, and coastal defense systems.
        
        Delegates underscored that combining ecological stewardship with innovative clean technology represents the most sustainable economic development model for the upcoming decades.
      `,
    },
    {
      id: 'world-5',
      slug: 'innovation-drives-new-opportunities-worldwide',
      lang: 'en',
      category: 'WORLD',
      categorySlug: 'world',
      title: 'Innovation Drives New Opportunities Worldwide',
      excerpt: 'Advancements in artificial intelligence, digital logistics, and clean tech open transformative avenues for international growth.',
      date: 'Sep 9, 2026',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop',
      readTime: '3 min read',
      author: {
        name: 'Kenji Sato',
        role: 'Technology & Innovation',
      },
      content: `
        Tokyo — Technological breakthroughs in artificial intelligence, automated freight management, and decentralized finance are fundamentally reshaping cross-border commerce.
        
        Developing economies that proactively build high-speed telecommunications networks and encourage startup incubators are capturing high-value regional investments.
        
        Analysts stress that nurturing technical skills and open digital architectures will enable countries worldwide to turn technology into an equalizing engine for societal progress.
      `,
    },
  ],

  business: [
    {
      id: 'biz-1',
      slug: 'foreign-investment-fuels-cambodias-economic-growth',
      lang: 'en',
      category: 'BUSINESS',
      categorySlug: 'business',
      title: "Foreign Investment Fuels Cambodia's Economic Growth",
      excerpt: 'Robust capital inflows into manufacturing, infrastructure, and green technology propel the Kingdom’s economic momentum.',
      date: 'Sep 12, 2026',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Chanthou Sam',
        role: 'Business Editor',
      },
      content: `
        Phnom Penh — The Council for the Development of Cambodia (CDC) reported a record surge in foreign direct investment registrations during the first three quarters of 2026.
        
        International enterprises from Asia, Europe, and North America have channeled billions into specialized industrial complexes, smart port terminals, and renewable power infrastructure.
        
        Economists emphasize that Cambodia's competitive labor force, strategic location within the ASEAN corridor, and favorable investment protection legislation make it an increasingly attractive manufacturing and logistics hub.
      `,
    },
    {
      id: 'biz-2',
      slug: 'chinese-brands-see-growing-opportunities-in-cambodia',
      lang: 'en',
      category: 'BUSINESS',
      categorySlug: 'business',
      title: 'Chinese Brands See Growing Opportunities in Cambodia',
      excerpt: 'Leading retail, electric mobility, and digital infrastructure firms establish flagship headquarters in Phnom Penh.',
      date: 'Sep 11, 2026',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Li Wei',
        role: 'Trade & Commerce',
      },
      content: `
        Phnom Penh — Leading Chinese electric vehicle manufacturers, electronics giants, and modern retail franchises are accelerating their direct investment presence in Cambodia.
        
        Business leaders pointed to Cambodia's rapidly expanding middle class, young tech-savvy population, and comprehensive bilateral trade agreements as key catalysts for sustained investment.
        
        Joint ventures with local Cambodian partners are creating high-value technical jobs and transferring advanced industrial capabilities across local supply chains.
      `,
    },
    {
      id: 'biz-3',
      slug: 'cambodias-manufacturing-sector-expands-further',
      lang: 'en',
      category: 'BUSINESS',
      categorySlug: 'business',
      title: "Cambodia's Manufacturing Sector Expands Further",
      excerpt: 'Diversification into precision electronics, automotive components, and solar equipment accelerates industrial modernization.',
      date: 'Sep 11, 2026',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Sovanary Rin',
        role: 'Manufacturing Desk',
      },
      content: `
        Kampong Speu — Cambodia's manufacturing ecosystem continues its rapid diversification beyond traditional garments into high-value electronics and automotive parts.
        
        New automated assembly plants in special economic zones reported a 28 percent year-on-year increase in exported precision components, serving global consumer electronics brands.
        
        Industry analysts note that government incentives for clean energy usage and automated facilities are empowering factories to meet demanding international ESG requirements.
      `,
    },
    {
      id: 'biz-4',
      slug: 'smes-drive-new-momentum-in-local-economy',
      lang: 'en',
      category: 'BUSINESS',
      categorySlug: 'business',
      title: 'SMEs Drive New Momentum in Local Economy',
      excerpt: 'Digital financial tools and government credit support schemes empower grassroots enterprises across the provinces.',
      date: 'Sep 10, 2026',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      readTime: '3 min read',
      author: {
        name: 'Bopha Pich',
        role: 'Local Enterprise Desk',
      },
      content: `
        Phnom Penh — Small and medium enterprises (SMEs) across Cambodia are experiencing robust growth, supported by national low-interest refinancing schemes and fintech platforms.
        
        From agricultural processing in Battambang to digital design agencies in Phnom Penh, entrepreneurs are leveraging digital marketplaces to reach consumers both domestically and across ASEAN borders.
        
        Commercial banks have lowered collateral barriers for digital-first enterprises, fostering unprecedented business formalization and financial inclusion.
      `,
    },
    {
      id: 'biz-5',
      slug: 'digital-economy-opens-new-prospects',
      lang: 'en',
      category: 'BUSINESS',
      categorySlug: 'business',
      title: 'Digital Economy Opens New Prospects',
      excerpt: 'Fintech innovation and digital banking platforms reshape business transactions and cross-border commerce.',
      date: 'Sep 9, 2026',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Rithy Seng',
        role: 'Fintech & Digital Economy',
      },
      content: `
        Phnom Penh — The digital economy is rapidly emerging as a primary growth pillar for Cambodia, propelled by the ubiquity of QR code payments and the National Bank of Cambodia's Bakong network.
        
        Financial technology firms and e-commerce platforms recorded double-digit transaction volume increases, enabling small merchants to conduct instant, frictionless commerce.
        
        Regional digital integrations now allow seamless bilateral payments between Cambodia, Thailand, Vietnam, and China, dramatically lowering transaction overhead for international trade.
      `,
    },
  ],

  diplomacy: [
    {
      id: 'dip-1',
      slug: 'cambodia-and-china-comprehensive-strategic-partnership',
      lang: 'en',
      category: 'DIPLOMACY',
      categorySlug: 'diplomacy',
      title: 'Cambodia and China Comprehensive Strategic Partnership',
      excerpt: 'Bilateral leaders ink expansive agreements spanning clean energy, agri-tech innovation, and digital education networks.',
      date: 'Sep 12, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
      readTime: '5 min read',
      author: {
        name: 'CICE Diplomatic Team',
        role: 'Regional Affairs',
      },
      content: `
        Beijing / Phnom Penh — Senior leaders from Cambodia and China gathered this week to reaffirm their enduring bilateral friendship and deepen the "Diamond Hexagon" cooperation framework.
        
        The meetings resulted in significant bilateral agreements focusing on green industrial parks, modern agricultural technology transfer, renewable power development, and people-to-people exchanges.
        
        Both governments emphasized that their comprehensive strategic partnership delivers tangible benefits to both peoples while contributing constructively to regional stability and prosperity.
      `,
    },
    {
      id: 'dip-2',
      slug: 'asean-advances-regional-dialogue-and-cooperation',
      lang: 'en',
      category: 'DIPLOMACY',
      categorySlug: 'diplomacy',
      title: 'ASEAN Advances Regional Dialogue and Cooperation',
      excerpt: 'Regional ministers and dialogue partners collaborate on security architecture, economic cohesion, and crisis response.',
      date: 'Sep 11, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
      readTime: '4 min read',
      author: {
        name: 'Chanthy Mao',
        role: 'ASEAN Affairs',
      },
      content: `
        Phnom Penh — The ASEAN Secretariat, alongside member state representatives, held intensive sessions on strengthening multilateral defense and economic dialogue.
        
        Delegates highlighted the necessity of institutional resilience in navigating external geopolitical rivalries while upholding ASEAN centrality.
        
        The forum concluded with joint declarations to protect maritime trade routes, harmonize regional environmental protection guidelines, and accelerate cross-border disaster relief mechanisms.
      `,
    },
    {
      id: 'dip-3',
      slug: 'cambodia-plays-active-role-in-international-affairs',
      lang: 'en',
      category: 'DIPLOMACY',
      categorySlug: 'diplomacy',
      title: 'Cambodia Plays Active Role in International Affairs',
      excerpt: 'From UN peacekeeping to multilateral forums, Cambodia actively champions global peace, humanitarianism, and sustainable development.',
      date: 'Sep 11, 2026',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Vireak Dara',
        role: 'International Relations',
      },
      content: `
        New York / Phnom Penh — At the United Nations and other multilateral assemblies, Cambodia continues to build on its proud record of international cooperation and peace advocacy.
        
        Over the past two decades, thousands of Cambodian blue helmets have served in UN peacekeeping missions worldwide, specializing in humanitarian demining and engineering reconstruction.
        
        International observers commended Cambodia’s proactive multilateral diplomacy, emphasizing the country’s voice in promoting dialogue, reconciliation, and mutual respect among sovereign states.
      `,
    },
    {
      id: 'dip-4',
      slug: 'high-level-talks-highlight-development-goals',
      lang: 'en',
      category: 'DIPLOMACY',
      categorySlug: 'diplomacy',
      title: 'High-Level Talks Highlight Development Goals',
      excerpt: 'Bilateral and multilateral summits align international partnerships with national sustainable growth strategies.',
      date: 'Sep 10, 2026',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Kalyan Neth',
        role: 'Diplomatic Desk',
      },
      content: `
        Phnom Penh — Bilateral consultations between Cambodian leadership and international development agencies focused on aligning international grant assistance with Cambodia’s Pentagonal Strategy.
        
        Key focal areas include modernizing digital governance, broadening universal healthcare coverage, and accelerating rural electrification through clean energy micro-grids.
        
        Development partners expressed strong admiration for Cambodia’s transparent project governance and rapid institutional modernization.
      `,
    },
    {
      id: 'dip-5',
      slug: 'cambodia-deepens-engagement-with-global-partners',
      lang: 'en',
      category: 'DIPLOMACY',
      categorySlug: 'diplomacy',
      title: 'Cambodia Deepens Engagement with Global Partners',
      excerpt: 'Strengthening diplomatic and trade ties with European, Middle Eastern, and American partners unlocks diverse horizons.',
      date: 'Sep 9, 2026',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Sopheak Touch',
        role: 'Foreign Affairs',
      },
      content: `
        Phnom Penh — Cambodia's diplomatic missions overseas have intensified commercial diplomacy efforts, holding targeted investment forums in major capitals across Europe, the Middle East, and the Americas.
        
        The outreach focuses on promoting Cambodian organic agricultural exports, establishing vocational exchange programs, and attracting tech-sector foreign investments.
        
        The Kingdom's constructive and open foreign policy framework continues to cultivate broad international goodwill and tangible economic benefits.
      `,
    },
  ],

  insight: [
    {
      id: 'ins-1',
      slug: 'a-deeper-look-at-cambodias-development-path',
      lang: 'en',
      category: 'INSIGHT',
      categorySlug: 'insight',
      title: "A Deeper Look at Cambodia's Development Path",
      excerpt: 'An analytical exploration of the Kingdom’s demographic transition, urbanization velocity, and green industrial evolution.',
      date: 'Sep 12, 2026',
      image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop',
      readTime: '6 min read',
      author: {
        name: 'Dr. Heng Buntheun',
        role: 'Senior Economic Fellow',
      },
      content: `
        Phnom Penh — Over the past twenty-five years, Cambodia has sustained one of the fastest rates of poverty reduction and economic expansion in Southeast Asia.
        
        Today, the Kingdom stands at an inflection point. With a median population age under thirty, expanding nationwide digital literacy, and modern arterial connectivity, the structural foundation for high-value industrialization is securely in place.
        
        Achieving the national objective of upper-middle-income status by 2030 will hinge upon continued investment in technical higher education, institutional transparency, and clean energy resilience.
      `,
    },
    {
      id: 'ins-2',
      slug: 'opportunities-and-challenges-in-a-changing-world',
      lang: 'en',
      category: 'INSIGHT',
      categorySlug: 'insight',
      title: 'Opportunities and Challenges in a Changing World',
      excerpt: 'Navigating geopolitical shifts, technological disruption, and energy transitions in an increasingly multipolar global order.',
      date: 'Sep 11, 2026',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
      readTime: '5 min read',
      author: {
        name: 'Prof. Jeffrey Davies',
        role: 'Geopolitical Strategist',
      },
      content: `
        Phnom Penh — As global trade architectures undergo fundamental recalibration, smaller open economies must craft agile, multi-vectored economic strategies.
        
        Rather than succumbing to binary global alignments, proactive nations can position themselves as neutral logistics bridges, clean technology adopters, and welcoming investment havens.
        
        Strategic flexibility, combined with steadfast adherence to international legal norms, provides the optimal compass for sustainable development amid global volatility.
      `,
    },
    {
      id: 'ins-3',
      slug: 'sustainable-growth-for-a-brighter-future',
      lang: 'en',
      category: 'INSIGHT',
      categorySlug: 'insight',
      title: 'Sustainable Growth for a Brighter Future',
      excerpt: 'Integrating environmental stewardship, clean energy frameworks, and circular economy practices into national development.',
      date: 'Sep 11, 2026',
      image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=800&auto=format&fit=crop',
      readTime: '5 min read',
      author: {
        name: 'Serey Vathana',
        role: 'Sustainability Research Lead',
      },
      content: `
        Phnom Penh — The false dichotomy between rapid economic development and environmental conservation is increasingly dissolving across Southeast Asia.
        
        By integrating solar and biomass generation directly into industrial parks, preserving watershed forests, and incentivizing green building certifications, Cambodia is demonstrating that ecological preservation can enhance commercial competitiveness.
        
        Investing in sustainable infrastructure now insulates national export industries against future carbon border taxes while securing natural riches for generations to come.
      `,
    },
    {
      id: 'ins-4',
      slug: 'education-empowers-cambodias-next-generation',
      lang: 'en',
      category: 'INSIGHT',
      categorySlug: 'insight',
      title: "Education Empowers Cambodia's Next Generation",
      excerpt: 'Modernized curricula, STEM learning, and vocational partnerships lay the foundation for a knowledge-driven economy.',
      date: 'Sep 10, 2026',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
      author: {
        name: 'Dr. Maya Lin',
        role: 'Education Policy Specialist',
      },
      content: `
        Phnom Penh — The long-term vitality of any society is written in its classrooms and laboratories. Cambodia's widespread educational modernization—incorporating robotics, coding, and multilingual fluency—is reshaping career possibilities for young learners nationwide.
        
        Collaborations between public universities and leading tech corporations ensure that students master relevant, real-world proficiencies before entering the labor force.
        
        Empowering young minds with critical thinking and technical acumen ensures Cambodia's sustained transition into an innovation-powered economy.
      `,
    },
    {
      id: 'ins-5',
      slug: 'people-and-stories-from-across-cambodia',
      lang: 'en',
      category: 'INSIGHT',
      categorySlug: 'insight',
      title: 'People and Stories from Across Cambodia',
      excerpt: 'Inspiring narratives of innovation, community resilience, and cultural preservation from grassroots changemakers.',
      date: 'Sep 9, 2026',
      image: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=800&auto=format&fit=crop',
      readTime: '5 min read',
      author: {
        name: 'Kolab Meas',
        role: 'Cultural Features Desk',
      },
      content: `
        Siem Reap / Battambang — Beyond high-level policy summits and macroeconomic indicators, the true heartbeat of Cambodia beats in its local communities and resilient changemakers.
        
        From silk artisans in Takeo adapting ancient looms to modern sustainable fashion, to young agri-tech founders revolutionizing mango yields in Kampong Speu, Cambodia's grassroots spirit is vibrant and unstoppable.
        
        Documenting and celebrating these human stories captures the authentic soul of a kingdom marching boldly into the future with dignity and hope.
      `,
    },
  ],

  'chinese-news': [
    {
      id: 'wp-482',
      slug: 'china-cambodia-belt-and-road-high-quality',
      lang: 'zh',
      category: '柬埔寨与中国',
      categorySlug: 'chinese-news',
      title: '中柬携手推动高质量共建“一带一路” 开启命运共同体新篇章',
      excerpt: '中柬双方表示，将深化各领域务实合作，推动高质量共建“一带一路”，为地区和平、稳定与共同发展作出更大贡献。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
    },
    {
      id: 'wp-485',
      slug: 'cambodia-asean-economic-integration',
      lang: 'zh',
      category: '柬埔寨与东盟',
      categorySlug: 'chinese-news',
      title: '柬埔寨积极参与东盟经贸会议 推动区域经济一体化',
      excerpt: '柬埔寨在东盟相关会议上强调，将继续加强与东盟各国的务实合作，共同应对外部挑战，推动可持续发展。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
    },
    {
      id: 'wp-498',
      slug: 'cambodia-un-multilateralism',
      lang: 'zh',
      category: '柬埔寨与世界',
      categorySlug: 'chinese-news',
      title: '柬埔寨在联合国发声 呼吁全球共同应对气候变化挑战',
      excerpt: '柬埔寨坚持多边主义，愿与国际社会一道，推动绿色发展与可持续未来。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_18_04-PM.png',
    },
    {
      id: 'wp-506',
      slug: 'cambodia-industry-investment-surge',
      lang: 'zh',
      category: '产业与投资',
      categorySlug: 'chinese-news',
      title: '柬埔寨汽车产业迎来新机遇 多家国际企业加快布局',
      excerpt: '随着投资环境持续优化，越来越多国际企业看好柬埔寨汽车及零部件产业的增长潜力，相关项目正在加速落地。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/802032215_2911760719164575_3287661511473095817_n.png-7-edited-1.jpeg',
    },
    {
      id: 'wp-509',
      slug: 'cambodia-tourism-culture-initiatives',
      lang: 'zh',
      category: '旅游与文化',
      categorySlug: 'chinese-news',
      title: '柬埔寨推出新旅游推广计划 吸引更多国际游客',
      excerpt: '柬埔寨政府发布新一轮旅游推广计划，重点提升旅游基础设施和服务质量，进一步打造多元化、可持续的旅游目的地。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
    },
    {
      id: 'wp-520',
      slug: 'cambodia-economic-stimulus-measures',
      lang: 'zh',
      category: '柬埔寨',
      categorySlug: 'chinese-news',
      title: '柬埔寨政府推出新一轮经济刺激措施 推动高质量增长',
      excerpt: '柬埔寨政府宣布推出新一轮经济刺激措施，重点支持基础设施、制造业和中小微企业，增强经济韧性与可持续发展。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-08_58_41-PM.png',
    },
  ],
};

export const CATEGORY_ARTICLES_ZH_MAP: Record<string, Article[]> = {
  cambodia: [
    {
      id: 'cam-zh-1',
      slug: 'phnom-penh-attracts-new-wave-of-investment-in-2026',
      lang: 'zh',
      category: '柬埔寨',
      categorySlug: 'cambodia',
      title: '柬埔寨首都金边迎来2026年新一轮投资热潮',
      excerpt: '城市现代化提速与创新孵化园区蓬勃兴起，推动金边核心商务区吸引大量国际资本与新兴产业落户。',
      date: '2026年9月12日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-08_58_41-PM.png',
      readTime: '4分钟阅读',
      author: {
        name: 'CICE中文采编部',
        role: '金边分社',
      },
      content: `
        金边讯 — 随着大湄公河次区域互联互通战略的深入推进，柬埔寨首都金边在商业地产、高新技术孵化器、现代金融服务及智慧物流等领域迎来新一轮国际资本涌入热潮。多国投资银行与区域投资基金指出，金边得天独厚的区位优势和充满生机的人口红利，使其成为跨国企业布局东南亚市场的核心枢纽。

        在金边核心商务区与新兴科技园区内，数字化交易基础设施持续升级，智慧园区和现代化写字楼相继落成，为创新型企业提供了世界级的发展平台。政府推出的一揽子投资激励措施，包括税收优惠、外汇自由流动以及外资全资持股政策，极大激发了国际投资者的信心。

        城市规划专家表示，随着金边轻轨规划、新国际机场枢纽工程及环城高速路网的全面落地，金边的城市承载力和商业吸引力正呈指数级增长。未来，金边将继续发挥区域经济引擎作用，推动柬埔寨经济高质量可持续发展。
      `,
    },
    {
      id: 'cam-zh-2',
      slug: 'sihanoukville-sez-attracts-new-investments-in-2026',
      lang: 'zh',
      category: '经济发展',
      categorySlug: 'cambodia',
      title: '西哈努克港经济特区2026年吸引重大新投资',
      excerpt: '全球电子与消费品制造龙头企业注资超4.5亿美元，大幅提升临港高附加值制造与现代物流能级。',
      date: '2026年9月11日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
      readTime: '3分钟阅读',
      author: {
        name: '孟索卡',
        role: '工业特派员',
      },
      content: `
        西哈努克港讯 — 西哈努克港经济特区（SSEZ）本周宣布多项重大跨国产业投资正式签约落地，来自亚洲与欧美多家知名制造业企业新增投资总额超4.5亿美元。这标志着特区在先进装备制造、绿色新能源组件及现代海运物流领域迈出关键一步。

        作为柬埔寨唯一的深水自由贸易走廊与沿海交通枢纽，西港特区凭借“一站式”行政审批、完善的自备热电联产管网及智能仓储设施，持续吸引全球供应链关键环节转移进驻。海关绿色通关通道的常态化运作，进一步降低了跨国企业的通关与仓储成本。

        特区负责人指出，依托金港高速公路的高效联通与深水码头扩建工程，西哈努克港经济特区正从传统的劳动密集型工业基地全面迈向以绿色智造为核心的现代化产业高地，为柬埔寨对外经贸合作筑牢桥头堡。
      `,
    },
    {
      id: 'cam-zh-3',
      slug: 'cambodia-tourism-board-launches-new-co-marketing-grant',
      lang: 'zh',
      category: '文化旅游',
      categorySlug: 'cambodia',
      title: '柬埔寨国家旅游局推出联合营销资助计划',
      excerpt: '政府出台多项文旅扶持政策，与国际主流旅行社展开战略协同，全面激活海外高品质入境游市场。',
      date: '2026年9月11日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_49_35-PM.png',
      readTime: '3分钟阅读',
      author: {
        name: '春万纳',
        role: '文旅专栏记者',
      },
      content: `
        暹粒讯 — 柬埔寨国家旅游局正式宣布设立首期数千万美元的“全球联合营销资助专项基金”，面向国际主流航空公司、海外组团旅行社及全球知名在线旅游平台（OTA）开放申请。该计划旨在以精准补贴机制，全面激活欧美及亚太主力客源市场的赴柬旅游需求。

        此次扶持计划重点倾斜于高品质研学体验、暹粒吴哥世界遗产深度文化探访、马德望高棉非遗手工艺工坊及豆蔻山脉生态科考探索路线。获得资助的国际合作伙伴将与柬埔寨本土精品酒店及民俗演艺团队深度协同，开发更具文化辨识度的深度定制旅游产品。

        旅游部主管官员在发布会上强调，柬埔寨正全面从传统的单一观光型旅游模式转向以高附加值、长停留时间、可持续环保为特征的品质文旅生态，让每一位远道而来的全球旅行者深刻感受千年生机盎然的高棉文明魅力。
      `,
    },
    {
      id: 'cam-zh-4',
      slug: 'cambodias-tvet-base-to-train-10000-skilled-talents-annually',
      lang: 'zh',
      category: '教育培训',
      categorySlug: 'cambodia',
      title: '柬埔寨TVET职业培训基地每年培养万名技术骨干',
      excerpt: '产教融合深入推进，柬埔寨职业技术培训基地加快孵化自动化、电子与精密制造骨干力量。',
      date: '2026年9月10日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_55_34-PM.png',
      readTime: '4分钟阅读',
      author: {
        name: '李真达',
        role: '教育与劳动力观察',
      },
      content: `
        金边讯 — 柬埔寨劳工与职业培训部举行国家现代技术与职业培训（TVET）旗舰基地扩建落成典礼。该基地拥有多栋配备国际顶尖工业自动化机器人、数控机床（CNC）及绿色光伏装调产线的综合实训楼，全面投用后每年将为全国重点产业园区输送逾万名合格技术骨干人才。

        基地与国内外30余家大型制造与科技企业签署了深度校企合作协议，全面推行“双元制”教学模式。学员在校期间即可进入企业自动化生产线进行实训轮岗，实现毕业证书与企业职业资格证书双向互认，确保了学员毕业即实现对口高薪就业。

        劳工部长在揭牌致辞中表示，高素质技能型人才是推动柬埔寨实现工业结构战略转型的核心支柱。国家将持续加大职业教育财政投入，构建产学研一体化人才培育高地，为国家迈向高收入制造业强国注入强劲青春动能。
      `,
    },
    {
      id: 'cam-zh-5',
      slug: 'new-road-projects-to-boost-regional-connectivity',
      lang: 'zh',
      category: '基础设施',
      categorySlug: 'cambodia',
      title: '新路网重大工程全面推进 赋能区域互联互通',
      excerpt: '高速公路与省际干线协同升级，显著缩短主要经济走廊与深水物流港间的货运周转时间。',
      date: '2026年9月9日',
      image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: 'CICE基建组',
        role: '深度报道',
      },
      content: `
        金边讯 — 柬埔寨公共工程与运输部正式对外公布国家骨干路网现代化升级推进规划。规划聚焦打通连接首都金边、沿海经济特区以及与泰国、越南接壤核心口岸的多条高等级快速通道与立交枢纽工程，全面破除制约大宗商品高效中转的交通瓶颈。

        根据工程方案，新路网工程涵盖升级多条国道干线为双向四车道沥青混凝土路面，并配套建设智能交通监控系统与绿色服务区。这些骨干动脉的贯通将显著压缩干线货运运输时间，预计整体区域物流周转成本将降低约18%至25%。

        交通规划专家评价称，四通八达的现代化陆路物流网络不仅大幅提升了柬埔寨本土农产品与出口工业品的市场响应速度，更将柬埔寨紧密融入大湄公河次区域多式联运大循环，对赋能乡村振兴与区域平衡协调发展具有深远战略意义。
      `,
    },
  ],

  world: [
    {
      id: 'world-zh-1',
      slug: 'global-economic-growth-shows-renewed-momentum',
      lang: 'zh',
      category: '国际',
      categorySlug: 'world',
      title: '全球经济增长展现复苏新动能',
      excerpt: '国际金融机构积极评估主要贸易体消费韧性与流动性改善，新兴市场表现尤为突出。',
      date: '2026年9月12日',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '王敏学',
        role: '国际金融特派员',
      },
      content: `
        新加坡 / 华盛顿 — 国际货币与多边金融机构最新评估报告显示，2026年下半年全球贸易总额与跨境投资活跃度呈现出强劲复苏动能。随着主要央行货币紧缩周期逐步平稳着陆，全球流动性环境进一步宽松，企业中长期资本支出计划加快落地。

        亚洲与新兴经济体成为引领此轮经济增长的核心增长极。东盟各主要成员国凭借稳健的宏观财政结构、年轻的技术劳动力蓄水池以及互联互通的供应链网络，在绿色装备制造、半导体封测及数字服务出口等前沿赛道上跑出了令人瞩目的加速度。

        与会经济学家指出，多边贸易协定的红利释放和区域本币结算机制的普及，有效抵御了外部汇率波动的冲击。展望下阶段，深化区域产业协同分工与数字通关便利化，将继续为全球经济注入稳定可靠的长期确定性。
      `,
    },
    {
      id: 'world-zh-2',
      slug: 'asean-strengthens-regional-cooperation',
      lang: 'zh',
      category: '国际',
      categorySlug: 'world',
      title: '东盟持续深化区域全方位务实合作',
      excerpt: '成员国再次确认深化区域经济一体化、本币结算互联互通及维护多边贸易机制的共同承诺。',
      date: '2026年9月11日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
      readTime: '4分钟阅读',
      author: {
        name: '柯素美',
        role: '东盟观察员',
      },
      content: `
        金边讯 — 东盟各国外长与经贸高官会议圆满完成既定议程并发表联合声明。各方重申东盟在维护亚太地区和平稳定、促进共同繁荣中的中心地位，一致同意加快推进更高水平的区域经济一体化进程。

        会议重点磋商了数字经济框架协定（DEFA）落地细节与区域快速通关标准，力争在2026年实现东盟十国二维码互认结算全覆盖。这一历史性跨越将大幅降低跨国微型企业与中小商户的跨境交易汇兑损耗。

        柬埔寨代表团在发言中强调，包容性增长是东盟不可动摇的基石。东盟将继续坚定维护开放型多边贸易体系，以对话化解分歧，以合作共享红利，携手开创区域命运共同体崭新局面。
      `,
    },
    {
      id: 'world-zh-3',
      slug: 'major-powers-seek-common-ground-on-global-challenges',
      lang: 'zh',
      category: '国际',
      categorySlug: 'world',
      title: '主要大国就全球共同挑战寻求广泛共识',
      excerpt: '多边代表团就国际航运安全、粮农供应链保障及绿色转型机制展开建设性深入对话。',
      date: '2026年9月11日',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
      readTime: '5分钟阅读',
      author: {
        name: '雷大卫',
        role: '全球智库特约评论员',
      },
      content: `
        日内瓦 — 高级别多边国际战略对话在万国宫顺利闭幕。来自全球主要经济体及新兴发展中大国的代表团围绕保障国际航运通道畅通、全球粮农产业链韧性及绿色能源技术公平转移等议题展开了务实深入的磋商。

        各方在联合公报中明确，面对气候多变性与公共卫生等跨国界非传统安全考验，任何单边保护主义均无益于解决结构性危机。唯有坚守国际法与联合国宪章宗旨，重塑多边信任，才能守护全球产业链安全平稳运行。

        国际社会对本次会议达成的务实成果表示热烈赞赏。多国代表期待各方将对话承诺尽快转化为援助欠发达国家应对极端气候和饥饿危机的专项基金与技术扶持方案。
      `,
    },
    {
      id: 'world-zh-4',
      slug: 'climate-action-becomes-central-to-global-agenda',
      lang: 'zh',
      category: '国际',
      categorySlug: 'world',
      title: '气候行动成为全球治理核心议程',
      excerpt: '全球气候峰会确立绿色金融新援助机制，加速推动清洁可再生能源技术普惠发展。',
      date: '2026年9月10日',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '罗艾伦',
        role: '生态与可持续发展组',
      },
      content: `
        巴黎 — 联合国全球气候行动特别峰会在巴黎圆满闭幕。来自近百个国家的环境部门主管官员与多边金融机构签署了新一期“全球绿色繁荣倡议”，承诺设立数百亿美元规模的专项优惠资金，定向支持全球南方国家发展清洁能源。

        会议强调，加速光伏发电、储能电池与智慧微电网在热带及内陆发展中国家的规模化应用，是实现《巴黎协定》既定温控目标的最有效路径。绿色技术转让不应设置人为贸易壁垒，而应成为各方共赢的新型生产力引擎。

        国际非政府组织代表评价指出，该机制确立了更加务实公正的气候融资补偿规则，将有效赋能东南亚等脆弱生态区域提升海岸防灾能力与水资源调度水平，共同筑牢人类绿色家园。
      `,
    },
    {
      id: 'world-zh-5',
      slug: 'innovation-drives-new-opportunities-worldwide',
      lang: 'zh',
      category: '国际',
      categorySlug: 'world',
      title: '科技创新为全球发展带来广阔新机遇',
      excerpt: '人工智能算法、绿色低碳装备和智慧物流加速融合，为全球数字贸易提供强大新引擎。',
      date: '2026年9月9日',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop',
      readTime: '3分钟阅读',
      author: {
        name: '佐藤健二',
        role: '数字科技前沿',
      },
      content: `
        东京 / 伦敦 — 最新发布的全球科技趋势年度报告指出，以生成式人工智能、绿色氢能装备与高通量卫星互联网为代表的前沿科技正在重构全球商业运行底座。科技创新已从实验室单点突破迈向全要素、跨产业深度赋能阶段。

        数字物流骨干网的大规模部署，让内陆中小企业能够以极低边际成本对接全球跨境电商大平台。智慧农业传感技术与无人作业机的结合，更大幅提升了广大发展中国家的每亩单产与防灾耐受力。

        多位硅谷与亚洲科技领军者共同倡议，科技向善应贯穿创新研发始终。各国唯有打破技术封锁壁垒、鼓励开放开源生态，才能让数字科技红利普惠全球数十亿普通劳动者。
      `,
    },
  ],

  business: [
    {
      id: 'biz-zh-1',
      slug: 'foreign-investment-fuels-cambodias-economic-growth',
      lang: 'zh',
      category: '商业',
      categorySlug: 'business',
      title: '外商直接投资强劲赋能柬埔寨经济高质量增长',
      excerpt: '制造业、绿色基础设施与智慧港口领域外资持续涌入，夯实王国宏观经济增长基石。',
      date: '2026年9月12日',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '沈赞图',
        role: '商业财经主编',
      },
      content: `
        金边讯 — 柬埔寨发展理事会（CDC）官方统计通报显示，2026年前三季度柬埔寨吸收外商直接投资（FDI）协议金额及到位资金均实现同比两位数稳健跃升，投资领域呈现显著的高端化、绿色化升级导向。

        来自亚洲、欧洲和北美的高科技企业纷纷重资投建自动化智能制造基地、绿色冷链仓储网络和现代化深水物流泊位。柬埔寨稳定的政治社会大局、高度自由便利的资本流通体制以及清晰明朗的税收激励政策，成为吸引外商长期驻留的核心磁力。

        经济学者在解读时指出，外资结构的持续优化正直接带动本土配套供应链与高素质产业工程师队伍成长，为柬埔寨加快融入全球高端制造价值链筑牢坚实实体根基。
      `,
    },
    {
      id: 'biz-zh-2',
      slug: 'chinese-brands-see-growing-opportunities-in-cambodia',
      lang: 'zh',
      category: '商业',
      categorySlug: 'business',
      title: '中国品牌深度布局柬埔寨市场迎来广阔商机',
      excerpt: '知名新能源汽车、智能家电与数智零售企业纷纷在金边设立区域体验中心与供应链枢纽。',
      date: '2026年9月11日',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '李伟',
        role: '商贸投资记者',
      },
      content: `
        金边讯 — 随着中柬自贸协定与《区域全面经济伙伴关系协定》（RCEP）红利深度释放，越来越多的中国领先品牌将柬埔寨视作拓展东南亚蓝海大市场的战略跳板。新能源乘用车、智能物联网家电及数智化餐饮连锁在首都金边与沿海中心城市接连揭幕旗舰店。

        中资汽车制造与充电桩基础设施企业正携手柬埔寨本土能源企业，在主要国道与城际高速公路沿线布局大功率快充网络，有力响应了柬埔寨国家绿色交通减碳倡议。

        中国总商会代表表示，中国品牌在柬埔寨不再仅是商品输出，而是深度融入本土社群，通过技术培训、本地化用工与共建供应链，切实为柬埔寨消费者创造高品质美好生活体验。
      `,
    },
    {
      id: 'biz-zh-3',
      slug: 'cambodias-manufacturing-sector-expands-further',
      lang: 'zh',
      category: '商业',
      categorySlug: 'business',
      title: '柬埔寨先进制造业规模持续扩大与产业升级',
      excerpt: '精密电子接插件、汽车零配件及光伏组件产线不断投产，工业出口结构呈现多元化格局。',
      date: '2026年9月11日',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '仁索瓦纳',
        role: '工业与制造组',
      },
      content: `
        实居省讯 — 柬埔寨先进制造业版图正迎来跨越式革新。在国家产业多元化政策引导下，非服装纺织类高端制造业产值已连续三个季度保持高位上扬，展现出极强的工业抗波动韧性。

        在实居省与干拉省各大新兴工业园区，新建成的多条全自动SMT贴片产线与太阳能高效光伏组件组装线相继点火试产。这些工厂全面采用国际工业4.0智能控制标准，所生产的高精零配件直供东盟及欧美头部消费电子品牌。

        行业商会负责人指出，完善的绿色电力直供体系与健全的职业工匠培训通道，使柬埔寨在承接全球供应链梯度转移中脱颖而出，为迈向区域现代先进工业基地积蓄深厚底气。
      `,
    },
    {
      id: 'biz-zh-4',
      slug: 'smes-drive-new-momentum-in-local-economy',
      lang: 'zh',
      category: '商业',
      categorySlug: 'business',
      title: '中小微企业持续激发本土实体经济新活力',
      excerpt: '普惠金融信贷扶持与数字化财税工具落地，助力全国本土企业拓展境内外大市场。',
      date: '2026年9月10日',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      readTime: '3分钟阅读',
      author: {
        name: '碧波芭',
        role: '中小微企业特派员',
      },
      content: `
        金边讯 — 占柬埔寨企业总数逾九成的中小微企业（SMEs）正在迎来前所未有的制度性利好与数字化成长机遇。柬埔寨中小企业银行联合商业金融机构推出的低息担保信贷计划，累计惠及数千家基层实体创客。

        从马德望的现代化芒果干与胡椒精深加工厂，到金边青年创办的跨境数字化设计工作室，本土创业团队借助线上财税记账云平台和社交电商直播，大幅降低了品牌出海的运营成本与门槛。

        商业部高级官员在调研中表示，政府将进一步简化企业行政审批流程，深化知识产权保护与质量认证辅导，让充满蓬勃生命力的草根创新力量成为支撑国家繁荣的坚韧支柱。
      `,
    },
    {
      id: 'biz-zh-5',
      slug: 'digital-economy-opens-new-prospects',
      lang: 'zh',
      category: '商业',
      categorySlug: 'business',
      title: '数字经济蓬勃发展开启产业转型全新前景',
      excerpt: '以巴孔系统为依托的移动支付全场景覆盖，推动商业流通与跨境电商进入快车道。',
      date: '2026年9月9日',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '成利提',
        role: '金融科技专栏',
      },
      content: `
        金边讯 — 柬埔寨国家银行主导的“巴孔”（Bakong）区块链支付系统结算网络再度迎来重要升级。从街头果蔬摊档到全国连锁大型商超，无现金聚合二维码已全面融入柬埔寨民众日常生活的肌理。

        伴随跨境金融科技合作的不断深化，柬埔寨巴孔系统已实现同中国银联、泰国PromptPay、越南VietQR等周边主要支付网络无缝跨国即时直联，境外游客入柬消费可实现一秒扫码秒结。

        金融科技研究机构指出，普惠高效的数字支付基础设施极大降低了资金周转成本，有力激活了民间消费潜力，并为柬埔寨全面构筑现代智慧数字商业帝国打下了极为坚实的底层数字基座。
      `,
    },
  ],

  diplomacy: [
    {
      id: 'dip-zh-1',
      slug: 'cambodia-and-china-comprehensive-strategic-partnership',
      lang: 'zh',
      category: '外交',
      categorySlug: 'diplomacy',
      title: '柬中携手深化全方位全面战略合作伙伴关系',
      excerpt: '“钻石六边”合作架构走深走实，双方签署涵盖绿色能源、现代农业与数字人才培训多项协定。',
      date: '2026年9月12日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
      readTime: '5分钟阅读',
      author: {
        name: 'CICE外交报道组',
        role: '高级外交记者',
      },
      content: `
        北京 / 金边 — 柬埔寨与中国高级别政府代表团在北京举行深入会晤，双方高度评价两国历经国际风云考验的“铁杆”友谊，一致同意高质量推进中柬“钻石六边”合作架构走深走实。

        会谈期间，两国代表共同见证签署了涵盖现代农业科技联合实验室、清洁能源跨省互联网络、数字青年技能培训基地等多项重大双边合作备忘录。双方表示将进一步推动高质量共建“一带一路”，为地区和平与长远稳定作出更大贡献。

        柬方官员在记者会上表示，中柬友好互利共赢成果切切实实造福了两国广大人民，两国在多边舞台上的紧密协同，为发展中国家联合自强树立了生动典范。
      `,
    },
    {
      id: 'dip-zh-2',
      slug: 'asean-advances-regional-dialogue-and-cooperation',
      lang: 'zh',
      category: '外交',
      categorySlug: 'diplomacy',
      title: '东盟推进区域多边对话与战略互信建设',
      excerpt: '地区各国外长与对话伙伴围绕维护区域和平架构、灾害应急救援及经贸协定执行深化沟通。',
      date: '2026年9月11日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
      readTime: '4分钟阅读',
      author: {
        name: '毛占提',
        role: '东盟多边事务',
      },
      content: `
        金边讯 — 东盟常设机制高级别研讨会在金边隆重举行。来自东盟成员国及主要对话伙伴国的高级外交官齐聚一堂，围绕应对复杂国际格局变化、强化区域防灾减灾应急联动等议题展开战略磋商。

        与会各方达成高度共识，必须坚决捍卫东盟中心地位，恪守协商一致原则与和平解决争端规范，确保东南亚始终保持开放、包容与繁荣的发展态势，避免陷入地缘阵营对抗漩涡。

        柬埔寨外交官员在闭幕致辞中强调，柬埔寨将一如既往以开放友善的姿态发挥桥梁纽带作用，积极践行多边主义，为构建持久和平与共同繁荣的东盟家园贡献智慧力量。
      `,
    },
    {
      id: 'dip-zh-3',
      slug: 'cambodia-plays-active-role-in-international-affairs',
      lang: 'zh',
      category: '外交',
      categorySlug: 'diplomacy',
      title: '柬埔寨在国际事务中发挥积极建设性作用',
      excerpt: '从联合国维和行动到国际地雷清除援助，柬埔寨始终致力于守护全球和平与人道主义事业。',
      date: '2026年9月11日',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '达拉威烈',
        role: '国际维和与外交',
      },
      content: `
        纽约 / 金边 — 联合国大会全体会议期间，多国常驻代表积极肯定柬埔寨在联合国维和行动及国际人道主义援助领域的突出贡献。近二十年来，柬埔寨已累计向中东、非洲等维和任务区派出数千名训练有素的工程工兵与排雷专业官兵。

        曾饱受战乱与地雷之苦的柬埔寨，不仅在本土排雷事业上取得了举世公认的辉煌突破，更主动向战乱地区受援国倾囊相授先进扫雷排爆技术，生动诠释了从“受援国”向“全球和平贡献国”的伟大转变。

        国际维和事务高级官员称赞，柬埔寨以历史经验为镜鉴，始终秉持和平共处五项原则，是促进南南合作与推动国际社会互信对话的坚定践行者。
      `,
    },
    {
      id: 'dip-zh-4',
      slug: 'high-level-talks-highlight-development-goals',
      lang: 'zh',
      category: '外交',
      categorySlug: 'diplomacy',
      title: '高层会晤凝聚发展共识 聚焦可持续发展目标',
      excerpt: '政府代表团与国际多边开发机构深度对接，将国际资源紧密服务于国家五角战略落地。',
      date: '2026年9月10日',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '聂卡良',
        role: '发展外交观察员',
      },
      content: `
        金边讯 — 柬埔寨王国政府同联合国开发计划署（UNDP）、亚洲开发银行等多家国际多边发展伙伴举行高层战略对接峰会。会议紧密围绕将外部发展援助精准导入柬埔寨“五角战略”第一阶段规划展开深层研讨。

        多边代表团一致决定将后续支持重点集中于绿色乡村微电网普及、安全清洁饮用水管网下沉、以及基础卫生防疫站点的数智化升级改造等重点民生工程，确保发展红利更广泛均衡地普惠农村基层百姓。

        国际组织驻柬代表赞赏柬埔寨政府高度务实的施政理念与透明高效的项目执行能力，表示将持续加大资金技术支持，共同助力柬埔寨早日跨入高收入国家门槛。
      `,
    },
    {
      id: 'dip-zh-5',
      slug: 'cambodia-deepens-engagement-with-global-partners',
      lang: 'zh',
      category: '外交',
      categorySlug: 'diplomacy',
      title: '柬埔寨多维拓展与全球伙伴的经贸与人文交流',
      excerpt: '面向欧洲、中东及美洲的经济外交活动多点开花，大力拓展特色农产品与高附加值产品出海渠道。',
      date: '2026年9月9日',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '杜索培',
        role: '国际商贸外交',
      },
      content: `
        金边讯 — 柬埔寨外交与国际合作部全面提速“经济外交战略行动”，各驻外使领馆积极化身招商推介先锋，在欧洲、中东及美洲主要经贸枢纽城市高频次举办多场特色高棉产业与文旅推广峰会。

        推介活动重点促成柬埔寨地理标志（GI）香米、贡布胡椒、腰果原浆等高附加值有机农产品直供国际高端商超体系，并吸引中东高端投资基金对柬埔寨生态文旅休闲综合体开展实地考察。

        外交部官员指出，多元化全球商贸网络的铺展，不仅有效增强了国家经济抵御单一外部市场波动的韧性，更将柬埔寨古老厚重的人文魅力与开放创新的现代风貌展现于世界舞台。
      `,
    },
  ],

  insight: [
    {
      id: 'ins-zh-1',
      slug: 'a-deeper-look-at-cambodias-development-path',
      lang: 'zh',
      category: '观点',
      categorySlug: 'insight',
      title: '深入解析柬埔寨国家现代化发展的新路径',
      excerpt: '深度剖析王国人口年轻化红利、城镇化扩张节奏及绿色工业化转型的制度性底层逻辑。',
      date: '2026年9月12日',
      image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop',
      readTime: '6分钟阅读',
      author: {
        name: '洪本腾博士',
        role: '宏观经济高级研究员',
      },
      content: `
        金边 — 过去二十五年来，柬埔寨始终保持着东南亚最具活力的经济增速与减贫成就。今天，站在迈向中等偏上收入国家的关键历史节点上，柬埔寨正在以极其坚定的战略决心重塑产业与社会结构。

        庞大且年轻的人口中位数（30岁以下）、快速普及的高等职业技术教育以及四通八达的骨干路网，正在为高附加值工业化转型铺平坦途。从劳动密集型加工升级为技术资本密集型制造，是时代发展的必由之路。

        智库学者指出，持续巩固法制化营商环境、保持金融与资本市场的透明度，并筑牢绿色清洁能源供应链底座，将确保柬埔寨在未来二十年的区域竞争中牢牢掌握主动权。
      `,
    },
    {
      id: 'ins-zh-2',
      slug: 'opportunities-and-challenges-in-a-changing-world',
      lang: 'zh',
      category: '观点',
      categorySlug: 'insight',
      title: '深刻把握变局中的发展机遇与全球战略应对',
      excerpt: '在多极化全球秩序中，小型开放经济体唯有坚守多边主义与开放融通，方能转危为机。',
      date: '2026年9月11日',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
      readTime: '5分钟阅读',
      author: {
        name: '戴维斯教授',
        role: '地缘战略特约评论员',
      },
      content: `
        金边 — 当今世界正在经历百年未有之大变局，全球贸易供应链加速重组与多极化格局演变交织并存。在此时代背景下，小型开放型经济体如何保持自身战略定力，成为国际战略界热议的课题。

        柬埔寨以灵活务实的经济外交为导向，拒绝陷入非此即彼的零和选边，而是积极将自身塑造成连接区域各主要经济体的中立物流枢纽、绿色产业高地与多元文明对话的祥和港湾。

        坚守国际公认的法治多边规则，紧紧依托东盟自贸大网络与全球市场建立多点联结，将为柬埔寨在变幻莫测的国际风浪中行稳致远提供最强大的战略护城河。
      `,
    },
    {
      id: 'ins-zh-3',
      slug: 'sustainable-growth-for-a-brighter-future',
      lang: 'zh',
      category: '观点',
      categorySlug: 'insight',
      title: '坚持绿色可持续发展 共创包容性繁荣未来',
      excerpt: '将生态保护红线、循环经济理念与清洁能源大电网建设有机融合，探索新型发展范式。',
      date: '2026年9月11日',
      image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=800&auto=format&fit=crop',
      readTime: '5分钟阅读',
      author: {
        name: '瓦塔纳',
        role: '可持续发展首席学者',
      },
      content: `
        金边 — 长期以来，“先污染后治理”的传统发展模式在发展中国家备受争议。然而，在当今东南亚的现代化进程中，追求高速经济增长与恪守严格生态红线已不再是非此即彼的对立关系。

        柬埔寨在工业园区顶层设计中大力普及分布式光伏屋顶、建设中水回用生态湿地，并严禁高能耗落后产能准入。这些极具前瞻性的环保举措，不仅没有拖慢工业步伐，反而帮助本土出口企业规避了国际绿色碳关税壁垒。

        守护好湄公河流域的青山绿水、探索生物多样性碳汇经济，正是柬埔寨留给子孙后代最珍贵的发展红利与文明财富。
      `,
    },
    {
      id: 'ins-zh-4',
      slug: 'education-empowers-cambodias-next-generation',
      lang: 'zh',
      category: '观点',
      categorySlug: 'insight',
      title: '优质教育全面赋能 培育柬埔寨未来栋梁之才',
      excerpt: '推进STEM通识教育普及，深化高校产学研协同育人，筑牢知识型现代经济基石。',
      date: '2026年9月10日',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
      readTime: '4分钟阅读',
      author: {
        name: '林玛雅博士',
        role: '教育政策高级顾问',
      },
      content: `
        金边 — 国家的长久昌盛始于讲台，社会的创新动力源自课堂。近年来柬埔寨在基础教育与高等技术教育领域大刀阔斧的改革，正在彻底重塑年轻学子的精神风貌与职业前景。

        将人工智能通识、机器人编程与多语种熟练运用深度纳入国家标准教学大纲，让偏远省份的中小学生也能通过云端同步享有首都最顶尖的师资辅导。同时，大学与跨国龙头企业的深度产教融合，更让技术实训无缝衔接市场一线。

        让每一个柬埔寨年轻人都拥有追逐梦想的技能与开阔的全球视野，正是国家跨入知识型经济强国最坚不可摧的动力源泉。
      `,
    },
    {
      id: 'ins-zh-5',
      slug: 'people-and-stories-from-across-cambodia',
      lang: 'zh',
      category: '观点',
      categorySlug: 'insight',
      title: '记录时代脉动：行走在柬埔寨大地的平凡与精彩',
      excerpt: '生动记录来自基层手工艺人、青年创客与生态守护者的奋斗历程，感受蓬勃的高棉生机。',
      date: '2026年9月9日',
      image: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=800&auto=format&fit=crop',
      readTime: '5分钟阅读',
      author: {
        name: '柯拉敏',
        role: '人文纪实特稿主笔',
      },
      content: `
        暹粒 / 马德望 — 在宏大的宏观经济图景与繁华的城市天际线之下，柬埔寨最动人的脉搏始终流淌在千万普通劳动者坚韧不拔的奋斗日常之中。

        在茶胶省的传统织布工坊，年轻一代手工艺人通过改良千年高棉传统纹样，让天然手工真丝华丽亮相巴黎时尚周；在磅湛省的乡村果园，退伍青年利用物联网滴灌技术带领乡亲打赢脱贫增收攻坚战。

        用真实的镜头与真诚的笔触记录这些扎根大地的鲜活生命，不仅是对高棉坚毅精神的深情致敬，更是对时代前进步伐最生动、最温润的历史注脚。
      `,
    },
  ],

  'chinese-news': [
    {
      id: 'wp-482-zh',
      slug: 'china-cambodia-belt-and-road-high-quality',
      lang: 'zh',
      category: '中文新闻',
      categorySlug: 'chinese-news',
      title: '中柬携手推动高质量共建“一带一路” 开启命运共同体新篇章',
      excerpt: '中柬双方表示，将深化各领域务实合作，推动高质量共建“一带一路”，为地区和平、稳定与共同发展作出更大贡献。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
      readTime: '4分钟阅读',
      author: {
        name: 'CICE中文采编部',
        role: '时政主笔',
      },
      content: `
        金边讯 — 中柬双边合作联委会高级别工作会晤在金边举行。双方一致表示，将继续紧密依托全面战略合作伙伴关系，携手推动高质量共建“一带一路”，不断充实中柬“钻石六边”合作内涵。

        双方重点回顾了近年来金港高速、金边新国际机场以及西哈努克港特区等标杆性重点工程带来的显著社会经济效益。双方商定将进一步加大清洁能源转型、农业深加工产业园及青年数字技能培训等新领域协同落地力度。

        中方代表表示，中柬友好历久弥坚，愿同柬方同甘共苦、携手并进，推动构建新时代全方位、高质量、高水平的中柬命运共同体。
      `,
    },
    {
      id: 'wp-485-zh',
      slug: 'cambodia-asean-economic-integration',
      lang: 'zh',
      category: '中文新闻',
      categorySlug: 'chinese-news',
      title: '柬埔寨积极参与东盟经贸会议 推动区域经济一体化',
      excerpt: '柬埔寨在东盟相关会议上强调，将继续加强与东盟各国的务实合作，共同应对外部挑战，推动可持续发展。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
      readTime: '4分钟阅读',
      author: {
        name: 'CICE经贸报道组',
        role: '东盟经贸记者',
      },
      content: `
        金边讯 — 东盟经贸合作部长级特别会议以线上线下相结合方式顺利举办。柬埔寨商务部高级代表团在会上作专题主旨发言，呼吁东盟各成员国在当前全球贸易复苏的关键期进一步破除隐形贸易壁垒。

        会议就促进东盟境内区域原产地累加规则全面落实、升级东盟单窗口数字化货物通关体系达成了明确时间表。柬埔寨代表团指出，区域一体化的红利必须惠及广大微型中小企业，促进包容平衡发展。

        柬方表示，作为东盟大家庭积极进取的关键成员，柬埔寨将继续坚定做区域和平的稳定器与多边经济合作的促进者。
      `,
    },
    {
      id: 'wp-498-zh',
      slug: 'cambodia-un-multilateralism',
      lang: 'zh',
      category: '中文新闻',
      categorySlug: 'chinese-news',
      title: '柬埔寨在联合国发声 呼吁全球共同应对气候变化挑战',
      excerpt: '柬埔寨坚持多边主义，愿与国际社会一道，推动绿色发展与可持续未来。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_18_04-PM.png',
      readTime: '4分钟阅读',
      author: {
        name: '联合国特派组',
        role: '多边观察员',
      },
      content: `
        纽约 — 第八十一届联合国大会气候变化高级别圆桌会议在纽约总部举行。柬埔寨政府高级代表在发言中重申，柬埔寨坚定支持以联合国为核心的国际多边体系，呼吁国际社会加大对发展中国家的绿色资金支持。

        柬方指出，作为对气候变化高度敏感的国家，柬埔寨已全面制定国家应对气候变化战略计划，在湄公河水资源调度、红树林湿地生态保育及可再生能源电网并网方面取得了显著治理成效。

        联合国多边官员高度赞扬柬埔寨展现的全球担当，认为柬埔寨的发展实践证明，欠发达经济体完全有能力在加快发展的同时兼顾生态安全。
      `,
    },
    {
      id: 'wp-506-zh',
      slug: 'cambodia-industry-investment-surge',
      lang: 'zh',
      category: '中文新闻',
      categorySlug: 'chinese-news',
      title: '柬埔寨汽车产业迎来新机遇 多家国际企业加快布局',
      excerpt: '随着投资环境持续优化，越来越多国际企业看好柬埔寨汽车及零部件产业的增长潜力，相关项目正在加速落地。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/802032215_2911760719164575_3287661511473095817_n.png-7-edited-1.jpeg',
      readTime: '4分钟阅读',
      author: {
        name: '汽车与重工专栏',
        role: '行业分析师',
      },
      content: `
        金边讯 — 柬埔寨汽车与零配件制造行业正成为国际外资角逐的最新热点。来自中国、日本、韩国的多家汽车整车与关键零部件跨国巨头近期加速了在干拉省与实居省的工业厂区投建步伐。

        得益于柬埔寨对新能源电动汽车零配件进口的关税减免优惠政策，本地化装配产线的生产综合成本显著优于周边国家，为整车出口东盟自由贸易圈创造了绝佳竞争力。

        柬埔寨汽车行业商会表示，随着整车组装与电池包模组产能释放，将带动数百家本地小微机电配套企业协同繁荣，创造数万个高技术就业岗位。
      `,
    },
    {
      id: 'wp-509-zh',
      slug: 'cambodia-tourism-culture-initiatives',
      lang: 'zh',
      category: '中文新闻',
      categorySlug: 'chinese-news',
      title: '柬埔寨推出新旅游推广计划 吸引更多国际游客',
      excerpt: '柬埔寨政府发布新一轮旅游推广计划，重点提升旅游基础设施和服务质量，进一步打造多元化、可持续的旅游目的地。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
      readTime: '4分钟阅读',
      author: {
        name: '文旅与生活方式组',
        role: '文旅记者',
      },
      content: `
        金边讯 — 柬埔寨旅游部正式对外启动面向全球旅游市场的“奇迹王国·多元探索”联合推广计划。该计划旨在改变传统单一古迹观光模式，向全球推介涵盖沿海高端海岛生态游、东北部雨林探险及高棉非遗深度研学等全域文旅体验。

        为便利国际游客入出境，柬埔寨全面优化了电子签证（e-Visa）落地核验速度，并在主要机场设立了全天候国际游客多语种咨询与综合服务保障中心。

        旅游部长表示，柬埔寨正以更加热情、安全、高质的全新姿态迎候全球八方宾客，力争今年实现国际入境游客人次同比强劲增长。
      `,
    },
    {
      id: 'wp-520-zh',
      slug: 'cambodia-economic-stimulus-measures',
      lang: 'zh',
      category: '中文新闻',
      categorySlug: 'chinese-news',
      title: '柬埔寨政府推出新一轮经济刺激措施 推动高质量增长',
      excerpt: '柬埔寨政府宣布推出新一轮经济刺激措施，重点支持基础设施、制造业和中小微企业，增强经济韧性与可持续发展。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-08_58_41-PM.png',
      readTime: '4分钟阅读',
      author: {
        name: '宏观政策报道组',
        role: '财经首席记者',
      },
      content: `
        金边讯 — 柬埔寨王国政府内阁办公厅正式批准公布新一轮综合性经济提振一揽子政策。此次政策工具箱涵盖扩大重点省道桥梁基建财政贴息、设立中小企业数字化升级引导基金等多项务实举措。

        新政明确提出对从事绿色高新技术制造、先进农业加工的新设投资项目给予为期数年的阶段性企业所得税优惠，并由国家信用担保机构为微型初创商户提供灵活低息流动性支持。

        财经界普遍认为，此轮经济刺激措施立足当前、着眼长远，精准聚焦实体经济痛点，将全面激发市场主体内生动力，护航国家高质量繁荣发展。
      `,
    },
  ],
};

/* CHINESE PORTAL DATA */
export const CHINESE_HERO_ARTICLE: Article = {
  id: 'zh-hero-tourism',
  slug: 'cambodia-accelerates-tourism-recovery-international-destination',
  lang: 'zh',
  category: '中文新闻·焦点',
  categorySlug: 'chinese-news',
  title: '柬埔寨加快推动旅游复苏 打造更具竞争力的国际目的地',
  excerpt: '柬埔寨政府发布新一轮旅游推广计划，重点提升旅游基础设施和服务质量，进一步打造多元化、可持续的旅游目的地。',
  date: '2026年9月21日',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  readTime: '5分钟阅读',
  content: `
    金边讯 — 柬埔寨王国政府公布新一轮旅游复苏升级战略蓝图。根据旅游部发布的文件，柬埔寨将聚焦基础设施配套提质、海外客源地精准营销及生态文旅创新三大维度，全面提升国家旅游品牌的全球吸引力。

    在暹粒吴哥古迹保护区，多项数字化游客引导和绿色低碳接驳设施已投入试运行。旅游部高级官员表示：“我们正在把传统文化观光与现代高品质度假体验有机融合，让全球游客在感受千年高棉文明的同时，享受到世界级便利与安全保障。”

    与此同时，柬埔寨正加快同东盟及国际航司的直航航线拓展，预计年内将新增数条直飞国际枢纽城市航线，助力入境旅游市场实现全方位质的飞跃。
  `,
};

export const CHINESE_TOP_NEWS: Article[] = [
  {
    id: 'zh-top-1',
    rank: 1,
    slug: 'china-cambodia-belt-and-road-high-quality',
    lang: 'zh',
    category: '柬埔寨要闻',
    categorySlug: 'diplomacy',
    title: '中携手推动高质量共建“一带一路” 开启命运共同体新篇章',
    date: '2026年9月21日',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
    excerpt: '中東方表示,将深化各领域务实合作,推动高质量共建 “一带一路”,为地区和平、稳定与共同发展作出更大贡献。',
  },
  {
    id: 'zh-top-2',
    rank: 2,
    slug: 'cambodia-asean-economic-integration',
    lang: 'zh',
    category: '柬埔寨要闻',
    categorySlug: 'world',
    title: '柬埔寨积极参与东盟经贸会议 推动区域经济一体化',
    date: '2026年9月21日',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
    excerpt: '柬埔寨在东盟相关会议上强调,将继续加强与东盟各国的 务实合作,共同应对区迎挑战,推动可持续发展。',
  },
  {
    id: 'zh-top-3',
    rank: 3,
    slug: 'cambodia-un-multilateralism',
    lang: 'zh',
    category: '柬埔寨要闻',
    categorySlug: 'world',
    title: '柬埔寨在联合国发声 呼吁全球共同应对 气候变化挑战',
    date: '2026年9月21日',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_18_04-PM.png',
    excerpt: '柬埔申坚持多边主义,愿与国际社会一道,推动绿色 发展与可持未来。',
  },
  {
    id: 'zh-top-4',
    rank: 4,
    slug: 'cambodia-industry-investment-surge',
    lang: 'zh',
    category: '柬埔寨要闻',
    categorySlug: 'business',
    title: '柬埔寨汽车产业迎来新机遇 多家国际企业加快布局',
    date: '2026年9月21日',
    image: 'https://cice.news/wp-content/uploads/2026/09/802032215_2911760719164575_3287661511473095817_n.png-7-edited-1.jpeg',
    excerpt: '看投资环境拖線优化,越来越多国际企业看好柬埔寨汽 车及非部件产业的增长潜力,相关项目正在加速落地。',
  },
  {
    id: 'zh-top-5',
    rank: 5,
    slug: 'cambodia-economic-stimulus-measures',
    lang: 'zh',
    category: '柬埔寨要闻',
    categorySlug: 'cambodia',
    title: '柬埔寨政府推出新一轮经济刺激措施 推动高质量增长',
    date: '2026年9月21日',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-08_58_41-PM.png',
    excerpt: '柬埔寨政府近宣布推出新一轮经济刺激措施,重点支持 基础舱,制造业和中小企业,以增强经济性和可辨的发展。',
  },
];

export const CHINESE_SECTIONS = [
  {
    sectionTitle: '柬埔寨与中国',
    moreLink: '/zh/category/diplomacy',
    article: {
      id: 'zh-sec-1',
      slug: 'china-cambodia-belt-and-road-high-quality',
      title: '中携手推动高质量共建“一带一路” 开启命运共同体新篇章',
      excerpt: '中東方表示,将深化各领域务实合作,推动高质量共建 “一带一路”,为地区和平、稳定与共同发展作出更大贡献。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
      content: `
        中東方表示,将深化各领域务实合作,推动高质量共建 “一带一路”,为地区和平、稳定与共同发展作出更大贡献。
      `,
    },
  },
  {
    sectionTitle: '柬埔寨与东盟',
    moreLink: '/zh/category/world',
    article: {
      id: 'zh-sec-2',
      slug: 'cambodia-asean-economic-integration',
      title: '柬埔寨积极参与东盟经贸会议 推动区域经济一体化',
      excerpt: '柬埔寨在东盟相关会议上强调,将继续加强与东盟各国的 务实合作,共同应对区迎挑战,推动可持续发展。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
      content: `
        柬埔寨在东盟相关会议上强调,将继续加强与东盟各国的 务实合作,共同应对区迎挑战,推动可持续发展。
      `,
    },
  },
  {
    sectionTitle: '柬埔寨与世界',
    moreLink: '/zh/category/world',
    article: {
      id: 'zh-sec-3',
      slug: 'cambodia-un-multilateralism',
      title: '柬埔寨在联合国发声 呼吁全球共同应对 气候变化挑战',
      excerpt: '柬埔申坚持多边主义,愿与国际社会一道,推动绿色 发展与可持未来。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_18_04-PM.png',
      content: `
        柬埔申坚持多边主义,愿与国际社会一道,推动绿色 发展与可持未来。
      `,
    },
  },
  {
    sectionTitle: '产业与投资',
    moreLink: '/zh/category/business',
    article: {
      id: 'zh-sec-4',
      slug: 'cambodia-industry-investment-surge',
      title: '柬埔寨汽车产业迎来新机遇 多家国际企业加快布局',
      excerpt: '看投资环境拖線优化,越来越多国际企业看好柬埔寨汽 车及非部件产业的增长潜力,相关项目正在加速落地。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/802032215_2911760719164575_3287661511473095817_n.png-7-edited-1.jpeg',
      content: `
        看投资环境拖線优化,越来越多国际企业看好柬埔寨汽 车及非部件产业的增长潜力,相关项目正在加速落地。
      `,
    },
  },
  {
    sectionTitle: '旅游与文化',
    moreLink: '/zh/category/cambodia',
    article: {
      id: 'zh-sec-5',
      slug: 'cambodia-tourism-culture-initiatives',
      title: '柬埔寨推出新旅游推广计划 吸引更多国际游客',
      excerpt: '柬埔寨政府发布新一轮旅游推广计划,重点提升旅游基础设施 和服务质量,进一步打造多元化、可持续的旅游目的地。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
      content: `
        柬埔寨政府发布新一轮旅游推广计划,重点提升旅游基础设施 和服务质量,进一步打造多元化、可持续的旅游目的地。
      `,
    },
  },
  {
    sectionTitle: '柬埔寨',
    moreLink: '/zh/category/cambodia',
    article: {
      id: 'zh-sec-6',
      slug: 'cambodia-economic-stimulus-measures',
      title: '柬埔寨政府推出新一轮经济刺激措施 推动高质量增长',
      excerpt: '柬埔寨政府近宣布推出新一轮经济刺激措施,重点支持 基础舱,制造业和中小企业,以增强经济性和可辨的发展。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-08_58_41-PM.png',
      content: `
        柬埔寨政府近宣布推出新一轮经济刺激措施,重点支持 基础舱,制造业和中小企业,以增强经济性和可辨的发展。
      `,
    },
  },
];

export const CHINESE_OPINIONS = {
  featured: {
    title: '中柬合作的下一个十年：从“走近”到“走深”',
    date: '2026年9月10日',
    author: {
      name: '宋焕君',
      title: 'CICE News 主编',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    },
  },
  list: [
    {
      title: '东盟在全球格局中的新机遇',
      author: 'Dr. Sokpchanara',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: '柬埔寨制造业的升级路径',
      author: 'James Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: '旅游，让柬埔寨走向更大的世界',
      author: 'Lina Tan',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    },
  ],
};

// Helper function to find article by slug
export function getArticleBySlug(slug: string, lang: 'en' | 'zh' = 'en'): Article | undefined {
  if (lang === 'zh') {
    if (CHINESE_HERO_ARTICLE.slug === slug) return CHINESE_HERO_ARTICLE;

    for (const cat of Object.keys(CATEGORY_ARTICLES_ZH_MAP)) {
      const item = CATEGORY_ARTICLES_ZH_MAP[cat].find((a) => a.slug === slug);
      if (item) return item;
    }

    const allZh = [
      ...CHINESE_TOP_NEWS,
      ...CHINESE_PREVIEW_ARTICLES,
    ];
    const foundZh = allZh.find((a) => a.slug === slug);
    if (foundZh) return foundZh;

    for (const sec of CHINESE_SECTIONS) {
      if (sec.article.slug === slug) {
        return {
          ...sec.article,
          lang: 'zh',
          category: sec.sectionTitle,
          categorySlug: 'cambodia',
        };
      }
    }

    // Fallback to English if not found in Chinese
    if (HERO_ARTICLE_EN.slug === slug) return HERO_ARTICLE_EN;
    for (const cat of Object.keys(CATEGORY_ARTICLES_MAP)) {
      const item = CATEGORY_ARTICLES_MAP[cat].find((a) => a.slug === slug);
      if (item) return item;
    }
    const allEn = [
      ...SUB_GRID_ARTICLES_EN,
      ...SHOWCASE_ARTICLES_EN,
      ...MOST_READ_ARTICLES_EN,
    ];
    return allEn.find((a) => a.slug === slug);
  }

  // lang === 'en'
  if (HERO_ARTICLE_EN.slug === slug) return HERO_ARTICLE_EN;

  for (const cat of Object.keys(CATEGORY_ARTICLES_MAP)) {
    const item = CATEGORY_ARTICLES_MAP[cat].find((a) => a.slug === slug);
    if (item) return item;
  }

  const allSub = [
    ...SUB_GRID_ARTICLES_EN,
    ...SHOWCASE_ARTICLES_EN,
    ...MOST_READ_ARTICLES_EN,
  ];
  const found = allSub.find((a) => a.slug === slug);
  if (found) return found;

  // Fallback to Chinese if not found in English
  if (CHINESE_HERO_ARTICLE.slug === slug) return CHINESE_HERO_ARTICLE;
  for (const cat of Object.keys(CATEGORY_ARTICLES_ZH_MAP)) {
    const item = CATEGORY_ARTICLES_ZH_MAP[cat].find((a) => a.slug === slug);
    if (item) return item;
  }
  const allZhFallback = [
    ...CHINESE_TOP_NEWS,
    ...CHINESE_PREVIEW_ARTICLES,
  ];
  return allZhFallback.find((a) => a.slug === slug);
}
