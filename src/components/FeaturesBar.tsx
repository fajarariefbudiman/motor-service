import { motion } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garansi 30 Hari",
    subtitle: "Jaminan service untuk ketenangan Anda",
    bgColor: "bg-accent-blue-light",
    iconColor: "text-accent",
  },
  {
    icon: Clock,
    title: "Layanan Express",
    subtitle: "Service cepat mulai dari 1 jam",
    bgColor: "bg-accent-green-light",
    iconColor: "text-accent-green",
  },
  {
    icon: Award,
    title: "Teknisi Bersertifikat",
    subtitle: "Tim profesional & berpengalaman",
    bgColor: "bg-accent-amber-light",
    iconColor: "text-accent-amber",
  },
  {
    icon: ThumbsUp,
    title: "Harga Transparan",
    subtitle: "Tanpa biaya tersembunyi",
    bgColor: "bg-accent-blue-light",
    iconColor: "text-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const FeaturesBar = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div
                className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
              >
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesBar;
