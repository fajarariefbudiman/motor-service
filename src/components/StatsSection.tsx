import { motion } from "framer-motion";
import { Users, Bike, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Bike,
    value: "5,000+",
    label: "Motor Diservice",
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
  },
  {
    icon: Users,
    value: "3,500+",
    label: "Pelanggan Puas",
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
  },
  {
    icon: Award,
    value: "10+",
    label: "Tahun Pengalaman",
    color: "text-accent-amber",
    bgColor: "bg-accent-amber/10",
  },
  {
    icon: Clock,
    value: "24 Jam",
    label: "Response Time",
    color: "text-accent-peach",
    bgColor: "bg-accent-peach/10",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Dipercaya Ribuan Pelanggan
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Kami bangga telah melayani ribuan pelanggan dengan hasil yang memuaskan
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50"
            >
              <div className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} strokeWidth={1.5} />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
