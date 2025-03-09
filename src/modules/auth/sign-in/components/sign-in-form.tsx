import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(15),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Email Address</FormLabel>
              <FormControl>
                <Input
                  className=""
                  placeholder="E.g Aliriaz@Uifry.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="........" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-base/[1.5rem] font-karla font-bold text-right text-secondary">
            I Forgot My Password
          </p>
        </div>
        <div className="space-y-4">
          <Button className="w-full h-[3rem] rounded-sm" type="submit">
            Submit
          </Button>
          <p className="text-white text-base/[1.5rem] text-center font-karla font-semibold tracking-[-4%]">
            Not Ali Riaz?{" "}
            <span className="font-bold text-secondary underline">
              Login To continue
            </span>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
