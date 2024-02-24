import CardWrapper from './card-wrapper';

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel='Welcome back!'
      backButtonLabel='Not have an account?'
      backButtonHref='/auth/register'
      showSocial
    >
      Login Form!
    </CardWrapper>
  );
};

export default LoginForm;
