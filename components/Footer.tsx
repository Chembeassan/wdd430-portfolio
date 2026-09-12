export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-[#fef3c7] py-6 mt-16">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} | Chembe Assan | All rights reserved
        </p>
      </div>
    </footer>
  );
}