export type Resume = {
  name: string;
  contact: Contact;
  summary: string;
  careerHistory: CareerHistory[];
  skills: string[];
  languages: string[];
  education: Education;
  licensesCertifications: LicensesCertification[];
};

export type Contact = {
  email: string;
  phone: string;
};

export type CareerHistory = {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
  skillsAcquired: string[];
  achievements: string[];
};

export type Education = {
  degree: string;
  school: string;
  duration: string;
  thesis: string;
};

export type LicensesCertification = {
  name: string;
  issuer: string;
  date: string;
  details: string;
};
