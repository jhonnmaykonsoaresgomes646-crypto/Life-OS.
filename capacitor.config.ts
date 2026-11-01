import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.lifeos.app',
  appName: 'LIFE OS',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: { allowMixedContent: false }
};

export default config;
