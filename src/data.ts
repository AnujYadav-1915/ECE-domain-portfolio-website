export interface Project {
  title: string;
  githubUrl: string;
  tools: string[];
  bullets: string[];
  image?: string;
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
  link?: string;
}

export const PROFILE = {
  name: "Anuj Kumar",
  title: "Formal Verification & Silicon Engineer",
  degree: "B.Tech in Electronics & Communication Engineering (2022 – 2026)",
  institution: "JSS Academy of Technical Education, Noida",
  gpa: "Class XII (CBSE): 94.6%",
  phone: "+91-9044292097",
  email: "anujyadav11112003@gmail.com",
  resumeLink: "/assets/Anuj_Kumar_Resume.pdf",
  github: "https://github.com/AnujYadav-1915",
  leetcode: "https://leetcode.com/u/AnujYadav1915/",
  linkedin: "https://www.linkedin.com/in/anuj-yadav-1915/",
  summary: "Electronics & Communication Engineering student with hands-on ASIC and SoC front-end formal verification experience: writing SystemVerilog RTL and SystemVerilog Assertions (SVA), and proving properties with Cadence JasperGold and Synopsys VC Formal on a RISC-V pipeline, a GPU MAC datapath, and a MESI cache-coherence protocol. Comfortable reading RTL quickly and reasoning about hazards, liveness, and safety with temporal logic. Background also includes bare-metal embedded C and systems programming.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Formal Verification & Digital Design",
    skills: ["SystemVerilog (RTL & SVA)", "Verilog", "Cadence JasperGold", "Synopsys VC Formal", "Bounded Model Checking (BMC)", "K-Induction", "State-Space Reduction", "Verilator"]
  },
  {
    category: "Computer Architecture",
    skills: ["RISC-V (RV32I) Pipelined Datapath", "Hazard Detection & Forwarding", "MESI Cache Coherence", "Bus Arbitration", "Memory Systems"]
  },
  {
    category: "Languages & Scripting",
    skills: ["C / C++", "Embedded C", "Python", "TCL", "SQL", "Data Structures & Algorithms", "Object-Oriented Design"]
  },
  {
    category: "Embedded & Tools",
    skills: ["ARM Cortex-M (STM32)", "ARM CMSIS", "RTOS", "UART / I2C / SPI", "Git", "Docker", "GDB", "Valgrind", "CI/CD", "Linux"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Formal Verification of a RISC-V Microprocessor (RV32I)",
    githubUrl: "https://github.com/AnujYadav-1915/Formal-Verification-of-a-RISC-V-Microprocessor",
    tools: ["SystemVerilog", "SVA", "Cadence JasperGold", "Verilator", "Python"],
    image: "/assets/riscv_pipeline.jpg",
    bullets: [
      "Designed and verified a custom 5-stage pipelined RV32I core (IF/ID/EX/MEM/WB) with operand forwarding, hazard detection, and branch misprediction flush recovery.",
      "Authored 50+ concurrent SVA properties covering pipeline hazards, forwarding correctness, register-file consistency, and deadlock-freedom (liveness); proved properties in Cadence JasperGold.",
      "Built a Python pipeline to parse and triage formal proof reports, and used Verilator for static lint and compilation checks in a local CI flow."
    ]
  },
  {
    title: "GPU Tensor Core MAC Unit — Formal Verification",
    githubUrl: "https://github.com/AnujYadav-1915/GPU-Tensor-Core-MAC-Unit-Verifier-",
    tools: ["SystemVerilog", "Synopsys VC Formal", "JasperGold", "Python"],
    bullets: [
      "Designed a parameterized 3-stage signed fixed-point multiply-accumulate (MAC) unit with saturating overflow checks and a ready-valid handshake control FSM.",
      "Built the formal verification environment and a Python generator producing 100+ bit-sliced SVA properties, localizing checks so formal engines converged in under one minute.",
      "Used cut-point/symbolic abstraction to black-box the multiplier stage, avoiding state-space explosion on a 2^32 input space while proving downstream accumulator saturation bounds."
    ]
  },
  {
    title: "MESI Cache Coherence Protocol (GPU L2)",
    githubUrl: "https://github.com/AnujYadav-1915/MESI-Cache-Coherence-Protocol-GPU-L2-",
    tools: ["SystemVerilog", "SVA", "Cadence JasperGold"],
    image: "/assets/mesi_cache.jpg",
    bullets: [
      "Implemented synthesizable RTL for a dual-core cache cluster with snooping controllers, a round-robin bus arbiter, and a memory controller.",
      "Formally verified 19 concurrent SVA properties: mutual exclusion between Modified/Exclusive and Invalid states, shared-data consistency across cores, snoop-invalidation invariants, and arbiter starvation-freedom (liveness, bounded to 2 cycles)."
    ]
  },
  {
    title: "ARM Cortex-M3 UART–I2C Protocol Bridge",
    githubUrl: "https://github.com/AnujYadav-1915/ARM-Cortex-M3-UART-I2C-Protocol-Bridge",
    tools: ["Embedded C", "ARM CMSIS", "STM32F103", "DMA"],
    bullets: [
      "Built interrupt-driven UART-to-I2C bridge firmware using a lock-free SPSC ring buffer, with hardware data memory barriers (__DMB()) to prevent reordering between buffer writes and pointer updates.",
      "Wrote a host-based register-mocking test harness enabling native unit testing of drivers and protocol parsing without physical hardware; offloaded bulk transfers to DMA, cutting ISR latency 70%."
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Development Intern",
    company: "Quizzoc (Remote)",
    period: "Jan 2024 – Mar 2024",
    bullets: [
      "Cut page load time by 10%, confirmed through frontend performance testing, by implementing lazy loading and optimizing API calls across full-stack features.",
      "Shipped secure REST APIs supporting 50+ monthly active users, validated through Postman testing, by applying clean API design with integrated authentication and structured Git-based code review."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    title: "Data Structures & Algorithms: 500+ algorithmic problems solved across LeetCode, CodeChef, and GeeksforGeeks", 
    issuer: "Competitive Programming" 
  },
  { 
    title: "AWS Certified Cloud Practitioner — Amazon Web Services", 
    issuer: "Amazon Web Services",
    link: "/assets/AWS_Certified_ML.pdf"
  },
  { 
    title: "FreeCodeCamp Certifications (5x)", 
    issuer: "FreeCodeCamp" 
  },
  { 
    title: "Forage Job Simulations (4x): Citi, Commonwealth Bank, Skyscanner, Walmart Global Tech", 
    issuer: "Forage Simulations" 
  }
];
