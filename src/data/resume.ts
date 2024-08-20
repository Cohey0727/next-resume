import { Resume } from "@/models/resume";

// Update the Resume type to include the new duration structure
type NormalizedResume = Omit<Resume, "careerHistory"> & {
  careerHistory: Array<
    Omit<Resume["careerHistory"][number], "duration"> & {
      duration: {
        start: string;
        end: string | null;
      };
    }
  >;
};

const resumeEn: NormalizedResume = {
  name: "Kohei Okamoto",
  contact: {
    email: "ohayousagi.ac.kook0727@gmail.com",
    phone: "+61 0493955028",
  },
  summary:
    "I am a 31-year-old male freelance software engineer. I hold a degree in Electronic Physics from Osaka University. My technical expertise includes TypeScript, Python, AWS, and React. I have extensive experience in development tasks, with a strong background in both frontend and backend development, as well as infrastructure design and project leadership. I am passionate about delivering high-quality, efficient, and sustainable systems. My English is a bit rusty, so please bear with me!",
  careerHistory: [
    {
      position: "Front End Developer",
      company: "Base Food Inc.",
      duration: {
        start: "2023-08",
        end: null,
      },
      responsibilities: [
        "Frontend implementation and design (Internal Service Startup)",
        "Frontend infrastructure implementation and design (EC Site Replacement)",
        "Member reviews (EC Site Replacement)",
      ],
      skillsAcquired: ["Vue", "Nuxt", "React", "NextJS", "TypeScript"],
      achievements: [],
    },
    {
      position: "Full Stack Developer",
      company: "Hokan Inc.",
      duration: {
        start: "2022-11",
        end: "2023-06",
      },
      responsibilities: [
        "Frontend implementation and design",
        "Backend implementation and design",
        "Infrastructure design and implementation",
        "OpenSearch design for search speed improvement",
        "User demonstrations",
      ],
      skillsAcquired: ["Hasura", "React", "ApolloServer"],
      achievements: [],
    },
    {
      position: "Applications Engineer",
      company: "SOMPO Holdings",
      duration: {
        start: "2022-09",
        end: "2022-11",
      },
      responsibilities: [
        "App implementation and design (iOS, Android)",
        "Backend implementation and design",
      ],
      skillsAcquired: ["Flutter", "Python"],
      achievements: [],
    },
    {
      position: "Full Stack Software Engineer",
      company: "Hokan Inc.",
      duration: {
        start: "2018-10",
        end: "2022-02",
      },
      responsibilities: [
        "Feature development",
        "Requirements definition",
        "Recruitment activities",
        "User interviews",
        "Engineering management",
        "Public speaking",
      ],
      skillsAcquired: [
        "React",
        "TypeScript",
        "React Native",
        "Python",
        "Django",
        "Ruby",
        "Rails",
        "MySQL",
        "AWS",
      ],
      achievements: [
        "Served as engineering leader for 2 years",
        "Managed recruiting and user interviews",
        "Performed code refactoring, resulting in a net negative code commit",
        "Contributed to performance tuning and incident response",
        "Joined at startup and helped achieve 2 billion yen in ARR",
      ],
    },
    {
      position: "Full Stack Software Engineer",
      company: "Works Applications Co., Ltd.",
      duration: {
        start: "2016-04",
        end: "2018-10",
      },
      responsibilities: [
        "Handling inquiries",
        "Adding and modifying frontend and backend features",
        "Modifying batch processes",
        "Conducting reviews and QA",
        "Proposing new features",
      ],
      skillsAcquired: ["Java", "Database", "JavaScript", "jQuery"],
      achievements: [
        "Achieved the highest ticket resolution rate in the department",
        "Developed a system for managing employment types based on attendance",
      ],
    },
  ],
  skills: [
    "React",
    "React Redux",
    "React Native",
    "TypeScript",
    "Java",
    "Python",
    "Django",
    "SQL",
    "AWS",
    "Flutter",
    "Ruby on Rails",
    "JavaScript",
  ],
  languages: ["English", "Japanese"],
  education: {
    degree: "Electronic Physics",
    school: "Osaka University",
    duration: "April 2011 - March 2016",
    thesis: "Development of a Simulation Program for Electromagnetic Wave Propagation",
  },
  licensesCertifications: [
    {
      name: "Applied Information Technology Engineer Examination",
      issuer: "Information-Technology Promotion Agency, Japan (IPA)",
      date: "Mar 2018",
      details:
        "This credential certifies advanced knowledge and skills in IT, including system architecture, project management, and network security.",
    },
    {
      name: "Japanese Driver's License",
      issuer: "Japan",
      date: "Aug 2020 - Aug 2025",
      details: "This is only valid in Japan.",
    },
  ],
};

