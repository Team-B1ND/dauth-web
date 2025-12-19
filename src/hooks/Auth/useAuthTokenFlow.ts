export interface UseAuthTokenFlowOptions {
  redirectUrl: string;
  state: string;
}

export const useAuthTokenFlow = () => {
  const handleAuthCode = (code: string, options: UseAuthTokenFlowOptions) => {
    const { redirectUrl, state } = options;

    const url = new URL(redirectUrl);
    url.searchParams.append("code", code);
    if (state) {
      url.searchParams.append("state", state);
    }
    window.location.href = url.toString();
  };

  return { handleAuthCode };
};
