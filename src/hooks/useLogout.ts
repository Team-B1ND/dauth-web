import token from "src/libs/Token/token";

const useLogout = () => {
  const handleClickLogout = () => {
    token.clearToken();
    console.log("로그아웃 되었습니다.");
  };

  return { handleClickLogout };
};

export default useLogout;