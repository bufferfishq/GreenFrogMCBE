import FormRequest from "../network/packets/FormRequest";
import FormTypes from "./FormTypes";

interface IFormAction {
  type: string;
  text: string;
  placeholder?: string;
  options?: JSON;
  min?: number;
  max?: number;
  step?: number;
}

class Form {
  type: FormTypes;
  title: string;
  buttons: Array<{ text: string; image?: { type: string; data: string } }>;
  id: number;
  actions: IFormAction[];

  constructor();

  /**
   * Add an action.
   * @param action - The action to add to the list of actions.
   */
  addAction(action: IFormAction): void;

  /**
   * Adds an input to the form.
   * @param text - The text that will be displayed in the input field.
   * @param [placeholder] - The text that will be displayed in the input box before the user types
   * anything.
   */
  addInput(text: string, placeholder?: string): void;

  /**
   * It adds a label to the form
   * @param text - The text to display.
   */
  addText(text: string): void;

  /**
   * Adds a dropdown to the form.
   * @param {string} text
   * @param {JSON} options
   */
  addDropdown(text: string, options: JSON): void;

  /**
   * Adds toggle button
   * @param {string} text
   */
  addToggle(text: string): void;

  /**
   * Adds slider to the form.
   * @param {string} text
   * @param {Number} min
   * @param {Number} max
   * @param {Number} step
   */
  addSlider(text: string, min: number, max: number, step?: number): void;

  /**
   * Sends the form to the client
   * @param {Object} client
   */
  send(client: Object): void;
}

export default Form;
