import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";

type Blog = {
  content: string;
  createdAt: string;
  id: string;
  thumbnailImg: string;
  title: string;
  typeId: string;
  updatedAt: string;
  userId: string;
};

function Blog({ blog }: { blog: Blog }) {
  console.log(blog);
  return (
    <div className="">
      {" "}
      <div className="h-72 mb-10">
        <div
          className="bg-white p-4 rounded-lg shadow-xl border border-t dark:border-none  mb-4 transition duration-100 transform hover:shadow-2xl 
          isDarkMode dark:bg-gray-800 hover:dark:shadow-slate-600 h-72 flex flex-col justify-between"
        >
          <div className="">
            <Link href={"/blogs/1233"}>
              <h2
                className="text-gray-800 mb-4 
            dark:text-gray-300 text-xl font-semibold"
              >
                asdfasdfasdf
              </h2>
              <p
                className=" mb-2
            isDarkMode dark:text-gray-300 truncate-ellipsis line-clamp-5"
              >
                The US Bureau of Labour Statistics projects a 13% growth in job
                opportunities in the web development industry between 2020 and
                2030. In terms of the average of all other professions, it is
                one of the highest numbers. Many people are preparing to embrace
                this expansion and advance their professions as a result of the
                drastically increased activity in the field. As the name
                suggests, web development is the process of creating and
                maintaining websites. Working on things like web design,
                publishing, programming, and maintenance are all included. In
                this article, we’ll examine how a practical web development plan
                might help you approach the web development process. Let’s
                start. Who’s a web Developer? A web developer is a specialist
                who creates websites for people or companies. A full-stack web
                developer works on the website’s front-end and back-end
                elements. The appearance of websites when they are sent to
                clients is covered by the front-end component. On the other
                hand, the back-end component securely processes and stores data.
                Web developers are one of the most in-demand occupations in the
                modern digital world, as practically every company seeks its own
                website. They are among the highest paid professions because of
                the magnitude of influence their expertise has. Even working as
                a web developer may be entertaining and lucrative. Their work
                necessitates patience, concentration, and an enthusiasm for a
                variety of instruments and technology. If you’re one of those
                tech nerds interested in learning about web development, this
                site is for you. What is web development? As was already said,
                the process of creating a website is known as web development.
                Let’s comprehend the operation of a website and the differences
                between front-end and back-end development. The two of these
                principles should be learned as part of a web developer’s
                roadmap. How does a website work? At its core, every website is
                just a collection of files kept on a computer system known as a
                server. This server then establishes a connection to the
                internet. Afterward, you can use a browser on your device, such
                as Chrome, Safari, or Firefox, to access the specific website.
                As a result, whenever you browse the internet, you get data
                (such photographs of dogs) through the server and send data back
                to the server (load more dog images). The basis of the internet
                can be thought of as this back and forth data exchange between
                the server and you (the client). Any component that you may
                access through your browser, especially a website, was created
                by a web developer. These components range from corporate
                websites and content to extremely complex web services like
                Amazon, Twitter, and LinkedIn. What’s the difference between
                front-end and back-end? The terms “front-end,” “back-end,” and
                “full-stack” web development specify which client/server
                component you’ll be working on (here, “client” can refer to a
                web browser, such as Google Chrome, Firefox, etc., whereas
                “server” is a web application server at a remote location that
                will process web requests and send pages to the client). The
                work you’ll be doing is referred to as “front-end” and will
                mostly concern the client side, or the area of the website that
                users interact with. It is referred to as the “front-end,”
                because it contains elements that you may view in your browser.
                On the other hand, the “back-end” is the part of a website you
                can’t see, but it deals with a lot of important functionality
                and logic and is in charge of how a website functions
                internally. Web Development Roadmap Let’s get started on the web
                development roadmap now that you know how a website works and
                the fundamental differences between front-end and back-end
                development. You should start your web development adventure by
                following a sequence of steps that lead to the desired result,
                namely a dynamic and user-friendly website. To start your web
                development journey successfully, adhere to the guidelines
                listed below. 1. Select a Technology Database administration,
                front-end development, and back-end development are all included
                in full-stack development. The technology you should use depends
                on specific users, requirements, and implementations. There are
                a few popular technologies that you can select from, including:
                1.MERN: The most popular and well-known technology right now is
                MERN. The following four technologies are represented by the
                four letters in it. M — MongoDB: For high-volume data storage,
                MongoDB is a document-oriented NoSQL (normally, databases
                utilise SQL to store and retrieve data) database. E — Express is
                a node js web application framework that offers a wide range of
                functionality for creating web and mobile applications. It
                covers operations such as GET, PUT, POST, and DELETE. R — React:
                React is a JavaScript library used to create single-page apps
                and create user interfaces. N — NodeJS: Node.js is an
                open-source server-side JavaScript code execution platform.
                Real-time apps frequently employ Node, which is helpful for
                creating applications that need a persistent connection between
                the browser and the server.
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <Link href={"/profile/asdf"}>
              <div className="flex items-center">
                <Image
                  src={""}
                  height={2}
                  width={2}
                  alt="Writer"
                  className="flex w-8 h-8 rounded-full mr-2"
                />

                <span>Morsed Hasan</span>
              </div>
            </Link>
            <button
              className="flex items-center 
              isDarkMode  dark:text-gray-300"
            >
              <AiFillLike />
              500
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
