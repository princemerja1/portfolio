// /app/projects/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";
import "../components/card.css";
import "./project.css";

import { notFound } from "next/navigation";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

async function getProjects(): Promise<WorkItem[]> {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

const BrowseMyWorkPage = async () => {
  const projects = await getProjects();

  return (
    <div className="w-screen">
      <div className="center-container">
        <h1>Browse My Work</h1>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="card card-project" key={project.id}>
            <a href={`/projects/${project.id}`}>
              <div className="card-content">
                <Image className="img z-0" alt={project.title} src={project.image_url} fill/>
                <div className="text z-10">

                <h2>{project.title}</h2>
                <h3>-----------------------</h3>
                <p>{project.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseMyWorkPage;
