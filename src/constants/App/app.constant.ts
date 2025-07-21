export const FRAMEWORK_OPTIONS = [
  { id: 1, name: "React", description: "React 프레임워크" },
  { id: 2, name: "Vue", description: "Vue.js 프레임워크" },
  { id: 3, name: "Angular", description: "Angular 프레임워크" },
  { id: 4, name: "Node.js", description: "Node.js 런타임" },
  { id: 5, name: "Spring", description: "Spring Boot 프레임워크" },
] as const;

export const APP_VALIDATION = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  URL_PATTERN: /^https?:\/\/.+/,
  REDIRECT_URL_PATTERN: /^https?:\/\/.+/,
} as const;