// /src/app/projects/page.tsx
import Image from 'next/image';
import Link from 'next/link';
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

// Fetch the project data from the API route
const fetchProjects = async (): Promise<WorkItem[]> => {
  const response = await fetch('/api/projects');
  const projects = await response.json();
  return projects.reverse();
};

const BrowseMyWorkPage = async () => {
  const projects = await fetchProjects(); // Fetch data from API

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
          <div className="card card-project" key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <div className="card-content">
                <Image
                  className="img z-0"
                  alt={project.title}
                  src={`/projects/${project.image_url}/image.jpg`}
                  fill
                />
                <div className="card-text z-10">
                  <h2>{project.title}</h2>
                  <h3>-----------------------</h3>
                  <p>{project.description}</p>
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
