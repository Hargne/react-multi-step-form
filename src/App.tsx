import { Box } from "@mui/material";
import FormBuilder from "./FormBuilder";
import { FormBuilderSteps, Test } from "./FormBuilder/types";

type TestData = {
  firstName: string;
  lastName: string;
  gender: string;
};

function App() {
  function onSubmit(data: FormData) {
    console.log("SUBMIT", data);
  }

  const steps: Test<TestData> = [
    {
      elements: {
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
      },
    },
    {
      elements: {
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
      },
    },
  ];

  return (
    <Box p={4} height="100%">
      <FormBuilder
        steps={steps}
        onSubmit={onSubmit}
        nextStepButtonLabel="Next"
        submitButtonLabel="Submit"
        backButtonLabel="Back"
      />
    </Box>
  );
}

export default App;
