import { getPosts } from "@/utils/utils";
import { ProjectCard } from "@/components";
import styles from "./Projects.module.css";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);
  
  const sortedProjects = allProjects
    .filter((p) =>
      Array.isArray(p.metadata.category)
        ? p.metadata.category.map((c) => c.toLowerCase()).includes("rb")
        : p.metadata.category?.toLowerCase() === "rb"
    )
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <div className={styles.gridContainer}>
      {displayedProjects.map((post, index) => (
        <div key={post.slug} className={styles.gridItem}>
          <ProjectCard
            priority={index < 2}
            href={`${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
          />
        </div>
      ))}
    </div>
  );
}
