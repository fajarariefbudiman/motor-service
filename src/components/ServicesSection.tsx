import { motion } from "framer-motion";
import serviceEngine from "../assets/service-engine.jpg";
import tireService from "../assets/tire-service.jpg";
import electricalService from "../assets/electrical-service.jpg";
import motorcycleClean from "../assets/motorcycle-clean.jpg";

const services = [
  {
    image: serviceEngine,
    title: "Service Rutin",
    description: "Perawatan berkala untuk menjaga performa motor tetap optimal. Termasuk pengecekan mesin, rem, dan komponen vital.",
    price: "Mulai Rp 75.000",
  },
  {
    image: tireService,
    title: "Ganti Oli & Ban",
    description: "Penggantian oli mesin berkualitas tinggi dan ban dengan berbagai pilihan merek terpercaya.",
    price: "Mulai Rp 50.000",
  },
  {
    image: electricalService,
    title: "Kelistrikan & Tune Up",
    description: "Perbaikan sistem kelistrikan dan penyetelan mesin menyeluruh untuk efisiensi maksimal.",
    price: "Mulai Rp 100.000",
  },
  {
    image: motorcycleClean,
    title: "Bore Up & Modifikasi",
    description: "Layanan modifikasi mesin untuk meningkatkan kapasitas dan tenaga motor sesuai kebutuhan.",
    price: "Mulai Rp 500.000",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ServicesSection = () => {
  return (
    <section
      id="layanan"
      className="section-padding bg-gray-50"
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-accent-blue-light text-accent rounded-full text-sm font-medium mb-4">Layanan Kami</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Solusi Lengkap untuk Motor Anda</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Berbagai pilihan layanan berkualitas dengan harga terjangkau dan hasil terjamin</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-gray-300 transition-colors duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                  <span className="text-accent font-semibold">{service.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
