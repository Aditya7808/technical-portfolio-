# Aditya Yadav — AI / ML Engineer Portfolio

A minimal, editorial single-page portfolio website tailored for **Aditya Yadav** (AI / ML Engineer). Built with clean semantic HTML5, modern CSS3, and vanilla JavaScript—zero external frameworks, libraries, or CDNs required.

Live preview / deployed via GitHub Pages.

---

## 🚀 Featured Projects & Systems

1. **Agent Forge** — *Open-Source 20+ Production AI Agents Collection*  
   Multi-agent system patterns (ReAct, Supervisor, Hierarchical, Collaborative) across 18 tech stacks with LangGraph, AutoGen, Agno, mem0 long-term memory, and a 59-tool MCP Slack bot.  
   `Python` · `TypeScript` · `LangGraph` · `AutoGen` · `FastAPI` · `Docker` · `MCP` · `mem0`

2. **CyberAgent** — *Autonomous Cyber Security Multi-Agent Framework (RSAC 2024)*  
   Microsoft AutoGen multi-agent swarm orchestrating MITRE Caldera adversary attack emulation, live Windows EDR telemetry analysis, and continuous purple-team CI/CD detection engineering (Sigma/YARA).  
   `Python` · `AutoGen` · `MITRE ATT&CK` · `Caldera` · `EDR Telemetry` · `Sigma / YARA` · `Purple Teaming`

3. **CloudSentinel** — *Multi-Cloud FinOps & Infrastructure Remediation Control Plane*  
   Multi-cloud monitoring and waste-reduction control plane for AWS and GCP. Ingests inventory/metrics via boto3 into TimescaleDB, detects anomalies using Prophet & statsmodels, and enforces approval-gated Terraform remediation.  
   `Python` · `FastAPI` · `Terraform` · `AWS (boto3)` · `GCP SDK` · `TimescaleDB` · `Prophet` · `Pydantic`

4. **SentinelAI** — *Enterprise AI Agent Security & Reliability Control Plane*  
   Zero-trust runtime reverse proxy gateway (<15ms latency) defending against OWASP LLM Top 10 vulnerabilities with AST prompt injection firewalls, two-way PII/secret scrubbing, least-privilege HITL tool authorization, isolated RAG vector search, and SHA-256 compliance audit trails.  
   `Python` · `FastAPI` · `React` · `TypeScript` · `LangGraph` · `Docker` · `pgvector` · `AWS Bedrock` · `Presidio`

5. **VANCO AI Assistant** — *Conversational Agent with Dual-Memory & Behavioral Profiling*  
   Conversational agent featuring 8+ intent classification routes, dual-memory architecture (Supermemory + session memory), and a 10-signal real-time user profiling engine with automated lead scoring alerts.  
   `FastAPI` · `React` · `OpenAI GPT-4` · `Supabase` · `Supermemory` · `JWT` · `Zustand` · `SMTP/Brevo`

6. **Career Intelligence Pipeline (DST)** — *Department of Science and Technology (DST) Patented EdTech AI*  
   End-to-end intelligence pipeline parsing unstructured resumes, embedding core competencies separately into Elasticsearch, and running double hybrid search matching algorithms. Awarded Rank 1 nationwide with ₹2.5 Lakh grant by DST, Govt. of India.  
   `Python` · `Elasticsearch` · `Double Hybrid Search` · `BERT` · `spaCy NER` · `SVM` · `GPT-4` · `FAISS`

---

## 🎨 Visual Design System

- **Editorial Style**: Minimalist academic & research journal aesthetic, generous whitespace, two-column responsive layout.
- **Color Themes**:
  - **Light Theme**: `#FAF6F0` (warm cream background), `#1C1917` (near-black text), `#6B645C` (muted), `#E6DFD5` (dividers), `#2F5D9E` (editorial blue accent).
  - **Dark Theme**: `#161412` (rich obsidian background), `#EDE7DD` (warm stone text), `#A39A8E` (muted), `#2A2622` (dividers), `#7FA6E0` (accent).
- **Typography**:
  - Headings & Prose: **Newsreader** (Google Fonts editorial serif with optical sizing).
  - Monospace, Code, Metrics & Tags: **JetBrains Mono**.
- **Interactive Lightbox**: Full-screen modal viewer with mouse wheel zoom (up to 450%), click-and-drag pan, double-click toggle, pinch-to-zoom on touch, and direct raw SVG view for all architecture flowcharts.

---

## 📁 Repository Structure

```
├── index.html           # Main semantic HTML structure & SEO / JSON-LD schema
├── style.css            # Complete design system, themes, typography & responsive rules
├── script.js            # Dynamic content renderers, theme toggle, observers & accordions
├── README.md            # Project documentation & overview
└── assets/
    ├── profile.jpg      # High-res profile portrait
    ├── resume.pdf       # Official resume document
    ├── favicon.svg      # Minimal vector favicon
    ├── project-1.svg    # Agent Forge 6-tier architecture flow (vector SVG)
    ├── cyberagent.svg   # CyberAgent AutoGen multi-agent architecture (vector SVG)
    ├── project-5.svg    # CloudSentinel multi-cloud FinOps architecture (vector SVG)
    ├── project-4.svg    # SentinelAI zero-trust security control plane (vector SVG)
    ├── project-2.svg    # VANCO AI Assistant full-stack architecture (vector SVG)
    └── project-3.svg    # DST Career Intelligence dual-embedding flow (vector SVG)
```

---

## 💻 Local Development

Run with any local HTTP server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## 📄 License

MIT License &copy; 2026 Aditya Yadav
