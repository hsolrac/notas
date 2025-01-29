import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../schemas/LoginSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { users } from "@/data/mocks/data";

export function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginFormData) {
    const { email, password } = data;

    console.log(
      users.filter(
        (user) => user.email === email && user.password === password
      )[0]
    );

    if (
      users.filter(
        (user) => user.email === email && user.password === password
      )[0]
    ) {
      window.location.href = "/";
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle className="text-xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Sua senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Não tem uma conta?{" "}
                <a href="/sign-up" className="text-primary hover:underline">
                  Criar conta
                </a>
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
