"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { insertOneUser } from "../server/user";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  name: z.string({
    required_error: "Please enter a name",
  }).min(2, {
    message: "Name must be more than 2 characters long",
  }).max(20, {
    message: "Name must be no longer than 20 characters",
  }),
  question1: z.string({ required_error: "Please select an option" }),
  question2: z.string({ required_error: "Please select an option" }),
  question3: z.string({ required_error: "Please select an option" }),
});

export default function Quiz() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSadAnimation, setShowSadAnimation] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    let count = 3;
    if (data.question1 === "yes") count -= 1;
    if (data.question2 === "no") count -= 1;
    if (data.question3 === "no") count -= 1;

    if (count === 0) {
      toast({
        title: `Congratulations ${data.name}!`,
        description: "You are right",
      });
      setShowConfetti(true); // Show confetti
      setShowSadAnimation(false); // Hide sad animation if it was shown
    } else {
      toast({
        title: `Boohoo ${data.name}!`,
        description: "You are wrong",
      });
      setShowSadAnimation(true); // Show sad animation
      const timer = setTimeout(() => setShowSadAnimation(false), 1000); // Hide after 1 second
    }

    const isCorrect = count === 0;
    insertOneUser(data.name, isCorrect);
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg relative">
      {showConfetti && <Confetti />}
      {showSadAnimation && (
        <div className="sad-animation">😢</div> // Sad face emoji
      )}
      <h2 className="text-2xl font-bold text-center mb-4">Quiz Time!</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormDescription>What is your name?</FormDescription>
                <FormControl>
                  <Input placeholder="Your name here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="question1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question 1</FormLabel>
                <FormDescription>Is drug addictive?</FormDescription>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select an answer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="question2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question 2</FormLabel>
                <FormDescription>SAY ___ TO DRUGS?</FormDescription>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select an answer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="question3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question 3</FormLabel>
                <FormDescription>WILL YOU DO DRUGS?</FormDescription>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select an answer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-4">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
