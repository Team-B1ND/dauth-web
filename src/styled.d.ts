import "styled-components";

type DodamTheme = Record<
  | "primaryNormal"
  | "primaryAlternative"
  | "primaryAssistive"
  | "labelNormal"
  | "labelStrong"
  | "labelNeutral"
  | "labelAlternative"
  | "labelAssistive"
  | "labelDisabled"
  | "lineNormal"
  | "lineNeutral"
  | "lineAlternative"
  | "fillNormal"
  | "fillNeutral"
  | "fillAlternative"
  | "fillAssistive"
  | "backgroundNormal"
  | "backgroundNeutral"
  | "backgroundAlternative"
  | "statusNegative"
  | "statusCautionary"
  | "statusPositive"
  | "staticWhite"
  | "staticBlack",
  string
>;

declare module "styled-components" {
  export interface DefaultTheme extends DodamTheme {}
}
