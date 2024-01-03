"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const SigninForm = () => {
  const [email, setEmail] = useState<null | string>()  

  async function SignInWithEmail() {
    const signinResult = await signIn("email", {
        email: email,
        callbackUrl: `${window.location.origin}`,
        redirect: false
    })
    if(!signinResult?.ok) {
        return toast ({
            title: "Well this did not work",
            description: "Something went wrong, try again...",
            variant: "destructive"
        })
    }

    return toast({
        title: "Check your email",
        description: "A magic link has been sent to you"
    })
  }
  return (
    <form action={SignInWithEmail}>
      <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input onChange={e => setEmail(e.target.value)} name="email" type="email" placeholder="name@example.com" />
      </div>
      <Button className="mt-4 w-full">Login with Email</Button>
    </form>
  );
};

export default SigninForm;
