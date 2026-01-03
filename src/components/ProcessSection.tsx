import { motion } from "framer-motion";
import { CalendarCheck, Search, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Booking Online",
    description: "Jadwalkan service motor Anda melalui form booking online atau hubungi kami langsung via WhatsApp.",
  },
  {
    icon: Search,
    number: "02",
    title: "Diagnosa Gratis",
    description: "Tim teknisi kami akan melakukan pengecekan menyeluruh untuk mengetahui kondisi motor Anda.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Proses Pengerjaan",
    description: "Motor Anda dikerjakan oleh teknisi berpengalaman dengan peralatan modern dan sparepart berkualitas.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Serah Terima",
    description: "Motor siap diambil dengan garansi service 30 hari dan invoice transparan tanpa biaya tersembunyi.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ProcessSection = () => {
  return (
    <section id="proses" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-accent-green-light text-accent-green rounded-full text-sm font-medium mb-4">
            Cara Kerja
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proses Service Mudah
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            4 langkah mudah untuk mendapatkan layanan service motor terbaik
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-200" />
              )}
              
              <div className="text-center relative">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
                </div>
                {/* Number */}
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent-blue text-gray-900 rounded-full flex items-center justify-center text-sm font-bold z-20 left-1/2 ml-6">
                  {step.number}
                </span>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
