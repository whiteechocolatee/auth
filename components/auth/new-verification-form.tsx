'use client';

import { ClimbingBoxLoader } from 'react-spinners';
import CardWrapper from './card-wrapper';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/actions/new-verification';
import { FormSuccess } from '@/components/form-success';
import { FormError } from '@/components/form-error';

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<
    string | undefined
  >();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (!token) {
      setError('Missing token');
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel='Confirm your verification'
      backButtonHref='/auth/login'
      showSocials={false}
      backButtonLabel='Back to login'>
      <div className='flex items-center w-full justify-center'>
        {!success && !error && <ClimbingBoxLoader />}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
