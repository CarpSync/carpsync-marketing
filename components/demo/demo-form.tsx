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
  FieldError,
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
import { submitDemoRequest } from "@/app/demo/actions";
import { venueTypeOptions } from "@/lib/demo";

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);
  const [venueType, setVenueType] = useState("");
  const [startedAt] = useState(() => Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!venueType) {
      setError("Please select a venue type.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("venue-type", venueType);
    formData.set("started_at", String(startedAt));

    setStatus("submitting");
    const result = await submitDemoRequest(formData);

    if (!result.ok) {
      setStatus("idle");
      setError(result.error);
      return;
    }

    setStatus("success");
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
      className="relative rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <FieldSet>
        <FieldLegend className="sr-only">Demo request</FieldLegend>
        <FieldGroup>
          <div
            aria-hidden="true"
            inert
            className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
          >
            <input
              name="company_website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input
                id="name"
                name="name"
                required
                autoComplete="name"
                maxLength={120}
                placeholder="Jane Angler"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="fishery">Fishery / venue name</FieldLabel>
              <Input
                id="fishery"
                name="fishery"
                required
                maxLength={160}
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
                autoComplete="email"
                maxLength={254}
                placeholder="jane@willowlake.co.uk"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="venue-type">Venue type</FieldLabel>
              <Select
                name="venue-type"
                value={venueType || undefined}
                onValueChange={(value) => {
                  if (typeof value === "string") setVenueType(value);
                }}
                required
              >
                <SelectTrigger id="venue-type" className="w-full">
                  <SelectValue placeholder="Select a venue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {venueTypeOptions.map((type) => (
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
              maxLength={4000}
              placeholder="Number of lakes, swims, current booking process..."
            />
            <FieldDescription>
              Optional — the more we know, the more relevant your demo will
              be.
            </FieldDescription>
          </Field>

          {error ? <FieldError>{error}</FieldError> : null}

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
