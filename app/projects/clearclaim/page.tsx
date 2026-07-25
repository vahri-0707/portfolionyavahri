import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScreenFrameWithLightbox as ScreenFrame } from "@/components/ImageLightbox";

// Site's primary blue, matches blue-500 used across the codebase
const BLUE = "#3b82f6";

function AccentLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3"
      style={{ color: BLUE }}
    >
      {children}
    </span>
  );
}

function GrayLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-bold tracking-[0.12em] text-[#444] uppercase block mb-3">
      {children}
    </span>
  );
}

function Divider() {
  return <div className="border-b border-[#181818]" />;
}

export default function ClearClaimPage() {
  return (
    <div className="flex flex-col h-full w-full min-h-screen">

      {/* Sticky Header */}
      <div className="px-6 sm:px-8 h-[56px] sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 flex items-center gap-3 border-b border-[#181818]">
        <Link
          href="/projects"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#181818] transition-colors"
        >
          <ArrowLeft size={18} className="text-slate-100" />
        </Link>
        <h2 className="text-[16px] font-semibold text-slate-100 tracking-tight truncate">
          Projects
        </h2>
      </div>

      {/* Hero Cover */}
      <div className="w-full aspect-[16/9] bg-[#111] overflow-hidden">
        <img
          src="/Clear Claim Project/ClearClaim - Thumbnail Image.png"
          alt="ClearClaim showcase collage"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Block */}
      <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#222]">
        <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-2">
          ClearClaim
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">
          A reimbursement management SaaS for teams, from submission to payout, without the back-and-forth
        </p>
      </div>

      {/* Meta Grid */}
      <div className="px-6 sm:px-8 py-8 border-b border-[#222]">
        <div className="flex flex-col sm:flex-row gap-8">

          {/* Left: role / teammate / tools / timeline */}
          <div className="flex flex-col gap-7 sm:w-[180px] shrink-0">
            {[
              { label: "MY ROLE", value: "UI/UX Designer" },
              { label: "TEAMMATE", value: "Solo project, no teammates" },
              { label: "TOOLS", value: "Figma" },
              { label: "TIMELINE", value: "N/A" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <span
                  className="text-[11px] font-bold tracking-[0.12em] uppercase"
                  style={{ color: BLUE }}
                >
                  {label}
                </span>
                <span className="text-[15px] font-semibold text-slate-100">{value}</span>
              </div>
            ))}
          </div>

          {/* Right: description */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <AccentLabel>DESCRIPTION</AccentLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                ClearClaim is a B2B SaaS dashboard designed to take the friction out of expense reimbursement. It serves two roles simultaneously:{" "}
                <span className="text-slate-100 font-semibold">
                  employees who need to submit and track claims,
                </span>{" "}
                and{" "}
                <span className="text-slate-100 font-semibold">
                  managers who need to review, approve, and stay on top of team spend.
                </span>{" "}
                All within a single, connected product.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Context pull-quote */}
      <Divider />
      <div className="px-6 sm:px-8 py-12">
        <AccentLabel>CONTEXT</AccentLabel>
        <blockquote className="border-l-2 pl-5 mb-8" style={{ borderColor: BLUE }}>
          <p className="text-[19px] sm:text-[22px] text-slate-100 font-semibold leading-snug">
            Most reimbursement processes don&apos;t fail because of missing money. They fail because nobody knows{" "}
            <span style={{ color: BLUE }}>where the claim is</span> or what they need to do next.
          </p>
        </blockquote>
        <p className="text-[15px] text-[#aaa] leading-relaxed">
          Expense reimbursement in most companies runs on email threads, spreadsheets, and Slack messages that live in
          inboxes nobody checks consistently. An employee submits a claim and then waits, sometimes for days, with no
          sense of whether it was received, reviewed, or rejected. A manager gets a dozen requests in a week, across
          different formats, with no audit trail. Finance is stuck chasing receipts that were &quot;definitely attached to
          that email.&quot; ClearClaim was designed to replace all of that with a product where everyone involved knows
          exactly what is happening, what has already happened, and what needs to happen next.
        </p>
      </div>

      {/* Early screenshot pulled up before goals */}
      <div className="px-6 sm:px-8 pb-12">
        <ScreenFrame
          src="/Clear Claim Project/ClearClaim - Dashboard Employee.jpg"
          alt="ClearClaim Employee Dashboard"
        />
      </div>

      {/* Design Goals */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>DESIGN GOALS</AccentLabel>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Visibility over ambiguity",
              body: "Every claim has a status. Every status is visible. The employee who submitted a claim for a client lunch in Menteng should never have to wonder whether it was received, whether it needs a revision, or whether finance has already cut the transfer. Real-time status tracking is not a feature; it is the product's entire promise.",
            },
            {
              title: "Two roles, one system",
              body: "ClearClaim serves employees and managers with different dashboards, different navigation, and different default views, but under the same product logic. An action taken by a manager (a rejection, a request for revision) immediately surfaces as a notification and a required action for the employee who filed the claim. The loop always closes.",
            },
            {
              title: "Structured submission over free-form input",
              body: "Rejection rates in manual reimbursement systems are high not because employees are careless, but because there is no structure enforcing what a complete submission looks like. ClearClaim's four-step wizard (Category, Details, Receipt, Review) makes it structurally difficult to submit an incomplete claim, reducing rework for both sides.",
            },
            {
              title: "Decisions with context, not just a button",
              body: "A manager approving or declining a claim should not have to work from memory. Every claim detail view includes the full submission history, the employee's note, the attached receipt, and the policy limit for that category. The decision itself takes seconds. Understanding it well enough to make a fair one should take even less.",
            },
          ].map((goal, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span
                className="text-[12px] font-bold shrink-0 mt-[2px]"
                style={{ color: BLUE }}
              >
                0{i + 1}
              </span>
              <div>
                <p className="text-[15px] font-semibold text-slate-100 mb-1.5">{goal.title}</p>
                <p className="text-[15px] text-[#aaa] leading-relaxed">{goal.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>PROCESS</AccentLabel>
        <div className="relative flex flex-col">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#2a2a2a]" />
          {[
            {
              stage: "01 Research",
              title: "The Paper Trail Problem",
              body: "I started by mapping out how expense reimbursement actually works in most small-to-mid-size companies in Indonesia. The pattern was consistent: submission happens over email, approval happens over chat, and the ledger lives in a spreadsheet someone updates manually every Friday. The product gap was not a lack of tools; it was a lack of a single place where both sides of the transaction could see the same truth at the same time.",
            },
            {
              stage: "02 Define",
              title: "Two Users, Two Jobs",
              body: `The problem split cleanly along role lines. The employee's problem was always the same: "I submitted it, and now I don't know what happened." The manager's problem was the inverse: "I have 12 claims waiting, I don't know which ones are urgent, and I can't remember if I asked for a revised receipt on this one already." Separate dashboards, same underlying data model; that became the structural decision everything else was built around.`,
            },
            {
              stage: "03 Structure",
              title: "One Wizard, Four Gates",
              body: "The submission flow was the most critical piece of the employee side to get right. Free-form expense forms produce incomplete submissions. The answer was a four-step wizard: Category first (so the policy limit is visible before any amount is entered), then Details, then Receipt upload, then a Review screen before submission. Each step has exactly one job. You cannot advance to Step 3 without completing Step 2.",
            },
            {
              stage: "04 Iterate",
              title: "The Decline Conversation",
              body: "Early versions of the rejection flow were a dead end: a manager clicked Decline, the claim was marked rejected, and the employee got a notification with no context. User testing made it obvious this was wrong. Employees needed to know specifically what to fix, not just that something was wrong. The Claim Details modal was redesigned to surface the manager's comment and a structured 'What needs to be fixed' list, turning a rejection into a recoverable revision request.",
            },
          ].map((step, i) => (
            <div key={i} className="relative pl-8 pb-9 last:pb-0">
              <div
                className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 bg-[#0a0a0a]"
                style={{ borderColor: BLUE }}
              />
              <p
                className="text-[11px] font-bold tracking-[0.12em] uppercase mb-0.5"
                style={{ color: BLUE }}
              >
                {step.stage}
              </p>
              <h3 className="text-[15px] font-bold text-slate-100 mb-2">{step.title}</h3>
              <p className="text-[15px] text-[#aaa] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Walkthrough */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>SOLUTION WALKTHROUGH</AccentLabel>
        <div className="flex flex-col gap-12">

          {/* Employee Dashboard */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Employee Dashboard</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The employee dashboard is the first thing an employee sees when they log in, and it is built around one
                question: what do I need to do right now? Four stat cards at the top, Reimbursed, Pending Balance,
                Action Required, and Drafted, give a financial status read at a glance. Below them, the{" "}
                <span className="text-slate-100 font-semibold">Active Claim tracker</span> shows the
                current state of the most recent open claim as a five-stage progress bar: Submitted → Review →
                Approved → Processing → Paid. There is no ambiguity about which stage a claim is in. When Finance
                is processing a payment, the estimated transfer date appears directly on the tracker. The All Expenses
                table beneath it logs the full history, filterable by status and searchable by name, so nothing ever
                disappears into a paper trail.
              </p>
            </div>
            <ScreenFrame
              src="/Clear Claim Project/ClearClaim - Dashboard Employee.jpg"
              alt="ClearClaim Employee Dashboard"
            />
          </div>

          {/* Submit — Step 1: Category */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Submit Expense — Step 1: Category</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Submitting a new expense begins with the modal that surfaces when the{" "}
                <span className="text-slate-100 font-semibold">+ New expense</span> button is clicked. Step 1 is
                intentionally just one question: what kind of expense is this? Seven categories are displayed as
                tappable tiles: Travel, Meals, Subscription, Accommodation, Office Supplies, Training, Transport,
                Other, each with a distinct icon. The reason category comes before amount is deliberate:{" "}
                <span className="text-slate-100 font-semibold">
                  the policy limit for that category appears on the next screen,
                </span>{" "}
                so the employee sees the ceiling before they type in a number. Front-loading the constraint eliminates
                the most common reason for rejection before the claim is even submitted.
              </p>
            </div>
            <ScreenFrame
              src="/Clear Claim Project/ClearClaim - New Expenses - Step 1.jpg"
              alt="ClearClaim New Expense — Step 1: Category Selection"
            />
          </div>

          {/* Submit — Step 2: Details */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Submit Expense — Step 2: Details</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Step 2 collects the specifics: amount, currency, date, merchant, and purpose. The layout is a
                structured form, not a free-text box, because structure is what makes downstream review fast. At the
                bottom of the step, a{" "}
                <span className="text-slate-100 font-semibold">policy compliance banner</span> updates in real
                time as the employee fills in the amount. In this case, the banner reads &quot;Within company policy limit
                (max $100 for travel)&quot;, confirming before submission that the claim will not be flagged for
                over-budget before it even reaches a reviewer. The purpose field is a free-text input, but the placeholder
                copy models the level of specificity that finance actually needs: &quot;Client visit to Surabaya office,
                Q2 project kick-off meeting with PT Maju Jaya.&quot;
              </p>
            </div>
            <ScreenFrame
              src="/Clear Claim Project/ClearClaim - New Expenses - Step 2.jpg"
              alt="ClearClaim New Expense - Step 2: Expense Details"
            />
          </div>

          {/* Submit — Step 3: Receipt */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Submit Expense — Step 3: Receipt Upload</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Step 3 handles receipt attachment. The upload zone accepts JPEG, HEIC, or PDF up to 8 MB, and supports
                drag-and-drop alongside the file picker. What makes this step work is the upload state:{" "}
                <span className="text-slate-100 font-semibold">
                  each file shows its progress bar as it uploads,
                </span>{" "}
                and completed files are listed below the active upload with a delete option. An employee submitting a
                claim with two receipts, say a flight ticket PDF and a hotel invoice scan, can see both in the queue
                simultaneously, one finishing while the other is mid-upload. There is no wondering whether the file was
                attached, because the attachment is visible before the form is submitted.
              </p>
            </div>
            <ScreenFrame
              src="/Clear Claim Project/ClearClaim - New Expenses - Step 3.jpg"
              alt="ClearClaim New Expense — Step 3: Receipt Upload"
            />
          </div>

          {/* Submit — Step 4: Review */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Submit Expense — Step 4: Review & Submit</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The final step before submission is a read-only summary of everything entered across the previous three
                steps: Category, Amount, Date, Merchant, and the number of attached receipt files. Nothing can be
                changed on this screen; if something looks wrong, the Back button returns to the relevant step.
                What makes this step matter is the{" "}
                <span className="text-slate-100 font-semibold">
                  &quot;All checked passed, ready to submit&quot; banner
                </span>{" "}
                at the bottom: a single green confirmation that every required field is filled, the receipt is
                attached, and the amount is within the policy limit. The employee submits knowing there are no
                surprises waiting on the other side.
              </p>
            </div>
            <ScreenFrame
              src="/Clear Claim Project/ClearClaim - New Expenses - Step 4.jpg"
              alt="ClearClaim New Expense — Step 4: Review & Submit"
            />
          </div>

          {/* Manager Dashboard */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Manager Dashboard</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The manager dashboard shares the same shell as the employee view but is built around a completely
                different set of questions: what is overdue, what is waiting on me, and where is the team&apos;s spend
                going? Four stat cards track Overdue Claims, Pending Claims, Pending Value, and Approved Claims, each
                with a progress bar showing the ratio of resolved to outstanding items. Below the cards, the{" "}
                <span className="text-slate-100 font-semibold">Expense Trends chart</span> shows approved and
                pending spend by day over the selected window (7D, 30D, or Quarter), giving a pattern view of team
                activity that a row-by-row table can never provide. To its right, the{" "}
                <span className="text-slate-100 font-semibold">Spend by Category breakdown</span> surfaces which
                categories are trending up or down against quarterly budget, with percentage deltas calling out
                anything moving meaningfully in either direction. The Team Claims table at the bottom supports batch
                actions: a manager can select multiple claims and approve or decline them together, with a bulk
                action bar appearing the moment any row is checked.
              </p>
            </div>
            <ScreenFrame
              src="/Clear Claim Project/ClearClaim Manager - Dashboardss Manager.jpg"
              alt="ClearClaim Manager Dashboard"
            />
          </div>

          {/* Claim Details */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Claim Details — Reviewing a Submission</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                When a manager clicks into a specific claim, the Claim Details modal opens with the full record: Expense
                ID, category, merchant, date, amount, and current status. Below the header, the{" "}
                <span className="text-slate-100 font-semibold">Claim Progress thread</span> shows the
                entire history of the claim as a conversation: the employee&apos;s original submission note, the linked
                receipt file, and the manager&apos;s response, including any rejection reason. If the claim has been
                returned for revision, the &quot;What needs to be fixed&quot; section breaks down the required corrections
                into structured line items rather than a freeform comment. The employee reading this modal sees
                exactly what to do, reupload a clearer receipt, update the description, without any ambiguity about
                what &quot;revision required&quot; actually means. From the same modal, the employee can either Discard
                the claim or Resubmit it directly after making the correction.
              </p>
            </div>
            <ScreenFrame
              src="/Clear Claim Project/ClearClaim Manager - Claim Details.jpg"
              alt="ClearClaim Manager — Claim Details modal"
            />
          </div>

          {/* Decline Modal */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Decline Expense — Structured Rejection</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Declining a claim without context is the fastest way to break trust between a manager and the people
                on their team. The Decline expense modal was designed to prevent that. A freeform reason field is
                available for specifics, but below it,{" "}
                <span className="text-slate-100 font-semibold">Quick Responses</span> offer one-tap
                pre-written reasons, including Missing receipt, Over budget, Wrong category, Out of policy, Date mismatch,
                Unapproved vendor, and Late submission, that cover the vast majority of real decline cases without
                requiring the manager to write anything from scratch. Selecting a quick response populates the reason
                field, which can then be edited for specifics before confirming. The intent is that a well-structured
                rejection takes less than 15 seconds to complete, and the employee who receives it has an actual
                explanation rather than a status change with no context attached.
              </p>
            </div>
            <ScreenFrame
              src="/Clear Claim Project/ClearClaim Manager - Decline expense.jpg"
              alt="ClearClaim Manager — Decline Expense modal"
            />
          </div>

        </div>
      </div>

      {/* Key Decisions */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>KEY DECISIONS</AccentLabel>
        <div className="flex flex-col gap-5">
          {[
            {
              tension: "A single dashboard serving two different roles creates competing information needs.",
              resolution:
                "Build separate dashboard surfaces for employees and managers under the same product shell. Employees see their personal claim pipeline and status tracker. Managers see team-wide volume, trend charts, and an approval queue sorted by urgency. Same data model, opposite perspectives.",
            },
            {
              tension: "Free-form expense forms produce incomplete submissions that need multiple rounds of revision.",
              resolution:
                "Replace the form with a four-step guided wizard. Category is always Step 1 so the policy limit is visible before any amount is entered. Receipt is a dedicated step, not an optional attachment, so it cannot be forgotten. Structural gates enforce completeness before submission.",
            },
            {
              tension: "A status label like 'Rejected' tells the employee that something went wrong, not what to do about it.",
              resolution:
                "Build the rejection into a structured revision request. The Claim Details modal shows the manager's specific feedback, a line-by-line 'What needs to be fixed' list, and a Resubmit button, so the employee's next action is never ambiguous.",
            },
            {
              tension: "Managers reviewing many claims individually is slow and bottlenecks the team's reimbursement cycle.",
              resolution:
                "Enable batch approval and decline from the Team Claims table. A manager can select multiple claims, review the batch summary, and approve or decline them together. The Quick Responses in the decline modal make it fast to give structured feedback even in bulk.",
            },
          ].map((kd, i) => (
            <div
              key={i}
              className="rounded-[16px] bg-[#0d0d0d] border border-[#1e1e1e] p-5 flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#555] uppercase">
                  Tension
                </span>
                <p className="text-[14px] text-[#888] leading-relaxed">{kd.tension}</p>
              </div>
              <div className="border-t border-[#222]" />
              <div className="flex flex-col gap-1">
                <span
                  className="text-[11px] font-bold tracking-[0.12em] uppercase"
                  style={{ color: BLUE }}
                >
                  Resolution
                </span>
                <p className="text-[14px] text-[#aaa] leading-relaxed">{kd.resolution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcomes */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>OUTCOME</AccentLabel>
        <div className="flex flex-col gap-4">
          {[
            "Replaced the email-and-spreadsheet reimbursement loop with a single product where both employees and managers work from the same shared record.",
            "Turned submission from a free-form, rejection-prone process into a four-step guided wizard that enforces completeness before the claim is ever sent for review.",
            "Gave managers a contextual approval interface, including trend charts, spend-by-category, and claim history, so every decision is made with the full picture visible, not from memory.",
            "Converted rejections from dead ends into actionable revision requests with structured feedback and a one-click resubmit path.",
            "Enabled batch approvals and structured quick-responses to cut manager review time without sacrificing the clarity employees need when something goes wrong.",
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div
                className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                style={{ backgroundColor: BLUE }}
              />
              <p className="text-[15px] text-[#aaa] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>NEXT STEPS</AccentLabel>
        <div className="flex flex-col gap-5">
          {[
            {
              title: "Usability testing",
              body: "The four-step wizard and the rejection revision flow are both hypotheses. The next validation step is testing them with real employees and managers to find where the handoff breaks, specifically whether the 'What needs to be fixed' structure actually reduces back-and-forth, or whether it still requires too much interpretation.",
            },
            {
              title: "Mobile companion app",
              body: "Most expense submissions happen immediately after the spend, at a restaurant, at the airport, right after a client meeting. A mobile-first receipt capture and quick-submit flow that syncs to the main dashboard would eliminate the delay between spending and documenting, which is when most receipt loss happens.",
            },
            {
              title: "Policy engine",
              body: "ClearClaim's policy limit banners are currently static per category. A configurable policy engine, where finance or HR can set limits by category, by team, by quarter, or by employee level, would make the compliance layer dynamic rather than hardcoded, and move the product from a workflow tool to a compliance tool.",
            },
            {
              title: "Finance integration",
              body: "The last mile, actual payment, still exits ClearClaim and enters a separate system. Integrating with payroll or banking APIs to trigger the transfer directly from within the dashboard would close the loop entirely, making the 'Paid' status on the employee tracker an event that ClearClaim itself confirms rather than reports second-hand.",
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span
                className="text-[12px] font-bold shrink-0 mt-[2px]"
                style={{ color: BLUE }}
              >
                0{i + 1}
              </span>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                <span className="text-slate-100 font-semibold">{step.title} </span>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <GrayLabel>GALLERY</GrayLabel>
        <div className="flex flex-col gap-4">
          {[
            {
              src: "/Clear Claim Project/ClearClaim - Dashboard Employee.jpg",
              alt: "Employee Dashboard",
            },
            {
              src: "/Clear Claim Project/ClearClaim Manager - Dashboardss Manager.jpg",
              alt: "Manager Dashboard",
            },
            {
              src: "/Clear Claim Project/ClearClaim - New Expenses - Step 1.jpg",
              alt: "New Expense — Category Step",
            },
          ].map(({ src, alt }) => (
            <ScreenFrame key={src} src={src} alt={alt} />
          ))}
        </div>
      </div>

      {/* Bottom nav spacer */}
      <div className="h-16" />
    </div>
  );
}
