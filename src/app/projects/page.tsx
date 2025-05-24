import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import "../components/card.css";
import "../components/button.css";
import "./project.css";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  url: string;
}

export const metadata: Metadata = {
  title: "Browse My Work | Prince Merja",
  description: "Explore projects and portfolio work by Prince Merja.",
  alternates: {
    canonical: "https://www.princemerja.me/projects",
  },
};

async function getProjects(): Promise<WorkItem[]> {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const projects = JSON.parse(fileContent);
  return projects.reverse();
}

const BrowseMyWorkPage = async () => {
  const projects = await getProjects();

  return (
    <div className="w-screen">
      <div className="center-container">
        <Link href="/">
          <div className="button back">{"< Go Back"}</div>
        </Link>
        <h1>Browse My Work</h1>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="card-project" key={project.id}>
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="card-content">
                <Image
                  className="img z-0"
                  alt={project.title}
                  src={`/projects/${project.image_url}/image.jpg`}
                  fill
                />
                <div className="card-text z-10">
                  <h2>{project.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseMyWorkPage;