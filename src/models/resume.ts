type PersonalInfo = {
  name: string;
  affiliation: string;
  age: number;
  gender: string;
  nearestStation: string;
  education: string;
  qualifications: string[];
  technicalSkills: string[];
  specialties: string;
};

type TechnicalStack = {
  languages: string[];
  databases?: string[];
  serverOs?: string[];
  frameworks?: string[];
};

type CareerHistory = {
  companyName: string;
  period: [string, string?];
  role: string;
  technicalStack: TechnicalStack;
  description: string;
};

type Resume = {
  personalInfo: PersonalInfo;
  careerHistories: CareerHistory[];
};

export type { PersonalInfo, TechnicalStack, CareerHistory, Resume };
