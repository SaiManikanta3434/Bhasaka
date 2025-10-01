import { Palette, Link, FileText } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "CREATIVE",
      desc: "Our team collaborates to develop the best strategies and inspired solutions for your brand. We leverage intelligence and technology as we create great experiences."
    },
    {
      icon: <Link className="w-10 h-10" />,
      title: "CONNECT",
      desc: "We help you connect with your audience through dynamic and impactful experiences. By understanding your unique needs, we craft strategies that drive success and turn your goals into reality."
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "DEVELOP",
      desc: "Develop Creative transforms your vision into reality with expert solutions in strategy, branding, website development, and content creation."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="group flex flex-col items-start p-6 border rounded-xl shadow-sm transition-all duration-300
                       hover:shadow-2xl hover:scale-105 
                       bg-gradient-to-br from-white to-white 
                       hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-gray-700 hover:text-white"
          >
            <div className="mb-4 text-black group-hover:text-white">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
