import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import React from "react";
import SigninGithubButton from "../components/SigninGithubButton";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import SigninForm from "../components/SigninForm";

const AuthRoute = async() => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in</CardTitle>

          <CardDescription>
            To access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col">
            <SigninForm/>
            <SigninGithubButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthRoute;
