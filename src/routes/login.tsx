import AuthContainer from '~/components/AuthContainer';
import SocialLogin from '~/components/SocialLogin';
import Button from '~/components/Button';
import Input from '~/components/Input';
import TextSeparator from '~/components/TextSeparator';

const Login = () => {
  return (
    <main class="min-h-screen bg-background w-full flex flex-col px-6 md:px-6 lg:px-10 items-center justify-center">
      <AuthContainer title="Login">
        <SocialLogin />
        <TextSeparator>or create an account</TextSeparator>

        <div class="flex flex-col gap-8 mt-8 mb-16">
          <Input placeholder="Email address" variant="border" />
          <Input placeholder="Password" variant="border" />
        </div>
        <Button>Login to your account</Button>

        <div class="flex gap-3 self-center mt-6">
          <p class="font-light text-text ">Don't have an account?</p>
          <a href="/signup" class="text-primary font-light">
            Sign up
          </a>
        </div>
      </AuthContainer>
    </main>
  );
};

export default Login;
