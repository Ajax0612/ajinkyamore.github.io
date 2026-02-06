


export type Skill = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "icons/Java-Light.svg" },
      { name: "Python", icon: "icons/Python-Light.svg" },
      { name: "JavaScript", icon: "icons/JavaScript.svg" },
      { name: "TypeScript", icon: "icons/TypeScript.svg" }
    ],
  },
  {
    title: "Automation",
    skills: [
      { name: "Selenium", icon: "icons/Selenium.svg" },
      { name: "Nightwatch.js", icon: "icons/nightwatch.svg" },
      { name: "Playwright", icon: "icons/Playwrite.svg" },
      { name: "Postman", icon: "icons/Postman.svg" },
      { name: "JMeter", icon: "icons/jmeter.svg" },
      { name: "k6", icon: "icons/K6.svg" },
    ],
  },
  {
    title: "DevOps & Observability",
    skills: [
      { name: "Jenkins", icon: "icons/Jenkins-Light.svg" },
      { name: "GitHub Actions", icon: "icons/GithubActions-Light.svg" },
      { name: "Docker", icon: "icons/Docker.svg" },
      { name: "Kubernetes", icon: "icons/Kubernetes.svg" },
      { name: "Grafana", icon: "icons/Grafana-Light.svg" },
      { name: "Prometheus", icon: "icons/Prometheus.svg" },
      { name: "Elasticsearch", icon: "icons/Elasticsearch-Light.svg" },
    ],
  },
];
