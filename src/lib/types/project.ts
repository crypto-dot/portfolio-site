export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    imageUrl?: string;
    liveUrl?: string;
    githubUrl?: string;
    technologies: string[];
    status: 'Live' | 'In Development' | 'Archived';
    category: 'Web Development' | 'AI/ML' | 'Mobile' | 'Desktop' | 'Full Stack' | 'Frontend' | 'Backend';
    featured?: boolean;
    year: number;
    client?: string;
    duration?: string;
}