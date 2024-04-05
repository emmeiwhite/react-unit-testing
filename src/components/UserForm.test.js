import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import UserForm from "./UserForm";

// To define a test we use test() function defined globally
// test() function is provided by our test runner which is jest!
test("it shows 2 inputs and a button", () => {
  // Step 1: Render the component
  // Step 2 :Manipulate the Component or Find an element in it
  // Step 3: Make an Assertion - Component is doing what it is meant to do
});
