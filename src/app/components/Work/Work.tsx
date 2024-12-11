//app/components/Work/Work.tsx
import "./Work.css";
import "../card.css";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Link from "next/link";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  url: string;
}

async function getProjects(): Promise<WorkItem[]> {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const projects = JSON.parse(fileContent);
  return projects.slice(-3).reverse();
}

const WorkPage = async () => {
  const projects = await getProjects();
  return (
    <>
      <div className="work-main">
        <div className="recent-wrapper">
          <div className="recent-text">Recent Work</div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link href={`projects/${project.id}`} key={project.id}>
              <div className="card card-work">
                <div className="image">
                  <Image
                    alt={project.title}
                    src={project.image_url ? `/projects/${project.image_url}/image.jpg` : '/default-image.jpg'}
                    width="1600"
                    height="900"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="browsemywork-container">

        <Link href="/projects">
          <div className="button browsemywork">{"Click to see all >"}</div>
        </Link>
        </div>
      </div>
    </>
  );
};
export default WorkPage;
