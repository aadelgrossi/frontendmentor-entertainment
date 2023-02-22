import AuthContainer from '~/components/AuthContainer';
import Button from '~/components/Button';
import Input from '~/components/Input';

const SignUp = () => {
  return (
    <main class="min-h-screen bg-background w-full flex flex-col px-6 md:px-6 lg:px-10 lg:mt-8 items-center justify-center">
      <AuthContainer title="Sign Up">
        <div class="flex flex-col gap-8 mt-10 mb-20">
          <Input placeholder="Email address" variant="border" />
          <Input placeholder="Password" type="password" variant="border" />
          <Input
            placeholder="Repeat Password"
            type="password"
            variant="border"
          />
        </div>
        <Button>Create an account</Button>

        <div class="flex gap-3 self-center mt-6">
          <p class="font-light text-text ">Already have an account?</p>
          <a href="/login" class="text-primary font-light">
            Login
          </a>
        </div>
      </AuthContainer>
    </main>
  );
};

export default SignUp;
