// /app/projects/[projectid]/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import "./projectid.css";
import "../../components/card.css";
import "../../components/button.css";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  url: string;
}

async function getProjectData(projectId: string): Promise<WorkItem | null> {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const projects = JSON.parse(fileContent);
  return projects.find((project: WorkItem) => project.id === projectId) || null;
}

const ProjectDetailPage = async ({
  params,
}: {
  params: { projectid: string };
}) => {
  const { projectid } = params;
  const project = await getProjectData(projectid);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="projectid-container">
      <div className="center-container">
        <Link href="/projects">
          <div className="button back">{"< Go Back"}</div>
        </Link>
        <h1>{project.title}</h1>
      </div>
      <div className="card projectid-card">
        <a href={project.url}>
          <div className="workid-img">
            <Image
              src={project.image_url}
              width={1600}
              height={900}
              alt={project.title}
            />
          </div>
        </a>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
