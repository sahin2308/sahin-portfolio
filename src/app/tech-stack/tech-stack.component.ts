import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent {
  stack = [
    {
      icon: '🗃️',
      name: 'SQL',
      description: 'Used for querying, transforming, and managing relational data.'
    },
    {
      icon: '🐍',
      name: 'Python',
      description: 'Core programming language for scripting and building pipelines.'
    },
    {
      icon: '⚡',
      name: 'Apache Spark',
      description: 'Big data engine for distributed processing of large datasets.'
    },
    {
      icon: '🏭',
      name: 'Azure Data Factory',
      description: 'Cloud-based ETL/ELT service for orchestrating data workflows.'
    },
    {
      icon: '📊',
      name: 'Power BI',
      description: 'Data visualization tool used for building dashboards and reports.'
    },
    {
      icon: '🧪',
      name: 'Azure Synapse Analytics',
      description: 'Analytics service that brings together big data and data warehousing.'
    },
    {
      icon: '🔷',
      name: 'Databricks',
      description: 'Unified data platform for ETL and machine learning workflows.'
    },
    {
      icon: '☁️',
      name: 'Azure Fabric',
      description: 'Orchestrates microservices and data components in the cloud.'
    }
  ];
}
