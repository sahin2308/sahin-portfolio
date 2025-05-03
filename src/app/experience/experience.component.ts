import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { NgFor, NgClass } from '@angular/common'; // ✅ Import NgClass

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgClass], // ✅ Include NgClass here
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChildren('item') timelineItems!: QueryList<ElementRef>;
  visibleItems: boolean[] = [];

  experiences = [
    {
      role: 'Azure Data Engineer',
      company: 'ITC Infotech',
      duration: 'May 2024 – Present',
      description:
        'Transitioned into the Azure Data Engineering team. I work on building scalable data solutions using Azure Data Factory, Synapse, Databricks, and Apache Spark. My tech stack includes SQL, Python, Power BI, ADF, Azure Synapse, Databricks, Spark, and Azure Fabric.'
    },
    {
      role: 'Data Analyst',
      company: 'ITC Infotech',
      duration: 'Aug 2023 – Apr 2024',
      description:
        'Joined ITC Infotech as a campus recruit and started my career as a Data Analyst. Worked on Power BI, SQL, and data modeling using real-time business data.'
    }
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = this.timelineItems
            .toArray()
            .findIndex((el) => el.nativeElement === entry.target);
          if (entry.isIntersecting && index !== -1) {
            this.visibleItems[index] = true;
          }
        });
      },
      { threshold: 0.2 }
    );

    this.timelineItems.forEach((item) => observer.observe(item.nativeElement));
  }
}
