export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  slug: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Why Consistency Beats Creativity in UI Design",
    excerpt:
      "Designers love chasing novelty. But the best digital products aren't always the most creative — they're the most predictable. Here's what I've learned after 3 years of shipping interfaces.",
    coverImage:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
    date: "Jun 28, 2025",
    slug: "consistency-beats-creativity-ui-design",
    tags: ["UI Design", "Process", "Opinion"],
    readingTime: "5 min read",
    content: `Designers love to chase novelty. A fresh gradient, an unconventional layout, an unexpected micro-interaction. It feels productive. It feels creative. But after three years of shipping real products for real users, I've come to believe that **consistency beats creativity** almost every single time.

## The Predictability Principle

When a user opens your app for the first time, they bring with them years of learned behavior from every other app they've ever used. Your primary action button should probably be blue. Your destructive action should probably be red. Your navigation should probably be at the bottom on mobile and the left on desktop.

Breaking these patterns isn't bold — it's expensive. It costs your users cognitive load every single time they encounter your "creative" decision.

## Where Creativity Actually Lives

This isn't an argument against creativity. It's an argument for **where** to apply it.

- **Brand moments** — splash screens, onboarding, empty states. These are designed to be noticed.
- **Delight details** — hover states, loading animations, success confetti. These are discovered, not navigated.
- **Visual identity** — your color palette, your illustration style, your typography. These differentiate you without confusing anyone.

The navigation? Keep it boring. The form inputs? Keep them familiar. The checkout flow? Don't reinvent it.

## Closing Thought

The next time you have a "what if we did something completely different here" moment, ask: *is this a moment users will delight in, or navigate through?* If it's navigation, choose boring. Save the creativity for the moments that deserve it.`,
  },
  {
    id: "b2",
    title: "Designing for Dark Mode: More Than Just Inverting Colors",
    excerpt:
      "Dark mode isn't a color scheme — it's a completely different visual context. Here's how I approach it from the ground up, and why copy-pasting your light palette never works.",
    coverImage:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop",
    date: "May 14, 2025",
    slug: "designing-for-dark-mode",
    tags: ["Dark Mode", "Color Theory", "UI Design"],
    readingTime: "7 min read",
    content: `Dark mode is everywhere. Every major operating system supports it. Every design-forward app ships it. And almost every team that implements it makes the same mistake: they think it's a simple color swap.

It isn't.

## The Illusion of Inversion

If you take your light mode palette and invert the lightness values, you'll end up with a UI that *looks* dark but *feels* wrong. Shadows that used to add depth now look like glow effects. Borders that were subtle become harsh. Text that was perfectly readable suddenly floats at the wrong weight.

The problem is that **darkness changes the perception of contrast, depth, and weight**.

## How I Approach Dark Mode

**1. Start with your surface colors, not your brand colors.**

In light mode, your surfaces (backgrounds, cards) are near-white. In dark mode, they're near-black — but crucially, they should still have a *hierarchy*. My go-to stack:
- Page background: \`#0a0a0a\`
- Raised surfaces (cards): \`#121212\`
- Interactive surfaces (inputs, buttons): \`#1a1a1a\`
- Borders and dividers: \`#181818\`

**2. Desaturate your brand colors.**

A fully-saturated blue (\`#0070F3\`) that looks great on a white background will vibrate aggressively on near-black. Dial the saturation down 15–25% and bump the lightness up slightly.

**3. Rethink your shadows.**

Shadows work by making something appear lighter than what's behind it (in real life, shadows are dark — but on a dark background, that effect reverses). Replace traditional box-shadows with subtle border highlights or slight background lightening instead.

## The One Rule

Test dark mode on an actual device in an actually dark room. What looks fine on your monitor at 400 nits will look completely different on a phone screen at night. Design for the context, not the canvas.`,
  },
  {
    id: "b3",
    title: "From Figma to Shipped: What I Learned Handoff the Hard Way",
    excerpt:
      "Three months into my first design-to-engineering handoff, I realized I had been designing in a vacuum. Here's the workflow I rebuilt from scratch — and what I wish someone had told me earlier.",
    coverImage:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    date: "Apr 2, 2025",
    slug: "figma-to-shipped-design-handoff",
    tags: ["Workflow", "Handoff", "Collaboration"],
    readingTime: "6 min read",
    content: `Three months into my first job working with an engineering team, I realized something embarrassing: I had been designing in a vacuum. My Figma files were beautiful. My prototypes were smooth. And the shipped product looked almost nothing like my designs.

Nobody was doing anything wrong. I just didn't understand the constraints.

## What "Handoff" Actually Means

Handoff isn't a moment — it's a *relationship*. When you drop a Figma link in Slack and say "here you go," you haven't handed off anything. You've handed it *over*. That's very different.

Real handoff is collaborative. It means your engineer can open your file and understand not just *what* to build, but *why* decisions were made, *what* can flex, and *where* the edge cases are.

## What I Changed

**Annotate intent, not just specs.**

Instead of just labeling "padding: 16px," I started writing "this padding creates breathing room between the icon and label — can compress to 12px if needed at small breakpoints." This gave engineers room to adapt without breaking the design language.

**Design the edge cases.**

Empty states. Error states. Truncated text. 99+ notifications. If you don't design these, they get designed by accident. I now treat edge cases as first-class design deliverables.

**Join at least one engineering standup per sprint.**

You'll learn more about implementation constraints in one standup than in a week of solo design work. Understanding what's expensive to build changes how you design — and makes you a much better collaborator.

## The Shift

Once I stopped treating handoff as a transaction and started treating it as a conversation, the gap between my Figma files and the shipped product shrank dramatically. The engineers stopped guessing. I stopped getting surprised. And the product got better.`,
  },
];
