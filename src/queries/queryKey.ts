export const QUERY_KEYS = {
  app: {
    getMyApps: ["app", "my"] as const,
    getAllApps: ["app", "all"] as const,
  },
} as const;
