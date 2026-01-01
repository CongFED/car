import { ArrowRight } from "lucide-react";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import servicePolish from "@/assets/service-polish.jpg";
import servicePpf from "@/assets/service-ppf.jpg";
import serviceLights from "@/assets/service-lights.jpg";
import serviceWash from "@/assets/service-wash.jpg";

const services = [
  {
    title: "Rửa Xe Cao Cấp",
    description: "Rửa xe theo quy trình 5 bước, sử dụng hóa chất chuyên dụng an toàn cho sơn xe.",
    image: serviceWash,
    price: "Từ 150.000đ",
  },
  {
    title: "Đánh Bóng Sơn",
    description: "Khử xước, phục hồi độ bóng cho sơn xe. Sử dụng máy đánh bóng chuyên nghiệp.",
    image: servicePolish,
    price: "Từ 1.500.000đ",
  },
  {
    title: "Phủ Ceramic",
    description: "Lớp phủ bảo vệ sơn xe cao cấp, chống trầy xước, chống UV, độ bền 2-5 năm.",
    image: serviceCeramic,
    price: "Từ 5.000.000đ",
  },
  {
    title: "Dán PPF",
    description: "Phim bảo vệ sơn xe PPF cao cấp, tự phục hồi xước nhẹ, bảo vệ toàn diện.",
    image: servicePpf,
    price: "Từ 15.000.000đ",
  },
  {
    title: "Vệ Sinh Nội Thất",
    description: "Làm sạch sâu nội thất, vệ sinh ghế da, thảm sàn, khử mùi, diệt khuẩn.",
    image: serviceInterior,
    price: "Từ 800.000đ",
  },
  {
    title: "Độ Đèn & Phụ Kiện",
    description: "Nâng cấp đèn LED, bi LED, angel eyes. Lắp đặt phụ kiện xe chất lượng cao.",
    image: serviceLights,
    price: "Liên hệ",
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Dịch Vụ Của Chúng Tôi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Dịch Vụ <span className="text-gradient">Chuyên Nghiệp</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Đa dạng dịch vụ chăm sóc và độ xe, đáp ứng mọi nhu cầu của bạn
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group card-glass overflow-hidden hover-lift cursor-pointer"
              onClick={scrollToContact}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`Dịch vụ ${service.title} tại AutoPro Detailing`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                  Tìm hiểu thêm <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;