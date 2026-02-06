import Section from "./Section";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" bg="bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-6">
        Contact
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
        Open to performance engineering, automation strategy discussions,
        and senior QA opportunities. Let’s connect.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-10 text-center">

          {/* EMAIL */}
<div className="flex justify-center items-center gap-4">
  <Mail className="text-indigo-600" />
  <p className="text-gray-600">
    ajinkya.more9@gmail.com
  </p>
</div>

{/* PHONE */}
<div className="flex justify-center items-center gap-4">
  <Phone className="text-indigo-600" />
  <p className="text-gray-600">
    +91 8623985914
  </p>
</div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://www.linkedin.com/in/ajinkya-more-a5094923"
              target="_blank"
              className="
                p-4 rounded-full bg-white shadow
                hover:bg-indigo-50 transition
              "
            >
              <Linkedin className="text-indigo-600" />
            </a>

            <a
              href="https://github.com/Ajax0612"
              target="_blank"
              className="
                p-4 rounded-full bg-white shadow
                hover:bg-indigo-50 transition
              "
            >
              <Github className="text-indigo-600" />
            </a>
          </div>

          {/* PRIMARY CTA */}
          <div className="pt-10">
            <a
              href="https://www.linkedin.com/in/ajinkya-more-a5094923"
              target="_blank"
              className="
                inline-block
                px-10 py-4 rounded-full
                bg-amber-300/90 hover:bg-amber-400
                text-gray-900 font-semibold
                transition shadow-sm
              "
            >
              Connect on LinkedIn
            </a>
          </div>

        </div>
      </div>
    </Section>
  );
}
