export interface FieldErrors {
  [key: string]: Array<string>
}
/**
 * You can send errors by inputs.
 *  For exemple, for the field "email" we got these errors: ['Bad format', "and I don't know"]
 *
 * But you can got trouble with the api itself or something...
 * In this case, you would like to send one notification. It's done by the "message" property.
 */
export interface ErrorsInterface {
  message?: string
  fields?: FieldErrors
};

export type ErrorHandler = (e: any) => ErrorsInterface;
