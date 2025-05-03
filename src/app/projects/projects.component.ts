import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Real-Time IoT Data Pipeline',
      description: 'Built using Apache Kafka, Spark, and Databricks...',
      image: 'https://dummyimage.com/600x400/4caf50/ffffff&text=IoT+Pipeline',
      tools: ['Apache Kafka', 'Databricks', 'Azure', 'ADF'],
      github: 'https://github.com/yourusername/project-1'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Interactive Power BI dashboard...',
      image: 'https://dummyimage.com/600x400/ff9800/ffffff&text=Power+BI+Dashboard',
      tools: ['Power BI', 'SQL', 'DAX', 'E-Commerce'],
      github: 'https://github.com/yourusername/project-2'
    },
    {
      title: 'ADF + Synapse ETL Automation',
      description: 'Scalable ETL pipelines using ADF and Synapse...',
      image: 'https://dummyimage.com/600x400/3f51b5/ffffff&text=ADF+ETL+Project',
      tools: ['ADF', 'Synapse', 'Azure SQL', 'ETL'],
      github: 'https://github.com/yourusername/project-3'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Machine learning-based churn prediction using Python, SQL, and Azure Databricks. Visualized with Power BI.',
      image: 'https://dummyimage.com/600x400/00bcd4/ffffff&text=Churn+Prediction',
      tools: ['Python', 'Azure ML', 'Databricks', 'Power BI'],
      github: 'https://github.com/yourusername/project-4'
    }
  ];
  
  selectedProject: any = null;

openModal(project: any) {
  this.selectedProject = project;
}

closeModal() {
  this.selectedProject = null;
}
}
