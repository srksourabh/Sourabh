import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight, Tag } from "lucide-react";
import { BLOG_ARTICLES } from "@/lib/blog-articles";
import { SITE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  const keywords = [
    article.category.toLowerCase(),
    "energy storage",
    "battery technology",
    ...("tags" in article ? ((article as typeof article & { tags?: string[] }).tags ?? []) : []),
  ];

  return {
    ...buildMetadata({
      title: article.title,
      description: article.excerpt,
      path: `/blog/${article.slug}`,
      keywords,
    }),
  };
}

function articleSchema(article: (typeof BLOG_ARTICLES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    keywords:
      "tags" in article
        ? (article as typeof article & { tags?: string[] }).tags
        : undefined,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const tags =
    "tags" in article
      ? (article as typeof article & { tags?: string[] }).tags
      : undefined;

  // Related: same category first, then others, exclude current
  const related = [
    ...BLOG_ARTICLES.filter(
      (a) => a.slug !== slug && a.category === article.category
    ),
    ...BLOG_ARTICLES.filter(
      (a) => a.slug !== slug && a.category !== article.category
    ),
  ].slice(0, 3);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article)) }}
        type="application/ld+json"
      />
      <article className="py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
            href="/blog"
          >
            <ArrowLeft className="h-4 w-4" /> All Articles
          </Link>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge>{article.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-[var(--color-nord-mist)]">
              <Clock className="h-3 w-3" /> {article.readTime}
            </span>
            <time className="text-xs text-[var(--color-nord-mist)]">
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <h1 className="accent-line mb-6 text-balance text-2xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
            {article.title}
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-[var(--color-nord-mist)]">
            {article.excerpt}
          </p>
          <div className="prose-nord space-y-6">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-[var(--color-nord-light)]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-[var(--color-nord-slate)] pt-6">
              <Tag className="h-4 w-4 text-[var(--color-nord-mist)]" />
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-nord-slate)] px-3 py-1 text-xs text-[var(--color-nord-mist)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-[var(--color-nord-slate)] py-[var(--section-py)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold uppercase text-[var(--color-nord-white)]">
              Related Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((rel) => (
                <Link href={`/blog/${rel.slug}` as never} key={rel.slug}>
                  <Card className="flex h-full flex-col p-6 transition-colors hover:border-[var(--color-nord-teal)]">
                    <Badge className="mb-3 self-start">{rel.category}</Badge>
                    <h3 className="mb-2 text-lg font-bold uppercase leading-tight text-[var(--color-nord-white)]">
                      {rel.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 flex-1 text-sm text-[var(--color-nord-mist)]">
                      {rel.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <LeadCapture
        compact
        title="Interested in This Technology?"
        description="Speak with our engineering team about how this applies to your use case."
      />
    </>
  );
}
