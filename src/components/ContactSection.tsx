import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    detail: "Jl. Raya Motor No. 123, Jakarta Selatan 12345",
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    detail: "0812-3456-789",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    detail: "Senin - Sabtu, 08:00 - 17:00 WIB",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "✅ Booking Berhasil Dikirim!",
      description: "Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi.",
    });
    setFormData({ name: "", phone: "", service: "", date: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="kontak"
      className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-accent-blue/20 text-accent-blue border border-accent-blue/30 rounded-full text-sm font-medium mb-4">Hubungi Kami</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Siap Service Motor Anda?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Booking sekarang atau hubungi kami untuk konsultasi gratis</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-gray-800/50 border border-gray-700/50"
                >
                  <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon
                      className="w-5 h-5 text-accent-blue"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">{info.label}</h4>
                    <p className="text-gray-400">{info.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden h-64 bg-gray-800 border border-gray-700/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2924384289824!2d106.82496507499087!3d-6.225405693768883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e2ddc1f155%3A0x5bb3c7c0a99d2b0!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1704295200000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MOTORCARE Location"
              />
            </div>
          </motion.div>

          {/* Right Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Service Online</h3>
            <p className="text-muted-foreground mb-6">Isi form di bawah dan kami akan menghubungi Anda</p>
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Jenis Layanan *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50"
                  >
                    <option value="">Pilih layanan</option>
                    <option value="service-rutin">Service Rutin</option>
                    <option value="ganti-oli">Ganti Oli</option>
                    <option value="tune-up">Tune Up Mesin</option>
                    <option value="kelistrikan">Kelistrikan</option>
                    <option value="ganti-ban">Ganti Ban</option>
                    <option value="bore-up">Bore Up</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tanggal Booking *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Keluhan / Catatan (Opsional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50 resize-none"
                  placeholder="Ceritakan keluhan motor Anda..."
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="xl"
                className="w-full bg-accent hover:bg-accent/90"
              >
                <Send className="w-5 h-5" />
                Kirim Booking
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
