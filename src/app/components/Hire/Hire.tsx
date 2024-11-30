//app/components/hire/hire.tsx
import "./Hire.css";
import "../card.css";
import Image from "next/image";

export default function Hire() {
  return (
    <>
      <div className="title">Ready To Elevet Your Vison</div>
      <div className="card card-hire hire-card">
        <div className="upper-hire-card">
          <div className="upper-area">
            <div className="upper-area-text">How can i help&nbsp;<span>you?</span></div>
            <div className="upper-area-img">
                <div className="image-container">

                <Image
                src="/hero.webp" // Path to the image file inside public
                alt="Hero"
                layout="responsive" // Responsive layout
                width={50} // Desired width
                height={50} // Desired height
                priority 
                />
                </div>
            </div>
          </div>
        </div>
        <div className="bottom-hire-card">
          <div className="area-container">
            <div className="area">
              <div className="Text">
                <div className="bold">{"VFX Work"}</div>
                <div className="light">
                  {"Want mind-blowing VFX that brings your vision to life?"}
                </div>
              </div>
            </div>
            <div className="area">
              <div className="Text">
                <div className="bold">{"Design Website"}</div>
                <div className="light">
                  {
                    "Need a unique, eye-cathing website that turns visitors into customers?"
                  }
                </div>
              </div>
            </div>
            <div className="area">
              <div className="Text">
                <div className="bold">{"Build Website"}</div>
                <div className="light">
                  {
                    "Want me to build you a completely custom, visually-stunning multi-page website?"
                  }
                </div>
              </div>
            </div>
            <div className="area">
              <div className="Text">
                <div className="bold">{"Photo / Video Edit"}</div>
                <div className="light">
                  {
                    "Looking for expert photo and video editing that makes your content shine?"
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
