"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ── Constants ── */
const STEPS = [
  { id: 1, label: "Personal" },
  { id: 2, label: "Event" },
  { id: 3, label: "Cake" },
  { id: 4, label: "Vision" },
  { id: 5, label: "Budget" },
];

const FLAVOURS = [
  "Dark Chocolate",
  "Belgian Truffle",
  "Vanilla Bean",
  "Salted Caramel",
  "Pistachio Rose",
  "Lemon Yuzu",
  "Red Velvet",
  "Champagne",
  "Earl Grey",
];

const DIETARY = [
  "Gluten-Free",
  "Nut-Free",
  "Vegan",
  "Dairy-Free",
  "Egg-Free",
  "Kosher",
];

const TIERS = ["1 Tier", "2 Tiers", "3 Tiers", "4+ Tiers"];
const SIZES = ["Small (Up to 20)", "Medium (21–50)", "Large (51–100)", "Grand (100+)"];
const FINISHES = ["Fondant", "Buttercream", "Ganache", "Mirror Glaze", "Naked / Semi-Naked"];

const BUDGET_MIN = 500;
const BUDGET_MAX = 15000;

/* ── Sub-step Components ── */

function StepPersonal({ data, onChange }) {
  return (
    <div className="order-fields">
      <div className="order-row">
        <div className="order-field">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" placeholder="Marie" value={data.firstName} onChange={onChange} required />
        </div>
        <div className="order-field">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" placeholder="Dupont" value={data.lastName} onChange={onChange} required />
        </div>
      </div>
      <div className="order-row">
        <div className="order-field">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="marie@example.com" value={data.email} onChange={onChange} required />
        </div>
        <div className="order-field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="+33 6 00 00 00 00" value={data.phone} onChange={onChange} />
        </div>
      </div>
      <div className="order-field">
        <label htmlFor="address">Delivery Address (optional)</label>
        <input id="address" name="address" type="text" placeholder="42 Rue de Rivoli, 75004 Paris" value={data.address} onChange={onChange} />
      </div>
    </div>
  );
}

function StepEvent({ data, onChange }) {
  return (
    <div className="order-fields">
      <div className="order-row">
        <div className="order-field">
          <label htmlFor="eventType">Event Type</label>
          <select id="eventType" name="eventType" value={data.eventType} onChange={onChange} required>
            <option value="" disabled>Select occasion…</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Corporate Gala</option>
            <option>Engagement</option>
            <option>Baby Shower</option>
            <option>Christening</option>
            <option>Other</option>
          </select>
        </div>
        <div className="order-field">
          <label htmlFor="eventDate">Event Date</label>
          <input id="eventDate" name="eventDate" type="date" value={data.eventDate} onChange={onChange} required />
        </div>
      </div>
      <div className="order-row">
        <div className="order-field">
          <label htmlFor="guestCount">Guest Count</label>
          <input id="guestCount" name="guestCount" type="number" min="1" placeholder="e.g. 80" value={data.guestCount} onChange={onChange} required />
        </div>
        <div className="order-field">
          <label htmlFor="venue">Venue / Location</label>
          <input id="venue" name="venue" type="text" placeholder="e.g. Château de Versailles" value={data.venue} onChange={onChange} />
        </div>
      </div>
      <div className="order-field">
        <label htmlFor="eventNotes">Additional Event Notes</label>
        <textarea id="eventNotes" name="eventNotes" placeholder="Theme, dress code, any special requirements for the setting…" value={data.eventNotes} onChange={onChange} />
      </div>
    </div>
  );
}

