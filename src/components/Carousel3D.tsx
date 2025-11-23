import "./Carousel3D.css";

export default function Carousel3D() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      text: "Innovative Hardware Projects",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781f5a1?w=400&h=250&fit=crop",
      text: "Team Collaboration",
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
      text: "AI & Machine Learning",
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      text: "IoT & Embedded Systems",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      text: "Full-Stack Development",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
      text: "Cloud & Cybersecurity",
    },
  ];

  return (
    <div className="carousel-container">
      <div id="carousel">
        {images.map((item, index) => (
          <figure key={index}>
            {/* Small SVG on top-left */}
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gold"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.416 8.403L12 19.897 4.584 24 6 15.597 0 9.75l8.332-1.595z" />
              </svg>
            </div>

            <img src={item.src} alt={`Tech ${index + 1}`} />
            <figcaption>{item.text}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

