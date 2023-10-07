// pages/projects/index.js
import Link from "next/link";

const projects = [
  { id: 1, name: "Project 1" },
  { id: 2, name: "Project 2" },
  { id: 3, name: "Project 3" },
];

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
