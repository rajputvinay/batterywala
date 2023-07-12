import "./about.css";
import battery from "./battery2.gif";
export function About() {
  return (
    <div className="about">
      <div className="about_head">
        <h1>About Us</h1>
      </div>
      <div className="about_row">
        <div className="about_div1">
          <div className="about_p">
            Lorem ipsum,dolor sit amet consectetur adipisicing elit. Voluptates,
            aut nisi quis est cupiditate voluptatum voluptatem enim, rerum sed
            iure accusantium blanditiis, ut facilis nesciunt aspernatur commodi
            repudiandae. Molestiae nobis qui suscipit labore nulla! Natus eius
            odit quidem similique maxime harum culpa vitae eum totam nisi fugit
            odio illum provident voluptatum dolores nesciunt
            <br />
            adipisci exercitationem dolorum recusandae, animi magnam. Error
            laboriosam voluptatem nemo amet perferendis, animi illo laudantium
            deleniti, iusto sint eligendi! Fuga error sunt animi! Blanditiis nam
            ea dignissimos officia ipsa sint, voluptas eveniet architecto odio.
            Libero, facere, nihil harum est eos totam non, necessitatibus
            laboriosam officia nisi omnis.
            <br/>
            Lorem ipsum,dolor sit amet consectetur adipisicing elit. Voluptates,
            aut nisi quis est cupiditate voluptatum voluptatem enim, rerum sed
            iure accusantium blanditiis, ut facilis nesciunt aspernatur commodi
            repudiandae. Molestiae nobis qui suscipit labore nulla! Natus eius
            odit quidem similique maxime harum culpa vitae eum totam nisi fugit
            odio illum provident voluptatum dolores nesciunt
            <br />
            adipisci exercitationem dolorum recusandae, animi magnam. Error
            laboriosam voluptatem nemo amet perferendis, animi illo laudantium
            deleniti, iusto sint eligendi! Fuga error sunt animi! Blanditiis nam
            ea dignissimos officia ipsa sint, voluptas eveniet architecto odio.
            Libero, facere, nihil harum est eos totam non, necessitatibus
            laboriosam officia nisi omnis.
            Lorem ipsum,dolor sit amet consectetur adipisicing elit. Voluptates,
            aut nisi quis est cupiditate voluptatum voluptatem enim, rerum sed
            iure accusantium blanditiis, ut facilis nesciunt aspernatur commodi
            repudiandae. Molestiae nobis qui suscipit labore nulla! Natus eius
            odit quidem similique maxime harum culpa vitae eum totam nisi fugit
            odio illum provident voluptatum dolores nesciunt
            <br />
            adipisci exercitationem dolorum recusandae, animi magnam. Error
            laboriosam voluptatem nemo amet perferendis, animi illo laudantium
            deleniti, iusto sint eligendi! Fuga error sunt animi! Blanditiis nam
            ea dignissimos officia ipsa sint, voluptas eveniet architecto odio.
            Libero, facere, nihil harum est eos totam non, necessitatibus
            laboriosam officia nisi omnis.
            <br/>
            Lorem ipsum,dolor sit amet consectetur adipisicing elit. Voluptates,
            aut nisi quis est cupiditate voluptatum voluptatem enim, rerum sed
            iure accusantium blanditiis, ut facilis nesciunt aspernatur commodi
            repudiandae. Molestiae nobis qui suscipit labore nulla! Natus eius
            odit quidem similique maxime harum culpa vitae eum totam nisi fugit
            odio illum provident voluptatum dolores nesciunt
            <br />
            adipisci exercitationem dolorum recusandae, animi magnam. Error
            laboriosam voluptatem nemo amet perferendis, animi illo laudantium
            deleniti, iusto sint eligendi! Fuga error sunt animi! Blanditiis nam
            ea dignissimos officia ipsa sint, voluptas eveniet architecto odio.
            Libero, facere, nihil harum est eos totam non, necessitatibus
            laboriosam officia nisi omnis.
          </div>
          </div>
          <hr />
          <div className="contact">
            <h2>Contact Us</h2>
            <form action="https://formspree.io/f/mjvdbdjr" method="POST">
              <input
                className="ainput"
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                required
              />
              <br />
              <input
                className="ainput"
                type="Email-id"
                name="email"
                placeholder="Enter Your Email"
                required
              />

              <br />
              <textarea
                style={{
                  border: "solid 2px #F5F4FA",
                  backgroundColor: "#F5F4FA",
                  paddingLeft: "20px",
                }}
                className="atext"
                name="Message"
                placeholder="Enter Your Message"
                required
              />
              <div className="about_btn">
                <input className="abutton" type={"submit"} value={"Contact"} />
              </div>
            </form>
            <br />
            <h5>Contact | batterybhai2022@ gmail.com</h5>
          </div>
        </div>
        <div className="about_div2">
          <img src={battery} />
        </div>
      </div>
    </div>
  );
}
