"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  mission: z.string().min(1),
  vision: z.string().min(1),
  goals: z.string().min(1),
  regulation: z.instanceof(File),
});

export default function AddUnitDataForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mission: "",
      vision: "",
      goals: "",
      regulation: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-4xl space-y-8 py-10"
      >
        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="mission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mission</FormLabel>
                <FormControl>
                  <Textarea placeholder="Mission" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vision"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vision</FormLabel>
                <FormControl>
                  <Textarea placeholder="Vision" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="goals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Goals</FormLabel>
                <FormControl>
                  <Textarea placeholder="Goals" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="regulation"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Regulation</FormLabel>
                <FormControl className="w-full">
                  <Input
                    placeholder="Regulation"
                    type="file"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Add Unit Data</Button>
        </div>
      </form>
    </Form>
  );
}
