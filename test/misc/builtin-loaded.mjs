import assert from "assert"
import path from "path"

export function check() {
  // The "path" module is required in src/hook/compile.js
  // before the runtime is enabled.
  assert.ok(path)
}

