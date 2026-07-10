---
company: "Lawsnote Inc."
location: "New Taipei, Taiwan"
title: "Software Engineer (Backend, Data Team)"
start: 202409
end: null
---
- **Architecture & Scaling**: Designed and implemented a highly modular distributed crawler architecture (WeaverCore), compressing a projected "4-week/1-person" development schedule into 2 hours, and successfully deploying the system on the day of proposal.
- **Developer Experience (DX) & CI/CD**: Engineered an automated CI/CD pipeline using semantic-release and openapi-ts to dynamically generate and publish TypeScript SDKs directly from Swagger specs, ensuring end-to-end type safety and eliminating manual API integration overhead.
- **System Reliability**: Architected a Redis-based proxy management system to securely distribute resources across high-concurrency processes, ensuring 99.9% system stability during peak loads.
- **Performance Optimization**: Designed and implemented HTTP streaming APIs using JSON Lines (NDJSON). Successfully compressed client Time-to-Interactive (TTI) from over 30 minutes to under 1 second under extreme data loads, while reducing server memory usage to an O(1) constant footprint, eliminating backend OOM risks during concurrent requests.
- **Maintainability & Refactoring**: Refactored core data workflows (Argus-v2), decoupling database write paths from legacy JS crawlers and engineering a TypeScript data processing system with layered architecture (Controller-Service-Model) to optimize testability and scalability.
- **Observability & Proactive Alerting**: Built a comprehensive system monitoring and proactive alerting infrastructure using Grafana, achieving ~90% alert coverage across critical environments and successfully identifying multiple long-standing anomalies.
