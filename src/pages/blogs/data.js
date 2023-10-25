export const data = {
  users: [
    {
      id: 1,
      username: "rahulvk007",
      name: "Rahul VIjayakumar",
      avatar_template: "/letter_avatar_proxy/v4/letter/r/e95f7d/{size}.png",
      primary_group_name: "LUGAdmins",
      flair_name: "LUGAdmins",
      flair_group_id: 43,
      admin: true,
      moderator: true,
      trust_level: 3,
    },
    { 
      id: 5,
      username: "Slipstream",
      name: "Dhruv Hatkar",
      avatar_template:
        "/user_avatar/forum.lugvitc.org/slipstream/{size}/38_2.png",
      primary_group_name: "LUGAdmins",
      flair_name: "LUGAdmins",
      flair_group_id: 43,
      moderator: true,
      trust_level: 3,
    },
  ],
  primary_groups: [
    {
      id: 43,
      name: "LUGAdmins",
    },
  ],
  flair_groups: [
    {
      id: 43,
      name: "LUGAdmins",
      flair_url: null,
      flair_bg_color: "",
      flair_color: "",
    },
  ],
  topic_list: {
    can_create_topic: false,
    per_page: 30,
    top_tags: [],
    topics: [
      {
        id: 313,
        title: "About the Blogs category",
        fancy_title: "About the Blogs category",
        slug: "about-the-blogs-category",
        posts_count: 1,
        reply_count: 0,
        highest_post_number: 1,
        image_url: null,
        created_at: "2023-10-19T16:39:44.694Z",
        last_posted_at: null,
        bumped: true,
        bumped_at: "2023-10-20T08:17:08.304Z",
        archetype: "regular",
        unseen: false,
        pinned: true,
        unpinned: null,
        excerpt:
          "Welcome to the Linux Club Discourse Forum’s Blogs Category! This is the space where our community members can share their insights, experiences, and expertise related to the vast and dynamic world of Linux. Whether you’r&hellip;",
        visible: true,
        closed: false,
        archived: false,
        bookmarked: null,
        liked: null,
        tags: [],
        tags_descriptions: {},
        views: 5,
        like_count: 0,
        has_summary: false,
        last_poster_username: "rahulvk007",
        category_id: 10,
        pinned_globally: false,
        featured_link: null,
        posters: [
          {
            extras: "latest single",
            description: "Original Poster, Most Recent Poster",
            user_id: 1,
            primary_group_id: 43,
            flair_group_id: 43,
          },
        ],
      },
      {
        id: 315,
        title: "Tools for Asus Gaming Laptops on Linux",
        fancy_title: "Tools for Asus Gaming Laptops on Linux",
        slug: "tools-for-asus-gaming-laptops-on-linux",
        posts_count: 1,
        reply_count: 0,
        highest_post_number: 1,
        image_url:
          "https://forum.lugvitc.org/uploads/default/original/1X/bfb30ef4e3b64e69de310c920a8c21b5f2234ae7.png",
        created_at: "2023-10-23T11:03:12.486Z",
        last_posted_at: "2023-10-23T11:03:14.004Z",
        bumped: true,
        bumped_at: "2023-10-23T11:03:14.004Z",
        archetype: "regular",
        unseen: false,
        pinned: false,
        unpinned: null,
        visible: true,
        closed: false,
        archived: false,
        bookmarked: null,
        liked: null,
        tags: [],
        tags_descriptions: {},
        views: 10,
        like_count: 2,
        has_summary: false,
        last_poster_username: "Slipstream",
        category_id: 10,
        pinned_globally: false,
        featured_link: null,
        posters: [
          {
            extras: "latest single",
            description: "Original Poster, Most Recent Poster",
            user_id: 5,
            primary_group_id: 43,
            flair_group_id: 43,
          },
        ],
      },
    ],
  },
};

// console.log(data.users);
// data.users.map((name,username)=>{
//   console.log(name+'   ---   '+username);
// })

// data.users.map((user) => {
//   console.log("Username:", user.username);
//   console.log("Name:", user.name);
//   console.log("\n");
// });

// // data.topic_list.map((topic) => {
// //   console.log(topic);
// // });

// console.log();

// data.topic_list.topics.map((topic)=>{
//   console.log(topic.id)
// })


// data.users.forEach(user => {
//   console.log("Username:", user.username);
//   console.log("Name:", user.name);
//   console.log("\n");
// });

// // Loop through the topics and print the desired properties
// data.topic_list.topics.forEach(topic => {
//   console.log("ID:", topic.id);
//   console.log("Title:", topic.title);
//   console.log("Views:", topic.views);
//   console.log("Like Count:", topic.like_count);
//   console.log("Created At:", topic.created_at);
//   console.log("Slug:", topic.slug);
//   console.log("\n");
// });

// data.topic_list.topics.forEach(topic => {
//   const user = data.users.find(user => user.id === topic.posters[0].user_id);
//   if (user) {
//     console.log("Username:", user.username);
//     console.log("Name:", user.name);
//     console.log("Views:", topic.views);
//     console.log("title:", topic.title);
//     console.log("Like Count:", topic.like_count);
//     console.log("Created At:", topic.created_at);
//     console.log("Slug:", topic.slug);
//     // console.log("User ID:", topic.posters[0].user_id);
//     console.log("\n");
//   }
// });
