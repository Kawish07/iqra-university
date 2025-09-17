const Card = ({ title, description, image, link }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
    {image && <img src={image} alt={title} className="h-40 w-full object-cover" />}
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      {link && <a href={link} className="mt-auto text-blue-900 font-semibold hover:underline">Learn More</a>}
    </div>
  </div>
);

export default Card;
