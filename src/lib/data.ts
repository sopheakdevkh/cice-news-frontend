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
    date: 'Sep 10, 2026',
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
    date: 'Sep 9, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_55_34-PM.png',
    excerpt: 'Technical education accelerates nationwide industrial transition.',
  },
  {
    id: 'most-read-5',
    rank: 5,
    slug: 'phnom-penh-attracts-new-wave-of-investment-in-2026',
    lang: 'en',
    category: 'CAMBODIA',
    categorySlug: 'cambodia',
    title: 'Phnom Penh Attracts New Wave of Investment in 2026',
    date: 'Sep 8, 2026',
    image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-08_58_41-PM.png',
    excerpt: 'Urban modernization and tech start-up incubators ignite fresh capital infusions across commercial districts.',
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
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-08_58_41-PM.png',
      content: `
        Phnom Penh — The capital city of Cambodia has registered unprecedented capital inflow in commercial developments, technology startup accelerators, and modern service clusters.
        
        International development banks and private regional syndicates noted that Phnom Penh's strategic position at the heart of the Greater Mekong Subregion continues to make it a favored location for corporate regional headquarters.
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
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
    },
    {
      id: 'cam-3',
      slug: 'cambodia-tourism-board-launches-new-co-marketing-grant',
      lang: 'en',
      category: 'TOURISM',
      categorySlug: 'cambodia',
      title: 'Cambodia Tourism Board Launches New Co-Marketing Grant',
      excerpt: 'Initiative designed to promote sustainable ecotourism, heritage trails, and high-value cultural excursions.',
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_49_35-PM.png',
    },
    {
      id: 'cam-4',
      slug: 'cambodias-tvet-base-to-train-10000-skilled-talents-annually',
      lang: 'en',
      category: 'EDUCATION',
      categorySlug: 'cambodia',
      title: "Cambodia's TVET Base to Train 10,000 Skilled Talents Annually",
      excerpt: 'Public and private stakeholders celebrate first graduating class of high-tech manufacturing technicians.',
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_55_34-PM.png',
    },
  ],
  world: [
    {
      id: 'world-1',
      slug: 'asean-and-partners-seek-deeper-cooperation-in-a-changing-world',
      lang: 'en',
      category: 'WORLD',
      categorySlug: 'world',
      title: 'ASEAN and Partners Seek Deeper Cooperation in a Changing World',
      excerpt: 'Regional diplomats congregate in Phnom Penh to advance multilateral dialogue and sustainable supply chains.',
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
    },
    {
      id: 'world-2',
      slug: 'cambodia-and-china-strengthen-comprehensive-strategic-partnership',
      lang: 'en',
      category: 'WORLD',
      categorySlug: 'world',
      title: 'Cambodia and China Strengthen Comprehensive Strategic Partnership',
      excerpt: 'Bilateral leaders ink expansive agreements spanning clean energy, agri-tech innovation, and digital education networks.',
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
    },
  ],
  business: [
    {
      id: 'biz-1',
      slug: 'chinese-brands-see-growing-opportunities-in-cambodia',
      lang: 'en',
      category: 'BUSINESS',
      categorySlug: 'business',
      title: 'Chinese Brands See Growing Opportunities in Cambodia',
      excerpt: 'Leading retail, electric mobility, and digital infrastructure firms establish flagship headquarters in Phnom Penh.',
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_18_04-PM.png',
    },
    {
      id: 'biz-2',
      slug: 'sihanoukville-sez-attracts-new-investments-in-2026',
      lang: 'en',
      category: 'BUSINESS',
      categorySlug: 'business',
      title: 'Sihanoukville SEZ Attracts New Investments in 2026',
      excerpt: 'Global electronics and consumer goods manufacturers commit over $450 million in new production capacity.',
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_47_49-PM.png',
    },
  ],
  diplomacy: [
    {
      id: 'dip-1',
      slug: 'cambodia-and-china-strengthen-comprehensive-strategic-partnership',
      lang: 'en',
      category: 'DIPLOMACY',
      categorySlug: 'diplomacy',
      title: 'Cambodia and China Strengthen Comprehensive Strategic Partnership',
      excerpt: 'Bilateral leaders ink expansive agreements spanning clean energy, agri-tech innovation, and digital education networks.',
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
    },
    {
      id: 'dip-2',
      slug: 'asean-and-partners-seek-deeper-cooperation-in-a-changing-world',
      lang: 'en',
      category: 'DIPLOMACY',
      categorySlug: 'diplomacy',
      title: 'ASEAN and Partners Seek Deeper Cooperation in a Changing World',
      excerpt: 'Regional diplomats congregate in Phnom Penh to advance multilateral dialogue and sustainable supply chains.',
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
    },
  ],
  insight: [
    {
      id: 'ins-1',
      slug: 'beyond-the-headlines-a-deeper-look-at-cambodia',
      lang: 'en',
      category: 'INSIGHT',
      categorySlug: 'insight',
      title: 'Beyond the Headlines: A Deeper Look at Cambodia',
      excerpt: 'An analytical exploration of the Kingdom’s demographic transition, urbanization velocity, and green industrial evolution.',
      date: 'Sep 20, 2026',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-02_49_35-PM.png',
    },
  ],
  'chinese-news': [
    {
      id: 'wp-482',
      slug: 'china-cambodia-belt-and-road-high-quality',
      lang: 'zh',
      category: '柬埔寨与中国',
      categorySlug: 'chinese-news',
      title: '中携手推动高质量共建“一带一路” 开启命运共同体新篇章',
      excerpt: '中東方表示,将深化各领域务实合作,推动高质量共建 “一带一路”,为地区和平、稳定与共同发展作出更大贡献。',
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
      excerpt: '柬埔寨在东盟相关会议上强调,将继续加强与东盟各国的 务实合作,共同应对区迎挑战,推动可持续发展。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
    },
    {
      id: 'wp-498',
      slug: 'cambodia-un-multilateralism',
      lang: 'zh',
      category: '柬埔寨与世界',
      categorySlug: 'chinese-news',
      title: '柬埔寨在联合国发声 呼吁全球共同应对 气候变化挑战',
      excerpt: '柬埔申坚持多边主义,愿与国际社会一道,推动绿色 发展与可持未来。',
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
      excerpt: '看投资环境拖線优化,越来越多国际企业看好柬埔寨汽 车及非部件产业的增长潜力,相关项目正在加速落地。',
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
      excerpt: '柬埔寨政府发布新一轮旅游推广计划,重点提升旅游基础设施 和服务质量,进一步打造多元化、可持续的旅游目的地。',
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
      excerpt: '柬埔寨政府近宣布推出新一轮经济刺激措施,重点支持 基础舱,制造业和中小企业,以增强经济性和可辨的发展。',
      date: '2026年9月21日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-08_58_41-PM.png',
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
export function getArticleBySlug(slug: string): Article | undefined {
  if (HERO_ARTICLE_EN.slug === slug) return HERO_ARTICLE_EN;
  if (CHINESE_HERO_ARTICLE.slug === slug) return CHINESE_HERO_ARTICLE;

  const allSub = [
    ...SUB_GRID_ARTICLES_EN,
    ...SHOWCASE_ARTICLES_EN,
    ...CHINESE_PREVIEW_ARTICLES,
    ...MOST_READ_ARTICLES_EN,
    ...CHINESE_TOP_NEWS,
  ];
  const found = allSub.find((a) => a.slug === slug);
  if (found) return found;

  for (const cat of Object.keys(CATEGORY_ARTICLES_MAP)) {
    const item = CATEGORY_ARTICLES_MAP[cat].find((a) => a.slug === slug);
    if (item) return item;
  }

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

  return undefined;
}
