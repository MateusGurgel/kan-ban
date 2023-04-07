import { UserService } from "@/services/UserService";
import { useEffect } from "react";
import Router from "next/router";

export default function useAuth() {
  useEffect(() => {
    const token = UserService.token.get();
    if (!token) {
      Router.push("/login");
    } 
  }, []);
}
