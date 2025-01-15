import { useState } from "react";
import FormBuilderStep, { FormBuilderStepProps } from "./FormBuilderStep";
import { FormBuilderData, FormBuilderSteps } from "./types";

export type FormBuilderProps = {
  steps: FormBuilderSteps;
  onSubmit: (data: FormBuilderData) => void;
  submitButtonLabel?: string;
  nextStepButtonLabel?: string;
  backButtonLabel?: string;
};

export default function FormBuilder(props: FormBuilderProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function onStepSubmit(data: FormBuilderData) {
    if (currentStepIndex < props.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else if (currentStepIndex >= props.steps.length - 1) {
      props.onSubmit(data);
    }
  }

  function onStepBack() {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  }

  function renderStep(stepIndex: number) {
    if (!props.steps?.length || !props.steps[stepIndex]) {
      return null;
    }

    const currentStep = props.steps[stepIndex];
    const isLastStep = stepIndex >= props.steps.length - 1;
    const canStepBack = stepIndex > 0 && props.steps.length > 1;
    const submitLabel = isLastStep
      ? props.submitButtonLabel
      : props.nextStepButtonLabel;
    const stepElements = currentStep.elements ?? {};

    return (
      <FormBuilderStep
        validationTrigger="all"
        elements={stepElements}
        onSubmit={onStepSubmit}
        submitButtonLabel={currentStep.submitButtonLabel ?? submitLabel}
        onBack={canStepBack ? onStepBack : undefined}
        backButtonLabel={currentStep.backButtonLabel}
      />
    );
  }

  return renderStep(currentStepIndex);
}
