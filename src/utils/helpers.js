import { execSync } from "node:child_process";

function getCommitHash() {
  return execSync("git rev-parse --short HEAD").toString().trim();
}

export const commitHash = getCommitHash();
