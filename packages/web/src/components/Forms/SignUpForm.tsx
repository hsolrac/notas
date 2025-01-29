import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "../../schemas/SignupSchema";
import { Button } from "@/components/ui/button";
import { users } from "@/data/mocks/data";
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
export function SignupForm() {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: SignupFormData) {
    console.log(data);
  }

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Crie sua conta</CardTitle>
        <CardDescription>
          Crie uma nova conta para começar a usar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Sua senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirme sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Criar
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <a href="/login" className="text-primary hover:underline">
              Log in
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
