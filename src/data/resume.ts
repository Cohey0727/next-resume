import { Resume } from "@/models/resume";

// Update the Resume type to include the new duration structure

const resumeJa: Resume = {
  personalInfo: {
    name: "岡本耕平",
    affiliation: "個人事業主",
    age: 32,
    gender: "男性",
    nearestStation: "王子神谷駅",
    education: "大阪大学基礎工学部",
    qualifications: ["普通免許", "応用情報技術者"],
    technicalSkills: ["TypeScript", "Python", "AWS", "React"],
    specialties: "開発",
  },
  careerHistories: [
    {
      companyName: "株式会社ワークスアプリケーションズ",
      period: ["2016-04-01", "2018-10-01"],
      role: "プログラマー",
      technicalStack: {
        languages: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
        databases: ["Oracle"],
        serverOs: ["Windows"],
        frameworks: ["SpringBoot", "jQuery"],
      },
      description:
        "人事システム開発、勤怠システム開発。大学時代にプログラミングをしていたため、同期よりも多くのチケットを処理していた。一時は部署で最もチケットを消化していた時期もあり、リリースドキュメントやQAも担当。",
    },
    {
      companyName: "株式会社hokan",
      period: ["2018-10-01", "2022-02-01"],
      role: "プログラマー",
      technicalStack: {
        languages: ["Python", "Ruby", "TypeScript", "SQL"],
        databases: ["Aurora", "MySQL", "DynamoDB"],
        serverOs: ["Amazon Linux"],
        frameworks: [
          "Django",
          "Ruby on Rails",
          "React",
          "React Native",
          "Terraform",
          "Chalice",
          "Auth0",
        ],
      },
      description:
        "保険営業向けCRM開発。初期は大量の開発をこなすことが求められ、徹夜することもあった。ユーザーヒアリングやエンジニアリーダーとしての業務も担当。常にリファクタリングを実施し、コードの品質を維持。",
    },
    {
      companyName: "kalonade株式会社",
      period: ["2021-06-01", "2022-05-01"],
      role: "プログラマー",
      technicalStack: {
        languages: ["TypeScript"],
        databases: ["PostgreSQL"],
        frameworks: ["React", "Hasura", "AWS CDK"],
      },
      description:
        "美容業界向け予約管理システム開発。フロントエンドおよびバックエンドの実装・設計を担当し、サービスの立ち上げに貢献。",
    },
    {
      companyName: "株式会社Tsuzucle",
      period: ["2022-03-01", "2022-06-01"],
      role: "技術顧問",
      technicalStack: {
        languages: ["Solidity", "TypeScript"],
        frameworks: ["Infura"],
      },
      description:
        "Web3サービス設計・新規サービス立ち上げ。DAppsアプリのモック制作およびPolygonネットワークへのデプロイを担当。",
    },
    {
      companyName: "株式会社more",
      period: ["2022-02-01", "2022-10-01"],
      role: "プログラマー",
      technicalStack: {
        languages: ["Dart", "TypeScript", "GraphQL", "SQL"],
        databases: ["PostgreSQL"],
        frameworks: ["Flutter", "Firebase", "AWS CDK", "SST"],
      },
      description:
        "マッチングアプリの実装。FlutterやHasuraを用いた開発を担当し、アプリの品質向上に貢献。",
    },
    {
      companyName: "SOMPOホールディングス",
      period: ["2022-09-01", "2022-11-01"],
      role: "プログラマー",
      technicalStack: {
        languages: ["Dart", "Python", "GraphQL"],
        databases: ["PostgreSQL"],
        frameworks: ["Flutter", "Firebase", "Python SAM"],
      },
      description:
        "営業支援サービスの開発。アプリおよびバックエンドの設計・実装を担当し、プロジェクトの成功に貢献。",
    },
    {
      companyName: "株式会社hokan",
      period: ["2022-11-01", "2023-06-01"],
      role: "プログラマー",
      technicalStack: {
        languages: ["TypeScript", "GraphQL", "React"],
        databases: ["PostgreSQL"],
        serverOs: ["Linux"],
        frameworks: ["Hasura", "ApolloServer", "AWS CDK", "AWS Lambda", "Express"],
      },
      description:
        "既存サービス改善および会計サービスの新規立ち上げ。フロントエンド・バックエンドの実装・設計を担当し、ユーザーデモや検索速度改善も行った。",
    },
    {
      companyName: "ベースフード株式会社",
      period: ["2023-08-01", "2023-12-01"],
      role: "プログラマー",
      technicalStack: {
        languages: ["TypeScript", "OpenAPI"],
        databases: ["MySQL"],
        serverOs: ["Linux"],
        frameworks: ["React", "Vite", "Firebase"],
      },
      description:
        "社内サービスの立ち上げ。フロントエンドの実装・設計を担当し、プロジェクトの基盤を構築。",
    },
    {
      companyName: "ベースフード株式会社",
      period: ["2024-01-01"],
      role: "プログラマー",
      technicalStack: {
        languages: ["TypeScript", "OpenAPI"],
        databases: ["MySQL"],
        serverOs: ["Linux"],
        frameworks: ["React", "NextJS"],
      },
      description:
        "ECサイトのリプレース。フロントエンド基盤の実装・設計を担当し、メンバーのレビューも実施。",
    },
  ],
};