function StepCake({ data, onChange, onToggle }) {
  return (
    <div className="order-fields">
      <div className="order-row">
        <div className="order-field">
          <label htmlFor="tiers">Number of Tiers</label>
          <select id="tiers" name="tiers" value={data.tiers} onChange={onChange} required>
            <option value="" disabled>Select…</option>
            {TIERS.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="order-field">
          <label htmlFor="size">Serving Size</label>
          <select id="size" name="size" value={data.size} onChange={onChange} required>
            <option value="" disabled>Select…</option>
            {SIZES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div className="order-field">
        <label htmlFor="finish">Finish / Coating</label>
        <select id="finish" name="finish" value={data.finish} onChange={onChange}>
          <option value="" disabled>Select finish…</option>
          {FINISHES.map(f => <option key={f}>{f}</option>)}
        </select>
      </div>
      <div className="order-field">
        <label>Flavour Profile (select all that apply)</label>
        <div className="order-option-grid" style={{ marginTop: "var(--spacing-3)" }}>
          {FLAVOURS.map(f => {
            const selected = data.flavours.includes(f);
            return (
              <label key={f} className={`order-option-chip${selected ? " selected" : ""}`}>
                <input type="checkbox" name="flavours" value={f} checked={selected} onChange={() => onToggle("flavours", f)} />
                <span className="order-option-chip-dot" />
                <span>{f}</span>
              </label>
            );
          })}
        </div>
      </div>
      <div className="order-field">
        <label>Dietary Requirements</label>
        <div className="order-option-grid" style={{ marginTop: "var(--spacing-3)" }}>
          {DIETARY.map(d => {
            const selected = data.dietary.includes(d);
            return (
              <label key={d} className={`order-option-chip${selected ? " selected" : ""}`}>
                <input type="checkbox" name="dietary" value={d} checked={selected} onChange={() => onToggle("dietary", d)} />
                <span className="order-option-chip-dot" />
                <span>{d}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StepVision({ data, onChange, onFileChange, files, dragging, onDragEnter, onDragLeave, onDrop }) {
  return (
    <div className="order-fields">
      <div className="order-field">
        <label>Upload Mood Boards or Sketches</label>
        <div
          className={`upload-zone${dragging ? " dragging" : ""}`}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={e => e.preventDefault()}
          onDrop={onDrop}
        >
          <input type="file" multiple accept="image/*,.pdf" onChange={onFileChange} />
          <span className="upload-icon" aria-hidden="true">🎨</span>
          <p className="upload-label">Drop mood boards or sketches here</p>
          <p className="upload-sublabel">or click to browse files</p>
          <p className="upload-limit">Maximum file size: 20 MB per file</p>
        </div>
        {files.length > 0 && (
          <div className="upload-files-list">
            {files.map((f, i) => (
              <span key={i} className="upload-file-chip">📎 {f.name}</span>
            ))}
          </div>
        )}
      </div>
      <div className="order-field">
        <label htmlFor="colourPalette">Colour Palette / Theme</label>
        <input id="colourPalette" name="colourPalette" type="text" placeholder="e.g. Ivory, Dusty Rose, Gold leaf accents" value={data.colourPalette} onChange={onChange} />
      </div>
      <div className="order-field">
        <label htmlFor="inspiration">Describe Your Vision</label>
        <textarea id="inspiration" name="inspiration" placeholder="Tell us your story — the mood, textures, motifs, or memories you'd like us to translate into sugar and flour…" value={data.inspiration} onChange={onChange} />
      </div>
      <div className="order-field">
        <label htmlFor="referenceLinks">Reference Links (optional)</label>
        <input id="referenceLinks" name="referenceLinks" type="text" placeholder="Pinterest board, Instagram links, etc." value={data.referenceLinks} onChange={onChange} />
      </div>
    </div>
  );
}

function StepBudget({ budget, onBudgetChange, agreed, onAgreeChange }) {
  const percent = ((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100;

  return (
    <div className="order-fields">
      <div className="order-field">
        <label>Estimated Budget</label>
        <div className="budget-slider-wrapper" style={{ marginTop: "var(--spacing-6)" }}>
          <div className="budget-display">
            ₹{budget.toLocaleString()}
            <span>INR</span>
          </div>
          <input
            type="range"
            className="order-range"
            min={BUDGET_MIN}
            max={BUDGET_MAX}
            step={250}
            value={budget}
            onChange={onBudgetChange}
            style={{ "--range-fill": `${percent}%` }}
          />
          <div className="budget-range-labels">
            <span>₹{BUDGET_MIN.toLocaleString()}</span>
            <span>₹{BUDGET_MAX.toLocaleString()}+</span>
          </div>
        </div>
      </div>
      <div className="order-field">
        <label htmlFor="additionalNotes">Final Notes for Our Artisans</label>
        <textarea id="additionalNotes" name="additionalNotes" placeholder="Anything else you'd like us to know before we begin the consultation…" />
      </div>
      <div className="order-terms">
        <input type="checkbox" id="agree" checked={agreed} onChange={onAgreeChange} required />
        <p className="order-terms-text">
          By submitting, you agree to our{" "}
          <Link href="/terms">Consultation Terms</Link>.{" "}
          A member of our atelier will contact you within 48 hours to discuss your vision in detail.
        </p>
      </div>
    </div>
  );
}

/* ── Main Form Component ── */
export default function OrderForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [agreed, setAgreed] = useState(false);
  const [budget, setBudget] = useState(3000);

  const [personal, setPersonal] = useState({ firstName: "", lastName: "", email: "", phone: "", address: "" });
  const [event, setEvent] = useState({ eventType: "", eventDate: "", guestCount: "", venue: "", eventNotes: "" });
  const [cake, setCake] = useState({ tiers: "", size: "", finish: "", flavours: [], dietary: [] });
  const [vision, setVision] = useState({ colourPalette: "", inspiration: "", referenceLinks: "" });

  const handleChange = (setter) => (e) => setter(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleToggle = (field, value) => {
    setCake(prev => {
      const arr = prev[field];
      return { ...prev, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] };
    });
  };

  const handleFileChange = (e) => setFiles(Array.from(e.target.files));

  const onDragEnter = useCallback((e) => { e.preventDefault(); setDragging(true); }, []);
  const onDragLeave = useCallback(() => setDragging(false), []);
  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    setFiles(Array.from(e.dataTransfer.files));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  const STEP_META = [
    { eyebrow: "Step 1 of 5", title: "Personal Information" },
    { eyebrow: "Step 2 of 5", title: "Event Details" },
    { eyebrow: "Step 3 of 5", title: "Cake Specifications" },
    { eyebrow: "Step 4 of 5", title: "Creative Vision" },
    { eyebrow: "Step 5 of 5", title: "Estimated Budget" },
  ];

  if (submitted) {
    return (
      <section className="order-form-section">
        <div className="order-form-inner">
          <div className="order-form-card order-success">
            <span className="order-success-icon">✨</span>
            <h2 className="order-success-title">Your Vision Has Been Received</h2>
            <p className="order-success-subtitle">
              A member of our atelier will contact you within 48 hours to begin the 
              bespoke consultation. In the meantime, explore our current collections.
            </p>
            <div className="hero-action-wrapper">
              <Link href="/collection" className="btn btn-primary">Explore Collections</Link>
              <Link href="/" className="btn btn-outline">Return Home</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="order-form-section">
      <div className="order-form-inner">
        {/* Progress Bar */}
        <nav className="order-progress" aria-label="Form progress">
          {STEPS.map((s) => (
            <div
              key={s.id}
              className={`order-progress-step${step === s.id ? " active" : ""}${step > s.id ? " completed" : ""}`}
            >
              <div className="order-progress-node">
                {step > s.id ? "✓" : s.id}
              </div>
              <span className="order-progress-label">{s.label}</span>
            </div>
          ))}
        </nav>

        {/* Form Card */}
        <form className="order-form-card" onSubmit={handleSubmit} id="bespoke-order-form">
          <div className="order-step-header">
            <p className="order-step-eyebrow">{STEP_META[step - 1].eyebrow}</p>
            <h2 className="order-step-title">{STEP_META[step - 1].title}</h2>
          </div>

          {step === 1 && <StepPersonal data={personal} onChange={handleChange(setPersonal)} />}
          {step === 2 && <StepEvent data={event} onChange={handleChange(setEvent)} />}
          {step === 3 && <StepCake data={cake} onChange={handleChange(setCake)} onToggle={handleToggle} />}
          {step === 4 && (
            <StepVision
              data={vision}
              onChange={handleChange(setVision)}
              onFileChange={handleFileChange}
              files={files}
              dragging={dragging}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            />
          )}
          {step === 5 && (
            <StepBudget
              budget={budget}
              onBudgetChange={(e) => setBudget(Number(e.target.value))}
              agreed={agreed}
              onAgreeChange={(e) => setAgreed(e.target.checked)}
            />
          )}

          {/* Navigation */}
          <div className="order-nav-buttons">
            {step > 1 && (
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setStep(s => s - 1)}
              >
                ← Previous
              </button>
            )}
            {step < 5 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setStep(s => s + 1)}
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!agreed}
                style={!agreed ? { opacity: 0.5, cursor: "not-allowed" } : {}}
              >
                Submit Vision
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
