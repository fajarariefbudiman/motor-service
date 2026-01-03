import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero-motorcycle.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional motorcycle service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
          {/* Left Column */}
          <div className="lg:pr-8">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-2 bg-accent-blue/20 text-accent-blue border border-accent-blue/30 rounded-full text-sm font-medium mb-6"
            >
              ⭐ Service Motor Terpercaya #1 di Jakarta
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6"
            >
              Perawatan Motor <span className="text-accent-blue">Berkualitas Premium</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 leading-relaxed max-w-[600px] mb-8"
            >
              Dapatkan layanan service motor profesional dengan teknisi berpengalaman. Garansi 30 hari, harga transparan, dan kualitas terjamin untuk motor kesayangan Anda.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="hero"
                size="lg"
                className="bg-accent-blue hover:bg-accent-blue/90 text-gray-900"
              >
                Book Service Sekarang
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Hubungi Kami
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-primary-foreground/10"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">5000+</p>
                <p className="text-sm text-gray-400">Motor Diservice</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">10+</p>
                <p className="text-sm text-gray-400">Tahun Pengalaman</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">4.9★</p>
                <p className="text-sm text-gray-400">Rating Google</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Empty for image to show */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
