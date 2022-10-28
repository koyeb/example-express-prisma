/* eslint-disable node/no-process-env */

export default {
    port: (process.env.PORT ?? 3000),
  } as const;
  