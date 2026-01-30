import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";

export const authClient = createAuthClient({
  fetchOptions: {
    onError(context) {
      toast.error(context.error.message);
    },
  },
});

export const { signIn, signOut, signUp, useSession } = authClient;
