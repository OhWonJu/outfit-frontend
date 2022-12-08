import { _POST } from "@lib/server/rootApi";
import { LogInProps } from "types/users";

export async function _LOGIN(data: LogInProps) {
  return await _POST("/api/users/logIn", data);
}