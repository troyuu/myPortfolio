import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  const inputOverrides =
    "rounded-sm border-border bg-transparent font-sans text-[0.8rem] text-foreground focus-visible:border-foreground focus-visible:ring-0";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-[30rem] space-y-3 px-4 text-left text-foreground sm:px-8"
    >
      <div>
        <label className="font-sans text-[0.75rem] font-medium tracking-[0.05rem] sm:text-[0.85rem]">
          HEY TROY, MY NAME IS
        </label>
        <Input name="from_name" required className={cn("mt-1", inputOverrides)} />
      </div>
      <div>
        <label className="font-sans text-[0.75rem] font-medium tracking-[0.05rem] sm:text-[0.85rem]">
          MY EMAIL ADDRESS IS
        </label>
        <Input name="from_email" type="email" required className={cn("mt-1", inputOverrides)} />
      </div>
      <div>
        <label className="font-sans text-[0.75rem] font-medium tracking-[0.05rem] sm:text-[0.85rem]">
          MY MESSAGE TO YOU
        </label>
        <Textarea
          name="message"
          rows={5}
          required
          className={cn("mt-1 resize-vertical", inputOverrides)}
        />
      </div>
      <div>
        <label className="font-sans text-[0.75rem] font-medium tracking-[0.05rem] sm:text-[0.85rem]">
          I HEARD ABOUT YOU FROM
        </label>
        <Input name="heard_from" className={cn("mt-1", inputOverrides)} />
      </div>
      <Button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "mt-2 w-[8rem] rounded-sm bg-[#2d2d2d] px-4 py-3 font-sans text-[0.65rem] font-normal tracking-[0.1rem] text-white",
          "transition-opacity duration-[0.6s] ease-in-out hover:opacity-80 active:bg-[#4b4b4b]"
        )}
      >
        {status === "sending" ? (
          <Loader2 className="size-3 animate-spin" />
        ) : (
          "SEND MESSAGE"
        )}
      </Button>
      <div
        className={cn(
          "flex items-center gap-2 transition-opacity duration-[0.6s] ease-in-out",
          status === "success" || status === "error" ? "opacity-100" : "opacity-0"
        )}
      >
        {status === "success" && (
          <>
            <CheckCircle className="size-3 text-[#12b41a]" />
            <p className="text-[0.75rem]">Message sent successfully!</p>
          </>
        )}
        {status === "error" && (
          <p className="text-[0.75rem] text-red-500">
            Failed to send. Please try again or email me directly.
          </p>
        )}
      </div>
    </form>
  );
}
