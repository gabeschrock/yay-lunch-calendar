import type { SSTConfig } from "sst";

export default {
  config(input) {
    return {
      name: "yay-lunch-calendar",
      region: "us-east-1",
    };
  },
  stacks(app) {},
} satisfies SSTConfig;
