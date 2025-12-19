import AuthLayout from "src/components/common/AuthLayout";
import QRAuth from "src/components/Auth/QRAuth";

const LoginQRPage = () => {
  return (
    <>
      <AuthLayout>
        <QRAuth />
      </AuthLayout>
    </>
  );
};

export default LoginQRPage;
