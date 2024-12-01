"use client";

import { useState } from "react";
import { Steps } from "../../components/steps";

const initialStepsState = [
  {
    id: 1,
    name: "Making an Offer",
    options: [
      { value: "1-1", label: "Prepare your offer", checked: false },
      {
        value: "1-2",
        label: "Submit offer to seller",
        checked: false,
      },
      {
        value: "1-3",
        label: "Negotiate terms with the seller",
        checked: false,
      },
    ],
  },
  {
    id: 2,
    name: "Escrow and Review",
    options: [],
  },
  {
    id: 3,
    name: "Finalizing and Closing",
    options: [],
  },
];

export default function BuyerWorkflow({ initialStep = 1 }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [steps, setSteps] = useState(initialStepsState);

  const isDisclosureDisabled = (disclosureStepId) => {
    return disclosureStepId >= currentStep;
  };

  return (
    <Steps
      title={"Buyer Workflow"}
      steps={steps}
      mobileFiltersOpen={mobileFiltersOpen}
      setMobileFiltersOpen={setMobileFiltersOpen}
      isDisclosureDisabled={isDisclosureDisabled}
      currentStep={currentStep}
    >
      {/* children will come here */}
      Hello Buyer
    </Steps>
  );
}
