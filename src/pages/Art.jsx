import { useState } from "react";

function Art() {
  const availableTags = ["Pixel Art", "UI", "Digital Art", "Visual Design"];
  const [selectedTags, setSelectedTags] = useState([]);

  const artworks = [
    {
      id: 1,
      image: "/art/cgsa-riso-mockup-pink-yellow.png",
      tags: ["Digital Art"],
    },
    {
      id: 2,
      image: "/art/high%20priestess.png",
      tags: ["Digital Art"],
    },
    {
      id: 3,
      image: "/art/mockup.png",
      tags: ["Digital Art"],
    },
    {
      id: 4,
      image: "/art/nature-blanket-large.png",
      tags: ["Pixel Art"],
    },
    {
      id: 5,
      image: "/art/singhampton%20caves%20trail.png",
      tags: ["Digital Art"],
    },
    {
      id: 6,
      image: "/art/stock-exchange-logo.png",
      tags: ["Visual Design"],
    },
    {
      id: 7,
      image: "/art/worldbuilding-tarot.png",
      tags: ["Digital Art", "Visual Design"],
    },
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filteredArtworks =
    selectedTags.length === 0
      ? artworks
      : artworks.filter((artwork) =>
          selectedTags.every((tag) => artwork.tags.includes(tag)),
        );

  return (
    <div className="w-full bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="section-title">Art</h1>
        <p className="section-subtitle">
          Filter artworks by tags to explore my visual work
        </p>

        {/* Tag Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedTags.includes(tag)
                  ? "bg-accent text-primary-light ring-2 ring-accent-alt"
                  : "bg-primary/10 text-primary hover:bg-primary/15"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results count */}
        {selectedTags.length > 0 && (
          <p className="text-primary/70 mb-8 font-medium">
            Showing {filteredArtworks.length} of {artworks.length} artworks
          </p>
        )}

        {/* Masonry Gallery */}
        {filteredArtworks.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2">
            {filteredArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="mb-2 break-inside-avoid overflow-hidden rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
              >
                <img
                  src={artwork.image}
                  alt={`Artwork ${artwork.id}`}
                  className="w-full h-auto display-block"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-primary/70 text-lg">
              No artworks match the selected tags. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Art;
