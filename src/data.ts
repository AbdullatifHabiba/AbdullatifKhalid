import { Github, Linkedin, Mail } from 'lucide-react';
import gitopsImg from './assets/projects/gitops.png';
import todoImg from './assets/projects/todo.png';
import weatherImg from './assets/projects/weather.png';
import k8sTlsImg from './assets/projects/k8s-tls.png';
import wordpressImg from './assets/projects/wordpress.png';
import aiopsImg from './assets/projects/aiops.png';
import gifConverterImg from './assets/projects/gif-converter.png';
import deltasouqImg from './assets/projects/deltasouq.png';


export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const personalInfo = {
    name: "Abdullatif Khalid Habiba",
    role: "DevOps Engineer",
    bio: "DevOps Engineer with expertise in containerization, orchestration, and cloud infrastructure. Proven experience in building CI/CD pipelines, managing Kubernetes clusters, and implementing scalable monitoring solutions.",
    socials: [
        { name: 'GitHub', icon: Github, href: 'https://github.com/AbdullatifHabiba' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/abdullatif-habiba-2031b6217/' },
        { name: 'Email', icon: Mail, href: 'mailto:abdullatifkhalid99@gmail.com' },
    ]
};

export const skills = [
    {
        category: "Cloud Platforms",
        items: ["AWS (EC2, S3, EKS, RDS)", "GCP (Vertex AI, Compute Engine)", "CloudFormation"]
    },
    {
        category: "Containerization & Orchestration",
        items: ["Docker", "Kubernetes", "Amazon EKS", "Docker Hub"]
    },
    {
        category: "CI/CD & Automation",
        items: ["Jenkins", "GitHub Actions", "ArgoCD", "Shell Scripting"]
    },
    {
        category: "Infrastructure as Code",
        items: ["Terraform", "Ansible"]
    },
    {
        category: "Monitoring & Logging",
        items: ["Elasticsearch", "Kibana", "Prometheus", "Grafana"]
    },
    {
        category: "Programming",
        items: ["Python", "Java", "JavaScript", "SQL", "Bash"]
    }
];

export const projects = [
    {
        title: "GitOps Infrastructure Management",
        description: "Implemented GitOps workflow using ArgoCD for declarative Kubernetes deployments. Containerized services using Docker and managed multi-environment configurations through kustomize.",
        tags: ["Kubernetes", "ArgoCD", "Terraform", "GitHub Actions"],
        link: "https://github.com/AbdullatifHabiba/GitOps-Infrastructure-for-Dependency-Track",
        image: gitopsImg
    },
    {
        title: "ToDo CI/CD Pipeline Project",
        description: "Developed a complete CI/CD pipeline for a containerized ToDo application using Jenkins and GitHub Actions. Built Docker images and deployed to Kubernetes automatically.",
        tags: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
        link: "https://github.com/AbdullatifHabiba/ToDo-CICD-Project",
        image: todoImg
    },
    {
        title: "Weather Stations Monitoring System",
        description: "Architected and deployed a real-time monitoring system using Apache Kafka and Elasticsearch. Created a local Kubernetes cluster with automated deployment.",
        tags: ["Kubernetes", "Docker", "Elasticsearch", "Kafka"],
        link: "https://github.com/AbdullatifHabiba/Weather-Stations_Monitoring",
        image: weatherImg
    },
    {
        title: "Kubernetes TLS Project",
        description: "Deploying a production-ready Kubernetes cluster on AWS EKS with automated TLS certificate management using Cert-Manager and Let's Encrypt. Includes Terraform infrastructure provisioning.",
        tags: ["Kubernetes", "AWS EKS", "Terraform", "Cert-Manager", "Let's Encrypt"],
        link: "https://github.com/AbdullatifHabiba/Kubernetes-TLS-Project",
        image: k8sTlsImg
    },
    {
        title: "WordPress on AWS (IaC)",
        description: "Comprehensive Infrastructure as Code (IaC) solution for deploying scalable WordPress applications on AWS using Terraform for provisioning and Ansible for configuration management.",
        tags: ["Terraform", "Ansible", "AWS", "WordPress", "IaC"],
        link: "https://github.com/AbdullatifHabiba/WordPress-on-AWS---Terraform-Ansible-Infrastructure",
        image: wordpressImg
    },
    {
        title: "AIOps Self-Monitoring",
        description: "AIOps solution for self-monitoring systems, leveraging machine learning for anomaly detection and automated remediation of infrastructure issues.",
        tags: ["AIOps", "Monitoring", "Machine Learning", "Automation"],
        link: "https://github.com/AbdullatifHabiba/AiOps-selfMonitoring",
        image: aiopsImg
    },
    {
        title: "GIF Converter (Awees Converter)",
        description: "Modern web application for converting videos to GIF format. Features a clean, user-friendly interface with drag-and-drop upload, real-time conversion progress, and instant downloads.",
        tags: ["React", "Video Processing", "Web App", "Vercel"],
        link: "https://gif-converter.vercel.app/",
        image: gifConverterImg
    },
    {
        title: "DeltaSouq - AgriFreelance Hub",
        description: "Arabic agricultural freelance marketplace platform connecting farmers and agricultural companies with specialized freelance experts. Features RTL design, freelancer profiles, and service listings.",
        tags: ["React", "Arabic", "Marketplace", "Agriculture", "Vercel"],
        link: "https://aragri-freelance-hub-builder.vercel.app/",
        image: deltasouqImg
    }
];

export const experience = [
    {
        company: "Obelion.ai",
        role: "DevOps Engineer",
        period: "Jan 2026 - Present",
        description: "Spearheaded multi-cloud infrastructure automation across AWS, GCP, Azure, Oracle, and Alibaba Cloud. Engineered CI/CD pipelines for Kubernetes workload migration and orchestrated cross-cloud virtual machine (VM) migrations with minimal downtime."
    },
    {
        company: "Obelion.ai",
        role: "Software Engineer",
        period: "Nov 2024 - Jan 2026",
        description: "Developed full-stack web applications using Next.js. Applied software engineering best practices and collaborated on cloud computing solutions."
    },
    {
        company: "FortStak",
        role: "DevOps Intern",
        period: "July 2024 - Nov 2024",
        description: "Gained hands-on experience with DevOps tools, Agentic AI (MCP, CrewAI), and AWS. Practiced IaC with Terraform and Ansible, and CI/CD implementation."
    }
];
