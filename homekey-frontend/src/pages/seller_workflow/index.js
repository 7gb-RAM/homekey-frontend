"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import SellerMobileDailog from "./components/seller_mobile_dailog";

// 1. Initial Setup and Listing Preparation
// 2. Pre-Escrow Actions and Buyer Interaction
// 3. Escrow Process and Inspections
// 4. Final Disclosure and Contract Closing
// 5. Post-Closing and Transfer
const initialStepsState = [
  {
    id: 1,
    name: "Initial Setup and Listing Preparation",
    options: [
      { value: "1-1", label: "Notify FSH of intent to sell", checked: false },
      { value: "1-2", label: "Prepare your home for listing (photo-ready)", checked: false },
      { value: "1-3", label: "Provide FSH with a photo for the website", checked: false },
      { value: "1-4", label: "Enter sale listing in FSH website", checked: false },
      { value: "1-5", label: "Approve sale listing on FSH", checked: false },
    ],
  },
  {
    id: 2,
    name: "Pre-Escrow Actions and Buyer Interaction",
    options: [
      { value: "2-1", label: "Gather Seller's Disclosure documents", checked: false },
      { value: "2-2", label: "Order the Natural Hazards report ", checked: false },
      { value: "2-3", label: "Respond to buyers and show property ", checked: false },
      { value: "2-4", label: "Sign purchase contract or prepare counteroffer", checked: false },
      { value: "2-5", label: "Finalize contract with buyer", checked: false },
    ],
  },
  {
    id: 3,
    name: "Escrow Process and Inspections",
    options: [
      { value: "3-1", label: "Order Termite/Pest inspection", checked: false },
      { value: "3-2", label: "Schedule appraiser's appointment", checked: false },
      { value: "3-3", label: "Provide access for termite company", checked: false },
      { value: "3-4", label: "Ensure buyer orders property inspection", checked: false },
      { value: "3-5", label: "Provide termite report to FSH", checked: false },
    ],
  },
  {
     
    id: 4,
    name: "Final Disclosure and Contract Closing",
    options: [
      { value: "4-1", label: "Complete and sign disclosure documents", checked: false },
      { value: "4-2", label: "Fund or cure Section I Pest inspection items", checked: false },
      { value: "4-3", label: "Schedule signing of closing documents with the title company", checked: false },
      { value: "4-4", label: "Provide keys to buyer", checked: false },
    ],
  },
  {
    id: 5,
    name: "Post-Closing and Transfer",
    options: [
      { value: "5-1", label: "Transfer or set up utilities (PG&E, Water/Sewer, Garbage, Cable, etc.)", checked: false },
      { value: "5-2", label: "Receive funds from title company once escrow closes", checked: false },
      { value: "5-3", label: "Ensure sale listing is closed on the FSH website", checked: false },
      
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SellerWorkflow({ initialStep = 1 }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [steps, setSteps] = useState(initialStepsState);
  
  const isDisclosureDisabled = (disclosureStepId)=>{
    return disclosureStepId >= currentStep;
  }

  return (
    <div className="bg-white">
      <div>
        <SellerMobileDailog currentStep={currentStep} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} steps={steps} isDisclosureDisabled={isDisclosureDisabled}/>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <Bars4Icon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {steps.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className={`border-b border-gray-200 pointer py-6 ${isDisclosureDisabled(section.id) && "pointer-events-none"}`}
                    defaultOpen={currentStep === section.id}
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-left text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
