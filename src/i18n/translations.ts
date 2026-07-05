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
    goalTitle: string;
    goalText: string;
  };
  experience: {
    title: string;
    present: string;
  };
  skills: {
    title: string;
    categories: {
      languages: string;
      frameworks: string;
      databases: string;
      tools: string;
    };
  };
  paradigm: {
    title: string;
    subtitle: string;
    leadershipTitle: string;
    leadershipDesc: string;
    rigorTitle: string;
    rigorDesc: string;
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
      goalTitle: '職涯規劃與展望',
      goalText:
        '我計畫在 2027 年 9 月前移居美國。目前正積極尋找支持全遠端（US Remote / Global Remote）的高規格軟體工程職缺，期望加入具備技術挑戰與卓越設計文化的團隊。',
    },
    experience: {
      title: '工作經歷',
      present: '至今',
    },
    skills: {
      title: '專業技能',
      categories: {
        languages: '程式語言與環境',
        frameworks: '開發框架與套件',
        databases: '資料庫與基礎設施',
        tools: '開發工具與自動化',
      },
    },
    paradigm: {
      title: 'T 型思維與教育背景',
      subtitle: '系統性分析邏輯與技術領導力的交會點',
      leadershipTitle: 'CTO 思維與商業對齊',
      leadershipDesc:
        '擁有創辦人與技術主管經驗，具備將商業願景轉化為技術路徑的核心能力。能深入理解有限資源下的工程取捨，聚焦於交付對業務具備實際價值的軟體架構，而非盲目引入不必要的系統複雜度。',
      rigorTitle: '政治學結構化邏輯',
      rigorDesc:
        '政治學本質上是對於「制度設計、約束條件與利益博弈」的結構化研究。此學術訓練養成我深沉的系統思考習慣，使我在剖析分散式交易瓶頸、微服務邊界約束與多執行緒競態條件時，能建立巨觀的全局拓撲眼界與縝密的定性分析。',
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
            '設計並實作高併發、多執行緒的分散式爬蟲系統 (WeaverCore)，將原本需要數週的數據擷取與處理時間縮短至數小時。',
            '使用 semantic-release 與 openapi-ts 設計自動化 CI/CD 流程，從 Swagger 規範動態生成並發佈 TypeScript SDK，確保端到端型別安全，免除手動串接 API 的時間成本。',
            '設計基於 Redis 的 Proxy 管理系統，在多進程高併發執行時安全分配資源，確保系統在高峰負載下維持 99.9% 穩定度。',
            '開發並整合 HTTP 串流 (streaming) API，實現前端局部漸進式渲染，顯著降低大數據法律應用的感知延遲，優化用戶體驗。',
            '實作完善的數據驗證、重試與一致性檢查機制，防止無效或損壞的數據寫入生產資料庫。',
            '重構核心數據工作流 (Argus-v2) 並統一 API 編碼規範，有效降低團隊的偵錯開銷與長期維護成本。',
            'Grafana Alert System: 完成覆蓋約 90% 環境同步狀況的告警機制，16 小時內從 30% 原型交付全功能，成功偵測多個已異常數月的測試環境。',
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
      goalTitle: 'Career Goals & Outlook',
      goalText:
        'I am planning to relocate to the US by September 2027. Currently, I am actively seeking US Remote or Global Remote software engineering opportunities in forward-thinking teams that value engineering excellence and scalable systems.',
    },
    experience: {
      title: 'Work Experience',
      present: 'Present',
    },
    skills: {
      title: 'Skills',
      categories: {
        languages: 'Languages & Environment',
        frameworks: 'Frameworks & Libs',
        databases: 'Databases & Infra',
        tools: 'Tools & Automation',
      },
    },
    paradigm: {
      title: 'The T-Shaped Paradigm & Education',
      subtitle: 'Systemic analytical logic & leadership pedigree',
      leadershipTitle: 'CTO Pedigree & Business Alignment',
      leadershipDesc:
        'Experienced as a founder and tech lead, with the core capability to translate business visions into technical roadmaps. Deeply understand engineering trade-offs under limited resources, focusing on delivering software architectures of real business value rather than blindly introducing unnecessary system complexity.',
      rigorTitle: 'Political Science Structural Logic',
      rigorDesc:
        'Political science is fundamentally the structured study of system design, constraints, and strategic games. This academic training has cultivated a deep habit of systems thinking, allowing me to build a macroscopic topological perspective and rigorous qualitative analysis when analyzing distributed transaction bottlenecks, microservice constraints, and multi-threaded race conditions.',
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
    resume: {
      education: {
        title: 'Education',
        school: 'National Cheng Kung University | Tainan, Taiwan',
        degree: 'Bachelor of Arts in Political Science',
        period: '2017 – 2021',
      },
      jobs: [
        {
          company: 'Lawsnote Inc.',
          location: 'New Taipei, Taiwan',
          title: 'Software Engineer (Backend, Data Team)',
          period: 'Sep 2024 – Present',
          achievements: [
            'Architecture & Scaling: Designed and implemented a high-concurrency, multi-threaded crawler architecture (WeaverCore), drastically reducing data extraction and processing time from weeks to hours.',
            'Developer Experience (DX) & CI/CD: Engineered an automated CI/CD pipeline using semantic-release and openapi-ts to dynamically generate and publish TypeScript SDKs directly from Swagger specs, ensuring end-to-end type safety and eliminating manual API integration overhead.',
            'System Reliability: Architected a Redis-based proxy management system to securely distribute resources across high-concurrency processes, ensuring 99.9% system stability during peak loads.',
            'Performance Optimization: Developed and integrated HTTP streaming APIs to enable partial frontend rendering, significantly reducing perceived latency and optimizing overall user experience.',
            'Data Quality Assurance: Implemented robust validation, retry, and consistency-check mechanisms to prevent invalid or corrupted data from reaching production databases.',
            'Maintainability: Refactored core data workflows (Argus-v2) and unified API coding conventions, substantially lowering debugging overhead and long-term maintenance costs.',
            'Grafana Alert System: Delivered a comprehensive alert mechanism covering ~90% of environment sync status, built from a 30% prototype to full functionality in 16 h, successfully detecting several test environments that had been abnormal for months.',
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
