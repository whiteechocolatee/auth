import { TriangleAlert } from 'lucide-react';
import CardWrapper from '@/components/auth/card-wrapper';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='Ooops! Something went wrong'
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
      showSocials={false}>
      <div className='text-bg-destructive/15 w-full justify-center  p-3 rounded-md flex items-center gap-x-2 text-destructive'>
        <TriangleAlert />
      </div>
    </CardWrapper>
  );
};
