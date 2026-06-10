"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";

import * as z from "zod";
  const handleGoogleLogin=async()=>{
    const data=await authClient.signIn.social({
      provider:"google",
      callbackURL:"http://localhost:3000",
    })
    console.log("data",data)
  }

const formSchema = z.object({
  name: z.string().min(1, "This field is required"),
  password: z.string().min(8, "Minimum lenght is 8"),
  email: z.email()
});

export function RegisterForm({ ...props }: React.ComponentProps<typeof Card>) {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId=toast.loading("Creating User")
      try {
        const{data,error}=await authClient.signUp.email(value)
        if(error){
          toast.error(error.message,{id:toastId})
          return;
        }

        toast.success("User Created Successfully",{id:toastId})

        
      } catch (error) {
        toast.error("Someting Went Wrong.Try Again",{id:toastId})
        
      }

    },
  });

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="register-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                     {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            ></form.Field>
            <form.Field
              name="email"
              children={(field) => {
                                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                       {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            ></form.Field>
            <form.Field
              name="password"
              children={(field) => {
                                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                       {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            ></form.Field>
          </FieldGroup>
          

          
        </form>
      </CardContent>
      <CardFooter className="flex justify-end flex-col gap-3">
        <Button className="w-full" form="register-form" type="submit">
          Submit
        </Button>
        <Button className="w-full" onClick={()=>handleGoogleLogin()} variant="outline" type="button">
                  Login with Google
                </Button>
      </CardFooter>
      <FieldDescription className="text-center">
                        Don&apos;t have an account? <a href="#">Sign up</a>
                      </FieldDescription>
    </Card>
  );
}
