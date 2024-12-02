"use client";

import { useState } from "react";
import { Steps } from "../../components/steps";
import { StepsHeader } from "../../components/steps_header";
import { FileUpload } from "../../components/file_upload";

const initialStepsState = [
  {
    id: 1,
    name: "Initial Setup and Buying Preparation",
    options: [
      { value: "1-1", 
        label: "Prepare and submit your offer", 
        checked: false 
      },
      {
        value: "1-2",
        label: "Finalize on purchase contract and terms with seller",
        checked: false,
      },
      {
        value: "1-3",
        label: "Order property inspectional report",
        checked: false,
      },
    ],
  },
  {
    id: 2,
    name: "File submissions",
    options: [
      { value: "2-1", 
        label: "Submit purchase contract to FSH", 
        checked: false 
      },
      { value: "2-2", 
        label: "Submit deposit via wire to First American Title Company", 
        checked: false 
      }
    ],
  },
  {
    id: 3,
    name: "Finalizing and Closing",
    options: [
      { value: "3-1", 
        label: "Receive shared fee sample appraisal report from FSH", 
        checked: false 
      },
      { value: "3-2", 
        label: "Receive disclosure documents from FSH", 
        checked: false 
      },
      { value: "3-3", 
        label: "Receive completed documents from Docusign upon completion from all parties", 
        checked: false 
      },
      { value: "3-4", 
        label: "Sign title closing documents", 
        checked: false 
      }
    ],
  },
  {
    id: 4,
    name: "Move In and Logistics",
    options: [
      { value: "4-1", 
        label: "Request a final walk through", 
        checked: false 
      },
      { value: "4-2", 
        label: "Transfer and set up utilities", 
        checked: false 
      },
      { value: "4-3", 
        label: "Receive keys from buyer", 
        checked: false 
      }
    ],
  },
];

export default function BuyerWorkflow({ initialStep = 1, initialOption = 0 }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [currentOption, setCurrentOption] = useState(initialOption);
  const [steps, setSteps] = useState(initialStepsState);

  const isDisclosureDisabled = (disclosureStepId) => {
    return disclosureStepId >= currentStep;
  };
  const isNextDisabled = () => {
    return false;
  };

  const isPrevDisabled = () => {
    return currentOption === 0;
  };
  const step = steps.find((step) => step.id === currentStep);
  return (
    <Steps
      title={"Buyer Workflow"}
      steps={steps}
      mobileFiltersOpen={mobileFiltersOpen}
      setMobileFiltersOpen={setMobileFiltersOpen}
      isDisclosureDisabled={isDisclosureDisabled}
      currentStep={currentStep}
    >
      <div className="mt-4">
        <StepsHeader
          title={step.options[currentOption].label}
          progress={(currentOption / step.options.length) * 100}
          nextTitle={currentOption < step.options.length - 1 ? "Next" : "Save"}
          onClickNext={() => {
            if (currentOption < step.options.length - 1) {
              setCurrentOption(currentOption + 1);
            } else {
              alert("submit");
            }
          }}
          onClickPrev={() => {
            if (currentOption > 0) {
              setCurrentOption(currentOption - 1);
            } else {
              alert("First");
            }
          }}
          isPrevDisabled={isPrevDisabled()}
          isNextDisabled={isNextDisabled()}
        />
        <FileUpload />
      </div>
    </Steps>
  );
}