const resumeEn: Resume = {
  personalInfo: {
    name: "Kohei Okamoto",
    affiliation: "Freelancer",
    age: 32,
    gender: "Male",
    nearestStation: "Oji-Kamiya Station",
    education: "Osaka University, Electronic Engineering",
    qualifications: ["Driver's License", "Applied Information Technology Engineer"],
    technicalSkills: ["TypeScript", "Python", "AWS", "React"],
    specialties: "Development",
  },
  careerHistories: [
    {
      companyName: "Works Applications Co., Ltd.",
      period: ["2016-04-01", "2018-10-01"],
      role: "Programmer",
      technicalStack: {
        languages: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
        databases: ["Oracle"],
        serverOs: ["Windows"],
        frameworks: ["SpringBoot", "jQuery"],
      },
      description:
        "Developed HR and attendance systems. Leveraged programming skills from university to handle a high volume of tasks, often leading the department in ticket resolution. Also responsible for release documentation and QA.",
    },
    {
      companyName: "hokan Co., Ltd.",
      period: ["2018-10-01", "2022-02-01"],
      role: "Programmer",
      technicalStack: {
        languages: ["Python", "Ruby", "TypeScript", "SQL"],
        databases: ["Aurora", "MySQL", "DynamoDB"],
        serverOs: ["Amazon Linux"],
        frameworks: [
          "Django",
          "Ruby on Rails",
          "React",
          "React Native",
          "Terraform",
          "Chalice",
          "Auth0",
        ],
      },
      description:
        "Developed CRM for insurance sales. In the early stages, managed a large volume of development work, often working late into the night. Responsibilities expanded to include user interviews and leadership of the engineering team. Maintained code quality through continuous refactoring.",
    },
    {
      companyName: "kalonade Co., Ltd.",
      period: ["2021-06-01", "2022-05-01"],
      role: "Programmer",
      technicalStack: {
        languages: ["TypeScript"],
        databases: ["PostgreSQL"],
        frameworks: ["React", "Hasura", "AWS CDK"],
      },
      description:
        "Developed a reservation management system for the beauty industry. Contributed to the project by handling both frontend and backend development and design.",
    },
    {
      companyName: "Tsuzucle Co., Ltd.",
      period: ["2022-03-01", "2022-06-01"],
      role: "Technical Advisor",
      technicalStack: {
        languages: ["Solidity", "TypeScript"],
        frameworks: ["Infura"],
      },
      description:
        "Designed and launched a Web3 service. Implemented DApps applications and deployed them on the Polygon network.",
    },
    {
      companyName: "more Co., Ltd.",
      period: ["2022-02-01", "2022-10-01"],
      role: "Programmer",
      technicalStack: {
        languages: ["Dart", "TypeScript", "GraphQL", "SQL"],
        databases: ["PostgreSQL"],
        frameworks: ["Flutter", "Firebase", "AWS CDK", "SST"],
      },
      description:
        "Implemented a matching application. Responsible for development using Flutter and Hasura, contributing to the enhancement of application quality.",
    },
    {
      companyName: "SOMPO Holdings, Inc.",
      period: ["2022-09-01", "2022-11-01"],
      role: "Programmer",
      technicalStack: {
        languages: ["Dart", "Python", "GraphQL"],
        databases: ["PostgreSQL"],
        frameworks: ["Flutter", "Firebase", "Python SAM"],
      },
      description:
        "Developed a sales support service. Handled both frontend and backend design and implementation, contributing to the project's success.",
    },
    {
      companyName: "hokan Co., Ltd.",
      period: ["2022-11-01", "2023-06-01"],
      role: "Programmer",
      technicalStack: {
        languages: ["TypeScript", "GraphQL", "React"],
        databases: ["PostgreSQL"],
        serverOs: ["Linux"],
        frameworks: ["Hasura", "ApolloServer", "AWS CDK", "AWS Lambda", "Express"],
      },
      description:
        "Improved existing services and launched a new accounting service. Responsible for the implementation and design of frontend and backend systems, user demos, and performance enhancements.",
    },
    {
      companyName: "BASE FOOD, Inc.",
      period: ["2023-08-01", "2023-12-01"],
      role: "Programmer",
      technicalStack: {
        languages: ["TypeScript", "OpenAPI"],
        databases: ["MySQL"],
        serverOs: ["Linux"],
        frameworks: ["React", "Vite", "Firebase"],
      },
      description:
        "Launched an internal service. Responsible for frontend implementation and design, establishing the project's foundation.",
    },
    {
      companyName: "BASE FOOD, Inc.",
      period: ["2024-01-01"],
      role: "Programmer",
      technicalStack: {
        languages: ["TypeScript", "OpenAPI"],
        databases: ["MySQL"],
        serverOs: ["Linux"],
        frameworks: ["React", "NextJS"],
      },
      description:
        "Replaced the EC site. Handled frontend foundation implementation and design, and conducted member reviews.",
    },
  ],
};

export { resumeEn, resumeJa };
