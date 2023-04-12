import { createContext, useEffect, useState, useContext } from "react";
import { UserService } from "@/services/UserService";

interface UserContextValue {
  userID: number | null;
}

interface UserProviderInterface {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextValue>({ userID: null });

export function UserProvider({ children }: UserProviderInterface) {
  const [userId, setUserId] = useState<number | null>(null);

  const token = UserService.token.get();
  useEffect(() => {
    const getId = async () => {
      UserService.token.addInAuthorizationHeader();
      const response = await UserService.getId();

      if (response.errors) {
        setUserId(null);
        return;
      }

      setUserId(response.id);
    };

    if (!token) {
      setUserId(null);
      return;
    }

    if (!userId) {
      return;
    }

    getId();
  }, [userId, token]);

  const value = {
    userID: userId,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
