export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  year: number;
  type: 'UI/UX' | 'Frontend' | 'Full-Stack';
  cover: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string[];
  stack: string[];
  liveUrl?: string;
  testimonialId?: string;
}

export const caseStudies: CaseStudy[] = [
  // TODO: เพิ่ม case study จริงที่นี่ (อย่างน้อย 2-3 อันก่อน production)
];

export const featuredCaseStudies = caseStudies.slice(0, 3);
