// pages/projects/[id].js
import { useRouter } from "next/router";

const projects = [
  { id: "1", name: "Project 1", description: "Description 1" },
  { id: "2", name: "Project 2", description: "Description 2" },
  { id: "3", name: "Project 3", description: "Description 3" },
];

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  // Find the project by its ID
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
}
