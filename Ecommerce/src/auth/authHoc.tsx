import { ReactNode, useEffect } from "react";
import { api } from "../utils/api/api";

type props = {
  children: ReactNode;
};

export function AuthHoc({ children }: props) {
  useEffect(() => {
    api.getLoggedUser();
  }, []);

  return <>{children}</>;
}
