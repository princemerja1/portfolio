// /app/projects/[projectid]/page.tsx
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

async function getProjectData(projectId: string): Promise<WorkItem | null> {
  const filePath = path.join(process.cwd(), 'public', 'projects.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(fileContent);
  return projects.find((project: WorkItem) => project.id === projectId) || null;
}

const ProjectDetailPage = async ({ params }: { params: { projectid: string } }) => {
  const { projectid } = params;
  const project = await getProjectData(projectid);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <Image src={project.image_url} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetailPage;
