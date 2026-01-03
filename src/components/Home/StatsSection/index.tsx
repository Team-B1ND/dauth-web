import * as S from "./style";
import { BarChart, Trophy } from "@b1nd/dds-web";
import {
  useGetStatsServicesCountQuery,
  useGetStatsUsersCountQuery,
} from "src/queries/App/app.query";
import CountSkeleton from "src/components/common/Skeleton/Home/Count";
import oauth from "src/libs/OAuth/oauth";
import MyServiceSection from "./MyServiceSection";
import { useNavigate } from "react-router-dom";

const StatsSection = () => {
  const { data: servicesData, isLoading: servicesLoading } =
    useGetStatsServicesCountQuery();
  const { data: usersData, isLoading: usersLoading } =
    useGetStatsUsersCountQuery();

  const isLoading = servicesLoading || usersLoading;
  const isLoggedIn = oauth.isLoggedIn();
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.StatBox>
        <S.StatTitle>
          <Trophy />
          기록
        </S.StatTitle>
        <S.StatGrid>
          {isLoading ? (
            <CountSkeleton />
          ) : (
            <>
              <S.StatItem>
                <span>등록된 사용자</span>
                <p>{usersData?.data?.count || 0}명</p>
              </S.StatItem>
              <S.StatItem>
                <span>DAuth 사용 서비스</span>
                <p>{servicesData?.data?.count || 0}개</p>
              </S.StatItem>
            </>
          )}
        </S.StatGrid>
      </S.StatBox>

      <S.StatBox>
        <S.StatTitle>
          <BarChart />
          내가 등록한 서비스
        </S.StatTitle>
        {isLoggedIn ? (
          <MyServiceSection />
        ) : (
          <S.EmptyState>
            <p>로그인이 필요합니다!</p>
          </S.EmptyState>
        )}
      </S.StatBox>

      <S.CTAContainer>
        <button onClick={() => navigate("/profile")}>내 서비스 등록하러 가기</button>
        <S.DocsCTA>
          <h4>DAuth 사용법을 알고 싶다면?</h4>
          <span>DAuth Docs ↗︎</span>
        </S.DocsCTA>
      </S.CTAContainer>
    </S.Container>
  );
};

export default StatsSection;
