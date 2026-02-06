export type Project = {
  title: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Playwright Automation Framework",
    shortDesc: "Scalable UI automation with CI/CD integration",
    description:
      "Designed and implemented a reusable Playwright automation framework using Page Object Model. Integrated with GitHub Actions and Allure reporting to enable fast feedback and stable CI execution.",
    highlights: [
      "Reduced regression execution time by 60%",
      "Enabled parallel execution in CI",
      "Improved test reliability & maintainability",
    ],
    tech: ["Playwright", "TypeScript", "GitHub Actions", "Allure"],
    github: "https://github.com/your-repo",
  },
  {
    title: "k6 Performance Testing Suite",
    shortDesc: "API load & stress testing with observability",
    description:
      "Built a performance testing framework using k6 for REST APIs, with Grafana dashboards to monitor latency, throughput, and error rates.",
    highlights: [
      "Identified bottlenecks under peak load",
      "Defined SLA-based performance gates",
      "Enabled pre-release performance validation",
    ],
    tech: ["k6", "Grafana", "REST APIs"],
  },
  {
  title: "Selenium Java Automation Framework",
  shortDesc: "Robust UI automation framework for web applications",
  description:
    "Designed and implemented a scalable Selenium automation framework using Java and Page Object Model. Integrated with TestNG and Maven to support cross-browser testing and seamless CI/CD execution.",
  highlights: [
    "Built reusable Page Object Model architecture",
    "Enabled parallel test execution to reduce execution time",
    "Integrated with CI pipelines for automated regression runs",
  ],
  tech: ["Selenium", "Java", "TestNG", "Maven"],
},
{
  title: "JMeter Performance Testing Suite",
  shortDesc: "Load and stress testing for web & API applications",
  description:
    "Created performance test plans using Apache JMeter to simulate real-world user load. Analyzed throughput, response times, and error rates to identify performance bottlenecks.",
  highlights: [
    "Simulated concurrent user traffic and peak load scenarios",
    "Identified response-time bottlenecks under stress conditions",
    "Generated detailed performance reports for stakeholders",
  ],
  tech: ["JMeter", "HTTP/REST APIs", "Performance Testing"],
},
{
  title: "REST Assured API Automation Framework",
  shortDesc: "Automated API testing framework for REST services",
  description:
    "Developed a REST Assured based API automation framework in Java to validate RESTful services. Focused on response validation, schema verification, and negative testing scenarios.",
  highlights: [
    "Automated functional and regression testing for APIs",
    "Validated response payloads and HTTP status codes",
    "Improved API test coverage and reliability",
  ],
  tech: ["REST Assured", "Java", "API Testing", "JSON"],
}



];
