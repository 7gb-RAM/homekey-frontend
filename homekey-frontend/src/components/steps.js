import { Header } from "./header";
import MobileDailog from "./mobile_drawer";
import { StepItem } from "./step_item";

export function Steps({steps, mobileFiltersOpen, setMobileFiltersOpen,isDisclosureDisabled, currentStep }) {

  const getStepsForm = ({ isMobile }) => {
    return (
      <form className={isMobile ? "mt-4 border-t border-gray-200" : "hidden lg:block"}>
        {steps.map((step) => (
          <StepItem step={step} isDisabled={isDisclosureDisabled} isOpen={currentStep === step.id} stepClass={isMobile && "px-6"}/>
        ))}
      </form>
    );
  };
  return (
    <div className="bg-white">
      <div>
        <MobileDailog title={"Steps"} isOpen={mobileFiltersOpen} onClose={setMobileFiltersOpen}>
          {getStepsForm({ isMobile: true })}
        </MobileDailog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header title={"Seller Workflow"} onClickMenu={() => setMobileFiltersOpen(true)} />

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {getStepsForm({ isMobile: false })}

              {/* Main content */}
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
