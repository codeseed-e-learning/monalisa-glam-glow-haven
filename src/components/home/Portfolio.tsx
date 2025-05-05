
const portfolioItems = [
  {
    id: 1,
    category: "Hair",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    title: "Elegant Updo"
  },
  {
    id: 2,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1571646034647-52713772acc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    title: "Glamour Makeup"
  },
  {
    id: 3,
    category: "Nails",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
    title: "Artistic Nail Design"
  },
  {
    id: 4,
    category: "Facial",
    image: "https://images.unsplash.com/photo-1596178060810-72c631f6aad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    title: "Rejuvenating Facial"
  },
  {
    id: 5,
    category: "Hair",
    image: "https://images.unsplash.com/photo-1565336757798-e6501c51bd5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    title: "Modern Color Technique"
  },
  {
    id: 6,
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1518654161653-a5ea9d522531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    title: "Complete Bridal Look"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Work</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio and see the transformations we've created
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-rose-300 text-sm uppercase tracking-wider">{item.category}</span>
                <h3 className="text-white text-xl font-semibold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-2">Follow us on Instagram to see more of our work</p>
          <p className="text-rose-600 font-medium">@monalisa_beauty</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
