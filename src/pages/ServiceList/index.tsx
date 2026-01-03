import Header from "src/components/common/Header";
import AllServiceList from "src/components/Home/AllServiceList";
import Footer from "src/components/common/Footer";
import * as S from "../Home/style";

const ServiceListPage = () => {
  return (
    <S.PageContainer>
      <Header />
      <S.MainContent>
        <S.ContentSection>
          <AllServiceList />
        </S.ContentSection>
      </S.MainContent>
      <Footer />
    </S.PageContainer>
  );
};

export default ServiceListPage;
