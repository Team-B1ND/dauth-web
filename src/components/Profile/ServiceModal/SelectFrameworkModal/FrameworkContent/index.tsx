import CheckItem from "src/components/common/CheckItem";
import * as S from "../style"
import { FrameWork } from "src/types/App/app.type";

interface FrameworkContentProps {
  frameworksData: any;
  selectedFrameworks: number[];
  handleFrameworkToggle: (id: number) => void;
}

const FrameworkContent = ({
  frameworksData,
  selectedFrameworks,
  handleFrameworkToggle,
}: FrameworkContentProps) => {
  const frontendFrameworks =
    frameworksData?.data?.filter((fw: any) => fw.type === "FRONTEND") || [];
  const backendFrameworks =
    frameworksData?.data?.filter((fw: any) => fw.type === "BACKEND") || [];

  return (
    <S.SelectFrameworkWrapper>
      <S.FrameworkWrapper>
        <span>프론트엔드</span>
        {frontendFrameworks.map((fw: FrameWork) => (
          <CheckItem
            key={fw.id}
            text={fw.name}
            isChecked={selectedFrameworks.includes(fw.id)}
            onChange={() => handleFrameworkToggle(fw.id)}
          />
        ))}
      </S.FrameworkWrapper>

      <S.FrameworkWrapper>
        <span>백엔드</span>
        {backendFrameworks.map((fw: FrameWork) => (
          <CheckItem
            key={fw.id}
            text={fw.name}
            isChecked={selectedFrameworks.includes(fw.id)}
            onChange={() => handleFrameworkToggle(fw.id)}
          />
        ))}
      </S.FrameworkWrapper>
    </S.SelectFrameworkWrapper>
  );
};

export default FrameworkContent;