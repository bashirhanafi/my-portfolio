import { getPosts } from "@/utils/utils";
import { ProjectCard2 } from "@/components/ProjectCard2";
import styles from "./Projects2.module.css";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects2({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <div className={styles.gridContainer}>
      {displayedProjects.map((post, index) => (
        <div key={post.slug} className={styles.gridItem}>
          <ProjectCard2
            images={[
              "/images/logo/bangkit.jpg",
              "/images/gallery/horizontal-2.jpg"
            ]}
          />
        </div>
      ))}
    </div>
  );
}
