const blogPostTitles = [
  {
    title: "Mastering the Art of Ramen: A Beginner's Guide",
    published_on: "2023-01-15T09:00:00Z",
  },
  {
    title: "How to Survive Your First Job After College",
    published_on: "2023-02-10T10:00:00Z",
  },
  {
    title: "10 Ways to Decorate Your First Apartment on a Budget",
    published_on: "2023-03-05T11:00:00Z",
  },
  {
    title: "The Ultimate Travel Guide for Broke College Students",
    published_on: "2023-04-20T12:00:00Z",
  },
  {
    title: "Why You Should Start Investing in Your 20s",
    published_on: "2023-05-15T13:00:00Z",
  },
  {
    title: "Funny Memes Only 20-Year-Olds Will Understand",
    published_on: "2023-06-10T14:00:00Z",
  },
  {
    title: "Top 10 Netflix Shows to Binge-Watch This Weekend",
    published_on: "2023-07-05T15:00:00Z",
  },
  {
    title: "How to Make Friends in a New City",
    published_on: "2023-08-01T16:00:00Z",
  },
  {
    title: "Funny Things Only College Students Do",
    published_on: "2023-09-10T17:00:00Z",
  },
  {
    title: "5 Ways to Manage Stress During Finals Week",
    published_on: "2023-10-05T18:00:00Z",
  },
  {
    title: "The Funniest TikToks of 2023",
    published_on: "2023-11-01T19:00:00Z",
  },
  {
    title: "How to Balance Work, School, and Social Life",
    published_on: "2023-12-01T20:00:00Z",
  },
  {
    title: "The Best Side Hustles for College Students",
    published_on: "2024-01-15T21:00:00Z",
  },
  {
    title: "Healthy Eating on a College Budget",
    published_on: "2024-02-10T22:00:00Z",
  },
  {
    title: "How to Ace Your Next Job Interview",
    published_on: "2024-03-05T23:00:00Z",
  },
  {
    title: "10 Tips for Effective Time Management",
    published_on: "2024-04-01T09:00:00Z",
  },
  {
    title: "How to Start a Blog in 2024",
    published_on: "2024-04-15T10:00:00Z",
  },
  {
    title: "The Best Apps for College Students",
    published_on: "2024-05-10T11:00:00Z",
  },
  { title: "How to Stay Fit in College", published_on: "2024-06-05T12:00:00Z" },
  {
    title: "How to Plan the Perfect Road Trip",
    published_on: "2024-07-01T13:00:00Z",
  },
  { title: "Funny Things People Google", published_on: "2024-08-01T14:00:00Z" },
  {
    title: "Top 10 Ways to Stay Motivated in College",
    published_on: "2024-09-05T15:00:00Z",
  },
  {
    title: "How to Create a Study Schedule",
    published_on: "2024-10-01T16:00:00Z",
  },
  {
    title: "The Best Music Playlists for Studying",
    published_on: "2024-11-05T17:00:00Z",
  },
  {
    title: "How to Save Money as a College Student",
    published_on: "2024-12-01T18:00:00Z",
  },
  {
    title: "The Best Podcasts for College Students",
    published_on: "2025-01-01T19:00:00Z",
  },
  {
    title: "How to Build a Personal Brand on Social Media",
    published_on: "2025-02-01T20:00:00Z",
  },
  {
    title: "The Best Budget-Friendly Travel Destinations for Students",
    published_on: "2025-03-01T21:00:00Z",
  },
  {
    title: "Tips for Balancing School, Work, and Social Life",
    published_on: "2025-04-01T22:00:00Z",
  },
  {
    title: "The Ultimate Guide to College Meal Prep",
    published_on: "2025-05-01T23:00:00Z",
  },
  {
    title: "Top 10 Books Every 20-Year-Old Should Read",
    published_on: "2025-06-01T09:00:00Z",
  },
  {
    title: "How to Start a Side Hustle While in College",
    published_on: "2025-07-01T10:00:00Z",
  },
  {
    title: "The Benefits of Learning a Second Language",
    published_on: "2025-08-01T11:00:00Z",
  },
  { title: "How to Network Like a Pro", published_on: "2025-09-01T12:00:00Z" },
  {
    title: "The Best Study Tips for College Students",
    published_on: "2025-10-01T13:00:00Z",
  },
  {
    title: "How to Land Your Dream Internship",
    published_on: "2025-11-01T14:00:00Z",
  },
  {
    title: "How to Create a Budget and Stick to It",
    published_on: "2025-12-01T15:00:00Z",
  },
  {
    title: "The Best Tips for Living with Roommates",
    published_on: "2026-01-01T16:00:00Z",
  },
  {
    title: "How to Stay Productive During Winter Break",
    published_on: "2026-02-01T17:00:00Z",
  },
  {
    title: "Funny College Moments You Can't Forget",
    published_on: "2026-03-01T18:00:00Z",
  },
  {
    title: "How to Handle Peer Pressure in College",
    published_on: "2026-04-01T19:00:00Z",
  },
  {
    title: "The Best Resume Tips for College Students",
    published_on: "2026-05-01T20:00:00Z",
  },
  {
    title: "How to Stay Healthy During Finals Week",
    published_on: "2026-06-01T21:00:00Z",
  },
  {
    title: "The Ultimate Guide to College Dorm Life",
    published_on: "2026-07-01T22:00:00Z",
  },
  {
    title: "How to Avoid Procrastination in College",
    published_on: "2026-08-01T23:00:00Z",
  },
  {
    title: "The Best College Apps You Need to Download",
    published_on: "2026-09-01T09:00:00Z",
  },
  {
    title: "How to Balance a Part-Time Job and School",
    published_on: "2026-10-01T10:00:00Z",
  },
  {
    title: "Top 10 Places to Study on Campus",
    published_on: "2026-11-01T11:00:00Z",
  },
  {
    title: "How to Prepare for Graduate School",
    published_on: "2026-12-01T12:00:00Z",
  },
];
function findTitlesPublishedOn(date, blogPostTitles) {
  //It should return all blog posts titles that were published on a specified date using binary search

  blogPostTitles.sort(
    (a, b) => new Date(a.published_on) - new Date(b.published_on)
  );

  const targetDate = new Date(date).toISOString().split("T")[0];

  let left = 0;
  let right = blogPostTitles.length - 1;
  let firstIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midDate = new Date(blogPostTitles[mid].published_on)
      .toISOString()
      .split("T")[0];

    if (midDate === targetDate) {
      firstIndex = mid;
      right = mid - 1; // Continue searching in the left half
    } else if (midDate < targetDate) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  const result = [];
  if (firstIndex !== -1) {
    for (let i = firstIndex; i < blogPostTitles.length; i++) {
      const currentDate = new Date(blogPostTitles[i].published_on)
        .toISOString()
        .split("T")[0];
      if (currentDate === targetDate) {
        result.push(blogPostTitles[i].title);
      } else {
        break;
      }
    }
  }

  return result;
}

const date = "2023-01-15";
console.log(findTitlesPublishedOn(date, blogPostTitles));
