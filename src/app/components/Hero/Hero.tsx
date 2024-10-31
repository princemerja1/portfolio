'use client';
import "./hero.css";
import "../card.css";
import "../button.css";
import Link from 'next/link';
import Image from "next/image";
export default function Hero() {
  const touch = () => {
    console.log('Button clicked! Get in touch!');
  };
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
                      alt="Hero" // Description for accessibility
                      layout="responsive" // Responsive layout
                      width={50} // Desired width
                      height={50} // Desired height
                      priority // Optional: use this for critical images (like a logo)
                    />
                  </div>
                  <div className="text">
                    <div className="name">Hey, I&apos;m Prince.</div>
                    <div className="passion">Digital Artist</div>
                  </div>
                </div>
                <div className="upper-r">
                  <Link href="/contact">
                    <div className="button getintouch">Get In Touch</div>
                  </Link>
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
                width={50} // Desired width
                height={50} // Desired height
                priority
                // Optional: use this for critical images (like a logo)
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
          <div className="here-img-container">
            <div className="here-img">
              <Image
                src="/here.webp" // Path to the image file inside public
                alt="Here" // Description for accessibility
                layout="responsive" // Responsive layout
                width={50} // Desired width
                height={50} // Desired height
                priority // Optional: use this for critical images (like a logo)
              />
            </div>
          </div>
          <div className="here-text">
            <div className="here-question">
              What makes me <span>different?</span>
            </div>
            <div className="here-description">
              I create unique digital art tailored by your desire. By merging
              creativity with functionality and staying ahead of design trends,
              I ensure every project not only looks stunning but also performs
              flawlessly.
            </div>
            <Link href="/work">
              <div className="button browsemywork">Browse My Work</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
