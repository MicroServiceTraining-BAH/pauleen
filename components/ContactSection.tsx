'use client';

import Link from 'next/link';
import { useState } from 'react';

import { EVENT_TYPES, SITE_CONFIG } from '@/lib/constants';

type FormState = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FORM: FormState = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  guestCount: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email address.';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!form.eventType) newErrors.eventType = 'Please select an event type.';
    if (!form.message.trim()) newErrors.message = 'Please tell us about your event.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');

    // Mailto fallback — opens email client with form data
    const subject = encodeURIComponent(
      `Catering Quote Request — ${form.eventType} — ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEvent Type: ${form.eventType}\nEvent Date: ${form.eventDate || 'TBD'}\nGuest Count: ${form.guestCount || 'TBD'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('success');
      setForm(INITIAL_FORM);
    }, 500);
  };

  return (
    <section id="contact" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: Info */}
          <div>
            <span className="section-tag mb-6 block w-fit">Get in Touch</span>
            <h2 className="heading-section mb-5 text-balance">
              Let&apos;s Plan Your{' '}
              <span className="text-gradient-warm">Perfect Event</span>
            </h2>
            <div className="divider-gold mb-8" />
            <p className="mb-10 text-base leading-relaxed text-primary/60">
              Ready to bring authentic Caribbean cuisine to your next event? Fill out
              the form and {SITE_CONFIG.chefAlias} will get back to you within 24 hours
              with a personalized quote.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <ContactDetail
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                label="Phone"
                value={SITE_CONFIG.phone}
                href={SITE_CONFIG.phoneHref}
              />
              <ContactDetail
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                label="Email"
                value={SITE_CONFIG.email}
                href={SITE_CONFIG.emailHref}
              />
              <ContactDetail
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                label="Location"
                value={`${SITE_CONFIG.address}, ${SITE_CONFIG.city}`}
              />
            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary/40">
                Follow Us
              </p>
              <div className="flex gap-3">
                <SocialLink href={SITE_CONFIG.social.instagram} label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </SocialLink>
                <SocialLink href={SITE_CONFIG.social.facebook} label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </SocialLink>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm lg:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Quote Request Sent!
                </h3>
                <p className="mt-3 text-sm text-primary/60">
                  Thank you for reaching out. {SITE_CONFIG.chefAlias} will be in touch
                  within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary mt-6"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    value={form.name}
                    error={errors.name}
                    placeholder="Jane Smith"
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    error={errors.phone}
                    placeholder="(555) 000-0000"
                    onChange={handleChange}
                    required
                  />
                </div>

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  placeholder="jane@example.com"
                  onChange={handleChange}
                  required
                />

                <div>
                  <label
                    htmlFor="eventType"
                    className="mb-1.5 block text-sm font-medium text-primary"
                  >
                    Event Type <span className="text-accent">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                      errors.eventType
                        ? 'border-red-400 bg-red-50'
                        : 'border-primary/15 bg-surface'
                    }`}
                  >
                    <option value="">Select event type...</option>
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="mt-1 text-xs text-red-500">{errors.eventType}</p>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Event Date"
                    name="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Guest Count"
                    name="guestCount"
                    type="number"
                    value={form.guestCount}
                    placeholder="e.g. 75"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-primary"
                  >
                    Tell Us About Your Event <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your event, cuisine preferences, dietary needs, and any special requests..."
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                      errors.message
                        ? 'border-red-400 bg-red-50'
                        : 'border-primary/15 bg-surface'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Send Quote Request
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-primary/40">
                  Or call us directly at{' '}
                  <Link href={SITE_CONFIG.phoneHref} className="text-accent hover:underline">
                    {SITE_CONFIG.phone}
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormField({
  label,
  name,
  type,
  value,
  error,
  placeholder,
  required = false,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-primary">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
          error ? 'border-red-400 bg-red-50' : 'border-primary/15 bg-surface'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

type ContactDetailProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

function ContactDetail({ icon, label, value, href }: ContactDetailProps) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/40">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-primary">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block transition-opacity hover:opacity-80">
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}

type SocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-surface text-primary/60 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
    >
      {children}
    </a>
  );
}
