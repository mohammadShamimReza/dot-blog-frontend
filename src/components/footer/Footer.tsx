function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 dark:text-gray-400  py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm dark:text-white">
          &copy; {currentYear} All rights reserved by MS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
