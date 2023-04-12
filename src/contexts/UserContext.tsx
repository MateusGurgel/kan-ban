import { createContext, useEffect, useState, useContext, Dispatch, SetStateAction } from "react";
import { UserService } from "@/services/UserService";
import { useRouter } from "next/router";

interface UserContextValue {
  id: number | null;
  setId: Dispatch<SetStateAction<number | null>> | null;
}

interface UserProviderInterface {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextValue>({ id: null , setId: null});

export function UserProvider({ children }: UserProviderInterface) {
  const [userId, setUserId] = useState<number | null>(null);
  const router = useRouter();
  const path = router.asPath

  useEffect(() => {
    console.log("Brabor")
    
    const token = UserService.token.get()

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

    if (userId) {
      return;
    }

    getId();
  }, [userId, path]);

  const value = {
    id: userId,
    setId: setUserId,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
