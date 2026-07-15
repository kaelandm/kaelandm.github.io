import { useEffect, useState } from "react";

function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentIndex((i) => i + 1);
      if (e.key === "ArrowLeft") setCurrentIndex((i) => i - 1);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // reset carousel to first image when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-primary-light rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="sticky top-0 flex justify-end p-4 bg-primary-light border-b border-primary/10">
          <button
            onClick={onClose}
            className="text-primary hover:text-accent transition-colors text-2xl font-light"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title and Year */}
          <div className="mb-6">
            <h2 className="text-4xl font-black italic text-primary mb-2">
              {project.title}
            </h2>
          </div>

          {/* Image carousel (main image + additional images) */}
          {(project.image || (project.images && project.images.length)) &&
            (() => {
              const imgs = [project.image]
                .concat(project.images || [])
                .filter(Boolean);
              // normalize index within bounds and allow looping
              const idx =
                ((currentIndex % imgs.length) + imgs.length) % imgs.length;

              return (
                <div className="w-full h-96 rounded-lg mb-8 relative bg-primary-light flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex((i) => i - 1);
                    }}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent/90 text-primary-light rounded-full p-2 z-20"
                  >
                    ◀
                  </button>

                  <img
                    src={imgs[idx]}
                    alt={`${project.title} - image ${idx + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex((i) => i + 1);
                    }}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent/90 text-primary-light rounded-full p-2 z-20"
                  >
                    ▶
                  </button>

                  {/* simple position indicator */}
                  {imgs.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {imgs.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(i);
                          }}
                          className={`w-2 h-2 rounded-full ${
                            i === idx ? "bg-accent" : "bg-primary/40"
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

          {/* Tags */}
          <div className="flex justify-between items-baseline">
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-accent text-primary-light rounded-full font-semibold text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Link Button */}
            {project.link && project.link !== "#" && (
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Visit & Play →
                </a>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="prose prose-sm max-w-none">
            <p className="text-lg text-primary/80 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Full Content */}
            {project.content && (
              <div className="text-primary/70 leading-relaxed space-y-8">
                {project.content}
              </div>
            )}

            {/* Additional images moved into carousel above. */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
