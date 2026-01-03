import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import customer1 from "../assets/customer-1.jpg";
import customer2 from "../assets/customer-2.jpg";
import customer3 from "../assets/customer-3.jpg";

const testimonials = [
  {
    image: customer1,
    name: "Budi Santoso",
    role: "Pengguna Honda Vario",
    rating: 5,
    text: "Service di MOTORCARE sudah 3 tahun, hasilnya selalu memuaskan. Teknisi ramah dan harga transparan. Recommended banget!",
  },
  {
    image: customer2,
    name: "Siti Rahayu",
    role: "Pengguna Yamaha NMAX",
    rating: 5,
    text: "Motor saya jadi lebih irit dan halus setelah tune up di sini. Pelayanan cepat dan profesional. Pasti balik lagi!",
  },
  {
    image: customer3,
    name: "Ahmad Wijaya",
    role: "Pengguna Kawasaki Ninja",
    rating: 5,
    text: "Bengkel paling terpercaya untuk motor sport saya. Spare part original dan teknisinya sangat ahli. Top!",
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

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-accent-amber-light text-accent-amber rounded-full text-sm font-medium mb-4">Testimoni</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Apa Kata Pelanggan Kami</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Ribuan pelanggan puas dengan layanan MOTORCARE</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-8 rounded-3xl border border-border relative"
            >
              {/* Quote Icon */}
              <Quote
                className="absolute top-6 right-6 w-10 h-10 text-gray-100"
                fill="currentColor"
              />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent-amber"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
