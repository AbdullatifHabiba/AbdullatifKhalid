export interface Resource {
    id: string;
    title: string;
    url: string;
    platform: string;
}

export interface RoadmapCategory {
    id: string;
    title: string;
    icon: string;
    description: string;
    resources: Resource[];
}

export const roadmapData: RoadmapCategory[] = [
    {
        id: 'linux-networking',
        title: '🐧 Linux & Networking',
        icon: '🐧',
        description: 'Master the fundamentals of Linux system administration and networking',
        resources: [
            {
                id: 'rhcsa',
                title: 'Red Hat Certified System Administrator',
                url: 'https://www.oreilly.com/videos/red-hat-certified/9780137931521/',
                platform: "O'Reilly Course"
            },
            {
                id: 'linux-practice',
                title: 'Linux Practice',
                url: 'https://engineer.kodekloud.com/practice',
                platform: 'KodeKloud Engineer'
            },
            {
                id: 'network-fundamentals',
                title: 'Network Fundamentals',
                url: 'https://www.youtube.com/watch?v=qiQR5rTSshw',
                platform: 'YouTube Guide'
            }
        ]
    },
    {
        id: 'cloud-infrastructure',
        title: '☁️ Cloud Infrastructure (AWS & IaC)',
        icon: '☁️',
        description: 'Build and manage cloud infrastructure with AWS and Infrastructure as Code',
        resources: [
            {
                id: 'aws-saa',
                title: 'AWS Solutions Architect Associate',
                url: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-hands-on/',
                platform: 'Udemy Hands-on'
            },
            {
                id: 'terraform',
                title: 'Terraform (IaC)',
                url: 'https://www.youtube.com/watch?v=Op5jZTQaUgo',
                platform: 'Full Course'
            },
            {
                id: 'aws-practice',
                title: 'AWS Practice',
                url: 'https://engineer.kodekloud.com/practice',
                platform: 'KodeKloud Labs'
            }
        ]
    },
    {
        id: 'kubernetes-containers',
        title: '☸️ Kubernetes & Containers',
        icon: '☸️',
        description: 'Orchestrate containerized applications with Kubernetes',
        resources: [
            {
                id: 'k8s-course',
                title: 'K8s Main Course',
                url: 'https://www.udemy.com/course-dashboard-redirect/?course_id=2301254',
                platform: 'Udemy Dashboard'
            },
            {
                id: 'k8s-book',
                title: 'The Kubernetes Book',
                url: 'https://github.com/rohitg00/DevOps_Books/blob/main/The%20Kubernetes%20Book%20(Nigel%20Poulton)%20(z-lib.org).pdf',
                platform: 'Nigel Poulton (PDF)'
            },
            {
                id: 'k8s-practice',
                title: 'K8s Practice',
                url: 'https://engineer.kodekloud.com/practice',
                platform: 'KodeKloud Engineer'
            }
        ]
    },
    {
        id: 'automation-cicd',
        title: '🤖 Automation & CI/CD',
        icon: '🤖',
        description: 'Automate deployments and infrastructure with modern CI/CD tools',
        resources: [
            {
                id: 'ansible',
                title: 'Ansible Introduction',
                url: 'https://www.youtube.com/watch?v=3RiVKs8GHYQ&list=PLT98CRl2KxKEUHie1m24-wkyHpEsa4Y70',
                platform: 'YouTube Playlist'
            },
            {
                id: 'github-actions',
                title: 'GitHub Actions',
                url: 'https://www.youtube.com/watch?v=7gJFHjXscr8',
                platform: 'Tutorial Video'
            },
            {
                id: 'ansible-practice',
                title: 'Ansible Practice',
                url: 'https://engineer.kodekloud.com/practice',
                platform: 'KodeKloud Labs'
            }
        ]
    },
    {
        id: 'web-servers',
        title: '🌐 Web Servers',
        icon: '🌐',
        description: 'Configure and optimize web servers for production environments',
        resources: [
            {
                id: 'nginx',
                title: 'Nginx Fundamentals',
                url: 'https://www.youtube.com/watch?v=7tGhir27ZJo&list=PLOLrQ9Pn6cawvMA5JjhzoQrnKbYGYQqx1&index=1',
                platform: 'YouTube Playlist'
            }
        ]
    }
];
