import FormStep from "./FormStep/FormStep";
import { MultiStepFormData } from "./FormStep/FormStep.types";

export default function MultiStepForm() {
  function onSubmit(data: MultiStepFormData) {
    console.log(data);
  }

  return (
    <FormStep
      validationTrigger="all"
      onSubmit={onSubmit}
      onBack={() => console.log("back")}
      elements={{
        firstName: {
          type: "text",
          label: "First Name",
          rules: {
            required: "This is required",
            minLength: { value: 5, message: "Needs to be at least 5" },
          },
        },
        lastName: {
          type: "text",
          label: "Last Name",
          rules: {
            required: "This is required",
            minLength: { value: 5, message: "Needs to be at least 5" },
          },
          description: "Your last name",
        },
        gender: {
          type: "radio",
          label: "Gender",
          rules: { required: "This is required" },
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
          description: "Something cool",
        },
        job: {
          type: "select",
          label: "Job",
          rules: { required: "This is required" },
          options: [
            { value: "developer", label: "Developer" },
            { value: "designer", label: "Designer" },
          ],
        },
        countries: {
          type: "multiselect",
          label: "Countries",
          rules: { required: "This is required" },
          options: [
            { value: "us", label: "United States" },
            { value: "fr", label: "France" },
            { value: "it", label: "Italy" },
          ],
        },
        colors: {
          type: "checkbox",
          label: "Colors",
          rules: { required: "This is required" },
          options: [
            { value: "red", label: "Red" },
            { value: "green", label: "Green" },
            { value: "blue", label: "Blue" },
          ],
        },
      }}
    />
  );
}
