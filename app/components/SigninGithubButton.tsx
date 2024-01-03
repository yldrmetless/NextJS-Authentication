"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import React from "react";

const SigninGithubButton = async() => {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      variant="secondary"
      className="mt-4"
    >
      Login with Github <Github className="ml-4 h-4 w-4" />
    </Button>
  );
};

export default SigninGithubButton;
