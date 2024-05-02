'use client';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';

const AuthSocials = () => {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        size='lg'
        className='w-full'
        variant='outline'
        onClick={() => {}}>
        <FaGithub className='h-5 w-5' />
      </Button>
      <Button
        size='lg'
        className='w-full'
        onClick={() => {}}
        variant='outline'>
        <FcGoogle className='h-5 w-5' />
      </Button>
    </div>
  );
};

export default AuthSocials;
