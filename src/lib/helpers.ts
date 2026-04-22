import { type ContactFormProps } from "./types";

/**
 * @func getEncodedFormItems(): allows users to encode each item in the contact form
 *
 * @params
 *  contactForm : ContactFormProps
 *
 * @return
 *  ContactFormProps
 */
export const getEncodedFormItems = (
  contactForm: ContactFormProps,
): ContactFormProps => {
  for (const key in contactForm) {
    contactForm[key as keyof ContactFormProps] = encodeURIComponent(
      contactForm[key as keyof ContactFormProps],
    );
  }

  return contactForm;
};
