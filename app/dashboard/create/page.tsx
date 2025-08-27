import { handleSubmit } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";
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
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const CreateBlogRoute = () => {
  return (
    <div className="mx-auto max-w-lg my-8">
      <Card className="border border-chart-3">
        <CardHeader>
          <CardTitle>Create Blog</CardTitle>
          <CardDescription>
            Create a new blog to share with the world.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-8" action={handleSubmit}>
            <div className="flex flex-col gap-1">
              <Label htmlFor="title">Title</Label>
              <Input
                placeholder="Enter blog title"
                type="text"
                id="title"
                name="title"
                required
                className="border border-chart-3 focus-visible:border-chart-3 focus-visible:ring-chart-3/50 focus-visible:ring-[3px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="content">Content</Label>
              <Textarea
                placeholder="Enter blog content"
                id="content"
                name="content"
                required
                className="border border-chart-3 focus-visible:border-chart-3 focus-visible:ring-chart-3/50 focus-visible:ring-[3px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                placeholder="Enter image url"
                type="url"
                id="image-url"
                name="image-url"
                required
                className="border border-chart-3 focus-visible:border-chart-3 focus-visible:ring-chart-3/50 focus-visible:ring-[3px]"
              />
            </div>

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlogRoute;
