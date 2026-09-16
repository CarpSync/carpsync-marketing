"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";

const venueTypes = [
  { value: "commercial", label: "Commercial fishery" },
  { value: "french", label: "French carp lake" },
  { value: "hire", label: "Exclusive hire lake" },
  { value: "syndicate", label: "Syndicate" },
  { value: "holiday", label: "Fishing holiday venue" },
  { value: "other", label: "Other" },
];

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    // This form does not yet submit to a backend. Wire this up to an email
    // or CRM integration when one is connected to this project.
    setTimeout(() => setStatus("success"), 600);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-[var(--brand-green)]" />
        <h3 className="font-heading text-xl font-bold text-foreground">
          Thanks — we&apos;ll be in touch
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Someone from the CarpSync team will reach out shortly to arrange
          your demo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <FieldSet>
        <FieldLegend className="sr-only">Demo request</FieldLegend>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input id="name" name="name" required placeholder="Jane Angler" />
            </Field>
            <Field>
              <FieldLabel htmlFor="fishery">Fishery / venue name</FieldLabel>
              <Input
                id="fishery"
                name="fishery"
                required
                placeholder="Willow Lake Fishery"
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@willowlake.co.uk"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="venue-type">Venue type</FieldLabel>
              <Select name="venue-type">
                <SelectTrigger id="venue-type" className="w-full">
                  <SelectValue placeholder="Select a venue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {venueTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="message">Tell us about your fishery</FieldLabel>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Number of lakes, swims, current booking process..."
            />
            <FieldDescription>
              Optional — the more we know, the more relevant your demo will
              be.
            </FieldDescription>
          </Field>

          <Button type="submit" size="lg" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <Spinner data-icon="inline-start" />
            ) : null}
            Request a demo
            {status !== "submitting" ? (
              <ArrowRight data-icon="inline-end" />
            ) : null}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
