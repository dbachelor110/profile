export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    summary: string;
    cvButton: string;
    contactButton: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  experience: {
    title: string;
    present: string;
  };
  skills: {
    title: string;
    categories: {
      languages: { label: string; keyLabel: string; items: string[] };
      frameworks: { label: string; keyLabel: string; items: string[] };
      databases: { label: string; keyLabel: string; items: string[] };
      tools: { label: string; keyLabel: string; items: string[] };
      aiNative: { label: string; keyLabel: string; items: string[] };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  langSwitch: {
    desktop: string;
    mobile: string;
  };
  resume: {
    education: {
      title: string;
      school: string;
      degree: string;
      period: string;
    };
    jobs: Array<{
      company: string;
      location: string;
      title: string;
      period: string;
      achievements: string[];
    }>;
  };
}

export const translations: Record<'zh' | 'en', TranslationSchema> = {
  zh: {
    meta: {
      title: '林尚緯 David Lin | 資深後端工程師 個人網站',
      description:
        '林尚緯 (David Lin) 的個人網站。專精於數據可靠性、高併發管道與工程效率的資深後端工程師。',
    },
    nav: {
      about: '關於我',
      experience: '工作經歷',
      skills: '專業技能',
      contact: '聯絡我',
    },
    hero: {
      greeting: '你好，我是',
      title: '林尚緯 David Lin',
      subtitle: '資深後端工程師',
      summary:
        '專精於數據可靠性、高併發管道與工程效率。熱衷於作為個人貢獻者（IC）在高效團隊中解決複雜的數據架構瓶頸。',
      cvButton: '下載履歷',
      contactButton: '與我聊聊',
    },
    about: {
      title: '關於我',
      paragraph1:
        '我是一位專注於高規格數據基礎設施與工程工作流自動化的資深後端工程師。我擅長在追求高效能的團隊中解決關鍵架構瓶頸，例如將原本需要數週的數據處理流程優化至數小時內完成。',
      paragraph2:
        '我重視開發者體驗（DX），並藉由自動化 CI/CD、型別安全 SDK 生成及可靠的系統監控，來消除日常手動開銷。我相信好的系統應該是在保障資料一致性的同時，能讓團隊成員無痛且快速地疊代產品。',
    },
    experience: {
      title: '工作經歷',
      present: '至今',
    },
    skills: {
      title: '專業技能',
      categories: {
        languages: {
          label: '程式語言與環境',
          keyLabel: 'LANGUAGES & ENVIRONMENT',
          items: ['Node.js', 'TypeScript', 'JavaScript', 'SQL', 'GoLang (Familiar)'],
        },
        frameworks: {
          label: '開發框架與套件',
          keyLabel: 'FRAMEWORKS & LIBRARIES',
          items: ['Koa.js', 'Express.js', 'React', 'Next.js', 'Astro', 'SolidJS'],
        },
        databases: {
          label: '資料庫與基礎設施',
          keyLabel: 'DATABASES & INFRASTRUCTURE',
          items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Docker', 'Cloudflare (Workers, D1)'],
        },
        tools: {
          label: '開發工具與自動化',
          keyLabel: 'TOOLS & AUTOMATION',
          items: ['Git', 'CI/CD Pipelines', 'semantic-release', 'openapi-ts', 'Swagger/OpenAPI'],
        },
        aiNative: {
          label: 'AI 原生與代理工作流',
          keyLabel: 'AI-NATIVE & AGENTIC WORKFLOWS',
          items: ['Claude Code', 'GitHub Copilot', 'Cursor', 'Context Engineering', 'Model Context Protocol (MCP) 客製伺服器整合'],
        },
      },
    },
    contact: {
      title: '聯絡我',
      subtitle: '如果您對我的經歷有興趣，或是想進一步討論合作機會，歡迎隨時與我聯絡！',
      name: '您的姓名 / 服務單位',
      email: '電子郵件信箱',
      message: '留言內容',
      send: '送出訊息',
      success: '感謝您的留言！我會盡快回覆您。',
    },
    langSwitch: {
      desktop: 'English',
      mobile: 'EN',
    },
    resume: {
      education: {
        title: '學歷',
        school: '國立成功大學 (National Cheng Kung University)',
        degree: '政治學學士 (Bachelor of Arts in Political Science)',
        period: '2017 – 2021',
      },
      jobs: [
        {
          company: 'Lawsnote 七法股份有限公司',
          location: '台灣 新北市',
          title: '後端工程師 (數據團隊)',
          period: '2024 年 9 月 – 至今',
          achievements: [
            '設計並實作具備高度可擴展性的分散式爬蟲系統 (WeaverCore)，藉由架構重構與模組化設計，將原先預估需「四週/一人」的開發時程壓縮至 2 小時，並於提案當天順利完工上線。',
            '使用 semantic-release 與 openapi-ts 設計自動化 CI/CD 流程，從 Swagger 規範動態生成並發佈 TypeScript SDK，確保端到端型別安全，免除手動串接 API 的時間成本。',
            '設計基於 Redis 的 Proxy 管理系統，在多進程高併發執行時安全分配資源，確保系統在高峰負載下維持 99.9% 穩定度。',
            '性能優化：設計並開發基於 JSON Lines (NDJSON) 的 HTTP 串流 (Streaming) APIs。在極端資料負載下，將前端首屏渲染時間（Time-to-Interactive）從 30 分鐘以上縮短至 1 秒內，同時將伺服器記憶體開銷優化至常數級 $O(1)$ 常駐佔用，消除了併發查詢導致的 OOM 崩潰風險。',
            '重構核心資料管線 (Argus-v2)，將 legacy JS 爬蟲與資料寫入邏輯解耦，建構分層設計（Controller-Service-Model）的 TypeScript 資料處理系統，顯著提升系統可測試性與可擴展性。',
            '系統監控與主動告警：搭建系統監控與主動示警機制（基於 Grafana），實現關鍵環境約 90% 的指標監控與告警覆蓋率，成功偵測並排除多個測試環境的長期異常。',
          ],
        },
        {
          company: 'Asgard 宏燁資訊股份有限公司',
          location: '台灣 台北市',
          title: '全端工程師',
          period: '2023 年 4 月 – 2024 年 9 月',
          achievements: [
            '主導內部自動化工具從 0 到 1 的端到端開發，成功將複雜的跨部門需求轉化為可擴展的系統設計。',
            '設計高擴展性的插件式 (plugin-based) 系統架構，實現新功能獨立部署，無需全系統重啟或停機。',
            '建構並維護微服務架構下的平台工具，加速疊代週期並支持獨立服務擴展。',
          ],
        },
        {
          company: 'Mores.group 墨爾斯教育科技',
          location: '台灣 高雄市',
          title: '創辦人暨技術長 (CTO)',
          period: '2021 年 8 月 – 2022 年 2 月',
          achievements: [
            '負責早期教育科技新創公司的整體技術策略、系統設計與產品路線圖規劃。',
            '帶領工程與產品團隊研發，成功在中山創業貨櫃大賽中榮獲第一名。',
          ],
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'Shang-Wei (David) Lin | Senior Backend Engineer Portfolio',
      description:
        'Personal website of Shang-Wei (David) Lin. Senior Backend Engineer specializing in data reliability, scalable pipelines, and engineering efficiency.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      title: 'David Lin',
      subtitle: 'Senior Backend Engineer',
      summary:
        'Specialized in data reliability, scalable pipelines, and engineering efficiency. Passionate about tackling complex architecture bottlenecks in high-caliber teams.',
      cvButton: 'Download CV',
      contactButton: "Let's Chat",
    },
    about: {
      title: 'About Me',
      paragraph1:
        'I am a Senior Backend Engineer focusing on high-performance data infrastructure and automating developer workflows. I thrive in high-caliber engineering teams where I can tackle complex architectural bottlenecks—such as transforming weeks of data extraction into a matter of hours.',
      paragraph2:
        'I am deeply committed to Developer Experience (DX), utilizing automated CI/CD pipelines, type-safe API SDK generation, and robust system monitors to eliminate daily manual overhead. I believe that reliable database validation and clean coding standards allow teams to iterate faster and with absolute confidence.',
    },
    experience: {
      title: 'Work Experience',
      present: 'Present',
    },
    skills: {
      title: 'Skills',
      categories: {
        languages: {
          label: 'Languages & Environment',
          keyLabel: 'LANGUAGES & ENVIRONMENT',
          items: ['Node.js', 'TypeScript', 'JavaScript', 'SQL', 'GoLang (Familiar)'],
        },
        frameworks: {
          label: 'Frameworks & Libs',
          keyLabel: 'FRAMEWORKS & LIBRARIES',
          items: ['Koa.js', 'Express.js', 'React', 'Next.js', 'Astro', 'SolidJS'],
        },
        databases: {
          label: 'Databases & Infra',
          keyLabel: 'DATABASES & INFRASTRUCTURE',
          items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Docker', 'Cloudflare (Workers, D1)'],
        },
        tools: {
          label: 'Tools & Automation',
          keyLabel: 'TOOLS & AUTOMATION',
          items: ['Git', 'CI/CD Pipelines', 'semantic-release', 'openapi-ts', 'Swagger/OpenAPI'],
        },
        aiNative: {
          label: 'AI-Native & Agentic Workflows',
          keyLabel: 'AI-NATIVE & AGENTIC WORKFLOWS',
          items: ['Claude Code', 'GitHub Copilot', 'Cursor', 'Context Engineering', 'Model Context Protocol (MCP) custom server integration'],
        },
      },
    },
    contact: {
      title: 'Contact Me',
      subtitle:
        'If you are interested in my work, or want to discuss remote opportunities, please feel free to drop me a message!',
      name: 'Your Name / Organization',
      email: 'Email Address',
      message: 'Your Message',
      send: 'Send Message',
      success: 'Thank you for your message! I will get back to you as soon as possible.',
    },
    langSwitch: {
      desktop: 'English',
      mobile: 'EN',
    },
    resume: {
      education: {
        title: 'Education',
        school: 'National Cheng Kung University | Tainan, Taiwan',
        degree: 'Bachelor of Arts in Political Science',
        period: '',
      },
      jobs: [
        {
          company: 'Lawsnote Inc.',
          location: 'New Taipei, Taiwan',
          title: 'Software Engineer (Backend, Data Team)',
          period: 'Sep 2024 – Present',
          achievements: [
            'Architecture & Scaling: Designed and implemented a highly modular distributed crawler architecture (WeaverCore), compressing a projected "4-week/1-person" development schedule into 2 hours, and successfully deploying the system on the day of proposal.',
            'Developer Experience (DX) & CI/CD: Engineered an automated CI/CD pipeline using semantic-release and openapi-ts to dynamically generate and publish TypeScript SDKs directly from Swagger specs, ensuring end-to-end type safety and eliminating manual API integration overhead.',
            'System Reliability: Architected a Redis-based proxy management system to securely distribute resources across high-concurrency processes, ensuring 99.9% system stability during peak loads.',
            'Performance Optimization: Designed and implemented HTTP streaming APIs using JSON Lines (NDJSON). Successfully compressed client Time-to-Interactive (TTI) from over 30 minutes to under 1 second under extreme data loads, while reducing server memory usage to an O(1) constant footprint, eliminating backend OOM risks during concurrent requests.',
            'Maintainability & Refactoring: Refactored core data workflows (Argus-v2), decoupling database write paths from legacy JS crawlers and engineering a TypeScript data processing system with layered architecture (Controller-Service-Model) to optimize testability and scalability.',
            'Observability & Proactive Alerting: Built a comprehensive system monitoring and proactive alerting infrastructure using Grafana, achieving ~90% alert coverage across critical environments and successfully identifying multiple long-standing anomalies.',
          ],
        },
        {
          company: 'Asgard.com.tw',
          location: 'Taipei, Taiwan',
          title: 'Full Stack Engineer',
          period: 'Apr 2023 – Sep 2024',
          achievements: [
            'Product Delivery: Led the end-to-end development of internal automation tools from 0 to 1, translating complex cross-functional requirements into scalable system designs.',
            'System Architecture: Architected a highly extensible plugin-based system, enabling seamless new feature deployments without requiring full-system redeployments or downtime.',
            'Microservices Integration: Built and maintained robust platform tools utilizing a microservices architecture, driving faster iteration cycles and independent service scaling.',
          ],
        },
        {
          company: 'Mores.group',
          location: 'Kaohsiung, Taiwan',
          title: 'Founder & CTO',
          period: 'Aug 2021 – Feb 2022',
          achievements: [
            'Technical Leadership: Spearheaded comprehensive technical strategy and product design initiatives for an early-stage education-focused technology startup.',
            'Project Delivery: Led the engineering and product team to successfully secure 1st place in the prestigious Zhongshan Startup Container Competition.',
          ],
        },
      ],
    },
  },
};
