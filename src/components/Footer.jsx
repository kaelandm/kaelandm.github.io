function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-light mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-primary-light/80">
          &copy; {currentYear} Kaelan Doyle-Myerscough. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
