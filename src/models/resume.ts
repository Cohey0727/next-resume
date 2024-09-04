type PersonalInfo = {
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

type WorkExperience = {
  companyName: string;
  period: [string, string?];
  role: string;
  technicalStack: TechnicalStack;
  description: string;
};

type Resume = {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
};

export type { PersonalInfo, TechnicalStack, WorkExperience, Resume };
