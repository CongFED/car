import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Điện Thoại",
    content: "0123 456 789",
    href: "tel:+84123456789",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@autopro.vn",
    href: "mailto:info@autopro.vn",
  },
  {
    icon: MapPin,
    title: "Địa Chỉ",
    content: "123 Nguyễn Văn Linh, Quận 7, TP.HCM",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Giờ Làm Việc",
    content: "T2 - T7: 8:00 - 18:00",
    href: null,
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Liên Hệ Với Chúng Tôi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Đặt Lịch <span className="text-gradient">Ngay Hôm Nay</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Liên hệ để được tư vấn miễn phí và nhận báo giá chi tiết cho dịch vụ bạn cần
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Map */}
          <div>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="card-glass p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{item.content}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden h-[300px] lg:h-[350px] border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0245795396!2d106.69976931533218!3d10.729756992338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9023a3a85f%3A0x9259bad475336d5!2zMTIzIMSQLiBOZ3V54buFbiBWxINuIExpbmgsIFTDom4gUGjDuiwgUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1625000000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AutoPro Detailing Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Gửi Yêu Cầu Tư Vấn</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Họ và Tên *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Số Điện Thoại *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="0123 456 789"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Dịch Vụ Quan Tâm
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="wash">Rửa Xe Cao Cấp</option>
                  <option value="polish">Đánh Bóng Sơn</option>
                  <option value="ceramic">Phủ Ceramic</option>
                  <option value="ppf">Dán PPF</option>
                  <option value="interior">Vệ Sinh Nội Thất</option>
                  <option value="lights">Độ Đèn & Phụ Kiện</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Nội Dung
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Mô tả yêu cầu của bạn..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="btn-gold w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Đang gửi..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Gửi Yêu Cầu
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;