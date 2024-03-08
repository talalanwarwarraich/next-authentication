import { routes } from '@/routes';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import CardWrapper from './card-wrapper';

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='Oops! something went wrong'
      backButtonLabel='Back to login'
      backButtonHref={routes.auth.login}
    >
      <div className='w-full flex justify-center items-center'>
        <ExclamationTriangleIcon />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
