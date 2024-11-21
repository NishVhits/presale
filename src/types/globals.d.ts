// globals.d.ts
export {};

declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}
