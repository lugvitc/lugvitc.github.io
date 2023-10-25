import TerminalWindow from '../../components/terminal/terminalWindow';
import TerminalCard from '../../components/terminalCard/TerminalCard';
import BlogSearch from '../../components/blog_search/blog_search';
import useFetch from "../../hooks/useFetch";
import { useEffect } from 'react';
import { useState } from 'react';
export default function Blogs() {

    const myStyle={
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around",
        alignItems:"center",
    };

    //  uncomment for testing locally
    // let blog2 = [{
    //     title: "ello",
    //     thumbnail: `https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    //     dept: "Web Development",
    //     date: "01-11-2001",
    //     tags: "AI",
    //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
    //     content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
    // },
    // {
    //     title: "peelo",
    //     thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     dept: "Android Development",
    //     date: "01-11-2001",
    //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
    //     content: "# hello\n## wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch # hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch # hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch # hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch # hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch # hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch # hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
    // },
    // {
    //     title: "zeelo",
    //     thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     dept: "UI/UX Design",
    //     date: "01-05-2023",
    //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
    //     content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
    // },
    // {
    //     title: "heelo",
    //     thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     dept: "Android Development",
    //     date: "01-11-2001", 
    //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
    //     content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
    // },
    // {
    //     title: "feelo",
    //     thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     dept: "UI/UX Design",
    //     date: "01-11-2001",
    //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
    //     content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
    // },
    // {
    //     title: "keelo",
    //     thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     dept: "Cyber Security",
    //     date: "01-11-2001",
    //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
    //     content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
    // },
    // {
    //     title: "teelo",
    //     thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     dept: "Android Development",
    //     date: "01-11-2001",
    //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
    //     content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
    // }]

    // // all the blogs is passed to jsx part to display it.
    const [Blogs, setBlogs] = useState([]);
    const [AllBlogs, setAllBlogs] = useState([]);

    // uncomment to test
    // useEffect(() => {
    //     setAllBlogs(blog2);
    //     setBlogs(blog2);
    // }, [])

    const { api, apiPost, apiURL, apiBaseURL } = useFetch();
    const fetchBlogs = () => {
        api("/blog", {
            method: "POST"
        }).then((response) => response.json())
            .then((response) => {
                let all_blogs = response["blog"]
                all_blogs.forEach((con)=>{
                    // con.content=con.content.replace(/\!\[(.*?)\]\s*\(\/api\/blog\/image/, "!\[$1\]\(https://leaderboard.lugvitc.org/api/blog/image")

                    const regex = /src="\/api\/blog\/image\/([^"]+)"/g;
                    const replacement = 'src="'+apiBaseURL+'/api/blog/image/$1"';

                    con.content = con.content.replace(regex, replacement);

                    // console.log(th.thumbnail);
                })
                all_blogs.forEach((th)=>{
                    // console.log('leaderboard.lugvitc.org'+th.thumbnail);
                    th.thumbnail=apiBaseURL+th.thumbnail;
                    console.log(th.thumbnail);
                })
                all_blogs.forEach(blog => {
                    let date = new Date(blog.date+' UTC');
                    blog.date = date.toISOString().slice(0,10);
                    // let thumb = 'leaderboard.'+all_blogs.thumbnail;
                    // blog.thumbnail=thumb;
                });
                // let all_blogs2 = response["blog"]
                // all_blogs.forEach(blog => {
                // });

                setBlogs(all_blogs);
                setAllBlogs(all_blogs);
                console.log(Blogs);
        console.log(AllBlogs);
            })
    }

    useEffect(()=>{
        fetchBlogs();
    },[])

    return (
        <TerminalWindow
            prompts={[
                { path: '~', command: 'cd blogs' },
                { path: '~/blogs', command: 'cat blogs.txt' }
            ]}
            title='Blogs'
        >
            <BlogSearch all_blogs={AllBlogs} setter={setBlogs}></BlogSearch>
            <div className="posts" style={myStyle}>
                <TerminalCard blogs={Blogs}></TerminalCard>
            </div>
        </TerminalWindow>
    );
}










<div class="flex flex-row flex-wrap justify-center items-center  w-full">
<div class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 my-5 md:mx-5">
  <div class="bg-gray-800 text-white w-full max-w-8xl min-w-7xl flex flex-col rounded-xl shadow-lg p-4">
    {/* <div class="flex items-center justify-between"> */}
    <div class="flex items-center justify-center space-x-4">
      {/* <div class="rounded-full w-4 h-4 border border-purple-500"></div> */}
      <img
        src={titleIcon}
        alt="loading"
        className="h-[25px] w-[25px]"
      />
      <div class="mx-3 text-md font-bold text-center">
        Mastering ArcA Step-by-Step Guide{" "}
      </div>
    </div>
    {/* </div> */}
    <div class=" flex flex-row flex-wrap justify-between items-center cursor-pointer mt-4">
      <div class="flex items-end justify-start space-x-4">
        <img src={date} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">
          Octoeber 12.23232
        </div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={time} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">08:23:65</div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={like} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12343</div>
      </div>
      <div class="flex items-end justify-end space-x-4">
        <img src={views} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12000</div>
      </div>
    </div>
    <div class="mt-4 text-white font-bold text-sm">
      <div class="flex items-end justify-end space-x-4">
        <img src={author} alt="loading" className="h-[35px] w-[35px]" />
        <div class="mx-3 text-md font-bold text-center">
          Dhananjay Chauhan
        </div>
      </div>
    </div>
  </div>
