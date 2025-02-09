import dayjs from "dayjs";
import pino from "pino";

const log = pino({
  base: {
    pid: false, // Disable the pid in the log output
  },
  timestamp: () => `,"time":"${dayjs().format()}"`, // Custom timestamp format
  transport: {
    target: "pino-pretty", // Use pino-pretty for pretty printing
    options: {
      colorize: true, // Optional: enable colorized output
    },
  },
});

export default log;
