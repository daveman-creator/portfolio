import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">Happy.</p>
            <ul className="contact-links">
              <li className="contact-item">Email: djustin43@gmail.com</li>
              <li className="contact-item">Phone: +36202585915</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
