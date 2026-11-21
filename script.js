/**
 * ============================================================================
 * EDITABLE PORTFOLIO DATA (EDIT HERE)
 * All content for Skills, Experience, Writing, and Projects is managed here.
 * Simply edit the values inside these arrays to customize your portfolio.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. SKILLS / TOOLBOX DATA (from Aditya Yadav's Resume)
// ----------------------------------------------------------------------------
const SKILLS_DATA = [
  {
    category: "Agentic AI & MCP Orchestration",
    items: [
      "LangGraph",
      "AutoGen",
      "CrewAI",
      "Multi-Agent Orchestration (Supervisor & Hierarchical)",
      "Model Context Protocol (MCP)",
      "MCP Tool Pinning & Description Diffing",
      "Agent Sandboxing (gVisor / Firecracker)",
      "Durable Agent Execution (State Checkpoints & Sagas)",
      "Function Calling & Parameter Policies",
      "ReAct & Plan-and-Execute Loops"
    ]
  },
  {
    category: "AI Security & Red Teaming",
    items: [
      "OWASP Top 10 for LLMs & Agentic Top 10",
      "MITRE ATLAS & STRIDE Threat Modeling",
      "Direct & Indirect Prompt Injection Defenses",
      "Automated Red Teaming (garak, PyRIT, promptfoo)",
      "Policy-as-Code (OPA/Rego & Cedar)",
      "Layered Guardrails & Fail-Closed Policies",
      "PII Engineering & Tokenization (Microsoft Presidio)",
      "Denial-of-Wallet & Token Quota Architecture",
      "Insecure Output Handling & Sinks Defense"
    ]
  },
  {
    category: "Advanced RAG & Vector Systems",
    items: [
      "Hybrid Retrieval (Dense + BM25 Lexical)",
      "Reciprocal Rank Fusion (RRF)",
      "Cross-Encoder Reranking",
      "ACL-Aware Retrieval & Pre-filtering",
      "Cross-Tenant Vector Isolation & Leak Testing",
      "RAG Poisoning & Document Injection Defense",
      "Semantic Caching & Token Economics",
      "FAISS, ChromaDB & Pinecone",
      "mem0 Long-Term Memory Persistence"
    ]
  },
  {
    category: "Cloud, DevSecOps & Infra (AWS)",
    items: [
      "AWS Bedrock",
      "AWS SageMaker Model Serving",
      "AWS IAM Least Privilege & Workload Identity",
      "AWS EC2, Lambda, ECS & CloudWatch",
      "Docker & Pod Security Standards (Kubernetes)",
      "CI/CD Pipeline Security Gates (SAST/DAST & SBOM)",
      "OpenTelemetry GenAI Semantic Telemetry",
      "Append-Only Tamper-Evident Audit Logging",
      "vLLM & Continuous Batching"
    ]
  },
  {
    category: "System Design & Engineering",
    items: [
      "High-Level System Design (HLD & Microservices)",
      "Low-Level System Design (LLD & SOLID Patterns)",
      "Distributed Locks, Leases & Fencing Tokens",
      "Idempotency & Transactional Outbox",
      "Python (AsyncIO, Pydantic, Type Hints)",
      "FastAPI, PostgreSQL & Redis",
      "TypeScript, React & Streamlit",
      "Git / GitHub & Linux"
    ]
  }
];

// ----------------------------------------------------------------------------
// 2. EXPERIENCE TIMELINE DATA (from Aditya Yadav's Resume)
// ----------------------------------------------------------------------------
const EXPERIENCE_DATA = [
  {
    role: "AI/ML Trainer",
    company: "The SmartBridge",
    dates: "AUG 2026 — PRESENT",
    location: "Noida, India",
    bullets: [
      "Mentored and trained multiple student batches on core <strong>AI/ML concepts</strong>, deep learning pipelines, and production GenAI agent architectures.",
      "Delivered comprehensive hands-on training on <strong>AWS Cloud Foundations</strong>, guiding students through AWS cloud architecture, model deployment, and cloud security (AWS Bedrock, SageMaker, EC2, Lambda, S3, IAM).",
      "Conducted specialized bootcamp cohorts preparing students for prestigious <strong>Global Certifications by Google</strong> (Google Cloud and Google AI credentials), ensuring high pass rates on industry-standard assessments.",
      "Engineered an NLP personalization pipeline (semantic embeddings, FAISS vector search) that converts unstructured skill profiles into tailored interview questions, reaching <strong>85% relevance (BERTScore, ROUGE)</strong> and cutting manual data preparation by <strong>40%</strong>.",
      "Mentored capstone implementations across RAG and agentic AI workflows (LangChain, LangGraph, CrewAI) with prompt engineering, LLM evaluation suites, and code reviews.",
      "<strong>Tech stack:</strong> Python, PyTorch, TensorFlow, Scikit-learn, AWS Cloud, Google Cloud Certifications, LangChain, LangGraph, Hugging Face, FastAPI, Jupyter, Docker."
    ]
  },
  {
    role: "Junior Data Scientist",
    company: "VANCO",
    dates: "MAY 2025 — APR 2026",
    location: "Bangalore, India (Onsite)",
    bullets: [
      "Built a Hybrid Recommendation System with Transformer-DDQN and TimeSVD++, pushing hit rate from <strong>0.55% to 1.15%</strong> across a 35K+ item catalog with millions of daily sessions.",
      "Tuned session-adaptive alpha weighting and ran K-means clustering on 128-dim item embeddings, lifting recommendation diversity by <strong>16%</strong> while keeping relevance intact.",
      "Shipped a sales forecasting system for LAVA India covering 50K+ SKUs, hitting <strong>~90% prediction accuracy</strong> and cutting manual forecasting effort by <strong>60%</strong>.",
      "Crafted 20+ time-series features (lag variables t-1 to t-12, 7/30-day rolling stats, STL decomposition), trimming forecast MAPE by <strong>~15%</strong> over the baseline.",
      "Ran head-to-head tests on XGBoost, LightGBM, and ARIMA over 6-fold walk-forward CV on 3 years of data; LightGBM won with <strong>MAPE ~3% and RMSE ~28 units</strong>, now live with weekly auto-retraining."
    ]
  },
  {
    role: "Founder & President",
    company: "AI Spark (Official AI Society of MMMUT)",
    dates: "AUG 2025 — FEB 2026",
    location: "Gorakhpur, India",
    bullets: [
      "Founded and scaled MMMUT's official AI society from scratch, leading a dedicated core team of <strong>70 members</strong> across technical curriculum, event operations, hackathons, and community outreach.",
      "Organized and led 10+ hands-on workshops on LLMs, Computer Vision, and agentic AI, training <strong>200+ students</strong> in production-grade concepts.",
      "Mentored student teams on building end-to-end ML applications, participating in national hackathons, and developing open-source agent projects."
    ]
  },
  {
    role: "Project Associate",
    company: "Department of Science and Technology (DST), Govt. of India",
    dates: "FEB 2025 — MAY 2025",
    location: "India (Govt. Patented EdTech Initiative)",
    bullets: [
      "Architected a 4-module career intelligence pipeline (resume parsing, skill matching, career prediction, and gap analysis) serving <strong>10,000+ students</strong> across 3 states.",
      "Built a resume parser using spaCy NER + regex, extracting 25+ structured fields from raw PDFs with <strong>92% field-level accuracy</strong>, feeding directly into downstream matching modules.",
      "Designed a skill-matching engine using cosine similarity on BERT embeddings, mapping student profiles to 500+ career tracks with <strong>88% top-3 accuracy</strong> and a skill gap analyzer flagging missing competencies across 8 categories.",
      "Trained an SVM classifier on 2,000+ student profiles with 20+ engineered features (GPA, domain scores, socioeconomic indicators), achieving <strong>87% prediction accuracy</strong> on held-out test data.",
      "Integrated GPT-4 via structured prompting for personalized career guidance generation, cutting guidance irrelevance by <strong>40%</strong>; co-authored patent documentation submitted to Department of Science and Technology (DST), Govt. of India."
    ]
  }
];

// ----------------------------------------------------------------------------
// 3. WRITING / LINKEDIN POSTS DATA (Ordered by Top Technical Impact)
// ----------------------------------------------------------------------------
const WRITING_DATA = [
  {
    date: "NOV 2026",
    title: "Mitigating Prompt Injection Vectors in Production LLMs: A Defense-in-Depth Architecture",
    excerpt: "Analyzing direct and indirect injection attack surfaces in agentic workflows. Implementing layered input/output guardrails, runtime instruction delimiters, and least-privilege tool execution.",
    reactions: "2.8k reactions",
    comments: "240 comments",
    url: "https://lnkd.in/p/gfetqU96",
    tag: "security"
  },
  {
    date: "OCT 2026",
    title: "RAG-Fusion & Multi-Query Generation via Reciprocal Rank Fusion (RRF)",
    excerpt: "Overcoming single-query retrieval blind spots by synthesizing multi-perspective queries, executing parallel vector lookups, and re-scoring candidates with Reciprocal Rank Fusion.",
    reactions: "2.1k reactions",
    comments: "182 comments",
    url: "https://lnkd.in/p/gGrXKeAN",
    tag: "rag"
  },
  {
    date: "SEP 2026",
    title: "Dual-Memory State Persistence in Conversational Agents using Supermemory",
    excerpt: "Solving multi-turn context degradation and token re-injection costs by decoupling short-term working context from persistent user entity graphs.",
    reactions: "2.4k reactions",
    comments: "210 comments",
    url: "https://lnkd.in/p/gpx4Abu3",
    tag: "agents"
  },
  {
    date: "OCT 2026",
    title: "Production RAG Systems: Vector Index Geometry, Dense Retrieval & Chunking Strategies",
    excerpt: "Comparing semantic chunking against fixed token windows in dense vector search. Benchmarking recall@k, index latency trade-offs, and embedding space drift across enterprise corpora.",
    reactions: "1.9k reactions",
    comments: "154 comments",
    url: "https://lnkd.in/p/gBJzStGy",
    tag: "rag"
  },
  {
    date: "MAY 2026",
    title: "Encoder vs. Autoregressive Decoders: Architecting Hybrid BERT-GPT Pipelines",
    excerpt: "Why coupling bidirectional encoder representation (BERT) for dense classification with autoregressive decoders (GPT) yields optimal latency-precision frontiers.",
    reactions: "1.2k reactions",
    comments: "98 comments",
    url: "https://lnkd.in/p/gHCsRxyx",
    tag: "agents"
  },
  {
    date: "AUG 2026",
    title: "In-Context Learning Dynamics: Zero-Shot vs. Few-Shot Generalization in Transformers",
    excerpt: "Examining how exemplar selection, attention allocation, and prompt formatting influence intermediate representations and eliminate model task ambiguity.",
    reactions: "1.6k reactions",
    comments: "128 comments",
    url: "https://lnkd.in/p/gta7SAUW",
    tag: "agents"
  },
  {
    date: "JUL 2026",
    title: "Optimizing Tabular Predictive Modeling with LightGBM & Time-Series Feature Engineering",
    excerpt: "Applying walk-forward cross-validation, lag-feature synthesis, and gradient boosting optimization to eliminate target leakage and reduce prediction variance on high-cardinality datasets.",
    reactions: "1.8k reactions",
    comments: "142 comments",
    url: "https://lnkd.in/p/giR8xyrs",
    tag: "ml"
  },
  {
    date: "APR 2026",
    title: "Engineering Automated Student Intelligence & Workflow Automation Pipelines",
    excerpt: "Architectural breakdown of real-time student support systems: connecting asynchronous event queues, rule-based dispatchers, and NLP triage engines at institutional scale.",
    reactions: "3.2k reactions",
    comments: "275 comments",
    url: "https://lnkd.in/p/gjPvgxky",
    tag: "ml"
  },
  {
    date: "MAR 2026",
    title: "Engineering Milestones: Transitioning from Research Models to Scalable AI Infrastructure",
    excerpt: "Core lessons from shipping production ML systems: moving from standalone prototype scripts to containerized, observable, and measurable production deployments.",
    reactions: "4.3k reactions",
    comments: "390 comments",
    url: "https://lnkd.in/p/gMe-qze6",
    tag: "career"
  }
];

// ----------------------------------------------------------------------------
// 4. SELECTED WORK & ACCORDION FINDINGS DATA (Aditya Yadav's Projects)
// ----------------------------------------------------------------------------
const PROJECTS_DATA = [
  // 1. AGENT FORGE
  {
    id: "project-agentforge",
    title: "Agent Forge: Open-Source 20+ Production AI Agents Collection",
    problem: "Developers and enterprises struggle to transition from single-prompt scripts to reliable, stateful multi-agent systems with tool use, memory, and error recovery.",
    findings: [
      "Engineered multi-agent systems using LangGraph, AutoGen, and Agno with ReAct, Supervisor, Hierarchical, and Collaborative topologies across 18 tech stacks.",
      "Integrated RAG using ChromaDB, FAISS, and Pinecone with OpenAI embeddings; shipped a 59-tool MCP Slack bot featuring long-term memory via mem0.",
      "Built full-stack agents with React + FastAPI, PostgreSQL/SQLite, and Docker — accumulating 35,000+ lines of code, 500+ commits, and active open-source contributors."
    ],
    metrics: {
      accuracy: "20+ Multi-Agents",
      latency: "59 MCP Tools",
      cost: "35k+ Lines of Code",
      dataset: "500+ Commits"
    },
    tags: ["Python", "TypeScript", "LangChain", "LangGraph", "AutoGen", "Agno", "FastAPI", "React", "Docker", "MCP", "mem0"],
    links: {
      github: "https://github.com/Aditya7808/Agent-Forge",
      demo: "https://github.com/Aditya7808/Agent-Forge",
      writeup: "#"
    },
    image: "assets/project-1.svg",
    fallbackImage: "assets/project-1.png",
    imageAlt: "Agent Forge: Multi-Agent System Flow Architecture Diagram (Entry, Control Plane, Specialists, Shared Layer, Persistence, Delivery)",
    writeup: {
      problem: "Standard single-prompt LLM agents suffer from hallucination loops, memory degradation, and lack of deterministic execution on multi-step workflows like customer support, legal analysis, and contract reviews.",
      approach: "Built modular agent patterns (ReAct, Supervisor, Hierarchical, and Collaborative) where specialized sub-agents handle bounded sub-tasks with strict tool schemas and validation.",
      architecture: "Layered 6-tier system flow: (01) Entry points via FastAPI, Streamlit, React, and Slack/WebSockets; (02) Control Plane with request understanding, LangGraph StateGraph routing, and Supervisor execution patterns; (03) Specialist workflows for legal analysis, research, and support; (04) Shared intelligence with model adapters (OpenAI, Claude, Ollama), 59-tool MCP integration gateway, and mem0/Zep state; (05) Persistence across PostgreSQL, SQLite, ChromaDB, FAISS, and Pinecone; (06) Delivery with trust scoring, validation checks, and human-in-the-loop escalation.",
      evaluation: "Benchmarked agent task completion rates across 18 distinct tech stack scenarios, validating tool dispatch accuracy, token consumption, and state recovery upon API timeouts.",
      failed: "Single global memory graphs caused context pollution across distinct tasks. Resolved by adopting mem0 for segmented user/task entity memory alongside vector store indexes.",
      nextSteps: "Adding automated self-improving prompt optimization and zero-shot tool creation through dynamic code synthesis."
    }
  },

  // 2. CYBERAGENT
  {
    id: "project-cyberagent",
    title: "CyberAgent: Autonomous Cyber Security Multi-Agent Framework (RSAC 2024)",
    problem: "Security operations teams spend excessive manual hours simulating adversary behaviors, testing EDR detection capabilities, and crafting detection rules across diverse endpoint environments.",
    findings: [
      "Orchestrated an AutoGen multi-agent framework pairing offensive threat emulation with automated defensive detection engineering.",
      "Integrated MITRE Caldera adversary emulation agents to automate attack execution and benchmark endpoint detection bypasses.",
      "Engineered real-time EDR telemetry analysis agent extracting live detection feeds from Windows endpoints to assess security controls.",
      "Built an automated Purple Team CI/CD engine synthesizing validated Sigma and YARA detection signatures into an immutable forensic ledger."
    ],
    metrics: {
      accuracy: "AutoGen Multi-Agent",
      latency: "RSAC 2024 Showcase",
      cost: "MITRE Caldera Suite",
      dataset: "Automated Purple CI/CD"
    },
    tags: ["Python", "AutoGen", "MITRE ATT&CK", "Caldera", "EDR Telemetry", "Sigma / YARA", "Detection Engineering", "Purple Teaming", "Docker"],
    links: {
      github: "https://github.com/Aditya7808/cyber-security-llm-agents",
      demo: "https://github.com/Aditya7808/cyber-security-llm-agents",
      writeup: "#"
    },
    image: "assets/cyberagent.svg",
    fallbackImage: "",
    imageAlt: "CyberAgent: Autonomous Cyber Security Multi-Agent Swarm Architecture Flowchart",
    writeup: {
      problem: "Traditional cyber security defense relies on manual red-teaming and fragmented threat hunting, leaving dangerous latency windows between adversary evasion tactics and defensive rule deployment.",
      approach: "Engineered an autonomous multi-agent swarm using Microsoft AutoGen where specialized coordinator, emulation, telemetry, and analysis agents collaborate in real-time offensive/defensive simulations.",
      architecture: "Tri-pillar architecture: (01) Coordination & Planning: AutoGen coordinator ingests high-level threat profiles and decomposes attack vectors into granular operational sequences; (02) Specialist Agents: Caldera agent initiates MITRE ATT&CK adversary behaviors while EDR agent analyzes live Windows telemetry and Code agent assesses obfuscated payloads; (03) Defensive Detection CI/CD: Purple Team engine benchmarks detection bypass rates, synthesizes Sigma/YARA rules, and commits forensic traces to an immutable ledger.",
      evaluation: "Presented at RSAC 2024 showcasing automated EDR bypass detection and continuous detection rule validation across multi-endpoint enterprise topologies.",
      failed: "Single-agent LLM loops failed to maintain context across complex multi-phase exploitation sequences. Resolved by decoupling the AutoGen coordinator from specialist execution workers with strict state checkpoints.",
      nextSteps: "Extending multi-cloud cloud security posture management (CSPM) agents for automated IAM escalation path auditing."
    }
  },

  // 3. CLOUDSENTINEL
  {
    id: "project-cloudsentinel",
    title: "CloudSentinel: Multi-Cloud FinOps & Infrastructure Remediation Control Plane",
    problem: "Multi-cloud infrastructure across AWS and GCP frequently suffers from zombie compute instances, unattached EBS storage volumes, and opaque billing spikes. Traditional LLM-based tools attempt unsafe autonomous changes or hallucinate cost calculations.",
    findings: [
      "Engineered automated collectors ingesting inventory, time-series metrics, and billing from AWS (boto3) and Google Cloud SDKs, normalizing data into 4 typed schemas in PostgreSQL/TimescaleDB.",
      "Implemented a zero-hallucination analysis pipeline where statistical models (Prophet, statsmodels) and deterministic rules compute all savings estimates—the LLM only explains pre-calculated numbers.",
      "Built an approval-gated remediation engine: generated Terraform modules run in dry-run mode (terraform validate + plan) by default and apply only upon explicit human administrative approval.",
      "Maintained an immutable audit ledger recording every remediation action, execution state snapshot, and rollback configuration."
    ],
    metrics: {
      accuracy: "Deterministic Math",
      latency: "AWS & GCP Multi-Cloud",
      cost: "Approval-Gated Terraform",
      dataset: "TimescaleDB Metrics"
    },
    tags: ["Python", "FastAPI", "Terraform", "AWS (boto3)", "GCP SDK", "PostgreSQL", "TimescaleDB", "Prophet", "statsmodels", "Pydantic", "Docker", "Grafana", "Slack Webhooks"],
    links: {
      github: "https://github.com/Aditya7808/Cloudsentinal",
      demo: "https://github.com/Aditya7808/Cloudsentinal",
      writeup: "#"
    },
    image: "assets/project-5.svg",
    fallbackImage: "",
    imageAlt: "CloudSentinel: Multi-Cloud Monitoring, Waste Detection & Approval-Gated Remediation Architecture Flowchart",
    writeup: {
      problem: "Enterprises face escalating cloud waste and unpredictable billing across hybrid AWS/GCP footprints. Existing AI tools often hallucinate cost savings or introduce outage risks through unverified autonomous infrastructure modifications.",
      approach: "Designed an architectural pipeline separating data collection, mathematical analysis, natural language explanation, and infrastructure remediation into strictly bounded, non-negotiable tiers.",
      architecture: "Tiered 6-phase pipeline: (01) Ingestion: cloud collectors fetch raw inventory and billing via boto3 and Google Cloud SDKs; (02) Normalizer: transforms heterogeneous cloud payloads into 4 canonical schemas (resource, metric_point, cost_record, finding) stored in TimescaleDB; (03) Analysis: deterministic rules, time-series anomaly detection, and Prophet forecasting compute verified savings; (04) LLM Explainer: strictly explains pre-computed numbers into Pydantic-validated JSON responses; (05) Remediation: planner generates Terraform plans; (06) Execution: dry-run validate+plan by default, requiring explicit human approval before terraform apply with atomic rollback logging.",
      evaluation: "Tested against simulated multi-cloud environments (moto, mocked GCP billing), validating 100% mathematical consistency between database queries and LLM explanations, with zero unapproved infrastructure mutation.",
      failed: "Initial exploration with autonomous agent remediation loops caused race conditions during resource teardowns. Resolved by enforcing strict Terraform plan dry-runs and mandatory human-in-the-loop sign-offs.",
      nextSteps: "Adding Azure Resource Graph collectors and Kubernetes pod resource right-sizing recommendations."
    }
  },

  // 4. SENTINELAI
  {
    id: "project-sentinelai",
    title: "SentinelAI: Enterprise AI Agent Security & Reliability Control Plane",
    problem: "Autonomous AI agents and LLMs deployed in enterprise pipelines face critical vulnerabilities—including prompt injection, secret leakage, vector store poisoning, and excessive agency on privileged tools (OWASP LLM Top 10 & MITRE ATLAS).",
    findings: [
      "Engineered a real-time prompt injection firewall (<15ms latency) deflecting DAN personas, base64 obfuscations, and developer-mode overrides before reaching inference cores.",
      "Implemented automated bidirectional PII & credential redaction masking AWS access keys, GitHub tokens, SSNs, credit cards, and corporate secrets while preserving token alignment.",
      "Architected a Human-in-the-Loop (HITL) tool authorization engine enforcing least-privilege RBAC, suspending high-risk tool operations (execute_sql_write, delete_backup) for administrative approval.",
      "Isolated multi-tenant RAG vector search across document ACL tiers (Public, Confidential, Restricted) with strict org_id schema partitioning to eliminate vector poisoning."
    ],
    metrics: {
      accuracy: "<15ms Firewall Gate",
      latency: "OWASP Top 10 & ATLAS",
      cost: "Zero PII Leakage",
      dataset: "SHA-256 Audit Trail"
    },
    tags: ["Python", "FastAPI", "React", "TypeScript", "LangGraph", "Docker", "PostgreSQL", "pgvector", "Redis", "AWS Bedrock", "OWASP LLM Top 10", "Presidio", "OpenTelemetry"],
    links: {
      github: "https://github.com/Aditya7808/Cyberagent-",
      demo: "https://github.com/Aditya7808/Cyberagent-",
      writeup: "#"
    },
    image: "assets/project-4.svg",
    fallbackImage: "",
    imageAlt: "SentinelAI: Enterprise AI Agent Security & Reliability Control Plane Architecture Flowchart",
    writeup: {
      problem: "Enterprises cannot deploy autonomous LLM agents in production without verifiable guardrails against prompt injection, credential exposure, multi-tenant vector context contamination, and rogue tool invocations.",
      approach: "Built a zero-trust runtime reverse proxy gateway and policy enforcement control plane that intercepts all inbound prompts and outbound agent responses, coupling AST heuristic scoring with a stateful Human-in-the-Loop (HITL) authorization loop.",
      architecture: "Modular 8-stage pipeline: (01) Ingress & Zero-Trust JWT authentication; (02) Inbound security inspection (<15ms) running AST heuristic scoring, injection deflection, and automated PII masking; (03) LangGraph agent orchestrator managing context budgets and tool schemas; (04) HITL gate suspending privileged destructive actions until signed approval; (05) Multi-tenant isolated RAG vector search with org_id ACL partitioning; (06) Secure model inference on Amazon Bedrock, Claude 3, and local LLMs; (07) Secondary outbound PII scrubber and hallucination verification; (08) Cryptographic forensic ledger committing SHA-256 sealed audit records for SOC 2 Type II and EU AI Act compliance.",
      evaluation: "Tested against automated adversarial jailbreak suites and OWASP LLM01-LLM10 benchmarks, achieving sub-15ms proxy latency overhead and 100% deflection of tested DAN and privilege escalation vectors.",
      failed: "Early single-pass regex sanitizers degraded downstream semantic reasoning by truncating code syntax. Replaced with token-aligned AST entity masking using Microsoft Presidio and custom entropy scanners.",
      nextSteps: "Deploying automated adversarial red-teaming bots using self-reflective LLM fuzzers to discover emergent multi-turn jailbreaks."
    }
  },

  // 5. VANCO AI ASSISTANT
  {
    id: "project-vanco",
    title: "VANCO AI Assistant: Conversational Agent with Dual-Memory & Behavioral Profiling",
    problem: "Sales and support chatbots often lose context during multi-turn discussions, deliver generic responses, and fail to identify high-intent prospects in real time.",
    findings: [
      "Architected a multi-class intent classification pipeline routing 8+ distinct user intents to specialized tools with ~94% classification accuracy.",
      "Designed a dual-memory architecture combining Supermemory for long-term user context and in-session memory, enabling zero re-prompting across multi-turn sessions.",
      "Built a real-time user profiling engine tracking 10+ behavioral signals per session, feeding a lead scoring model that dynamically triggered automated SMTP/Brevo alerts."
    ],
    metrics: {
      accuracy: "~94% Intent Routing",
      latency: "5+ Agent Tools",
      cost: "10+ Behavioral Signals",
      dataset: "Zero Re-prompting"
    },
    tags: ["FastAPI", "React", "OpenAI GPT-4", "Supabase", "Supermemory", "JWT", "Zustand", "SMTP/Brevo"],
    links: {
      github: "",
      demo: "https://vanco-ai-assistant-frontend-q47i.vercel.app/",
      writeup: "#"
    },
    image: "assets/project-2.svg",
    fallbackImage: "assets/project-2.png",
    imageAlt: "VANCO AI Assistant: Full-Stack Architecture Diagram (React Frontend, FastAPI Backend, GPT-4 Intelligence, Dual Memory)",
    writeup: {
      problem: "Traditional rule-based chatbots frustrate high-value enterprise prospects because they lack context memory across sessions and cannot autonomously trigger actions like lead qualification and CRM alerts.",
      approach: "Engineered an agentic tool-use loop where GPT-4 autonomously selects between 5+ tools (memory retrieval, lead scoring, FAQ lookup, profile updater, alert dispatcher) via function calling with fallback handling.",
      architecture: "FastAPI backend integrated with Supabase Auth + JWT, Zustand for real-time client state sync, Supermemory for persistent user knowledge graphs, and asynchronous Brevo webhook alerts.",
      evaluation: "Monitored intent routing precision across 8+ categories, response latency under concurrent traffic, and lead conversion rates from automated high-intent alert notifications.",
      failed: "Early session memory models suffered from high token cost by re-injecting full conversation logs. Solved with semantic summarization and Supermemory key-value knowledge retrieval.",
      nextSteps: "Extending multi-lingual support and integrating voice agents with real-time WebRTC audio streaming."
    }
  },

  // 6. CAREER INTELLIGENCE PIPELINE (DST)
  {
    id: "project-dst",
    title: "Career Intelligence Pipeline: Department of Science and Technology (DST) Patented EdTech AI",
    problem: "Over 10,000 students across 3 Indian states lacked access to personalized career guidance, while manual resume parsing and competency gap analysis was impossible to scale manually.",
    findings: [
      "Extracted 25+ structured fields and core competencies from raw resume PDFs using LLMs and spaCy NER with 92% field-level accuracy.",
      "Engineered a dual embedding architecture: embedded both raw resumes and core competencies separately into Elasticsearch to prevent representation smearing.",
      "Implemented a double hybrid search matching candidate resumes with ideal candidate profiles and competency embeddings with job requirements, hitting 88% top-3 match accuracy.",
      "Awarded Rank 1 nationwide with Rs. 2.5L research grant by Department of Science and Technology (DST), Govt. of India; co-authored official patent."
    ],
    metrics: {
      accuracy: "92% Extraction Acc",
      latency: "88% Top-3 Match",
      cost: "Rs. 2.5L DST Grant",
      dataset: "10,000+ Students"
    },
    tags: ["Python", "Elasticsearch", "Double Hybrid Search", "BERT", "spaCy NER", "SVM", "GPT-4", "FAISS", "EdTech Patent"],
    links: {
      github: "https://github.com/Aditya7808/AICGS",
      demo: "",
      writeup: "#"
    },
    image: "assets/project-3.svg",
    fallbackImage: "assets/project-3.jpg",
    imageAlt: "Matching Resumes to Jobs: Dual embedding model and double hybrid search architecture diagram",
    writeup: {
      problem: "Massive career guidance disparity in India where students from tier-2/3 institutions lack customized roadmaps, resulting in widespread underemployment and misaligned career preparation.",
      approach: "Designed a 4-module end-to-end intelligence system: PDF resume parsing, BERT-based semantic skill vector matching, machine learning career success prediction (SVM), and LLM-generated personalized development roadmaps.",
      architecture: "Dual-stream intelligence pipeline: raw resumes pass through an LLM to extract core competencies; both the resume and competencies are vectorized through embedding models and stored separately in Elasticsearch. Concurrently, job descriptions pass through an LLM to extract core requirements and generate ideal candidate resumes. A double hybrid search evaluates candidate resumes against ideal resumes alongside competency embeddings against job requirements to produce high-precision ranked matches.",
      evaluation: "Validated on 2,000+ student profiles with 20+ engineered features (GPA, domain scores, socioeconomic indicators) hitting 87% held-out test prediction accuracy.",
      failed: "Generic single-vector embeddings smeared specific technical competencies across general prose. Resolved by decoupling raw resume embeddings from LLM-extracted competency vectors and storing them separately in Elasticsearch.",
      nextSteps: "Integrating regional Indian language voice interfaces to expand accessibility across rural educational institutes."
    }
  }
];

// ============================================================================
// CORE APPLICATION LOGIC
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme (Light / Dark)
  initTheme();

  // 2. Render Dynamic Content from Data Arrays
  renderSkills();
  renderExperience();
  renderWriting("all");
  renderProjects();

  // 3. Setup Navigation & Mobile Hamburger
  setupNavigation();

  // 4. Setup Scroll Animations & Observers
  setupScrollObservers();

  // 5. Setup Writing Filter Chips
  setupWritingFilters();

  // 6. Setup Accordion Functionality
  setupProjectAccordions();

  // 7. Setup Contact Form
  setupContactForm();

  // 8. Setup HD Flowchart Zoom Lightbox
  setupImageLightbox();
});

/* ==========================================================================
   THEME TOGGLE & PERSISTENCE
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set initial theme
  const currentTheme = storedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", currentTheme);

  // Listen for toggle click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio_theme", nextTheme);
    });
  }

  // Listen for system theme changes if user hasn't explicitly overridden
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("portfolio_theme")) {
      const newTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  });
}

/* ==========================================================================
   DYNAMIC RENDERERS
   ========================================================================== */

