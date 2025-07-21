import { AxiosError } from "axios";

class ErrorHandler {
  public createApp = (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 400:
        return console.error("입력 데이터가 유효하지 않습니다.");
      case 401:
        return console.error("인증이 필요합니다.");
      case 403:
        return console.error("앱 생성 권한이 없습니다.");
      case 409:
        return console.error("이미 존재하는 앱 이름입니다.");
      case 500:
        return console.error("서버 에러가 발생했습니다.");
      default:
        return console.error("앱 생성에 실패했습니다.");
    }
  };

  public updateApp = (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 400:
        return console.error("입력 데이터가 유효하지 않습니다.");
      case 401:
        return console.error("인증이 필요합니다.");
      case 403:
        return console.error("앱 수정 권한이 없습니다.");
      case 404:
        return console.error("해당 앱을 찾을 수 없습니다.");
      case 500:
        return console.error("서버 에러가 발생했습니다.");
      default:
        return console.error("앱 정보 수정에 실패했습니다.");
    }
  };

  public changeOwner = (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 400:
        return console.error("입력 데이터가 유효하지 않습니다.");
      case 401:
        return console.error("인증이 필요합니다.");
      case 403:
        return console.error("소유자 변경 권한이 없습니다.");
      case 404:
        return console.error("해당 앱 또는 사용자를 찾을 수 없습니다.");
      case 500:
        return console.error("서버 에러가 발생했습니다.");
      default:
        return console.error("소유자 변경에 실패했습니다.");
    }
  };
}

const errorHandler = new ErrorHandler();
export default errorHandler;