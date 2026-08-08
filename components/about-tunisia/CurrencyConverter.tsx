"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { currencies } from "@/constants";
import Image from "next/image";

const FALLBACK_EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  AED: 3.67,
  BHD: 0.376,
  DZD: 134.5,
  EGP: 30.9,
  IQD: 1310,
  IRR: 42000,
  JOD: 0.709,
  KWD: 0.307,
  LBP: 15000,
  LYD: 4.83,
  MAD: 9.8,
  OMR: 0.384,
  QAR: 3.64,
  SAR: 3.75,
  SYP: 12500,
  YER: 250,
  TND: 3.1,
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [error, setError] = useState("");
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    FALLBACK_EXCHANGE_RATES
  );
  const [isFromInputFocused, setIsFromInputFocused] = useState(false);
  const [isToInputFocused, setIsToInputFocused] = useState(false);

  const fromDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchConversion = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD",
          {
            method: "GET",
            mode: "cors",
          }
        );

        if (!response.ok) {
          throw new Error("Conversion failed");
        }

        const data = await response.json();
        if (!data?.rates) {
          throw new Error("Invalid response format");
        }

        setExchangeRates(data.rates);
        setError("");
      } catch (err) {
        console.warn("Using fallback exchange rates:", err);
      }
    };

    fetchConversion();
  }, []);

  useEffect(() => {
    if (Object.keys(exchangeRates).length === 0) return;
    try {
      const usdToFromRate =
        fromCurrency === "USD" ? 1 : 1 / exchangeRates[fromCurrency];
      const usdToTndRate = exchangeRates["TND"];
      const finalRate = usdToFromRate * usdToTndRate;

      setConvertedAmount(parseFloat((amount * finalRate).toFixed(2)));
    } catch (err) {
      console.error("Conversion error:", err);
      setError("Currency conversion failed. Please try again.");
    }
  }, [amount, fromCurrency, exchangeRates]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        fromDropdownRef.current &&
        !fromDropdownRef.current.contains(event.target as Node) &&
        showFromDropdown
      ) {
        setShowFromDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFromDropdown]);

  const handleFromCurrencyChange = (currency: string) => {
    setFromCurrency(currency);
    setShowFromDropdown(false);
  };

  return (
    <section className="bg-dark flex justify-center items-center py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Say Hi to the Tunisian Dinar 👋
          </h2>

          <p className="text-base md:text-lg font-medium">
            The national currency is the Tunisian dinar, denoted by the symbol
            "دينار" or "DT" (ISO code: TND).
          </p>
          <h2 className="text-xl font-bold">Convert your currency</h2>
          {error && (
            <div className="bg-white/10 text-white p-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full" ref={fromDropdownRef}>
              <div
                className={`bg-transparent border rounded-lg flex items-center overflow-hidden ${
                  isFromInputFocused
                    ? "border-2 border-primary100"
                    : "border border-neutral-600"
                }`}
              >
                <input
                  type="number"
                  min={0}
                  value={amount}
                  onChange={(e) =>
                    setAmount(Number.parseFloat(e.target.value) || 0)
                  }
                  onFocus={() => setIsFromInputFocused(true)}
                  onBlur={() => setIsFromInputFocused(false)}
                  className="w-1/2 py-3 px-5 text-center text-white font-medium bg-transparent outline-none"
                />
                <div
                  className="w-1/2 py-3 px-5 text-center text-white font-medium cursor-pointer flex items-center justify-center"
                  onClick={() => setShowFromDropdown(!showFromDropdown)}
                >
                  {fromCurrency} <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              </div>

              {showFromDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {currencies.map((currency) => (
                    <div
                      key={currency.code}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                      onClick={() => handleFromCurrencyChange(currency.code)}
                    >
                      {currency.code} - {currency.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <span className="text-white font-bold">=</span>
            </div>

            <div className="relative w-full">
              <div
                className={`bg-transparent rounded-lg flex items-center overflow-hidden ${
                  isToInputFocused
                    ? "border-2 border-primary100"
                    : "border border-neutral-600"
                }`}
              >
                <input
                  type="number"
                  min={0}
                  value={convertedAmount}
                  readOnly
                  onFocus={() => setIsToInputFocused(true)}
                  onBlur={() => setIsToInputFocused(false)}
                  className="w-1/2 py-3 px-5 text-center text-white font-medium bg-transparent outline-none"
                />
                <div className="w-1/2 py-3 px-5 text-center text-white font-medium flex items-center justify-center">
                  TND
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/images/dinar.png"
            alt="Tunisian Dinar Pattern"
            width={300}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