/**
 * Render Skills / Toolbox grouped rows
 */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = SKILLS_DATA.map(group => `
    <div class="skill-group-row">
      <div class="skill-group-name">${escapeHTML(group.category)}</div>
      <div class="skill-tags">
        ${group.items.map(item => `
          <span class="skill-item">${escapeHTML(item)}</span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/**
 * Render Experience Timeline
 */
function renderExperience() {
  const container = document.getElementById("experience-container");
  if (!container) return;

  container.innerHTML = EXPERIENCE_DATA.map(item => `
    <article class="timeline-item">
      <div class="timeline-dot" aria-hidden="true"></div>
      <header class="timeline-header">
        <h3 class="timeline-role-company">${escapeHTML(item.role)} &middot; ${escapeHTML(item.company)}</h3>
        <span class="timeline-meta">${escapeHTML(item.dates)}</span>
      </header>
      <div class="timeline-location">${escapeHTML(item.location)}</div>
      <ul class="timeline-bullets">
        ${item.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

/**
 * Render Writing (LinkedIn Posts) with filtering
 */
function renderWriting(filterTag = "all") {
  const container = document.getElementById("writing-container");
  if (!container) return;

  const filtered = filterTag === "all" 
    ? WRITING_DATA 
    : WRITING_DATA.filter(post => post.tag.toLowerCase() === filterTag.toLowerCase());

  if (filtered.length === 0) {
    container.innerHTML = `<p class="muted" style="padding: 24px 0;">No posts found for this category.</p>`;
    return;
  }

  container.innerHTML = filtered.map(post => `
    <article class="writing-row">
      <time class="writing-date">${escapeHTML(post.date)}</time>
      <h4>
        <a href="${escapeHTML(post.url)}" target="_blank" rel="noopener noreferrer" class="writing-title-link">
          ${escapeHTML(post.title)} <span class="arrow" aria-hidden="true">&nearr;</span>
        </a>
      </h4>
      <p class="writing-excerpt">${escapeHTML(post.excerpt)}</p>
      <div class="writing-engagement">
        ${escapeHTML(post.reactions)} &middot; ${escapeHTML(post.comments)}
      </div>
    </article>
  `).join("");
}

/**
 * Render Selected Work & Accordion Findings
 */
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = PROJECTS_DATA.map(proj => `
    <article class="project-row" id="${proj.id}">
      <h3 class="project-title">${escapeHTML(proj.title)}</h3>
      <p class="project-problem">${escapeHTML(proj.problem)}</p>

      <!-- Findings Block -->
      <div class="findings-box">
        <div class="findings-label">KEY FINDINGS &amp; LESSONS</div>
        <ul class="findings-list">
          ${proj.findings.map(f => `<li>&bull; ${escapeHTML(f)}</li>`).join("")}
        </ul>
      </div>

      <!-- Metrics Row -->
      <div class="metrics-row" aria-label="Key project metrics">
        <div class="metric-item">
          <span class="metric-key">Accuracy</span>
          <span class="metric-val">${escapeHTML(proj.metrics.accuracy)}</span>
        </div>
        <div class="metric-item">
          <span class="metric-key">Latency</span>
          <span class="metric-val">${escapeHTML(proj.metrics.latency)}</span>
        </div>
        <div class="metric-item">
          <span class="metric-key">Cost Impact</span>
          <span class="metric-val">${escapeHTML(proj.metrics.cost)}</span>
        </div>
        <div class="metric-item">
          <span class="metric-key">Scale / Dataset</span>
          <span class="metric-val">${escapeHTML(proj.metrics.dataset)}</span>
        </div>
      </div>

      <!-- Tech Stack Tags -->
      <div class="project-tags">
        ${proj.tags.map(t => `<span class="project-tag">${escapeHTML(t)}</span>`).join("")}
      </div>

      <!-- Architecture Diagram / Media (HD Zoom Compatible) -->
      <div 
        class="project-media-wrap" 
        data-lightbox="${proj.image}" 
        data-caption="${escapeHTML(proj.title)}"
        role="button"
        tabindex="0"
        aria-label="Click to zoom HD architecture flowchart: ${escapeHTML(proj.title)}"
      >
        <img 
          src="${proj.image}" 
          alt="${escapeHTML(proj.imageAlt)}" 
          class="project-image" 
          loading="lazy" 
          width="800" 
          height="450"
          onerror="if(this.dataset.triedFallback !== 'true' && '${proj.fallbackImage || ''}'){this.dataset.triedFallback='true'; this.src='${proj.fallbackImage}';}"
        >
        <div class="zoom-hint-badge" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <span>HD Flowchart &bull; Click to Zoom &amp; Pan</span>
        </div>
      </div>

      <!-- Project External Links -->
      <div class="project-links">
        ${proj.links.github ? `
          <a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="arrow-link">
            GitHub Code <span class="arrow" aria-hidden="true">&nearr;</span>
          </a>
        ` : ""}
        ${proj.links.demo ? `
          <a href="${proj.links.demo}" target="_blank" rel="noopener noreferrer" class="arrow-link">
            Live Demo <span class="arrow" aria-hidden="true">&nearr;</span>
          </a>
        ` : ""}
      </div>

      <!-- Accordion: Read Full Write-Up -->
      <div class="accordion-wrap">
        <button 
          type="button" 
          class="accordion-toggle" 
          aria-expanded="false" 
          aria-controls="panel-${proj.id}"
        >
          <span class="accordion-icon" aria-hidden="true">&#9656;</span>
          <span class="accordion-label">Read the full write-up</span>
        </button>

        <div id="panel-${proj.id}" class="accordion-panel" role="region">
          <div class="accordion-grid">
            <div class="accordion-item">
              <h4 class="accordion-section-title">Problem</h4>
              <p class="accordion-text">${escapeHTML(proj.writeup.problem)}</p>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-section-title">Approach</h4>
              <p class="accordion-text">${escapeHTML(proj.writeup.approach)}</p>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-section-title">Architecture</h4>
              <p class="accordion-text">${escapeHTML(proj.writeup.architecture)}</p>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-section-title">Evaluation</h4>
              <p class="accordion-text">${escapeHTML(proj.writeup.evaluation)}</p>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-section-title">What Failed &amp; How It Was Fixed</h4>
              <p class="accordion-text">${escapeHTML(proj.writeup.failed)}</p>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-section-title">What I'd Do Next</h4>
              <p class="accordion-text">${escapeHTML(proj.writeup.nextSteps)}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

/* ==========================================================================
   NAVIGATION & ACTIVE LINK INTERSECTION OBSERVER
   ========================================================================== */
function setupNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  // Mobile menu toggle
  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.contains("open");
      siteNav.classList.toggle("open", !isOpen);
      menuToggle.classList.toggle("open", !isOpen);
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && siteNav.classList.contains("open")) {
        siteNav.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Active Nav Link Observer
  const sections = document.querySelectorAll("main section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => navObserver.observe(sec));
}

/* ==========================================================================
   SCROLL OBSERVERS (FADE UP MOTION)
   ========================================================================== */
function setupScrollObservers() {
  // Ensure all content sections are immediately visible to prevent disappearing content
  document.querySelectorAll(".fade-up").forEach(el => el.classList.add("visible"));
}

/* ==========================================================================
   WRITING FILTER CHIPS
   ========================================================================== */
function setupWritingFilters() {
  const chips = document.querySelectorAll(".filter-chips .chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => {
        c.classList.remove("active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("active");
      chip.setAttribute("aria-selected", "true");

      const filter = chip.getAttribute("data-filter");
      renderWriting(filter);
    });
  });
}

/* ==========================================================================
   PROJECT ACCORDIONS
   ========================================================================== */
function setupProjectAccordions() {
  document.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest(".accordion-toggle");
    if (!toggleBtn) return;

    const panelId = toggleBtn.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    panel.classList.toggle("open", !isExpanded);

    const labelSpan = toggleBtn.querySelector(".accordion-label");
    if (labelSpan) {
      labelSpan.textContent = isExpanded ? "Read the full write-up" : "Hide write-up";
    }
  });
}

