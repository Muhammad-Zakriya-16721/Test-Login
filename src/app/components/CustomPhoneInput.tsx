"use client";

import * as React from "react";
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import { Check, ChevronsUpDown, Globe } from "lucide-react";
import type { Country } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Simple Country Select Component
const CountrySelect = ({
  value,
  onChange,
  className,
}: {
  value: Country;
  onChange: (country: Country) => void;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={twMerge(
          "flex h-10 w-[80px] cursor-pointer items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300 transition-all",
          className,
        )}
      >
        <span className="flex items-center gap-2 truncate">
          {value ? (
            <span className="font-mono text-xs font-medium">{value}</span>
          ) : (
            <Globe className="h-4 w-4 opacity-50" />
          )}
        </span>
        <ChevronsUpDown className="h-3 w-3 shrink-0 opacity-50" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full z-[60] mt-1 max-h-60 w-[300px] overflow-auto rounded-md border border-zinc-200 bg-white py-1 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 animate-dropdown">
          {getCountries().map((country) => (
            <div
              key={country}
              className={clsx(
                "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 mx-1",
                value === country && "bg-zinc-100 dark:bg-zinc-800 font-medium",
              )}
              onClick={() => {
                onChange(country);
                setIsOpen(false);
              }}
            >
              <div className="mr-2 flex h-5 w-8 items-center justify-center rounded bg-zinc-50 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">
                {country}
              </div>
              <span className="flex-1 truncate">{en[country]}</span>
              <span className="ml-auto text-xs text-zinc-400 font-mono">
                +{getCountryCallingCode(country)}
              </span>
              {value === country && (
                <Check className="ml-2 h-3.5 w-3.5 opacity-100" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export function CustomPhoneInput({
  value,
  onChange,
  className,
}: {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  className?: string;
}) {
  const [country, setCountry] = React.useState<Country>("US");

  return (
    <div className={twMerge("flex gap-2", className)}>
      <CountrySelect value={country} onChange={setCountry} />
      <PhoneInput
        country={country}
        value={value}
        onChange={onChange}
        className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 transition-all font-mono"
        placeholder="Enter phone number"
      />
    </div>
  );
}
