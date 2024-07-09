export default function BlueContent({ h1Title, children }) {
  return (
    <section className="mx-auto my-8 lg:my-16 px-4 max-w-4xl text-center ">
      <div className="p-4  rounded-xl gradientPrimaryLD">
        <h2>{h1Title}</h2>1{children}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          scelerisque lacinia placerat. Morbi imperdiet blandit nunc, porttitor
          malesuada diam rutrum vitae. Vestibulum vel porta mi. Phasellus
          iaculis suscipit congue. Cras porttitor orci at efficitur vehicula.
          Donec lobortis tellus vitae mattis viverra. Proin blandit magna
          dignissim lacinia luctus. Nullam sagittis mauris vel arcu venenatis
          faucibus. Morbi ornare tristique ante, in egestas lectus auctor at.
        </p>
        <h3>Ne İçin Yaşıyor</h3>
        <p>
          Nullam quam ipsum, finibus sit amet mattis quis, ullamcorper in
          ligula. Praesent rhoncus urna sapien, ut pellentesque lacus euismod
          mollis. Fusce aliquam consequat congue. Proin mollis lorem aliquam,
          elementum turpis non, faucibus felis.
        </p>
        <p>
          Nam viverra scelerisque lorem, sit amet placerat magna. Quisque
          dignissim gravida lectus sit amet pellentesque. Donec congue magna vel
          aliquam dictum. Proin lacinia, nibh vel elementum tincidunt, lectus
          neque malesuada dolor, sed facilisis sem odio nec nulla. Sed lobortis
          volutpat sagittis.
        </p>
      </div>
    </section>
  );
}
