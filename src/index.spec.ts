import { exec } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";
import prettier from "prettier";
import { beforeAll, describe, expect, it } from "vitest";

const execAsync = util.promisify(exec);

describe("prettier-plugin-ignored", async () => {
  beforeAll(async () => {
    await execAsync("pnpm build");
  });

  const testCaseDir = path.resolve(import.meta.dirname, "__test-cases");

  const testCaseFileNames = await fs.readdir(testCaseDir);

  it("should load in the test cases", () => {
    expect(testCaseFileNames).not.toHaveLength(0);
  });

  it.each(testCaseFileNames)(
    "should not affect the formatting of the '%s' test case",
    async testCaseFileName => {
      const fullFilePath = path.resolve(testCaseDir, testCaseFileName);
      const fileContent = await fs.readFile(fullFilePath, "utf-8");

      const result = await prettier.format(fileContent, {
        parser: "ignored",
        plugins: ["./dist/index.mjs"]
      });

      expect(result).toBe(fileContent);
    }
  );
});
