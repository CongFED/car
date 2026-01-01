import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-gradient">Auto</span>
                <span className="text-foreground">Pro</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6">
              Dịch vụ chăm sóc và độ xe chuyên nghiệp hàng đầu. Mang đến sự hoàn hảo cho chiếc xe của bạn.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              {[
                { name: "Trang Chủ", href: "#home" },
                { name: "Giới Thiệu", href: "#about" },
                { name: "Dịch Vụ", href: "#services" },
                { name: "Hình Ảnh", href: "#gallery" },
                { name: "Liên Hệ", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Dịch Vụ</h4>
            <ul className="space-y-3">
              {[
                "Rửa Xe Cao Cấp",
                "Đánh Bóng Sơn",
                "Phủ Ceramic",
                "Dán PPF",
                "Vệ Sinh Nội Thất",
                "Độ Đèn & Phụ Kiện",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#services");
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Nguyễn Văn Linh, Quận 7, TP.HCM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+84123456789"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  0123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@autopro.vn"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@autopro.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} AutoPro Detailing. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;