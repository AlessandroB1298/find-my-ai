import { toast } from "react-toastify";

export const successToastMessage = () => toast.success("Email sent!");
export const errorToastMessage = () => toast.error("Failed to send email.");
