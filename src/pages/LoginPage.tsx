import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import { LoaderPinwheel } from "lucide-react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Mutations
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log("login successful");
      //redirect to dashboard
      navigate("/dashboard/home");
    },
  });

  const handleLoginSubmit = () => {
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    if (!email || !password) {
      return alert("Please enter email and password");
    }
    mutation.mutate({ email, password });
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
            {mutation.isPending && <div>Loading...</div>}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              ref={emailRef}
              type="email"
              placeholder="ravish@gmail.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" ref={passwordRef} type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Button onClick={handleLoginSubmit} className="w-full" disabled={mutation.isPending}>
              {mutation.isPending && (
                <LoaderPinwheel className="animate-spin" />
              )}
              <span className="ml-2">Sign In</span>

            </Button>
            <div className="mt-4 text-center text-sm">
              Don't Have An Account ?
              <Link to="/auth/register" className="underline">
                Sign Up
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default LoginPage;
