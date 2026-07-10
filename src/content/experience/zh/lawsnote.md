---
company: "Lawsnote 七法股份有限公司"
location: "台灣 新北市"
title: "後端工程師 (數據團隊)"
start: 202409
end: null
---
- **架構與擴展**：設計並實作具備高度可擴展性的分散式爬蟲系統 (WeaverCore)，藉由架構重構與模組化設計，將原先預估需「四週/一人」的開發時程壓縮至 2 小時，並於提案當天順利完工上線。
- **開發者體驗 (DX) 與 CI/CD**：使用 semantic-release 與 openapi-ts 設計自動化 CI/CD 流程，從 Swagger 規範動態生成並發佈 TypeScript SDK，確保端到端型別安全，免除手動串接 API 的時間成本。
- **系統可靠性**：設計基於 Redis 的 Proxy 管理系統，在多進程高併發執行時安全分配資源，確保系統在高峰負載下維持 99.9% 穩定度。
- **性能優化**：設計並開發基於 JSON Lines (NDJSON) 的 HTTP 串流 (Streaming) APIs。在極端資料負載下，將前端首屏渲染時間（Time-to-Interactive）從 30 分鐘以上縮短至 1 秒內，同時將伺服器記憶體開銷優化至常數級 $O(1)$ 常駐佔用，消除了併發查詢導致的 OOM 崩潰風險。
- **系統維護與重構**：重構核心資料管線 (Argus-v2)，將 legacy JS 爬蟲與資料寫入邏輯解耦，建構分層設計（Controller-Service-Model）的 TypeScript 資料處理系統，顯著提升系統可測試性與可擴展性。
- **可觀測性與主動告警**：搭建系統監控與主動示警機制（基於 Grafana），實現關鍵環境約 90% 的指標監控與告警覆蓋率，成功偵測並排除多個測試環境的長期異常。
