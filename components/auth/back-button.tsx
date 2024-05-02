'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

interface BackButtonComponents {
  href: string;
  label: string;
}

export const BackButton = ({
  href,
  label,
}: BackButtonComponents) => {
  return (
    <Button
      variant='link'
      className='font-normal w-full'
      size='sm'
      asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
