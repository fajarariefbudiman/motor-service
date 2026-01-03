import { motion } from "framer-motion";
import mechanic1 from "../assets/mechanic-1.jpg";
import mechanic2 from "../assets/mechanic-2.jpg";
import workshop from "../assets/workshop.jpg";

const team = [
  {
    image: mechanic1,
    name: "Pak Joko",
    role: "Head Mechanic",
    experience: "15 tahun pengalaman",
  },
  {
    image: mechanic2,
    name: "Mbak Dewi",
    role: "Electrical Specialist",
    experience: "8 tahun pengalaman",
  },
];

const AboutSection = () => {
  return (
    <section
      id="tentang"
      className="section-padding bg-card overflow-hidden"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={workshop}
                alt="MOTORCARE Workshop"
                className="w-full rounded-3xl shadow-lg"
              />
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-gray-900 text-primary-foreground p-6 rounded-2xl shadow-xl"
              >
                <p className="text-4xl font-bold text-accent-blue">10+</p>
                <p className="text-sm text-gray-400">Tahun Pengalaman</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 bg-accent-blue-light text-accent rounded-full text-sm font-medium mb-4">Tentang Kami</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Bengkel Motor Terpercaya Sejak 2014</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              MOTORCARE didirikan dengan visi menjadi bengkel motor terpercaya yang mengutamakan kualitas dan kepuasan pelanggan. Dengan teknisi bersertifikat dan peralatan modern, kami siap merawat motor kesayangan Anda.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">Kami percaya bahwa setiap motor berhak mendapat perawatan terbaik. Itulah mengapa kami selalu menggunakan spare part berkualitas dan memberikan garansi untuk setiap service.</p>

            {/* Team Preview */}
            <div className="grid grid-cols-2 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-sm text-accent">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.experience}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
