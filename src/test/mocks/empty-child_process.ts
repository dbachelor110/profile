// Empty stub for node:child_process to satisfy Vite during Cloudflare builds.
export const spawn = () => { throw new Error('child_process.spawn is not supported in Cloudflare Workers'); };
export const spawnSync = () => { throw new Error('child_process.spawnSync is not supported in Cloudflare Workers'); };
