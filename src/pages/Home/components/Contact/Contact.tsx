import { ContactContent } from "./ContactContent";
import { ContactForm } from "./ContactForm";
import { ContactHeader } from "./ContactHeader";
import { ContactWrapper } from "./styles";

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="section-center">
        <ContactHeader />
        <div className="content">
          <ContactContent />
          <ContactForm />
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
