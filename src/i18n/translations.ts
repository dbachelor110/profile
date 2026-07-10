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
    name: string;
    location: string;
    summary: string;
    sections: {
      summary: string;
      skills: string;
      experience: string;
      education: string;
    };
    education: {
      title: string;
      school: string;
      degree: string;
      period: string;
    };
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
      name: '林尚緯 (Shang-Wei Lin)',
      location: '台灣台北 (接受遠端/移居)',
      summary: '專精於數據可靠性、高併發管道與工程效率的資深後端工程師。在解決複雜的架構瓶頸與建構健壯的自動化解決方案（從多執行緒爬蟲系統到 CI/CD SDK 自動生成）方面有深厚經驗。熱衷於作為個人貢獻者 (IC) 在高效團隊中解決具挑戰性的數據基礎設施瓶頸。',
      sections: {
        summary: '專業總覽',
        skills: '專業技能',
        experience: '工作經歷',
        education: '學歷',
      },
      education: {
        title: '學歷',
        school: '國立成功大學 (National Cheng Kung University)',
        degree: '政治學學士 (Bachelor of Arts in Political Science)',
        period: '2017 – 2021',
      },
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
      desktop: '繁體中文',
      mobile: '中',
    },
    resume: {
      name: 'SHANG-WEI (DAVID) LIN',
      location: 'Taipei, Taiwan (Open to Relocation / Remote)',
      summary: 'Senior Backend Engineer specializing in data reliability, scalable pipelines, and engineering efficiency. Passionate about tackling complex architecture bottlenecks in high-caliber teams.',
      sections: {
        summary: 'PROFESSIONAL SUMMARY',
        skills: 'TECHNICAL SKILLS',
        experience: 'WORK EXPERIENCE',
        education: 'EDUCATION',
      },
      education: {
        title: 'Education',
        school: 'National Cheng Kung University | Tainan, Taiwan',
        degree: 'Bachelor of Arts in Political Science',
        period: '',
      },
    },
  },
};
