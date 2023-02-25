import { reporter } from '@felte/reporter-solid';
import { createForm } from '@felte/solid';

import AuthContainer from '~/components/AuthContainer';
import Button from '~/components/Button';
import Input from '~/components/Input';
import SocialLogin from '~/components/SocialLogin';
import TextSeparator from '~/components/TextSeparator';
import useLoginWithPassword from '~/hooks/useLoginWithPassword';

type LoginFormData = {
  email: string;
  password: string;
};

type Errors = {
  email: string[];
  password: string[];
};

const Login = () => {
  const login = useLoginWithPassword();

  const { form, handleSubmit, errors } = createForm<LoginFormData>({
    onSubmit: (values) => {
      login(values.email, values.password);
    },
    validate: (values) => {
      const errors: Errors = { email: [], password: [] };

      if (!values.email) errors.email.push('Must not be empty');
      if (!/[a-zA-Z][^@]*@[a-zA-Z][^@.]*\.[a-z]{2,}/.test(values.email))
        errors.email.push('Must be a valid email');
      if (!values.password) errors.password.push('Must not be empty');
      return errors;
    },
    extend: [reporter],
  });

  return (
    <main class="min-h-screen bg-background w-full flex flex-col px-6 md:px-6 lg:px-10 items-center justify-center">
      <AuthContainer title="Login">
        <SocialLogin />
        <TextSeparator>or create an account</TextSeparator>

        <form use:form class="flex flex-col gap-8 mt-8 mb-16">
          <Input
            name="email"
            placeholder="Email address"
            variant="border"
            error={errors().email?.[0]}
          />
          <Input
            name="password"
            placeholder="Password"
            variant="border"
            type="password"
            error={errors().password?.[0]}
          />
        </form>
        <Button type="submit" onClick={handleSubmit}>
          Login to your account
        </Button>

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
