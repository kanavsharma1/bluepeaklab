import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[720px] flex-col items-start justify-center gap-4 px-6">
      <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-dusty">404</p>
      <h1 className="font-display text-4xl font-semibold">This page wandered off the trail</h1>
      <p className="text-lg text-ink-soft">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <a href="/" className="mt-2 rounded-xl bg-peach px-6 py-3 font-semibold hover:bg-peach-hover">
        Back to home
      </a>
    </main>
  );
}
