export interface Project {
  title: string;
  githubUrl: string;
  tools: string[];
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export const PROFILE = {
  name: "Anuj Kumar",
  title: "Formal Verification & Silicon Engineer",
  degree: "B.Tech in Electronics & Communication Engineering (2022 – 2026)",
  institution: "JSS Academy of Technical Education, Noida",
  gpa: "Class XII (CBSE): 94.6%",
  github: "https://github.com/AnujYadav-1915",
  leetcode: "https://leetcode.com/u/AnujYadav1915/",
  linkedin: "https://www.linkedin.com/in/anuj-yadav-1915/",
  summary: "Electronics & Communication Engineering student with hands-on ASIC/SoC front-end formal verification experience: writing SystemVerilog RTL and SystemVerilog Assertions (SVA), and proving properties with Cadence JasperGold and Synopsys VC Formal on a RISC-V pipeline, a GPU MAC datapath, and a MESI cache-coherence protocol. Comfortable reading RTL quickly and reasoning about hazards, liveness, and safety with temporal logic. Background also includes bare-metal embedded C and systems programming.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Formal Verification & Digital Design",
    skills: ["SystemVerilog (RTL & SVA)", "Verilog", "Cadence JasperGold", "Synopsys VC Formal", "Bounded Model Checking (BMC)", "K-Induction", "Verilator"]
  },
  {
    category: "Computer Architecture",
    skills: ["RISC-V (RV32I) Pipelined Datapath", "Hazard Detection & Forwarding", "MESI Cache Coherence", "Bus Arbitration", "Memory Systems"]
  },
  {
    category: "Languages & Systems",
    skills: ["C / C++", "Embedded C", "Python", "TCL", "SQL", "Data Structures & Algorithms", "Bash / Shell"]
  },
  {
    category: "Embedded & Hardware Tools",
    skills: ["ARM Cortex-M (STM32)", "ARM CMSIS", "UART / I2C / SPI", "Git", "Docker", "GDB", "Valgrind", "Linux"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Formal Verification of a RISC-V Microprocessor (RV32I)",
    githubUrl: "https://github.com/AnujYadav-1915/Formal-Verification-of-a-RISC-V-Microprocessor",
    tools: ["SystemVerilog", "SVA", "Cadence JasperGold", "Verilator", "Python"],
    bullets: [
      "Designed and verified a 5-stage pipelined RV32I core (IF/ID/EX/MEM/WB) with operand forwarding, hazard detection, and branch flush recovery.",
      "Authored 50+ concurrent SVA properties covering pipeline hazards, forwarding correctness, register-file consistency, and deadlock-freedom.",
      "Proved formal properties in Cadence JasperGold, including load-use hazard stall properties that fire on register dependency matches.",
      "Built a Python pipeline to parse formal proof reports and integrated Verilator static linting into automated workflow."
    ]
  },
  {
    title: "GPU Tensor Core MAC Unit — Formal Verification",
    githubUrl: "https://github.com/AnujYadav-1915/GPU-Tensor-Core-MAC-Unit-Verifier-",
    tools: ["SystemVerilog", "Synopsys VC Formal", "JasperGold", "Python"],
    bullets: [
      "Designed a parameterized 3-stage signed fixed-point multiply-accumulate (MAC) unit with saturating overflow checks and ready-valid handshake FSM.",
      "Built formal verification environment and Python generator producing 100+ bit-sliced SVA properties, enabling proof convergence in under 1 minute.",
      "Applied cut-point abstraction to black-box multiplier stages, bypassing state-space explosion on 2^32 input space during accumulator proof bounds."
    ]
  },
  {
    title: "MESI Cache Coherence Protocol (GPU L2)",
    githubUrl: "https://github.com/AnujYadav-1915/MESI-Cache-Coherence-Protocol-GPU-L2-",
    tools: ["SystemVerilog", "SVA", "Cadence JasperGold"],
    bullets: [
      "Implemented synthesizable RTL for a dual-core cache cluster with snooping controllers, round-robin bus arbiter, and memory controller.",
      "Formally verified 19 concurrent SVA properties: mutual exclusion between Modified/Exclusive and Invalid states, shared data consistency, snoop-invalidation invariants, and arbiter starvation-freedom."
    ]
  },
  {
    title: "ARM Cortex-M3 UART–I2C Protocol Bridge",
    githubUrl: "https://github.com/AnujYadav-1915/ARM-Cortex-M3-UART-I2C-Protocol-Bridge",
    tools: ["Embedded C", "ARM CMSIS", "STM32F103", "DMA"],
    bullets: [
      "Built interrupt-driven UART-to-I2C bridge firmware using a lock-free SPSC ring buffer with hardware Data Memory Barriers (__DMB()).",
      "Offloaded bulk data transfers to DMA channels, cutting interrupt service routine (ISR) latency by over 70%.",
      "Wrote host-based register mocking test harness enabling native unit testing of drivers and protocol parser without physical hardware."
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Development Intern",
    company: "Quizzoc (Remote)",
    period: "Jan 2024 – Mar 2024",
    bullets: [
      "Reduced page load latency by 10% through lazy loading implementation and API call optimization across full-stack features.",
      "Shipped secure REST APIs supporting active monthly users, verified via Postman testing and structured Git code reviews."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "500+ Algorithmic Problems Solved (LeetCode, CodeChef, GFG)", issuer: "Competitive Programming" },
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { title: "Job Simulations: Citi, Commonwealth Bank, Skyscanner, Walmart Global Tech", issuer: "Forage" }
];
