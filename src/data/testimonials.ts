export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  caseStudySlug?: string;
}

export const testimonials: Testimonial[] = [
  // TODO: เพิ่ม testimonial จริงที่นี่
  // ถ้ายังไม่มี ให้ section ที่เรียกใช้ซ่อนไปก่อน
];
