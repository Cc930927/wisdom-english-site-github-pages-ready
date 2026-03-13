import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  // 🌟 關鍵修改：必須跟你的 GitHub 儲存庫名稱完全一樣（前後都要有斜線）
  base: '/wisdom-english-site-github-pages-ready/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        teachers: resolve(__dirname, 'teachers.html'),
        courses: resolve(__dirname, 'courses.html'),
        materials: resolve(__dirname, 'materials.html'),
        contact: resolve(__dirname, 'contact.html'),
        training: resolve(__dirname, 'training.html'),
        claire: resolve(__dirname, 'teachers/claire.html'),
        juniorHigh: resolve(__dirname, 'courses/junior-high.html'),
        seniorHigh: resolve(__dirname, 'courses/senior-high.html'),
        certification: resolve(__dirname, 'courses/certification.html')
      }
    }
  }
})