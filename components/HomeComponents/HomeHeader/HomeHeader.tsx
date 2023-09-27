import Image from "next/image";

const HomeHeader = () => {
  // TODO: on hovering on an item, a div should be positioned above the right element.
  //    The div should be a component that receives the details of the item that was hovered on.
  return (
    <section className="flex">
      <div>Left</div>
      {/* TODO: A carousel of images of items */}
      <figure>{/* <Image /> */}Right</figure>
    </section>
  );
};
export default HomeHeader;
