import { createForm } from '@felte/solid';
import AuthContainer from '~/components/AuthContainer';
import Button from '~/components/Button';
import Input from '~/components/Input';
import useSignUpWithPassword from '~/hooks/useSignUpWithPassword';
import { reporter } from '@felte/reporter-solid';

type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

type Errors = {
  email: string[];
  password: string[];
  confirmPassword: string[];
};

const SignUp = () => {
  const signUp = useSignUpWithPassword();

  const { form, handleSubmit, errors } = createForm<SignUpFormData>({
    onSubmit: (values) => {
      signUp(values.email, values.password);
    },
    validate: (values) => {
      const errors: Errors = { email: [], password: [], confirmPassword: [] };

      if (!values.email) errors.email.push('Must not be empty');
      if (!/[a-zA-Z][^@]*@[a-zA-Z][^@.]*\.[a-z]{2,}/.test(values.email))
        errors.email.push('Must be a valid email');
      if (!values.password) errors.password.push('Must not be empty');
      if (values.password !== values.confirmPassword)
        errors.confirmPassword.push('Passwords do not match');
      return errors;
    },
    extend: [reporter],
  });

  return (
    <main class="min-h-screen bg-background w-full flex flex-col px-6 md:px-6 lg:px-10 items-center justify-center">
      <AuthContainer title="Sign Up">
        <form use:form class="flex flex-col gap-8 mt-10 mb-20">
          <Input
            name="email"
            placeholder="Email address"
            variant="border"
            error={errors().email?.[0]}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            variant="border"
            error={errors().password?.[0]}
          />
          <Input
            name="confirmPassword"
            placeholder="Repeat Password"
            type="password"
            variant="border"
            error={errors().confirmPassword?.[0]}
          />
        </form>
        <Button type="submit" onClick={handleSubmit}>
          Create an account
        </Button>

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