const resumeJa: NormalizedResume = {
  name: "岡本 孝平",
  contact: {
    email: "ohayousagi.ac.kook0727@gmail.com",
    phone: "+61 0493955028",
  },
  summary:
    "31歳の男性で、フリーランスのソフトウェアエンジニアです。大阪大学で電子物理学の学位を取得しました。TypeScript、Python、AWS、Reactを専門とし、フロントエンドとバックエンドの両方にわたる豊富な開発経験があります。また、インフラ設計やプロジェクトリーダーシップの経験も豊富です。高品質で効率的かつ持続可能なシステムの提供に情熱を持っています。英語が少し苦手ですが、よろしくお願いします。",
  careerHistory: [
    {
      position: "フロントエンドデベロッパー",
      company: "Base Food株式会社",
      duration: {
        start: "2023-08",
        end: null,
      },
      responsibilities: [
        "フロントエンドの実装と設計（内部サービスのスタートアップ）",
        "フロントエンドインフラの実装と設計（ECサイトのリプレイス）",
        "メンバーレビュー（ECサイトのリプレイス）",
      ],
      skillsAcquired: ["Vue", "Nuxt", "React", "NextJS", "TypeScript"],
      achievements: [],
    },
    {
      position: "フルスタックデベロッパー",
      company: "Hokan株式会社",
      duration: {
        start: "2022-11",
        end: "2023-06",
      },
      responsibilities: [
        "フロントエンドの実装と設計",
        "バックエンドの実装と設計",
        "インフラ設計と実装",
        "OpenSearch設計（検索速度改善）",
        "ユーザー向けデモンストレーション",
      ],
      skillsAcquired: ["Hasura", "React", "ApolloServer"],
      achievements: [],
    },
    {
      position: "アプリケーションエンジニア",
      company: "SOMPOホールディングス",
      duration: {
        start: "2022-09",
        end: "2022-11",
      },
      responsibilities: ["アプリの実装と設計（iOS, Android）", "バックエンドの実装と設計"],
      skillsAcquired: ["Flutter", "Python"],
      achievements: [],
    },
    {
      position: "フルスタックソフトウェアエンジニア",
      company: "Hokan株式会社",
      duration: {
        start: "2018-10",
        end: "2022-02",
      },
      responsibilities: [
        "機能開発",
        "要件定義",
        "採用活動",
        "ユーザーインタビュー",
        "エンジニアリング管理",
        "登壇",
      ],
      skillsAcquired: [
        "React",
        "TypeScript",
        "React Native",
        "Python",
        "Django",
        "Ruby",
        "Rails",
        "MySQL",
        "AWS",
      ],
      achievements: [
        "2年間のエンジニアリングリーダーとして活躍",
        "採用活動やユーザーインタビューの管理",
        "コードのリファクタリングを行い、結果的にコード量の削減を達成",
        "パフォーマンステューニングやインシデント対応の担当",
        "スタートアップに参加し、ARR2億円の達成に貢献",
      ],
    },
    {
      position: "フルスタックソフトウェアエンジニア",
      company: "ワークスアプリケーションズ株式会社",
      duration: {
        start: "2016-04",
        end: "2018-10",
      },
      responsibilities: [
        "問い合わせ対応",
        "フロントエンドとバックエンド機能の追加と修正",
        "バッチ処理の修正",
        "レビューと品質保証",
        "新機能の提案",
      ],
      skillsAcquired: ["Java", "Database", "JavaScript", "jQuery"],
      achievements: [
        "部署内で最も高いチケット解決率を達成",
        "雇用形態を管理するシステムを開発し、新たな法令に対応",
      ],
    },
  ],
  skills: [
    "React",
    "React Redux",
    "React Native",
    "TypeScript",
    "Java",
    "Python",
    "Django",
    "SQL",
    "AWS",
    "Flutter",
    "Ruby on Rails",
    "JavaScript",
  ],
  languages: ["英語", "日本語"],
  education: {
    degree: "電子物理学",
    school: "大阪大学",
    duration: "2011年4月 - 2016年3月",
    thesis: "電磁波伝播のシミュレーションプログラムの開発",
  },
  licensesCertifications: [
    {
      name: "応用情報技術者試験",
      issuer: "情報処理推進機構（IPA）",
      date: "2018年3月",
      details:
        "システムアーキテクチャ、プロジェクト管理、ネットワークセキュリティなど、ITにおける高度な知識とスキルを認定する資格です。",
    },
    {
      name: "日本の運転免許",
      issuer: "日本",
      date: "2020年8月 - 2025年8月",
      details: "日本国内でのみ有効です。",
    },
  ],
};

export { resumeEn, resumeJa };
