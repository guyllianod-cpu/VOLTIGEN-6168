import { useMutation } from "@tanstack/react-query";
import { orpc } from "../lib/api";
export function useContactRequest() {
  return useMutation(orpc.contact.create.mutationOptions());
}
export function useAppointmentRequest() {
  return useMutation(orpc.appointments.create.mutationOptions());
}
