"use client";

import { useState } from "react";
import { Steps } from "../../components/steps";

const initialStepsState = [
  {
    id: 1,
    name: "Initial Setup and Listing Preparation",
    options: [
      { value: "1-1", label: "Notify FSH of intent to sell", checked: false },
      {
        value: "1-2",
        label: "Prepare your home for listing (photo-ready)",
        checked: false,
      },
      {
        value: "1-3",
        label: "Provide FSH with a photo for the website",
        checked: false,
      },
      {
        value: "1-4",
        label: "Enter sale listing in FSH website",
        checked: false,
      },
      { value: "1-5", label: "Approve sale listing on FSH", checked: false },
    ],
  },
  {
    id: 2,
    name: "Pre-Escrow Actions and Buyer Interaction",
    options: [
      {
        value: "2-1",
        label: "Gather Seller's Disclosure documents",
        checked: false,
      },
      {
        value: "2-2",
        label: "Order the Natural Hazards report ",
        checked: false,
      },
      {
        value: "2-3",
        label: "Respond to buyers and show property ",
        checked: false,
      },
      {
        value: "2-4",
        label: "Sign purchase contract or prepare counteroffer",
        checked: false,
      },
      { value: "2-5", label: "Finalize contract with buyer", checked: false },
    ],
  },
  {
    id: 3,
    name: "Escrow Process and Inspections",
    options: [
      { value: "3-1", label: "Order Termite/Pest inspection", checked: false },
      {
        value: "3-2",
        label: "Schedule appraiser's appointment",
        checked: false,
      },
      {
        value: "3-3",
        label: "Provide access for termite company",
        checked: false,
      },
      {
        value: "3-4",
        label: "Ensure buyer orders property inspection",
        checked: false,
      },
      { value: "3-5", label: "Provide termite report to FSH", checked: false },
    ],
  },
  {
    id: 4,
    name: "Final Disclosure and Contract Closing",
    options: [
      {
        value: "4-1",
        label: "Complete and sign disclosure documents",
        checked: false,
      },
      {
        value: "4-2",
        label: "Fund or cure Section I Pest inspection items",
        checked: false,
      },
      {
        value: "4-3",
        label: "Schedule signing of closing documents with the title company",
        checked: false,
      },
      { value: "4-4", label: "Provide keys to buyer", checked: false },
    ],
  },
  {
    id: 5,
    name: "Post-Closing and Transfer",
    options: [
      {
        value: "5-1",
        label: "Transfer or set up utilities (PG&E, Water/Sewer, Garbage, Cable, etc.)",
        checked: false,
      },
      {
        value: "5-2",
        label: "Receive funds from title company once escrow closes",
        checked: false,
      },
      {
        value: "5-3",
        label: "Ensure sale listing is closed on the FSH website",
        checked: false,
      },
    ],
  },
];

export default function SellerWorkflow({ initialStep = 1 }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [steps, setSteps] = useState(initialStepsState);

  const isDisclosureDisabled = (disclosureStepId) => {
    return disclosureStepId >= currentStep;
  };

  return (
    <Steps
      steps={steps}
      mobileFiltersOpen={mobileFiltersOpen}
      setMobileFiltersOpen={setMobileFiltersOpen}
      isDisclosureDisabled={isDisclosureDisabled}
      currentStep={currentStep}
    >
      {/* children will come here */}
      Hello
    </Steps>
  );
}
