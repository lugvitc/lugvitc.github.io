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

    let blog2 = [{
        title: "ello",
        thumbnail: `https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        dept: "Web Development",
        date: "01-11-2001",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
        content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
        // photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        // extern_style: styleObj
    },
    {
        title: "peelo",
        thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        dept: "Android Development",
        date: "01-11-2001",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
        content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
        // photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        // extern_style: styleObj
    },
    {
        title: "zeelo",
        thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        dept: "UI/UX Design",
        date: "01-05-2023",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
        content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
        // photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        // extern_style: styleObj
    },
    {
        title: "heelo",
        thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        dept: "Android Development",
        date: "01-11-2001",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
        content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
        // photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        // extern_style: styleObj
    },
    {
        title: "feelo",
        thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        dept: "UI/UX Design",
        date: "01-11-2001",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
        content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
        // photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        // extern_style: styleObj
    },
    {
        title: "keelo",
        thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        dept: "Cyber Security",
        date: "01-11-2001",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
        content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
        // photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        // extern_style: styleObj
    },
    {
        title: "teelo",
        thumbnail: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        dept: "Android Development",
        date: "01-11-2001",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt vitae nesciunt quae architecto harum eligendi reprehenderit doloribus, culpa excepturi!",
        content: "# hello\n## wow\n- Determinat\n- wow\n- Rajiv gandhi\n- my differential tearch",
        // photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        // extern_style: styleObj
    },
]

    let blog = {
        title: "",
        thumbnail: "",
        date: "",
        description: "",
        content: "",
        // photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        // extern_style: styleObj
    }

    // // all the blogs is passed to jsx part to display it.
    const [Blogs, setBlogs] = useState([]);
    const [AllBlogs, setAllBlogs] = useState([]);

    // const { api, apiPost, apiURL } = useFetch();
    // const picBaseURL = apiURL + "/leaderboard/pic/"

    // const fetchMember = () => {
    //     api("/leaderboard", {
    //         method: "GET"
    //     }).then((response) => response.json())
    //         .then((response) => {
    //             for (let blog in response) {
    //                 // response[blog].title
                  
    //             }
    //         })
    // }

    useEffect(()=>{
        setBlogs(blog2);
        setAllBlogs(blog2);
        
        console.log(Blogs);
        console.log(AllBlogs);
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
{/*             
            <TerminalCard
            title='Blog1'
            date = 'dd/mm/yy'
            department= 'dep'
            summary='  Quae dolore veritatis quo eos natus aut laboriosam enim voluptatibus error dignissimos ipsam, aliquam '
            mdtext='# Sample MDtext
            - this is a sample markdown text'>
            </TerminalCard>

            <TerminalCard
            title='Blog2'
            date = 'dd/mm/yy'
            department= 'dep'
            summary='  Quae dolore veritatis quo eos natus aut laboriosam enim voluptatibus error dignissimos ipsam, aliquam '
            mdtext='# Sample MDtext
            - this is a sample markdown text'>
            </TerminalCard>

            <TerminalCard
            title='Blog3'
            date = 'dd/mm/yy'
            department= 'dep'
            summary='  Quae dolore veritatis quo eos natus aut laboriosam enim voluptatibus error dignissimos ipsam, aliquam '
            mdtext='# Sample MDtext
            - this is a sample markdown text'>
            </TerminalCard>
            <TerminalCard
            title='Blog4'
            date = 'dd/mm/yy'
            department= 'dep'
            summary='  Quae dolore veritatis quo eos natus aut laboriosam enim voluptatibus error dignissimos ipsam, aliquam '
            mdtext='# Sample MDtext
            - this is a sample markdown text'>
            </TerminalCard> */}


        </div>
            
        </TerminalWindow>
        
    );
}
