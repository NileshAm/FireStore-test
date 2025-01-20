export default interface FormType {
  title: string | undefined;
  description: string | undefined;
  imageSrc: string | undefined;
  inputs: Inputs[];
}

// Define the Inputs union with more specific types
export type Inputs =
  | TextInput
  | FileInput
  | DropDown
  | MultipleChoice
  | CheckBox

// Base interface for shared properties
interface BaseInput {
  type: string;
  id: string;
  name: string;
  description: string;
  required?: boolean;
}

// Specific input types
export interface TextInput extends BaseInput {
  type: "text" | "email" | "date" | "time" | "textArea";
  placeholder?: string; // Allow placeholder for these input types
}

export interface FileInput extends BaseInput {
  type: "file";
  accept?: string[]; // Files accept property
}

export interface DropDown extends BaseInput {
  type: "dropdown";
  options: KeyValuePair[];
}

export interface MultipleChoice extends BaseInput {
  type: "multipleChoice";
  options: KeyValuePair[];
}

export interface CheckBox extends BaseInput {
  type: "checkBox";
  options: KeyValuePair[];
}



// Helper interface for key-value pairs
export interface KeyValuePair {
  key: string | number;
  value: string;
}
