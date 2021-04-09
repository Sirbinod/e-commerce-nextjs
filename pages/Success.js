import Header from "../component/Header/Header";
import Image from "next/image";
import Footer from "../component/Footer/Footer";

export default function Success() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="my-36 text-center">
            <div className="mx-99 my-5 w-40 h-40 relative">
              <Image src="/success.png" layout="fill" objectFit="fill" />
            </div>
            <h2 className="text-lg my-3 font-semibold">
              Your order has been completed
            </h2>
            <h2 className="text-lg my-3 font-semibold">
              We will contact you soon
            </h2>
            <button className=" bg-yellow-800 text-center w-64 h-10 rounded-3xl text-white my-2">
              Procced to chackout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
