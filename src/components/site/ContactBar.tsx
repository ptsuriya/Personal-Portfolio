'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail } from 'lucide-react';
import { contact } from '@/data/site';
import { buttonClass } from './styles';

// Mobile-only quick contact bar; hidden on the contact page where the form is already in view.
export default function ContactBar() {
  const pathname = usePathname();
  if (pathname === '/contact') return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-kuma-line/70 bg-kuma-cream/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a href={`mailto:${contact.email}`} className={buttonClass('secondary', 'bg-kuma-cream')}>
          <Mail className="h-4 w-4" aria-hidden="true" />
          ส่งอีเมล
        </a>
        <Link href="/contact" className={buttonClass('primary')}>
          ขอใบเสนอราคา
        </Link>
      </div>
    </div>
  );
}
