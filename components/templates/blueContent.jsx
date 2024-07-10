export default function BlueContent({ h1Title, children }) {
  return (
    <section className="mx-auto my-8 lg:my-16 px-4 max-w-4xl text-center ">
      <div className="p-4 md:px-8 rounded-xl gradientPrimaryLD">
        <h2>{h1Title}</h2>
        {children}
      </div>
    </section>
  );
}
