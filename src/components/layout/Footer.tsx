export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-background py-12">
      <div className="container">
        <div className="flex flex-wrap items-center justify-evenly">
          <div className="flex items-center gap-2 px-4 py-2">
            <span className="text-sm font-medium text-muted">Name:</span>
            <span className="text-sm">Ryder Osborn</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2">
            <span className="text-sm font-medium text-muted">Location:</span>
            <a
              href="https://www.google.com/maps/place/Wilton+NSW+2571/@-34.2598604,150.6815946,12z/data=!3m1!4b1!4m6!3m5!1s0x6b12fd9bcf11dc3b:0x40609b490439250!8m2!3d-34.2373127!4d150.6967284!16s%2Fm%2F0bbw03y?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary"
            >
              Wilton, NSW
            </a>
          </div>

          <div className="flex items-center gap-2 px-4 py-2">
            <span className="text-sm font-medium text-muted">Phone:</span>
            <span className="text-sm">+61 431 335 733</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2">
            <span className="text-sm font-medium text-muted">Email:</span>
            <span className="text-sm">ryderosborn@hotmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