/* ==========================================================================
   CONTACT FORM SUBMISSION
   ========================================================================== */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    // Check if formspree placeholder is still present
    const action = form.getAttribute("action");
    
    // If user hasn't set their Formspree ID yet, fallback to mailto or gentle notification
    if (action.includes("placeholder")) {
      e.preventDefault();
      const name = document.getElementById("form-name").value;
      const email = document.getElementById("form-email").value;
      const message = document.getElementById("form-message").value;

      // Construct mailto link
      const mailtoUrl = `mailto:adityayadav81086@gmail.com?subject=${encodeURIComponent("Portfolio Contact from " + name)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      window.location.href = mailtoUrl;

      if (status) {
        status.className = "form-status success";
        status.textContent = "Opening your email client to send message...";
      }
      return;
    }

    // If a real Formspree endpoint is configured, submit via fetch
    e.preventDefault();
    if (submitBtn) submitBtn.disabled = true;
    if (status) {
      status.className = "form-status";
      status.textContent = "Sending...";
    }

    try {
      const formData = new FormData(form);
      const res = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (res.ok) {
        form.reset();
        if (status) {
          status.className = "form-status success";
          status.textContent = "Thank you! Your message has been sent.";
        }
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      if (status) {
        status.className = "form-status error";
        status.textContent = "Unable to send message directly. Please reach out via email.";
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

/* ==========================================================================
   HD FLOWCHART & ARCHITECTURE LIGHTBOX (ZOOM & PAN CONTROLS)
   ========================================================================== */
function setupImageLightbox() {
  const modal = document.getElementById("image-lightbox");
  if (!modal) return;

  const backdrop = document.getElementById("lightbox-backdrop");
  const stage = document.getElementById("lightbox-stage");
  const viewport = document.getElementById("lightbox-viewport");
  const img = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");
  const zoomLevelEl = document.getElementById("lightbox-zoom-level");
  const rawLink = document.getElementById("lightbox-raw-link");
  const closeBtn = document.getElementById("lightbox-close");
  const zoomInBtn = document.getElementById("lightbox-zoom-in");
  const zoomOutBtn = document.getElementById("lightbox-zoom-out");
  const resetBtn = document.getElementById("lightbox-reset");

  let scale = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialPinchDistance = null;
  let initialPinchScale = 1;
  let lastActiveElement = null;

  const MIN_SCALE = 0.8;
  const MAX_SCALE = 4.5;
  const ZOOM_STEP = 1.3;

  function updateTransform(animate = true) {
    if (viewport) {
      viewport.style.transition = animate ? "transform 0.12s ease-out" : "none";
      viewport.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    }
    if (zoomLevelEl) {
      zoomLevelEl.textContent = `${Math.round(scale * 100)}%`;
    }
    if (stage) {
      if (scale > 1.05) {
        stage.style.cursor = isDragging ? "grabbing" : "grab";
      } else {
        stage.style.cursor = "zoom-in";
      }
    }
  }

  function setZoom(newScale, focalX, focalY) {
    const clampedScale = Math.min(Math.max(newScale, MIN_SCALE), MAX_SCALE);
    if (clampedScale === scale) return;

    if (focalX !== undefined && focalY !== undefined && stage) {
      const rect = stage.getBoundingClientRect();
      const stageCenterX = rect.width / 2;
      const stageCenterY = rect.height / 2;

      // Adjust pan coordinates so the focal point stays fixed during zoom
      const mouseOffsetFromCenterX = (focalX - rect.left) - stageCenterX;
      const mouseOffsetFromCenterY = (focalY - rect.top) - stageCenterY;

      const scaleRatio = clampedScale / scale;
      panX = mouseOffsetFromCenterX - (mouseOffsetFromCenterX - panX) * scaleRatio;
      panY = mouseOffsetFromCenterY - (mouseOffsetFromCenterY - panY) * scaleRatio;
    }

    scale = clampedScale;
    updateTransform(true);
  }

  function resetZoom() {
    scale = 1;
    panX = 0;
    panY = 0;
    updateTransform(true);
  }

  async function openLightbox(src, caption, altText) {
    lastActiveElement = document.activeElement;
    if (captionEl) captionEl.textContent = caption || "Architecture Diagram";
    if (rawLink) rawLink.href = src;

    resetZoom();

    // If vector SVG, inject inline for 100% infinite crisp resolution at any zoom level
    if (src && src.endsWith(".svg")) {
      try {
        const response = await fetch(src);
        if (response.ok) {
          const svgMarkup = await response.text();
          viewport.innerHTML = svgMarkup;
          const svgEl = viewport.querySelector("svg");
          if (svgEl) {
            svgEl.classList.add("lightbox-img");
            svgEl.setAttribute("role", "img");
            svgEl.setAttribute("aria-label", altText || caption || "HD Architecture Diagram");
          }
        } else {
          viewport.innerHTML = `<img id="lightbox-img" src="${src}" alt="${escapeHTML(altText || caption)}" class="lightbox-img">`;
        }
      } catch (err) {
        viewport.innerHTML = `<img id="lightbox-img" src="${src}" alt="${escapeHTML(altText || caption)}" class="lightbox-img">`;
      }
    } else {
      viewport.innerHTML = `<img id="lightbox-img" src="${src}" alt="${escapeHTML(altText || caption)}" class="lightbox-img">`;
    }

    modal.hidden = false;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Focus close button for accessibility
    setTimeout(() => {
      if (closeBtn) closeBtn.focus();
    }, 50);
  }

  function closeLightbox() {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.hidden = true;
      viewport.innerHTML = "";
      document.body.style.overflow = "";
      if (lastActiveElement && typeof lastActiveElement.focus === "function") {
        lastActiveElement.focus();
      }
    }, 200);
  }

  // Bind click & keydown on all project media wraps
  function bindProjectMediaTriggers() {
    const mediaWraps = document.querySelectorAll(".project-media-wrap[data-lightbox]");
    mediaWraps.forEach(wrap => {
      const trigger = () => {
        const src = wrap.getAttribute("data-lightbox");
        const caption = wrap.getAttribute("data-caption");
        const alt = wrap.querySelector("img") ? wrap.querySelector("img").alt : "";
        if (src) openLightbox(src, caption, alt);
      };

      wrap.addEventListener("click", trigger);
      wrap.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trigger();
        }
      });
    });
  }

  bindProjectMediaTriggers();

  // Toolbar button listeners
  if (zoomInBtn) {
    zoomInBtn.addEventListener("click", () => setZoom(scale * ZOOM_STEP));
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", () => setZoom(scale / ZOOM_STEP));
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", resetZoom);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }
  if (backdrop) {
    backdrop.addEventListener("click", closeLightbox);
  }

  // Mouse Wheel Zoom centered on cursor
  if (stage) {
    stage.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? ZOOM_STEP : (1 / ZOOM_STEP);
      setZoom(scale * zoomFactor, e.clientX, e.clientY);
    }, { passive: false });

    // Double-click toggle (1x <-> 2.2x)
    stage.addEventListener("dblclick", (e) => {
      e.preventDefault();
      if (scale > 1.15) {
        resetZoom();
      } else {
        setZoom(2.2, e.clientX, e.clientY);
      }
    });

    // Mouse Drag Pan
    stage.addEventListener("mousedown", (e) => {
      // Only drag with primary mouse button
      if (e.button !== 0) return;
      isDragging = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      updateTransform(false);
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      updateTransform(false);
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        updateTransform(true);
      }
    });

    // Touch support: Single touch pan & two-finger pinch zoom
    stage.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX - panX;
        startY = e.touches[0].clientY - panY;
      } else if (e.touches.length === 2) {
        isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialPinchDistance = Math.hypot(dx, dy);
        initialPinchScale = scale;
      }
    }, { passive: true });

    stage.addEventListener("touchmove", (e) => {
      if (isDragging && e.touches.length === 1) {
        e.preventDefault();
        panX = e.touches[0].clientX - startX;
        panY = e.touches[0].clientY - startY;
        updateTransform(false);
      } else if (e.touches.length === 2 && initialPinchDistance) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        const newScale = initialPinchScale * (dist / initialPinchDistance);
        setZoom(newScale, midX, midY);
      }
    }, { passive: false });

    stage.addEventListener("touchend", () => {
      isDragging = false;
      initialPinchDistance = null;
      updateTransform(true);
    });
  }

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (modal.hidden) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "+" || e.key === "=") {
      e.preventDefault();
      setZoom(scale * ZOOM_STEP);
    } else if (e.key === "-" || e.key === "_") {
      e.preventDefault();
      setZoom(scale / ZOOM_STEP);
    } else if (e.key === "0") {
      e.preventDefault();
      resetZoom();
    }
  });
}

/* ==========================================================================
   UTILITY HELPERS
   ========================================================================== */
function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
