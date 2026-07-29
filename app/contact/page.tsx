"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { content } from "@/data/content";

const contact = content.contact;
const { form } = contact;

const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

/** Renders copy whose `{email}` token becomes a mailto link. */
function EmailText({ text }: { text: string }) {
  const [before, after] = text.split("{email}");
  if (after === undefined) return <>{text}</>;

  return (
    <>
      {before}
      <a
        href={`mailto:${contact.email}`}
        className="underline underline-offset-4 hover:text-foreground"
      >
        {contact.email}
      </a>
      {after}
    </>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden className="text-destructive">
      *
    </span>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [gotcha, setGotcha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    if (!topic) {
      setError(form.topicError);
      return;
    }
    if (!endpoint) {
      setError(form.configError);
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          topic: form.topics.find((t) => t.value === topic)?.label ?? topic,
          message,
          // Sent as-is: Formspree drops the submission when it is non-empty.
          _gotcha: gotcha,
        }),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      // Only on success — a failed send keeps the form and its values intact.
      setSubmitted(true);
    } catch {
      setError(form.submitError);
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setName("");
    setCompany("");
    setEmail("");
    setTopic(null);
    setMessage("");
    setGotcha("");
    setError(null);
    setSubmitted(false);
  }

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <div className="mx-auto w-full max-w-2xl px-6 sm:px-10">
        <section className="flex flex-col gap-6 py-20 sm:py-24">
          <div className="flex flex-col gap-1">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {contact.label}
            </div>
            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {contact.title}
            </h1>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {contact.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <EmailText text={contact.emailPrompt} />
            </p>
          </div>
        </section>

        <section className="pb-24">
          {submitted ? (
            <div className="flex flex-col items-start gap-4 rounded-xl bg-muted/50 p-8 ring-1 ring-foreground/10 sm:p-10">
              <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {contact.success.message}
              </p>
              <Button variant="outline" onClick={handleReset}>
                {contact.success.reset}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/*
                Honeypot: moved off-screen rather than display:none, since bots
                skip fields that are not rendered. Formspree treats a filled-in
                `_gotcha` as spam and silently discards the submission.
              */}
              <input
                type="text"
                name="_gotcha"
                value={gotcha}
                onChange={(e) => setGotcha(e.target.value)}
                className="absolute left-[-9999px]"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
              />

              <div className="flex flex-col gap-2">
                <Label htmlFor="name">
                  {form.name} <RequiredMark />
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="company">{form.company}</Label>
                <Input
                  id="company"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  autoComplete="organization"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">
                  {form.email} <RequiredMark />
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="topic">
                  {form.topic} <RequiredMark />
                </Label>
                <Select value={topic} onValueChange={(v) => setTopic(v as string)}>
                  <SelectTrigger id="topic" className="w-full">
                    <SelectValue placeholder={form.topicPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {form.topics.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">
                  {form.message} <RequiredMark />
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="min-h-32"
                />
              </div>

              {error && (
                <div className="text-sm text-destructive" role="alert">
                  <EmailText text={error} />
                </div>
              )}

              <div>
                <Button
                  type="submit"
                  size="lg"
                  className="px-6"
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? form.submitting : form.submit}
                </Button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
