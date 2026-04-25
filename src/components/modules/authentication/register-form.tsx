"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"


import {useForm} from "@tanstack/react-form"

export function RegisterForm({ ...props }: React.ComponentProps<typeof Card>) {
  
  const form=useForm({
    defaultValues:{
      name:"",
      email:"",
      password:""
    },
    onSubmit:async({value})=>{
      console.log(value)
    }
  })

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="register-form" onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit()
        }}>

        <FieldGroup>
          <form.Field name="name" children={(field)=>{
            return(
              <Field>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                type="text"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(e)=>field.handleChange(e.target.value)}
                />
              </Field>
            )
          }}>  

          </form.Field>
          <form.Field name="email" children={(field)=>{
            return(
              <Field>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                type="email"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(e)=>field.handleChange(e.target.value)}
                />
              </Field>
            )
          }}>  

          </form.Field>
          <form.Field name="password" children={(field)=>{
            return(
              <Field>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                type="password"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(e)=>field.handleChange(e.target.value)}
                />
              </Field>
            )
          }}>  

          </form.Field>

        </FieldGroup>

          {/* <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="#">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup> */}

          {/* <Button type="submit">Submit</Button> */}

        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button form="register-form" type="submit">Submit</Button>
      </CardFooter>
    </Card>
  )
}