</div>
<div class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 my-5 md:mx-5">
  <div class="bg-gray-800 text-white w-full max-w-8xl min-w-7xl flex flex-col rounded-xl shadow-lg p-4">
    {/* <div class="flex items-center justify-between"> */}
    <div class="flex items-center justify-center space-x-4">
      {/* <div class="rounded-full w-4 h-4 border border-purple-500"></div> */}
      <img
        src={titleIcon}
        alt="loading"
        className="h-[25px] w-[25px]"
      />
      <div class="mx-3 text-md font-bold text-center">
        Mastering ArcA Step-by-Step Guide{" "}
      </div>
    </div>
    {/* </div> */}
    <div class=" flex flex-row flex-wrap justify-between items-center cursor-pointer mt-4">
      <div class="flex items-end justify-start space-x-4">
        <img src={date} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">
          Octoeber 12.23232
        </div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={time} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">08:23:65</div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={like} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12343</div>
      </div>
      <div class="flex items-end justify-end space-x-4">
        <img src={views} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12000</div>
      </div>
    </div>
    <div class="mt-4 text-white font-bold text-sm">
      <div class="flex items-end justify-end space-x-4">
        <img src={author} alt="loading" className="h-[35px] w-[35px]" />
        <div class="mx-3 text-md font-bold text-center">
          Dhananjay Chauhan
        </div>
      </div>
    </div>
  </div>
</div>
<div class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 my-5 md:mx-5">
  <div class="bg-gray-800 text-white w-full max-w-8xl min-w-7xl flex flex-col rounded-xl shadow-lg p-4">
    {/* <div class="flex items-center justify-between"> */}
    <div class="flex items-center justify-center space-x-4">
      {/* <div class="rounded-full w-4 h-4 border border-purple-500"></div> */}
      <img
        src={titleIcon}
        alt="loading"
        className="h-[25px] w-[25px]"
      />
      <div class="mx-3 text-md font-bold text-center">
        Mastering ArcA Step-by-Step Guide{" "}
      </div>
    </div>
    {/* </div> */}
    <div class=" flex flex-row flex-wrap justify-between items-center cursor-pointer mt-4">
      <div class="flex items-end justify-start space-x-4">
        <img src={date} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">
          Octoeber 12.23232
        </div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={time} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">08:23:65</div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={like} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12343</div>
      </div>
      <div class="flex items-end justify-end space-x-4">
        <img src={views} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12000</div>
      </div>
    </div>
    <div class="mt-4 text-white font-bold text-sm">
      <div class="flex items-end justify-end space-x-4">
        <img src={author} alt="loading" className="h-[35px] w-[35px]" />
        <div class="mx-3 text-md font-bold text-center">
          Dhananjay Chauhan
        </div>
      </div>
    </div>
  </div>
</div>
<div class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 my-5 md:mx-5">
  <div class="bg-gray-800 text-white w-full max-w-8xl min-w-7xl flex flex-col rounded-xl shadow-lg p-4">
    {/* <div class="flex items-center justify-between"> */}
    <div class="flex items-center justify-center space-x-4">
      {/* <div class="rounded-full w-4 h-4 border border-purple-500"></div> */}
      <img
        src={titleIcon}
        alt="loading"
        className="h-[25px] w-[25px]"
      />
      <div class="mx-3 text-md font-bold text-center">
        Mastering ArcA Step-by-Step Guide{" "}
      </div>
    </div>
    {/* </div> */}
    <div class=" flex flex-row flex-wrap justify-between items-center cursor-pointer mt-4">
      <div class="flex items-end justify-start space-x-4">
        <img src={date} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">
          Octoeber 12.23232
        </div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={time} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">08:23:65</div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={like} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12343</div>
      </div>
      <div class="flex items-end justify-end space-x-4">
        <img src={views} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12000</div>
      </div>
    </div>
    <div class="mt-4 text-white font-bold text-sm">
      <div class="flex items-end justify-end space-x-4">
        <img src={author} alt="loading" className="h-[35px] w-[35px]" />
        <div class="mx-3 text-md font-bold text-center">
          Dhananjay Chauhan
        </div>
      </div>
    </div>
  </div>
</div>
<div class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 my-5 md:mx-5">
  <div class="bg-gray-800 text-white w-full max-w-8xl min-w-7xl flex flex-col rounded-xl shadow-lg p-4">
    {/* <div class="flex items-center justify-between"> */}
    <div class="flex items-center justify-center space-x-4">
      {/* <div class="rounded-full w-4 h-4 border border-purple-500"></div> */}
      <img
        src={titleIcon}
        alt="loading"
        className="h-[25px] w-[25px]"
      />
      <div class="mx-3 text-md font-bold text-center">
        Mastering ArcA Step-by-Step Guide{" "}
      </div>
    </div>
    {/* </div> */}
    <div class=" flex flex-row flex-wrap justify-between items-center cursor-pointer mt-4">
      <div class="flex items-end justify-start space-x-4">
        <img src={date} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">
          Octoeber 12.23232
        </div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={time} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">08:23:65</div>
      </div>
      <div class="flex items-end justify-start space-x-4">
        <img src={like} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12343</div>
      </div>
      <div class="flex items-end justify-end space-x-4">
        <img src={views} alt="loading" className="h-[25px] w-[25px]" />
        <div class="mx-3 text-md font-bold text-center">12000</div>
      </div>
    </div>
    <div class="mt-4 text-white font-bold text-sm">
      <div class="flex items-end justify-end space-x-4">
        <img src={author} alt="loading" className="h-[35px] w-[35px]" />
        <div class="mx-3 text-md font-bold text-center">
          Dhananjay Chauhan
        </div>
      </div>
    </div>
  </div>
</div>
</div>