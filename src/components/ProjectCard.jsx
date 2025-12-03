function ProjectCard({ title, description, image, link, tags, onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="card cursor-pointer text-left transition-transform hover:scale-105 active:scale-100 flex flex-col"
    >
      {image && (
        <div className="w-full h-56 rounded-md mb-4 flex items-center justify-center bg-white overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <h3 className="text-xl font-black italic text-primary mb-2">{title}</h3>
      <p className="text-primary/70 mb-4 flex-grow">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-accent text-primary-light text-xs rounded-full font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </button>
  );
}

export default ProjectCard;
