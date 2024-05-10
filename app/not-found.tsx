import Image from "next/image";

export default function Custom404() {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <Image src="/logotext.png" width={300} height={50} alt="Zeuss Trader" />
      <p className="my-4 font-RobotoSlab text-xl font-bold">
        404 - Page Not Found
      </p>
      <p>
        We&apos;re sorry, but the page you are looking for cannot be found. It
        may have been removed, had its name changed, or is temporarily
        unavailable. Please check the URL for any errors, or try navigating back
        to the homepage. If you continue to encounter this error, please contact
        the website administrator for further assistance. Thank you for your
        understanding
      </p>
    </div>
  );
}
