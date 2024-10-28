import "./component.css";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="container-main">
        <div className="hero-card">
          <div className="card card-l">
            <div className="h-full w-full p-4">
              <div className="upper flex box-border">
                <div className="upper-l flex">
                  <div className="name-img">
                    <Image
                      src="/hero.webp" // Path to the image file inside public
                      alt="Namste" // Description for accessibility
                      layout="responsive" // Responsive layout
                      width={50} // Desired width
                      height={50} // Desired height
                      priority // Optional: use this for critical images (like a logo)
                    />
                  </div>
                  <div className="text">
                    <div className="name">Hey, I&apos;sm Prince.</div>
                    <div className="passion">Digital Artist</div>
                  </div>
                </div>
                <div className="upper-r">
                  <button>
                    <div className="getintouch">Get In Touch</div>
                  </button>
                </div>
              </div>
              <div className="wc-container">
                <div className="wc-qt">
                  Obsessed with creating <span>timeless</span> digital
                  experiences.
                </div>
                <div className="wc-description">
                  Hey, I&apos;m Prince, welcome to my P2Verse. I love building
                  beautiful, timeless, imaginary and realistic digital art.
                  Whether it is VFX, CGI, Photo, Video, Movies and Games.
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="card card-r">
            <div className="name-img">
              <Image
                src="/Namste.webp" // Path to the image file inside public
                alt="Namste" // Description for accessibility
                layout="responsive" // Responsive layout
                width={500} // Desired width
                height={500} // Desired height
                priority // Optional: use this for critical images (like a logo)
              />
            </div>
          </div>
        </div>
        <div className="qt-wrapper">
          <div className="qt">
            We resolve problems associated with creative procedures.
          </div>
        </div>
        <div className="card card-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          nostrum quos eius odio facilis, consequuntur expedita aut eos aliquid
          maxime dolore delectus neque? Porro, atque nulla consequuntur ipsum
          repellat deserunt.
        </div>
      </div>
    </>
  );
}
