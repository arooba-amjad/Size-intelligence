import { useMemo, useState } from "react";
import type { FormEvent, HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  FiHome,
  FiUser,
  FiMail,
  FiLock,
  FiKey,
  FiCreditCard,
  FiMapPin,
  FiCheck,
  FiCopy,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import backgroundImage from "../../../assets/get-api-key-bg.png";

type Step = 1 | 2 | 3;

type AccountForm = {
  fullName: string;
  email: string;
  storeName: string;
  password: string;
  confirmPassword: string;
};

type PaymentForm = {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  billingZip: string;
};

type FieldErrors = Partial<Record<keyof AccountForm | keyof PaymentForm, string>>;

const emptyAccount: AccountForm = {
  fullName: "",
  email: "",
  storeName: "",
  password: "",
  confirmPassword: "",
};

const emptyPayment: PaymentForm = {
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
  billingZip: "",
};

function generateApiKey() {
  const chunk = () =>
    crypto.getRandomValues(new Uint8Array(4)).reduce(
      (acc, byte) => acc + byte.toString(16).padStart(2, "0"),
      ""
    );
  return `si_live_${chunk()}${chunk()}${chunk()}${chunk()}`;
}

function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

const GetApiKey = () => {
  const [step, setStep] = useState<Step>(1);
  const [account, setAccount] = useState<AccountForm>(emptyAccount);
  const [payment, setPayment] = useState<PaymentForm>(emptyPayment);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [apiKey, setApiKey] = useState("");
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const stepTitle = useMemo(() => {
    if (step === 1) return "Account Details";
    if (step === 2) return "Payment Details";
    return "Your API Key";
  }, [step]);

  const updateAccount = (field: keyof AccountForm, value: string) => {
    setAccount((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const updatePayment = (field: keyof PaymentForm, value: string) => {
    setPayment((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateAccount = () => {
    const next: FieldErrors = {};

    if (!account.fullName.trim()) next.fullName = "Full name is required";
    if (!account.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(account.email))
      next.email = "Enter a valid email";
    if (!account.storeName.trim()) next.storeName = "Store name is required";
    if (!account.password) next.password = "Password is required";
    else if (account.password.length < 8)
      next.password = "Password must be at least 8 characters";
    if (!account.confirmPassword)
      next.confirmPassword = "Confirm your password";
    else if (account.password !== account.confirmPassword)
      next.confirmPassword = "Passwords do not match";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validatePayment = () => {
    const next: FieldErrors = {};
    const cardDigits = payment.cardNumber.replace(/\s/g, "");

    if (!payment.cardName.trim()) next.cardName = "Name on card is required";
    if (!cardDigits) next.cardNumber = "Card number is required";
    else if (cardDigits.length !== 16)
      next.cardNumber = "Enter a 16-digit card number";
    if (!payment.expiry) next.expiry = "Expiry is required";
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(payment.expiry))
      next.expiry = "Use MM/YY format";
    if (!payment.cvc) next.cvc = "CVC is required";
    else if (!/^\d{3,4}$/.test(payment.cvc)) next.cvc = "Enter a valid CVC";
    if (!payment.billingZip.trim()) next.billingZip = "ZIP / postal code is required";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goToPayment = (event: FormEvent) => {
    event.preventDefault();
    if (!validateAccount()) return;
    setStep(2);
  };

  const goToApiKey = (event: FormEvent) => {
    event.preventDefault();
    if (!validatePayment()) return;
    setApiKey(generateApiKey());
    setStep(3);
  };

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#506677]">
      {/* Header — Pic 3 style: light gradient, dark slate icon + title */}
      <header
        className="relative z-20 flex shrink-0 items-center justify-center px-5 py-5 sm:px-8 sm:py-6"
        style={{
          background: "linear-gradient(to bottom, #E8EBED 0%, #C5CED6 55%, #A8B6C2 100%)",
        }}
      >
        <Link
          to="/"
          aria-label="Go to home"
          className="absolute left-5 top-1/2 inline-flex -translate-y-1/2 items-center justify-center text-[#4A5E73] transition hover:opacity-75 sm:left-8"
        >
          <FiHome size={26} strokeWidth={2} />
        </Link>

        <h1 className="text-center text-xl font-bold tracking-tight text-[#4A5E73] sm:text-2xl">
          Size Intelligence API
        </h1>
      </header>

      {/* Pic 1 starts after the heading — muted steel blue-gray like first design */}
      <div className="relative flex min-h-0 flex-1 flex-col bg-[#A8B6C2]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "#506677",
          }}
        />
        <img
          src={backgroundImage}
          alt=""
          width={1506}
          height={1062}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            // Pull deep teal toward muted steel blue-gray (#506677 / #4A5D6A)
            filter: "saturate(0.28) brightness(1.08) contrast(1.18)",
            mixBlendMode: "soft-light",
            opacity: 0.95,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "rgba(80, 102, 119, 0.45)",
          }}
        />

        <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full max-w-[520px] overflow-hidden rounded-[32px] border border-white/40 bg-white/[0.14] shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-[22px]"
          >
            {/* Form body */}
            <div className="relative px-6 py-6 sm:px-8 sm:py-7">
              {/* Step rail — left edge */}
              <div className="absolute left-4 top-8 bottom-8 hidden flex-col items-center sm:left-5 sm:flex">
                {[1, 2, 3].map((n, index) => {
                  const active = step === n;
                  const complete = step > n;
                  return (
                    <div key={n} className="flex flex-col items-center">
                      <div
                        className={`h-2 w-2 rounded-full transition ${
                          active || complete ? "bg-white" : "bg-white/35"
                        }`}
                      />
                      {index < 2 && (
                        <div
                          className={`my-1 w-px min-h-14 ${
                            step > n ? "bg-white" : "bg-white/35"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Centered entries */}
              <div className="mx-auto w-full max-w-[300px]">
                <div className="mb-4 text-center">
                  <p className="text-xs font-medium text-white sm:text-sm">
                    Step {step}
                  </p>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    {stepTitle}
                  </h2>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.form
                      key="step-1"
                      onSubmit={goToPayment}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-2.5"
                      noValidate
                    >
                        <Field
                          icon={<FiUser />}
                          type="text"
                          placeholder="Full Name"
                          value={account.fullName}
                          error={errors.fullName}
                          onChange={(v) => updateAccount("fullName", v)}
                          autoComplete="name"
                        />
                        <Field
                          icon={<FiMail />}
                          type="email"
                          placeholder="Enter Email"
                          value={account.email}
                          error={errors.email}
                          onChange={(v) => updateAccount("email", v)}
                          autoComplete="email"
                        />
                        <Field
                          icon={<HiOutlineShoppingBag />}
                          type="text"
                          placeholder="Enter Store name"
                          value={account.storeName}
                          error={errors.storeName}
                          onChange={(v) => updateAccount("storeName", v)}
                          autoComplete="organization"
                        />
                        <Field
                          icon={<FiLock />}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password"
                          value={account.password}
                          error={errors.password}
                          onChange={(v) => updateAccount("password", v)}
                          autoComplete="new-password"
                        />
                        <Field
                          icon={<FiKey />}
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          value={account.confirmPassword}
                          error={errors.confirmPassword}
                          onChange={(v) => updateAccount("confirmPassword", v)}
                          autoComplete="new-password"
                        />

                        <label className="flex items-center justify-center gap-2 pt-0.5 text-sm text-white">
                          <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={(e) => setShowPassword(e.target.checked)}
                            className="rounded border-white/40"
                          />
                          Show passwords
                        </label>

                        <div className="flex justify-center pt-3">
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-full bg-[#D9E4EC] px-6 py-2.5 text-sm font-bold text-[#4A6273] shadow-md transition hover:bg-[#e8eef3] active:scale-[0.98] sm:text-base"
                          >
                            Payment Details
                            <FiArrowRight size={16} />
                          </button>
                        </div>
                      </motion.form>
                    )}

                    {step === 2 && (
                      <motion.form
                        key="step-2"
                        onSubmit={goToApiKey}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-2.5"
                        noValidate
                      >
                        <Field
                          icon={<FiUser />}
                          type="text"
                          placeholder="Name on card"
                          value={payment.cardName}
                          error={errors.cardName}
                          onChange={(v) => updatePayment("cardName", v)}
                          autoComplete="cc-name"
                        />
                        <Field
                          icon={<FiCreditCard />}
                          type="text"
                          inputMode="numeric"
                          placeholder="Card number"
                          value={payment.cardNumber}
                          error={errors.cardNumber}
                          onChange={(v) =>
                            updatePayment("cardNumber", formatCardNumber(v))
                          }
                          autoComplete="cc-number"
                        />
                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                          <Field
                            icon={<FiKey />}
                            type="text"
                            inputMode="numeric"
                            placeholder="MM/YY"
                            value={payment.expiry}
                            error={errors.expiry}
                            onChange={(v) =>
                              updatePayment("expiry", formatExpiry(v))
                            }
                            autoComplete="cc-exp"
                          />
                          <Field
                            icon={<FiLock />}
                            type="text"
                            inputMode="numeric"
                            placeholder="CVC"
                            value={payment.cvc}
                            error={errors.cvc}
                            onChange={(v) =>
                              updatePayment(
                                "cvc",
                                v.replace(/\D/g, "").slice(0, 4)
                              )
                            }
                            autoComplete="cc-csc"
                          />
                        </div>
                        <Field
                          icon={<FiMapPin />}
                          type="text"
                          placeholder="Billing ZIP / postal code"
                          value={payment.billingZip}
                          error={errors.billingZip}
                          onChange={(v) => updatePayment("billingZip", v)}
                          autoComplete="postal-code"
                        />

                        <p className="pt-0.5 text-center text-xs text-white/80 sm:text-sm">
                          Demo checkout — no real charge is made.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                          >
                            <FiArrowLeft size={16} />
                            Back
                          </button>
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-full bg-[#D9E4EC] px-6 py-2.5 text-sm font-bold text-[#4A6273] shadow-md transition hover:bg-[#e8eef3] active:scale-[0.98] sm:text-base"
                          >
                            Get API Key
                            <FiArrowRight size={16} />
                          </button>
                        </div>
                      </motion.form>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <div className="rounded-[28px] border border-white/35 bg-white/[0.18] p-5 text-white">
                          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white">
                            <FiCheck />
                            Account ready
                          </div>
                          <p className="text-sm text-white/85">
                            Welcome,{" "}
                            <span className="font-semibold text-white">
                              {account.fullName || "developer"}
                            </span>
                            . Your key for{" "}
                            <span className="font-semibold text-white">
                              {account.storeName || "your store"}
                            </span>{" "}
                            is ready to use.
                          </p>
                        </div>

                        <div className="rounded-[28px] border border-white/35 bg-[#4A6273]/55 p-4">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                            Live API key
                          </p>
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <code className="block flex-1 break-all rounded-full bg-black/20 px-4 py-3 text-sm text-white">
                              {apiKey}
                            </code>
                            <button
                              type="button"
                              onClick={copyKey}
                              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9E4EC] px-4 py-3 text-sm font-bold text-[#4A6273] transition hover:bg-[#e8eef3]"
                            >
                              <FiCopy size={16} />
                              {copied ? "Copied" : "Copy"}
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                          <Link
                            to="/docs"
                            className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                          >
                            View Docs
                          </Link>
                          <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-full bg-[#D9E4EC] px-6 py-2.5 text-sm font-bold text-[#4A6273] shadow-md transition hover:bg-[#e8eef3]"
                          >
                            Back to Home
                            <FiArrowRight size={16} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

type FieldProps = {
  icon: ReactNode;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
};

const Field = ({
  icon,
  type,
  placeholder,
  value,
  error,
  onChange,
  autoComplete,
  inputMode,
}: FieldProps) => {
  return (
    <div className="w-full">
      <label className="flex w-full items-center gap-2.5 rounded-full border border-white/25 bg-white/40 px-4 py-2.5 shadow-sm backdrop-blur-sm transition focus-within:border-white/50 focus-within:bg-white/50">
        <span className="shrink-0 text-[#556B7D]">{icon}</span>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-[#556B7D] outline-none placeholder:text-[#556B7D]"
        />
      </label>
      {error && (
        <p className="mt-1 px-1 text-center text-xs font-medium text-[#ffd4d4]">
          {error}
        </p>
      )}
    </div>
  );
};

export default GetApiKey;
