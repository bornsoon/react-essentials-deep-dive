import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["lrf96t-5173.csb.app"], // 허용할 호스트 추가
    port: 5173, // 원하면 포트 지정
    strictPort: true, // 포트 사용 불가 시 에러
    host: true, // 외부 접근 허용
  },
});
